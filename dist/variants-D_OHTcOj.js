import { a as e, n as t, o as n, r, t as i } from "./rolldown-runtime-CEFd7nDs.js";
import { t as a } from "./dist-CqnuTXEz.js";
import { t as o } from "./component-Lhh_08kH.js";
import { d as s, g as c, h as l } from "./OneEllipsis-DuhKMtYp.js";
import { t as u } from "./utils-CVzxZnoI.js";
import { i as d, n as f, r as p, t as m } from "./tooltip-BPSwDQpD.js";
import { t as h } from "./i18n-provider-defaults-CtgNC2Z7.js";
import * as g from "react";
import _, { Children as v, Component as y, Fragment as b, cloneElement as x, createContext as S, createElement as C, forwardRef as w, isValidElement as T, memo as ee, useCallback as te, useContext as E, useEffect as D, useId as ne, useInsertionEffect as re, useLayoutEffect as ie, useMemo as O, useRef as k, useState as ae } from "react";
import { Fragment as oe, jsx as A, jsxs as se } from "react/jsx-runtime";
//#region src/lib/experimental.ts
var j = {}, ce = (e, t) => {
	let n = [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)];
	for (let r of n) if (r !== "prototype" && r !== "length" && r !== "name" && r !== "$$typeof" && r !== "render") try {
		let n = Object.getOwnPropertyDescriptor(e, r);
		n && Object.defineProperty(t, r, n);
	} catch {}
}, le = (e, t) => {
	let n = () => {
		Object.entries(j).forEach(([e, t]) => {
			let n = t.uses - t.usesReported;
			n > 0 && (console.warn(`🚧 The \x1b[1m${e}\x1b[0m component is experimental. Use it at your own risk.`, `Found ${t.uses} uses. ${t.usesReported === -1 ? "" : `New uses found since last report: ${n}`}`), j[e] = {
				...t,
				usesReported: t.uses
			});
		});
	}, r = null, i = () => {
		if (!r) return r = setTimeout(() => {
			n();
		}, 5e3), () => {
			r && clearTimeout(r);
		};
	};
	if (t.$$typeof === Symbol.for("react.forward_ref")) {
		let n = t.render, r = w((t, r) => (l() && (i(), j[e] || (j[e] = {
			uses: 0,
			usesReported: -1
		}), j[e] = {
			...j[e],
			uses: (j[e]?.uses ?? 0) + 1
		}), n(t, r)));
		return ce(t, r), r.displayName ||= `Experimental(${e})`, r;
	}
	if (t.$$typeof === Symbol.for("react.memo")) {
		let n = t.type, r = t.compare, a = (t) => (l() && (i(), j[e] || (j[e] = {
			uses: 0,
			usesReported: -1
		}), j[e] = {
			...j[e],
			uses: (j[e]?.uses ?? 0) + 1
		}), n(t));
		a.displayName = `Experimental(${e})`, ce(t, a);
		let o = ee(a, r);
		return ce(t, o), o;
	}
	let a = ((...n) => (l() && (i(), j[e] || (j[e] = {
		uses: 0,
		usesReported: -1
	}), j[e] = {
		...j[e],
		uses: (j[e]?.uses ?? 0) + 1
	}), t(...n)));
	return ce(t, a), a;
}, ue = S({});
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/utils/use-constant.mjs
function de(e) {
	let t = k(null);
	return t.current === null && (t.current = e()), t.current;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/utils/is-browser.mjs
var fe = typeof window < "u", pe = fe ? ie : D, me = /* @__PURE__ */ S(null), he = S({
	transformPagePoint: (e) => e,
	isStatic: !1,
	reducedMotion: "never"
});
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/is-object.mjs
function ge(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/utils/is-html-element.mjs
function _e(e) {
	return ge(e) && "offsetHeight" in e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
var ve = class extends g.Component {
	getSnapshotBeforeUpdate(e) {
		let t = this.props.childRef.current;
		if (t && e.isPresent && !this.props.isPresent) {
			let e = t.offsetParent, n = _e(e) && e.offsetWidth || 0, r = this.props.sizeRef.current;
			r.height = t.offsetHeight || 0, r.width = t.offsetWidth || 0, r.top = t.offsetTop, r.left = t.offsetLeft, r.right = n - r.width - r.left;
		}
		return null;
	}
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
};
function ye({ children: e, isPresent: t, anchorX: n }) {
	let r = ne(), i = k(null), a = k({
		width: 0,
		height: 0,
		top: 0,
		left: 0,
		right: 0
	}), { nonce: o } = E(he);
	return re(() => {
		let { width: e, height: s, top: c, left: l, right: u } = a.current;
		if (t || !i.current || !e || !s) return;
		let d = n === "left" ? `left: ${l}` : `right: ${u}`;
		i.current.dataset.motionPopId = r;
		let f = document.createElement("style");
		return o && (f.nonce = o), document.head.appendChild(f), f.sheet && f.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${s}px !important;
            ${d}px !important;
            top: ${c}px !important;
          }
        `), () => {
			document.head.contains(f) && document.head.removeChild(f);
		};
	}, [t]), A(ve, {
		isPresent: t,
		childRef: i,
		sizeRef: a,
		children: g.cloneElement(e, { ref: i })
	});
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var be = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: a, mode: o, anchorX: s }) => {
	let c = de(xe), l = ne(), u = !0, d = O(() => (u = !1, {
		id: l,
		initial: t,
		isPresent: n,
		custom: i,
		onExitComplete: (e) => {
			c.set(e, !0);
			for (let e of c.values()) if (!e) return;
			r && r();
		},
		register: (e) => (c.set(e, !1), () => c.delete(e))
	}), [
		n,
		c,
		r
	]);
	return a && u && (d = { ...d }), O(() => {
		c.forEach((e, t) => c.set(t, !1));
	}, [n]), g.useEffect(() => {
		!n && !c.size && r && r();
	}, [n]), o === "popLayout" && (e = A(ye, {
		isPresent: n,
		anchorX: s,
		children: e
	})), A(me.Provider, {
		value: d,
		children: e
	});
};
function xe() {
	return /* @__PURE__ */ new Map();
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
function Se(e = !0) {
	let t = E(me);
	if (t === null) return [!0, null];
	let { isPresent: n, onExitComplete: r, register: i } = t, a = ne();
	D(() => {
		if (e) return i(a);
	}, [e]);
	let o = te(() => e && r && r(a), [
		a,
		r,
		e
	]);
	return !n && r ? [!1, o] : [!0];
}
function Ce() {
	return we(E(me));
}
function we(e) {
	return e === null || e.isPresent;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/utils.mjs
var Te = (e) => e.key || "";
function Ee(e) {
	let t = [];
	return v.forEach(e, (e) => {
		T(e) && t.push(e);
	}), t;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.mjs
var De = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: i = !0, mode: a = "sync", propagate: o = !1, anchorX: s = "left" }) => {
	let [c, l] = Se(o), u = O(() => Ee(e), [e]), d = o && !c ? [] : u.map(Te), f = k(!0), p = k(u), m = de(() => /* @__PURE__ */ new Map()), [h, g] = ae(u), [_, v] = ae(u);
	pe(() => {
		f.current = !1, p.current = u;
		for (let e = 0; e < _.length; e++) {
			let t = Te(_[e]);
			d.includes(t) ? m.delete(t) : m.get(t) !== !0 && m.set(t, !1);
		}
	}, [
		_,
		d.length,
		d.join("-")
	]);
	let y = [];
	if (u !== h) {
		let e = [...u];
		for (let t = 0; t < _.length; t++) {
			let n = _[t], r = Te(n);
			d.includes(r) || (e.splice(t, 0, n), y.push(n));
		}
		return a === "wait" && y.length && (e = y), v(Ee(e)), g(u), null;
	}
	process.env.NODE_ENV !== "production" && a === "wait" && _.length > 1 && console.warn("You're attempting to animate multiple children within AnimatePresence, but its mode is set to \"wait\". This will lead to odd visual behaviour.");
	let { forceRender: b } = E(ue);
	return A(oe, { children: _.map((e) => {
		let h = Te(e), g = o && !c ? !1 : u === _ || d.includes(h);
		return A(be, {
			isPresent: g,
			initial: !f.current || n ? void 0 : !1,
			custom: t,
			presenceAffectsLayout: i,
			mode: a,
			onExitComplete: g ? void 0 : () => {
				if (m.has(h)) m.set(h, !0);
				else return;
				let e = !0;
				m.forEach((t) => {
					t || (e = !1);
				}), e && (b?.(), v(p.current), o && l?.(), r && r());
			},
			anchorX: s,
			children: e
		}, h);
	}) });
}, Oe = [
	"setup",
	"read",
	"resolveKeyframes",
	"preUpdate",
	"update",
	"preRender",
	"render",
	"postRender"
], M = {
	value: null,
	addProjectionMetrics: null
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/frameloop/render-step.mjs
function ke(e, t) {
	let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), i = !1, a = !1, o = /* @__PURE__ */ new WeakSet(), s = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, c = 0;
	function l(t) {
		o.has(t) && (u.schedule(t), e()), c++, t(s);
	}
	let u = {
		schedule: (e, t = !1, a = !1) => {
			let s = a && i ? n : r;
			return t && o.add(e), s.has(e) || s.add(e), e;
		},
		cancel: (e) => {
			r.delete(e), o.delete(e);
		},
		process: (e) => {
			if (s = e, i) {
				a = !0;
				return;
			}
			i = !0, [n, r] = [r, n], n.forEach(l), t && M.value && M.value.frameloop[t].push(c), c = 0, n.clear(), i = !1, a && (a = !1, u.process(e));
		}
	};
	return u;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/global-config.mjs
var N = {}, Ae = 40;
function je(e, t) {
	let n = !1, r = !0, i = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, a = () => n = !0, o = Oe.reduce((e, n) => (e[n] = ke(a, t ? n : void 0), e), {}), { setup: s, read: c, resolveKeyframes: l, preUpdate: u, update: d, preRender: f, render: p, postRender: m } = o, h = () => {
		let a = N.useManualTiming ? i.timestamp : performance.now();
		n = !1, N.useManualTiming || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(a - i.timestamp, Ae), 1)), i.timestamp = a, i.isProcessing = !0, s.process(i), c.process(i), l.process(i), u.process(i), d.process(i), f.process(i), p.process(i), m.process(i), i.isProcessing = !1, n && t && (r = !1, e(h));
	}, g = () => {
		n = !0, r = !0, i.isProcessing || e(h);
	};
	return {
		schedule: Oe.reduce((e, t) => {
			let r = o[t];
			return e[t] = (e, t = !1, i = !1) => (n || g(), r.schedule(e, t, i)), e;
		}, {}),
		cancel: (e) => {
			for (let t = 0; t < Oe.length; t++) o[Oe[t]].cancel(e);
		},
		state: i,
		steps: o
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/noop.mjs
var P = /* @__NO_SIDE_EFFECTS__ */ (e) => e, { schedule: F, cancel: I, state: L, steps: Me } = /* @__PURE__ */ je(typeof requestAnimationFrame < "u" ? requestAnimationFrame : P, !0), Ne = S({ strict: !1 }), Pe = {
	animation: [
		"animate",
		"variants",
		"whileHover",
		"whileTap",
		"exit",
		"whileInView",
		"whileFocus",
		"whileDrag"
	],
	exit: ["exit"],
	drag: ["drag", "dragControls"],
	focus: ["whileFocus"],
	hover: [
		"whileHover",
		"onHoverStart",
		"onHoverEnd"
	],
	tap: [
		"whileTap",
		"onTap",
		"onTapStart",
		"onTapCancel"
	],
	pan: [
		"onPan",
		"onPanStart",
		"onPanSessionStart",
		"onPanEnd"
	],
	inView: [
		"whileInView",
		"onViewportEnter",
		"onViewportLeave"
	],
	layout: ["layout", "layoutId"]
}, Fe = {};
for (let e in Pe) Fe[e] = { isEnabled: (t) => Pe[e].some((e) => !!t[e]) };
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/motion/features/load-features.mjs
function Ie(e) {
	for (let t in e) Fe[t] = {
		...Fe[t],
		...e[t]
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/valid-prop.mjs
var Le = /* @__PURE__ */ new Set(/* @__PURE__ */ "animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.ignoreStrict.viewport".split("."));
function Re(e) {
	return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Le.has(e);
}
//#endregion
//#region ../../node_modules/.pnpm/@emotion+memoize@0.9.0/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function ze(e) {
	var t = Object.create(null);
	return function(n) {
		return t[n] === void 0 && (t[n] = e(n)), t[n];
	};
}
var Be = t((() => {})), Ve = /* @__PURE__ */ r({ default: () => Ue }), He, Ue, We = t((() => {
	Be(), He = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ue = /* #__PURE__ */ ze(function(e) {
		return He.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
	});
})), Ge = (e) => !Re(e);
function Ke(e) {
	e && (Ge = (t) => t.startsWith("on") ? !Re(t) : e(t));
}
try {
	Ke((We(), e(Ve)).default);
} catch {}
function qe(e, t, n) {
	let r = {};
	for (let i in e) (i !== "values" || typeof e.values != "object") && (Ge(i) || n === !0 && Re(i) || !t && !Re(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
	return r;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/warn-once.mjs
var Je = /* @__PURE__ */ new Set();
function Ye(e, t, n) {
	e || Je.has(t) || (console.warn(t), n && console.warn(n), Je.add(t));
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/create-proxy.mjs
function Xe(e) {
	if (typeof Proxy > "u") return e;
	let t = /* @__PURE__ */ new Map();
	return new Proxy((...t) => (process.env.NODE_ENV !== "production" && Ye(!1, "motion() is deprecated. Use motion.create() instead."), e(...t)), { get: (n, r) => r === "create" ? e : (t.has(r) || t.set(r, e(r)), t.get(r)) });
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/context/MotionContext/index.mjs
var Ze = /* @__PURE__ */ S({});
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-animation-controls.mjs
function Qe(e) {
	return typeof e == "object" && !!e && typeof e.start == "function";
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/utils/is-variant-label.mjs
function $e(e) {
	return typeof e == "string" || Array.isArray(e);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/utils/variant-props.mjs
var et = [
	"animate",
	"whileInView",
	"whileFocus",
	"whileHover",
	"whileTap",
	"whileDrag",
	"exit"
], tt = ["initial", ...et];
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/utils/is-controlling-variants.mjs
function nt(e) {
	return Qe(e.animate) || tt.some((t) => $e(e[t]));
}
function rt(e) {
	return !!(nt(e) || e.variants);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/context/MotionContext/utils.mjs
function it(e, t) {
	if (nt(e)) {
		let { initial: t, animate: n } = e;
		return {
			initial: t === !1 || $e(t) ? t : void 0,
			animate: $e(n) ? n : void 0
		};
	}
	return e.inherit === !1 ? {} : t;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/context/MotionContext/create.mjs
function at(e) {
	let { initial: t, animate: n } = it(e, E(Ze));
	return O(() => ({
		initial: t,
		animate: n
	}), [ot(t), ot(n)]);
}
function ot(e) {
	return Array.isArray(e) ? e.join(" ") : e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/symbol.mjs
var st = Symbol.for("motionComponentSymbol");
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/utils/is-ref-object.mjs
function ct(e) {
	return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
function lt(e, t, n) {
	return te((r) => {
		r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : ct(n) && (n.current = r));
	}, [t]);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs
var ut = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), dt = "data-" + ut("framerAppearId"), ft = S({}), { schedule: pt, cancel: mt } = /* @__PURE__ */ je(queueMicrotask, !1);
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/use-visual-element.mjs
function ht(e, t, n, r, i) {
	let { visualElement: a } = E(Ze), o = E(Ne), s = E(me), c = E(he).reducedMotion, l = k(null);
	r ||= o.renderer, !l.current && r && (l.current = r(e, {
		visualState: t,
		parent: a,
		props: n,
		presenceContext: s,
		blockInitialAnimation: s ? s.initial === !1 : !1,
		reducedMotionConfig: c
	}));
	let u = l.current, d = E(ft);
	u && !u.projection && i && (u.type === "html" || u.type === "svg") && gt(l.current, n, i, d);
	let f = k(!1);
	re(() => {
		u && f.current && u.update(n, s);
	});
	let p = n[dt], m = k(!!p && !window.MotionHandoffIsComplete?.(p) && window.MotionHasOptimisedAnimation?.(p));
	return pe(() => {
		u && (f.current = !0, window.MotionIsMounted = !0, u.updateFeatures(), pt.render(u.render), m.current && u.animationState && u.animationState.animateChanges());
	}), D(() => {
		u && (!m.current && u.animationState && u.animationState.animateChanges(), m.current &&= (queueMicrotask(() => {
			window.MotionHandoffMarkAsComplete?.(p);
		}), !1));
	}), u;
}
function gt(e, t, n, r) {
	let { layoutId: i, layout: a, drag: o, dragConstraints: s, layoutScroll: c, layoutRoot: l, layoutCrossfade: u } = t;
	e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : _t(e.parent)), e.projection.setOptions({
		layoutId: i,
		layout: a,
		alwaysMeasureLayout: !!o || s && ct(s),
		visualElement: e,
		animationType: typeof a == "string" ? a : "both",
		initialPromotionConfig: r,
		crossfade: u,
		layoutScroll: c,
		layoutRoot: l
	});
}
function _t(e) {
	if (e) return e.options.allowProjection === !1 ? _t(e.parent) : e.projection;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/errors.mjs
var vt = () => {}, R = () => {};
process.env.NODE_ENV !== "production" && (vt = (e, t) => {
	!e && typeof console < "u" && console.warn(t);
}, R = (e, t) => {
	if (!e) throw Error(t);
});
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/motion/index.mjs
function yt({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i }) {
	e && Ie(e);
	function a(a, o) {
		let s, c = {
			...E(he),
			...a,
			layoutId: bt(a)
		}, { isStatic: l } = c, u = at(a), d = r(a, l);
		if (!l && fe) {
			xt(c, e);
			let n = St(c);
			s = n.MeasureLayout, u.visualElement = ht(i, d, c, t, n.ProjectionNode);
		}
		return se(Ze.Provider, {
			value: u,
			children: [s && u.visualElement ? A(s, {
				visualElement: u.visualElement,
				...c
			}) : null, n(i, a, lt(d, u.visualElement, o), d, l, u.visualElement)]
		});
	}
	a.displayName = `motion.${typeof i == "string" ? i : `create(${i.displayName ?? i.name ?? ""})`}`;
	let o = w(a);
	return o[st] = i, o;
}
function bt({ layoutId: e }) {
	let t = E(ue).id;
	return t && e !== void 0 ? t + "-" + e : e;
}
function xt(e, t) {
	let n = E(Ne).strict;
	if (process.env.NODE_ENV !== "production" && t && n) {
		let t = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
		e.ignoreStrict ? vt(!1, t) : R(!1, t);
	}
}
function St(e) {
	let { drag: t, layout: n } = Fe;
	if (!t && !n) return {};
	let r = {
		...t,
		...n
	};
	return {
		MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
		ProjectionNode: r.ProjectionNode
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/utils/is-css-variable.mjs
var Ct = (e) => (t) => typeof t == "string" && t.startsWith(e), wt = /*@__PURE__*/ Ct("--"), Tt = /*@__PURE__*/ Ct("var(--"), Et = (e) => Tt(e) ? Dt.test(e.split("/*")[0].trim()) : !1, Dt = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Ot = {};
function kt(e) {
	for (let t in e) Ot[t] = e[t], wt(t) && (Ot[t].isCSSVariable = !0);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/render/utils/keys-transform.mjs
var At = [
	"transformPerspective",
	"x",
	"y",
	"z",
	"translateX",
	"translateY",
	"translateZ",
	"scale",
	"scaleX",
	"scaleY",
	"rotate",
	"rotateX",
	"rotateY",
	"rotateZ",
	"skew",
	"skewX",
	"skewY"
], jt = /* @__PURE__ */ new Set(At);
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs
function Mt(e, { layout: t, layoutId: n }) {
	return jt.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Ot[e] || e === "opacity");
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/value/types/utils/get-as-type.mjs
var Nt = (e, t) => t && typeof e == "number" ? t.transform(e) : e, z = (e, t, n) => n > t ? t : n < e ? e : n, Pt = {
	test: (e) => typeof e == "number",
	parse: parseFloat,
	transform: (e) => e
}, Ft = {
	...Pt,
	transform: (e) => z(0, 1, e)
}, It = {
	...Pt,
	default: 1
}, Lt = {
	...Pt,
	transform: Math.round
}, Rt = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
	test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
	parse: parseFloat,
	transform: (t) => `${t}${e}`
}), zt = /*@__PURE__*/ Rt("deg"), B = /*@__PURE__*/ Rt("%"), V = /*@__PURE__*/ Rt("px"), Bt = /*@__PURE__*/ Rt("vh"), Vt = /*@__PURE__*/ Rt("vw"), Ht = {
	...B,
	parse: (e) => B.parse(e) / 100,
	transform: (e) => B.transform(e * 100)
}, Ut = {
	borderWidth: V,
	borderTopWidth: V,
	borderRightWidth: V,
	borderBottomWidth: V,
	borderLeftWidth: V,
	borderRadius: V,
	radius: V,
	borderTopLeftRadius: V,
	borderTopRightRadius: V,
	borderBottomRightRadius: V,
	borderBottomLeftRadius: V,
	width: V,
	maxWidth: V,
	height: V,
	maxHeight: V,
	top: V,
	right: V,
	bottom: V,
	left: V,
	padding: V,
	paddingTop: V,
	paddingRight: V,
	paddingBottom: V,
	paddingLeft: V,
	margin: V,
	marginTop: V,
	marginRight: V,
	marginBottom: V,
	marginLeft: V,
	backgroundPositionX: V,
	backgroundPositionY: V,
	rotate: zt,
	rotateX: zt,
	rotateY: zt,
	rotateZ: zt,
	scale: It,
	scaleX: It,
	scaleY: It,
	scaleZ: It,
	skew: zt,
	skewX: zt,
	skewY: zt,
	distance: V,
	translateX: V,
	translateY: V,
	translateZ: V,
	x: V,
	y: V,
	z: V,
	perspective: V,
	transformPerspective: V,
	opacity: Ft,
	originX: Ht,
	originY: Ht,
	originZ: V,
	zIndex: Lt,
	fillOpacity: Ft,
	strokeOpacity: Ft,
	numOctaves: Lt
}, Wt = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
}, Gt = At.length;
function Kt(e, t, n) {
	let r = "", i = !0;
	for (let a = 0; a < Gt; a++) {
		let o = At[a], s = e[o];
		if (s === void 0) continue;
		let c = !0;
		if (c = typeof s == "number" ? s === +!!o.startsWith("scale") : parseFloat(s) === 0, !c || n) {
			let e = Nt(s, Ut[o]);
			if (!c) {
				i = !1;
				let t = Wt[o] || o;
				r += `${t}(${e}) `;
			}
			n && (t[o] = e);
		}
	}
	return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/build-styles.mjs
function qt(e, t, n) {
	let { style: r, vars: i, transformOrigin: a } = e, o = !1, s = !1;
	for (let e in t) {
		let n = t[e];
		if (jt.has(e)) {
			o = !0;
			continue;
		}
		if (wt(e)) {
			i[e] = n;
			continue;
		}
		{
			let t = Nt(n, Ut[e]);
			e.startsWith("origin") ? (s = !0, a[e] = t) : r[e] = t;
		}
	}
	if (t.transform || (o || n ? r.transform = Kt(t, e.transform, n) : r.transform &&= "none"), s) {
		let { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = a;
		r.transformOrigin = `${e} ${t} ${n}`;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/create-render-state.mjs
var Jt = () => ({
	style: {},
	transform: {},
	transformOrigin: {},
	vars: {}
}), H = (e) => !!(e && e.getVelocity);
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/html/use-props.mjs
function Yt(e, t, n) {
	for (let r in t) !H(t[r]) && !Mt(r, n) && (e[r] = t[r]);
}
function Xt({ transformTemplate: e }, t) {
	return O(() => {
		let n = Jt();
		return qt(n, t, e), Object.assign({}, n.vars, n.style);
	}, [t]);
}
function Zt(e, t) {
	let n = e.style || {}, r = {};
	return Yt(r, n, e), Object.assign(r, Xt(e, t)), r;
}
function Qt(e, t) {
	let n = {}, r = Zt(e, t);
	return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/path.mjs
var $t = {
	offset: "stroke-dashoffset",
	array: "stroke-dasharray"
}, en = {
	offset: "strokeDashoffset",
	array: "strokeDasharray"
};
function tn(e, t, n = 1, r = 0, i = !0) {
	e.pathLength = 1;
	let a = i ? $t : en;
	e[a.offset] = V.transform(-r);
	let o = V.transform(t), s = V.transform(n);
	e[a.array] = `${o} ${s}`;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/build-attrs.mjs
function nn(e, { attrX: t, attrY: n, attrScale: r, pathLength: i, pathSpacing: a = 1, pathOffset: o = 0, ...s }, c, l, u) {
	if (qt(e, s, l), c) {
		e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
		return;
	}
	e.attrs = e.style, e.style = {};
	let { attrs: d, style: f } = e;
	d.transform && (f.transform = d.transform, delete d.transform), (f.transform || d.transformOrigin) && (f.transformOrigin = d.transformOrigin ?? "50% 50%", delete d.transformOrigin), f.transform && (f.transformBox = u?.transformBox ?? "fill-box", delete d.transformBox), t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), i !== void 0 && tn(d, i, a, o, !1);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
var rn = () => ({
	...Jt(),
	attrs: {}
}), an = (e) => typeof e == "string" && e.toLowerCase() === "svg";
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/svg/use-props.mjs
function on(e, t, n, r) {
	let i = O(() => {
		let n = rn();
		return nn(n, t, an(r), e.transformTemplate, e.style), {
			...n.attrs,
			style: { ...n.style }
		};
	}, [t]);
	if (e.style) {
		let t = {};
		Yt(t, e.style, e), i.style = {
			...t,
			...i.style
		};
	}
	return i;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/svg/lowercase-elements.mjs
var sn = [
	"animate",
	"circle",
	"defs",
	"desc",
	"ellipse",
	"g",
	"image",
	"line",
	"filter",
	"marker",
	"mask",
	"metadata",
	"path",
	"pattern",
	"polygon",
	"polyline",
	"rect",
	"stop",
	"switch",
	"symbol",
	"svg",
	"text",
	"tspan",
	"use",
	"view"
];
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
function cn(e) {
	return typeof e != "string" || e.includes("-") ? !1 : !!(sn.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/dom/use-render.mjs
function ln(e = !1) {
	return (t, n, r, { latestValues: i }, a) => {
		let o = (cn(t) ? on : Qt)(n, i, a, t), s = qe(n, typeof t == "string", e), c = t === b ? {} : {
			...s,
			...o,
			ref: r
		}, { children: l } = n, u = O(() => H(l) ? l.get() : l, [l]);
		return C(t, {
			...c,
			children: u
		});
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/utils/resolve-variants.mjs
function un(e) {
	let t = [{}, {}];
	return e?.values.forEach((e, n) => {
		t[0][n] = e.get(), t[1][n] = e.getVelocity();
	}), t;
}
function dn(e, t, n, r) {
	if (typeof t == "function") {
		let [i, a] = un(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
		let [i, a] = un(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/value/utils/resolve-motion-value.mjs
function fn(e) {
	return H(e) ? e.get() : e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/use-visual-state.mjs
function pn({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
	return {
		latestValues: hn(n, r, i, e),
		renderState: t()
	};
}
var mn = (e) => (t, n) => {
	let r = E(Ze), i = E(me), a = () => pn(e, t, r, i);
	return n ? a() : de(a);
};
function hn(e, t, n, r) {
	let i = {}, a = r(e, {});
	for (let e in a) i[e] = fn(a[e]);
	let { initial: o, animate: s } = e, c = nt(e), l = rt(e);
	t && l && !c && e.inherit !== !1 && (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
	let u = n ? n.initial === !1 : !1;
	u ||= o === !1;
	let d = u ? s : o;
	if (d && typeof d != "boolean" && !Qe(d)) {
		let t = Array.isArray(d) ? d : [d];
		for (let n = 0; n < t.length; n++) {
			let r = dn(e, t[n]);
			if (r) {
				let { transitionEnd: e, transition: t, ...n } = r;
				for (let e in n) {
					let t = n[e];
					if (Array.isArray(t)) {
						let e = u ? t.length - 1 : 0;
						t = t[e];
					}
					t !== null && (i[e] = t);
				}
				for (let t in e) i[t] = e[t];
			}
		}
	}
	return i;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs
function gn(e, t, n) {
	let { style: r } = e, i = {};
	for (let a in r) (H(r[a]) || t.style && H(t.style[a]) || Mt(a, e) || n?.getValue(a)?.liveStyle !== void 0) && (i[a] = r[a]);
	return i;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/html/config-motion.mjs
var _n = { useVisualState: mn({
	scrapeMotionValuesFromProps: gn,
	createRenderState: Jt
}) };
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs
function vn(e, t, n) {
	let r = gn(e, t, n);
	for (let n in e) if (H(e[n]) || H(t[n])) {
		let t = At.indexOf(n) === -1 ? n : "attr" + n.charAt(0).toUpperCase() + n.substring(1);
		r[t] = e[n];
	}
	return r;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/svg/config-motion.mjs
var yn = { useVisualState: mn({
	scrapeMotionValuesFromProps: vn,
	createRenderState: rn
}) };
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/create-factory.mjs
function bn(e, t) {
	return function(n, { forwardMotionProps: r } = { forwardMotionProps: !1 }) {
		return yt({
			...cn(n) ? yn : _n,
			preloadedFeatures: e,
			useRender: ln(r),
			createVisualElement: t,
			Component: n
		});
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs
function xn(e, t, n) {
	let r = e.getProps();
	return dn(r, t, n === void 0 ? r.custom : n, e);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs
var Sn = (e) => Array.isArray(e), Cn;
function wn() {
	Cn = void 0;
}
var U = {
	now: () => (Cn === void 0 && U.set(L.isProcessing || N.useManualTiming ? L.timestamp : performance.now()), Cn),
	set: (e) => {
		Cn = e, queueMicrotask(wn);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/array.mjs
function Tn(e, t) {
	e.indexOf(t) === -1 && e.push(t);
}
function En(e, t) {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}
function Dn([ ...e], t, n) {
	let r = t < 0 ? e.length + t : t;
	if (r >= 0 && r < e.length) {
		let r = n < 0 ? e.length + n : n, [i] = e.splice(t, 1);
		e.splice(r, 0, i);
	}
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/subscription-manager.mjs
var On = class {
	constructor() {
		this.subscriptions = [];
	}
	add(e) {
		return Tn(this.subscriptions, e), () => En(this.subscriptions, e);
	}
	notify(e, t, n) {
		let r = this.subscriptions.length;
		if (r) {
			if (r === 1) this.subscriptions[0](e, t, n);
			else for (let i = 0; i < r; i++) {
				let r = this.subscriptions[i];
				r && r(e, t, n);
			}
		}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/velocity-per-second.mjs
function kn(e, t) {
	return t ? 1e3 / t * e : 0;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/value/index.mjs
var An = 30, jn = (e) => !isNaN(parseFloat(e)), Mn = { current: void 0 }, Nn = class {
	constructor(e, t = {}) {
		this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (e, t = !0) => {
			let n = U.now();
			if (this.updatedAt !== n && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents)) for (let e of this.dependents) e.dirty();
			t && this.events.renderRequest?.notify(this.current);
		}, this.hasAnimated = !1, this.setCurrent(e), this.owner = t.owner;
	}
	setCurrent(e) {
		this.current = e, this.updatedAt = U.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = jn(this.current));
	}
	setPrevFrameValue(e = this.current) {
		this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
	}
	onChange(e) {
		return process.env.NODE_ENV !== "production" && Ye(!1, "value.onChange(callback) is deprecated. Switch to value.on(\"change\", callback)."), this.on("change", e);
	}
	on(e, t) {
		this.events[e] || (this.events[e] = new On());
		let n = this.events[e].add(t);
		return e === "change" ? () => {
			n(), F.read(() => {
				this.events.change.getSize() || this.stop();
			});
		} : n;
	}
	clearListeners() {
		for (let e in this.events) this.events[e].clear();
	}
	attach(e, t) {
		this.passiveEffect = e, this.stopPassiveEffect = t;
	}
	set(e, t = !0) {
		!t || !this.passiveEffect ? this.updateAndNotify(e, t) : this.passiveEffect(e, this.updateAndNotify);
	}
	setWithVelocity(e, t, n) {
		this.set(t), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - n;
	}
	jump(e, t = !0) {
		this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, t && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
	dirty() {
		this.events.change?.notify(this.current);
	}
	addDependent(e) {
		this.dependents ||= /* @__PURE__ */ new Set(), this.dependents.add(e);
	}
	removeDependent(e) {
		this.dependents && this.dependents.delete(e);
	}
	get() {
		return Mn.current && Mn.current.push(this), this.current;
	}
	getPrevious() {
		return this.prev;
	}
	getVelocity() {
		let e = U.now();
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > An) return 0;
		let t = Math.min(this.updatedAt - this.prevUpdatedAt, An);
		return kn(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
	}
	start(e) {
		return this.stop(), new Promise((t) => {
			this.hasAnimated = !0, this.animation = e(t), this.events.animationStart && this.events.animationStart.notify();
		}).then(() => {
			this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
		});
	}
	stop() {
		this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
	}
	isAnimating() {
		return !!this.animation;
	}
	clearAnimation() {
		delete this.animation;
	}
	destroy() {
		this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
};
function Pn(e, t) {
	return new Nn(e, t);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/utils/setters.mjs
function Fn(e, t, n) {
	e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Pn(n));
}
function In(e) {
	return Sn(e) ? e[e.length - 1] || 0 : e;
}
function Ln(e, t) {
	let { transitionEnd: n = {}, transition: r = {}, ...i } = xn(e, t) || {};
	i = {
		...i,
		...n
	};
	for (let t in i) Fn(e, t, In(i[t]));
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/value/use-will-change/is.mjs
function Rn(e) {
	return !!(H(e) && e.add);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/value/use-will-change/add-will-change.mjs
function zn(e, t) {
	let n = e.getValue("willChange");
	if (Rn(n)) return n.add(t);
	if (!n && N.WillChange) {
		let n = new N.WillChange("auto");
		e.addValue("willChange", n), n.add(t);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/optimized-appear/get-appear-id.mjs
function Bn(e) {
	return e.props[dt];
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/get-final-keyframe.mjs
var Vn = (e) => e !== null;
function Hn(e, { repeat: t, repeatType: n = "loop" }, r) {
	let i = e.filter(Vn), a = t && n !== "loop" && t % 2 == 1 ? 0 : i.length - 1;
	return !a || r === void 0 ? i[a] : r;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/default-transitions.mjs
var Un = {
	type: "spring",
	stiffness: 500,
	damping: 25,
	restSpeed: 10
}, Wn = (e) => ({
	type: "spring",
	stiffness: 550,
	damping: e === 0 ? 2 * Math.sqrt(550) : 30,
	restSpeed: 10
}), Gn = {
	type: "keyframes",
	duration: .8
}, Kn = {
	type: "keyframes",
	ease: [
		.25,
		.1,
		.35,
		1
	],
	duration: .3
}, qn = (e, { keyframes: t }) => t.length > 2 ? Gn : jt.has(e) ? e.startsWith("scale") ? Wn(t[1]) : Un : Kn;
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-transition-defined.mjs
function Jn({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: a, repeatType: o, repeatDelay: s, from: c, elapsed: l, ...u }) {
	return !!Object.keys(u).length;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/utils/get-value-transition.mjs
function Yn(e, t) {
	return e?.[t] ?? e?.default ?? e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/time-conversion.mjs
var W = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, G = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3, Xn = {
	layout: 0,
	mainThread: 0,
	waapi: 0
}, Zn = (e) => Math.round(e * 1e5) / 1e5, Qn = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/value/types/utils/is-nullish.mjs
function $n(e) {
	return e == null;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/value/types/utils/single-color-regex.mjs
var er = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, tr = (e, t) => (n) => !!(typeof n == "string" && er.test(n) && n.startsWith(e) || t && !$n(n) && Object.prototype.hasOwnProperty.call(n, t)), nr = (e, t, n) => (r) => {
	if (typeof r != "string") return r;
	let [i, a, o, s] = r.match(Qn);
	return {
		[e]: parseFloat(i),
		[t]: parseFloat(a),
		[n]: parseFloat(o),
		alpha: s === void 0 ? 1 : parseFloat(s)
	};
}, rr = (e) => z(0, 255, e), ir = {
	...Pt,
	transform: (e) => Math.round(rr(e))
}, ar = {
	test: /*@__PURE__*/ tr("rgb", "red"),
	parse: /*@__PURE__*/ nr("red", "green", "blue"),
	transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + ir.transform(e) + ", " + ir.transform(t) + ", " + ir.transform(n) + ", " + Zn(Ft.transform(r)) + ")"
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/value/types/color/hex.mjs
function or(e) {
	let t = "", n = "", r = "", i = "";
	return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
		red: parseInt(t, 16),
		green: parseInt(n, 16),
		blue: parseInt(r, 16),
		alpha: i ? parseInt(i, 16) / 255 : 1
	};
}
var sr = {
	test: /*@__PURE__*/ tr("#"),
	parse: or,
	transform: ar.transform
}, cr = {
	test: /*@__PURE__*/ tr("hsl", "hue"),
	parse: /*@__PURE__*/ nr("hue", "saturation", "lightness"),
	transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + B.transform(Zn(t)) + ", " + B.transform(Zn(n)) + ", " + Zn(Ft.transform(r)) + ")"
}, K = {
	test: (e) => ar.test(e) || sr.test(e) || cr.test(e),
	parse: (e) => ar.test(e) ? ar.parse(e) : cr.test(e) ? cr.parse(e) : sr.parse(e),
	transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? ar.transform(e) : cr.transform(e)
}, lr = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/value/types/complex/index.mjs
function ur(e) {
	return isNaN(e) && typeof e == "string" && (e.match(Qn)?.length || 0) + (e.match(lr)?.length || 0) > 0;
}
var dr = "number", fr = "color", pr = "var", mr = "var(", hr = "${}", gr = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function _r(e) {
	let t = e.toString(), n = [], r = {
		color: [],
		number: [],
		var: []
	}, i = [], a = 0;
	return {
		values: n,
		split: t.replace(gr, (e) => (K.test(e) ? (r.color.push(a), i.push(fr), n.push(K.parse(e))) : e.startsWith(mr) ? (r.var.push(a), i.push(pr), n.push(e)) : (r.number.push(a), i.push(dr), n.push(parseFloat(e))), ++a, hr)).split(hr),
		indexes: r,
		types: i
	};
}
function vr(e) {
	return _r(e).values;
}
function yr(e) {
	let { split: t, types: n } = _r(e), r = t.length;
	return (e) => {
		let i = "";
		for (let a = 0; a < r; a++) if (i += t[a], e[a] !== void 0) {
			let t = n[a];
			i += t === dr ? Zn(e[a]) : t === fr ? K.transform(e[a]) : e[a];
		}
		return i;
	};
}
var br = (e) => typeof e == "number" ? 0 : e;
function xr(e) {
	let t = vr(e);
	return yr(e)(t.map(br));
}
var Sr = {
	test: ur,
	parse: vr,
	createTransformer: yr,
	getAnimatableNone: xr
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/value/types/color/hsla-to-rgba.mjs
function Cr(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function wr({ hue: e, saturation: t, lightness: n, alpha: r }) {
	e /= 360, t /= 100, n /= 100;
	let i = 0, a = 0, o = 0;
	if (!t) i = a = o = n;
	else {
		let r = n < .5 ? n * (1 + t) : n + t - n * t, s = 2 * n - r;
		i = Cr(s, r, e + 1 / 3), a = Cr(s, r, e), o = Cr(s, r, e - 1 / 3);
	}
	return {
		red: Math.round(i * 255),
		green: Math.round(a * 255),
		blue: Math.round(o * 255),
		alpha: r
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/utils/mix/immediate.mjs
function Tr(e, t) {
	return (n) => n > 0 ? t : e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/utils/mix/number.mjs
var q = (e, t, n) => e + (t - e) * n, Er = (e, t, n) => {
	let r = e * e, i = n * (t * t - r) + r;
	return i < 0 ? 0 : Math.sqrt(i);
}, Dr = [
	sr,
	ar,
	cr
], Or = (e) => Dr.find((t) => t.test(e));
function kr(e) {
	let t = Or(e);
	if (vt(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t) return !1;
	let n = t.parse(e);
	return t === cr && (n = wr(n)), n;
}
var Ar = (e, t) => {
	let n = kr(e), r = kr(t);
	if (!n || !r) return Tr(e, t);
	let i = { ...n };
	return (e) => (i.red = Er(n.red, r.red, e), i.green = Er(n.green, r.green, e), i.blue = Er(n.blue, r.blue, e), i.alpha = q(n.alpha, r.alpha, e), ar.transform(i));
}, jr = /* @__PURE__ */ new Set(["none", "hidden"]);
function Mr(e, t) {
	return jr.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/pipe.mjs
var Nr = (e, t) => (n) => t(e(n)), Pr = (...e) => e.reduce(Nr);
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/utils/mix/complex.mjs
function Fr(e, t) {
	return (n) => q(e, t, n);
}
function Ir(e) {
	return typeof e == "number" ? Fr : typeof e == "string" ? Et(e) ? Tr : K.test(e) ? Ar : Br : Array.isArray(e) ? Lr : typeof e == "object" ? K.test(e) ? Ar : Rr : Tr;
}
function Lr(e, t) {
	let n = [...e], r = n.length, i = e.map((e, n) => Ir(e)(e, t[n]));
	return (e) => {
		for (let t = 0; t < r; t++) n[t] = i[t](e);
		return n;
	};
}
function Rr(e, t) {
	let n = {
		...e,
		...t
	}, r = {};
	for (let i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = Ir(e[i])(e[i], t[i]));
	return (e) => {
		for (let t in r) n[t] = r[t](e);
		return n;
	};
}
function zr(e, t) {
	let n = [], r = {
		color: 0,
		var: 0,
		number: 0
	};
	for (let i = 0; i < t.values.length; i++) {
		let a = t.types[i], o = e.indexes[a][r[a]], s = e.values[o] ?? 0;
		n[i] = s, r[a]++;
	}
	return n;
}
var Br = (e, t) => {
	let n = Sr.createTransformer(t), r = _r(e), i = _r(t);
	return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? jr.has(e) && !i.values.length || jr.has(t) && !r.values.length ? Mr(e, t) : Pr(Lr(zr(r, i), i.values), n) : (vt(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), Tr(e, t));
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/utils/mix/index.mjs
function Vr(e, t, n) {
	return typeof e == "number" && typeof t == "number" && typeof n == "number" ? q(e, t, n) : Ir(e)(e, t);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/drivers/frame.mjs
var Hr = (e) => {
	let t = ({ timestamp: t }) => e(t);
	return {
		start: (e = !0) => F.update(t, e),
		stop: () => I(t),
		now: () => L.isProcessing ? L.timestamp : U.now()
	};
}, Ur = (e, t, n = 10) => {
	let r = "", i = Math.max(Math.round(t / n), 2);
	for (let t = 0; t < i; t++) r += Math.round(e(t / (i - 1)) * 1e4) / 1e4 + ", ";
	return `linear(${r.substring(0, r.length - 2)})`;
}, Wr = 2e4;
function Gr(e) {
	let t = 0, n = e.next(t);
	for (; !n.done && t < 2e4;) t += 50, n = e.next(t);
	return t >= 2e4 ? Infinity : t;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs
function Kr(e, t = 100, n) {
	let r = n({
		...e,
		keyframes: [0, t]
	}), i = Math.min(Gr(r), Wr);
	return {
		type: "keyframes",
		ease: (e) => r.next(i * e).value / t,
		duration: /* @__PURE__ */ G(i)
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/generators/utils/velocity.mjs
var qr = 5;
function Jr(e, t, n) {
	let r = Math.max(t - qr, 0);
	return kn(n - e(r), t - r);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/generators/spring/defaults.mjs
var J = {
	stiffness: 100,
	damping: 10,
	mass: 1,
	velocity: 0,
	duration: 800,
	bounce: .3,
	visualDuration: .3,
	restSpeed: {
		granular: .01,
		default: 2
	},
	restDelta: {
		granular: .005,
		default: .5
	},
	minDuration: .01,
	maxDuration: 10,
	minDamping: .05,
	maxDamping: 1
}, Yr = .001;
function Xr({ duration: e = J.duration, bounce: t = J.bounce, velocity: n = J.velocity, mass: r = J.mass }) {
	let i, a;
	vt(e <= /* @__PURE__ */ W(J.maxDuration), "Spring duration must be 10 seconds or less");
	let o = 1 - t;
	o = z(J.minDamping, J.maxDamping, o), e = z(J.minDuration, J.maxDuration, /* @__PURE__ */ G(e)), o < 1 ? (i = (t) => {
		let r = t * o, i = r * e, a = r - n, s = $r(t, o), c = Math.exp(-i);
		return Yr - a / s * c;
	}, a = (t) => {
		let r = t * o * e, a = r * n + n, s = o ** 2 * t ** 2 * e, c = Math.exp(-r), l = $r(t ** 2, o);
		return (-i(t) + Yr > 0 ? -1 : 1) * ((a - s) * c) / l;
	}) : (i = (t) => -.001 + Math.exp(-t * e) * ((t - n) * e + 1), a = (t) => Math.exp(-t * e) * ((n - t) * (e * e)));
	let s = 5 / e, c = Qr(i, a, s);
	if (e = /* @__PURE__ */ W(e), isNaN(c)) return {
		stiffness: J.stiffness,
		damping: J.damping,
		duration: e
	};
	{
		let t = c ** 2 * r;
		return {
			stiffness: t,
			damping: o * 2 * Math.sqrt(r * t),
			duration: e
		};
	}
}
var Zr = 12;
function Qr(e, t, n) {
	let r = n;
	for (let n = 1; n < Zr; n++) r -= e(r) / t(r);
	return r;
}
function $r(e, t) {
	return e * Math.sqrt(1 - t * t);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/generators/spring/index.mjs
var ei = ["duration", "bounce"], ti = [
	"stiffness",
	"damping",
	"mass"
];
function ni(e, t) {
	return t.some((t) => e[t] !== void 0);
}
function ri(e) {
	let t = {
		velocity: J.velocity,
		stiffness: J.stiffness,
		damping: J.damping,
		mass: J.mass,
		isResolvedFromDuration: !1,
		...e
	};
	if (!ni(e, ti) && ni(e, ei)) {
		if (e.visualDuration) {
			let n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), i = r * r, a = 2 * z(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
			t = {
				...t,
				mass: J.mass,
				stiffness: i,
				damping: a
			};
		} else {
			let n = Xr(e);
			t = {
				...t,
				...n,
				mass: J.mass
			}, t.isResolvedFromDuration = !0;
		}
	}
	return t;
}
function ii(e = J.visualDuration, t = J.bounce) {
	let n = typeof e == "object" ? e : {
		visualDuration: e,
		keyframes: [0, 1],
		bounce: t
	}, { restSpeed: r, restDelta: i } = n, a = n.keyframes[0], o = n.keyframes[n.keyframes.length - 1], s = {
		done: !1,
		value: a
	}, { stiffness: c, damping: l, mass: u, duration: d, velocity: f, isResolvedFromDuration: p } = ri({
		...n,
		velocity: -/* @__PURE__ */ G(n.velocity || 0)
	}), m = f || 0, h = l / (2 * Math.sqrt(c * u)), g = o - a, _ = /* @__PURE__ */ G(Math.sqrt(c / u)), v = Math.abs(g) < 5;
	r ||= v ? J.restSpeed.granular : J.restSpeed.default, i ||= v ? J.restDelta.granular : J.restDelta.default;
	let y;
	if (h < 1) {
		let e = $r(_, h);
		y = (t) => {
			let n = Math.exp(-h * _ * t);
			return o - n * ((m + h * _ * g) / e * Math.sin(e * t) + g * Math.cos(e * t));
		};
	} else if (h === 1) y = (e) => o - Math.exp(-_ * e) * (g + (m + _ * g) * e);
	else {
		let e = _ * Math.sqrt(h * h - 1);
		y = (t) => {
			let n = Math.exp(-h * _ * t), r = Math.min(e * t, 300);
			return o - n * ((m + h * _ * g) * Math.sinh(r) + e * g * Math.cosh(r)) / e;
		};
	}
	let b = {
		calculatedDuration: p && d || null,
		next: (e) => {
			let t = y(e);
			if (p) s.done = e >= d;
			else {
				let n = e === 0 ? m : 0;
				h < 1 && (n = e === 0 ? /* @__PURE__ */ W(m) : Jr(y, e, t));
				let a = Math.abs(n) <= r, c = Math.abs(o - t) <= i;
				s.done = a && c;
			}
			return s.value = s.done ? o : t, s;
		},
		toString: () => {
			let e = Math.min(Gr(b), Wr), t = Ur((t) => b.next(e * t).value, e, 30);
			return e + "ms " + t;
		},
		toTransition: () => {}
	};
	return b;
}
ii.applyToOptions = (e) => {
	let t = Kr(e, 100, ii);
	return e.ease = t.ease, e.duration = /* @__PURE__ */ W(t.duration), e.type = "keyframes", e;
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/generators/inertia.mjs
function ai({ keyframes: e, velocity: t = 0, power: n = .8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: a = 500, modifyTarget: o, min: s, max: c, restDelta: l = .5, restSpeed: u }) {
	let d = e[0], f = {
		done: !1,
		value: d
	}, p = (e) => s !== void 0 && e < s || c !== void 0 && e > c, m = (e) => s === void 0 ? c : c === void 0 || Math.abs(s - e) < Math.abs(c - e) ? s : c, h = n * t, g = d + h, _ = o === void 0 ? g : o(g);
	_ !== g && (h = _ - d);
	let v = (e) => -h * Math.exp(-e / r), y = (e) => _ + v(e), b = (e) => {
		let t = v(e), n = y(e);
		f.done = Math.abs(t) <= l, f.value = f.done ? _ : n;
	}, x, S, C = (e) => {
		p(f.value) && (x = e, S = ii({
			keyframes: [f.value, m(f.value)],
			velocity: Jr(y, e, f.value),
			damping: i,
			stiffness: a,
			restDelta: l,
			restSpeed: u
		}));
	};
	return C(0), {
		calculatedDuration: null,
		next: (e) => {
			let t = !1;
			return !S && x === void 0 && (t = !0, b(e), C(e)), x !== void 0 && e >= x ? S.next(e - x) : (!t && b(e), f);
		}
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/progress.mjs
var oi = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
	let r = t - e;
	return r === 0 ? 1 : (n - e) / r;
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/utils/interpolate.mjs
function si(e, t, n) {
	let r = [], i = n || N.mix || Vr, a = e.length - 1;
	for (let n = 0; n < a; n++) {
		let a = i(e[n], e[n + 1]);
		t && (a = Pr(Array.isArray(t) ? t[n] || P : t, a)), r.push(a);
	}
	return r;
}
function ci(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
	let a = e.length;
	if (R(a === t.length, "Both input and output ranges must be the same length"), a === 1) return () => t[0];
	if (a === 2 && t[0] === t[1]) return () => t[1];
	let o = e[0] === e[1];
	e[0] > e[a - 1] && (e = [...e].reverse(), t = [...t].reverse());
	let s = si(t, r, i), c = s.length, l = (n) => {
		if (o && n < e[0]) return t[0];
		let r = 0;
		if (c > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
		let i = /* @__PURE__ */ oi(e[r], e[r + 1], n);
		return s[r](i);
	};
	return n ? (t) => l(z(e[0], e[a - 1], t)) : l;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs
function li(e, t) {
	let n = e[e.length - 1];
	for (let r = 1; r <= t; r++) {
		let i = /* @__PURE__ */ oi(0, t, r);
		e.push(q(n, 1, i));
	}
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/keyframes/offsets/default.mjs
function ui(e) {
	let t = [0];
	return li(t, e.length - 1), t;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/keyframes/offsets/time.mjs
function di(e, t) {
	return e.map((e) => e * t);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/easing/cubic-bezier.mjs
var fi = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, pi = 1e-7, mi = 12;
function hi(e, t, n, r, i) {
	let a, o, s = 0;
	do
		o = t + (n - t) / 2, a = fi(o, r, i) - e, a > 0 ? n = o : t = o;
	while (Math.abs(a) > pi && ++s < mi);
	return o;
}
function gi(e, t, n, r) {
	if (e === t && n === r) return P;
	let i = (t) => hi(t, 0, 1, e, n);
	return (e) => e === 0 || e === 1 ? e : fi(i(e), t, r);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/easing/ease.mjs
var _i = /*@__PURE__*/ gi(.42, 0, 1, 1), vi = /*@__PURE__*/ gi(0, 0, .58, 1), yi = /*@__PURE__*/ gi(.42, 0, .58, 1), bi = (e) => Array.isArray(e) && typeof e[0] != "number", xi = (e) => (t) => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Si = (e) => (t) => 1 - e(1 - t), Ci = /*@__PURE__*/ gi(.33, 1.53, .69, .99), wi = /*@__PURE__*/ Si(Ci), Ti = /*@__PURE__*/ xi(wi), Ei = (e) => (e *= 2) < 1 ? .5 * wi(e) : .5 * (2 - 2 ** (-10 * (e - 1))), Di = (e) => 1 - Math.sin(Math.acos(e)), Oi = Si(Di), ki = xi(Di), Ai = (e) => Array.isArray(e) && typeof e[0] == "number", ji = {
	linear: P,
	easeIn: _i,
	easeInOut: yi,
	easeOut: vi,
	circIn: Di,
	circInOut: ki,
	circOut: Oi,
	backIn: wi,
	backInOut: Ti,
	backOut: Ci,
	anticipate: Ei
}, Mi = (e) => typeof e == "string", Ni = (e) => {
	if (Ai(e)) {
		R(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
		let [t, n, r, i] = e;
		return gi(t, n, r, i);
	}
	return Mi(e) ? (R(ji[e] !== void 0, `Invalid easing type '${e}'`), ji[e]) : e;
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/generators/keyframes.mjs
function Pi(e, t) {
	return e.map(() => t || yi).splice(0, e.length - 1);
}
function Fi({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
	let i = bi(r) ? r.map(Ni) : Ni(r), a = {
		done: !1,
		value: t[0]
	}, o = ci(di(n && n.length === t.length ? n : ui(t), e), t, { ease: Array.isArray(i) ? i : Pi(t, i) });
	return {
		calculatedDuration: e,
		next: (t) => (a.value = o(t), a.done = t >= e, a)
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/keyframes/get-final.mjs
var Ii = (e) => e !== null;
function Li(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
	let a = e.filter(Ii), o = i < 0 || t && n !== "loop" && t % 2 == 1 ? 0 : a.length - 1;
	return !o || r === void 0 ? a[o] : r;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/utils/replace-transition-type.mjs
var Ri = {
	decay: ai,
	inertia: ai,
	tween: Fi,
	keyframes: Fi,
	spring: ii
};
function zi(e) {
	typeof e.type == "string" && (e.type = Ri[e.type]);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/utils/WithPromise.mjs
var Bi = class {
	constructor() {
		this.updateFinished();
	}
	get finished() {
		return this._finished;
	}
	updateFinished() {
		this._finished = new Promise((e) => {
			this.resolve = e;
		});
	}
	notifyFinished() {
		this.resolve();
	}
	then(e, t) {
		return this.finished.then(e, t);
	}
}, Vi = (e) => e / 100, Hi = class extends Bi {
	constructor(e) {
		super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
			let { motionValue: e } = this.options;
			e && e.updatedAt !== U.now() && this.tick(U.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
		}, Xn.mainThread++, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause();
	}
	initAnimation() {
		let { options: e } = this;
		zi(e);
		let { type: t = Fi, repeat: n = 0, repeatDelay: r = 0, repeatType: i, velocity: a = 0 } = e, { keyframes: o } = e, s = t || Fi;
		process.env.NODE_ENV !== "production" && s !== Fi && R(o.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${o}`), s !== Fi && typeof o[0] != "number" && (this.mixKeyframes = Pr(Vi, Vr(o[0], o[1])), o = [0, 100]);
		let c = s({
			...e,
			keyframes: o
		});
		i === "mirror" && (this.mirroredGenerator = s({
			...e,
			keyframes: [...o].reverse(),
			velocity: -a
		})), c.calculatedDuration === null && (c.calculatedDuration = Gr(c));
		let { calculatedDuration: l } = c;
		this.calculatedDuration = l, this.resolvedDuration = l + r, this.totalDuration = this.resolvedDuration * (n + 1) - r, this.generator = c;
	}
	updateTime(e) {
		let t = Math.round(e - this.startTime) * this.playbackSpeed;
		this.currentTime = this.holdTime === null ? t : this.holdTime;
	}
	tick(e, t = !1) {
		let { generator: n, totalDuration: r, mixKeyframes: i, mirroredGenerator: a, resolvedDuration: o, calculatedDuration: s } = this;
		if (this.startTime === null) return n.next(0);
		let { delay: c = 0, keyframes: l, repeat: u, repeatType: d, repeatDelay: f, type: p, onUpdate: m, finalKeyframe: h } = this.options;
		this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - r / this.speed, this.startTime)), t ? this.currentTime = e : this.updateTime(e);
		let g = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1), _ = this.playbackSpeed >= 0 ? g < 0 : g > r;
		this.currentTime = Math.max(g, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = r);
		let v = this.currentTime, y = n;
		if (u) {
			let e = Math.min(this.currentTime, r) / o, t = Math.floor(e), n = e % 1;
			!n && e >= 1 && (n = 1), n === 1 && t--, t = Math.min(t, u + 1), t % 2 && (d === "reverse" ? (n = 1 - n, f && (n -= f / o)) : d === "mirror" && (y = a)), v = z(0, 1, n) * o;
		}
		let b = _ ? {
			done: !1,
			value: l[0]
		} : y.next(v);
		i && (b.value = i(b.value));
		let { done: x } = b;
		!_ && s !== null && (x = this.playbackSpeed >= 0 ? this.currentTime >= r : this.currentTime <= 0);
		let S = this.holdTime === null && (this.state === "finished" || this.state === "running" && x);
		return S && p !== ai && (b.value = Li(l, this.options, h, this.speed)), m && m(b.value), S && this.finish(), b;
	}
	then(e, t) {
		return this.finished.then(e, t);
	}
	get duration() {
		return /* @__PURE__ */ G(this.calculatedDuration);
	}
	get time() {
		return /* @__PURE__ */ G(this.currentTime);
	}
	set time(e) {
		e = /* @__PURE__ */ W(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver?.start(!1);
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(e) {
		this.updateTime(U.now());
		let t = this.playbackSpeed !== e;
		this.playbackSpeed = e, t && (this.time = /* @__PURE__ */ G(this.currentTime));
	}
	play() {
		if (this.isStopped) return;
		let { driver: e = Hr, startTime: t } = this.options;
		this.driver ||= e((e) => this.tick(e)), this.options.onPlay?.();
		let n = this.driver.now();
		this.state === "finished" ? (this.updateFinished(), this.startTime = n) : this.holdTime === null ? this.startTime ||= t ?? n : this.startTime = n - this.holdTime, this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
	}
	pause() {
		this.state = "paused", this.updateTime(U.now()), this.holdTime = this.currentTime;
	}
	complete() {
		this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
	}
	finish() {
		this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
	}
	cancel() {
		this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
	}
	teardown() {
		this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null, Xn.mainThread--;
	}
	stopDriver() {
		this.driver &&= (this.driver.stop(), void 0);
	}
	sample(e) {
		return this.startTime = 0, this.tick(e, !0);
	}
	attachTimeline(e) {
		return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), e.observe(this);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/keyframes/utils/fill-wildcards.mjs
function Ui(e) {
	for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/render/dom/parse-transform.mjs
var Wi = (e) => e * 180 / Math.PI, Gi = (e) => qi(Wi(Math.atan2(e[1], e[0]))), Ki = {
	x: 4,
	y: 5,
	translateX: 4,
	translateY: 5,
	scaleX: 0,
	scaleY: 3,
	scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
	rotate: Gi,
	rotateZ: Gi,
	skewX: (e) => Wi(Math.atan(e[1])),
	skewY: (e) => Wi(Math.atan(e[2])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, qi = (e) => (e %= 360, e < 0 && (e += 360), e), Ji = Gi, Yi = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), Xi = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), Zi = {
	x: 12,
	y: 13,
	z: 14,
	translateX: 12,
	translateY: 13,
	translateZ: 14,
	scaleX: Yi,
	scaleY: Xi,
	scale: (e) => (Yi(e) + Xi(e)) / 2,
	rotateX: (e) => qi(Wi(Math.atan2(e[6], e[5]))),
	rotateY: (e) => qi(Wi(Math.atan2(-e[2], e[0]))),
	rotateZ: Ji,
	rotate: Ji,
	skewX: (e) => Wi(Math.atan(e[4])),
	skewY: (e) => Wi(Math.atan(e[1])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function Qi(e) {
	return +!!e.includes("scale");
}
function $i(e, t) {
	if (!e || e === "none") return Qi(t);
	let n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u), r, i;
	if (n) r = Zi, i = n;
	else {
		let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
		r = Ki, i = t;
	}
	if (!i) return Qi(t);
	let a = r[t], o = i[1].split(",").map(ta);
	return typeof a == "function" ? a(o) : o[a];
}
var ea = (e, t) => {
	let { transform: n = "none" } = getComputedStyle(e);
	return $i(n, t);
};
function ta(e) {
	return parseFloat(e.trim());
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/keyframes/utils/unit-conversion.mjs
var na = (e) => e === Pt || e === V, ra = /* @__PURE__ */ new Set([
	"x",
	"y",
	"z"
]), ia = At.filter((e) => !ra.has(e));
function aa(e) {
	let t = [];
	return ia.forEach((n) => {
		let r = e.getValue(n);
		r !== void 0 && (t.push([n, r.get()]), r.set(+!!n.startsWith("scale")));
	}), t;
}
var oa = {
	width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
	height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
	top: (e, { top: t }) => parseFloat(t),
	left: (e, { left: t }) => parseFloat(t),
	bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
	right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
	x: (e, { transform: t }) => $i(t, "x"),
	y: (e, { transform: t }) => $i(t, "y")
};
oa.translateX = oa.x, oa.translateY = oa.y;
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/keyframes/KeyframesResolver.mjs
var sa = /* @__PURE__ */ new Set(), ca = !1, la = !1, ua = !1;
function da() {
	if (la) {
		let e = Array.from(sa).filter((e) => e.needsMeasurement), t = new Set(e.map((e) => e.element)), n = /* @__PURE__ */ new Map();
		t.forEach((e) => {
			let t = aa(e);
			t.length && (n.set(e, t), e.render());
		}), e.forEach((e) => e.measureInitialState()), t.forEach((e) => {
			e.render();
			let t = n.get(e);
			t && t.forEach(([t, n]) => {
				e.getValue(t)?.set(n);
			});
		}), e.forEach((e) => e.measureEndState()), e.forEach((e) => {
			e.suspendedScrollY !== void 0 && window.scrollTo(0, e.suspendedScrollY);
		});
	}
	la = !1, ca = !1, sa.forEach((e) => e.complete(ua)), sa.clear();
}
function fa() {
	sa.forEach((e) => {
		e.readKeyframes(), e.needsMeasurement && (la = !0);
	});
}
function pa() {
	ua = !0, fa(), da(), ua = !1;
}
var ma = class {
	constructor(e, t, n, r, i, a = !1) {
		this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = n, this.motionValue = r, this.element = i, this.isAsync = a;
	}
	scheduleResolve() {
		this.state = "scheduled", this.isAsync ? (sa.add(this), ca || (ca = !0, F.read(fa), F.resolveKeyframes(da))) : (this.readKeyframes(), this.complete());
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, name: t, element: n, motionValue: r } = this;
		if (e[0] === null) {
			let i = r?.get(), a = e[e.length - 1];
			if (i !== void 0) e[0] = i;
			else if (n && t) {
				let r = n.readValue(t, a);
				r != null && (e[0] = r);
			}
			e[0] === void 0 && (e[0] = a), r && i === void 0 && r.set(e[0]);
		}
		Ui(e);
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete(e = !1) {
		this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), sa.delete(this);
	}
	cancel() {
		this.state === "scheduled" && (sa.delete(this), this.state = "pending");
	}
	resume() {
		this.state === "pending" && this.scheduleResolve();
	}
}, ha = (e) => e.startsWith("--");
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/render/dom/style-set.mjs
function ga(e, t, n) {
	ha(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/memo.mjs
/*#__NO_SIDE_EFFECTS__*/
function _a(e) {
	let t;
	return () => (t === void 0 && (t = e()), t);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
var va = /* @__PURE__ */ _a(() => window.ScrollTimeline !== void 0), ya = {};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/utils/supports/memo.mjs
function ba(e, t) {
	let n = /* @__PURE__ */ _a(e);
	return () => ya[t] ?? n();
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/utils/supports/linear-easing.mjs
var xa = /*@__PURE__*/ ba(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
}, "linearEasing"), Sa = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Ca = {
	linear: "linear",
	ease: "ease",
	easeIn: "ease-in",
	easeOut: "ease-out",
	easeInOut: "ease-in-out",
	circIn: /*@__PURE__*/ Sa([
		0,
		.65,
		.55,
		1
	]),
	circOut: /*@__PURE__*/ Sa([
		.55,
		0,
		1,
		.45
	]),
	backIn: /*@__PURE__*/ Sa([
		.31,
		.01,
		.66,
		-.59
	]),
	backOut: /*@__PURE__*/ Sa([
		.33,
		1.53,
		.69,
		.99
	])
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs
function wa(e, t) {
	if (e) return typeof e == "function" ? xa() ? Ur(e, t) : "ease-out" : Ai(e) ? Sa(e) : Array.isArray(e) ? e.map((e) => wa(e, t) || Ca.easeOut) : Ca[e];
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs
function Ta(e, t, n, { delay: r = 0, duration: i = 300, repeat: a = 0, repeatType: o = "loop", ease: s = "easeOut", times: c } = {}, l = void 0) {
	let u = { [t]: n };
	c && (u.offset = c);
	let d = wa(s, i);
	Array.isArray(d) && (u.easing = d), M.value && Xn.waapi++;
	let f = {
		delay: r,
		duration: i,
		easing: Array.isArray(d) ? "linear" : d,
		fill: "both",
		iterations: a + 1,
		direction: o === "reverse" ? "alternate" : "normal"
	};
	l && (f.pseudoElement = l);
	let p = e.animate(u, f);
	return M.value && p.finished.finally(() => {
		Xn.waapi--;
	}), p;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/generators/utils/is-generator.mjs
function Ea(e) {
	return typeof e == "function" && "applyToOptions" in e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs
function Da({ type: e, ...t }) {
	return Ea(e) && xa() ? e.applyToOptions(t) : (t.duration ??= 300, t.ease ??= "easeOut", t);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/NativeAnimation.mjs
var Oa = class extends Bi {
	constructor(e) {
		if (super(), this.finishedTime = null, this.isStopped = !1, !e) return;
		let { element: t, name: n, keyframes: r, pseudoElement: i, allowFlatten: a = !1, finalKeyframe: o, onComplete: s } = e;
		this.isPseudoElement = !!i, this.allowFlatten = a, this.options = e, R(typeof e.type != "string", "animateMini doesn't support \"type\" as a string. Did you mean to import { spring } from \"motion\"?");
		let c = Da(e);
		this.animation = Ta(t, n, r, c, i), c.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
			if (this.finishedTime = this.time, !i) {
				let e = Li(r, this.options, o, this.speed);
				this.updateMotionValue ? this.updateMotionValue(e) : ga(t, n, e), this.animation.cancel();
			}
			s?.(), this.notifyFinished();
		};
	}
	play() {
		this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished());
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.finish?.();
	}
	cancel() {
		try {
			this.animation.cancel();
		} catch {}
	}
	stop() {
		if (this.isStopped) return;
		this.isStopped = !0;
		let { state: e } = this;
		e !== "idle" && e !== "finished" && (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
	}
	commitStyles() {
		this.isPseudoElement || this.animation.commitStyles?.();
	}
	get duration() {
		let e = this.animation.effect?.getComputedTiming?.().duration || 0;
		return /* @__PURE__ */ G(Number(e));
	}
	get time() {
		return /* @__PURE__ */ G(Number(this.animation.currentTime) || 0);
	}
	set time(e) {
		this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ W(e);
	}
	get speed() {
		return this.animation.playbackRate;
	}
	set speed(e) {
		e < 0 && (this.finishedTime = null), this.animation.playbackRate = e;
	}
	get state() {
		return this.finishedTime === null ? this.animation.playState : "finished";
	}
	get startTime() {
		return Number(this.animation.startTime);
	}
	set startTime(e) {
		this.animation.startTime = e;
	}
	attachTimeline({ timeline: e, observe: t }) {
		return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, e && va() ? (this.animation.timeline = e, P) : t(this);
	}
}, ka = {
	anticipate: Ei,
	backInOut: Ti,
	circInOut: ki
};
function Aa(e) {
	return e in ka;
}
function ja(e) {
	typeof e.ease == "string" && Aa(e.ease) && (e.ease = ka[e.ease]);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/NativeAnimationExtended.mjs
var Ma = 10, Na = class extends Oa {
	constructor(e) {
		ja(e), zi(e), super(e), e.startTime && (this.startTime = e.startTime), this.options = e;
	}
	updateMotionValue(e) {
		let { motionValue: t, onUpdate: n, onComplete: r, element: i, ...a } = this.options;
		if (!t) return;
		if (e !== void 0) {
			t.set(e);
			return;
		}
		let o = new Hi({
			...a,
			autoplay: !1
		}), s = /* @__PURE__ */ W(this.finishedTime ?? this.time);
		t.setWithVelocity(o.sample(s - Ma).value, o.sample(s).value, Ma), o.stop();
	}
}, Pa = (e, t) => t !== "zIndex" && !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (Sr.test(e) || e === "0") && !e.startsWith("url("));
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/utils/can-animate.mjs
function Fa(e) {
	let t = e[0];
	if (e.length === 1) return !0;
	for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Ia(e, t, n, r) {
	let i = e[0];
	if (i === null) return !1;
	if (t === "display" || t === "visibility") return !0;
	let a = e[e.length - 1], o = Pa(i, t), s = Pa(a, t);
	return vt(o === s, `You are trying to animate ${t} from "${i}" to "${a}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${a} via the \`style\` property.`), !o || !s ? !1 : Fa(e) || (n === "spring" || Ea(n)) && r;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/waapi/supports/waapi.mjs
var La = /* @__PURE__ */ new Set([
	"opacity",
	"clipPath",
	"filter",
	"transform"
]), Ra = /*@__PURE__*/ _a(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function za(e) {
	let { motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: a, type: o } = e;
	if (!_e(t?.owner?.current)) return !1;
	let { onUpdate: s, transformTemplate: c } = t.owner.getProps();
	return Ra() && n && La.has(n) && (n !== "transform" || !c) && !s && !r && i !== "mirror" && a !== 0 && o !== "inertia";
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs
var Ba = 40, Va = class extends Bi {
	constructor({ autoplay: e = !0, delay: t = 0, type: n = "keyframes", repeat: r = 0, repeatDelay: i = 0, repeatType: a = "loop", keyframes: o, name: s, motionValue: c, element: l, ...u }) {
		super(), this.stop = () => {
			this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
		}, this.createdAt = U.now();
		let d = {
			autoplay: e,
			delay: t,
			type: n,
			repeat: r,
			repeatDelay: i,
			repeatType: a,
			name: s,
			motionValue: c,
			element: l,
			...u
		}, f = l?.KeyframeResolver || ma;
		this.keyframeResolver = new f(o, (e, t, n) => this.onKeyframesResolved(e, t, d, !n), s, c, l), this.keyframeResolver?.scheduleResolve();
	}
	onKeyframesResolved(e, t, n, r) {
		this.keyframeResolver = void 0;
		let { name: i, type: a, velocity: o, delay: s, isHandoff: c, onUpdate: l } = n;
		this.resolvedAt = U.now(), Ia(e, i, a, o) || ((N.instantAnimations || !s) && l?.(Li(e, n, t)), e[0] = e[e.length - 1], n.duration = 0, n.repeat = 0);
		let u = {
			startTime: r ? this.resolvedAt && this.resolvedAt - this.createdAt > Ba ? this.resolvedAt : this.createdAt : void 0,
			finalKeyframe: t,
			...n,
			keyframes: e
		}, d = !c && za(u) ? new Na({
			...u,
			element: u.motionValue.owner.current
		}) : new Hi(u);
		d.finished.then(() => this.notifyFinished()).catch(P), this.pendingTimeline &&= (this.stopTimeline = d.attachTimeline(this.pendingTimeline), void 0), this._animation = d;
	}
	get finished() {
		return this._animation ? this.animation.finished : this._finished;
	}
	then(e, t) {
		return this.finished.finally(e).then(() => {});
	}
	get animation() {
		return this._animation || (this.keyframeResolver?.resume(), pa()), this._animation;
	}
	get duration() {
		return this.animation.duration;
	}
	get time() {
		return this.animation.time;
	}
	set time(e) {
		this.animation.time = e;
	}
	get speed() {
		return this.animation.speed;
	}
	get state() {
		return this.animation.state;
	}
	set speed(e) {
		this.animation.speed = e;
	}
	get startTime() {
		return this.animation.startTime;
	}
	attachTimeline(e) {
		return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop();
	}
	play() {
		this.animation.play();
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.complete();
	}
	cancel() {
		this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
	}
}, Ha = (e, t, n, r = {}, i, a) => (o) => {
	let s = Yn(r, e) || {}, c = s.delay || r.delay || 0, { elapsed: l = 0 } = r;
	l -= /* @__PURE__ */ W(c);
	let u = {
		keyframes: Array.isArray(n) ? n : [null, n],
		ease: "easeOut",
		velocity: t.getVelocity(),
		...s,
		delay: -l,
		onUpdate: (e) => {
			t.set(e), s.onUpdate && s.onUpdate(e);
		},
		onComplete: () => {
			o(), s.onComplete && s.onComplete();
		},
		name: e,
		motionValue: t,
		element: a ? void 0 : i
	};
	Jn(s) || Object.assign(u, qn(e, u)), u.duration &&= /* @__PURE__ */ W(u.duration), u.repeatDelay &&= /* @__PURE__ */ W(u.repeatDelay), u.from !== void 0 && (u.keyframes[0] = u.from);
	let d = !1;
	if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (u.duration = 0, u.delay === 0 && (d = !0)), (N.instantAnimations || N.skipAnimations) && (d = !0, u.duration = 0, u.delay = 0), u.allowFlatten = !s.type && !s.ease, d && !a && t.get() !== void 0) {
		let e = Hn(u.keyframes, s);
		if (e !== void 0) {
			F.update(() => {
				u.onUpdate(e), u.onComplete();
			});
			return;
		}
	}
	return s.isSync ? new Hi(u) : new Va(u);
}, Ua = /* @__PURE__ */ new Set([
	"width",
	"height",
	"top",
	"left",
	"right",
	"bottom",
	...At
]);
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/interfaces/visual-element-target.mjs
function Wa({ protectedKeys: e, needsAnimating: t }, n) {
	let r = e.hasOwnProperty(n) && t[n] !== !0;
	return t[n] = !1, r;
}
function Ga(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
	let { transition: a = e.getDefaultTransition(), transitionEnd: o, ...s } = t;
	r && (a = r);
	let c = [], l = i && e.animationState && e.animationState.getState()[i];
	for (let t in s) {
		let r = e.getValue(t, e.latestValues[t] ?? null), i = s[t];
		if (i === void 0 || l && Wa(l, t)) continue;
		let o = {
			delay: n,
			...Yn(a || {}, t)
		}, u = r.get();
		if (u !== void 0 && !r.isAnimating && !Array.isArray(i) && i === u && !o.velocity) continue;
		let d = !1;
		if (window.MotionHandoffAnimation) {
			let n = Bn(e);
			if (n) {
				let e = window.MotionHandoffAnimation(n, t, F);
				e !== null && (o.startTime = e, d = !0);
			}
		}
		zn(e, t), r.start(Ha(t, r, i, e.shouldReduceMotion && Ua.has(t) ? { type: !1 } : o, e, d));
		let f = r.animation;
		f && c.push(f);
	}
	return o && Promise.all(c).then(() => {
		F.update(() => {
			o && Ln(e, o);
		});
	}), c;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/interfaces/visual-element-variant.mjs
function Ka(e, t, n = {}) {
	let r = xn(e, t, n.type === "exit" ? e.presenceContext?.custom : void 0), { transition: i = e.getDefaultTransition() || {} } = r || {};
	n.transitionOverride && (i = n.transitionOverride);
	let a = r ? () => Promise.all(Ga(e, r, n)) : () => Promise.resolve(), o = e.variantChildren && e.variantChildren.size ? (r = 0) => {
		let { delayChildren: a = 0, staggerChildren: o, staggerDirection: s } = i;
		return qa(e, t, a + r, o, s, n);
	} : () => Promise.resolve(), { when: s } = i;
	if (s) {
		let [e, t] = s === "beforeChildren" ? [a, o] : [o, a];
		return e().then(() => t());
	}
	return Promise.all([a(), o(n.delay)]);
}
function qa(e, t, n = 0, r = 0, i = 1, a) {
	let o = [], s = (e.variantChildren.size - 1) * r, c = i === 1 ? (e = 0) => e * r : (e = 0) => s - e * r;
	return Array.from(e.variantChildren).sort(Ja).forEach((e, r) => {
		e.notify("AnimationStart", t), o.push(Ka(e, t, {
			...a,
			delay: n + c(r)
		}).then(() => e.notify("AnimationComplete", t)));
	}), Promise.all(o);
}
function Ja(e, t) {
	return e.sortNodePosition(t);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/interfaces/visual-element.mjs
function Ya(e, t, n = {}) {
	e.notify("AnimationStart", t);
	let r;
	if (Array.isArray(t)) {
		let i = t.map((t) => Ka(e, t, n));
		r = Promise.all(i);
	} else if (typeof t == "string") r = Ka(e, t, n);
	else {
		let i = typeof t == "function" ? xn(e, t, n.custom) : t;
		r = Promise.all(Ga(e, i, n));
	}
	return r.then(() => {
		e.notify("AnimationComplete", t);
	});
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/utils/shallow-compare.mjs
function Xa(e, t) {
	if (!Array.isArray(t)) return !1;
	let n = t.length;
	if (n !== e.length) return !1;
	for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
	return !0;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/utils/get-variant-context.mjs
var Za = tt.length;
function Qa(e) {
	if (!e) return;
	if (!e.isControllingVariants) {
		let t = e.parent && Qa(e.parent) || {};
		return e.props.initial !== void 0 && (t.initial = e.props.initial), t;
	}
	let t = {};
	for (let n = 0; n < Za; n++) {
		let r = tt[n], i = e.props[r];
		($e(i) || i === !1) && (t[r] = i);
	}
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/utils/animation-state.mjs
var $a = [...et].reverse(), eo = et.length;
function to(e) {
	return (t) => Promise.all(t.map(({ animation: t, options: n }) => Ya(e, t, n)));
}
function no(e) {
	let t = to(e), n = ao(), r = !0, i = (t) => (n, r) => {
		let i = xn(e, r, t === "exit" ? e.presenceContext?.custom : void 0);
		if (i) {
			let { transition: e, transitionEnd: t, ...r } = i;
			n = {
				...n,
				...r,
				...t
			};
		}
		return n;
	};
	function a(n) {
		t = n(e);
	}
	function o(a) {
		let { props: o } = e, s = Qa(e.parent) || {}, c = [], l = /* @__PURE__ */ new Set(), u = {}, d = Infinity;
		for (let t = 0; t < eo; t++) {
			let f = $a[t], p = n[f], m = o[f] === void 0 ? s[f] : o[f], h = $e(m), g = f === a ? p.isActive : null;
			g === !1 && (d = t);
			let _ = m === s[f] && m !== o[f] && h;
			if (_ && r && e.manuallyAnimateOnMount && (_ = !1), p.protectedKeys = { ...u }, !p.isActive && g === null || !m && !p.prevProp || Qe(m) || typeof m == "boolean") continue;
			let v = ro(p.prevProp, m), y = v || f === a && p.isActive && !_ && h || t > d && h, b = !1, x = Array.isArray(m) ? m : [m], S = x.reduce(i(f), {});
			g === !1 && (S = {});
			let { prevResolvedValues: C = {} } = p, w = {
				...C,
				...S
			}, T = (t) => {
				y = !0, l.has(t) && (b = !0, l.delete(t)), p.needsAnimating[t] = !0;
				let n = e.getValue(t);
				n && (n.liveStyle = !1);
			};
			for (let e in w) {
				let t = S[e], n = C[e];
				if (u.hasOwnProperty(e)) continue;
				let r = !1;
				r = Sn(t) && Sn(n) ? !Xa(t, n) : t !== n, r ? t == null ? l.add(e) : T(e) : t !== void 0 && l.has(e) ? T(e) : p.protectedKeys[e] = !0;
			}
			p.prevProp = m, p.prevResolvedValues = S, p.isActive && (u = {
				...u,
				...S
			}), r && e.blockInitialAnimation && (y = !1), y && (!(_ && v) || b) && c.push(...x.map((e) => ({
				animation: e,
				options: { type: f }
			})));
		}
		if (l.size) {
			let t = {};
			if (typeof o.initial != "boolean") {
				let n = xn(e, Array.isArray(o.initial) ? o.initial[0] : o.initial);
				n && n.transition && (t.transition = n.transition);
			}
			l.forEach((n) => {
				let r = e.getBaseTarget(n), i = e.getValue(n);
				i && (i.liveStyle = !0), t[n] = r ?? null;
			}), c.push({ animation: t });
		}
		let f = !!c.length;
		return r && (o.initial === !1 || o.initial === o.animate) && !e.manuallyAnimateOnMount && (f = !1), r = !1, f ? t(c) : Promise.resolve();
	}
	function s(t, r) {
		if (n[t].isActive === r) return Promise.resolve();
		e.variantChildren?.forEach((e) => e.animationState?.setActive(t, r)), n[t].isActive = r;
		let i = o(t);
		for (let e in n) n[e].protectedKeys = {};
		return i;
	}
	return {
		animateChanges: o,
		setActive: s,
		setAnimateFunction: a,
		getState: () => n,
		reset: () => {
			n = ao(), r = !0;
		}
	};
}
function ro(e, t) {
	return typeof t == "string" ? t !== e : Array.isArray(t) ? !Xa(t, e) : !1;
}
function io(e = !1) {
	return {
		isActive: e,
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {}
	};
}
function ao() {
	return {
		animate: io(!0),
		whileInView: io(),
		whileHover: io(),
		whileTap: io(),
		whileDrag: io(),
		whileFocus: io(),
		exit: io()
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/motion/features/Feature.mjs
var oo = class {
	constructor(e) {
		this.isMounted = !1, this.node = e;
	}
	update() {}
}, so = class extends oo {
	constructor(e) {
		super(e), e.animationState ||= no(e);
	}
	updateAnimationControlsSubscription() {
		let { animate: e } = this.node.getProps();
		Qe(e) && (this.unmountControls = e.subscribe(this.node));
	}
	mount() {
		this.updateAnimationControlsSubscription();
	}
	update() {
		let { animate: e } = this.node.getProps(), { animate: t } = this.node.prevProps || {};
		e !== t && this.updateAnimationControlsSubscription();
	}
	unmount() {
		this.node.animationState.reset(), this.unmountControls?.();
	}
}, co = 0, lo = {
	animation: { Feature: so },
	exit: { Feature: class extends oo {
		constructor() {
			super(...arguments), this.id = co++;
		}
		update() {
			if (!this.node.presenceContext) return;
			let { isPresent: e, onExitComplete: t } = this.node.presenceContext, { isPresent: n } = this.node.prevPresenceContext || {};
			if (!this.node.animationState || e === n) return;
			let r = this.node.animationState.setActive("exit", !e);
			t && !e && r.then(() => {
				t(this.id);
			});
		}
		mount() {
			let { register: e, onExitComplete: t } = this.node.presenceContext || {};
			t && t(this.id), e && (this.unmount = e(this.id));
		}
		unmount() {}
	} }
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/events/add-dom-event.mjs
function uo(e, t, n, r = { passive: !0 }) {
	return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/gestures/utils/is-primary-pointer.mjs
var fo = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/events/event-info.mjs
function po(e) {
	return { point: {
		x: e.pageX,
		y: e.pageY
	} };
}
var mo = (e) => (t) => fo(t) && e(t, po(t));
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/events/add-pointer-event.mjs
function ho(e, t, n, r) {
	return uo(e, t, mo(n), r);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/conversion.mjs
function go({ top: e, left: t, right: n, bottom: r }) {
	return {
		x: {
			min: t,
			max: n
		},
		y: {
			min: e,
			max: r
		}
	};
}
function _o({ x: e, y: t }) {
	return {
		top: t.min,
		right: e.max,
		bottom: t.max,
		left: e.min
	};
}
function vo(e, t) {
	if (!t) return e;
	let n = t({
		x: e.left,
		y: e.top
	}), r = t({
		x: e.right,
		y: e.bottom
	});
	return {
		top: n.y,
		left: n.x,
		bottom: r.y,
		right: r.x
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/delta-calc.mjs
var yo = .9999, bo = 1.0001, xo = -.01, So = .01;
function Y(e) {
	return e.max - e.min;
}
function Co(e, t, n) {
	return Math.abs(e - t) <= n;
}
function wo(e, t, n, r = .5) {
	e.origin = r, e.originPoint = q(t.min, t.max, e.origin), e.scale = Y(n) / Y(t), e.translate = q(n.min, n.max, e.origin) - e.originPoint, (e.scale >= yo && e.scale <= bo || isNaN(e.scale)) && (e.scale = 1), (e.translate >= xo && e.translate <= So || isNaN(e.translate)) && (e.translate = 0);
}
function To(e, t, n, r) {
	wo(e.x, t.x, n.x, r ? r.originX : void 0), wo(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Eo(e, t, n) {
	e.min = n.min + t.min, e.max = e.min + Y(t);
}
function Do(e, t, n) {
	Eo(e.x, t.x, n.x), Eo(e.y, t.y, n.y);
}
function Oo(e, t, n) {
	e.min = t.min - n.min, e.max = e.min + Y(t);
}
function ko(e, t, n) {
	Oo(e.x, t.x, n.x), Oo(e.y, t.y, n.y);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/models.mjs
var Ao = () => ({
	translate: 0,
	scale: 1,
	origin: 0,
	originPoint: 0
}), jo = () => ({
	x: Ao(),
	y: Ao()
}), Mo = () => ({
	min: 0,
	max: 0
}), X = () => ({
	x: Mo(),
	y: Mo()
});
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/utils/each-axis.mjs
function Z(e) {
	return [e("x"), e("y")];
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/utils/has-transform.mjs
function No(e) {
	return e === void 0 || e === 1;
}
function Po({ scale: e, scaleX: t, scaleY: n }) {
	return !No(e) || !No(t) || !No(n);
}
function Fo(e) {
	return Po(e) || Io(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Io(e) {
	return Lo(e.x) || Lo(e.y);
}
function Lo(e) {
	return e && e !== "0%";
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/delta-apply.mjs
function Ro(e, t, n) {
	return n + t * (e - n);
}
function zo(e, t, n, r, i) {
	return i !== void 0 && (e = Ro(e, i, r)), Ro(e, n, r) + t;
}
function Bo(e, t = 0, n = 1, r, i) {
	e.min = zo(e.min, t, n, r, i), e.max = zo(e.max, t, n, r, i);
}
function Vo(e, { x: t, y: n }) {
	Bo(e.x, t.translate, t.scale, t.originPoint), Bo(e.y, n.translate, n.scale, n.originPoint);
}
var Ho = .999999999999, Uo = 1.0000000000001;
function Wo(e, t, n, r = !1) {
	let i = n.length;
	if (!i) return;
	t.x = t.y = 1;
	let a, o;
	for (let s = 0; s < i; s++) {
		a = n[s], o = a.projectionDelta;
		let { visualElement: i } = a.options;
		i && i.props.style && i.props.style.display === "contents" || (r && a.options.layoutScroll && a.scroll && a !== a.root && qo(e, {
			x: -a.scroll.offset.x,
			y: -a.scroll.offset.y
		}), o && (t.x *= o.x.scale, t.y *= o.y.scale, Vo(e, o)), r && Fo(a.latestValues) && qo(e, a.latestValues));
	}
	t.x < Uo && t.x > Ho && (t.x = 1), t.y < Uo && t.y > Ho && (t.y = 1);
}
function Go(e, t) {
	e.min += t, e.max += t;
}
function Ko(e, t, n, r, i = .5) {
	Bo(e, t, n, q(e.min, e.max, i), r);
}
function qo(e, t) {
	Ko(e.x, t.x, t.scaleX, t.scale, t.originX), Ko(e.y, t.y, t.scaleY, t.scale, t.originY);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/utils/measure.mjs
function Jo(e, t) {
	return go(vo(e.getBoundingClientRect(), t));
}
function Yo(e, t, n) {
	let r = Jo(e, n), { scroll: i } = t;
	return i && (Go(r.x, i.offset.x), Go(r.y, i.offset.y)), r;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/utils/get-context-window.mjs
var Xo = ({ current: e }) => e ? e.ownerDocument.defaultView : null, Zo = (e, t) => Math.abs(e - t);
function Qo(e, t) {
	let n = Zo(e.x, t.x), r = Zo(e.y, t.y);
	return Math.sqrt(n ** 2 + r ** 2);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/gestures/pan/PanSession.mjs
var $o = class {
	constructor(e, t, { transformPagePoint: n, contextWindow: r, dragSnapToOrigin: i = !1 } = {}) {
		if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
			if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			let e = ns(this.lastMoveEventInfo, this.history), t = this.startEvent !== null, n = Qo(e.offset, {
				x: 0,
				y: 0
			}) >= 3;
			if (!t && !n) return;
			let { point: r } = e, { timestamp: i } = L;
			this.history.push({
				...r,
				timestamp: i
			});
			let { onStart: a, onMove: o } = this.handlers;
			t || (a && a(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent), o && o(this.lastMoveEvent, e);
		}, this.handlePointerMove = (e, t) => {
			this.lastMoveEvent = e, this.lastMoveEventInfo = es(t, this.transformPagePoint), F.update(this.updatePoint, !0);
		}, this.handlePointerUp = (e, t) => {
			this.end();
			let { onEnd: n, onSessionEnd: r, resumeAnimation: i } = this.handlers;
			if (this.dragSnapToOrigin && i && i(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			let a = ns(e.type === "pointercancel" ? this.lastMoveEventInfo : es(t, this.transformPagePoint), this.history);
			this.startEvent && n && n(e, a), r && r(e, a);
		}, !fo(e)) return;
		this.dragSnapToOrigin = i, this.handlers = t, this.transformPagePoint = n, this.contextWindow = r || window;
		let a = es(po(e), this.transformPagePoint), { point: o } = a, { timestamp: s } = L;
		this.history = [{
			...o,
			timestamp: s
		}];
		let { onSessionStart: c } = t;
		c && c(e, ns(a, this.history)), this.removeListeners = Pr(ho(this.contextWindow, "pointermove", this.handlePointerMove), ho(this.contextWindow, "pointerup", this.handlePointerUp), ho(this.contextWindow, "pointercancel", this.handlePointerUp));
	}
	updateHandlers(e) {
		this.handlers = e;
	}
	end() {
		this.removeListeners && this.removeListeners(), I(this.updatePoint);
	}
};
function es(e, t) {
	return t ? { point: t(e.point) } : e;
}
function ts(e, t) {
	return {
		x: e.x - t.x,
		y: e.y - t.y
	};
}
function ns({ point: e }, t) {
	return {
		point: e,
		delta: ts(e, is(t)),
		offset: ts(e, rs(t)),
		velocity: as(t, .1)
	};
}
function rs(e) {
	return e[0];
}
function is(e) {
	return e[e.length - 1];
}
function as(e, t) {
	if (e.length < 2) return {
		x: 0,
		y: 0
	};
	let n = e.length - 1, r = null, i = is(e);
	for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > /* @__PURE__ */ W(t)));) n--;
	if (!r) return {
		x: 0,
		y: 0
	};
	let a = /* @__PURE__ */ G(i.timestamp - r.timestamp);
	if (a === 0) return {
		x: 0,
		y: 0
	};
	let o = {
		x: (i.x - r.x) / a,
		y: (i.y - r.y) / a
	};
	return o.x === Infinity && (o.x = 0), o.y === Infinity && (o.y = 0), o;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/gestures/drag/utils/constraints.mjs
function os(e, { min: t, max: n }, r) {
	return t !== void 0 && e < t ? e = r ? q(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? q(n, e, r.max) : Math.min(e, n)), e;
}
function ss(e, t, n) {
	return {
		min: t === void 0 ? void 0 : e.min + t,
		max: n === void 0 ? void 0 : e.max + n - (e.max - e.min)
	};
}
function cs(e, { top: t, left: n, bottom: r, right: i }) {
	return {
		x: ss(e.x, n, i),
		y: ss(e.y, t, r)
	};
}
function ls(e, t) {
	let n = t.min - e.min, r = t.max - e.max;
	return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
		min: n,
		max: r
	};
}
function us(e, t) {
	return {
		x: ls(e.x, t.x),
		y: ls(e.y, t.y)
	};
}
function ds(e, t) {
	let n = .5, r = Y(e), i = Y(t);
	return i > r ? n = /* @__PURE__ */ oi(t.min, t.max - r, e.min) : r > i && (n = /* @__PURE__ */ oi(e.min, e.max - i, t.min)), z(0, 1, n);
}
function fs(e, t) {
	let n = {};
	return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
var ps = .35;
function ms(e = ps) {
	return e === !1 ? e = 0 : e === !0 && (e = ps), {
		x: hs(e, "left", "right"),
		y: hs(e, "top", "bottom")
	};
}
function hs(e, t, n) {
	return {
		min: gs(e, t),
		max: gs(e, n)
	};
}
function gs(e, t) {
	return typeof e == "number" ? e : e[t] || 0;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/gestures/drag/state/is-active.mjs
var Q = {
	x: !1,
	y: !1
};
function _s() {
	return Q.x || Q.y;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/gestures/drag/state/set-active.mjs
function vs(e) {
	return e === "x" || e === "y" ? Q[e] ? null : (Q[e] = !0, () => {
		Q[e] = !1;
	}) : Q.x || Q.y ? null : (Q.x = Q.y = !0, () => {
		Q.x = Q.y = !1;
	});
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
var ys = /* @__PURE__ */ new WeakMap(), bs = class {
	constructor(e) {
		this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
			x: 0,
			y: 0
		}, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = X(), this.visualElement = e;
	}
	start(e, { snapToCursor: t = !1 } = {}) {
		let { presenceContext: n } = this.visualElement;
		if (n && n.isPresent === !1) return;
		let r = (e) => {
			let { dragSnapToOrigin: n } = this.getProps();
			n ? this.pauseAnimation() : this.stopAnimation(), t && this.snapToCursor(po(e).point);
		}, i = (e, t) => {
			let { drag: n, dragPropagation: r, onDragStart: i } = this.getProps();
			if (n && !r && (this.openDragLock && this.openDragLock(), this.openDragLock = vs(n), !this.openDragLock)) return;
			this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Z((e) => {
				let t = this.getAxisMotionValue(e).get() || 0;
				if (B.test(t)) {
					let { projection: n } = this.visualElement;
					if (n && n.layout) {
						let r = n.layout.layoutBox[e];
						r && (t = Y(r) * (parseFloat(t) / 100));
					}
				}
				this.originPoint[e] = t;
			}), i && F.postRender(() => i(e, t)), zn(this.visualElement, "transform");
			let { animationState: a } = this.visualElement;
			a && a.setActive("whileDrag", !0);
		}, a = (e, t) => {
			let { dragPropagation: n, dragDirectionLock: r, onDirectionLock: i, onDrag: a } = this.getProps();
			if (!n && !this.openDragLock) return;
			let { offset: o } = t;
			if (r && this.currentDirection === null) {
				this.currentDirection = Ss(o), this.currentDirection !== null && i && i(this.currentDirection);
				return;
			}
			this.updateAxis("x", t.point, o), this.updateAxis("y", t.point, o), this.visualElement.render(), a && a(e, t);
		}, o = (e, t) => this.stop(e, t), s = () => Z((e) => this.getAnimationState(e) === "paused" && this.getAxisMotionValue(e).animation?.play()), { dragSnapToOrigin: c } = this.getProps();
		this.panSession = new $o(e, {
			onSessionStart: r,
			onStart: i,
			onMove: a,
			onSessionEnd: o,
			resumeAnimation: s
		}, {
			transformPagePoint: this.visualElement.getTransformPagePoint(),
			dragSnapToOrigin: c,
			contextWindow: Xo(this.visualElement)
		});
	}
	stop(e, t) {
		let n = this.isDragging;
		if (this.cancel(), !n) return;
		let { velocity: r } = t;
		this.startAnimation(r);
		let { onDragEnd: i } = this.getProps();
		i && F.postRender(() => i(e, t));
	}
	cancel() {
		this.isDragging = !1;
		let { projection: e, animationState: t } = this.visualElement;
		e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
		let { dragPropagation: n } = this.getProps();
		!n && this.openDragLock && (this.openDragLock(), this.openDragLock = null), t && t.setActive("whileDrag", !1);
	}
	updateAxis(e, t, n) {
		let { drag: r } = this.getProps();
		if (!n || !xs(e, r, this.currentDirection)) return;
		let i = this.getAxisMotionValue(e), a = this.originPoint[e] + n[e];
		this.constraints && this.constraints[e] && (a = os(a, this.constraints[e], this.elastic[e])), i.set(a);
	}
	resolveConstraints() {
		let { dragConstraints: e, dragElastic: t } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, r = this.constraints;
		e && ct(e) ? this.constraints ||= this.resolveRefConstraints() : this.constraints = e && n ? cs(n.layoutBox, e) : !1, this.elastic = ms(t), r !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && Z((e) => {
			this.constraints !== !1 && this.getAxisMotionValue(e) && (this.constraints[e] = fs(n.layoutBox[e], this.constraints[e]));
		});
	}
	resolveRefConstraints() {
		let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
		if (!e || !ct(e)) return !1;
		let n = e.current;
		R(n !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
		let { projection: r } = this.visualElement;
		if (!r || !r.layout) return !1;
		let i = Yo(n, r.root, this.visualElement.getTransformPagePoint()), a = us(r.layout.layoutBox, i);
		if (t) {
			let e = t(_o(a));
			this.hasMutatedConstraints = !!e, e && (a = go(e));
		}
		return a;
	}
	startAnimation(e) {
		let { drag: t, dragMomentum: n, dragElastic: r, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: o } = this.getProps(), s = this.constraints || {}, c = Z((o) => {
			if (!xs(o, t, this.currentDirection)) return;
			let c = s && s[o] || {};
			a && (c = {
				min: 0,
				max: 0
			});
			let l = r ? 200 : 1e6, u = r ? 40 : 1e7, d = {
				type: "inertia",
				velocity: n ? e[o] : 0,
				bounceStiffness: l,
				bounceDamping: u,
				timeConstant: 750,
				restDelta: 1,
				restSpeed: 10,
				...i,
				...c
			};
			return this.startAxisValueAnimation(o, d);
		});
		return Promise.all(c).then(o);
	}
	startAxisValueAnimation(e, t) {
		let n = this.getAxisMotionValue(e);
		return zn(this.visualElement, e), n.start(Ha(e, n, 0, t, this.visualElement, !1));
	}
	stopAnimation() {
		Z((e) => this.getAxisMotionValue(e).stop());
	}
	pauseAnimation() {
		Z((e) => this.getAxisMotionValue(e).animation?.pause());
	}
	getAnimationState(e) {
		return this.getAxisMotionValue(e).animation?.state;
	}
	getAxisMotionValue(e) {
		let t = `_drag${e.toUpperCase()}`, n = this.visualElement.getProps();
		return n[t] || this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0);
	}
	snapToCursor(e) {
		Z((t) => {
			let { drag: n } = this.getProps();
			if (!xs(t, n, this.currentDirection)) return;
			let { projection: r } = this.visualElement, i = this.getAxisMotionValue(t);
			if (r && r.layout) {
				let { min: n, max: a } = r.layout.layoutBox[t];
				i.set(e[t] - q(n, a, .5));
			}
		});
	}
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		let { drag: e, dragConstraints: t } = this.getProps(), { projection: n } = this.visualElement;
		if (!ct(t) || !n || !this.constraints) return;
		this.stopAnimation();
		let r = {
			x: 0,
			y: 0
		};
		Z((e) => {
			let t = this.getAxisMotionValue(e);
			if (t && this.constraints !== !1) {
				let n = t.get();
				r[e] = ds({
					min: n,
					max: n
				}, this.constraints[e]);
			}
		});
		let { transformTemplate: i } = this.visualElement.getProps();
		this.visualElement.current.style.transform = i ? i({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), Z((t) => {
			if (!xs(t, e, null)) return;
			let n = this.getAxisMotionValue(t), { min: i, max: a } = this.constraints[t];
			n.set(q(i, a, r[t]));
		});
	}
	addListeners() {
		if (!this.visualElement.current) return;
		ys.set(this.visualElement, this);
		let e = this.visualElement.current, t = ho(e, "pointerdown", (e) => {
			let { drag: t, dragListener: n = !0 } = this.getProps();
			t && n && this.start(e);
		}), n = () => {
			let { dragConstraints: e } = this.getProps();
			ct(e) && e.current && (this.constraints = this.resolveRefConstraints());
		}, { projection: r } = this.visualElement, i = r.addEventListener("measure", n);
		r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()), F.read(n);
		let a = uo(window, "resize", () => this.scalePositionWithinConstraints()), o = r.addEventListener("didUpdate", (({ delta: e, hasLayoutChanged: t }) => {
			this.isDragging && t && (Z((t) => {
				let n = this.getAxisMotionValue(t);
				n && (this.originPoint[t] += e[t].translate, n.set(n.get() + e[t].translate));
			}), this.visualElement.render());
		}));
		return () => {
			a(), t(), i(), o && o();
		};
	}
	getProps() {
		let e = this.visualElement.getProps(), { drag: t = !1, dragDirectionLock: n = !1, dragPropagation: r = !1, dragConstraints: i = !1, dragElastic: a = ps, dragMomentum: o = !0 } = e;
		return {
			...e,
			drag: t,
			dragDirectionLock: n,
			dragPropagation: r,
			dragConstraints: i,
			dragElastic: a,
			dragMomentum: o
		};
	}
};
function xs(e, t, n) {
	return (t === !0 || t === e) && (n === null || n === e);
}
function Ss(e, t = 10) {
	let n = null;
	return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/gestures/drag/index.mjs
var Cs = class extends oo {
	constructor(e) {
		super(e), this.removeGroupControls = P, this.removeListeners = P, this.controls = new bs(e);
	}
	mount() {
		let { dragControls: e } = this.node.getProps();
		e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || P;
	}
	unmount() {
		this.removeGroupControls(), this.removeListeners();
	}
}, ws = (e) => (t, n) => {
	e && F.postRender(() => e(t, n));
}, Ts = class extends oo {
	constructor() {
		super(...arguments), this.removePointerDownListener = P;
	}
	onPointerDown(e) {
		this.session = new $o(e, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
			contextWindow: Xo(this.node)
		});
	}
	createPanHandlers() {
		let { onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: r } = this.node.getProps();
		return {
			onSessionStart: ws(e),
			onStart: ws(t),
			onMove: n,
			onEnd: (e, t) => {
				delete this.session, r && F.postRender(() => r(e, t));
			}
		};
	}
	mount() {
		this.removePointerDownListener = ho(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers());
	}
	unmount() {
		this.removePointerDownListener(), this.session && this.session.end();
	}
}, Es = {
	hasAnimatedSinceResize: !0,
	hasEverUpdated: !1
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/styles/scale-border-radius.mjs
function Ds(e, t) {
	return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
var Os = { correct: (e, t) => {
	if (!t.target) return e;
	if (typeof e == "string") {
		if (V.test(e)) e = parseFloat(e);
		else return e;
	}
	return `${Ds(e, t.target.x)}% ${Ds(e, t.target.y)}%`;
} }, ks = { correct: (e, { treeScale: t, projectionDelta: n }) => {
	let r = e, i = Sr.parse(e);
	if (i.length > 5) return r;
	let a = Sr.createTransformer(e), o = typeof i[0] == "number" ? 0 : 1, s = n.x.scale * t.x, c = n.y.scale * t.y;
	i[0 + o] /= s, i[1 + o] /= c;
	let l = q(s, c, .5);
	return typeof i[2 + o] == "number" && (i[2 + o] /= l), typeof i[3 + o] == "number" && (i[3 + o] /= l), a(i);
} }, As = class extends y {
	componentDidMount() {
		let { visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: r } = this.props, { projection: i } = e;
		kt(Ms), i && (t.group && t.group.add(i), n && n.register && r && n.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
			this.safeToRemove();
		}), i.setOptions({
			...i.options,
			onExitComplete: () => this.safeToRemove()
		})), Es.hasEverUpdated = !0;
	}
	getSnapshotBeforeUpdate(e) {
		let { layoutDependency: t, visualElement: n, drag: r, isPresent: i } = this.props, { projection: a } = n;
		return a ? (a.isPresent = i, r || e.layoutDependency !== t || t === void 0 || e.isPresent !== i ? a.willUpdate() : this.safeToRemove(), e.isPresent !== i && (i ? a.promote() : a.relegate() || F.postRender(() => {
			let e = a.getStack();
			(!e || !e.members.length) && this.safeToRemove();
		})), null) : null;
	}
	componentDidUpdate() {
		let { projection: e } = this.props.visualElement;
		e && (e.root.didUpdate(), pt.postRender(() => {
			!e.currentAnimation && e.isLead() && this.safeToRemove();
		}));
	}
	componentWillUnmount() {
		let { visualElement: e, layoutGroup: t, switchLayoutGroup: n } = this.props, { projection: r } = e;
		r && (r.scheduleCheckAfterUnmount(), t && t.group && t.group.remove(r), n && n.deregister && n.deregister(r));
	}
	safeToRemove() {
		let { safeToRemove: e } = this.props;
		e && e();
	}
	render() {
		return null;
	}
};
function js(e) {
	let [t, n] = Se(), r = E(ue);
	return A(As, {
		...e,
		layoutGroup: r,
		switchLayoutGroup: E(ft),
		isPresent: t,
		safeToRemove: n
	});
}
var Ms = {
	borderRadius: {
		...Os,
		applyTo: [
			"borderTopLeftRadius",
			"borderTopRightRadius",
			"borderBottomLeftRadius",
			"borderBottomRightRadius"
		]
	},
	borderTopLeftRadius: Os,
	borderTopRightRadius: Os,
	borderBottomLeftRadius: Os,
	borderBottomRightRadius: Os,
	boxShadow: ks
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/single-value.mjs
function Ns(e, t, n) {
	let r = H(e) ? e : Pn(e);
	return r.start(Ha("", r, t, n)), r.animation;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/utils/compare-by-depth.mjs
var Ps = (e, t) => e.depth - t.depth, Fs = class {
	constructor() {
		this.children = [], this.isDirty = !1;
	}
	add(e) {
		Tn(this.children, e), this.isDirty = !0;
	}
	remove(e) {
		En(this.children, e), this.isDirty = !0;
	}
	forEach(e) {
		this.isDirty && this.children.sort(Ps), this.isDirty = !1, this.children.forEach(e);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/utils/delay.mjs
function Is(e, t) {
	let n = U.now(), r = ({ timestamp: i }) => {
		let a = i - n;
		a >= t && (I(r), e(a - t));
	};
	return F.setup(r, !0), () => I(r);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/animation/mix-values.mjs
var Ls = [
	"TopLeft",
	"TopRight",
	"BottomLeft",
	"BottomRight"
], Rs = Ls.length, zs = (e) => typeof e == "string" ? parseFloat(e) : e, Bs = (e) => typeof e == "number" || V.test(e);
function Vs(e, t, n, r, i, a) {
	i ? (e.opacity = q(0, n.opacity ?? 1, Us(r)), e.opacityExit = q(t.opacity ?? 1, 0, Ws(r))) : a && (e.opacity = q(t.opacity ?? 1, n.opacity ?? 1, r));
	for (let i = 0; i < Rs; i++) {
		let a = `border${Ls[i]}Radius`, o = Hs(t, a), s = Hs(n, a);
		(o !== void 0 || s !== void 0) && (o ||= 0, s ||= 0, o === 0 || s === 0 || Bs(o) === Bs(s) ? (e[a] = Math.max(q(zs(o), zs(s), r), 0), (B.test(s) || B.test(o)) && (e[a] += "%")) : e[a] = s);
	}
	(t.rotate || n.rotate) && (e.rotate = q(t.rotate || 0, n.rotate || 0, r));
}
function Hs(e, t) {
	return e[t] === void 0 ? e.borderRadius : e[t];
}
var Us = /*@__PURE__*/ Gs(0, .5, Oi), Ws = /*@__PURE__*/ Gs(.5, .95, P);
function Gs(e, t, n) {
	return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ oi(e, t, r));
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/copy.mjs
function Ks(e, t) {
	e.min = t.min, e.max = t.max;
}
function $(e, t) {
	Ks(e.x, t.x), Ks(e.y, t.y);
}
function qs(e, t) {
	e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/delta-remove.mjs
function Js(e, t, n, r, i) {
	return e -= t, e = Ro(e, 1 / n, r), i !== void 0 && (e = Ro(e, 1 / i, r)), e;
}
function Ys(e, t = 0, n = 1, r = .5, i, a = e, o = e) {
	if (B.test(t) && (t = parseFloat(t), t = q(o.min, o.max, t / 100) - o.min), typeof t != "number") return;
	let s = q(a.min, a.max, r);
	e === a && (s -= t), e.min = Js(e.min, t, n, s, i), e.max = Js(e.max, t, n, s, i);
}
function Xs(e, t, [n, r, i], a, o) {
	Ys(e, t[n], t[r], t[i], t.scale, a, o);
}
var Zs = [
	"x",
	"scaleX",
	"originX"
], Qs = [
	"y",
	"scaleY",
	"originY"
];
function $s(e, t, n, r) {
	Xs(e.x, t, Zs, n ? n.x : void 0, r ? r.x : void 0), Xs(e.y, t, Qs, n ? n.y : void 0, r ? r.y : void 0);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/utils.mjs
function ec(e) {
	return e.translate === 0 && e.scale === 1;
}
function tc(e) {
	return ec(e.x) && ec(e.y);
}
function nc(e, t) {
	return e.min === t.min && e.max === t.max;
}
function rc(e, t) {
	return nc(e.x, t.x) && nc(e.y, t.y);
}
function ic(e, t) {
	return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function ac(e, t) {
	return ic(e.x, t.x) && ic(e.y, t.y);
}
function oc(e) {
	return Y(e.x) / Y(e.y);
}
function sc(e, t) {
	return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/shared/stack.mjs
var cc = class {
	constructor() {
		this.members = [];
	}
	add(e) {
		Tn(this.members, e), e.scheduleRender();
	}
	remove(e) {
		if (En(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
			let e = this.members[this.members.length - 1];
			e && this.promote(e);
		}
	}
	relegate(e) {
		let t = this.members.findIndex((t) => e === t);
		if (t === 0) return !1;
		let n;
		for (let e = t; e >= 0; e--) {
			let t = this.members[e];
			if (t.isPresent !== !1) {
				n = t;
				break;
			}
		}
		return n ? (this.promote(n), !0) : !1;
	}
	promote(e, t) {
		let n = this.lead;
		if (e !== n && (this.prevLead = n, this.lead = e, e.show(), n)) {
			n.instance && n.scheduleRender(), e.scheduleRender(), e.resumeFrom = n, t && (e.resumeFrom.preserveOpacity = !0), n.snapshot && (e.snapshot = n.snapshot, e.snapshot.latestValues = n.animationValues || n.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
			let { crossfade: r } = e.options;
			r === !1 && n.hide();
		}
	}
	exitAnimationComplete() {
		this.members.forEach((e) => {
			let { options: t, resumingFrom: n } = e;
			t.onExitComplete && t.onExitComplete(), n && n.options.onExitComplete && n.options.onExitComplete();
		});
	}
	scheduleRender() {
		this.members.forEach((e) => {
			e.instance && e.scheduleRender(!1);
		});
	}
	removeLeadSnapshot() {
		this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/styles/transform.mjs
function lc(e, t, n) {
	let r = "", i = e.x.translate / t.x, a = e.y.translate / t.y, o = n?.z || 0;
	if ((i || a || o) && (r = `translate3d(${i}px, ${a}px, ${o}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
		let { transformPerspective: e, rotate: t, rotateX: i, rotateY: a, skewX: o, skewY: s } = n;
		e && (r = `perspective(${e}px) ${r}`), t && (r += `rotate(${t}deg) `), i && (r += `rotateX(${i}deg) `), a && (r += `rotateY(${a}deg) `), o && (r += `skewX(${o}deg) `), s && (r += `skewY(${s}deg) `);
	}
	let s = e.x.scale * t.x, c = e.y.scale * t.y;
	return (s !== 1 || c !== 1) && (r += `scale(${s}, ${c})`), r || "none";
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/utils/is-svg-element.mjs
function uc(e) {
	return ge(e) && "ownerSVGElement" in e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/utils/is-svg-svg-element.mjs
function dc(e) {
	return uc(e) && e.tagName === "svg";
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/node/create-projection-node.mjs
var fc = {
	nodes: 0,
	calculatedTargetDeltas: 0,
	calculatedProjections: 0
}, pc = [
	"",
	"X",
	"Y",
	"Z"
], mc = { visibility: "hidden" }, hc = 1e3, gc = 0;
function _c(e, t, n, r) {
	let { latestValues: i } = t;
	i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function vc(e) {
	if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
	let { visualElement: t } = e.options;
	if (!t) return;
	let n = Bn(t);
	if (window.MotionHasOptimisedAnimation(n, "transform")) {
		let { layout: t, layoutId: r } = e.options;
		window.MotionCancelOptimisedAnimation(n, "transform", F, !(t || r));
	}
	let { parent: r } = e;
	r && !r.hasCheckedOptimisedAppear && vc(r);
}
function yc({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
	return class {
		constructor(e = {}, n = t?.()) {
			this.id = gc++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
				x: 1,
				y: 1
			}, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
				this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
			}, this.updateProjection = () => {
				this.projectionUpdateScheduled = !1, M.value && (fc.nodes = fc.calculatedTargetDeltas = fc.calculatedProjections = 0), this.nodes.forEach(Sc), this.nodes.forEach(kc), this.nodes.forEach(Ac), this.nodes.forEach(Cc), M.addProjectionMetrics && M.addProjectionMetrics(fc);
			}, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = e, this.root = n ? n.root || n : this, this.path = n ? [...n.path, n] : [], this.parent = n, this.depth = n ? n.depth + 1 : 0;
			for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
			this.root === this && (this.nodes = new Fs());
		}
		addEventListener(e, t) {
			return this.eventHandlers.has(e) || this.eventHandlers.set(e, new On()), this.eventHandlers.get(e).add(t);
		}
		notifyListeners(e, ...t) {
			let n = this.eventHandlers.get(e);
			n && n.notify(...t);
		}
		hasListeners(e) {
			return this.eventHandlers.has(e);
		}
		mount(t) {
			if (this.instance) return;
			this.isSVG = uc(t) && !dc(t), this.instance = t;
			let { layoutId: n, layout: r, visualElement: i } = this.options;
			if (i && !i.current && i.mount(t), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (r || n) && (this.isLayoutDirty = !0), e) {
				let n, r = () => this.root.updateBlockedByResize = !1;
				e(t, () => {
					this.root.updateBlockedByResize = !0, n && n(), n = Is(r, 250), Es.hasAnimatedSinceResize && (Es.hasAnimatedSinceResize = !1, this.nodes.forEach(Oc));
				});
			}
			n && this.root.registerSharedNode(n, this), this.options.animate !== !1 && i && (n || r) && this.addEventListener("didUpdate", ({ delta: e, hasLayoutChanged: t, hasRelativeLayoutChanged: n, layout: r }) => {
				if (this.isTreeAnimationBlocked()) {
					this.target = void 0, this.relativeTarget = void 0;
					return;
				}
				let a = this.options.transition || i.getDefaultTransition() || Lc, { onLayoutAnimationStart: o, onLayoutAnimationComplete: s } = i.getProps(), c = !this.targetLayout || !ac(this.targetLayout, r), l = !t && n;
				if (this.options.layoutRoot || this.resumeFrom || l || t && (c || !this.currentAnimation)) {
					this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
					let t = {
						...Yn(a, "layout"),
						onPlay: o,
						onComplete: s
					};
					(i.shouldReduceMotion || this.options.layoutRoot) && (t.delay = 0, t.type = !1), this.startAnimation(t), this.setAnimationOrigin(e, l);
				} else t || Oc(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
				this.targetLayout = r;
			});
		}
		unmount() {
			this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
			let e = this.getStack();
			e && e.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), I(this.updateProjection);
		}
		blockUpdate() {
			this.updateManuallyBlocked = !0;
		}
		unblockUpdate() {
			this.updateManuallyBlocked = !1;
		}
		isUpdateBlocked() {
			return this.updateManuallyBlocked || this.updateBlockedByResize;
		}
		isTreeAnimationBlocked() {
			return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
		}
		startUpdate() {
			this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(jc), this.animationId++);
		}
		getTransformTemplate() {
			let { visualElement: e } = this.options;
			return e && e.getProps().transformTemplate;
		}
		willUpdate(e = !0) {
			if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
				this.options.onExitComplete && this.options.onExitComplete();
				return;
			}
			if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && vc(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
			this.isLayoutDirty = !0;
			for (let e = 0; e < this.path.length; e++) {
				let t = this.path[e];
				t.shouldResetTransform = !0, t.updateScroll("snapshot"), t.options.layoutRoot && t.willUpdate(!1);
			}
			let { layoutId: t, layout: n } = this.options;
			if (t === void 0 && !n) return;
			let r = this.getTransformTemplate();
			this.prevTransformTemplateValue = r ? r(this.latestValues, "") : void 0, this.updateSnapshot(), e && this.notifyListeners("willUpdate");
		}
		update() {
			if (this.updateScheduled = !1, this.isUpdateBlocked()) {
				this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Tc);
				return;
			}
			this.isUpdating || this.nodes.forEach(Ec), this.isUpdating = !1, this.nodes.forEach(Dc), this.nodes.forEach(bc), this.nodes.forEach(xc), this.clearAllSnapshots();
			let e = U.now();
			L.delta = z(0, 1e3 / 60, e - L.timestamp), L.timestamp = e, L.isProcessing = !0, Me.update.process(L), Me.preRender.process(L), Me.render.process(L), L.isProcessing = !1;
		}
		didUpdate() {
			this.updateScheduled || (this.updateScheduled = !0, pt.read(this.scheduleUpdate));
		}
		clearAllSnapshots() {
			this.nodes.forEach(wc), this.sharedNodes.forEach(Mc);
		}
		scheduleUpdateProjection() {
			this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, F.preRender(this.updateProjection, !1, !0));
		}
		scheduleCheckAfterUnmount() {
			F.postRender(() => {
				this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
			});
		}
		updateSnapshot() {
			this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !Y(this.snapshot.measuredBox.x) && !Y(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
		}
		updateLayout() {
			if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
			if (this.resumeFrom && !this.resumeFrom.instance) for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
			let e = this.layout;
			this.layout = this.measure(!1), this.layoutCorrected = X(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
			let { visualElement: t } = this.options;
			t && t.notify("LayoutMeasure", this.layout.layoutBox, e ? e.layoutBox : void 0);
		}
		updateScroll(e = "measure") {
			let t = !!(this.options.layoutScroll && this.instance);
			if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1), t && this.instance) {
				let t = r(this.instance);
				this.scroll = {
					animationId: this.root.animationId,
					phase: e,
					isRoot: t,
					offset: n(this.instance),
					wasRoot: this.scroll ? this.scroll.isRoot : t
				};
			}
		}
		resetTransform() {
			if (!i) return;
			let e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, t = this.projectionDelta && !tc(this.projectionDelta), n = this.getTransformTemplate(), r = n ? n(this.latestValues, "") : void 0, a = r !== this.prevTransformTemplateValue;
			e && this.instance && (t || Fo(this.latestValues) || a) && (i(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender());
		}
		measure(e = !0) {
			let t = this.measurePageBox(), n = this.removeElementScroll(t);
			return e && (n = this.removeTransform(n)), Vc(n), {
				animationId: this.root.animationId,
				measuredBox: t,
				layoutBox: n,
				latestValues: {},
				source: this.id
			};
		}
		measurePageBox() {
			let { visualElement: e } = this.options;
			if (!e) return X();
			let t = e.measureViewportBox();
			if (!(this.scroll?.wasRoot || this.path.some(Uc))) {
				let { scroll: e } = this.root;
				e && (Go(t.x, e.offset.x), Go(t.y, e.offset.y));
			}
			return t;
		}
		removeElementScroll(e) {
			let t = X();
			if ($(t, e), this.scroll?.wasRoot) return t;
			for (let n = 0; n < this.path.length; n++) {
				let r = this.path[n], { scroll: i, options: a } = r;
				r !== this.root && i && a.layoutScroll && (i.wasRoot && $(t, e), Go(t.x, i.offset.x), Go(t.y, i.offset.y));
			}
			return t;
		}
		applyTransform(e, t = !1) {
			let n = X();
			$(n, e);
			for (let e = 0; e < this.path.length; e++) {
				let r = this.path[e];
				!t && r.options.layoutScroll && r.scroll && r !== r.root && qo(n, {
					x: -r.scroll.offset.x,
					y: -r.scroll.offset.y
				}), Fo(r.latestValues) && qo(n, r.latestValues);
			}
			return Fo(this.latestValues) && qo(n, this.latestValues), n;
		}
		removeTransform(e) {
			let t = X();
			$(t, e);
			for (let e = 0; e < this.path.length; e++) {
				let n = this.path[e];
				if (!n.instance || !Fo(n.latestValues)) continue;
				Po(n.latestValues) && n.updateSnapshot();
				let r = X();
				$(r, n.measurePageBox()), $s(t, n.latestValues, n.snapshot ? n.snapshot.layoutBox : void 0, r);
			}
			return Fo(this.latestValues) && $s(t, this.latestValues), t;
		}
		setTargetDelta(e) {
			this.targetDelta = e, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
		}
		setOptions(e) {
			this.options = {
				...this.options,
				...e,
				crossfade: e.crossfade === void 0 || e.crossfade
			};
		}
		clearMeasurements() {
			this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
		}
		forceRelativeParentToResolveTarget() {
			this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== L.timestamp && this.relativeParent.resolveTargetDelta(!0);
		}
		resolveTargetDelta(e = !1) {
			let t = this.getLead();
			this.isProjectionDirty ||= t.isProjectionDirty, this.isTransformDirty ||= t.isTransformDirty, this.isSharedProjectionDirty ||= t.isSharedProjectionDirty;
			let n = !!this.resumingFrom || this !== t;
			if (!(e || n && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
			let { layout: r, layoutId: i } = this.options;
			if (!(!this.layout || !(r || i))) {
				if (this.resolvedRelativeTargetAt = L.timestamp, !this.targetDelta && !this.relativeTarget) {
					let e = this.getClosestProjectingParent();
					e && e.layout && this.animationProgress !== 1 ? (this.relativeParent = e, this.forceRelativeParentToResolveTarget(), this.relativeTarget = X(), this.relativeTargetOrigin = X(), ko(this.relativeTargetOrigin, this.layout.layoutBox, e.layout.layoutBox), $(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
				}
				if (!(!this.relativeTarget && !this.targetDelta)) {
					if (this.target || (this.target = X(), this.targetWithTransforms = X()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Do(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : $(this.target, this.layout.layoutBox), Vo(this.target, this.targetDelta)) : $(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
						this.attemptToResolveRelativeTarget = !1;
						let e = this.getClosestProjectingParent();
						e && !!e.resumingFrom == !!this.resumingFrom && !e.options.layoutScroll && e.target && this.animationProgress !== 1 ? (this.relativeParent = e, this.forceRelativeParentToResolveTarget(), this.relativeTarget = X(), this.relativeTargetOrigin = X(), ko(this.relativeTargetOrigin, this.target, e.target), $(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
					}
					M.value && fc.calculatedTargetDeltas++;
				}
			}
		}
		getClosestProjectingParent() {
			if (!(!this.parent || Po(this.parent.latestValues) || Io(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
		}
		isProjecting() {
			return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
		}
		calcProjection() {
			let e = this.getLead(), t = !!this.resumingFrom || this !== e, n = !0;
			if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1), t && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === L.timestamp && (n = !1), n) return;
			let { layout: r, layoutId: i } = this.options;
			if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r || i)) return;
			$(this.layoutCorrected, this.layout.layoutBox);
			let a = this.treeScale.x, o = this.treeScale.y;
			Wo(this.layoutCorrected, this.treeScale, this.path, t), e.layout && !e.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (e.target = e.layout.layoutBox, e.targetWithTransforms = X());
			let { target: s } = e;
			if (!s) {
				this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
				return;
			}
			!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (qs(this.prevProjectionDelta.x, this.projectionDelta.x), qs(this.prevProjectionDelta.y, this.projectionDelta.y)), To(this.projectionDelta, this.layoutCorrected, s, this.latestValues), (this.treeScale.x !== a || this.treeScale.y !== o || !sc(this.projectionDelta.x, this.prevProjectionDelta.x) || !sc(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", s)), M.value && fc.calculatedProjections++;
		}
		hide() {
			this.isVisible = !1;
		}
		show() {
			this.isVisible = !0;
		}
		scheduleRender(e = !0) {
			if (this.options.visualElement?.scheduleRender(), e) {
				let e = this.getStack();
				e && e.scheduleRender();
			}
			this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
		}
		createProjectionDeltas() {
			this.prevProjectionDelta = jo(), this.projectionDelta = jo(), this.projectionDeltaWithTransform = jo();
		}
		setAnimationOrigin(e, t = !1) {
			let n = this.snapshot, r = n ? n.latestValues : {}, i = { ...this.latestValues }, a = jo();
			(!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !t;
			let o = X(), s = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0), c = this.getStack(), l = !c || c.members.length <= 1, u = !!(s && !l && this.options.crossfade === !0 && !this.path.some(Ic));
			this.animationProgress = 0;
			let d;
			this.mixTargetDelta = (t) => {
				let n = t / 1e3;
				Nc(a.x, e.x, n), Nc(a.y, e.y, n), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ko(o, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Fc(this.relativeTarget, this.relativeTargetOrigin, o, n), d && rc(this.relativeTarget, d) && (this.isProjectionDirty = !1), d ||= X(), $(d, this.relativeTarget)), s && (this.animationValues = i, Vs(i, r, this.latestValues, n, u, l)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n;
			}, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
		}
		startAnimation(e) {
			this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation &&= (I(this.pendingAnimation), void 0), this.pendingAnimation = F.update(() => {
				Es.hasAnimatedSinceResize = !0, Xn.layout++, this.motionValue ||= Pn(0), this.currentAnimation = Ns(this.motionValue, [0, 1e3], {
					...e,
					velocity: 0,
					isSync: !0,
					onUpdate: (t) => {
						this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
					},
					onStop: () => {
						Xn.layout--;
					},
					onComplete: () => {
						Xn.layout--, e.onComplete && e.onComplete(), this.completeAnimation();
					}
				}), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
			});
		}
		completeAnimation() {
			this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
			let e = this.getStack();
			e && e.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
		}
		finishAnimation() {
			this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(hc), this.currentAnimation.stop()), this.completeAnimation();
		}
		applyTransformsToTarget() {
			let e = this.getLead(), { targetWithTransforms: t, target: n, layout: r, latestValues: i } = e;
			if (!(!t || !n || !r)) {
				if (this !== e && this.layout && r && Hc(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
					n = this.target || X();
					let t = Y(this.layout.layoutBox.x);
					n.x.min = e.target.x.min, n.x.max = n.x.min + t;
					let r = Y(this.layout.layoutBox.y);
					n.y.min = e.target.y.min, n.y.max = n.y.min + r;
				}
				$(t, n), qo(t, i), To(this.projectionDeltaWithTransform, this.layoutCorrected, t, i);
			}
		}
		registerSharedNode(e, t) {
			this.sharedNodes.has(e) || this.sharedNodes.set(e, new cc()), this.sharedNodes.get(e).add(t);
			let n = t.options.initialPromotionConfig;
			t.promote({
				transition: n ? n.transition : void 0,
				preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(t) : void 0
			});
		}
		isLead() {
			let e = this.getStack();
			return !e || e.lead === this;
		}
		getLead() {
			let { layoutId: e } = this.options;
			return e && this.getStack()?.lead || this;
		}
		getPrevLead() {
			let { layoutId: e } = this.options;
			return e ? this.getStack()?.prevLead : void 0;
		}
		getStack() {
			let { layoutId: e } = this.options;
			if (e) return this.root.sharedNodes.get(e);
		}
		promote({ needsReset: e, transition: t, preserveFollowOpacity: n } = {}) {
			let r = this.getStack();
			r && r.promote(this, n), e && (this.projectionDelta = void 0, this.needsReset = !0), t && this.setOptions({ transition: t });
		}
		relegate() {
			let e = this.getStack();
			return e ? e.relegate(this) : !1;
		}
		resetSkewAndRotation() {
			let { visualElement: e } = this.options;
			if (!e) return;
			let t = !1, { latestValues: n } = e;
			if ((n.z || n.rotate || n.rotateX || n.rotateY || n.rotateZ || n.skewX || n.skewY) && (t = !0), !t) return;
			let r = {};
			n.z && _c("z", e, r, this.animationValues);
			for (let t = 0; t < pc.length; t++) _c(`rotate${pc[t]}`, e, r, this.animationValues), _c(`skew${pc[t]}`, e, r, this.animationValues);
			e.render();
			for (let t in r) e.setStaticValue(t, r[t]), this.animationValues && (this.animationValues[t] = r[t]);
			e.scheduleRender();
		}
		getProjectionStyles(e) {
			if (!this.instance || this.isSVG) return;
			if (!this.isVisible) return mc;
			let t = { visibility: "" }, n = this.getTransformTemplate();
			if (this.needsReset) return this.needsReset = !1, t.opacity = "", t.pointerEvents = fn(e?.pointerEvents) || "", t.transform = n ? n(this.latestValues, "") : "none", t;
			let r = this.getLead();
			if (!this.projectionDelta || !this.layout || !r.target) {
				let t = {};
				return this.options.layoutId && (t.opacity = this.latestValues.opacity === void 0 ? 1 : this.latestValues.opacity, t.pointerEvents = fn(e?.pointerEvents) || ""), this.hasProjected && !Fo(this.latestValues) && (t.transform = n ? n({}, "") : "none", this.hasProjected = !1), t;
			}
			let i = r.animationValues || r.latestValues;
			this.applyTransformsToTarget(), t.transform = lc(this.projectionDeltaWithTransform, this.treeScale, i), n && (t.transform = n(i, t.transform));
			let { x: a, y: o } = this.projectionDelta;
			t.transformOrigin = `${a.origin * 100}% ${o.origin * 100}% 0`, t.opacity = r.animationValues ? r === this ? i.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : i.opacityExit : r === this ? i.opacity === void 0 ? "" : i.opacity : i.opacityExit === void 0 ? 0 : i.opacityExit;
			for (let e in Ot) {
				if (i[e] === void 0) continue;
				let { correct: n, applyTo: a, isCSSVariable: o } = Ot[e], s = t.transform === "none" ? i[e] : n(i[e], r);
				if (a) {
					let e = a.length;
					for (let n = 0; n < e; n++) t[a[n]] = s;
				} else o ? this.options.visualElement.renderState.vars[e] = s : t[e] = s;
			}
			return this.options.layoutId && (t.pointerEvents = r === this ? fn(e?.pointerEvents) || "" : "none"), t;
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0;
		}
		resetTree() {
			this.root.nodes.forEach((e) => e.currentAnimation?.stop()), this.root.nodes.forEach(Tc), this.root.sharedNodes.clear();
		}
	};
}
function bc(e) {
	e.updateLayout();
}
function xc(e) {
	let t = e.resumeFrom?.snapshot || e.snapshot;
	if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
		let { layoutBox: n, measuredBox: r } = e.layout, { animationType: i } = e.options, a = t.source !== e.layout.source;
		i === "size" ? Z((e) => {
			let r = a ? t.measuredBox[e] : t.layoutBox[e], i = Y(r);
			r.min = n[e].min, r.max = r.min + i;
		}) : Hc(i, t.layoutBox, n) && Z((r) => {
			let i = a ? t.measuredBox[r] : t.layoutBox[r], o = Y(n[r]);
			i.max = i.min + o, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[r].max = e.relativeTarget[r].min + o);
		});
		let o = jo();
		To(o, n, t.layoutBox);
		let s = jo();
		a ? To(s, e.applyTransform(r, !0), t.measuredBox) : To(s, n, t.layoutBox);
		let c = !tc(o), l = !1;
		if (!e.resumeFrom) {
			let r = e.getClosestProjectingParent();
			if (r && !r.resumeFrom) {
				let { snapshot: i, layout: a } = r;
				if (i && a) {
					let o = X();
					ko(o, t.layoutBox, i.layoutBox);
					let s = X();
					ko(s, n, a.layoutBox), ac(o, s) || (l = !0), r.options.layoutRoot && (e.relativeTarget = s, e.relativeTargetOrigin = o, e.relativeParent = r);
				}
			}
		}
		e.notifyListeners("didUpdate", {
			layout: n,
			snapshot: t,
			delta: s,
			layoutDelta: o,
			hasLayoutChanged: c,
			hasRelativeLayoutChanged: l
		});
	} else if (e.isLead()) {
		let { onExitComplete: t } = e.options;
		t && t();
	}
	e.options.transition = void 0;
}
function Sc(e) {
	M.value && fc.nodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty ||= !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty), e.isTransformDirty ||= e.parent.isTransformDirty);
}
function Cc(e) {
	e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function wc(e) {
	e.clearSnapshot();
}
function Tc(e) {
	e.clearMeasurements();
}
function Ec(e) {
	e.isLayoutDirty = !1;
}
function Dc(e) {
	let { visualElement: t } = e.options;
	t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Oc(e) {
	e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function kc(e) {
	e.resolveTargetDelta();
}
function Ac(e) {
	e.calcProjection();
}
function jc(e) {
	e.resetSkewAndRotation();
}
function Mc(e) {
	e.removeLeadSnapshot();
}
function Nc(e, t, n) {
	e.translate = q(t.translate, 0, n), e.scale = q(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Pc(e, t, n, r) {
	e.min = q(t.min, n.min, r), e.max = q(t.max, n.max, r);
}
function Fc(e, t, n, r) {
	Pc(e.x, t.x, n.x, r), Pc(e.y, t.y, n.y, r);
}
function Ic(e) {
	return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var Lc = {
	duration: .45,
	ease: [
		.4,
		0,
		.1,
		1
	]
}, Rc = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), zc = Rc("applewebkit/") && !Rc("chrome/") ? Math.round : P;
function Bc(e) {
	e.min = zc(e.min), e.max = zc(e.max);
}
function Vc(e) {
	Bc(e.x), Bc(e.y);
}
function Hc(e, t, n) {
	return e === "position" || e === "preserve-aspect" && !Co(oc(t), oc(n), .2);
}
function Uc(e) {
	return e !== e.root && e.scroll?.wasRoot;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs
var Wc = yc({
	attachResizeListener: (e, t) => uo(e, "resize", t),
	measureScroll: () => ({
		x: document.documentElement.scrollLeft || document.body.scrollLeft,
		y: document.documentElement.scrollTop || document.body.scrollTop
	}),
	checkIsScrollRoot: () => !0
}), Gc = { current: void 0 }, Kc = yc({
	measureScroll: (e) => ({
		x: e.scrollLeft,
		y: e.scrollTop
	}),
	defaultParent: () => {
		if (!Gc.current) {
			let e = new Wc({});
			e.mount(window), e.setOptions({ layoutScroll: !0 }), Gc.current = e;
		}
		return Gc.current;
	},
	resetTransform: (e, t) => {
		e.style.transform = t === void 0 ? "none" : t;
	},
	checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), qc = {
	pan: { Feature: Ts },
	drag: {
		Feature: Cs,
		ProjectionNode: Kc,
		MeasureLayout: js
	}
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/utils/resolve-elements.mjs
function Jc(e, t, n) {
	if (e instanceof EventTarget) return [e];
	if (typeof e == "string") {
		let r = document;
		t && (r = t.current);
		let i = n?.[e] ?? r.querySelectorAll(e);
		return i ? Array.from(i) : [];
	}
	return Array.from(e);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/gestures/utils/setup.mjs
function Yc(e, t) {
	let n = Jc(e), r = new AbortController();
	return [
		n,
		{
			passive: !0,
			...t,
			signal: r.signal
		},
		() => r.abort()
	];
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/gestures/hover.mjs
function Xc(e) {
	return !(e.pointerType === "touch" || _s());
}
function Zc(e, t, n = {}) {
	let [r, i, a] = Yc(e, n), o = (e) => {
		if (!Xc(e)) return;
		let { target: n } = e, r = t(n, e);
		if (typeof r != "function" || !n) return;
		let a = (e) => {
			Xc(e) && (r(e), n.removeEventListener("pointerleave", a));
		};
		n.addEventListener("pointerleave", a, i);
	};
	return r.forEach((e) => {
		e.addEventListener("pointerenter", o, i);
	}), a;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/gestures/hover.mjs
function Qc(e, t, n) {
	let { props: r } = e;
	e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
	let i = r["onHover" + n];
	i && F.postRender(() => i(t, po(t)));
}
var $c = class extends oo {
	mount() {
		let { current: e } = this.node;
		e && (this.unmount = Zc(e, (e, t) => (Qc(this.node, t, "Start"), (e) => Qc(this.node, e, "End"))));
	}
	unmount() {}
}, el = class extends oo {
	constructor() {
		super(...arguments), this.isActive = !1;
	}
	onFocus() {
		let e = !1;
		try {
			e = this.node.current.matches(":focus-visible");
		} catch {
			e = !0;
		}
		!e || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
	}
	onBlur() {
		!this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
	}
	mount() {
		this.unmount = Pr(uo(this.node.current, "focus", () => this.onFocus()), uo(this.node.current, "blur", () => this.onBlur()));
	}
	unmount() {}
}, tl = (e, t) => t ? e === t || tl(e, t.parentElement) : !1, nl = /* @__PURE__ */ new Set([
	"BUTTON",
	"INPUT",
	"SELECT",
	"TEXTAREA",
	"A"
]);
function rl(e) {
	return nl.has(e.tagName) || e.tabIndex !== -1;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/gestures/press/utils/state.mjs
var il = /* @__PURE__ */ new WeakSet();
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/gestures/press/utils/keyboard.mjs
function al(e) {
	return (t) => {
		t.key === "Enter" && e(t);
	};
}
function ol(e, t) {
	e.dispatchEvent(new PointerEvent("pointer" + t, {
		isPrimary: !0,
		bubbles: !0
	}));
}
var sl = (e, t) => {
	let n = e.currentTarget;
	if (!n) return;
	let r = al(() => {
		if (il.has(n)) return;
		ol(n, "down");
		let e = al(() => {
			ol(n, "up");
		});
		n.addEventListener("keyup", e, t), n.addEventListener("blur", () => ol(n, "cancel"), t);
	});
	n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/gestures/press/index.mjs
function cl(e) {
	return fo(e) && !_s();
}
function ll(e, t, n = {}) {
	let [r, i, a] = Yc(e, n), o = (e) => {
		let r = e.currentTarget;
		if (!cl(e)) return;
		il.add(r);
		let a = t(r, e), o = (e, t) => {
			window.removeEventListener("pointerup", s), window.removeEventListener("pointercancel", c), il.has(r) && il.delete(r), cl(e) && typeof a == "function" && a(e, { success: t });
		}, s = (e) => {
			o(e, r === window || r === document || n.useGlobalTarget || tl(r, e.target));
		}, c = (e) => {
			o(e, !1);
		};
		window.addEventListener("pointerup", s, i), window.addEventListener("pointercancel", c, i);
	};
	return r.forEach((e) => {
		(n.useGlobalTarget ? window : e).addEventListener("pointerdown", o, i), _e(e) && (e.addEventListener("focus", (e) => sl(e, i)), !rl(e) && !e.hasAttribute("tabindex") && (e.tabIndex = 0));
	}), a;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/gestures/press.mjs
function ul(e, t, n) {
	let { props: r } = e;
	if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
	e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
	let i = r["onTap" + (n === "End" ? "" : n)];
	i && F.postRender(() => i(t, po(t)));
}
var dl = class extends oo {
	mount() {
		let { current: e } = this.node;
		e && (this.unmount = ll(e, (e, t) => (ul(this.node, t, "Start"), (e, { success: t }) => ul(this.node, e, t ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
	}
	unmount() {}
}, fl = /* @__PURE__ */ new WeakMap(), pl = /* @__PURE__ */ new WeakMap(), ml = (e) => {
	let t = fl.get(e.target);
	t && t(e);
}, hl = (e) => {
	e.forEach(ml);
};
function gl({ root: e, ...t }) {
	let n = e || document;
	pl.has(n) || pl.set(n, {});
	let r = pl.get(n), i = JSON.stringify(t);
	return r[i] || (r[i] = new IntersectionObserver(hl, {
		root: e,
		...t
	})), r[i];
}
function _l(e, t, n) {
	let r = gl(t);
	return fl.set(e, n), r.observe(e), () => {
		fl.delete(e), r.unobserve(e);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/motion/features/viewport/index.mjs
var vl = {
	some: 0,
	all: 1
}, yl = class extends oo {
	constructor() {
		super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
	}
	startObserver() {
		this.unmount();
		let { viewport: e = {} } = this.node.getProps(), { root: t, margin: n, amount: r = "some", once: i } = e, a = {
			root: t ? t.current : void 0,
			rootMargin: n,
			threshold: typeof r == "number" ? r : vl[r]
		};
		return _l(this.node.current, a, (e) => {
			let { isIntersecting: t } = e;
			if (this.isInView === t || (this.isInView = t, i && !t && this.hasEnteredView)) return;
			t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", t);
			let { onViewportEnter: n, onViewportLeave: r } = this.node.getProps(), a = t ? n : r;
			a && a(e);
		});
	}
	mount() {
		this.startObserver();
	}
	update() {
		if (typeof IntersectionObserver > "u") return;
		let { props: e, prevProps: t } = this.node;
		[
			"amount",
			"margin",
			"root"
		].some(bl(e, t)) && this.startObserver();
	}
	unmount() {}
};
function bl({ viewport: e = {} }, { viewport: t = {} } = {}) {
	return (n) => e[n] !== t[n];
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/motion/features/gestures.mjs
var xl = {
	inView: { Feature: yl },
	tap: { Feature: dl },
	focus: { Feature: el },
	hover: { Feature: $c }
}, Sl = { layout: {
	ProjectionNode: Kc,
	MeasureLayout: js
} }, Cl = { current: null }, wl = { current: !1 };
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/utils/reduced-motion/index.mjs
function Tl() {
	if (wl.current = !0, fe) {
		if (window.matchMedia) {
			let e = window.matchMedia("(prefers-reduced-motion)"), t = () => Cl.current = e.matches;
			e.addListener(t), t();
		} else Cl.current = !1;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/store.mjs
var El = /* @__PURE__ */ new WeakMap();
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/utils/motion-values.mjs
function Dl(e, t, n) {
	for (let r in t) {
		let i = t[r], a = n[r];
		if (H(i)) e.addValue(r, i);
		else if (H(a)) e.addValue(r, Pn(i, { owner: e }));
		else if (a !== i) {
			if (e.hasValue(r)) {
				let t = e.getValue(r);
				t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
			} else {
				let t = e.getStaticValue(r);
				e.addValue(r, Pn(t === void 0 ? i : t, { owner: e }));
			}
		}
	}
	for (let r in n) t[r] === void 0 && e.removeValue(r);
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/is-numerical-string.mjs
var Ol = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), kl = (e) => /^0[^.\s]+$/u.test(e), Al = {
	test: (e) => e === "auto",
	parse: (e) => e
}, jl = (e) => (t) => t.test(e), Ml = [
	Pt,
	V,
	B,
	zt,
	Vt,
	Bt,
	Al
], Nl = (e) => Ml.find(jl(e)), Pl = [
	...Ml,
	K,
	Sr
], Fl = (e) => Pl.find(jl(e)), Il = /* @__PURE__ */ new Set([
	"brightness",
	"contrast",
	"saturate",
	"opacity"
]);
function Ll(e) {
	let [t, n] = e.slice(0, -1).split("(");
	if (t === "drop-shadow") return e;
	let [r] = n.match(Qn) || [];
	if (!r) return e;
	let i = n.replace(r, ""), a = +!!Il.has(t);
	return r !== n && (a *= 100), t + "(" + a + i + ")";
}
var Rl = /\b([a-z-]*)\(.*?\)/gu, zl = {
	...Sr,
	getAnimatableNone: (e) => {
		let t = e.match(Rl);
		return t ? t.map(Ll).join(" ") : e;
	}
}, Bl = {
	...Ut,
	color: K,
	backgroundColor: K,
	outlineColor: K,
	fill: K,
	stroke: K,
	borderColor: K,
	borderTopColor: K,
	borderRightColor: K,
	borderBottomColor: K,
	borderLeftColor: K,
	filter: zl,
	WebkitFilter: zl
}, Vl = (e) => Bl[e];
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/value/types/utils/animatable-none.mjs
function Hl(e, t) {
	let n = Vl(e);
	return n !== zl && (n = Sr), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/VisualElement.mjs
var Ul = [
	"AnimationStart",
	"AnimationComplete",
	"Update",
	"BeforeLayoutMeasure",
	"LayoutMeasure",
	"LayoutAnimationStart",
	"LayoutAnimationComplete"
], Wl = class {
	scrapeMotionValuesFromProps(e, t, n) {
		return {};
	}
	constructor({ parent: e, props: t, presenceContext: n, reducedMotionConfig: r, blockInitialAnimation: i, visualState: a }, o = {}) {
		this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = ma, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
			this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
		}, this.renderScheduledAt = 0, this.scheduleRender = () => {
			let e = U.now();
			this.renderScheduledAt < e && (this.renderScheduledAt = e, F.render(this.render, !1, !0));
		};
		let { latestValues: s, renderState: c } = a;
		this.latestValues = s, this.baseTarget = { ...s }, this.initialValues = t.initial ? { ...s } : {}, this.renderState = c, this.parent = e, this.props = t, this.presenceContext = n, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = r, this.options = o, this.blockInitialAnimation = !!i, this.isControllingVariants = nt(t), this.isVariantNode = rt(t), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
		let { willChange: l, ...u } = this.scrapeMotionValuesFromProps(t, {}, this);
		for (let e in u) {
			let t = u[e];
			s[e] !== void 0 && H(t) && t.set(s[e], !1);
		}
	}
	mount(e) {
		this.current = e, El.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e, t) => this.bindToMotionValue(t, e)), wl.current || Tl(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" || Cl.current, process.env.NODE_ENV !== "production" && Ye(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
	}
	unmount() {
		this.projection && this.projection.unmount(), I(this.notifyUpdate), I(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
		for (let e in this.events) this.events[e].clear();
		for (let e in this.features) {
			let t = this.features[e];
			t && (t.unmount(), t.isMounted = !1);
		}
		this.current = null;
	}
	bindToMotionValue(e, t) {
		this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
		let n = jt.has(e);
		n && this.onBindTransform && this.onBindTransform();
		let r = t.on("change", (t) => {
			this.latestValues[e] = t, this.props.onUpdate && F.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0);
		}), i = t.on("renderRequest", this.scheduleRender), a;
		window.MotionCheckAppearSync && (a = window.MotionCheckAppearSync(this, e, t)), this.valueSubscriptions.set(e, () => {
			r(), i(), a && a(), t.owner && t.stop();
		});
	}
	sortNodePosition(e) {
		return !this.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
	}
	updateFeatures() {
		let e = "animation";
		for (e in Fe) {
			let t = Fe[e];
			if (!t) continue;
			let { isEnabled: n, Feature: r } = t;
			if (!this.features[e] && r && n(this.props) && (this.features[e] = new r(this)), this.features[e]) {
				let t = this.features[e];
				t.isMounted ? t.update() : (t.mount(), t.isMounted = !0);
			}
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.props);
	}
	measureViewportBox() {
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : X();
	}
	getStaticValue(e) {
		return this.latestValues[e];
	}
	setStaticValue(e, t) {
		this.latestValues[e] = t;
	}
	update(e, t) {
		(e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = t;
		for (let t = 0; t < Ul.length; t++) {
			let n = Ul[t];
			this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
			let r = e["on" + n];
			r && (this.propEventSubscriptions[n] = this.on(n, r));
		}
		this.prevMotionValues = Dl(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
	}
	getProps() {
		return this.props;
	}
	getVariant(e) {
		return this.props.variants ? this.props.variants[e] : void 0;
	}
	getDefaultTransition() {
		return this.props.transition;
	}
	getTransformPagePoint() {
		return this.props.transformPagePoint;
	}
	getClosestVariantNode() {
		return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
	}
	addVariantChild(e) {
		let t = this.getClosestVariantNode();
		if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e);
	}
	addValue(e, t) {
		let n = this.values.get(e);
		t !== n && (n && this.removeValue(e), this.bindToMotionValue(e, t), this.values.set(e, t), this.latestValues[e] = t.get());
	}
	removeValue(e) {
		this.values.delete(e);
		let t = this.valueSubscriptions.get(e);
		t && (t(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
	}
	hasValue(e) {
		return this.values.has(e);
	}
	getValue(e, t) {
		if (this.props.values && this.props.values[e]) return this.props.values[e];
		let n = this.values.get(e);
		return n === void 0 && t !== void 0 && (n = Pn(t === null ? void 0 : t, { owner: this }), this.addValue(e, n)), n;
	}
	readValue(e, t) {
		let n = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
		return n != null && (typeof n == "string" && (Ol(n) || kl(n)) ? n = parseFloat(n) : !Fl(n) && Sr.test(t) && (n = Hl(e, t)), this.setBaseTarget(e, H(n) ? n.get() : n)), H(n) ? n.get() : n;
	}
	setBaseTarget(e, t) {
		this.baseTarget[e] = t;
	}
	getBaseTarget(e) {
		let { initial: t } = this.props, n;
		if (typeof t == "string" || typeof t == "object") {
			let r = dn(this.props, t, this.presenceContext?.custom);
			r && (n = r[e]);
		}
		if (t && n !== void 0) return n;
		let r = this.getBaseTargetFromProps(this.props, e);
		return r !== void 0 && !H(r) ? r : this.initialValues[e] !== void 0 && n === void 0 ? void 0 : this.baseTarget[e];
	}
	on(e, t) {
		return this.events[e] || (this.events[e] = new On()), this.events[e].add(t);
	}
	notify(e, ...t) {
		this.events[e] && this.events[e].notify(...t);
	}
}, Gl = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Kl(e) {
	let t = Gl.exec(e);
	if (!t) return [,];
	let [, n, r, i] = t;
	return [`--${n ?? r}`, i];
}
var ql = 4;
function Jl(e, t, n = 1) {
	R(n <= ql, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
	let [r, i] = Kl(e);
	if (!r) return;
	let a = window.getComputedStyle(t).getPropertyValue(r);
	if (a) {
		let e = a.trim();
		return Ol(e) ? parseFloat(e) : e;
	}
	return Et(i) ? Jl(i, t, n + 1) : i;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/keyframes/utils/is-none.mjs
function Yl(e) {
	return typeof e == "number" ? e === 0 : e === null || e === "none" || e === "0" || kl(e);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/keyframes/utils/make-none-animatable.mjs
var Xl = /* @__PURE__ */ new Set([
	"auto",
	"none",
	"0"
]);
function Zl(e, t, n) {
	let r = 0, i;
	for (; r < e.length && !i;) {
		let t = e[r];
		typeof t == "string" && !Xl.has(t) && _r(t).values.length && (i = e[r]), r++;
	}
	if (i && n) for (let r of t) e[r] = Hl(n, i);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs
var Ql = class extends ma {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i, !0);
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, element: t, name: n } = this;
		if (!t || !t.current) return;
		super.readKeyframes();
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (typeof r == "string" && (r = r.trim(), Et(r))) {
				let i = Jl(r, t.current);
				i !== void 0 && (e[n] = i), n === e.length - 1 && (this.finalKeyframe = r);
			}
		}
		if (this.resolveNoneKeyframes(), !Ua.has(n) || e.length !== 2) return;
		let [r, i] = e, a = Nl(r), o = Nl(i);
		if (a !== o) {
			if (na(a) && na(o)) for (let t = 0; t < e.length; t++) {
				let n = e[t];
				typeof n == "string" && (e[t] = parseFloat(n));
			}
			else oa[n] && (this.needsMeasurement = !0);
		}
	}
	resolveNoneKeyframes() {
		let { unresolvedKeyframes: e, name: t } = this, n = [];
		for (let t = 0; t < e.length; t++) (e[t] === null || Yl(e[t])) && n.push(t);
		n.length && Zl(e, n, t);
	}
	measureInitialState() {
		let { element: e, unresolvedKeyframes: t, name: n } = this;
		if (!e || !e.current) return;
		n === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = oa[n](e.measureViewportBox(), window.getComputedStyle(e.current)), t[0] = this.measuredOrigin;
		let r = t[t.length - 1];
		r !== void 0 && e.getValue(n, r).jump(r, !1);
	}
	measureEndState() {
		let { element: e, name: t, unresolvedKeyframes: n } = this;
		if (!e || !e.current) return;
		let r = e.getValue(t);
		r && r.jump(this.measuredOrigin, !1);
		let i = n.length - 1, a = n[i];
		n[i] = oa[t](e.measureViewportBox(), window.getComputedStyle(e.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), this.removedTransforms?.length && this.removedTransforms.forEach(([t, n]) => {
			e.getValue(t).set(n);
		}), this.resolveNoneKeyframes();
	}
}, $l = class extends Wl {
	constructor() {
		super(...arguments), this.KeyframeResolver = Ql;
	}
	sortInstanceNodePosition(e, t) {
		return e.compareDocumentPosition(t) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(e, t) {
		return e.style ? e.style[t] : void 0;
	}
	removeValueFromRenderState(e, { vars: t, style: n }) {
		delete t[e], delete n[e];
	}
	handleChildMotionValue() {
		this.childSubscription && (this.childSubscription(), delete this.childSubscription);
		let { children: e } = this.props;
		H(e) && (this.childSubscription = e.on("change", (e) => {
			this.current && (this.current.textContent = `${e}`);
		}));
	}
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/render.mjs
function eu(e, { style: t, vars: n }, r, i) {
	Object.assign(e.style, t, i && i.getProjectionStyles(r));
	for (let t in n) e.style.setProperty(t, n[t]);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/html/HTMLVisualElement.mjs
function tu(e) {
	return window.getComputedStyle(e);
}
var nu = class extends $l {
	constructor() {
		super(...arguments), this.type = "html", this.renderInstance = eu;
	}
	readValueFromInstance(e, t) {
		if (jt.has(t)) return this.projection?.isProjecting ? Qi(t) : ea(e, t);
		{
			let n = tu(e), r = (wt(t) ? n.getPropertyValue(t) : n[t]) || 0;
			return typeof r == "string" ? r.trim() : r;
		}
	}
	measureInstanceViewportBox(e, { transformPagePoint: t }) {
		return Jo(e, t);
	}
	build(e, t, n) {
		qt(e, t, n.transformTemplate);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return gn(e, t, n);
	}
}, ru = /* @__PURE__ */ new Set([
	"baseFrequency",
	"diffuseConstant",
	"kernelMatrix",
	"kernelUnitLength",
	"keySplines",
	"keyTimes",
	"limitingConeAngle",
	"markerHeight",
	"markerWidth",
	"numOctaves",
	"targetX",
	"targetY",
	"surfaceScale",
	"specularConstant",
	"specularExponent",
	"stdDeviation",
	"tableValues",
	"viewBox",
	"gradientTransform",
	"pathLength",
	"startOffset",
	"textLength",
	"lengthAdjust"
]);
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/render.mjs
function iu(e, t, n, r) {
	eu(e, t, void 0, r);
	for (let n in t.attrs) e.setAttribute(ru.has(n) ? n : ut(n), t.attrs[n]);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/svg/SVGVisualElement.mjs
var au = class extends $l {
	constructor() {
		super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = X;
	}
	getBaseTargetFromProps(e, t) {
		return e[t];
	}
	readValueFromInstance(e, t) {
		if (jt.has(t)) {
			let e = Vl(t);
			return e && e.default || 0;
		}
		return t = ru.has(t) ? t : ut(t), e.getAttribute(t);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return vn(e, t, n);
	}
	build(e, t, n) {
		nn(e, t, this.isSVGTag, n.transformTemplate, n.style);
	}
	renderInstance(e, t, n, r) {
		iu(e, t, n, r);
	}
	mount(e) {
		this.isSVGTag = an(e.tagName), super.mount(e);
	}
}, ou = (e, t) => cn(e) ? new au(t) : new nu(t, { allowProjection: e !== b }), su = /*@__PURE__*/ Xe(/* @__PURE__ */ bn({
	...lo,
	...xl,
	...qc,
	...Sl
}, ou)), cu = a({
	base: "inline-block shrink-0",
	variants: { size: {
		lg: "w-6 [&_circle]:stroke-lg [&_path]:stroke-lg [&_rect]:stroke-lg",
		md: "w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md",
		sm: "w-4 [&_circle]:stroke-sm [&_path]:stroke-sm [&_rect]:stroke-sm",
		xs: "w-3 [&_circle]:stroke-xs [&_path]:stroke-xs [&_rect]:stroke-xs"
	} },
	defaultVariants: { size: "md" }
}), lu = {
	secondary: "text-f1-icon-secondary",
	inverse: "text-f1-icon-inverse",
	bold: "text-f1-icon-bold",
	critical: "text-f1-icon-critical",
	"critical-bold": "text-f1-icon-critical-bold",
	accent: "text-f1-icon-accent",
	info: "text-f1-icon-info",
	warning: "text-f1-icon-warning",
	positive: "text-f1-icon-positive",
	promote: "text-f1-icon-promote",
	selected: "text-f1-icon-selected",
	"selected-hover": "text-f1-icon-selected-hover",
	"mood-super-negative": "text-f1-icon-mood-super-negative",
	"mood-negative": "text-f1-icon-mood-negative",
	"mood-neutral": "text-f1-icon-mood-neutral",
	"mood-positive": "text-f1-icon-mood-positive",
	"mood-super-positive": "text-f1-icon-mood-super-positive"
};
function uu(e) {
	return e.startsWith("#");
}
var du = w(function({ size: e, icon: t, state: n = "normal", color: r = "currentColor", ...i }, a) {
	if (!t) return null;
	let o = t, s = t.displayName?.includes("Animated"), c = uu(r), l = ((e) => e === "currentColor" ? "text-current" : e === "default" ? "text-f1-icon" : uu(e) ? "" : lu[e])(r), d = c ? { color: r } : void 0;
	return s ? /* @__PURE__ */ A(o, {
		ref: a,
		...i,
		animate: n,
		className: u(cu({ size: e }), "select-none", l),
		style: d,
		"data-has-color": r === "currentColor" ? void 0 : "true"
	}) : /* @__PURE__ */ A(o, {
		ref: a,
		...i,
		className: u("aspect-square", cu({ size: e }), l),
		style: d,
		"data-has-color": r === "currentColor" ? void 0 : "true"
	});
}), fu = s(o({
	name: "F0Icon",
	type: "info"
}, du)), pu = {};
(function e(t, n, r, i) {
	var a = !!(t.Worker && t.Blob && t.Promise && t.OffscreenCanvas && t.OffscreenCanvasRenderingContext2D && t.HTMLCanvasElement && t.HTMLCanvasElement.prototype.transferControlToOffscreen && t.URL && t.URL.createObjectURL), o = typeof Path2D == "function" && typeof DOMMatrix == "function", s = (function() {
		if (!t.OffscreenCanvas) return !1;
		var e = new OffscreenCanvas(1, 1), n = e.getContext("2d");
		n.fillRect(0, 0, 1, 1);
		var r = e.transferToImageBitmap();
		try {
			n.createPattern(r, "no-repeat");
		} catch {
			return !1;
		}
		return !0;
	})();
	function c() {}
	function l(e) {
		var r = n.exports.Promise, i = r === void 0 ? t.Promise : r;
		return typeof i == "function" ? new i(e) : (e(c, c), null);
	}
	var u = (function(e, t) {
		return {
			transform: function(n) {
				if (e) return n;
				if (t.has(n)) return t.get(n);
				var r = new OffscreenCanvas(n.width, n.height);
				return r.getContext("2d").drawImage(n, 0, 0), t.set(n, r), r;
			},
			clear: function() {
				t.clear();
			}
		};
	})(s, /* @__PURE__ */ new Map()), d = function() {
		var e, t, n = {}, r = 0;
		return typeof requestAnimationFrame == "function" && typeof cancelAnimationFrame == "function" ? (e = function(e) {
			var t = Math.random();
			return n[t] = requestAnimationFrame(function i(a) {
				r === a || r + 16 - 1 < a ? (r = a, delete n[t], e()) : n[t] = requestAnimationFrame(i);
			}), t;
		}, t = function(e) {
			n[e] && cancelAnimationFrame(n[e]);
		}) : (e = function(e) {
			return setTimeout(e, 16);
		}, t = function(e) {
			return clearTimeout(e);
		}), {
			frame: e,
			cancel: t
		};
	}(), f = (function() {
		var t, n, i = {};
		function o(e) {
			function t(t, n) {
				e.postMessage({
					options: t || {},
					callback: n
				});
			}
			e.init = function(t) {
				var n = t.transferControlToOffscreen();
				e.postMessage({ canvas: n }, [n]);
			}, e.fire = function(r, a, o) {
				if (n) return t(r, null), n;
				var s = Math.random().toString(36).slice(2);
				return n = l(function(a) {
					function c(t) {
						t.data.callback === s && (delete i[s], e.removeEventListener("message", c), n = null, u.clear(), o(), a());
					}
					e.addEventListener("message", c), t(r, s), i[s] = c.bind(null, { data: { callback: s } });
				}), n;
			}, e.reset = function() {
				for (var t in e.postMessage({ reset: !0 }), i) i[t](), delete i[t];
			};
		}
		return function() {
			if (t) return t;
			if (!r && a) {
				var n = [
					"var CONFETTI, SIZE = {}, module = {};",
					"(" + e.toString() + ")(this, module, true, SIZE);",
					"onmessage = function(msg) {",
					"  if (msg.data.options) {",
					"    CONFETTI(msg.data.options).then(function () {",
					"      if (msg.data.callback) {",
					"        postMessage({ callback: msg.data.callback });",
					"      }",
					"    });",
					"  } else if (msg.data.reset) {",
					"    CONFETTI && CONFETTI.reset();",
					"  } else if (msg.data.resize) {",
					"    SIZE.width = msg.data.resize.width;",
					"    SIZE.height = msg.data.resize.height;",
					"  } else if (msg.data.canvas) {",
					"    SIZE.width = msg.data.canvas.width;",
					"    SIZE.height = msg.data.canvas.height;",
					"    CONFETTI = module.exports.create(msg.data.canvas);",
					"  }",
					"}"
				].join("\n");
				try {
					t = new Worker(URL.createObjectURL(new Blob([n])));
				} catch (e) {
					return typeof console.warn == "function" && console.warn("🎊 Could not load worker", e), null;
				}
				o(t);
			}
			return t;
		};
	})(), p = {
		particleCount: 50,
		angle: 90,
		spread: 45,
		startVelocity: 45,
		decay: .9,
		gravity: 1,
		drift: 0,
		ticks: 200,
		x: .5,
		y: .5,
		shapes: ["square", "circle"],
		zIndex: 100,
		colors: [
			"#26ccff",
			"#a25afd",
			"#ff5e7e",
			"#88ff5a",
			"#fcff42",
			"#ffa62d",
			"#ff36ff"
		],
		disableForReducedMotion: !1,
		scalar: 1
	};
	function m(e, t) {
		return t ? t(e) : e;
	}
	function h(e) {
		return e != null;
	}
	function g(e, t, n) {
		return m(e && h(e[t]) ? e[t] : p[t], n);
	}
	function _(e) {
		return e < 0 ? 0 : Math.floor(e);
	}
	function v(e, t) {
		return Math.floor(Math.random() * (t - e)) + e;
	}
	function y(e) {
		return parseInt(e, 16);
	}
	function b(e) {
		return e.map(x);
	}
	function x(e) {
		var t = String(e).replace(/[^0-9a-f]/gi, "");
		return t.length < 6 && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), {
			r: y(t.substring(0, 2)),
			g: y(t.substring(2, 4)),
			b: y(t.substring(4, 6))
		};
	}
	function S(e) {
		var t = g(e, "origin", Object);
		return t.x = g(t, "x", Number), t.y = g(t, "y", Number), t;
	}
	function C(e) {
		e.width = document.documentElement.clientWidth, e.height = document.documentElement.clientHeight;
	}
	function w(e) {
		var t = e.getBoundingClientRect();
		e.width = t.width, e.height = t.height;
	}
	function T(e) {
		var t = document.createElement("canvas");
		return t.style.position = "fixed", t.style.top = "0px", t.style.left = "0px", t.style.pointerEvents = "none", t.style.zIndex = e, t;
	}
	function ee(e, t, n, r, i, a, o, s, c) {
		e.save(), e.translate(t, n), e.rotate(a), e.scale(r, i), e.arc(0, 0, 1, o, s, c), e.restore();
	}
	function te(e) {
		var t = e.angle * (Math.PI / 180), n = e.spread * (Math.PI / 180);
		return {
			x: e.x,
			y: e.y,
			wobble: Math.random() * 10,
			wobbleSpeed: Math.min(.11, Math.random() * .1 + .05),
			velocity: e.startVelocity * .5 + Math.random() * e.startVelocity,
			angle2D: -t + (.5 * n - Math.random() * n),
			tiltAngle: (Math.random() * .5 + .25) * Math.PI,
			color: e.color,
			shape: e.shape,
			tick: 0,
			totalTicks: e.ticks,
			decay: e.decay,
			drift: e.drift,
			random: Math.random() + 2,
			tiltSin: 0,
			tiltCos: 0,
			wobbleX: 0,
			wobbleY: 0,
			gravity: e.gravity * 3,
			ovalScalar: .6,
			scalar: e.scalar,
			flat: e.flat
		};
	}
	function E(e, t) {
		t.x += Math.cos(t.angle2D) * t.velocity + t.drift, t.y += Math.sin(t.angle2D) * t.velocity + t.gravity, t.velocity *= t.decay, t.flat ? (t.wobble = 0, t.wobbleX = t.x + 10 * t.scalar, t.wobbleY = t.y + 10 * t.scalar, t.tiltSin = 0, t.tiltCos = 0, t.random = 1) : (t.wobble += t.wobbleSpeed, t.wobbleX = t.x + 10 * t.scalar * Math.cos(t.wobble), t.wobbleY = t.y + 10 * t.scalar * Math.sin(t.wobble), t.tiltAngle += .1, t.tiltSin = Math.sin(t.tiltAngle), t.tiltCos = Math.cos(t.tiltAngle), t.random = Math.random() + 2);
		var n = t.tick++ / t.totalTicks, r = t.x + t.random * t.tiltCos, i = t.y + t.random * t.tiltSin, a = t.wobbleX + t.random * t.tiltCos, s = t.wobbleY + t.random * t.tiltSin;
		if (e.fillStyle = "rgba(" + t.color.r + ", " + t.color.g + ", " + t.color.b + ", " + (1 - n) + ")", e.beginPath(), o && t.shape.type === "path" && typeof t.shape.path == "string" && Array.isArray(t.shape.matrix)) e.fill(O(t.shape.path, t.shape.matrix, t.x, t.y, Math.abs(a - r) * .1, Math.abs(s - i) * .1, Math.PI / 10 * t.wobble));
		else if (t.shape.type === "bitmap") {
			var c = Math.PI / 10 * t.wobble, l = Math.abs(a - r) * .1, d = Math.abs(s - i) * .1, f = t.shape.bitmap.width * t.scalar, p = t.shape.bitmap.height * t.scalar, m = new DOMMatrix([
				Math.cos(c) * l,
				Math.sin(c) * l,
				-Math.sin(c) * d,
				Math.cos(c) * d,
				t.x,
				t.y
			]);
			m.multiplySelf(new DOMMatrix(t.shape.matrix));
			var h = e.createPattern(u.transform(t.shape.bitmap), "no-repeat");
			h.setTransform(m), e.globalAlpha = 1 - n, e.fillStyle = h, e.fillRect(t.x - f / 2, t.y - p / 2, f, p), e.globalAlpha = 1;
		} else if (t.shape === "circle") e.ellipse ? e.ellipse(t.x, t.y, Math.abs(a - r) * t.ovalScalar, Math.abs(s - i) * t.ovalScalar, Math.PI / 10 * t.wobble, 0, 2 * Math.PI) : ee(e, t.x, t.y, Math.abs(a - r) * t.ovalScalar, Math.abs(s - i) * t.ovalScalar, Math.PI / 10 * t.wobble, 0, 2 * Math.PI);
		else if (t.shape === "star") for (var g = Math.PI / 2 * 3, _ = 4 * t.scalar, v = 8 * t.scalar, y = t.x, b = t.y, x = 5, S = Math.PI / x; x--;) y = t.x + Math.cos(g) * v, b = t.y + Math.sin(g) * v, e.lineTo(y, b), g += S, y = t.x + Math.cos(g) * _, b = t.y + Math.sin(g) * _, e.lineTo(y, b), g += S;
		else e.moveTo(Math.floor(t.x), Math.floor(t.y)), e.lineTo(Math.floor(t.wobbleX), Math.floor(i)), e.lineTo(Math.floor(a), Math.floor(s)), e.lineTo(Math.floor(r), Math.floor(t.wobbleY));
		return e.closePath(), e.fill(), t.tick < t.totalTicks;
	}
	function D(e, t, n, a, o) {
		var s = t.slice(), c = e.getContext("2d"), f, p, m = l(function(t) {
			function l() {
				f = p = null, c.clearRect(0, 0, a.width, a.height), u.clear(), o(), t();
			}
			function m() {
				r && (a.width !== i.width || a.height !== i.height) && (a.width = e.width = i.width, a.height = e.height = i.height), !a.width && !a.height && (n(e), a.width = e.width, a.height = e.height), c.clearRect(0, 0, a.width, a.height), s = s.filter(function(e) {
					return E(c, e);
				}), s.length ? f = d.frame(m) : l();
			}
			f = d.frame(m), p = l;
		});
		return {
			addFettis: function(e) {
				return s = s.concat(e), m;
			},
			canvas: e,
			promise: m,
			reset: function() {
				f && d.cancel(f), p && p();
			}
		};
	}
	function ne(e, n) {
		var r = !e, i = !!g(n || {}, "resize"), o = !1, s = g(n, "disableForReducedMotion", Boolean), c = a && g(n || {}, "useWorker") ? f() : null, u = r ? C : w, d = e && c ? !!e.__confetti_initialized : !1, p = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion)").matches, m;
		function h(t, n, r) {
			for (var i = g(t, "particleCount", _), a = g(t, "angle", Number), o = g(t, "spread", Number), s = g(t, "startVelocity", Number), c = g(t, "decay", Number), l = g(t, "gravity", Number), d = g(t, "drift", Number), f = g(t, "colors", b), p = g(t, "ticks", Number), h = g(t, "shapes"), y = g(t, "scalar"), x = !!g(t, "flat"), C = S(t), w = i, T = [], ee = e.width * C.x, E = e.height * C.y; w--;) T.push(te({
				x: ee,
				y: E,
				angle: a,
				spread: o,
				startVelocity: s,
				color: f[w % f.length],
				shape: h[v(0, h.length)],
				ticks: p,
				decay: c,
				gravity: l,
				drift: d,
				scalar: y,
				flat: x
			}));
			return m ? m.addFettis(T) : (m = D(e, T, u, n, r), m.promise);
		}
		function y(n) {
			var a = s || g(n, "disableForReducedMotion", Boolean), f = g(n, "zIndex", Number);
			if (a && p) return l(function(e) {
				e();
			});
			r && m ? e = m.canvas : r && !e && (e = T(f), document.body.appendChild(e)), i && !d && u(e);
			var _ = {
				width: e.width,
				height: e.height
			};
			c && !d && c.init(e), d = !0, c && (e.__confetti_initialized = !0);
			function v() {
				if (c) {
					var t = { getBoundingClientRect: function() {
						if (!r) return e.getBoundingClientRect();
					} };
					u(t), c.postMessage({ resize: {
						width: t.width,
						height: t.height
					} });
					return;
				}
				_.width = _.height = null;
			}
			function y() {
				m = null, i && (o = !1, t.removeEventListener("resize", v)), r && e && (document.body.contains(e) && document.body.removeChild(e), e = null, d = !1);
			}
			return i && !o && (o = !0, t.addEventListener("resize", v, !1)), c ? c.fire(n, _, y) : h(n, _, y);
		}
		return y.reset = function() {
			c && c.reset(), m && m.reset();
		}, y;
	}
	var re;
	function ie() {
		return re ||= ne(null, {
			useWorker: !0,
			resize: !0
		}), re;
	}
	function O(e, t, n, r, i, a, o) {
		var s = new Path2D(e), c = new Path2D();
		c.addPath(s, new DOMMatrix(t));
		var l = new Path2D();
		return l.addPath(c, new DOMMatrix([
			Math.cos(o) * i,
			Math.sin(o) * i,
			-Math.sin(o) * a,
			Math.cos(o) * a,
			n,
			r
		])), l;
	}
	function k(e) {
		if (!o) throw Error("path confetti are not supported in this browser");
		var t, n;
		typeof e == "string" ? t = e : (t = e.path, n = e.matrix);
		var r = new Path2D(t), i = document.createElement("canvas").getContext("2d");
		if (!n) {
			for (var a = 1e3, s = a, c = a, l = 0, u = 0, d, f, p = 0; p < a; p += 2) for (var m = 0; m < a; m += 2) i.isPointInPath(r, p, m, "nonzero") && (s = Math.min(s, p), c = Math.min(c, m), l = Math.max(l, p), u = Math.max(u, m));
			d = l - s, f = u - c;
			var h = 10, g = Math.min(h / d, h / f);
			n = [
				g,
				0,
				0,
				g,
				-Math.round(d / 2 + s) * g,
				-Math.round(f / 2 + c) * g
			];
		}
		return {
			type: "path",
			path: t,
			matrix: n
		};
	}
	function ae(e) {
		var t, n = 1, r = "#000000", i = "\"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\", \"EmojiOne Color\", \"Android Emoji\", \"Twemoji Mozilla\", \"system emoji\", sans-serif";
		typeof e == "string" ? t = e : (t = e.text, n = "scalar" in e ? e.scalar : n, i = "fontFamily" in e ? e.fontFamily : i, r = "color" in e ? e.color : r);
		var a = 10 * n, o = "" + a + "px " + i, s = new OffscreenCanvas(a, a), c = s.getContext("2d");
		c.font = o;
		var l = c.measureText(t), u = Math.ceil(l.actualBoundingBoxRight + l.actualBoundingBoxLeft), d = Math.ceil(l.actualBoundingBoxAscent + l.actualBoundingBoxDescent), f = 2, p = l.actualBoundingBoxLeft + f, m = l.actualBoundingBoxAscent + f;
		u += f + f, d += f + f, s = new OffscreenCanvas(u, d), c = s.getContext("2d"), c.font = o, c.fillStyle = r, c.fillText(t, p, m);
		var h = 1 / n;
		return {
			type: "bitmap",
			bitmap: s.transferToImageBitmap(),
			matrix: [
				h,
				0,
				0,
				h,
				-u * h / 2,
				-d * h / 2
			]
		};
	}
	n.exports = function() {
		return ie().apply(this, arguments);
	}, n.exports.reset = function() {
		ie().reset();
	}, n.exports.create = ne, n.exports.shapeFromPath = k, n.exports.shapeFromText = ae;
})((function() {
	return typeof window < "u" ? window : typeof self < "u" ? self : this || {};
})(), pu, !1);
var mu = pu.exports;
pu.exports.create;
//#endregion
//#region ../../node_modules/.pnpm/twemoji-parser@14.0.0/node_modules/twemoji-parser/dist/lib/regex.js
var hu = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = /(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c[\udffc-\udfff]|\ud83e\udef1\ud83c\udffc\u200d\ud83e\udef2\ud83c[\udffb\udffd-\udfff]|\ud83e\udef1\ud83c\udffd\u200d\ud83e\udef2\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\udef1\ud83c\udffe\u200d\ud83e\udef2\ud83c[\udffb-\udffd\udfff]|\ud83e\udef1\ud83c\udfff\u200d\ud83e\udef2\ud83c[\udffb-\udffe]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83e\udd1d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91]|\ud83e\udd1d)|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd\udec3-\udec5\udef0-\udef6]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udedd-\udedf\udeeb\udeec\udef4-\udefc\udfe0-\udfeb\udff0]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78-\uddb4\uddb7\uddba\uddbc-\uddcc\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7c\ude80-\ude86\ude90-\udeac\udeb0-\udeba\udec0-\udec2\uded0-\uded9\udee0-\udee7]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g;
})), gu = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.TypeName = void 0, e.parse = i;
	var t = n(hu());
	function n(e) {
		return e && e.__esModule ? e : { default: e };
	}
	var r = e.TypeName = "emoji";
	function i(e, n) {
		var i = n && n.assetType ? n.assetType : "svg", a = n && n.buildUrl ? n.buildUrl : function(e, t) {
			return t === "png" ? "https://twemoji.maxcdn.com/v/latest/72x72/" + e + ".png" : "https://twemoji.maxcdn.com/v/latest/svg/" + e + ".svg";
		}, o = [];
		for (t.default.lastIndex = 0;;) {
			var l = t.default.exec(e);
			if (!l) break;
			var u = l[0], d = c(s(u)).join("-");
			o.push({
				url: d ? a(d, i) : "",
				indices: [l.index, t.default.lastIndex],
				text: u,
				type: r
			});
		}
		return o;
	}
	var a = /\uFE0F/g, o = "‍", s = function(e) {
		return e.indexOf(o) < 0 ? e.replace(a, "") : e;
	};
	function c(e) {
		for (var t = [], n = 0, r = 0, i = 0; i < e.length;) n = e.charCodeAt(i++), r ? (t.push((65536 + (r - 55296 << 10) + (n - 56320)).toString(16)), r = 0) : n > 55296 && n <= 56319 ? r = n : t.push(n.toString(16));
		return t;
	}
})), _u = /* @__PURE__ */ i(((e, t) => {
	var n = NaN, r = /^\s+|\s+$/g, i = /^[-+]0x[0-9a-f]+$/i, a = /^0b[01]+$/i, o = /^0o[0-7]+$/i, s = parseInt, c = typeof global == "object" && global && global.Object === Object && global, l = typeof self == "object" && self && self.Object === Object && self, u = c || l || Function("return this")(), d = Object.prototype.toString, f = Math.max, p = Math.min, m = function() {
		return u.Date.now();
	};
	function h(e, t, n) {
		var r, i, a, o, s, c, l = 0, u = !1, d = !1, h = !0;
		if (typeof e != "function") throw TypeError("Expected a function");
		t = y(t) || 0, g(n) && (u = !!n.leading, d = "maxWait" in n, a = d ? f(y(n.maxWait) || 0, t) : a, h = "trailing" in n ? !!n.trailing : h);
		function _(t) {
			var n = r, a = i;
			return r = i = void 0, l = t, o = e.apply(a, n), o;
		}
		function v(e) {
			return l = e, s = setTimeout(S, t), u ? _(e) : o;
		}
		function b(e) {
			var n = e - c, r = e - l, i = t - n;
			return d ? p(i, a - r) : i;
		}
		function x(e) {
			var n = e - c, r = e - l;
			return c === void 0 || n >= t || n < 0 || d && r >= a;
		}
		function S() {
			var e = m();
			if (x(e)) return C(e);
			s = setTimeout(S, b(e));
		}
		function C(e) {
			return s = void 0, h && r ? _(e) : (r = i = void 0, o);
		}
		function w() {
			s !== void 0 && clearTimeout(s), l = 0, r = c = i = s = void 0;
		}
		function T() {
			return s === void 0 ? o : C(m());
		}
		function ee() {
			var e = m(), n = x(e);
			if (r = arguments, i = this, c = e, n) {
				if (s === void 0) return v(c);
				if (d) return s = setTimeout(S, t), _(c);
			}
			return s === void 0 && (s = setTimeout(S, t)), o;
		}
		return ee.cancel = w, ee.flush = T, ee;
	}
	function g(e) {
		var t = typeof e;
		return !!e && (t == "object" || t == "function");
	}
	function _(e) {
		return !!e && typeof e == "object";
	}
	function v(e) {
		return typeof e == "symbol" || _(e) && d.call(e) == "[object Symbol]";
	}
	function y(e) {
		if (typeof e == "number") return e;
		if (v(e)) return n;
		if (g(e)) {
			var t = typeof e.valueOf == "function" ? e.valueOf() : e;
			e = g(t) ? t + "" : t;
		}
		if (typeof e != "string") return e === 0 ? e : +e;
		e = e.replace(r, "");
		var c = a.test(e);
		return c || o.test(e) ? s(e.slice(2), c ? 2 : 8) : i.test(e) ? n : +e;
	}
	t.exports = h;
})), vu = gu(), yu = /* @__PURE__ */ n(_u(), 1), bu = typeof window < "u" ? ie : D;
function xu(e, t, n, r) {
	let i = k(t);
	bu(() => {
		i.current = t;
	}, [t]), D(() => {
		let t = n?.current ?? window;
		if (!(t && t.addEventListener)) return;
		let a = (e) => {
			i.current(e);
		};
		return t.addEventListener(e, a, r), () => {
			t.removeEventListener(e, a, r);
		};
	}, [
		e,
		n,
		r
	]);
}
var Su = typeof window > "u";
function Cu(e, { defaultValue: t = !1, initializeWithValue: n = !0 } = {}) {
	let r = (e) => Su ? t : window.matchMedia(e).matches, [i, a] = ae(() => n ? r(e) : t);
	function o() {
		a(r(e));
	}
	return bu(() => {
		let t = window.matchMedia(e);
		return o(), t.addListener ? t.addListener(o) : t.addEventListener("change", o), () => {
			t.removeListener ? t.removeListener(o) : t.removeEventListener("change", o);
		};
	}, [e]), i;
}
function wu(e) {
	let t = k(e);
	t.current = e, D(() => () => {
		t.current();
	}, []);
}
function Tu(e, t = 500, n) {
	let r = k();
	wu(() => {
		r.current && r.current.cancel();
	});
	let i = O(() => {
		let i = (0, yu.default)(e, t, n), a = (...e) => i(...e);
		return a.cancel = () => {
			i.cancel();
		}, a.isPending = () => !!r.current, a.flush = () => i.flush(), a;
	}, [
		e,
		t,
		n
	]);
	return D(() => {
		r.current = (0, yu.default)(e, t, n);
	}, [
		e,
		t,
		n
	]), i;
}
function Eu(e, t, n) {
	let r = n?.equalityFn ?? ((e, t) => e === t), i = e instanceof Function ? e() : e, [a, o] = ae(i), s = k(i), c = Tu(o, t, n);
	return r(s.current, i) || (c(i), s.current = i), [a, c];
}
function Du({ threshold: e = 0, root: t = null, rootMargin: n = "0%", freezeOnceVisible: r = !1, initialIsIntersecting: i = !1, onChange: a } = {}) {
	let [o, s] = ae(null), [c, l] = ae(() => ({
		isIntersecting: i,
		entry: void 0
	})), u = k();
	u.current = a;
	let d = c.entry?.isIntersecting && r;
	D(() => {
		if (!o || !("IntersectionObserver" in window) || d) return;
		let i, a = new IntersectionObserver((e) => {
			let t = Array.isArray(a.thresholds) ? a.thresholds : [a.thresholds];
			e.forEach((e) => {
				let n = e.isIntersecting && t.some((t) => e.intersectionRatio >= t);
				l({
					isIntersecting: n,
					entry: e
				}), u.current && u.current(n, e), n && r && i && (i(), i = void 0);
			});
		}, {
			threshold: e,
			root: t,
			rootMargin: n
		});
		return a.observe(o), () => {
			a.disconnect();
		};
	}, [
		o,
		JSON.stringify(e),
		t,
		n,
		d,
		r
	]);
	let f = k(null);
	D(() => {
		!o && c.entry?.target && !r && !d && f.current !== c.entry.target && (f.current = c.entry.target, l({
			isIntersecting: i,
			entry: void 0
		}));
	}, [
		o,
		c.entry,
		r,
		d,
		i
	]);
	let p = [
		s,
		!!c.isIntersecting,
		c.entry
	];
	return p.ref = p[0], p.isIntersecting = p[1], p.entry = p[2], p;
}
function Ou() {
	let e = k(!1);
	return D(() => (e.current = !0, () => {
		e.current = !1;
	}), []), te(() => e.current, []);
}
function ku(e, t, n = "mousedown", r = {}) {
	xu(n, (n) => {
		let r = n.target;
		!r || !r.isConnected || (Array.isArray(e) ? e.filter((e) => !!e.current).every((e) => e.current && !e.current.contains(r)) : e.current && !e.current.contains(r)) && t(n);
	}, void 0, r);
}
var Au = {
	width: void 0,
	height: void 0
};
function ju(e) {
	let { ref: t, box: n = "content-box" } = e, [{ width: r, height: i }, a] = ae(Au), o = Ou(), s = k({ ...Au }), c = k(void 0);
	return c.current = e.onResize, D(() => {
		if (!t.current || typeof window > "u" || !("ResizeObserver" in window)) return;
		let e = new ResizeObserver(([e]) => {
			let t = n === "border-box" ? "borderBoxSize" : n === "device-pixel-content-box" ? "devicePixelContentBoxSize" : "contentBoxSize", r = Mu(e, t, "inlineSize"), i = Mu(e, t, "blockSize");
			if (s.current.width !== r || s.current.height !== i) {
				let e = {
					width: r,
					height: i
				};
				s.current.width = r, s.current.height = i, c.current ? c.current(e) : o() && a(e);
			}
		});
		return e.observe(t.current, { box: n }), () => {
			e.disconnect();
		};
	}, [
		n,
		t,
		o
	]), {
		width: r,
		height: i
	};
}
function Mu(e, t, n) {
	return e[t] ? Array.isArray(e[t]) ? e[t][0][n] : e[t][n] : t === "contentBoxSize" ? e.contentRect[n === "inlineSize" ? "width" : "height"] : void 0;
}
//#endregion
//#region src/lib/a11y.tsx
var Nu = () => Cu("(prefers-reduced-motion: reduce)", {
	initializeWithValue: !0,
	defaultValue: !1
}), Pu = a({
	variants: { size: {
		xs: "h-3 w-3",
		sm: "h-4 w-4",
		md: "h-5 w-5",
		lg: "h-6 w-6"
	} },
	defaultVariants: { size: "sm" }
}), Fu = a({
	variants: { size: {
		xs: "text-[12px]",
		sm: "text-[16px]",
		md: "text-[20px]",
		lg: "text-[24px]"
	} },
	defaultVariants: { size: "sm" }
});
function Iu({ emoji: e, size: t, alt: n, mode: r = "image" }) {
	let i = r === "native" ? null : Lu(e), a = {
		initial: { scale: .75 },
		animate: { scale: 1 },
		exit: { scale: .75 },
		transition: {
			duration: .6,
			ease: [
				.175,
				.885,
				.32,
				1.275
			]
		}
	};
	return r === "native" ? /* @__PURE__ */ A(su.span, {
		className: u(Pu({ size: t }), Fu({ size: t }), "inline-flex items-center justify-center leading-none font-emoji"),
		"aria-label": n === "" ? void 0 : n ?? e,
		role: n === "" ? void 0 : "img",
		"aria-hidden": n === "" || void 0,
		...a,
		children: e
	}, e) : i ? /* @__PURE__ */ A(su.img, {
		src: i.url,
		alt: n ?? e,
		className: Pu({ size: t }),
		draggable: !1,
		...a
	}, i.url) : /* @__PURE__ */ A(su.span, {
		...a,
		children: e
	}, e);
}
var Lu = (e) => {
	let [t] = (0, vu.parse)(e, { buildUrl: (e) => `https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/${e}.svg` });
	return t || null;
};
function Ru(e) {
	return `${e} emoji`;
}
var zu = () => {
	let e = Nu();
	return { fireEmojiConfetti: te((t, n) => {
		let r = n.current;
		if (r) {
			let n = r.getBoundingClientRect(), i = n.left + n.width / 2, a = n.top;
			mu({
				particleCount: 20,
				gravity: 0,
				spread: 360,
				startVelocity: 10,
				ticks: 50,
				origin: {
					x: i / window.innerWidth,
					y: a / window.innerHeight
				},
				shapes: [mu.shapeFromText({
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
//#region src/lib/strip-native-title.tsx
function Bu(e) {
	if (!T(e)) return e;
	let t = e.props;
	if (t.title == null) return e;
	let n = { title: void 0 };
	return t["aria-label"] == null && t["aria-labelledby"] == null && typeof t.title == "string" && (n["aria-label"] = t.title), x(e, n);
}
var Vu = w((e, t) => /* @__PURE__ */ se("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	fill: "none",
	viewBox: "0 0 24 24",
	ref: t,
	...e,
	children: [/* @__PURE__ */ A("title", { children: "Windows" }), /* @__PURE__ */ A("path", {
		fill: "currentColor",
		fillRule: "evenodd",
		d: "M20 4L11.4628 5.24738V11.4067H20V4ZM20 20.2501V12.7255L11.4628 12.71V18.9003L20 20.2501ZM10.3286 12.6633V18.7916L4.0046 17.9073V12.6323L10.3286 12.6633ZM10.3286 5.35601L4 6.24035L4.00307 11.4843H10.3286V5.35601Z",
		clipRule: "evenodd"
	})]
})), Hu = S(null), Uu = (e, t) => {
	let n = e.split("."), r = t;
	for (let e of n) if (r && typeof r == "object" && e in r) r = r[e];
	else return;
	return typeof r == "string" ? r : void 0;
}, Wu = (e) => typeof e == "object" && !!e && !Array.isArray(e), Gu = (e, t) => {
	let n = { ...e };
	for (let [e, r] of Object.entries(t)) {
		if (r === void 0) continue;
		let t = n[e];
		n[e] = Wu(r) && Wu(t) ? Gu(t, r) : r;
	}
	return n;
};
function Ku({ children: e, translations: t }) {
	let n = O(() => Gu(h, t), [t]), r = (e, t = {}) => {
		let r = Uu(e, n);
		if (r === void 0) return console.warn(`Translation key ${e} not found`), e;
		for (let [e, n] of Object.entries(t)) r = r.replace(`{{${e}}}`, n.toString());
		return r;
	};
	return /* @__PURE__ */ A(Hu.Provider, {
		value: {
			...n,
			t: r
		},
		children: e
	});
}
var qu = {
	...h,
	t: (e, t = {}) => {
		let n = Uu(e, h);
		if (n === void 0) return e;
		for (let [e, r] of Object.entries(t)) n = n.replace(`{{${e}}}`, r.toString());
		return n;
	}
};
function Ju() {
	return E(Hu) ?? qu;
}
var Yu = (e) => e, Xu = a({
	base: "flex h-5 min-w-[1ch] items-center justify-center rounded-xs border border-solid py-0.5 font-sans text-sm font-semibold leading-none",
	variants: { variant: {
		default: "border-f1-border-secondary bg-f1-background-tertiary text-f1-foreground-secondary",
		inverse: "border-f1-border-inverse text-f1-foreground-inverse-secondary"
	} },
	defaultVariants: { variant: "default" }
}), Zu = /* @__PURE__ */ new Set([
	"cmd",
	"option",
	"ctrl"
]), Qu = {
	mac: {
		cmd: "⌘",
		option: "⌥",
		ctrl: "⌃"
	},
	windows: {
		ctrl: "Ctrl",
		cmd: Vu,
		option: "Alt"
	},
	linux: {
		ctrl: "^",
		cmd: "Meta",
		option: "Alt"
	}
}, $u = (e) => Zu.has(e);
function ed({ keys: e, variant: t }) {
	let n = c(), r = Ju();
	if (n === "unknown" || n === "mobile") return null;
	let i = Qu[n];
	return /* @__PURE__ */ se("div", {
		className: "flex flex-wrap items-center gap-0.5",
		children: [/* @__PURE__ */ A("span", {
			className: "sr-only",
			children: r.shortcut
		}), e.map((e, n) => {
			let r = e.toLowerCase(), a = $u(r), o = a ? i[r] : e, s = typeof o != "string";
			return /* @__PURE__ */ A("kbd", {
				className: u(Xu({ variant: t }), a ? "" : "uppercase", s ? "w-5 px-0.5" : "min-w-5 px-1"),
				children: s ? /* @__PURE__ */ A(fu, {
					icon: o,
					size: "sm"
				}) : o
			}, n);
		})]
	});
}
var td = s(le("Shortcut", ed));
//#endregion
//#region src/experimental/Overlays/Tooltip/index.tsx
function nd({ label: e, description: t, items: n, children: r, shortcut: i, instant: a = !1, delay: o = 700, onOpen: s }) {
	let [c, l] = ae(!1), h = k(null), g = O(() => a ? 100 : o, [o, a]), v = !!(e || t || n?.length || i), y = te(() => {
		h.current &&= (clearTimeout(h.current), null);
	}, []), b = te(() => {
		y(), l(!1);
	}, [y]), x = te(() => {
		v && (s?.(), y(), h.current = setTimeout(() => l(!0), g));
	}, [
		y,
		v,
		s,
		g
	]);
	D(() => b, [b]);
	let S = te((e) => {
		try {
			return e.matches(":focus-visible");
		} catch {
			return !1;
		}
	}, []), C = _.isValidElement(r) && r.type !== _.Fragment;
	return /* @__PURE__ */ A(oe, { children: /* @__PURE__ */ A(p, {
		delayDuration: g,
		disableHoverableContent: a,
		children: /* @__PURE__ */ se(m, {
			open: v && c,
			onOpenChange: (e) => {
				e || b();
			},
			children: [/* @__PURE__ */ A(d, {
				asChild: !0,
				className: "pointer-events-auto",
				onPointerEnter: (e) => {
					e.pointerType !== "touch" && x();
				},
				onPointerLeave: () => b(),
				onPointerDown: () => b(),
				onFocus: (e) => {
					v && (S(e.currentTarget) ? (s?.(), l(!0)) : b());
				},
				onBlur: () => b(),
				children: C ? Bu(r) : /* @__PURE__ */ A("span", {
					className: "inline-flex h-fit w-fit",
					children: r
				})
			}), /* @__PURE__ */ A(f, {
				className: u("max-w-xs", i && "pr-1.5", a && "pointer-events-none"),
				children: /* @__PURE__ */ se("div", {
					className: "flex flex-col gap-0.5",
					children: [
						/* @__PURE__ */ se("div", {
							className: "flex items-center gap-2",
							children: [e && /* @__PURE__ */ A("p", {
								className: "font-semibold",
								children: e
							}), i && /* @__PURE__ */ A(td, {
								keys: i,
								variant: "inverse"
							})]
						}),
						t && /* @__PURE__ */ A("p", {
							className: "font-normal",
							children: t.toString()
						}),
						n && n.length > 0 && /* @__PURE__ */ A("ul", {
							className: "m-0 flex list-disc flex-col gap-0.5 pl-4 font-normal",
							children: n.map((e, t) => /* @__PURE__ */ A("li", { children: typeof e == "string" ? e : /* @__PURE__ */ se(oe, { children: [/* @__PURE__ */ A("span", {
								className: "font-semibold",
								children: e.title
							}), e.description && /* @__PURE__ */ se(oe, { children: [" ", e.description] })] }) }, `${t}-${typeof e == "string" ? e : e.title}`))
						})
					]
				})
			})]
		})
	}) });
}
var rd = ["delay", "onOpen"], id = s(le("Tooltip", (e) => {
	let t = rd.reduce((e, t) => {
		let { [t]: n, ...r } = e;
		return r;
	}, e);
	return /* @__PURE__ */ A(nd, { ...t });
})), ad = "bg-f1-background-secondary hover:bg-f1-background-secondary-hover !px-1.5 font-medium text-f1-foreground rounded-xs no-underline transition-colors", od = `${ad} focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold`, sd = "group relative inline-flex items-center justify-center gap-1 whitespace-nowrap rounded border-none p-0 text-base font-medium shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px active:[&_.main]:scale-[0.97] [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed [&[aria-disabled=true]]:pointer-events-none [&[aria-disabled=true]]:cursor-not-allowed [&[aria-disabled=true]]:opacity-30 no-underline [&_.main]:z-20", cd = "relative flex-row font-medium [&[aria-disabled=true]]:pointer-events-none [&[aria-disabled=true]]:cursor-not-allowed [&[aria-disabled=true]]:opacity-30 transition-colors", ld = a({
	base: "inline-flex items-center gap-1 text-base font-medium transition-colors",
	variants: {
		variant: {
			default: u(sd, "bg-f1-background-accent-bold text-f1-foreground-inverse shadow-[0_2px_6px_-1px_rgba(13,22,37,.10),inset_0_-2px_4px_rgba(13,22,37,.08)] after:pointer-events-none after:absolute after:inset-0 after:rounded after:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)] after:content-[''] hover:bg-f1-background-accent-bold-hover", "active:bg-f1-background-accent-bold-hover active:shadow-[0_-2px_6px_-1px_rgba(13,22,37,.10)] active:after:shadow-[inset_0_3px_6px_0_rgba(13,22,37,.2)]", "data-[pressed=true]:bg-f1-background-accent-bold-hover data-[pressed=true]:shadow-[0_-2px_6px_-1px_rgba(13,22,37,.10)] data-[pressed=true]:after:shadow-[inset_0_3px_6px_0_rgba(13,22,37,.2)]"),
			outline: u(sd, "bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary text-f1-foreground after:pointer-events-none after:absolute after:inset-0 after:rounded after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] hover:bg-f1-background-tertiary hover:after:opacity-70 hover:after:ring-f1-border-hover", "active:bg-f1-background-tertiary active:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] active:after:opacity-70 active:after:ring-f1-border-hover", "data-[pressed=true]:bg-f1-background-tertiary data-[pressed=true]:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] data-[pressed=true]:after:opacity-70 data-[pressed=true]:after:ring-f1-border-hover"),
			neutral: u(sd, "bg-f1-background-secondary text-f1-foreground hover:bg-f1-background-secondary-hover", "active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_8px_0_rgba(13,22,37,.16)]", "data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_8px_0_rgba(13,22,37,.16)]"),
			critical: u(sd, "bg-f1-background-secondary text-f1-foreground-critical after:pointer-events-none after:absolute after:inset-0 after:rounded after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] hover:bg-f1-background-critical-bold hover:text-f1-foreground-inverse hover:after:ring-transparent dark:bg-transparent dark:hover:bg-f1-background-critical-bold", "active:bg-f1-background-critical-bold active:text-f1-foreground-inverse active:after:shadow-[inset_0_3px_6px_0_rgba(13,22,37,.2)] active:after:ring-transparent", "data-[pressed=true]:bg-f1-background-critical-bold data-[pressed=true]:text-f1-foreground-inverse data-[pressed=true]:after:shadow-[inset_0_3px_6px_0_rgba(13,22,37,.2)] data-[pressed=true]:after:ring-transparent"),
			ghost: u(sd, "bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)]", "active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)]", "data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)]"),
			promote: u(sd, "bg-f1-background-promote text-f1-foreground shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(245,165,28,.15)] after:pointer-events-none after:absolute after:inset-0 after:rounded after:ring-1 after:ring-inset after:ring-f1-border-promote after:transition-all after:content-[''] hover:bg-f1-background-promote-hover dark:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.30)]", "active:shadow-[inset_0_2px_4px_0_rgba(206,139,24,.5)]", "data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(206,139,24,.5)]"),
			outlinePromote: u(sd, "bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary text-f1-foreground after:pointer-events-none after:absolute after:inset-0 after:rounded after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] hover:bg-f1-background-tertiary hover:after:opacity-70 hover:after:ring-f1-border-hover", "active:bg-f1-background-tertiary active:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] active:after:opacity-70 active:after:ring-f1-border-hover", "data-[pressed=true]:bg-f1-background-tertiary data-[pressed=true]:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] data-[pressed=true]:after:opacity-70 data-[pressed=true]:after:ring-f1-border-hover"),
			link: u(cd, "text-f1-foreground underline decoration-f1-border-hover decoration-1 underline-offset-[5px] visited:text-f1-foreground hover:text-f1-foreground hover:decoration-f1-border-bold active:text-f1-foreground"),
			unstyled: u(cd, "text-inherit no-underline"),
			mention: u(cd, ad),
			selected: u(sd, "bg-f1-background-selected text-f1-icon-selected shadow-none hover:bg-f1-background-selected-hover hover:text-f1-icon-selected-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)]", "active:bg-f1-background-selected-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)]", "data-[pressed=true]:bg-f1-background-selected-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)]"),
			ai: u(sd, "bg-f1-border text-f1-foreground transition-colors duration-200", "[--gradient-angle:0deg]", "hover:bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] hover:before:opacity-100", "hover:animate-rotate-gradient", "before:pointer-events-none before:absolute before:inset-px before:z-10 before:rounded-[9px] before:bg-f1-background before:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] before:content-['']", "after:pointer-events-none after:absolute after:inset-0 after:translate-y-px after:scale-90 after:animate-rotate-gradient after:rounded after:bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] after:opacity-0 after:blur-sm after:content-[''] after:[transition:transform_200ms,opacity_200ms] hover:after:scale-100 hover:after:opacity-80", "active:bg-f1-background-tertiary active:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)]", "data-[pressed=true]:bg-f1-background-tertiary data-[pressed=true]:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] data-[pressed=true]:after:opacity-70 data-[pressed=true]:after:ring-f1-border-hover")
		},
		pressed: {
			true: "[&_.main]:translate-y-px",
			false: ""
		}
	},
	defaultVariants: {
		variant: "default",
		pressed: !1
	}
}), ud = a({
	variants: { size: {
		sm: "rounded-sm text-base before:rounded-[7px] [&_.main]:h-6 [&_.main]:px-2",
		md: "rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3",
		lg: "rounded-md text-lg before:rounded-[11px] [&_.main]:h-10 [&_.main]:px-4"
	} },
	defaultVariants: { size: "md" }
}), dd = a({
	base: "rounded-xs p-0",
	variants: { size: {
		sm: "text-base",
		md: "text-base",
		lg: "text-lg"
	} },
	defaultVariants: { size: "md" }
}), fd = a({
	base: "transition-colors",
	variants: {
		variant: {
			default: "",
			outline: "",
			neutral: "",
			critical: "",
			ghost: "",
			promote: "",
			outlinePromote: "",
			ai: "",
			link: "",
			mention: "",
			selected: "",
			unstyled: ""
		},
		mode: {
			default: "",
			only: ""
		}
	},
	compoundVariants: [
		{
			variant: "default",
			mode: "default",
			class: "[&_svg:not([data-has-color])]:text-f1-icon-inverse dark:[&_svg:not([data-has-color])]:text-f1-icon-bold/80"
		},
		{
			variant: "outline",
			mode: "default",
			class: "[&_svg:not([data-has-color])]:text-f1-icon"
		},
		{
			variant: "neutral",
			mode: "default",
			class: "[&_svg:not([data-has-color])]:text-f1-icon"
		},
		{
			variant: "critical",
			mode: "default",
			class: "[&_svg:not([data-has-color])]:text-f1-icon-critical-bold group-hover:[&_svg:not([data-has-color])]:text-f1-icon-inverse group-active:[&_svg:not([data-has-color])]:text-f1-icon-inverse group-data-[pressed=true]:[&_svg:not([data-has-color])]:text-f1-icon-inverse dark:group-hover:[&_svg:not([data-has-color])]:text-f1-icon-bold/80 dark:group-active:[&_svg:not([data-has-color])]:text-f1-icon-bold/80 dark:group-data-[pressed=true]:[&_svg:not([data-has-color])]:text-f1-icon-bold/80"
		},
		{
			variant: "ghost",
			mode: "default",
			class: "[&_svg:not([data-has-color])]:text-f1-icon"
		},
		{
			variant: "promote",
			mode: "default",
			class: "[&_svg:not([data-has-color])]:text-f1-icon-promote"
		},
		{
			variant: "outlinePromote",
			mode: "default",
			class: "[&_svg:not([data-has-color])]:text-f1-icon-promote"
		},
		{
			variant: "ai",
			mode: "default",
			class: "[&_svg:not([data-has-color])]:text-f1-icon"
		},
		{
			variant: "link",
			mode: "default",
			class: "[&_svg:not([data-has-color])]:text-f1-icon"
		},
		{
			variant: "mention",
			mode: "default",
			class: "[&_svg:not([data-has-color])]:text-f1-icon"
		},
		{
			variant: "unstyled",
			mode: "default",
			class: "[&_svg:not([data-has-color])]:text-f1-icon-accent"
		},
		{
			variant: "default",
			mode: "only",
			class: "[&_svg:not([data-has-color])]:text-f1-icon-inverse dark:[&_svg:not([data-has-color])]:text-f1-icon-bold"
		},
		{
			variant: "outline",
			mode: "only",
			class: "[&_svg:not([data-has-color])]:text-f1-icon-bold"
		},
		{
			variant: "neutral",
			mode: "only",
			class: "[&_svg:not([data-has-color])]:text-f1-icon-bold"
		},
		{
			variant: "critical",
			mode: "only",
			class: "[&_svg:not([data-has-color])]:text-f1-icon-critical-bold group-hover:[&_svg:not([data-has-color])]:text-f1-icon-inverse group-active:[&_svg:not([data-has-color])]:text-f1-icon-inverse group-data-[pressed=true]:[&_svg:not([data-has-color])]:text-f1-icon-inverse dark:group-hover:[&_svg:not([data-has-color])]:text-f1-icon-bold/80 dark:group-active:[&_svg:not([data-has-color])]:text-f1-icon-bold/80 dark:group-data-[pressed=true]:[&_svg:not([data-has-color])]:text-f1-icon-bold/80"
		},
		{
			variant: "ghost",
			mode: "only",
			class: "[&_svg:not([data-has-color])]:text-f1-icon-bold"
		},
		{
			variant: "promote",
			mode: "only",
			class: "[&_svg:not([data-has-color])]:text-f1-icon-promote"
		},
		{
			variant: "outlinePromote",
			mode: "only",
			class: "[&_svg:not([data-has-color])]:text-f1-icon-promote"
		},
		{
			variant: "link",
			mode: "only",
			class: "[&_svg:not([data-has-color])]:text-f1-icon"
		},
		{
			variant: "unstyled",
			mode: "only",
			class: "[&_svg:not([data-has-color])]:text-f1-icon"
		},
		{
			variant: "ai",
			mode: "only",
			class: "[&_svg:not([data-has-color])]:text-f1-icon"
		}
	],
	defaultVariants: {
		variant: "default",
		mode: "default"
	}
}), pd = a({
	base: "rounded-full border-solid border-t-transparent will-change-transform",
	variants: {
		size: {
			sm: "h-3 w-3 border-[1px]",
			md: "h-4 w-4 border-2",
			lg: "h-5 w-5 border-2"
		},
		variant: {
			default: "border-f1-foreground-inverse border-t-transparent",
			outline: "border-f1-foreground border-t-transparent",
			neutral: "border-f1-foreground border-t-transparent",
			critical: "border-f1-icon-critical border-t-transparent",
			ghost: "border-f1-foreground border-t-transparent",
			promote: "border-f1-icon-promote border-t-transparent",
			outlinePromote: "border-f1-icon-promote border-t-transparent",
			ai: "border-f1-foreground border-t-transparent",
			unstyled: ""
		}
	}
});
//#endregion
export { Mn as $, au as A, Ns as B, ku as C, fu as D, mu as E, wl as F, ui as G, Ga as H, Cl as I, oi as J, li as K, Jc as L, Wl as M, El as N, du as O, Tl as P, W as Q, dc as R, Cu as S, gu as T, Ea as U, X as V, bi as W, Kr as X, ii as Y, q as Z, Nu as _, pd as a, Ye as at, Du as b, nd as c, F as ct, Yu as d, he as dt, Pn as et, Ju as f, pe as ft, zu as g, Ru as h, le as ht, dd as i, R as it, nu as j, su as k, td as l, De as lt, Iu as m, ue as mt, ud as n, En as nt, od as o, Ke as ot, Vu as p, de as pt, ci as q, fd as r, H as rt, id as s, I as st, ld as t, Dn as tt, Ku as u, Ce as ut, Tu as v, ju as w, bu as x, Eu as y, uc as z };
