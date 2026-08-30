import { t as e } from "./utils-CVzxZnoI.js";
import * as t from "react";
import { useEffect as n, useLayoutEffect as r } from "react";
import * as i from "react-dom";
import a from "react-dom";
import { Fragment as o, jsx as s, jsxs as c } from "react/jsx-runtime";
typeof window < "u" && window.document && window.document.createElement;
function l(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return function(r) {
		if (e?.(r), n === !1 || !r.defaultPrevented) return t?.(r);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.2_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
function u(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function d(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = u(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : u(e[t], null);
			}
		};
	};
}
function f(...e) {
	return t.useCallback(d(...e), e);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-context@1.1.2_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-context/dist/index.mjs
function p(e, n = []) {
	let r = [];
	function i(n, i) {
		let a = t.createContext(i), o = r.length;
		r = [...r, i];
		let c = (n) => {
			let { scope: r, children: i, ...c } = n, l = r?.[e]?.[o] || a, u = t.useMemo(() => c, Object.values(c));
			return /* @__PURE__ */ s(l.Provider, {
				value: u,
				children: i
			});
		};
		c.displayName = n + "Provider";
		function l(r, s) {
			let c = s?.[e]?.[o] || a, l = t.useContext(c);
			if (l) return l;
			if (i !== void 0) return i;
			throw Error(`\`${r}\` must be used within \`${n}\``);
		}
		return [c, l];
	}
	let a = () => {
		let n = r.map((e) => t.createContext(e));
		return function(r) {
			let i = r?.[e] || n;
			return t.useMemo(() => ({ [`__scope${e}`]: {
				...r,
				[e]: i
			} }), [r, i]);
		};
	};
	return a.scopeName = e, [i, m(a, ...n)];
}
function m(...e) {
	let n = e[0];
	if (e.length === 1) return n;
	let r = () => {
		let r = e.map((e) => ({
			useScope: e(),
			scopeName: e.scopeName
		}));
		return function(e) {
			let i = r.reduce((t, { useScope: n, scopeName: r }) => {
				let i = n(e)[`__scope${r}`];
				return {
					...t,
					...i
				};
			}, {});
			return t.useMemo(() => ({ [`__scope${n.scopeName}`]: i }), [i]);
		};
	};
	return r.scopeName = n.scopeName, r;
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-slot@1.2.3_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-slot/dist/index.mjs
// @__NO_SIDE_EFFECTS__
function h(e) {
	let n = /* @__PURE__ */ _(e), r = t.forwardRef((e, r) => {
		let { children: i, ...a } = e, o = t.Children.toArray(i), c = o.find(b);
		if (c) {
			let e = c.props.children, i = o.map((n) => n === c ? t.Children.count(e) > 1 ? t.Children.only(null) : t.isValidElement(e) ? e.props.children : null : n);
			return /* @__PURE__ */ s(n, {
				...a,
				ref: r,
				children: t.isValidElement(e) ? t.cloneElement(e, void 0, i) : null
			});
		}
		return /* @__PURE__ */ s(n, {
			...a,
			ref: r,
			children: i
		});
	});
	return r.displayName = `${e}.Slot`, r;
}
var g = /* @__PURE__ */ h("Slot");
// @__NO_SIDE_EFFECTS__
function _(e) {
	let n = t.forwardRef((e, n) => {
		let { children: r, ...i } = e;
		if (t.isValidElement(r)) {
			let e = S(r), a = x(i, r.props);
			return r.type !== t.Fragment && (a.ref = n ? d(n, e) : e), t.cloneElement(r, a);
		}
		return t.Children.count(r) > 1 ? t.Children.only(null) : null;
	});
	return n.displayName = `${e}.SlotClone`, n;
}
var v = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function y(e) {
	let t = ({ children: e }) => /* @__PURE__ */ s(o, { children: e });
	return t.displayName = `${e}.Slottable`, t.__radixId = v, t;
}
function b(e) {
	return t.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === v;
}
function x(e, t) {
	let n = { ...t };
	for (let r in t) {
		let i = e[r], a = t[r];
		/^on[A-Z]/.test(r) ? i && a ? n[r] = (...e) => {
			let t = a(...e);
			return i(...e), t;
		} : i && (n[r] = i) : r === "style" ? n[r] = {
			...i,
			...a
		} : r === "className" && (n[r] = [i, a].filter(Boolean).join(" "));
	}
	return {
		...e,
		...n
	};
}
function S(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-primitive@2.1.3_@types+react-dom@18.3.1_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-primitive/dist/index.mjs
var C = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((e, n) => {
	let r = /* @__PURE__ */ h(`Primitive.${n}`), i = t.forwardRef((e, t) => {
		let { asChild: i, ...a } = e, o = i ? r : n;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ s(o, {
			...a,
			ref: t
		});
	});
	return i.displayName = `Primitive.${n}`, {
		...e,
		[n]: i
	};
}, {});
function w(e, t) {
	e && i.flushSync(() => e.dispatchEvent(t));
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.1_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
function T(e) {
	let n = t.useRef(e);
	return t.useEffect(() => {
		n.current = e;
	}), t.useMemo(() => (...e) => n.current?.(...e), []);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-escape-keydown@1.1.1_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
function E(e, n = globalThis?.document) {
	let r = T(e);
	t.useEffect(() => {
		let e = (e) => {
			e.key === "Escape" && r(e);
		};
		return n.addEventListener("keydown", e, { capture: !0 }), () => n.removeEventListener("keydown", e, { capture: !0 });
	}, [r, n]);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.1.11_@types+react-dom@18.3.1_@types+react@18.3.18_r_1a66cbccf1f1ad5632e26da06aa2c05c/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var D = "DismissableLayer", O = "dismissableLayer.update", k = "dismissableLayer.pointerDownOutside", A = "dismissableLayer.focusOutside", j, M = t.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set()
}), N = t.forwardRef((e, n) => {
	let { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: i, onPointerDownOutside: a, onFocusOutside: o, onInteractOutside: c, onDismiss: u, ...d } = e, p = t.useContext(M), [m, h] = t.useState(null), g = m?.ownerDocument ?? globalThis?.document, [, _] = t.useState({}), v = f(n, (e) => h(e)), y = Array.from(p.layers), [b] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1), x = y.indexOf(b), S = m ? y.indexOf(m) : -1, w = p.layersWithOutsidePointerEventsDisabled.size > 0, T = S >= x, D = te((e) => {
		let t = e.target, n = [...p.branches].some((e) => e.contains(t));
		!T || n || (a?.(e), c?.(e), e.defaultPrevented || u?.());
	}, g), k = ne((e) => {
		let t = e.target;
		[...p.branches].some((e) => e.contains(t)) || (o?.(e), c?.(e), e.defaultPrevented || u?.());
	}, g);
	return E((e) => {
		S === p.layers.size - 1 && (i?.(e), !e.defaultPrevented && u && (e.preventDefault(), u()));
	}, g), t.useEffect(() => {
		if (m) return r && (p.layersWithOutsidePointerEventsDisabled.size === 0 && (j = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), p.layersWithOutsidePointerEventsDisabled.add(m)), p.layers.add(m), F(), () => {
			r && p.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = j);
		};
	}, [
		m,
		g,
		r,
		p
	]), t.useEffect(() => () => {
		m && (p.layers.delete(m), p.layersWithOutsidePointerEventsDisabled.delete(m), F());
	}, [m, p]), t.useEffect(() => {
		let e = () => _({});
		return document.addEventListener(O, e), () => document.removeEventListener(O, e);
	}, []), /* @__PURE__ */ s(C.div, {
		...d,
		ref: v,
		style: {
			pointerEvents: w ? T ? "auto" : "none" : void 0,
			...e.style
		},
		onFocusCapture: l(e.onFocusCapture, k.onFocusCapture),
		onBlurCapture: l(e.onBlurCapture, k.onBlurCapture),
		onPointerDownCapture: l(e.onPointerDownCapture, D.onPointerDownCapture)
	});
});
N.displayName = D;
var P = "DismissableLayerBranch", ee = t.forwardRef((e, n) => {
	let r = t.useContext(M), i = t.useRef(null), a = f(n, i);
	return t.useEffect(() => {
		let e = i.current;
		if (e) return r.branches.add(e), () => {
			r.branches.delete(e);
		};
	}, [r.branches]), /* @__PURE__ */ s(C.div, {
		...e,
		ref: a
	});
});
ee.displayName = P;
function te(e, n = globalThis?.document) {
	let r = T(e), i = t.useRef(!1), a = t.useRef(() => {});
	return t.useEffect(() => {
		let e = (e) => {
			if (e.target && !i.current) {
				let t = function() {
					I(k, r, i, { discrete: !0 });
				}, i = { originalEvent: e };
				e.pointerType === "touch" ? (n.removeEventListener("click", a.current), a.current = t, n.addEventListener("click", a.current, { once: !0 })) : t();
			} else n.removeEventListener("click", a.current);
			i.current = !1;
		}, t = window.setTimeout(() => {
			n.addEventListener("pointerdown", e);
		}, 0);
		return () => {
			window.clearTimeout(t), n.removeEventListener("pointerdown", e), n.removeEventListener("click", a.current);
		};
	}, [n, r]), { onPointerDownCapture: () => i.current = !0 };
}
function ne(e, n = globalThis?.document) {
	let r = T(e), i = t.useRef(!1);
	return t.useEffect(() => {
		let e = (e) => {
			e.target && !i.current && I(A, r, { originalEvent: e }, { discrete: !1 });
		};
		return n.addEventListener("focusin", e), () => n.removeEventListener("focusin", e);
	}, [n, r]), {
		onFocusCapture: () => i.current = !0,
		onBlurCapture: () => i.current = !1
	};
}
function F() {
	let e = new CustomEvent(O);
	document.dispatchEvent(e);
}
function I(e, t, n, { discrete: r }) {
	let i = n.originalEvent.target, a = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? w(i, a) : i.dispatchEvent(a);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.1_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var L = globalThis?.document ? t.useLayoutEffect : () => {}, re = t.useId || (() => void 0), ie = 0;
function ae(e) {
	let [n, r] = t.useState(re());
	return L(() => {
		e || r((e) => e ?? String(ie++));
	}, [e]), e || (n ? `radix-${n}` : "");
}
//#endregion
//#region ../../node_modules/.pnpm/@floating-ui+utils@0.2.10/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var oe = [
	"top",
	"right",
	"bottom",
	"left"
], R = Math.min, z = Math.max, se = Math.round, ce = Math.floor, B = (e) => ({
	x: e,
	y: e
}), le = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
}, ue = {
	start: "end",
	end: "start"
};
function de(e, t, n) {
	return z(e, R(t, n));
}
function V(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function H(e) {
	return e.split("-")[0];
}
function U(e) {
	return e.split("-")[1];
}
function fe(e) {
	return e === "x" ? "y" : "x";
}
function pe(e) {
	return e === "y" ? "height" : "width";
}
var me = /*#__PURE__*/ new Set(["top", "bottom"]);
function W(e) {
	return me.has(H(e)) ? "y" : "x";
}
function he(e) {
	return fe(W(e));
}
function ge(e, t, n) {
	n === void 0 && (n = !1);
	let r = U(e), i = he(e), a = pe(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = Te(o)), [o, Te(o)];
}
function _e(e) {
	let t = Te(e);
	return [
		ve(e),
		t,
		ve(t)
	];
}
function ve(e) {
	return e.replace(/start|end/g, (e) => ue[e]);
}
var ye = ["left", "right"], be = ["right", "left"], xe = ["top", "bottom"], Se = ["bottom", "top"];
function Ce(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? be : ye : t ? ye : be;
		case "left":
		case "right": return t ? xe : Se;
		default: return [];
	}
}
function we(e, t, n, r) {
	let i = U(e), a = Ce(H(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(ve)))), a;
}
function Te(e) {
	return e.replace(/left|right|bottom|top/g, (e) => le[e]);
}
function Ee(e) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...e
	};
}
function De(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : Ee(e);
}
function Oe(e) {
	let { x: t, y: n, width: r, height: i } = e;
	return {
		width: r,
		height: i,
		top: n,
		left: t,
		right: t + r,
		bottom: n + i,
		x: t,
		y: n
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@floating-ui+core@1.7.4/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function ke(e, t, n) {
	let { reference: r, floating: i } = e, a = W(t), o = he(t), s = pe(o), c = H(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
	switch (c) {
		case "top":
			p = {
				x: u,
				y: r.y - i.height
			};
			break;
		case "bottom":
			p = {
				x: u,
				y: r.y + r.height
			};
			break;
		case "right":
			p = {
				x: r.x + r.width,
				y: d
			};
			break;
		case "left":
			p = {
				x: r.x - i.width,
				y: d
			};
			break;
		default: p = {
			x: r.x,
			y: r.y
		};
	}
	switch (U(t)) {
		case "start":
			p[o] -= f * (n && l ? -1 : 1);
			break;
		case "end": p[o] += f * (n && l ? -1 : 1);
	}
	return p;
}
async function Ae(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = V(t, e), p = De(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = Oe(await i.getClippingRect({
		element: await (i.isElement == null ? void 0 : i.isElement(m)) ?? !0 ? m : m.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(o.floating)),
		boundary: c,
		rootBoundary: l,
		strategy: s
	})), g = u === "floating" ? {
		x: n,
		y: r,
		width: a.floating.width,
		height: a.floating.height
	} : a.reference, _ = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(o.floating)), v = await (i.isElement == null ? void 0 : i.isElement(_)) && await (i.getScale == null ? void 0 : i.getScale(_)) || {
		x: 1,
		y: 1
	}, y = Oe(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: o,
		rect: g,
		offsetParent: _,
		strategy: s
	}) : g);
	return {
		top: (h.top - y.top + p.top) / v.y,
		bottom: (y.bottom - h.bottom + p.bottom) / v.y,
		left: (h.left - y.left + p.left) / v.x,
		right: (y.right - h.right + p.right) / v.x
	};
}
var je = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = a.filter(Boolean), c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = ke(l, r, c), f = r, p = {}, m = 0;
	for (let n = 0; n < s.length; n++) {
		let { name: a, fn: h } = s[n], { x: g, y: _, data: v, reset: y } = await h({
			x: u,
			y: d,
			initialPlacement: r,
			placement: f,
			strategy: i,
			middlewareData: p,
			rects: l,
			platform: {
				...o,
				detectOverflow: o.detectOverflow ?? Ae
			},
			elements: {
				reference: e,
				floating: t
			}
		});
		u = g ?? u, d = _ ?? d, p = {
			...p,
			[a]: {
				...p[a],
				...v
			}
		}, y && m <= 50 && (m++, typeof y == "object" && (y.placement && (f = y.placement), y.rects && (l = y.rects === !0 ? await o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}) : y.rects), {x: u, y: d} = ke(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: p
	};
}, Me = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = V(e, t) || {};
		if (l == null) return {};
		let d = De(u), f = {
			x: n,
			y: r
		}, p = he(i), m = pe(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = R(d[_], T), D = R(d[v], T), O = E, k = C - h[m] - D, A = C / 2 - h[m] / 2 + w, j = de(O, A, k), M = !c.arrow && U(i) != null && A !== j && a.reference[m] / 2 - (A < O ? E : D) - h[m] / 2 < 0, N = M ? A < O ? A - O : A - k : 0;
		return {
			[p]: f[p] + N,
			data: {
				[p]: j,
				centerOffset: A - j - N,
				...M && { alignmentOffset: N }
			},
			reset: M
		};
	}
}), Ne = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = V(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = H(r), _ = W(o), v = H(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [Te(o)] : _e(o)), x = p !== "none";
			!d && x && b.push(...we(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = ge(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (u !== "alignment" || _ === W(t) || T.every((e) => W(e.placement) !== _ || e.overflows[0] > 0))) return {
					data: {
						index: e,
						overflows: T
					},
					reset: { placement: t }
				};
				let n = T.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]?.placement;
				if (!n) switch (f) {
					case "bestFit": {
						let e = T.filter((e) => {
							if (x) {
								let t = W(e.placement);
								return t === _ || t === "y";
							}
							return !0;
						}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]?.[0];
						e && (n = e);
						break;
					}
					case "initialPlacement": n = o;
				}
				if (r !== n) return { reset: { placement: n } };
			}
			return {};
		}
	};
};
function Pe(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function Fe(e) {
	return oe.some((t) => e[t] >= 0);
}
var Ie = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = V(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = Pe(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: Fe(e)
					} };
				}
				case "escaped": {
					let e = Pe(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: Fe(e)
					} };
				}
				default: return {};
			}
		}
	};
}, Le = /*#__PURE__*/ new Set(["left", "top"]);
async function Re(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = H(n), s = U(n), c = W(n) === "y", l = Le.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = V(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
		mainAxis: d,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: d.mainAxis || 0,
		crossAxis: d.crossAxis || 0,
		alignmentAxis: d.alignmentAxis
	};
	return s && typeof m == "number" && (p = s === "end" ? m * -1 : m), c ? {
		x: p * u,
		y: f * l
	} : {
		x: f * l,
		y: p * u
	};
}
var ze = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await Re(t, e);
			return a === o.offset?.placement && (n = o.arrow) != null && n.alignmentOffset ? {} : {
				x: r + s.x,
				y: i + s.y,
				data: {
					...s,
					placement: a
				}
			};
		}
	};
}, Be = function(e) {
	return e === void 0 && (e = {}), {
		name: "shift",
		options: e,
		async fn(t) {
			let { x: n, y: r, placement: i, platform: a } = t, { mainAxis: o = !0, crossAxis: s = !1, limiter: c = { fn: (e) => {
				let { x: t, y: n } = e;
				return {
					x: t,
					y: n
				};
			} }, ...l } = V(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = W(H(i)), p = fe(f), m = u[p], h = u[f];
			if (o) {
				let e = p === "y" ? "top" : "left", t = p === "y" ? "bottom" : "right", n = m + d[e], r = m - d[t];
				m = de(n, m, r);
			}
			if (s) {
				let e = f === "y" ? "top" : "left", t = f === "y" ? "bottom" : "right", n = h + d[e], r = h - d[t];
				h = de(n, h, r);
			}
			let g = c.fn({
				...t,
				[p]: m,
				[f]: h
			});
			return {
				...g,
				data: {
					x: g.x - n,
					y: g.y - r,
					enabled: {
						[p]: o,
						[f]: s
					}
				}
			};
		}
	};
}, Ve = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = V(e, t), u = {
				x: n,
				y: r
			}, d = W(i), f = fe(d), p = u[f], m = u[d], h = V(s, t), g = typeof h == "number" ? {
				mainAxis: h,
				crossAxis: 0
			} : {
				mainAxis: 0,
				crossAxis: 0,
				...h
			};
			if (c) {
				let e = f === "y" ? "height" : "width", t = a.reference[f] - a.floating[e] + g.mainAxis, n = a.reference[f] + a.reference[e] - g.mainAxis;
				p < t ? p = t : p > n && (p = n);
			}
			if (l) {
				let e = f === "y" ? "width" : "height", t = Le.has(H(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, He = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			var n, r;
			let { placement: i, rects: a, platform: o, elements: s } = t, { apply: c = () => {}, ...l } = V(e, t), u = await o.detectOverflow(t, l), d = H(i), f = U(i), p = W(i) === "y", { width: m, height: h } = a.floating, g, _;
			d === "top" || d === "bottom" ? (g = d, _ = f === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (_ = d, g = f === "end" ? "top" : "bottom");
			let v = h - u.top - u.bottom, y = m - u.left - u.right, b = R(h - u[g], v), x = R(m - u[_], y), S = !t.middlewareData.shift, C = b, w = x;
			if ((n = t.middlewareData.shift) != null && n.enabled.x && (w = y), (r = t.middlewareData.shift) != null && r.enabled.y && (C = v), S && !f) {
				let e = z(u.left, 0), t = z(u.right, 0), n = z(u.top, 0), r = z(u.bottom, 0);
				p ? w = m - 2 * (e !== 0 || t !== 0 ? e + t : z(u.left, u.right)) : C = h - 2 * (n !== 0 || r !== 0 ? n + r : z(u.top, u.bottom));
			}
			await c({
				...t,
				availableWidth: w,
				availableHeight: C
			});
			let T = await o.getDimensions(s.floating);
			return m !== T.width || h !== T.height ? { reset: { rects: !0 } } : {};
		}
	};
};
//#endregion
//#region ../../node_modules/.pnpm/@floating-ui+utils@0.2.10/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function Ue() {
	return typeof window < "u";
}
function G(e) {
	return We(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function K(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function q(e) {
	return ((We(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function We(e) {
	return Ue() ? e instanceof Node || e instanceof K(e).Node : !1;
}
function J(e) {
	return Ue() ? e instanceof Element || e instanceof K(e).Element : !1;
}
function Y(e) {
	return Ue() ? e instanceof HTMLElement || e instanceof K(e).HTMLElement : !1;
}
function Ge(e) {
	return !Ue() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof K(e).ShadowRoot;
}
var Ke = /*#__PURE__*/ new Set(["inline", "contents"]);
function qe(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = Z(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Ke.has(i);
}
var Je = /*#__PURE__*/ new Set([
	"table",
	"td",
	"th"
]);
function Ye(e) {
	return Je.has(G(e));
}
var Xe = [":popover-open", ":modal"];
function Ze(e) {
	return Xe.some((t) => {
		try {
			return e.matches(t);
		} catch {
			return !1;
		}
	});
}
var Qe = [
	"transform",
	"translate",
	"scale",
	"rotate",
	"perspective"
], $e = [
	"transform",
	"translate",
	"scale",
	"rotate",
	"perspective",
	"filter"
], et = [
	"paint",
	"layout",
	"strict",
	"content"
];
function tt(e) {
	let t = rt(), n = J(e) ? Z(e) : e;
	return Qe.some((e) => n[e] ? n[e] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || $e.some((e) => (n.willChange || "").includes(e)) || et.some((e) => (n.contain || "").includes(e));
}
function nt(e) {
	let t = Q(e);
	for (; Y(t) && !X(t);) {
		if (tt(t)) return t;
		if (Ze(t)) return null;
		t = Q(t);
	}
	return null;
}
function rt() {
	return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
var it = /*#__PURE__*/ new Set([
	"html",
	"body",
	"#document"
]);
function X(e) {
	return it.has(G(e));
}
function Z(e) {
	return K(e).getComputedStyle(e);
}
function at(e) {
	return J(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function Q(e) {
	if (G(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || Ge(e) && e.host || q(e);
	return Ge(t) ? t.host : t;
}
function ot(e) {
	let t = Q(e);
	return X(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Y(t) && qe(t) ? t : ot(t);
}
function st(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = ot(e), i = r === e.ownerDocument?.body, a = K(r);
	if (i) {
		let e = ct(a);
		return t.concat(a, a.visualViewport || [], qe(r) ? r : [], e && n ? st(e) : []);
	}
	return t.concat(r, st(r, [], n));
}
function ct(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region ../../node_modules/.pnpm/@floating-ui+dom@1.7.4/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function lt(e) {
	let t = Z(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = Y(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = se(n) !== a || se(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function ut(e) {
	return J(e) ? e : e.contextElement;
}
function dt(e) {
	let t = ut(e);
	if (!Y(t)) return B(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = lt(t), o = (a ? se(n.width) : n.width) / r, s = (a ? se(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var ft = /*#__PURE__*/ B(0);
function pt(e) {
	let t = K(e);
	return !rt() || !t.visualViewport ? ft : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function mt(e, t, n) {
	return t === void 0 && (t = !1), !n || t && n !== K(e) ? !1 : t;
}
function $(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = ut(e), o = B(1);
	t && (r ? J(r) && (o = dt(r)) : o = dt(e));
	let s = mt(a, n, r) ? pt(a) : B(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a) {
		let e = K(a), t = r && J(r) ? K(r) : r, n = e, i = ct(n);
		for (; i && r && t !== n;) {
			let e = dt(i), t = i.getBoundingClientRect(), r = Z(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = K(i), i = ct(n);
		}
	}
	return Oe({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function ht(e, t) {
	let n = at(e).scrollLeft;
	return t ? t.left + n : $(q(e)).left + n;
}
function gt(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - ht(e, n),
		y: n.top + t.scrollTop
	};
}
function _t(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = q(r), s = t ? Ze(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = B(1), u = B(0), d = Y(r);
	if ((d || !d && !a) && ((G(r) !== "body" || qe(o)) && (c = at(r)), Y(r))) {
		let e = $(r);
		l = dt(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? gt(o, c) : B(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function vt(e) {
	return Array.from(e.getClientRects());
}
function yt(e) {
	let t = q(e), n = at(e), r = e.ownerDocument.body, i = z(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = z(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight), o = -n.scrollLeft + ht(e), s = -n.scrollTop;
	return Z(r).direction === "rtl" && (o += z(t.clientWidth, r.clientWidth) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
var bt = 25;
function xt(e, t) {
	let n = K(e), r = q(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		let e = rt();
		(!e || e && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	let l = ht(r);
	if (l <= 0) {
		let e = r.ownerDocument, t = e.body, n = getComputedStyle(t), i = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, o = Math.abs(r.clientWidth - t.clientWidth - i);
		o <= bt && (a -= o);
	} else l <= bt && (a += l);
	return {
		width: a,
		height: o,
		x: s,
		y: c
	};
}
var St = /*#__PURE__*/ new Set(["absolute", "fixed"]);
function Ct(e, t) {
	let n = $(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = Y(e) ? dt(e) : B(1);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function wt(e, t, n) {
	let r;
	if (t === "viewport") r = xt(e, n);
	else if (t === "document") r = yt(q(e));
	else if (J(t)) r = Ct(t, n);
	else {
		let n = pt(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return Oe(r);
}
function Tt(e, t) {
	let n = Q(e);
	return n === t || !J(n) || X(n) ? !1 : Z(n).position === "fixed" || Tt(n, t);
}
function Et(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = st(e, [], !1).filter((e) => J(e) && G(e) !== "body"), i = null, a = Z(e).position === "fixed", o = a ? Q(e) : e;
	for (; J(o) && !X(o);) {
		let t = Z(o), n = tt(o);
		!n && t.position === "fixed" && (i = null), (a ? !n && !i : !n && t.position === "static" && i && St.has(i.position) || qe(o) && !n && Tt(e, o)) ? r = r.filter((e) => e !== o) : i = t, o = Q(o);
	}
	return t.set(e, r), r;
}
function Dt(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? Ze(t) ? [] : Et(t, this._c) : [].concat(n), r], o = a[0], s = a.reduce((e, n) => {
		let r = wt(t, n, i);
		return e.top = z(r.top, e.top), e.right = R(r.right, e.right), e.bottom = R(r.bottom, e.bottom), e.left = z(r.left, e.left), e;
	}, wt(t, o, i));
	return {
		width: s.right - s.left,
		height: s.bottom - s.top,
		x: s.left,
		y: s.top
	};
}
function Ot(e) {
	let { width: t, height: n } = lt(e);
	return {
		width: t,
		height: n
	};
}
function kt(e, t, n) {
	let r = Y(t), i = q(t), a = n === "fixed", o = $(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = B(0);
	function l() {
		c.x = ht(i);
	}
	if (r || !r && !a) {
		if ((G(t) !== "body" || qe(i)) && (s = at(t)), r) {
			let e = $(t, !0, a, t);
			c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
		} else i && l();
	}
	a && !r && i && l();
	let u = i && !r && !a ? gt(i, s) : B(0);
	return {
		x: o.left + s.scrollLeft - c.x - u.x,
		y: o.top + s.scrollTop - c.y - u.y,
		width: o.width,
		height: o.height
	};
}
function At(e) {
	return Z(e).position === "static";
}
function jt(e, t) {
	if (!Y(e) || Z(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return q(e) === n && (n = n.ownerDocument.body), n;
}
function Mt(e, t) {
	let n = K(e);
	if (Ze(e)) return n;
	if (!Y(e)) {
		let t = Q(e);
		for (; t && !X(t);) {
			if (J(t) && !At(t)) return t;
			t = Q(t);
		}
		return n;
	}
	let r = jt(e, t);
	for (; r && Ye(r) && At(r);) r = jt(r, t);
	return r && X(r) && At(r) && !tt(r) ? n : r || nt(e) || n;
}
var Nt = async function(e) {
	let t = this.getOffsetParent || Mt, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: kt(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function Pt(e) {
	return Z(e).direction === "rtl";
}
var Ft = {
	convertOffsetParentRelativeRectToViewportRelativeRect: _t,
	getDocumentElement: q,
	getClippingRect: Dt,
	getOffsetParent: Mt,
	getElementRects: Nt,
	getClientRects: vt,
	getDimensions: Ot,
	getScale: dt,
	isElement: J,
	isRTL: Pt
};
function It(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Lt(e, t) {
	let n = null, r, i = q(e);
	function a() {
		var e;
		clearTimeout(r), (e = n) == null || e.disconnect(), n = null;
	}
	function o(s, c) {
		s === void 0 && (s = !1), c === void 0 && (c = 1), a();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (s || t(), !f || !p) return;
		let m = ce(d), h = ce(i.clientWidth - (u + f)), g = ce(i.clientHeight - (d + p)), _ = ce(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: z(0, R(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (n !== c) {
				if (!y) return o();
				n ? o(!1, n) : r = setTimeout(() => {
					o(!1, 1e-7);
				}, 1e3);
			}
			n === 1 && !It(l, e.getBoundingClientRect()) && o(), y = !1;
		}
		try {
			n = new IntersectionObserver(b, {
				...v,
				root: i.ownerDocument
			});
		} catch {
			n = new IntersectionObserver(b, v);
		}
		n.observe(e);
	}
	return o(!0), a;
}
function Rt(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = ut(e), u = i || a ? [...l ? st(l) : [], ...st(t)] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n, { passive: !0 }), a && e.addEventListener("resize", n);
	});
	let d = l && s ? Lt(l, n) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), p.observe(t));
	let m, h = c ? $(e) : null;
	c && g();
	function g() {
		let t = $(e);
		h && !It(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var zt = ze, Bt = Be, Vt = Ne, Ht = He, Ut = Ie, Wt = Me, Gt = Ve, Kt = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = {
		platform: Ft,
		...n
	}, a = {
		...i.platform,
		_c: r
	};
	return je(e, t, {
		...i,
		platform: a
	});
}, qt = typeof document < "u" ? r : n;
function Jt(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == "function" && e.toString() === t.toString()) return !0;
	let n, r, i;
	if (e && t && typeof e == "object") {
		if (Array.isArray(e)) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;) if (!Jt(e[r], t[r])) return !1;
			return !0;
		}
		if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
		for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
		for (r = n; r-- !== 0;) {
			let n = i[r];
			if (!(n === "_owner" && e.$$typeof) && !Jt(e[n], t[n])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function Yt(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Xt(e, t) {
	let n = Yt(e);
	return Math.round(t * n) / n;
}
function Zt(e) {
	let n = t.useRef(e);
	return qt(() => {
		n.current = e;
	}), n;
}
function Qt(e) {
	e === void 0 && (e = {});
	let { placement: n = "bottom", strategy: r = "absolute", middleware: a = [], platform: o, elements: { reference: s, floating: c } = {}, transform: l = !0, whileElementsMounted: u, open: d } = e, [f, p] = t.useState({
		x: 0,
		y: 0,
		strategy: r,
		placement: n,
		middlewareData: {},
		isPositioned: !1
	}), [m, h] = t.useState(a);
	Jt(m, a) || h(a);
	let [g, _] = t.useState(null), [v, y] = t.useState(null), b = t.useCallback((e) => {
		e !== w.current && (w.current = e, _(e));
	}, []), x = t.useCallback((e) => {
		e !== T.current && (T.current = e, y(e));
	}, []), S = s || g, C = c || v, w = t.useRef(null), T = t.useRef(null), E = t.useRef(f), D = u != null, O = Zt(u), k = Zt(o), A = Zt(d), j = t.useCallback(() => {
		if (!w.current || !T.current) return;
		let e = {
			placement: n,
			strategy: r,
			middleware: m
		};
		k.current && (e.platform = k.current), Kt(w.current, T.current, e).then((e) => {
			let t = {
				...e,
				isPositioned: A.current !== !1
			};
			M.current && !Jt(E.current, t) && (E.current = t, i.flushSync(() => {
				p(t);
			}));
		});
	}, [
		m,
		n,
		r,
		k,
		A
	]);
	qt(() => {
		d === !1 && E.current.isPositioned && (E.current.isPositioned = !1, p((e) => ({
			...e,
			isPositioned: !1
		})));
	}, [d]);
	let M = t.useRef(!1);
	qt(() => (M.current = !0, () => {
		M.current = !1;
	}), []), qt(() => {
		if (S && (w.current = S), C && (T.current = C), S && C) {
			if (O.current) return O.current(S, C, j);
			j();
		}
	}, [
		S,
		C,
		j,
		O,
		D
	]);
	let N = t.useMemo(() => ({
		reference: w,
		floating: T,
		setReference: b,
		setFloating: x
	}), [b, x]), P = t.useMemo(() => ({
		reference: S,
		floating: C
	}), [S, C]), ee = t.useMemo(() => {
		let e = {
			position: r,
			left: 0,
			top: 0
		};
		if (!P.floating) return e;
		let t = Xt(P.floating, f.x), n = Xt(P.floating, f.y);
		return l ? {
			...e,
			transform: "translate(" + t + "px, " + n + "px)",
			...Yt(P.floating) >= 1.5 && { willChange: "transform" }
		} : {
			position: r,
			left: t,
			top: n
		};
	}, [
		r,
		l,
		P.floating,
		f.x,
		f.y
	]);
	return t.useMemo(() => ({
		...f,
		update: j,
		refs: N,
		elements: P,
		floatingStyles: ee
	}), [
		f,
		j,
		N,
		P,
		ee
	]);
}
var $t = (e) => {
	function t(e) {
		return {}.hasOwnProperty.call(e, "current");
	}
	return {
		name: "arrow",
		options: e,
		fn(n) {
			let { element: r, padding: i } = typeof e == "function" ? e(n) : e;
			return r && t(r) ? r.current == null ? {} : Wt({
				element: r.current,
				padding: i
			}).fn(n) : r ? Wt({
				element: r,
				padding: i
			}).fn(n) : {};
		}
	};
}, en = (e, t) => ({
	...zt(e),
	options: [e, t]
}), tn = (e, t) => ({
	...Bt(e),
	options: [e, t]
}), nn = (e, t) => ({
	...Gt(e),
	options: [e, t]
}), rn = (e, t) => ({
	...Vt(e),
	options: [e, t]
}), an = (e, t) => ({
	...Ht(e),
	options: [e, t]
}), on = (e, t) => ({
	...Ut(e),
	options: [e, t]
}), sn = (e, t) => ({
	...$t(e),
	options: [e, t]
}), cn = "Arrow", ln = t.forwardRef((e, t) => {
	let { children: n, width: r = 10, height: i = 5, ...a } = e;
	return /* @__PURE__ */ s(C.svg, {
		...a,
		ref: t,
		width: r,
		height: i,
		viewBox: "0 0 30 10",
		preserveAspectRatio: "none",
		children: e.asChild ? n : /* @__PURE__ */ s("polygon", { points: "0,0 30,0 15,10" })
	});
});
ln.displayName = cn;
var un = ln;
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-size@1.1.1_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-use-size/dist/index.mjs
function dn(e) {
	let [n, r] = t.useState(void 0);
	return L(() => {
		if (e) {
			r({
				width: e.offsetWidth,
				height: e.offsetHeight
			});
			let t = new ResizeObserver((t) => {
				if (!Array.isArray(t) || !t.length) return;
				let n = t[0], i, a;
				if ("borderBoxSize" in n) {
					let e = n.borderBoxSize, t = Array.isArray(e) ? e[0] : e;
					i = t.inlineSize, a = t.blockSize;
				} else i = e.offsetWidth, a = e.offsetHeight;
				r({
					width: i,
					height: a
				});
			});
			return t.observe(e, { box: "border-box" }), () => t.unobserve(e);
		}
		r(void 0);
	}, [e]), n;
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-popper@1.2.8_@types+react-dom@18.3.1_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-popper/dist/index.mjs
var fn = "Popper", [pn, mn] = p(fn), [hn, gn] = pn(fn), _n = (e) => {
	let { __scopePopper: n, children: r } = e, [i, a] = t.useState(null);
	return /* @__PURE__ */ s(hn, {
		scope: n,
		anchor: i,
		onAnchorChange: a,
		children: r
	});
};
_n.displayName = fn;
var vn = "PopperAnchor", yn = t.forwardRef((e, n) => {
	let { __scopePopper: r, virtualRef: i, ...a } = e, o = gn(vn, r), c = t.useRef(null), l = f(n, c), u = t.useRef(null);
	return t.useEffect(() => {
		let e = u.current;
		u.current = i?.current || c.current, e !== u.current && o.onAnchorChange(u.current);
	}), i ? null : /* @__PURE__ */ s(C.div, {
		...a,
		ref: l
	});
});
yn.displayName = vn;
var bn = "PopperContent", [xn, Sn] = pn(bn), Cn = t.forwardRef((e, n) => {
	let { __scopePopper: r, side: i = "bottom", sideOffset: a = 0, align: o = "center", alignOffset: c = 0, arrowPadding: l = 0, avoidCollisions: u = !0, collisionBoundary: d = [], collisionPadding: p = 0, sticky: m = "partial", hideWhenDetached: h = !1, updatePositionStrategy: g = "optimized", onPlaced: _, ...v } = e, y = gn(bn, r), [b, x] = t.useState(null), S = f(n, (e) => x(e)), [w, E] = t.useState(null), D = dn(w), O = D?.width ?? 0, k = D?.height ?? 0, A = i + (o === "center" ? "" : "-" + o), j = typeof p == "number" ? p : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...p
	}, M = Array.isArray(d) ? d : [d], N = M.length > 0, P = {
		padding: j,
		boundary: M.filter(Dn),
		altBoundary: N
	}, { refs: ee, floatingStyles: te, placement: ne, isPositioned: F, middlewareData: I } = Qt({
		strategy: "fixed",
		placement: A,
		whileElementsMounted: (...e) => Rt(...e, { animationFrame: g === "always" }),
		elements: { reference: y.anchor },
		middleware: [
			en({
				mainAxis: a + k,
				alignmentAxis: c
			}),
			u && tn({
				mainAxis: !0,
				crossAxis: !1,
				limiter: m === "partial" ? nn() : void 0,
				...P
			}),
			u && rn({ ...P }),
			an({
				...P,
				apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
					let { width: i, height: a } = t.reference, o = e.floating.style;
					o.setProperty("--radix-popper-available-width", `${n}px`), o.setProperty("--radix-popper-available-height", `${r}px`), o.setProperty("--radix-popper-anchor-width", `${i}px`), o.setProperty("--radix-popper-anchor-height", `${a}px`);
				}
			}),
			w && sn({
				element: w,
				padding: l
			}),
			On({
				arrowWidth: O,
				arrowHeight: k
			}),
			h && on({
				strategy: "referenceHidden",
				...P
			})
		]
	}), [re, ie] = kn(ne), ae = T(_);
	L(() => {
		F && ae?.();
	}, [F, ae]);
	let oe = I.arrow?.x, R = I.arrow?.y, z = I.arrow?.centerOffset !== 0, [se, ce] = t.useState();
	return L(() => {
		b && ce(window.getComputedStyle(b).zIndex);
	}, [b]), /* @__PURE__ */ s("div", {
		ref: ee.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...te,
			transform: F ? te.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: se,
			"--radix-popper-transform-origin": [I.transformOrigin?.x, I.transformOrigin?.y].join(" "),
			...I.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: e.dir,
		children: /* @__PURE__ */ s(xn, {
			scope: r,
			placedSide: re,
			onArrowChange: E,
			arrowX: oe,
			arrowY: R,
			shouldHideArrow: z,
			children: /* @__PURE__ */ s(C.div, {
				"data-side": re,
				"data-align": ie,
				...v,
				ref: S,
				style: {
					...v.style,
					animation: F ? void 0 : "none"
				}
			})
		})
	});
});
Cn.displayName = bn;
var wn = "PopperArrow", Tn = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, En = t.forwardRef(function(e, t) {
	let { __scopePopper: n, ...r } = e, i = Sn(wn, n), a = Tn[i.placedSide];
	return /* @__PURE__ */ s("span", {
		ref: i.onArrowChange,
		style: {
			position: "absolute",
			left: i.arrowX,
			top: i.arrowY,
			[a]: 0,
			transformOrigin: {
				top: "",
				right: "0 0",
				bottom: "center 0",
				left: "100% 0"
			}[i.placedSide],
			transform: {
				top: "translateY(100%)",
				right: "translateY(50%) rotate(90deg) translateX(-50%)",
				bottom: "rotate(180deg)",
				left: "translateY(50%) rotate(-90deg) translateX(50%)"
			}[i.placedSide],
			visibility: i.shouldHideArrow ? "hidden" : void 0
		},
		children: /* @__PURE__ */ s(un, {
			...r,
			ref: t,
			style: {
				...r.style,
				display: "block"
			}
		})
	});
});
En.displayName = wn;
function Dn(e) {
	return e !== null;
}
var On = (e) => ({
	name: "transformOrigin",
	options: e,
	fn(t) {
		let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = kn(n), u = {
			start: "0%",
			center: "50%",
			end: "100%"
		}[l], d = (i.arrow?.x ?? 0) + o / 2, f = (i.arrow?.y ?? 0) + s / 2, p = "", m = "";
		return c === "bottom" ? (p = a ? u : `${d}px`, m = `${-s}px`) : c === "top" ? (p = a ? u : `${d}px`, m = `${r.floating.height + s}px`) : c === "right" ? (p = `${-s}px`, m = a ? u : `${f}px`) : c === "left" && (p = `${r.floating.width + s}px`, m = a ? u : `${f}px`), { data: {
			x: p,
			y: m
		} };
	}
});
function kn(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
var An = _n, jn = yn, Mn = Cn, Nn = En, Pn = "Portal", Fn = t.forwardRef((e, n) => {
	let { container: r, ...i } = e, [o, c] = t.useState(!1);
	L(() => c(!0), []);
	let l = r || o && globalThis?.document?.body;
	return l ? a.createPortal(/* @__PURE__ */ s(C.div, {
		...i,
		ref: n
	}), l) : null;
});
Fn.displayName = Pn;
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-presence@1.1.5_@types+react-dom@18.3.1_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-presence/dist/index.mjs
function In(e, n) {
	return t.useReducer((e, t) => n[e][t] ?? e, e);
}
var Ln = (e) => {
	let { present: n, children: r } = e, i = Rn(n), a = typeof r == "function" ? r({ present: i.isPresent }) : t.Children.only(r), o = f(i.ref, Bn(a));
	return typeof r == "function" || i.isPresent ? t.cloneElement(a, { ref: o }) : null;
};
Ln.displayName = "Presence";
function Rn(e) {
	let [n, r] = t.useState(), i = t.useRef(null), a = t.useRef(e), o = t.useRef("none"), [s, c] = In(e ? "mounted" : "unmounted", {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	});
	return t.useEffect(() => {
		let e = zn(i.current);
		o.current = s === "mounted" ? e : "none";
	}, [s]), L(() => {
		let t = i.current, n = a.current;
		if (n !== e) {
			let r = o.current, i = zn(t);
			e ? c("MOUNT") : i === "none" || t?.display === "none" ? c("UNMOUNT") : c(n && r !== i ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e;
		}
	}, [e, c]), L(() => {
		if (n) {
			let e, t = n.ownerDocument.defaultView ?? window, r = (r) => {
				let o = zn(i.current).includes(CSS.escape(r.animationName));
				if (r.target === n && o && (c("ANIMATION_END"), !a.current)) {
					let r = n.style.animationFillMode;
					n.style.animationFillMode = "forwards", e = t.setTimeout(() => {
						n.style.animationFillMode === "forwards" && (n.style.animationFillMode = r);
					});
				}
			}, s = (e) => {
				e.target === n && (o.current = zn(i.current));
			};
			return n.addEventListener("animationstart", s), n.addEventListener("animationcancel", r), n.addEventListener("animationend", r), () => {
				t.clearTimeout(e), n.removeEventListener("animationstart", s), n.removeEventListener("animationcancel", r), n.removeEventListener("animationend", r);
			};
		}
		c("ANIMATION_END");
	}, [n, c]), {
		isPresent: ["mounted", "unmountSuspended"].includes(s),
		ref: t.useCallback((e) => {
			i.current = e ? getComputedStyle(e) : null, r(e);
		}, [])
	};
}
function zn(e) {
	return e?.animationName || "none";
}
function Bn(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.2.2_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var Vn = t.useInsertionEffect || L;
function Hn({ prop: e, defaultProp: n, onChange: r = () => {}, caller: i }) {
	let [a, o, s] = Un({
		defaultProp: n,
		onChange: r
	}), c = e !== void 0, l = c ? e : a;
	{
		let n = t.useRef(e !== void 0);
		t.useEffect(() => {
			let e = n.current;
			e !== c && console.warn(`${i} is changing from ${e ? "controlled" : "uncontrolled"} to ${c ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`), n.current = c;
		}, [c, i]);
	}
	return [l, t.useCallback((t) => {
		if (c) {
			let n = Wn(t) ? t(e) : t;
			n !== e && s.current?.(n);
		} else o(t);
	}, [
		c,
		e,
		o,
		s
	])];
}
function Un({ defaultProp: e, onChange: n }) {
	let [r, i] = t.useState(e), a = t.useRef(r), o = t.useRef(n);
	return Vn(() => {
		o.current = n;
	}, [n]), t.useEffect(() => {
		a.current !== r && (o.current?.(r), a.current = r);
	}, [r, a]), [
		r,
		i,
		o
	];
}
function Wn(e) {
	return typeof e == "function";
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-visually-hidden@1.2.3_@types+react-dom@18.3.1_@types+react@18.3.18_reac_9b3a251cf3aa6057114b082cfda77e0b/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var Gn = Object.freeze({
	position: "absolute",
	border: 0,
	width: 1,
	height: 1,
	padding: 0,
	margin: -1,
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	wordWrap: "normal"
}), Kn = "VisuallyHidden", qn = t.forwardRef((e, t) => /* @__PURE__ */ s(C.span, {
	...e,
	ref: t,
	style: {
		...Gn,
		...e.style
	}
}));
qn.displayName = Kn;
var Jn = qn, [Yn, Xn] = p("Tooltip", [mn]), Zn = mn(), Qn = "TooltipProvider", $n = 700, er = "tooltip.open", [tr, nr] = Yn(Qn), rr = (e) => {
	let { __scopeTooltip: n, delayDuration: r = $n, skipDelayDuration: i = 300, disableHoverableContent: a = !1, children: o } = e, c = t.useRef(!0), l = t.useRef(!1), u = t.useRef(0);
	return t.useEffect(() => {
		let e = u.current;
		return () => window.clearTimeout(e);
	}, []), /* @__PURE__ */ s(tr, {
		scope: n,
		isOpenDelayedRef: c,
		delayDuration: r,
		onOpen: t.useCallback(() => {
			window.clearTimeout(u.current), c.current = !1;
		}, []),
		onClose: t.useCallback(() => {
			window.clearTimeout(u.current), u.current = window.setTimeout(() => c.current = !0, i);
		}, [i]),
		isPointerInTransitRef: l,
		onPointerInTransitChange: t.useCallback((e) => {
			l.current = e;
		}, []),
		disableHoverableContent: a,
		children: o
	});
};
rr.displayName = Qn;
var ir = "Tooltip", [ar, or] = Yn(ir), sr = (e) => {
	let { __scopeTooltip: n, children: r, open: i, defaultOpen: a, onOpenChange: o, disableHoverableContent: c, delayDuration: l } = e, u = nr(ir, e.__scopeTooltip), d = Zn(n), [f, p] = t.useState(null), m = ae(), h = t.useRef(0), g = c ?? u.disableHoverableContent, _ = l ?? u.delayDuration, v = t.useRef(!1), [y, b] = Hn({
		prop: i,
		defaultProp: a ?? !1,
		onChange: (e) => {
			e ? (u.onOpen(), document.dispatchEvent(new CustomEvent(er))) : u.onClose(), o?.(e);
		},
		caller: ir
	}), x = t.useMemo(() => y ? v.current ? "delayed-open" : "instant-open" : "closed", [y]), S = t.useCallback(() => {
		window.clearTimeout(h.current), h.current = 0, v.current = !1, b(!0);
	}, [b]), C = t.useCallback(() => {
		window.clearTimeout(h.current), h.current = 0, b(!1);
	}, [b]), w = t.useCallback(() => {
		window.clearTimeout(h.current), h.current = window.setTimeout(() => {
			v.current = !0, b(!0), h.current = 0;
		}, _);
	}, [_, b]);
	return t.useEffect(() => () => {
		h.current &&= (window.clearTimeout(h.current), 0);
	}, []), /* @__PURE__ */ s(An, {
		...d,
		children: /* @__PURE__ */ s(ar, {
			scope: n,
			contentId: m,
			open: y,
			stateAttribute: x,
			trigger: f,
			onTriggerChange: p,
			onTriggerEnter: t.useCallback(() => {
				u.isOpenDelayedRef.current ? w() : S();
			}, [
				u.isOpenDelayedRef,
				w,
				S
			]),
			onTriggerLeave: t.useCallback(() => {
				g ? C() : (window.clearTimeout(h.current), h.current = 0);
			}, [C, g]),
			onOpen: S,
			onClose: C,
			disableHoverableContent: g,
			children: r
		})
	});
};
sr.displayName = ir;
var cr = "TooltipTrigger", lr = t.forwardRef((e, n) => {
	let { __scopeTooltip: r, ...i } = e, a = or(cr, r), o = nr(cr, r), c = Zn(r), u = f(n, t.useRef(null), a.onTriggerChange), d = t.useRef(!1), p = t.useRef(!1), m = t.useCallback(() => d.current = !1, []);
	return t.useEffect(() => () => document.removeEventListener("pointerup", m), [m]), /* @__PURE__ */ s(jn, {
		asChild: !0,
		...c,
		children: /* @__PURE__ */ s(C.button, {
			"aria-describedby": a.open ? a.contentId : void 0,
			"data-state": a.stateAttribute,
			...i,
			ref: u,
			onPointerMove: l(e.onPointerMove, (e) => {
				e.pointerType !== "touch" && !p.current && !o.isPointerInTransitRef.current && (a.onTriggerEnter(), p.current = !0);
			}),
			onPointerLeave: l(e.onPointerLeave, () => {
				a.onTriggerLeave(), p.current = !1;
			}),
			onPointerDown: l(e.onPointerDown, () => {
				a.open && a.onClose(), d.current = !0, document.addEventListener("pointerup", m, { once: !0 });
			}),
			onFocus: l(e.onFocus, () => {
				d.current || a.onOpen();
			}),
			onBlur: l(e.onBlur, a.onClose),
			onClick: l(e.onClick, a.onClose)
		})
	});
});
lr.displayName = cr;
var ur = "TooltipPortal", [dr, fr] = Yn(ur, { forceMount: void 0 }), pr = (e) => {
	let { __scopeTooltip: t, forceMount: n, children: r, container: i } = e, a = or(ur, t);
	return /* @__PURE__ */ s(dr, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ s(Ln, {
			present: n || a.open,
			children: /* @__PURE__ */ s(Fn, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
pr.displayName = ur;
var mr = "TooltipContent", hr = t.forwardRef((e, t) => {
	let n = fr(mr, e.__scopeTooltip), { forceMount: r = n.forceMount, side: i = "top", ...a } = e, o = or(mr, e.__scopeTooltip);
	return /* @__PURE__ */ s(Ln, {
		present: r || o.open,
		children: o.disableHoverableContent ? /* @__PURE__ */ s(br, {
			side: i,
			...a,
			ref: t
		}) : /* @__PURE__ */ s(gr, {
			side: i,
			...a,
			ref: t
		})
	});
}), gr = t.forwardRef((e, n) => {
	let r = or(mr, e.__scopeTooltip), i = nr(mr, e.__scopeTooltip), a = t.useRef(null), o = f(n, a), [c, l] = t.useState(null), { trigger: u, onClose: d } = r, p = a.current, { onPointerInTransitChange: m } = i, h = t.useCallback(() => {
		l(null), m(!1);
	}, [m]), g = t.useCallback((e, t) => {
		let n = e.currentTarget, r = {
			x: e.clientX,
			y: e.clientY
		}, i = wr(r, Cr(r, n.getBoundingClientRect())), a = Tr(t.getBoundingClientRect()), o = Dr([...i, ...a]);
		l(o), m(!0);
	}, [m]);
	return t.useEffect(() => () => h(), [h]), t.useEffect(() => {
		if (u && p) {
			let e = (e) => g(e, p), t = (e) => g(e, u);
			return u.addEventListener("pointerleave", e), p.addEventListener("pointerleave", t), () => {
				u.removeEventListener("pointerleave", e), p.removeEventListener("pointerleave", t);
			};
		}
	}, [
		u,
		p,
		g,
		h
	]), t.useEffect(() => {
		if (c) {
			let e = (e) => {
				let t = e.target, n = {
					x: e.clientX,
					y: e.clientY
				}, r = u?.contains(t) || p?.contains(t), i = !Er(n, c);
				r ? h() : i && (h(), d());
			};
			return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e);
		}
	}, [
		u,
		p,
		c,
		d,
		h
	]), /* @__PURE__ */ s(br, {
		...e,
		ref: o
	});
}), [_r, vr] = Yn(ir, { isInside: !1 }), yr = /* @__PURE__ */ y("TooltipContent"), br = t.forwardRef((e, n) => {
	let { __scopeTooltip: r, children: i, "aria-label": a, onEscapeKeyDown: o, onPointerDownOutside: l, ...u } = e, d = or(mr, r), f = Zn(r), { onClose: p } = d;
	return t.useEffect(() => (document.addEventListener(er, p), () => document.removeEventListener(er, p)), [p]), t.useEffect(() => {
		if (d.trigger) {
			let e = (e) => {
				e.target?.contains(d.trigger) && p();
			};
			return window.addEventListener("scroll", e, { capture: !0 }), () => window.removeEventListener("scroll", e, { capture: !0 });
		}
	}, [d.trigger, p]), /* @__PURE__ */ s(N, {
		asChild: !0,
		disableOutsidePointerEvents: !1,
		onEscapeKeyDown: o,
		onPointerDownOutside: l,
		onFocusOutside: (e) => e.preventDefault(),
		onDismiss: p,
		children: /* @__PURE__ */ c(Mn, {
			"data-state": d.stateAttribute,
			...f,
			...u,
			ref: n,
			style: {
				...u.style,
				"--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
				"--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
				"--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
				"--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
				"--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
			},
			children: [/* @__PURE__ */ s(yr, { children: i }), /* @__PURE__ */ s(_r, {
				scope: r,
				isInside: !0,
				children: /* @__PURE__ */ s(Jn, {
					id: d.contentId,
					role: "tooltip",
					children: a || i
				})
			})]
		})
	});
});
hr.displayName = mr;
var xr = "TooltipArrow", Sr = t.forwardRef((e, t) => {
	let { __scopeTooltip: n, ...r } = e, i = Zn(n);
	return vr(xr, n).isInside ? null : /* @__PURE__ */ s(Nn, {
		...i,
		...r,
		ref: t
	});
});
Sr.displayName = xr;
function Cr(e, t) {
	let n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), i = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
	switch (Math.min(n, r, i, a)) {
		case a: return "left";
		case i: return "right";
		case n: return "top";
		case r: return "bottom";
		default: throw Error("unreachable");
	}
}
function wr(e, t, n = 5) {
	let r = [];
	switch (t) {
		case "top":
			r.push({
				x: e.x - n,
				y: e.y + n
			}, {
				x: e.x + n,
				y: e.y + n
			});
			break;
		case "bottom":
			r.push({
				x: e.x - n,
				y: e.y - n
			}, {
				x: e.x + n,
				y: e.y - n
			});
			break;
		case "left":
			r.push({
				x: e.x + n,
				y: e.y - n
			}, {
				x: e.x + n,
				y: e.y + n
			});
			break;
		case "right": r.push({
			x: e.x - n,
			y: e.y - n
		}, {
			x: e.x - n,
			y: e.y + n
		});
	}
	return r;
}
function Tr(e) {
	let { top: t, right: n, bottom: r, left: i } = e;
	return [
		{
			x: i,
			y: t
		},
		{
			x: n,
			y: t
		},
		{
			x: n,
			y: r
		},
		{
			x: i,
			y: r
		}
	];
}
function Er(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
function Dr(e) {
	let t = e.slice();
	return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : +(e.y > t.y)), Or(t);
}
function Or(e) {
	if (e.length <= 1) return e.slice();
	let t = [];
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (; t.length >= 2;) {
			let e = t[t.length - 1], n = t[t.length - 2];
			if ((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x)) t.pop();
			else break;
		}
		t.push(r);
	}
	t.pop();
	let n = [];
	for (let t = e.length - 1; t >= 0; t--) {
		let r = e[t];
		for (; n.length >= 2;) {
			let e = n[n.length - 1], t = n[n.length - 2];
			if ((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x)) n.pop();
			else break;
		}
		n.push(r);
	}
	return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var kr = rr, Ar = sr, jr = lr, Mr = pr, Nr = hr, Pr = kr, Fr = Ar, Ir = jr, Lr = t.forwardRef(({ className: t, sideOffset: n = 4, ...r }, i) => /* @__PURE__ */ s(Mr, { children: /* @__PURE__ */ s(Nr, {
	ref: i,
	sideOffset: n,
	className: e("z-50 overflow-hidden rounded bg-f1-background border border-solid border-f1-border-secondary dark px-2 py-1.5 leading-tight text-f1-foreground-inverse animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[side=bottom]:origin-top data-[side=top]:origin-bottom data-[side=left]:origin-right data-[side=right]:origin-left", "break-words", t),
	...r
}) }));
Lr.displayName = Nr.displayName;
//#endregion
export { g as A, Rt as C, T as D, N as E, l as F, p as M, d as N, C as O, f as P, Qt as S, L as T, on as _, Gn as a, tn as b, Fn as c, Mn as d, An as f, rn as g, sn as h, Ir as i, h as j, w as k, jn as l, dn as m, Lr as n, Hn as o, mn as p, Pr as r, Ln as s, Fr as t, Nn as u, nn as v, ae as w, an as x, en as y };
