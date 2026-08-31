import { a as e, n as t, o as n, r, t as i } from "./rolldown-runtime-CEFd7nDs.js";
import { t as a } from "./dist-CqnuTXEz.js";
import { t as o } from "./component-Lhh_08kH.js";
import { d as s, g as c, h as l } from "./OneEllipsis-DuhKMtYp.js";
import { t as u } from "./utils-CVzxZnoI.js";
import { i as d, n as f, r as p, t as m } from "./tooltip-BPSwDQpD.js";
import { t as h } from "./i18n-provider-defaults-B5_EAVz9.js";
import * as g from "react";
import { Children as _, Component as v, Fragment as y, cloneElement as b, createContext as x, createElement as S, forwardRef as C, isValidElement as ee, memo as te, useCallback as w, useContext as T, useEffect as E, useId as ne, useInsertionEffect as re, useLayoutEffect as ie, useMemo as D, useRef as O, useState as k } from "react";
import { Fragment as ae, jsx as A, jsxs as oe } from "react/jsx-runtime";
//#region src/lib/experimental.ts
var j = {}, se = (e, t) => {
	let n = [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)];
	for (let r of n) if (r !== "prototype" && r !== "length" && r !== "name" && r !== "$$typeof" && r !== "render") try {
		let n = Object.getOwnPropertyDescriptor(e, r);
		n && Object.defineProperty(t, r, n);
	} catch {}
}, ce = (e, t) => {
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
		let n = t.render, r = C((t, r) => (l() && (i(), j[e] || (j[e] = {
			uses: 0,
			usesReported: -1
		}), j[e] = {
			...j[e],
			uses: (j[e]?.uses ?? 0) + 1
		}), n(t, r)));
		return se(t, r), r.displayName ||= `Experimental(${e})`, r;
	}
	if (t.$$typeof === Symbol.for("react.memo")) {
		let n = t.type, r = t.compare, a = (t) => (l() && (i(), j[e] || (j[e] = {
			uses: 0,
			usesReported: -1
		}), j[e] = {
			...j[e],
			uses: (j[e]?.uses ?? 0) + 1
		}), n(t));
		a.displayName = `Experimental(${e})`, se(t, a);
		let o = te(a, r);
		return se(t, o), o;
	}
	let a = ((...n) => (l() && (i(), j[e] || (j[e] = {
		uses: 0,
		usesReported: -1
	}), j[e] = {
		...j[e],
		uses: (j[e]?.uses ?? 0) + 1
	}), t(...n)));
	return se(t, a), a;
}, le = x({});
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/utils/use-constant.mjs
function ue(e) {
	let t = O(null);
	return t.current === null && (t.current = e()), t.current;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/utils/is-browser.mjs
var de = typeof window < "u", fe = de ? ie : E, pe = /* @__PURE__ */ x(null), me = x({
	transformPagePoint: (e) => e,
	isStatic: !1,
	reducedMotion: "never"
});
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/is-object.mjs
function he(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/utils/is-html-element.mjs
function ge(e) {
	return he(e) && "offsetHeight" in e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
var _e = class extends g.Component {
	getSnapshotBeforeUpdate(e) {
		let t = this.props.childRef.current;
		if (t && e.isPresent && !this.props.isPresent) {
			let e = t.offsetParent, n = ge(e) && e.offsetWidth || 0, r = this.props.sizeRef.current;
			r.height = t.offsetHeight || 0, r.width = t.offsetWidth || 0, r.top = t.offsetTop, r.left = t.offsetLeft, r.right = n - r.width - r.left;
		}
		return null;
	}
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
};
function ve({ children: e, isPresent: t, anchorX: n }) {
	let r = ne(), i = O(null), a = O({
		width: 0,
		height: 0,
		top: 0,
		left: 0,
		right: 0
	}), { nonce: o } = T(me);
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
	}, [t]), A(_e, {
		isPresent: t,
		childRef: i,
		sizeRef: a,
		children: g.cloneElement(e, { ref: i })
	});
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var ye = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: a, mode: o, anchorX: s }) => {
	let c = ue(be), l = ne(), u = !0, d = D(() => (u = !1, {
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
	return a && u && (d = { ...d }), D(() => {
		c.forEach((e, t) => c.set(t, !1));
	}, [n]), g.useEffect(() => {
		!n && !c.size && r && r();
	}, [n]), o === "popLayout" && (e = A(ve, {
		isPresent: n,
		anchorX: s,
		children: e
	})), A(pe.Provider, {
		value: d,
		children: e
	});
};
function be() {
	return /* @__PURE__ */ new Map();
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
function xe(e = !0) {
	let t = T(pe);
	if (t === null) return [!0, null];
	let { isPresent: n, onExitComplete: r, register: i } = t, a = ne();
	E(() => {
		if (e) return i(a);
	}, [e]);
	let o = w(() => e && r && r(a), [
		a,
		r,
		e
	]);
	return !n && r ? [!1, o] : [!0];
}
function Se() {
	return Ce(T(pe));
}
function Ce(e) {
	return e === null || e.isPresent;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/utils.mjs
var we = (e) => e.key || "";
function Te(e) {
	let t = [];
	return _.forEach(e, (e) => {
		ee(e) && t.push(e);
	}), t;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.mjs
var Ee = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: i = !0, mode: a = "sync", propagate: o = !1, anchorX: s = "left" }) => {
	let [c, l] = xe(o), u = D(() => Te(e), [e]), d = o && !c ? [] : u.map(we), f = O(!0), p = O(u), m = ue(() => /* @__PURE__ */ new Map()), [h, g] = k(u), [_, v] = k(u);
	fe(() => {
		f.current = !1, p.current = u;
		for (let e = 0; e < _.length; e++) {
			let t = we(_[e]);
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
			let n = _[t], r = we(n);
			d.includes(r) || (e.splice(t, 0, n), y.push(n));
		}
		return a === "wait" && y.length && (e = y), v(Te(e)), g(u), null;
	}
	process.env.NODE_ENV !== "production" && a === "wait" && _.length > 1 && console.warn("You're attempting to animate multiple children within AnimatePresence, but its mode is set to \"wait\". This will lead to odd visual behaviour.");
	let { forceRender: b } = T(le);
	return A(ae, { children: _.map((e) => {
		let h = we(e), g = o && !c ? !1 : u === _ || d.includes(h);
		return A(ye, {
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
}, De = [
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
function Oe(e, t) {
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
var N = {}, ke = 40;
function Ae(e, t) {
	let n = !1, r = !0, i = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, a = () => n = !0, o = De.reduce((e, n) => (e[n] = Oe(a, t ? n : void 0), e), {}), { setup: s, read: c, resolveKeyframes: l, preUpdate: u, update: d, preRender: f, render: p, postRender: m } = o, h = () => {
		let a = N.useManualTiming ? i.timestamp : performance.now();
		n = !1, N.useManualTiming || (i.delta = r ? 1e3 / 60 : Math.max(Math.min(a - i.timestamp, ke), 1)), i.timestamp = a, i.isProcessing = !0, s.process(i), c.process(i), l.process(i), u.process(i), d.process(i), f.process(i), p.process(i), m.process(i), i.isProcessing = !1, n && t && (r = !1, e(h));
	}, g = () => {
		n = !0, r = !0, i.isProcessing || e(h);
	};
	return {
		schedule: De.reduce((e, t) => {
			let r = o[t];
			return e[t] = (e, t = !1, i = !1) => (n || g(), r.schedule(e, t, i)), e;
		}, {}),
		cancel: (e) => {
			for (let t = 0; t < De.length; t++) o[De[t]].cancel(e);
		},
		state: i,
		steps: o
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/noop.mjs
var P = /* @__NO_SIDE_EFFECTS__ */ (e) => e, { schedule: F, cancel: I, state: L, steps: je } = /* @__PURE__ */ Ae(typeof requestAnimationFrame < "u" ? requestAnimationFrame : P, !0), Me = x({ strict: !1 }), Ne = {
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
}, Pe = {};
for (let e in Ne) Pe[e] = { isEnabled: (t) => Ne[e].some((e) => !!t[e]) };
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/motion/features/load-features.mjs
function Fe(e) {
	for (let t in e) Pe[t] = {
		...Pe[t],
		...e[t]
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/valid-prop.mjs
var Ie = /* @__PURE__ */ new Set(/* @__PURE__ */ "animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.ignoreStrict.viewport".split("."));
function Le(e) {
	return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Ie.has(e);
}
//#endregion
//#region ../../node_modules/.pnpm/@emotion+memoize@0.9.0/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function Re(e) {
	var t = Object.create(null);
	return function(n) {
		return t[n] === void 0 && (t[n] = e(n)), t[n];
	};
}
var ze = t((() => {})), Be = /* @__PURE__ */ r({ default: () => He }), Ve, He, Ue = t((() => {
	ze(), Ve = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, He = /* #__PURE__ */ Re(function(e) {
		return Ve.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
	});
})), We = (e) => !Le(e);
function Ge(e) {
	e && (We = (t) => t.startsWith("on") ? !Le(t) : e(t));
}
try {
	Ge((Ue(), e(Be)).default);
} catch {}
function Ke(e, t, n) {
	let r = {};
	for (let i in e) (i !== "values" || typeof e.values != "object") && (We(i) || n === !0 && Le(i) || !t && !Le(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
	return r;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/warn-once.mjs
var qe = /* @__PURE__ */ new Set();
function Je(e, t, n) {
	e || qe.has(t) || (console.warn(t), n && console.warn(n), qe.add(t));
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/create-proxy.mjs
function Ye(e) {
	if (typeof Proxy > "u") return e;
	let t = /* @__PURE__ */ new Map();
	return new Proxy((...t) => (process.env.NODE_ENV !== "production" && Je(!1, "motion() is deprecated. Use motion.create() instead."), e(...t)), { get: (n, r) => r === "create" ? e : (t.has(r) || t.set(r, e(r)), t.get(r)) });
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/context/MotionContext/index.mjs
var Xe = /* @__PURE__ */ x({});
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-animation-controls.mjs
function Ze(e) {
	return typeof e == "object" && !!e && typeof e.start == "function";
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/utils/is-variant-label.mjs
function Qe(e) {
	return typeof e == "string" || Array.isArray(e);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/utils/variant-props.mjs
var $e = [
	"animate",
	"whileInView",
	"whileFocus",
	"whileHover",
	"whileTap",
	"whileDrag",
	"exit"
], et = ["initial", ...$e];
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/utils/is-controlling-variants.mjs
function tt(e) {
	return Ze(e.animate) || et.some((t) => Qe(e[t]));
}
function nt(e) {
	return !!(tt(e) || e.variants);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/context/MotionContext/utils.mjs
function rt(e, t) {
	if (tt(e)) {
		let { initial: t, animate: n } = e;
		return {
			initial: t === !1 || Qe(t) ? t : void 0,
			animate: Qe(n) ? n : void 0
		};
	}
	return e.inherit === !1 ? {} : t;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/context/MotionContext/create.mjs
function it(e) {
	let { initial: t, animate: n } = rt(e, T(Xe));
	return D(() => ({
		initial: t,
		animate: n
	}), [at(t), at(n)]);
}
function at(e) {
	return Array.isArray(e) ? e.join(" ") : e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/symbol.mjs
var ot = Symbol.for("motionComponentSymbol");
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/utils/is-ref-object.mjs
function st(e) {
	return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
function ct(e, t, n) {
	return w((r) => {
		r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : st(n) && (n.current = r));
	}, [t]);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs
var lt = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), ut = "data-" + lt("framerAppearId"), dt = x({}), { schedule: ft, cancel: pt } = /* @__PURE__ */ Ae(queueMicrotask, !1);
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/use-visual-element.mjs
function mt(e, t, n, r, i) {
	let { visualElement: a } = T(Xe), o = T(Me), s = T(pe), c = T(me).reducedMotion, l = O(null);
	r ||= o.renderer, !l.current && r && (l.current = r(e, {
		visualState: t,
		parent: a,
		props: n,
		presenceContext: s,
		blockInitialAnimation: s ? s.initial === !1 : !1,
		reducedMotionConfig: c
	}));
	let u = l.current, d = T(dt);
	u && !u.projection && i && (u.type === "html" || u.type === "svg") && ht(l.current, n, i, d);
	let f = O(!1);
	re(() => {
		u && f.current && u.update(n, s);
	});
	let p = n[ut], m = O(!!p && !window.MotionHandoffIsComplete?.(p) && window.MotionHasOptimisedAnimation?.(p));
	return fe(() => {
		u && (f.current = !0, window.MotionIsMounted = !0, u.updateFeatures(), ft.render(u.render), m.current && u.animationState && u.animationState.animateChanges());
	}), E(() => {
		u && (!m.current && u.animationState && u.animationState.animateChanges(), m.current &&= (queueMicrotask(() => {
			window.MotionHandoffMarkAsComplete?.(p);
		}), !1));
	}), u;
}
function ht(e, t, n, r) {
	let { layoutId: i, layout: a, drag: o, dragConstraints: s, layoutScroll: c, layoutRoot: l, layoutCrossfade: u } = t;
	e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : gt(e.parent)), e.projection.setOptions({
		layoutId: i,
		layout: a,
		alwaysMeasureLayout: !!o || s && st(s),
		visualElement: e,
		animationType: typeof a == "string" ? a : "both",
		initialPromotionConfig: r,
		crossfade: u,
		layoutScroll: c,
		layoutRoot: l
	});
}
function gt(e) {
	if (e) return e.options.allowProjection === !1 ? gt(e.parent) : e.projection;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/errors.mjs
var _t = () => {}, R = () => {};
process.env.NODE_ENV !== "production" && (_t = (e, t) => {
	!e && typeof console < "u" && console.warn(t);
}, R = (e, t) => {
	if (!e) throw Error(t);
});
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/motion/index.mjs
function vt({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i }) {
	e && Fe(e);
	function a(a, o) {
		let s, c = {
			...T(me),
			...a,
			layoutId: yt(a)
		}, { isStatic: l } = c, u = it(a), d = r(a, l);
		if (!l && de) {
			bt(c, e);
			let n = xt(c);
			s = n.MeasureLayout, u.visualElement = mt(i, d, c, t, n.ProjectionNode);
		}
		return oe(Xe.Provider, {
			value: u,
			children: [s && u.visualElement ? A(s, {
				visualElement: u.visualElement,
				...c
			}) : null, n(i, a, ct(d, u.visualElement, o), d, l, u.visualElement)]
		});
	}
	a.displayName = `motion.${typeof i == "string" ? i : `create(${i.displayName ?? i.name ?? ""})`}`;
	let o = C(a);
	return o[ot] = i, o;
}
function yt({ layoutId: e }) {
	let t = T(le).id;
	return t && e !== void 0 ? t + "-" + e : e;
}
function bt(e, t) {
	let n = T(Me).strict;
	if (process.env.NODE_ENV !== "production" && t && n) {
		let t = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
		e.ignoreStrict ? _t(!1, t) : R(!1, t);
	}
}
function xt(e) {
	let { drag: t, layout: n } = Pe;
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
var St = (e) => (t) => typeof t == "string" && t.startsWith(e), Ct = /*@__PURE__*/ St("--"), wt = /*@__PURE__*/ St("var(--"), Tt = (e) => wt(e) ? Et.test(e.split("/*")[0].trim()) : !1, Et = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Dt = {};
function Ot(e) {
	for (let t in e) Dt[t] = e[t], Ct(t) && (Dt[t].isCSSVariable = !0);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/render/utils/keys-transform.mjs
var kt = [
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
], At = /* @__PURE__ */ new Set(kt);
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs
function jt(e, { layout: t, layoutId: n }) {
	return At.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Dt[e] || e === "opacity");
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/value/types/utils/get-as-type.mjs
var Mt = (e, t) => t && typeof e == "number" ? t.transform(e) : e, z = (e, t, n) => n > t ? t : n < e ? e : n, Nt = {
	test: (e) => typeof e == "number",
	parse: parseFloat,
	transform: (e) => e
}, Pt = {
	...Nt,
	transform: (e) => z(0, 1, e)
}, Ft = {
	...Nt,
	default: 1
}, It = {
	...Nt,
	transform: Math.round
}, Lt = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
	test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
	parse: parseFloat,
	transform: (t) => `${t}${e}`
}), Rt = /*@__PURE__*/ Lt("deg"), B = /*@__PURE__*/ Lt("%"), V = /*@__PURE__*/ Lt("px"), zt = /*@__PURE__*/ Lt("vh"), Bt = /*@__PURE__*/ Lt("vw"), Vt = {
	...B,
	parse: (e) => B.parse(e) / 100,
	transform: (e) => B.transform(e * 100)
}, Ht = {
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
	rotate: Rt,
	rotateX: Rt,
	rotateY: Rt,
	rotateZ: Rt,
	scale: Ft,
	scaleX: Ft,
	scaleY: Ft,
	scaleZ: Ft,
	skew: Rt,
	skewX: Rt,
	skewY: Rt,
	distance: V,
	translateX: V,
	translateY: V,
	translateZ: V,
	x: V,
	y: V,
	z: V,
	perspective: V,
	transformPerspective: V,
	opacity: Pt,
	originX: Vt,
	originY: Vt,
	originZ: V,
	zIndex: It,
	fillOpacity: Pt,
	strokeOpacity: Pt,
	numOctaves: It
}, Ut = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
}, Wt = kt.length;
function Gt(e, t, n) {
	let r = "", i = !0;
	for (let a = 0; a < Wt; a++) {
		let o = kt[a], s = e[o];
		if (s === void 0) continue;
		let c = !0;
		if (c = typeof s == "number" ? s === +!!o.startsWith("scale") : parseFloat(s) === 0, !c || n) {
			let e = Mt(s, Ht[o]);
			if (!c) {
				i = !1;
				let t = Ut[o] || o;
				r += `${t}(${e}) `;
			}
			n && (t[o] = e);
		}
	}
	return r = r.trim(), n ? r = n(t, i ? "" : r) : i && (r = "none"), r;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/build-styles.mjs
function Kt(e, t, n) {
	let { style: r, vars: i, transformOrigin: a } = e, o = !1, s = !1;
	for (let e in t) {
		let n = t[e];
		if (At.has(e)) {
			o = !0;
			continue;
		}
		if (Ct(e)) {
			i[e] = n;
			continue;
		}
		{
			let t = Mt(n, Ht[e]);
			e.startsWith("origin") ? (s = !0, a[e] = t) : r[e] = t;
		}
	}
	if (t.transform || (o || n ? r.transform = Gt(t, e.transform, n) : r.transform &&= "none"), s) {
		let { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = a;
		r.transformOrigin = `${e} ${t} ${n}`;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/html/utils/create-render-state.mjs
var qt = () => ({
	style: {},
	transform: {},
	transformOrigin: {},
	vars: {}
}), H = (e) => !!(e && e.getVelocity);
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/html/use-props.mjs
function Jt(e, t, n) {
	for (let r in t) !H(t[r]) && !jt(r, n) && (e[r] = t[r]);
}
function Yt({ transformTemplate: e }, t) {
	return D(() => {
		let n = qt();
		return Kt(n, t, e), Object.assign({}, n.vars, n.style);
	}, [t]);
}
function Xt(e, t) {
	let n = e.style || {}, r = {};
	return Jt(r, n, e), Object.assign(r, Yt(e, t)), r;
}
function Zt(e, t) {
	let n = {}, r = Xt(e, t);
	return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/path.mjs
var Qt = {
	offset: "stroke-dashoffset",
	array: "stroke-dasharray"
}, $t = {
	offset: "strokeDashoffset",
	array: "strokeDasharray"
};
function en(e, t, n = 1, r = 0, i = !0) {
	e.pathLength = 1;
	let a = i ? Qt : $t;
	e[a.offset] = V.transform(-r);
	let o = V.transform(t), s = V.transform(n);
	e[a.array] = `${o} ${s}`;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/build-attrs.mjs
function tn(e, { attrX: t, attrY: n, attrScale: r, pathLength: i, pathSpacing: a = 1, pathOffset: o = 0, ...s }, c, l, u) {
	if (Kt(e, s, l), c) {
		e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
		return;
	}
	e.attrs = e.style, e.style = {};
	let { attrs: d, style: f } = e;
	d.transform && (f.transform = d.transform, delete d.transform), (f.transform || d.transformOrigin) && (f.transformOrigin = d.transformOrigin ?? "50% 50%", delete d.transformOrigin), f.transform && (f.transformBox = u?.transformBox ?? "fill-box", delete d.transformBox), t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), i !== void 0 && en(d, i, a, o, !1);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
var nn = () => ({
	...qt(),
	attrs: {}
}), rn = (e) => typeof e == "string" && e.toLowerCase() === "svg";
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/svg/use-props.mjs
function an(e, t, n, r) {
	let i = D(() => {
		let n = nn();
		return tn(n, t, rn(r), e.transformTemplate, e.style), {
			...n.attrs,
			style: { ...n.style }
		};
	}, [t]);
	if (e.style) {
		let t = {};
		Jt(t, e.style, e), i.style = {
			...t,
			...i.style
		};
	}
	return i;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/svg/lowercase-elements.mjs
var on = [
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
function sn(e) {
	return typeof e != "string" || e.includes("-") ? !1 : !!(on.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/dom/use-render.mjs
function cn(e = !1) {
	return (t, n, r, { latestValues: i }, a) => {
		let o = (sn(t) ? an : Zt)(n, i, a, t), s = Ke(n, typeof t == "string", e), c = t === y ? {} : {
			...s,
			...o,
			ref: r
		}, { children: l } = n, u = D(() => H(l) ? l.get() : l, [l]);
		return S(t, {
			...c,
			children: u
		});
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/utils/resolve-variants.mjs
function ln(e) {
	let t = [{}, {}];
	return e?.values.forEach((e, n) => {
		t[0][n] = e.get(), t[1][n] = e.getVelocity();
	}), t;
}
function un(e, t, n, r) {
	if (typeof t == "function") {
		let [i, a] = ln(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
		let [i, a] = ln(r);
		t = t(n === void 0 ? e.custom : n, i, a);
	}
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/value/utils/resolve-motion-value.mjs
function dn(e) {
	return H(e) ? e.get() : e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/motion/utils/use-visual-state.mjs
function fn({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
	return {
		latestValues: mn(n, r, i, e),
		renderState: t()
	};
}
var pn = (e) => (t, n) => {
	let r = T(Xe), i = T(pe), a = () => fn(e, t, r, i);
	return n ? a() : ue(a);
};
function mn(e, t, n, r) {
	let i = {}, a = r(e, {});
	for (let e in a) i[e] = dn(a[e]);
	let { initial: o, animate: s } = e, c = tt(e), l = nt(e);
	t && l && !c && e.inherit !== !1 && (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
	let u = n ? n.initial === !1 : !1;
	u ||= o === !1;
	let d = u ? s : o;
	if (d && typeof d != "boolean" && !Ze(d)) {
		let t = Array.isArray(d) ? d : [d];
		for (let n = 0; n < t.length; n++) {
			let r = un(e, t[n]);
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
function hn(e, t, n) {
	let { style: r } = e, i = {};
	for (let a in r) (H(r[a]) || t.style && H(t.style[a]) || jt(a, e) || n?.getValue(a)?.liveStyle !== void 0) && (i[a] = r[a]);
	return i;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/html/config-motion.mjs
var gn = { useVisualState: pn({
	scrapeMotionValuesFromProps: hn,
	createRenderState: qt
}) };
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs
function _n(e, t, n) {
	let r = hn(e, t, n);
	for (let n in e) if (H(e[n]) || H(t[n])) {
		let t = kt.indexOf(n) === -1 ? n : "attr" + n.charAt(0).toUpperCase() + n.substring(1);
		r[t] = e[n];
	}
	return r;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/svg/config-motion.mjs
var vn = { useVisualState: pn({
	scrapeMotionValuesFromProps: _n,
	createRenderState: nn
}) };
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/components/create-factory.mjs
function yn(e, t) {
	return function(n, { forwardMotionProps: r } = { forwardMotionProps: !1 }) {
		return vt({
			...sn(n) ? vn : gn,
			preloadedFeatures: e,
			useRender: cn(r),
			createVisualElement: t,
			Component: n
		});
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs
function bn(e, t, n) {
	let r = e.getProps();
	return un(r, t, n === void 0 ? r.custom : n, e);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs
var xn = (e) => Array.isArray(e), Sn;
function Cn() {
	Sn = void 0;
}
var U = {
	now: () => (Sn === void 0 && U.set(L.isProcessing || N.useManualTiming ? L.timestamp : performance.now()), Sn),
	set: (e) => {
		Sn = e, queueMicrotask(Cn);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/array.mjs
function wn(e, t) {
	e.indexOf(t) === -1 && e.push(t);
}
function Tn(e, t) {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}
function En([ ...e], t, n) {
	let r = t < 0 ? e.length + t : t;
	if (r >= 0 && r < e.length) {
		let r = n < 0 ? e.length + n : n, [i] = e.splice(t, 1);
		e.splice(r, 0, i);
	}
	return e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/subscription-manager.mjs
var Dn = class {
	constructor() {
		this.subscriptions = [];
	}
	add(e) {
		return wn(this.subscriptions, e), () => Tn(this.subscriptions, e);
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
function On(e, t) {
	return t ? 1e3 / t * e : 0;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/value/index.mjs
var kn = 30, An = (e) => !isNaN(parseFloat(e)), jn = { current: void 0 }, Mn = class {
	constructor(e, t = {}) {
		this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (e, t = !0) => {
			let n = U.now();
			if (this.updatedAt !== n && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents)) for (let e of this.dependents) e.dirty();
			t && this.events.renderRequest?.notify(this.current);
		}, this.hasAnimated = !1, this.setCurrent(e), this.owner = t.owner;
	}
	setCurrent(e) {
		this.current = e, this.updatedAt = U.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = An(this.current));
	}
	setPrevFrameValue(e = this.current) {
		this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
	}
	onChange(e) {
		return process.env.NODE_ENV !== "production" && Je(!1, "value.onChange(callback) is deprecated. Switch to value.on(\"change\", callback)."), this.on("change", e);
	}
	on(e, t) {
		this.events[e] || (this.events[e] = new Dn());
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
		return jn.current && jn.current.push(this), this.current;
	}
	getPrevious() {
		return this.prev;
	}
	getVelocity() {
		let e = U.now();
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > kn) return 0;
		let t = Math.min(this.updatedAt - this.prevUpdatedAt, kn);
		return On(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
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
function Nn(e, t) {
	return new Mn(e, t);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/utils/setters.mjs
function Pn(e, t, n) {
	e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Nn(n));
}
function Fn(e) {
	return xn(e) ? e[e.length - 1] || 0 : e;
}
function In(e, t) {
	let { transitionEnd: n = {}, transition: r = {}, ...i } = bn(e, t) || {};
	i = {
		...i,
		...n
	};
	for (let t in i) Pn(e, t, Fn(i[t]));
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/value/use-will-change/is.mjs
function Ln(e) {
	return !!(H(e) && e.add);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/value/use-will-change/add-will-change.mjs
function Rn(e, t) {
	let n = e.getValue("willChange");
	if (Ln(n)) return n.add(t);
	if (!n && N.WillChange) {
		let n = new N.WillChange("auto");
		e.addValue("willChange", n), n.add(t);
	}
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/optimized-appear/get-appear-id.mjs
function zn(e) {
	return e.props[ut];
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/animators/waapi/utils/get-final-keyframe.mjs
var Bn = (e) => e !== null;
function Vn(e, { repeat: t, repeatType: n = "loop" }, r) {
	let i = e.filter(Bn), a = t && n !== "loop" && t % 2 == 1 ? 0 : i.length - 1;
	return !a || r === void 0 ? i[a] : r;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/default-transitions.mjs
var Hn = {
	type: "spring",
	stiffness: 500,
	damping: 25,
	restSpeed: 10
}, Un = (e) => ({
	type: "spring",
	stiffness: 550,
	damping: e === 0 ? 2 * Math.sqrt(550) : 30,
	restSpeed: 10
}), Wn = {
	type: "keyframes",
	duration: .8
}, Gn = {
	type: "keyframes",
	ease: [
		.25,
		.1,
		.35,
		1
	],
	duration: .3
}, Kn = (e, { keyframes: t }) => t.length > 2 ? Wn : At.has(e) ? e.startsWith("scale") ? Un(t[1]) : Hn : Gn;
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/utils/is-transition-defined.mjs
function qn({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: a, repeatType: o, repeatDelay: s, from: c, elapsed: l, ...u }) {
	return !!Object.keys(u).length;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/utils/get-value-transition.mjs
function Jn(e, t) {
	return e?.[t] ?? e?.default ?? e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/time-conversion.mjs
var W = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, G = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3, Yn = {
	layout: 0,
	mainThread: 0,
	waapi: 0
}, Xn = (e) => Math.round(e * 1e5) / 1e5, Zn = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/value/types/utils/is-nullish.mjs
function Qn(e) {
	return e == null;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/value/types/utils/single-color-regex.mjs
var $n = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, er = (e, t) => (n) => !!(typeof n == "string" && $n.test(n) && n.startsWith(e) || t && !Qn(n) && Object.prototype.hasOwnProperty.call(n, t)), tr = (e, t, n) => (r) => {
	if (typeof r != "string") return r;
	let [i, a, o, s] = r.match(Zn);
	return {
		[e]: parseFloat(i),
		[t]: parseFloat(a),
		[n]: parseFloat(o),
		alpha: s === void 0 ? 1 : parseFloat(s)
	};
}, nr = (e) => z(0, 255, e), rr = {
	...Nt,
	transform: (e) => Math.round(nr(e))
}, ir = {
	test: /*@__PURE__*/ er("rgb", "red"),
	parse: /*@__PURE__*/ tr("red", "green", "blue"),
	transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + rr.transform(e) + ", " + rr.transform(t) + ", " + rr.transform(n) + ", " + Xn(Pt.transform(r)) + ")"
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/value/types/color/hex.mjs
function ar(e) {
	let t = "", n = "", r = "", i = "";
	return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, n += n, r += r, i += i), {
		red: parseInt(t, 16),
		green: parseInt(n, 16),
		blue: parseInt(r, 16),
		alpha: i ? parseInt(i, 16) / 255 : 1
	};
}
var or = {
	test: /*@__PURE__*/ er("#"),
	parse: ar,
	transform: ir.transform
}, sr = {
	test: /*@__PURE__*/ er("hsl", "hue"),
	parse: /*@__PURE__*/ tr("hue", "saturation", "lightness"),
	transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + B.transform(Xn(t)) + ", " + B.transform(Xn(n)) + ", " + Xn(Pt.transform(r)) + ")"
}, K = {
	test: (e) => ir.test(e) || or.test(e) || sr.test(e),
	parse: (e) => ir.test(e) ? ir.parse(e) : sr.test(e) ? sr.parse(e) : or.parse(e),
	transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? ir.transform(e) : sr.transform(e)
}, cr = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/value/types/complex/index.mjs
function lr(e) {
	return isNaN(e) && typeof e == "string" && (e.match(Zn)?.length || 0) + (e.match(cr)?.length || 0) > 0;
}
var ur = "number", dr = "color", fr = "var", pr = "var(", mr = "${}", hr = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function gr(e) {
	let t = e.toString(), n = [], r = {
		color: [],
		number: [],
		var: []
	}, i = [], a = 0;
	return {
		values: n,
		split: t.replace(hr, (e) => (K.test(e) ? (r.color.push(a), i.push(dr), n.push(K.parse(e))) : e.startsWith(pr) ? (r.var.push(a), i.push(fr), n.push(e)) : (r.number.push(a), i.push(ur), n.push(parseFloat(e))), ++a, mr)).split(mr),
		indexes: r,
		types: i
	};
}
function _r(e) {
	return gr(e).values;
}
function vr(e) {
	let { split: t, types: n } = gr(e), r = t.length;
	return (e) => {
		let i = "";
		for (let a = 0; a < r; a++) if (i += t[a], e[a] !== void 0) {
			let t = n[a];
			i += t === ur ? Xn(e[a]) : t === dr ? K.transform(e[a]) : e[a];
		}
		return i;
	};
}
var yr = (e) => typeof e == "number" ? 0 : e;
function br(e) {
	let t = _r(e);
	return vr(e)(t.map(yr));
}
var xr = {
	test: lr,
	parse: _r,
	createTransformer: vr,
	getAnimatableNone: br
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/value/types/color/hsla-to-rgba.mjs
function Sr(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Cr({ hue: e, saturation: t, lightness: n, alpha: r }) {
	e /= 360, t /= 100, n /= 100;
	let i = 0, a = 0, o = 0;
	if (!t) i = a = o = n;
	else {
		let r = n < .5 ? n * (1 + t) : n + t - n * t, s = 2 * n - r;
		i = Sr(s, r, e + 1 / 3), a = Sr(s, r, e), o = Sr(s, r, e - 1 / 3);
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
function wr(e, t) {
	return (n) => n > 0 ? t : e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/utils/mix/number.mjs
var q = (e, t, n) => e + (t - e) * n, Tr = (e, t, n) => {
	let r = e * e, i = n * (t * t - r) + r;
	return i < 0 ? 0 : Math.sqrt(i);
}, Er = [
	or,
	ir,
	sr
], Dr = (e) => Er.find((t) => t.test(e));
function Or(e) {
	let t = Dr(e);
	if (_t(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t) return !1;
	let n = t.parse(e);
	return t === sr && (n = Cr(n)), n;
}
var kr = (e, t) => {
	let n = Or(e), r = Or(t);
	if (!n || !r) return wr(e, t);
	let i = { ...n };
	return (e) => (i.red = Tr(n.red, r.red, e), i.green = Tr(n.green, r.green, e), i.blue = Tr(n.blue, r.blue, e), i.alpha = q(n.alpha, r.alpha, e), ir.transform(i));
}, Ar = /* @__PURE__ */ new Set(["none", "hidden"]);
function jr(e, t) {
	return Ar.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/pipe.mjs
var Mr = (e, t) => (n) => t(e(n)), Nr = (...e) => e.reduce(Mr);
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/utils/mix/complex.mjs
function Pr(e, t) {
	return (n) => q(e, t, n);
}
function Fr(e) {
	return typeof e == "number" ? Pr : typeof e == "string" ? Tt(e) ? wr : K.test(e) ? kr : zr : Array.isArray(e) ? Ir : typeof e == "object" ? K.test(e) ? kr : Lr : wr;
}
function Ir(e, t) {
	let n = [...e], r = n.length, i = e.map((e, n) => Fr(e)(e, t[n]));
	return (e) => {
		for (let t = 0; t < r; t++) n[t] = i[t](e);
		return n;
	};
}
function Lr(e, t) {
	let n = {
		...e,
		...t
	}, r = {};
	for (let i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = Fr(e[i])(e[i], t[i]));
	return (e) => {
		for (let t in r) n[t] = r[t](e);
		return n;
	};
}
function Rr(e, t) {
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
var zr = (e, t) => {
	let n = xr.createTransformer(t), r = gr(e), i = gr(t);
	return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? Ar.has(e) && !i.values.length || Ar.has(t) && !r.values.length ? jr(e, t) : Nr(Ir(Rr(r, i), i.values), n) : (_t(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), wr(e, t));
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/utils/mix/index.mjs
function Br(e, t, n) {
	return typeof e == "number" && typeof t == "number" && typeof n == "number" ? q(e, t, n) : Fr(e)(e, t);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/drivers/frame.mjs
var Vr = (e) => {
	let t = ({ timestamp: t }) => e(t);
	return {
		start: (e = !0) => F.update(t, e),
		stop: () => I(t),
		now: () => L.isProcessing ? L.timestamp : U.now()
	};
}, Hr = (e, t, n = 10) => {
	let r = "", i = Math.max(Math.round(t / n), 2);
	for (let t = 0; t < i; t++) r += Math.round(e(t / (i - 1)) * 1e4) / 1e4 + ", ";
	return `linear(${r.substring(0, r.length - 2)})`;
}, Ur = 2e4;
function Wr(e) {
	let t = 0, n = e.next(t);
	for (; !n.done && t < 2e4;) t += 50, n = e.next(t);
	return t >= 2e4 ? Infinity : t;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs
function Gr(e, t = 100, n) {
	let r = n({
		...e,
		keyframes: [0, t]
	}), i = Math.min(Wr(r), Ur);
	return {
		type: "keyframes",
		ease: (e) => r.next(i * e).value / t,
		duration: /* @__PURE__ */ G(i)
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/generators/utils/velocity.mjs
var Kr = 5;
function qr(e, t, n) {
	let r = Math.max(t - Kr, 0);
	return On(n - e(r), t - r);
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
}, Jr = .001;
function Yr({ duration: e = J.duration, bounce: t = J.bounce, velocity: n = J.velocity, mass: r = J.mass }) {
	let i, a;
	_t(e <= /* @__PURE__ */ W(J.maxDuration), "Spring duration must be 10 seconds or less");
	let o = 1 - t;
	o = z(J.minDamping, J.maxDamping, o), e = z(J.minDuration, J.maxDuration, /* @__PURE__ */ G(e)), o < 1 ? (i = (t) => {
		let r = t * o, i = r * e, a = r - n, s = Qr(t, o), c = Math.exp(-i);
		return Jr - a / s * c;
	}, a = (t) => {
		let r = t * o * e, a = r * n + n, s = o ** 2 * t ** 2 * e, c = Math.exp(-r), l = Qr(t ** 2, o);
		return (-i(t) + Jr > 0 ? -1 : 1) * ((a - s) * c) / l;
	}) : (i = (t) => -.001 + Math.exp(-t * e) * ((t - n) * e + 1), a = (t) => Math.exp(-t * e) * ((n - t) * (e * e)));
	let s = 5 / e, c = Zr(i, a, s);
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
var Xr = 12;
function Zr(e, t, n) {
	let r = n;
	for (let n = 1; n < Xr; n++) r -= e(r) / t(r);
	return r;
}
function Qr(e, t) {
	return e * Math.sqrt(1 - t * t);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/generators/spring/index.mjs
var $r = ["duration", "bounce"], ei = [
	"stiffness",
	"damping",
	"mass"
];
function ti(e, t) {
	return t.some((t) => e[t] !== void 0);
}
function ni(e) {
	let t = {
		velocity: J.velocity,
		stiffness: J.stiffness,
		damping: J.damping,
		mass: J.mass,
		isResolvedFromDuration: !1,
		...e
	};
	if (!ti(e, ei) && ti(e, $r)) {
		if (e.visualDuration) {
			let n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), i = r * r, a = 2 * z(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
			t = {
				...t,
				mass: J.mass,
				stiffness: i,
				damping: a
			};
		} else {
			let n = Yr(e);
			t = {
				...t,
				...n,
				mass: J.mass
			}, t.isResolvedFromDuration = !0;
		}
	}
	return t;
}
function ri(e = J.visualDuration, t = J.bounce) {
	let n = typeof e == "object" ? e : {
		visualDuration: e,
		keyframes: [0, 1],
		bounce: t
	}, { restSpeed: r, restDelta: i } = n, a = n.keyframes[0], o = n.keyframes[n.keyframes.length - 1], s = {
		done: !1,
		value: a
	}, { stiffness: c, damping: l, mass: u, duration: d, velocity: f, isResolvedFromDuration: p } = ni({
		...n,
		velocity: -/* @__PURE__ */ G(n.velocity || 0)
	}), m = f || 0, h = l / (2 * Math.sqrt(c * u)), g = o - a, _ = /* @__PURE__ */ G(Math.sqrt(c / u)), v = Math.abs(g) < 5;
	r ||= v ? J.restSpeed.granular : J.restSpeed.default, i ||= v ? J.restDelta.granular : J.restDelta.default;
	let y;
	if (h < 1) {
		let e = Qr(_, h);
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
				h < 1 && (n = e === 0 ? /* @__PURE__ */ W(m) : qr(y, e, t));
				let a = Math.abs(n) <= r, c = Math.abs(o - t) <= i;
				s.done = a && c;
			}
			return s.value = s.done ? o : t, s;
		},
		toString: () => {
			let e = Math.min(Wr(b), Ur), t = Hr((t) => b.next(e * t).value, e, 30);
			return e + "ms " + t;
		},
		toTransition: () => {}
	};
	return b;
}
ri.applyToOptions = (e) => {
	let t = Gr(e, 100, ri);
	return e.ease = t.ease, e.duration = /* @__PURE__ */ W(t.duration), e.type = "keyframes", e;
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/generators/inertia.mjs
function ii({ keyframes: e, velocity: t = 0, power: n = .8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: a = 500, modifyTarget: o, min: s, max: c, restDelta: l = .5, restSpeed: u }) {
	let d = e[0], f = {
		done: !1,
		value: d
	}, p = (e) => s !== void 0 && e < s || c !== void 0 && e > c, m = (e) => s === void 0 ? c : c === void 0 || Math.abs(s - e) < Math.abs(c - e) ? s : c, h = n * t, g = d + h, _ = o === void 0 ? g : o(g);
	_ !== g && (h = _ - d);
	let v = (e) => -h * Math.exp(-e / r), y = (e) => _ + v(e), b = (e) => {
		let t = v(e), n = y(e);
		f.done = Math.abs(t) <= l, f.value = f.done ? _ : n;
	}, x, S, C = (e) => {
		p(f.value) && (x = e, S = ri({
			keyframes: [f.value, m(f.value)],
			velocity: qr(y, e, f.value),
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
var ai = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
	let r = t - e;
	return r === 0 ? 1 : (n - e) / r;
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/utils/interpolate.mjs
function oi(e, t, n) {
	let r = [], i = n || N.mix || Br, a = e.length - 1;
	for (let n = 0; n < a; n++) {
		let a = i(e[n], e[n + 1]);
		t && (a = Nr(Array.isArray(t) ? t[n] || P : t, a)), r.push(a);
	}
	return r;
}
function si(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
	let a = e.length;
	if (R(a === t.length, "Both input and output ranges must be the same length"), a === 1) return () => t[0];
	if (a === 2 && t[0] === t[1]) return () => t[1];
	let o = e[0] === e[1];
	e[0] > e[a - 1] && (e = [...e].reverse(), t = [...t].reverse());
	let s = oi(t, r, i), c = s.length, l = (n) => {
		if (o && n < e[0]) return t[0];
		let r = 0;
		if (c > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
		let i = /* @__PURE__ */ ai(e[r], e[r + 1], n);
		return s[r](i);
	};
	return n ? (t) => l(z(e[0], e[a - 1], t)) : l;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs
function ci(e, t) {
	let n = e[e.length - 1];
	for (let r = 1; r <= t; r++) {
		let i = /* @__PURE__ */ ai(0, t, r);
		e.push(q(n, 1, i));
	}
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/keyframes/offsets/default.mjs
function li(e) {
	let t = [0];
	return ci(t, e.length - 1), t;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/keyframes/offsets/time.mjs
function ui(e, t) {
	return e.map((e) => e * t);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/easing/cubic-bezier.mjs
var di = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, fi = 1e-7, pi = 12;
function mi(e, t, n, r, i) {
	let a, o, s = 0;
	do
		o = t + (n - t) / 2, a = di(o, r, i) - e, a > 0 ? n = o : t = o;
	while (Math.abs(a) > fi && ++s < pi);
	return o;
}
function hi(e, t, n, r) {
	if (e === t && n === r) return P;
	let i = (t) => mi(t, 0, 1, e, n);
	return (e) => e === 0 || e === 1 ? e : di(i(e), t, r);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/easing/ease.mjs
var gi = /*@__PURE__*/ hi(.42, 0, 1, 1), _i = /*@__PURE__*/ hi(0, 0, .58, 1), vi = /*@__PURE__*/ hi(.42, 0, .58, 1), yi = (e) => Array.isArray(e) && typeof e[0] != "number", bi = (e) => (t) => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, xi = (e) => (t) => 1 - e(1 - t), Si = /*@__PURE__*/ hi(.33, 1.53, .69, .99), Ci = /*@__PURE__*/ xi(Si), wi = /*@__PURE__*/ bi(Ci), Ti = (e) => (e *= 2) < 1 ? .5 * Ci(e) : .5 * (2 - 2 ** (-10 * (e - 1))), Ei = (e) => 1 - Math.sin(Math.acos(e)), Di = xi(Ei), Oi = bi(Ei), ki = (e) => Array.isArray(e) && typeof e[0] == "number", Ai = {
	linear: P,
	easeIn: gi,
	easeInOut: vi,
	easeOut: _i,
	circIn: Ei,
	circInOut: Oi,
	circOut: Di,
	backIn: Ci,
	backInOut: wi,
	backOut: Si,
	anticipate: Ti
}, ji = (e) => typeof e == "string", Mi = (e) => {
	if (ki(e)) {
		R(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
		let [t, n, r, i] = e;
		return hi(t, n, r, i);
	}
	return ji(e) ? (R(Ai[e] !== void 0, `Invalid easing type '${e}'`), Ai[e]) : e;
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/generators/keyframes.mjs
function Ni(e, t) {
	return e.map(() => t || vi).splice(0, e.length - 1);
}
function Pi({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
	let i = yi(r) ? r.map(Mi) : Mi(r), a = {
		done: !1,
		value: t[0]
	}, o = si(ui(n && n.length === t.length ? n : li(t), e), t, { ease: Array.isArray(i) ? i : Ni(t, i) });
	return {
		calculatedDuration: e,
		next: (t) => (a.value = o(t), a.done = t >= e, a)
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/keyframes/get-final.mjs
var Fi = (e) => e !== null;
function Ii(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
	let a = e.filter(Fi), o = i < 0 || t && n !== "loop" && t % 2 == 1 ? 0 : a.length - 1;
	return !o || r === void 0 ? a[o] : r;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/utils/replace-transition-type.mjs
var Li = {
	decay: ii,
	inertia: ii,
	tween: Pi,
	keyframes: Pi,
	spring: ri
};
function Ri(e) {
	typeof e.type == "string" && (e.type = Li[e.type]);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/utils/WithPromise.mjs
var zi = class {
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
}, Bi = (e) => e / 100, Vi = class extends zi {
	constructor(e) {
		super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
			let { motionValue: e } = this.options;
			e && e.updatedAt !== U.now() && this.tick(U.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
		}, Yn.mainThread++, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause();
	}
	initAnimation() {
		let { options: e } = this;
		Ri(e);
		let { type: t = Pi, repeat: n = 0, repeatDelay: r = 0, repeatType: i, velocity: a = 0 } = e, { keyframes: o } = e, s = t || Pi;
		process.env.NODE_ENV !== "production" && s !== Pi && R(o.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${o}`), s !== Pi && typeof o[0] != "number" && (this.mixKeyframes = Nr(Bi, Br(o[0], o[1])), o = [0, 100]);
		let c = s({
			...e,
			keyframes: o
		});
		i === "mirror" && (this.mirroredGenerator = s({
			...e,
			keyframes: [...o].reverse(),
			velocity: -a
		})), c.calculatedDuration === null && (c.calculatedDuration = Wr(c));
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
		return S && p !== ii && (b.value = Ii(l, this.options, h, this.speed)), m && m(b.value), S && this.finish(), b;
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
		let { driver: e = Vr, startTime: t } = this.options;
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
		this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null, Yn.mainThread--;
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
function Hi(e) {
	for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/render/dom/parse-transform.mjs
var Ui = (e) => e * 180 / Math.PI, Wi = (e) => Ki(Ui(Math.atan2(e[1], e[0]))), Gi = {
	x: 4,
	y: 5,
	translateX: 4,
	translateY: 5,
	scaleX: 0,
	scaleY: 3,
	scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
	rotate: Wi,
	rotateZ: Wi,
	skewX: (e) => Ui(Math.atan(e[1])),
	skewY: (e) => Ui(Math.atan(e[2])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, Ki = (e) => (e %= 360, e < 0 && (e += 360), e), qi = Wi, Ji = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), Yi = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), Xi = {
	x: 12,
	y: 13,
	z: 14,
	translateX: 12,
	translateY: 13,
	translateZ: 14,
	scaleX: Ji,
	scaleY: Yi,
	scale: (e) => (Ji(e) + Yi(e)) / 2,
	rotateX: (e) => Ki(Ui(Math.atan2(e[6], e[5]))),
	rotateY: (e) => Ki(Ui(Math.atan2(-e[2], e[0]))),
	rotateZ: qi,
	rotate: qi,
	skewX: (e) => Ui(Math.atan(e[4])),
	skewY: (e) => Ui(Math.atan(e[1])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function Zi(e) {
	return +!!e.includes("scale");
}
function Qi(e, t) {
	if (!e || e === "none") return Zi(t);
	let n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u), r, i;
	if (n) r = Xi, i = n;
	else {
		let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
		r = Gi, i = t;
	}
	if (!i) return Zi(t);
	let a = r[t], o = i[1].split(",").map(ea);
	return typeof a == "function" ? a(o) : o[a];
}
var $i = (e, t) => {
	let { transform: n = "none" } = getComputedStyle(e);
	return Qi(n, t);
};
function ea(e) {
	return parseFloat(e.trim());
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/keyframes/utils/unit-conversion.mjs
var ta = (e) => e === Nt || e === V, na = /* @__PURE__ */ new Set([
	"x",
	"y",
	"z"
]), ra = kt.filter((e) => !na.has(e));
function ia(e) {
	let t = [];
	return ra.forEach((n) => {
		let r = e.getValue(n);
		r !== void 0 && (t.push([n, r.get()]), r.set(+!!n.startsWith("scale")));
	}), t;
}
var aa = {
	width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
	height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
	top: (e, { top: t }) => parseFloat(t),
	left: (e, { left: t }) => parseFloat(t),
	bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
	right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
	x: (e, { transform: t }) => Qi(t, "x"),
	y: (e, { transform: t }) => Qi(t, "y")
};
aa.translateX = aa.x, aa.translateY = aa.y;
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/keyframes/KeyframesResolver.mjs
var oa = /* @__PURE__ */ new Set(), sa = !1, ca = !1, la = !1;
function ua() {
	if (ca) {
		let e = Array.from(oa).filter((e) => e.needsMeasurement), t = new Set(e.map((e) => e.element)), n = /* @__PURE__ */ new Map();
		t.forEach((e) => {
			let t = ia(e);
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
	ca = !1, sa = !1, oa.forEach((e) => e.complete(la)), oa.clear();
}
function da() {
	oa.forEach((e) => {
		e.readKeyframes(), e.needsMeasurement && (ca = !0);
	});
}
function fa() {
	la = !0, da(), ua(), la = !1;
}
var pa = class {
	constructor(e, t, n, r, i, a = !1) {
		this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = n, this.motionValue = r, this.element = i, this.isAsync = a;
	}
	scheduleResolve() {
		this.state = "scheduled", this.isAsync ? (oa.add(this), sa || (sa = !0, F.read(da), F.resolveKeyframes(ua))) : (this.readKeyframes(), this.complete());
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
		Hi(e);
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete(e = !1) {
		this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), oa.delete(this);
	}
	cancel() {
		this.state === "scheduled" && (oa.delete(this), this.state = "pending");
	}
	resume() {
		this.state === "pending" && this.scheduleResolve();
	}
}, ma = (e) => e.startsWith("--");
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/render/dom/style-set.mjs
function ha(e, t, n) {
	ma(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/memo.mjs
/*#__NO_SIDE_EFFECTS__*/
function ga(e) {
	let t;
	return () => (t === void 0 && (t = e()), t);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
var _a = /* @__PURE__ */ ga(() => window.ScrollTimeline !== void 0), va = {};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/utils/supports/memo.mjs
function ya(e, t) {
	let n = /* @__PURE__ */ ga(e);
	return () => va[t] ?? n();
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/utils/supports/linear-easing.mjs
var ba = /*@__PURE__*/ ya(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
}, "linearEasing"), xa = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Sa = {
	linear: "linear",
	ease: "ease",
	easeIn: "ease-in",
	easeOut: "ease-out",
	easeInOut: "ease-in-out",
	circIn: /*@__PURE__*/ xa([
		0,
		.65,
		.55,
		1
	]),
	circOut: /*@__PURE__*/ xa([
		.55,
		0,
		1,
		.45
	]),
	backIn: /*@__PURE__*/ xa([
		.31,
		.01,
		.66,
		-.59
	]),
	backOut: /*@__PURE__*/ xa([
		.33,
		1.53,
		.69,
		.99
	])
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs
function Ca(e, t) {
	if (e) return typeof e == "function" ? ba() ? Hr(e, t) : "ease-out" : ki(e) ? xa(e) : Array.isArray(e) ? e.map((e) => Ca(e, t) || Sa.easeOut) : Sa[e];
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs
function wa(e, t, n, { delay: r = 0, duration: i = 300, repeat: a = 0, repeatType: o = "loop", ease: s = "easeOut", times: c } = {}, l = void 0) {
	let u = { [t]: n };
	c && (u.offset = c);
	let d = Ca(s, i);
	Array.isArray(d) && (u.easing = d), M.value && Yn.waapi++;
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
		Yn.waapi--;
	}), p;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/generators/utils/is-generator.mjs
function Ta(e) {
	return typeof e == "function" && "applyToOptions" in e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs
function Ea({ type: e, ...t }) {
	return Ta(e) && ba() ? e.applyToOptions(t) : (t.duration ??= 300, t.ease ??= "easeOut", t);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/NativeAnimation.mjs
var Da = class extends zi {
	constructor(e) {
		if (super(), this.finishedTime = null, this.isStopped = !1, !e) return;
		let { element: t, name: n, keyframes: r, pseudoElement: i, allowFlatten: a = !1, finalKeyframe: o, onComplete: s } = e;
		this.isPseudoElement = !!i, this.allowFlatten = a, this.options = e, R(typeof e.type != "string", "animateMini doesn't support \"type\" as a string. Did you mean to import { spring } from \"motion\"?");
		let c = Ea(e);
		this.animation = wa(t, n, r, c, i), c.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
			if (this.finishedTime = this.time, !i) {
				let e = Ii(r, this.options, o, this.speed);
				this.updateMotionValue ? this.updateMotionValue(e) : ha(t, n, e), this.animation.cancel();
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
		return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, e && _a() ? (this.animation.timeline = e, P) : t(this);
	}
}, Oa = {
	anticipate: Ti,
	backInOut: wi,
	circInOut: Oi
};
function ka(e) {
	return e in Oa;
}
function Aa(e) {
	typeof e.ease == "string" && ka(e.ease) && (e.ease = Oa[e.ease]);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/NativeAnimationExtended.mjs
var ja = 10, Ma = class extends Da {
	constructor(e) {
		Aa(e), Ri(e), super(e), e.startTime && (this.startTime = e.startTime), this.options = e;
	}
	updateMotionValue(e) {
		let { motionValue: t, onUpdate: n, onComplete: r, element: i, ...a } = this.options;
		if (!t) return;
		if (e !== void 0) {
			t.set(e);
			return;
		}
		let o = new Vi({
			...a,
			autoplay: !1
		}), s = /* @__PURE__ */ W(this.finishedTime ?? this.time);
		t.setWithVelocity(o.sample(s - ja).value, o.sample(s).value, ja), o.stop();
	}
}, Na = (e, t) => t !== "zIndex" && !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (xr.test(e) || e === "0") && !e.startsWith("url("));
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/utils/can-animate.mjs
function Pa(e) {
	let t = e[0];
	if (e.length === 1) return !0;
	for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Fa(e, t, n, r) {
	let i = e[0];
	if (i === null) return !1;
	if (t === "display" || t === "visibility") return !0;
	let a = e[e.length - 1], o = Na(i, t), s = Na(a, t);
	return _t(o === s, `You are trying to animate ${t} from "${i}" to "${a}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${a} via the \`style\` property.`), !o || !s ? !1 : Pa(e) || (n === "spring" || Ta(n)) && r;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/waapi/supports/waapi.mjs
var Ia = /* @__PURE__ */ new Set([
	"opacity",
	"clipPath",
	"filter",
	"transform"
]), La = /*@__PURE__*/ ga(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Ra(e) {
	let { motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: a, type: o } = e;
	if (!ge(t?.owner?.current)) return !1;
	let { onUpdate: s, transformTemplate: c } = t.owner.getProps();
	return La() && n && Ia.has(n) && (n !== "transform" || !c) && !s && !r && i !== "mirror" && a !== 0 && o !== "inertia";
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs
var za = 40, Ba = class extends zi {
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
		}, f = l?.KeyframeResolver || pa;
		this.keyframeResolver = new f(o, (e, t, n) => this.onKeyframesResolved(e, t, d, !n), s, c, l), this.keyframeResolver?.scheduleResolve();
	}
	onKeyframesResolved(e, t, n, r) {
		this.keyframeResolver = void 0;
		let { name: i, type: a, velocity: o, delay: s, isHandoff: c, onUpdate: l } = n;
		this.resolvedAt = U.now(), Fa(e, i, a, o) || ((N.instantAnimations || !s) && l?.(Ii(e, n, t)), e[0] = e[e.length - 1], n.duration = 0, n.repeat = 0);
		let u = {
			startTime: r ? this.resolvedAt && this.resolvedAt - this.createdAt > za ? this.resolvedAt : this.createdAt : void 0,
			finalKeyframe: t,
			...n,
			keyframes: e
		}, d = !c && Ra(u) ? new Ma({
			...u,
			element: u.motionValue.owner.current
		}) : new Vi(u);
		d.finished.then(() => this.notifyFinished()).catch(P), this.pendingTimeline &&= (this.stopTimeline = d.attachTimeline(this.pendingTimeline), void 0), this._animation = d;
	}
	get finished() {
		return this._animation ? this.animation.finished : this._finished;
	}
	then(e, t) {
		return this.finished.finally(e).then(() => {});
	}
	get animation() {
		return this._animation || (this.keyframeResolver?.resume(), fa()), this._animation;
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
}, Va = (e, t, n, r = {}, i, a) => (o) => {
	let s = Jn(r, e) || {}, c = s.delay || r.delay || 0, { elapsed: l = 0 } = r;
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
	qn(s) || Object.assign(u, Kn(e, u)), u.duration &&= /* @__PURE__ */ W(u.duration), u.repeatDelay &&= /* @__PURE__ */ W(u.repeatDelay), u.from !== void 0 && (u.keyframes[0] = u.from);
	let d = !1;
	if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (u.duration = 0, u.delay === 0 && (d = !0)), (N.instantAnimations || N.skipAnimations) && (d = !0, u.duration = 0, u.delay = 0), u.allowFlatten = !s.type && !s.ease, d && !a && t.get() !== void 0) {
		let e = Vn(u.keyframes, s);
		if (e !== void 0) {
			F.update(() => {
				u.onUpdate(e), u.onComplete();
			});
			return;
		}
	}
	return s.isSync ? new Vi(u) : new Ba(u);
}, Ha = /* @__PURE__ */ new Set([
	"width",
	"height",
	"top",
	"left",
	"right",
	"bottom",
	...kt
]);
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/interfaces/visual-element-target.mjs
function Ua({ protectedKeys: e, needsAnimating: t }, n) {
	let r = e.hasOwnProperty(n) && t[n] !== !0;
	return t[n] = !1, r;
}
function Wa(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
	let { transition: a = e.getDefaultTransition(), transitionEnd: o, ...s } = t;
	r && (a = r);
	let c = [], l = i && e.animationState && e.animationState.getState()[i];
	for (let t in s) {
		let r = e.getValue(t, e.latestValues[t] ?? null), i = s[t];
		if (i === void 0 || l && Ua(l, t)) continue;
		let o = {
			delay: n,
			...Jn(a || {}, t)
		}, u = r.get();
		if (u !== void 0 && !r.isAnimating && !Array.isArray(i) && i === u && !o.velocity) continue;
		let d = !1;
		if (window.MotionHandoffAnimation) {
			let n = zn(e);
			if (n) {
				let e = window.MotionHandoffAnimation(n, t, F);
				e !== null && (o.startTime = e, d = !0);
			}
		}
		Rn(e, t), r.start(Va(t, r, i, e.shouldReduceMotion && Ha.has(t) ? { type: !1 } : o, e, d));
		let f = r.animation;
		f && c.push(f);
	}
	return o && Promise.all(c).then(() => {
		F.update(() => {
			o && In(e, o);
		});
	}), c;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/interfaces/visual-element-variant.mjs
function Ga(e, t, n = {}) {
	let r = bn(e, t, n.type === "exit" ? e.presenceContext?.custom : void 0), { transition: i = e.getDefaultTransition() || {} } = r || {};
	n.transitionOverride && (i = n.transitionOverride);
	let a = r ? () => Promise.all(Wa(e, r, n)) : () => Promise.resolve(), o = e.variantChildren && e.variantChildren.size ? (r = 0) => {
		let { delayChildren: a = 0, staggerChildren: o, staggerDirection: s } = i;
		return Ka(e, t, a + r, o, s, n);
	} : () => Promise.resolve(), { when: s } = i;
	if (s) {
		let [e, t] = s === "beforeChildren" ? [a, o] : [o, a];
		return e().then(() => t());
	}
	return Promise.all([a(), o(n.delay)]);
}
function Ka(e, t, n = 0, r = 0, i = 1, a) {
	let o = [], s = (e.variantChildren.size - 1) * r, c = i === 1 ? (e = 0) => e * r : (e = 0) => s - e * r;
	return Array.from(e.variantChildren).sort(qa).forEach((e, r) => {
		e.notify("AnimationStart", t), o.push(Ga(e, t, {
			...a,
			delay: n + c(r)
		}).then(() => e.notify("AnimationComplete", t)));
	}), Promise.all(o);
}
function qa(e, t) {
	return e.sortNodePosition(t);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/interfaces/visual-element.mjs
function Ja(e, t, n = {}) {
	e.notify("AnimationStart", t);
	let r;
	if (Array.isArray(t)) {
		let i = t.map((t) => Ga(e, t, n));
		r = Promise.all(i);
	} else if (typeof t == "string") r = Ga(e, t, n);
	else {
		let i = typeof t == "function" ? bn(e, t, n.custom) : t;
		r = Promise.all(Wa(e, i, n));
	}
	return r.then(() => {
		e.notify("AnimationComplete", t);
	});
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/utils/shallow-compare.mjs
function Ya(e, t) {
	if (!Array.isArray(t)) return !1;
	let n = t.length;
	if (n !== e.length) return !1;
	for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
	return !0;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/utils/get-variant-context.mjs
var Xa = et.length;
function Za(e) {
	if (!e) return;
	if (!e.isControllingVariants) {
		let t = e.parent && Za(e.parent) || {};
		return e.props.initial !== void 0 && (t.initial = e.props.initial), t;
	}
	let t = {};
	for (let n = 0; n < Xa; n++) {
		let r = et[n], i = e.props[r];
		(Qe(i) || i === !1) && (t[r] = i);
	}
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/utils/animation-state.mjs
var Qa = [...$e].reverse(), $a = $e.length;
function eo(e) {
	return (t) => Promise.all(t.map(({ animation: t, options: n }) => Ja(e, t, n)));
}
function to(e) {
	let t = eo(e), n = io(), r = !0, i = (t) => (n, r) => {
		let i = bn(e, r, t === "exit" ? e.presenceContext?.custom : void 0);
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
		let { props: o } = e, s = Za(e.parent) || {}, c = [], l = /* @__PURE__ */ new Set(), u = {}, d = Infinity;
		for (let t = 0; t < $a; t++) {
			let f = Qa[t], p = n[f], m = o[f] === void 0 ? s[f] : o[f], h = Qe(m), g = f === a ? p.isActive : null;
			g === !1 && (d = t);
			let _ = m === s[f] && m !== o[f] && h;
			if (_ && r && e.manuallyAnimateOnMount && (_ = !1), p.protectedKeys = { ...u }, !p.isActive && g === null || !m && !p.prevProp || Ze(m) || typeof m == "boolean") continue;
			let v = no(p.prevProp, m), y = v || f === a && p.isActive && !_ && h || t > d && h, b = !1, x = Array.isArray(m) ? m : [m], S = x.reduce(i(f), {});
			g === !1 && (S = {});
			let { prevResolvedValues: C = {} } = p, ee = {
				...C,
				...S
			}, te = (t) => {
				y = !0, l.has(t) && (b = !0, l.delete(t)), p.needsAnimating[t] = !0;
				let n = e.getValue(t);
				n && (n.liveStyle = !1);
			};
			for (let e in ee) {
				let t = S[e], n = C[e];
				if (u.hasOwnProperty(e)) continue;
				let r = !1;
				r = xn(t) && xn(n) ? !Ya(t, n) : t !== n, r ? t == null ? l.add(e) : te(e) : t !== void 0 && l.has(e) ? te(e) : p.protectedKeys[e] = !0;
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
				let n = bn(e, Array.isArray(o.initial) ? o.initial[0] : o.initial);
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
			n = io(), r = !0;
		}
	};
}
function no(e, t) {
	return typeof t == "string" ? t !== e : Array.isArray(t) ? !Ya(t, e) : !1;
}
function ro(e = !1) {
	return {
		isActive: e,
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {}
	};
}
function io() {
	return {
		animate: ro(!0),
		whileInView: ro(),
		whileHover: ro(),
		whileTap: ro(),
		whileDrag: ro(),
		whileFocus: ro(),
		exit: ro()
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/motion/features/Feature.mjs
var ao = class {
	constructor(e) {
		this.isMounted = !1, this.node = e;
	}
	update() {}
}, oo = class extends ao {
	constructor(e) {
		super(e), e.animationState ||= to(e);
	}
	updateAnimationControlsSubscription() {
		let { animate: e } = this.node.getProps();
		Ze(e) && (this.unmountControls = e.subscribe(this.node));
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
}, so = 0, co = {
	animation: { Feature: oo },
	exit: { Feature: class extends ao {
		constructor() {
			super(...arguments), this.id = so++;
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
function lo(e, t, n, r = { passive: !0 }) {
	return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/gestures/utils/is-primary-pointer.mjs
var uo = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/events/event-info.mjs
function fo(e) {
	return { point: {
		x: e.pageX,
		y: e.pageY
	} };
}
var po = (e) => (t) => uo(t) && e(t, fo(t));
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/events/add-pointer-event.mjs
function mo(e, t, n, r) {
	return lo(e, t, po(n), r);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/conversion.mjs
function ho({ top: e, left: t, right: n, bottom: r }) {
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
function go({ x: e, y: t }) {
	return {
		top: t.min,
		right: e.max,
		bottom: t.max,
		left: e.min
	};
}
function _o(e, t) {
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
var vo = .9999, yo = 1.0001, bo = -.01, xo = .01;
function Y(e) {
	return e.max - e.min;
}
function So(e, t, n) {
	return Math.abs(e - t) <= n;
}
function Co(e, t, n, r = .5) {
	e.origin = r, e.originPoint = q(t.min, t.max, e.origin), e.scale = Y(n) / Y(t), e.translate = q(n.min, n.max, e.origin) - e.originPoint, (e.scale >= vo && e.scale <= yo || isNaN(e.scale)) && (e.scale = 1), (e.translate >= bo && e.translate <= xo || isNaN(e.translate)) && (e.translate = 0);
}
function wo(e, t, n, r) {
	Co(e.x, t.x, n.x, r ? r.originX : void 0), Co(e.y, t.y, n.y, r ? r.originY : void 0);
}
function To(e, t, n) {
	e.min = n.min + t.min, e.max = e.min + Y(t);
}
function Eo(e, t, n) {
	To(e.x, t.x, n.x), To(e.y, t.y, n.y);
}
function Do(e, t, n) {
	e.min = t.min - n.min, e.max = e.min + Y(t);
}
function Oo(e, t, n) {
	Do(e.x, t.x, n.x), Do(e.y, t.y, n.y);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/models.mjs
var ko = () => ({
	translate: 0,
	scale: 1,
	origin: 0,
	originPoint: 0
}), Ao = () => ({
	x: ko(),
	y: ko()
}), jo = () => ({
	min: 0,
	max: 0
}), X = () => ({
	x: jo(),
	y: jo()
});
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/utils/each-axis.mjs
function Z(e) {
	return [e("x"), e("y")];
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/utils/has-transform.mjs
function Mo(e) {
	return e === void 0 || e === 1;
}
function No({ scale: e, scaleX: t, scaleY: n }) {
	return !Mo(e) || !Mo(t) || !Mo(n);
}
function Po(e) {
	return No(e) || Fo(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Fo(e) {
	return Io(e.x) || Io(e.y);
}
function Io(e) {
	return e && e !== "0%";
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/delta-apply.mjs
function Lo(e, t, n) {
	return n + t * (e - n);
}
function Ro(e, t, n, r, i) {
	return i !== void 0 && (e = Lo(e, i, r)), Lo(e, n, r) + t;
}
function zo(e, t = 0, n = 1, r, i) {
	e.min = Ro(e.min, t, n, r, i), e.max = Ro(e.max, t, n, r, i);
}
function Bo(e, { x: t, y: n }) {
	zo(e.x, t.translate, t.scale, t.originPoint), zo(e.y, n.translate, n.scale, n.originPoint);
}
var Vo = .999999999999, Ho = 1.0000000000001;
function Uo(e, t, n, r = !1) {
	let i = n.length;
	if (!i) return;
	t.x = t.y = 1;
	let a, o;
	for (let s = 0; s < i; s++) {
		a = n[s], o = a.projectionDelta;
		let { visualElement: i } = a.options;
		i && i.props.style && i.props.style.display === "contents" || (r && a.options.layoutScroll && a.scroll && a !== a.root && Ko(e, {
			x: -a.scroll.offset.x,
			y: -a.scroll.offset.y
		}), o && (t.x *= o.x.scale, t.y *= o.y.scale, Bo(e, o)), r && Po(a.latestValues) && Ko(e, a.latestValues));
	}
	t.x < Ho && t.x > Vo && (t.x = 1), t.y < Ho && t.y > Vo && (t.y = 1);
}
function Wo(e, t) {
	e.min += t, e.max += t;
}
function Go(e, t, n, r, i = .5) {
	zo(e, t, n, q(e.min, e.max, i), r);
}
function Ko(e, t) {
	Go(e.x, t.x, t.scaleX, t.scale, t.originX), Go(e.y, t.y, t.scaleY, t.scale, t.originY);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/utils/measure.mjs
function qo(e, t) {
	return ho(_o(e.getBoundingClientRect(), t));
}
function Jo(e, t, n) {
	let r = qo(e, n), { scroll: i } = t;
	return i && (Wo(r.x, i.offset.x), Wo(r.y, i.offset.y)), r;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/utils/get-context-window.mjs
var Yo = ({ current: e }) => e ? e.ownerDocument.defaultView : null, Xo = (e, t) => Math.abs(e - t);
function Zo(e, t) {
	let n = Xo(e.x, t.x), r = Xo(e.y, t.y);
	return Math.sqrt(n ** 2 + r ** 2);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/gestures/pan/PanSession.mjs
var Qo = class {
	constructor(e, t, { transformPagePoint: n, contextWindow: r, dragSnapToOrigin: i = !1 } = {}) {
		if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
			if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			let e = ts(this.lastMoveEventInfo, this.history), t = this.startEvent !== null, n = Zo(e.offset, {
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
			this.lastMoveEvent = e, this.lastMoveEventInfo = $o(t, this.transformPagePoint), F.update(this.updatePoint, !0);
		}, this.handlePointerUp = (e, t) => {
			this.end();
			let { onEnd: n, onSessionEnd: r, resumeAnimation: i } = this.handlers;
			if (this.dragSnapToOrigin && i && i(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			let a = ts(e.type === "pointercancel" ? this.lastMoveEventInfo : $o(t, this.transformPagePoint), this.history);
			this.startEvent && n && n(e, a), r && r(e, a);
		}, !uo(e)) return;
		this.dragSnapToOrigin = i, this.handlers = t, this.transformPagePoint = n, this.contextWindow = r || window;
		let a = $o(fo(e), this.transformPagePoint), { point: o } = a, { timestamp: s } = L;
		this.history = [{
			...o,
			timestamp: s
		}];
		let { onSessionStart: c } = t;
		c && c(e, ts(a, this.history)), this.removeListeners = Nr(mo(this.contextWindow, "pointermove", this.handlePointerMove), mo(this.contextWindow, "pointerup", this.handlePointerUp), mo(this.contextWindow, "pointercancel", this.handlePointerUp));
	}
	updateHandlers(e) {
		this.handlers = e;
	}
	end() {
		this.removeListeners && this.removeListeners(), I(this.updatePoint);
	}
};
function $o(e, t) {
	return t ? { point: t(e.point) } : e;
}
function es(e, t) {
	return {
		x: e.x - t.x,
		y: e.y - t.y
	};
}
function ts({ point: e }, t) {
	return {
		point: e,
		delta: es(e, rs(t)),
		offset: es(e, ns(t)),
		velocity: is(t, .1)
	};
}
function ns(e) {
	return e[0];
}
function rs(e) {
	return e[e.length - 1];
}
function is(e, t) {
	if (e.length < 2) return {
		x: 0,
		y: 0
	};
	let n = e.length - 1, r = null, i = rs(e);
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
function as(e, { min: t, max: n }, r) {
	return t !== void 0 && e < t ? e = r ? q(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? q(n, e, r.max) : Math.min(e, n)), e;
}
function os(e, t, n) {
	return {
		min: t === void 0 ? void 0 : e.min + t,
		max: n === void 0 ? void 0 : e.max + n - (e.max - e.min)
	};
}
function ss(e, { top: t, left: n, bottom: r, right: i }) {
	return {
		x: os(e.x, n, i),
		y: os(e.y, t, r)
	};
}
function cs(e, t) {
	let n = t.min - e.min, r = t.max - e.max;
	return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
		min: n,
		max: r
	};
}
function ls(e, t) {
	return {
		x: cs(e.x, t.x),
		y: cs(e.y, t.y)
	};
}
function us(e, t) {
	let n = .5, r = Y(e), i = Y(t);
	return i > r ? n = /* @__PURE__ */ ai(t.min, t.max - r, e.min) : r > i && (n = /* @__PURE__ */ ai(e.min, e.max - i, t.min)), z(0, 1, n);
}
function ds(e, t) {
	let n = {};
	return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
var fs = .35;
function ps(e = fs) {
	return e === !1 ? e = 0 : e === !0 && (e = fs), {
		x: ms(e, "left", "right"),
		y: ms(e, "top", "bottom")
	};
}
function ms(e, t, n) {
	return {
		min: hs(e, t),
		max: hs(e, n)
	};
}
function hs(e, t) {
	return typeof e == "number" ? e : e[t] || 0;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/gestures/drag/state/is-active.mjs
var Q = {
	x: !1,
	y: !1
};
function gs() {
	return Q.x || Q.y;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/gestures/drag/state/set-active.mjs
function _s(e) {
	return e === "x" || e === "y" ? Q[e] ? null : (Q[e] = !0, () => {
		Q[e] = !1;
	}) : Q.x || Q.y ? null : (Q.x = Q.y = !0, () => {
		Q.x = Q.y = !1;
	});
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
var vs = /* @__PURE__ */ new WeakMap(), ys = class {
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
			n ? this.pauseAnimation() : this.stopAnimation(), t && this.snapToCursor(fo(e).point);
		}, i = (e, t) => {
			let { drag: n, dragPropagation: r, onDragStart: i } = this.getProps();
			if (n && !r && (this.openDragLock && this.openDragLock(), this.openDragLock = _s(n), !this.openDragLock)) return;
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
			}), i && F.postRender(() => i(e, t)), Rn(this.visualElement, "transform");
			let { animationState: a } = this.visualElement;
			a && a.setActive("whileDrag", !0);
		}, a = (e, t) => {
			let { dragPropagation: n, dragDirectionLock: r, onDirectionLock: i, onDrag: a } = this.getProps();
			if (!n && !this.openDragLock) return;
			let { offset: o } = t;
			if (r && this.currentDirection === null) {
				this.currentDirection = xs(o), this.currentDirection !== null && i && i(this.currentDirection);
				return;
			}
			this.updateAxis("x", t.point, o), this.updateAxis("y", t.point, o), this.visualElement.render(), a && a(e, t);
		}, o = (e, t) => this.stop(e, t), s = () => Z((e) => this.getAnimationState(e) === "paused" && this.getAxisMotionValue(e).animation?.play()), { dragSnapToOrigin: c } = this.getProps();
		this.panSession = new Qo(e, {
			onSessionStart: r,
			onStart: i,
			onMove: a,
			onSessionEnd: o,
			resumeAnimation: s
		}, {
			transformPagePoint: this.visualElement.getTransformPagePoint(),
			dragSnapToOrigin: c,
			contextWindow: Yo(this.visualElement)
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
		if (!n || !bs(e, r, this.currentDirection)) return;
		let i = this.getAxisMotionValue(e), a = this.originPoint[e] + n[e];
		this.constraints && this.constraints[e] && (a = as(a, this.constraints[e], this.elastic[e])), i.set(a);
	}
	resolveConstraints() {
		let { dragConstraints: e, dragElastic: t } = this.getProps(), n = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, r = this.constraints;
		e && st(e) ? this.constraints ||= this.resolveRefConstraints() : this.constraints = e && n ? ss(n.layoutBox, e) : !1, this.elastic = ps(t), r !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && Z((e) => {
			this.constraints !== !1 && this.getAxisMotionValue(e) && (this.constraints[e] = ds(n.layoutBox[e], this.constraints[e]));
		});
	}
	resolveRefConstraints() {
		let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
		if (!e || !st(e)) return !1;
		let n = e.current;
		R(n !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
		let { projection: r } = this.visualElement;
		if (!r || !r.layout) return !1;
		let i = Jo(n, r.root, this.visualElement.getTransformPagePoint()), a = ls(r.layout.layoutBox, i);
		if (t) {
			let e = t(go(a));
			this.hasMutatedConstraints = !!e, e && (a = ho(e));
		}
		return a;
	}
	startAnimation(e) {
		let { drag: t, dragMomentum: n, dragElastic: r, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: o } = this.getProps(), s = this.constraints || {}, c = Z((o) => {
			if (!bs(o, t, this.currentDirection)) return;
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
		return Rn(this.visualElement, e), n.start(Va(e, n, 0, t, this.visualElement, !1));
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
			if (!bs(t, n, this.currentDirection)) return;
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
		if (!st(t) || !n || !this.constraints) return;
		this.stopAnimation();
		let r = {
			x: 0,
			y: 0
		};
		Z((e) => {
			let t = this.getAxisMotionValue(e);
			if (t && this.constraints !== !1) {
				let n = t.get();
				r[e] = us({
					min: n,
					max: n
				}, this.constraints[e]);
			}
		});
		let { transformTemplate: i } = this.visualElement.getProps();
		this.visualElement.current.style.transform = i ? i({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), Z((t) => {
			if (!bs(t, e, null)) return;
			let n = this.getAxisMotionValue(t), { min: i, max: a } = this.constraints[t];
			n.set(q(i, a, r[t]));
		});
	}
	addListeners() {
		if (!this.visualElement.current) return;
		vs.set(this.visualElement, this);
		let e = this.visualElement.current, t = mo(e, "pointerdown", (e) => {
			let { drag: t, dragListener: n = !0 } = this.getProps();
			t && n && this.start(e);
		}), n = () => {
			let { dragConstraints: e } = this.getProps();
			st(e) && e.current && (this.constraints = this.resolveRefConstraints());
		}, { projection: r } = this.visualElement, i = r.addEventListener("measure", n);
		r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()), F.read(n);
		let a = lo(window, "resize", () => this.scalePositionWithinConstraints()), o = r.addEventListener("didUpdate", (({ delta: e, hasLayoutChanged: t }) => {
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
		let e = this.visualElement.getProps(), { drag: t = !1, dragDirectionLock: n = !1, dragPropagation: r = !1, dragConstraints: i = !1, dragElastic: a = fs, dragMomentum: o = !0 } = e;
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
function bs(e, t, n) {
	return (t === !0 || t === e) && (n === null || n === e);
}
function xs(e, t = 10) {
	let n = null;
	return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/gestures/drag/index.mjs
var Ss = class extends ao {
	constructor(e) {
		super(e), this.removeGroupControls = P, this.removeListeners = P, this.controls = new ys(e);
	}
	mount() {
		let { dragControls: e } = this.node.getProps();
		e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || P;
	}
	unmount() {
		this.removeGroupControls(), this.removeListeners();
	}
}, Cs = (e) => (t, n) => {
	e && F.postRender(() => e(t, n));
}, ws = class extends ao {
	constructor() {
		super(...arguments), this.removePointerDownListener = P;
	}
	onPointerDown(e) {
		this.session = new Qo(e, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
			contextWindow: Yo(this.node)
		});
	}
	createPanHandlers() {
		let { onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: r } = this.node.getProps();
		return {
			onSessionStart: Cs(e),
			onStart: Cs(t),
			onMove: n,
			onEnd: (e, t) => {
				delete this.session, r && F.postRender(() => r(e, t));
			}
		};
	}
	mount() {
		this.removePointerDownListener = mo(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers());
	}
	unmount() {
		this.removePointerDownListener(), this.session && this.session.end();
	}
}, Ts = {
	hasAnimatedSinceResize: !0,
	hasEverUpdated: !1
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/styles/scale-border-radius.mjs
function Es(e, t) {
	return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
var Ds = { correct: (e, t) => {
	if (!t.target) return e;
	if (typeof e == "string") {
		if (V.test(e)) e = parseFloat(e);
		else return e;
	}
	return `${Es(e, t.target.x)}% ${Es(e, t.target.y)}%`;
} }, Os = { correct: (e, { treeScale: t, projectionDelta: n }) => {
	let r = e, i = xr.parse(e);
	if (i.length > 5) return r;
	let a = xr.createTransformer(e), o = typeof i[0] == "number" ? 0 : 1, s = n.x.scale * t.x, c = n.y.scale * t.y;
	i[0 + o] /= s, i[1 + o] /= c;
	let l = q(s, c, .5);
	return typeof i[2 + o] == "number" && (i[2 + o] /= l), typeof i[3 + o] == "number" && (i[3 + o] /= l), a(i);
} }, ks = class extends v {
	componentDidMount() {
		let { visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: r } = this.props, { projection: i } = e;
		Ot(js), i && (t.group && t.group.add(i), n && n.register && r && n.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
			this.safeToRemove();
		}), i.setOptions({
			...i.options,
			onExitComplete: () => this.safeToRemove()
		})), Ts.hasEverUpdated = !0;
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
		e && (e.root.didUpdate(), ft.postRender(() => {
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
function As(e) {
	let [t, n] = xe(), r = T(le);
	return A(ks, {
		...e,
		layoutGroup: r,
		switchLayoutGroup: T(dt),
		isPresent: t,
		safeToRemove: n
	});
}
var js = {
	borderRadius: {
		...Ds,
		applyTo: [
			"borderTopLeftRadius",
			"borderTopRightRadius",
			"borderBottomLeftRadius",
			"borderBottomRightRadius"
		]
	},
	borderTopLeftRadius: Ds,
	borderTopRightRadius: Ds,
	borderBottomLeftRadius: Ds,
	borderBottomRightRadius: Ds,
	boxShadow: Os
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/animation/animate/single-value.mjs
function Ms(e, t, n) {
	let r = H(e) ? e : Nn(e);
	return r.start(Va("", r, t, n)), r.animation;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/utils/compare-by-depth.mjs
var Ns = (e, t) => e.depth - t.depth, Ps = class {
	constructor() {
		this.children = [], this.isDirty = !1;
	}
	add(e) {
		wn(this.children, e), this.isDirty = !0;
	}
	remove(e) {
		Tn(this.children, e), this.isDirty = !0;
	}
	forEach(e) {
		this.isDirty && this.children.sort(Ns), this.isDirty = !1, this.children.forEach(e);
	}
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/utils/delay.mjs
function Fs(e, t) {
	let n = U.now(), r = ({ timestamp: i }) => {
		let a = i - n;
		a >= t && (I(r), e(a - t));
	};
	return F.setup(r, !0), () => I(r);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/animation/mix-values.mjs
var Is = [
	"TopLeft",
	"TopRight",
	"BottomLeft",
	"BottomRight"
], Ls = Is.length, Rs = (e) => typeof e == "string" ? parseFloat(e) : e, zs = (e) => typeof e == "number" || V.test(e);
function Bs(e, t, n, r, i, a) {
	i ? (e.opacity = q(0, n.opacity ?? 1, Hs(r)), e.opacityExit = q(t.opacity ?? 1, 0, Us(r))) : a && (e.opacity = q(t.opacity ?? 1, n.opacity ?? 1, r));
	for (let i = 0; i < Ls; i++) {
		let a = `border${Is[i]}Radius`, o = Vs(t, a), s = Vs(n, a);
		(o !== void 0 || s !== void 0) && (o ||= 0, s ||= 0, o === 0 || s === 0 || zs(o) === zs(s) ? (e[a] = Math.max(q(Rs(o), Rs(s), r), 0), (B.test(s) || B.test(o)) && (e[a] += "%")) : e[a] = s);
	}
	(t.rotate || n.rotate) && (e.rotate = q(t.rotate || 0, n.rotate || 0, r));
}
function Vs(e, t) {
	return e[t] === void 0 ? e.borderRadius : e[t];
}
var Hs = /*@__PURE__*/ Ws(0, .5, Di), Us = /*@__PURE__*/ Ws(.5, .95, P);
function Ws(e, t, n) {
	return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ ai(e, t, r));
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/copy.mjs
function Gs(e, t) {
	e.min = t.min, e.max = t.max;
}
function $(e, t) {
	Gs(e.x, t.x), Gs(e.y, t.y);
}
function Ks(e, t) {
	e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/delta-remove.mjs
function qs(e, t, n, r, i) {
	return e -= t, e = Lo(e, 1 / n, r), i !== void 0 && (e = Lo(e, 1 / i, r)), e;
}
function Js(e, t = 0, n = 1, r = .5, i, a = e, o = e) {
	if (B.test(t) && (t = parseFloat(t), t = q(o.min, o.max, t / 100) - o.min), typeof t != "number") return;
	let s = q(a.min, a.max, r);
	e === a && (s -= t), e.min = qs(e.min, t, n, s, i), e.max = qs(e.max, t, n, s, i);
}
function Ys(e, t, [n, r, i], a, o) {
	Js(e, t[n], t[r], t[i], t.scale, a, o);
}
var Xs = [
	"x",
	"scaleX",
	"originX"
], Zs = [
	"y",
	"scaleY",
	"originY"
];
function Qs(e, t, n, r) {
	Ys(e.x, t, Xs, n ? n.x : void 0, r ? r.x : void 0), Ys(e.y, t, Zs, n ? n.y : void 0, r ? r.y : void 0);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/geometry/utils.mjs
function $s(e) {
	return e.translate === 0 && e.scale === 1;
}
function ec(e) {
	return $s(e.x) && $s(e.y);
}
function tc(e, t) {
	return e.min === t.min && e.max === t.max;
}
function nc(e, t) {
	return tc(e.x, t.x) && tc(e.y, t.y);
}
function rc(e, t) {
	return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function ic(e, t) {
	return rc(e.x, t.x) && rc(e.y, t.y);
}
function ac(e) {
	return Y(e.x) / Y(e.y);
}
function oc(e, t) {
	return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/shared/stack.mjs
var sc = class {
	constructor() {
		this.members = [];
	}
	add(e) {
		wn(this.members, e), e.scheduleRender();
	}
	remove(e) {
		if (Tn(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
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
function cc(e, t, n) {
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
function lc(e) {
	return he(e) && "ownerSVGElement" in e;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/utils/is-svg-svg-element.mjs
function uc(e) {
	return lc(e) && e.tagName === "svg";
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/node/create-projection-node.mjs
var dc = {
	nodes: 0,
	calculatedTargetDeltas: 0,
	calculatedProjections: 0
}, fc = [
	"",
	"X",
	"Y",
	"Z"
], pc = { visibility: "hidden" }, mc = 1e3, hc = 0;
function gc(e, t, n, r) {
	let { latestValues: i } = t;
	i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function _c(e) {
	if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
	let { visualElement: t } = e.options;
	if (!t) return;
	let n = zn(t);
	if (window.MotionHasOptimisedAnimation(n, "transform")) {
		let { layout: t, layoutId: r } = e.options;
		window.MotionCancelOptimisedAnimation(n, "transform", F, !(t || r));
	}
	let { parent: r } = e;
	r && !r.hasCheckedOptimisedAppear && _c(r);
}
function vc({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
	return class {
		constructor(e = {}, n = t?.()) {
			this.id = hc++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
				x: 1,
				y: 1
			}, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
				this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
			}, this.updateProjection = () => {
				this.projectionUpdateScheduled = !1, M.value && (dc.nodes = dc.calculatedTargetDeltas = dc.calculatedProjections = 0), this.nodes.forEach(xc), this.nodes.forEach(Oc), this.nodes.forEach(kc), this.nodes.forEach(Sc), M.addProjectionMetrics && M.addProjectionMetrics(dc);
			}, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = e, this.root = n ? n.root || n : this, this.path = n ? [...n.path, n] : [], this.parent = n, this.depth = n ? n.depth + 1 : 0;
			for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
			this.root === this && (this.nodes = new Ps());
		}
		addEventListener(e, t) {
			return this.eventHandlers.has(e) || this.eventHandlers.set(e, new Dn()), this.eventHandlers.get(e).add(t);
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
			this.isSVG = lc(t) && !uc(t), this.instance = t;
			let { layoutId: n, layout: r, visualElement: i } = this.options;
			if (i && !i.current && i.mount(t), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (r || n) && (this.isLayoutDirty = !0), e) {
				let n, r = () => this.root.updateBlockedByResize = !1;
				e(t, () => {
					this.root.updateBlockedByResize = !0, n && n(), n = Fs(r, 250), Ts.hasAnimatedSinceResize && (Ts.hasAnimatedSinceResize = !1, this.nodes.forEach(Dc));
				});
			}
			n && this.root.registerSharedNode(n, this), this.options.animate !== !1 && i && (n || r) && this.addEventListener("didUpdate", ({ delta: e, hasLayoutChanged: t, hasRelativeLayoutChanged: n, layout: r }) => {
				if (this.isTreeAnimationBlocked()) {
					this.target = void 0, this.relativeTarget = void 0;
					return;
				}
				let a = this.options.transition || i.getDefaultTransition() || Ic, { onLayoutAnimationStart: o, onLayoutAnimationComplete: s } = i.getProps(), c = !this.targetLayout || !ic(this.targetLayout, r), l = !t && n;
				if (this.options.layoutRoot || this.resumeFrom || l || t && (c || !this.currentAnimation)) {
					this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
					let t = {
						...Jn(a, "layout"),
						onPlay: o,
						onComplete: s
					};
					(i.shouldReduceMotion || this.options.layoutRoot) && (t.delay = 0, t.type = !1), this.startAnimation(t), this.setAnimationOrigin(e, l);
				} else t || Dc(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
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
			this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Ac), this.animationId++);
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
			if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && _c(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
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
				this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(wc);
				return;
			}
			this.isUpdating || this.nodes.forEach(Tc), this.isUpdating = !1, this.nodes.forEach(Ec), this.nodes.forEach(yc), this.nodes.forEach(bc), this.clearAllSnapshots();
			let e = U.now();
			L.delta = z(0, 1e3 / 60, e - L.timestamp), L.timestamp = e, L.isProcessing = !0, je.update.process(L), je.preRender.process(L), je.render.process(L), L.isProcessing = !1;
		}
		didUpdate() {
			this.updateScheduled || (this.updateScheduled = !0, ft.read(this.scheduleUpdate));
		}
		clearAllSnapshots() {
			this.nodes.forEach(Cc), this.sharedNodes.forEach(jc);
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
			let e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, t = this.projectionDelta && !ec(this.projectionDelta), n = this.getTransformTemplate(), r = n ? n(this.latestValues, "") : void 0, a = r !== this.prevTransformTemplateValue;
			e && this.instance && (t || Po(this.latestValues) || a) && (i(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender());
		}
		measure(e = !0) {
			let t = this.measurePageBox(), n = this.removeElementScroll(t);
			return e && (n = this.removeTransform(n)), Bc(n), {
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
			if (!(this.scroll?.wasRoot || this.path.some(Hc))) {
				let { scroll: e } = this.root;
				e && (Wo(t.x, e.offset.x), Wo(t.y, e.offset.y));
			}
			return t;
		}
		removeElementScroll(e) {
			let t = X();
			if ($(t, e), this.scroll?.wasRoot) return t;
			for (let n = 0; n < this.path.length; n++) {
				let r = this.path[n], { scroll: i, options: a } = r;
				r !== this.root && i && a.layoutScroll && (i.wasRoot && $(t, e), Wo(t.x, i.offset.x), Wo(t.y, i.offset.y));
			}
			return t;
		}
		applyTransform(e, t = !1) {
			let n = X();
			$(n, e);
			for (let e = 0; e < this.path.length; e++) {
				let r = this.path[e];
				!t && r.options.layoutScroll && r.scroll && r !== r.root && Ko(n, {
					x: -r.scroll.offset.x,
					y: -r.scroll.offset.y
				}), Po(r.latestValues) && Ko(n, r.latestValues);
			}
			return Po(this.latestValues) && Ko(n, this.latestValues), n;
		}
		removeTransform(e) {
			let t = X();
			$(t, e);
			for (let e = 0; e < this.path.length; e++) {
				let n = this.path[e];
				if (!n.instance || !Po(n.latestValues)) continue;
				No(n.latestValues) && n.updateSnapshot();
				let r = X();
				$(r, n.measurePageBox()), Qs(t, n.latestValues, n.snapshot ? n.snapshot.layoutBox : void 0, r);
			}
			return Po(this.latestValues) && Qs(t, this.latestValues), t;
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
					e && e.layout && this.animationProgress !== 1 ? (this.relativeParent = e, this.forceRelativeParentToResolveTarget(), this.relativeTarget = X(), this.relativeTargetOrigin = X(), Oo(this.relativeTargetOrigin, this.layout.layoutBox, e.layout.layoutBox), $(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
				}
				if (!(!this.relativeTarget && !this.targetDelta)) {
					if (this.target || (this.target = X(), this.targetWithTransforms = X()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Eo(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : $(this.target, this.layout.layoutBox), Bo(this.target, this.targetDelta)) : $(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
						this.attemptToResolveRelativeTarget = !1;
						let e = this.getClosestProjectingParent();
						e && !!e.resumingFrom == !!this.resumingFrom && !e.options.layoutScroll && e.target && this.animationProgress !== 1 ? (this.relativeParent = e, this.forceRelativeParentToResolveTarget(), this.relativeTarget = X(), this.relativeTargetOrigin = X(), Oo(this.relativeTargetOrigin, this.target, e.target), $(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
					}
					M.value && dc.calculatedTargetDeltas++;
				}
			}
		}
		getClosestProjectingParent() {
			if (!(!this.parent || No(this.parent.latestValues) || Fo(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
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
			Uo(this.layoutCorrected, this.treeScale, this.path, t), e.layout && !e.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (e.target = e.layout.layoutBox, e.targetWithTransforms = X());
			let { target: s } = e;
			if (!s) {
				this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
				return;
			}
			!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Ks(this.prevProjectionDelta.x, this.projectionDelta.x), Ks(this.prevProjectionDelta.y, this.projectionDelta.y)), wo(this.projectionDelta, this.layoutCorrected, s, this.latestValues), (this.treeScale.x !== a || this.treeScale.y !== o || !oc(this.projectionDelta.x, this.prevProjectionDelta.x) || !oc(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", s)), M.value && dc.calculatedProjections++;
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
			this.prevProjectionDelta = Ao(), this.projectionDelta = Ao(), this.projectionDeltaWithTransform = Ao();
		}
		setAnimationOrigin(e, t = !1) {
			let n = this.snapshot, r = n ? n.latestValues : {}, i = { ...this.latestValues }, a = Ao();
			(!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !t;
			let o = X(), s = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0), c = this.getStack(), l = !c || c.members.length <= 1, u = !!(s && !l && this.options.crossfade === !0 && !this.path.some(Fc));
			this.animationProgress = 0;
			let d;
			this.mixTargetDelta = (t) => {
				let n = t / 1e3;
				Mc(a.x, e.x, n), Mc(a.y, e.y, n), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Oo(o, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Pc(this.relativeTarget, this.relativeTargetOrigin, o, n), d && nc(this.relativeTarget, d) && (this.isProjectionDirty = !1), d ||= X(), $(d, this.relativeTarget)), s && (this.animationValues = i, Bs(i, r, this.latestValues, n, u, l)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n;
			}, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
		}
		startAnimation(e) {
			this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation &&= (I(this.pendingAnimation), void 0), this.pendingAnimation = F.update(() => {
				Ts.hasAnimatedSinceResize = !0, Yn.layout++, this.motionValue ||= Nn(0), this.currentAnimation = Ms(this.motionValue, [0, 1e3], {
					...e,
					velocity: 0,
					isSync: !0,
					onUpdate: (t) => {
						this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
					},
					onStop: () => {
						Yn.layout--;
					},
					onComplete: () => {
						Yn.layout--, e.onComplete && e.onComplete(), this.completeAnimation();
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
			this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(mc), this.currentAnimation.stop()), this.completeAnimation();
		}
		applyTransformsToTarget() {
			let e = this.getLead(), { targetWithTransforms: t, target: n, layout: r, latestValues: i } = e;
			if (!(!t || !n || !r)) {
				if (this !== e && this.layout && r && Vc(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
					n = this.target || X();
					let t = Y(this.layout.layoutBox.x);
					n.x.min = e.target.x.min, n.x.max = n.x.min + t;
					let r = Y(this.layout.layoutBox.y);
					n.y.min = e.target.y.min, n.y.max = n.y.min + r;
				}
				$(t, n), Ko(t, i), wo(this.projectionDeltaWithTransform, this.layoutCorrected, t, i);
			}
		}
		registerSharedNode(e, t) {
			this.sharedNodes.has(e) || this.sharedNodes.set(e, new sc()), this.sharedNodes.get(e).add(t);
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
			n.z && gc("z", e, r, this.animationValues);
			for (let t = 0; t < fc.length; t++) gc(`rotate${fc[t]}`, e, r, this.animationValues), gc(`skew${fc[t]}`, e, r, this.animationValues);
			e.render();
			for (let t in r) e.setStaticValue(t, r[t]), this.animationValues && (this.animationValues[t] = r[t]);
			e.scheduleRender();
		}
		getProjectionStyles(e) {
			if (!this.instance || this.isSVG) return;
			if (!this.isVisible) return pc;
			let t = { visibility: "" }, n = this.getTransformTemplate();
			if (this.needsReset) return this.needsReset = !1, t.opacity = "", t.pointerEvents = dn(e?.pointerEvents) || "", t.transform = n ? n(this.latestValues, "") : "none", t;
			let r = this.getLead();
			if (!this.projectionDelta || !this.layout || !r.target) {
				let t = {};
				return this.options.layoutId && (t.opacity = this.latestValues.opacity === void 0 ? 1 : this.latestValues.opacity, t.pointerEvents = dn(e?.pointerEvents) || ""), this.hasProjected && !Po(this.latestValues) && (t.transform = n ? n({}, "") : "none", this.hasProjected = !1), t;
			}
			let i = r.animationValues || r.latestValues;
			this.applyTransformsToTarget(), t.transform = cc(this.projectionDeltaWithTransform, this.treeScale, i), n && (t.transform = n(i, t.transform));
			let { x: a, y: o } = this.projectionDelta;
			t.transformOrigin = `${a.origin * 100}% ${o.origin * 100}% 0`, t.opacity = r.animationValues ? r === this ? i.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : i.opacityExit : r === this ? i.opacity === void 0 ? "" : i.opacity : i.opacityExit === void 0 ? 0 : i.opacityExit;
			for (let e in Dt) {
				if (i[e] === void 0) continue;
				let { correct: n, applyTo: a, isCSSVariable: o } = Dt[e], s = t.transform === "none" ? i[e] : n(i[e], r);
				if (a) {
					let e = a.length;
					for (let n = 0; n < e; n++) t[a[n]] = s;
				} else o ? this.options.visualElement.renderState.vars[e] = s : t[e] = s;
			}
			return this.options.layoutId && (t.pointerEvents = r === this ? dn(e?.pointerEvents) || "" : "none"), t;
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0;
		}
		resetTree() {
			this.root.nodes.forEach((e) => e.currentAnimation?.stop()), this.root.nodes.forEach(wc), this.root.sharedNodes.clear();
		}
	};
}
function yc(e) {
	e.updateLayout();
}
function bc(e) {
	let t = e.resumeFrom?.snapshot || e.snapshot;
	if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
		let { layoutBox: n, measuredBox: r } = e.layout, { animationType: i } = e.options, a = t.source !== e.layout.source;
		i === "size" ? Z((e) => {
			let r = a ? t.measuredBox[e] : t.layoutBox[e], i = Y(r);
			r.min = n[e].min, r.max = r.min + i;
		}) : Vc(i, t.layoutBox, n) && Z((r) => {
			let i = a ? t.measuredBox[r] : t.layoutBox[r], o = Y(n[r]);
			i.max = i.min + o, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[r].max = e.relativeTarget[r].min + o);
		});
		let o = Ao();
		wo(o, n, t.layoutBox);
		let s = Ao();
		a ? wo(s, e.applyTransform(r, !0), t.measuredBox) : wo(s, n, t.layoutBox);
		let c = !ec(o), l = !1;
		if (!e.resumeFrom) {
			let r = e.getClosestProjectingParent();
			if (r && !r.resumeFrom) {
				let { snapshot: i, layout: a } = r;
				if (i && a) {
					let o = X();
					Oo(o, t.layoutBox, i.layoutBox);
					let s = X();
					Oo(s, n, a.layoutBox), ic(o, s) || (l = !0), r.options.layoutRoot && (e.relativeTarget = s, e.relativeTargetOrigin = o, e.relativeParent = r);
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
function xc(e) {
	M.value && dc.nodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty ||= !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty), e.isTransformDirty ||= e.parent.isTransformDirty);
}
function Sc(e) {
	e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Cc(e) {
	e.clearSnapshot();
}
function wc(e) {
	e.clearMeasurements();
}
function Tc(e) {
	e.isLayoutDirty = !1;
}
function Ec(e) {
	let { visualElement: t } = e.options;
	t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Dc(e) {
	e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function Oc(e) {
	e.resolveTargetDelta();
}
function kc(e) {
	e.calcProjection();
}
function Ac(e) {
	e.resetSkewAndRotation();
}
function jc(e) {
	e.removeLeadSnapshot();
}
function Mc(e, t, n) {
	e.translate = q(t.translate, 0, n), e.scale = q(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Nc(e, t, n, r) {
	e.min = q(t.min, n.min, r), e.max = q(t.max, n.max, r);
}
function Pc(e, t, n, r) {
	Nc(e.x, t.x, n.x, r), Nc(e.y, t.y, n.y, r);
}
function Fc(e) {
	return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var Ic = {
	duration: .45,
	ease: [
		.4,
		0,
		.1,
		1
	]
}, Lc = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), Rc = Lc("applewebkit/") && !Lc("chrome/") ? Math.round : P;
function zc(e) {
	e.min = Rc(e.min), e.max = Rc(e.max);
}
function Bc(e) {
	zc(e.x), zc(e.y);
}
function Vc(e, t, n) {
	return e === "position" || e === "preserve-aspect" && !So(ac(t), ac(n), .2);
}
function Hc(e) {
	return e !== e.root && e.scroll?.wasRoot;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs
var Uc = vc({
	attachResizeListener: (e, t) => lo(e, "resize", t),
	measureScroll: () => ({
		x: document.documentElement.scrollLeft || document.body.scrollLeft,
		y: document.documentElement.scrollTop || document.body.scrollTop
	}),
	checkIsScrollRoot: () => !0
}), Wc = { current: void 0 }, Gc = vc({
	measureScroll: (e) => ({
		x: e.scrollLeft,
		y: e.scrollTop
	}),
	defaultParent: () => {
		if (!Wc.current) {
			let e = new Uc({});
			e.mount(window), e.setOptions({ layoutScroll: !0 }), Wc.current = e;
		}
		return Wc.current;
	},
	resetTransform: (e, t) => {
		e.style.transform = t === void 0 ? "none" : t;
	},
	checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), Kc = {
	pan: { Feature: ws },
	drag: {
		Feature: Ss,
		ProjectionNode: Gc,
		MeasureLayout: As
	}
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/utils/resolve-elements.mjs
function qc(e, t, n) {
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
function Jc(e, t) {
	let n = qc(e), r = new AbortController();
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
function Yc(e) {
	return !(e.pointerType === "touch" || gs());
}
function Xc(e, t, n = {}) {
	let [r, i, a] = Jc(e, n), o = (e) => {
		if (!Yc(e)) return;
		let { target: n } = e, r = t(n, e);
		if (typeof r != "function" || !n) return;
		let a = (e) => {
			Yc(e) && (r(e), n.removeEventListener("pointerleave", a));
		};
		n.addEventListener("pointerleave", a, i);
	};
	return r.forEach((e) => {
		e.addEventListener("pointerenter", o, i);
	}), a;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/gestures/hover.mjs
function Zc(e, t, n) {
	let { props: r } = e;
	e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
	let i = r["onHover" + n];
	i && F.postRender(() => i(t, fo(t)));
}
var Qc = class extends ao {
	mount() {
		let { current: e } = this.node;
		e && (this.unmount = Xc(e, (e, t) => (Zc(this.node, t, "Start"), (e) => Zc(this.node, e, "End"))));
	}
	unmount() {}
}, $c = class extends ao {
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
		this.unmount = Nr(lo(this.node.current, "focus", () => this.onFocus()), lo(this.node.current, "blur", () => this.onBlur()));
	}
	unmount() {}
}, el = (e, t) => t ? e === t || el(e, t.parentElement) : !1, tl = /* @__PURE__ */ new Set([
	"BUTTON",
	"INPUT",
	"SELECT",
	"TEXTAREA",
	"A"
]);
function nl(e) {
	return tl.has(e.tagName) || e.tabIndex !== -1;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/gestures/press/utils/state.mjs
var rl = /* @__PURE__ */ new WeakSet();
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/gestures/press/utils/keyboard.mjs
function il(e) {
	return (t) => {
		t.key === "Enter" && e(t);
	};
}
function al(e, t) {
	e.dispatchEvent(new PointerEvent("pointer" + t, {
		isPrimary: !0,
		bubbles: !0
	}));
}
var ol = (e, t) => {
	let n = e.currentTarget;
	if (!n) return;
	let r = il(() => {
		if (rl.has(n)) return;
		al(n, "down");
		let e = il(() => {
			al(n, "up");
		});
		n.addEventListener("keyup", e, t), n.addEventListener("blur", () => al(n, "cancel"), t);
	});
	n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/gestures/press/index.mjs
function sl(e) {
	return uo(e) && !gs();
}
function cl(e, t, n = {}) {
	let [r, i, a] = Jc(e, n), o = (e) => {
		let r = e.currentTarget;
		if (!sl(e)) return;
		rl.add(r);
		let a = t(r, e), o = (e, t) => {
			window.removeEventListener("pointerup", s), window.removeEventListener("pointercancel", c), rl.has(r) && rl.delete(r), sl(e) && typeof a == "function" && a(e, { success: t });
		}, s = (e) => {
			o(e, r === window || r === document || n.useGlobalTarget || el(r, e.target));
		}, c = (e) => {
			o(e, !1);
		};
		window.addEventListener("pointerup", s, i), window.addEventListener("pointercancel", c, i);
	};
	return r.forEach((e) => {
		(n.useGlobalTarget ? window : e).addEventListener("pointerdown", o, i), ge(e) && (e.addEventListener("focus", (e) => ol(e, i)), !nl(e) && !e.hasAttribute("tabindex") && (e.tabIndex = 0));
	}), a;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/gestures/press.mjs
function ll(e, t, n) {
	let { props: r } = e;
	if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
	e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
	let i = r["onTap" + (n === "End" ? "" : n)];
	i && F.postRender(() => i(t, fo(t)));
}
var ul = class extends ao {
	mount() {
		let { current: e } = this.node;
		e && (this.unmount = cl(e, (e, t) => (ll(this.node, t, "Start"), (e, { success: t }) => ll(this.node, e, t ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
	}
	unmount() {}
}, dl = /* @__PURE__ */ new WeakMap(), fl = /* @__PURE__ */ new WeakMap(), pl = (e) => {
	let t = dl.get(e.target);
	t && t(e);
}, ml = (e) => {
	e.forEach(pl);
};
function hl({ root: e, ...t }) {
	let n = e || document;
	fl.has(n) || fl.set(n, {});
	let r = fl.get(n), i = JSON.stringify(t);
	return r[i] || (r[i] = new IntersectionObserver(ml, {
		root: e,
		...t
	})), r[i];
}
function gl(e, t, n) {
	let r = hl(t);
	return dl.set(e, n), r.observe(e), () => {
		dl.delete(e), r.unobserve(e);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/motion/features/viewport/index.mjs
var _l = {
	some: 0,
	all: 1
}, vl = class extends ao {
	constructor() {
		super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
	}
	startObserver() {
		this.unmount();
		let { viewport: e = {} } = this.node.getProps(), { root: t, margin: n, amount: r = "some", once: i } = e, a = {
			root: t ? t.current : void 0,
			rootMargin: n,
			threshold: typeof r == "number" ? r : _l[r]
		};
		return gl(this.node.current, a, (e) => {
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
		].some(yl(e, t)) && this.startObserver();
	}
	unmount() {}
};
function yl({ viewport: e = {} }, { viewport: t = {} } = {}) {
	return (n) => e[n] !== t[n];
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/motion/features/gestures.mjs
var bl = {
	inView: { Feature: vl },
	tap: { Feature: ul },
	focus: { Feature: $c },
	hover: { Feature: Qc }
}, xl = { layout: {
	ProjectionNode: Gc,
	MeasureLayout: As
} }, Sl = { current: null }, Cl = { current: !1 };
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/utils/reduced-motion/index.mjs
function wl() {
	if (Cl.current = !0, de) {
		if (window.matchMedia) {
			let e = window.matchMedia("(prefers-reduced-motion)"), t = () => Sl.current = e.matches;
			e.addListener(t), t();
		} else Sl.current = !1;
	}
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/store.mjs
var Tl = /* @__PURE__ */ new WeakMap();
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/utils/motion-values.mjs
function El(e, t, n) {
	for (let r in t) {
		let i = t[r], a = n[r];
		if (H(i)) e.addValue(r, i);
		else if (H(a)) e.addValue(r, Nn(i, { owner: e }));
		else if (a !== i) {
			if (e.hasValue(r)) {
				let t = e.getValue(r);
				t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
			} else {
				let t = e.getStaticValue(r);
				e.addValue(r, Nn(t === void 0 ? i : t, { owner: e }));
			}
		}
	}
	for (let r in n) t[r] === void 0 && e.removeValue(r);
	return t;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-utils/dist/es/is-numerical-string.mjs
var Dl = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), Ol = (e) => /^0[^.\s]+$/u.test(e), kl = {
	test: (e) => e === "auto",
	parse: (e) => e
}, Al = (e) => (t) => t.test(e), jl = [
	Nt,
	V,
	B,
	Rt,
	Bt,
	zt,
	kl
], Ml = (e) => jl.find(Al(e)), Nl = [
	...jl,
	K,
	xr
], Pl = (e) => Nl.find(Al(e)), Fl = /* @__PURE__ */ new Set([
	"brightness",
	"contrast",
	"saturate",
	"opacity"
]);
function Il(e) {
	let [t, n] = e.slice(0, -1).split("(");
	if (t === "drop-shadow") return e;
	let [r] = n.match(Zn) || [];
	if (!r) return e;
	let i = n.replace(r, ""), a = +!!Fl.has(t);
	return r !== n && (a *= 100), t + "(" + a + i + ")";
}
var Ll = /\b([a-z-]*)\(.*?\)/gu, Rl = {
	...xr,
	getAnimatableNone: (e) => {
		let t = e.match(Ll);
		return t ? t.map(Il).join(" ") : e;
	}
}, zl = {
	...Ht,
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
	filter: Rl,
	WebkitFilter: Rl
}, Bl = (e) => zl[e];
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/value/types/utils/animatable-none.mjs
function Vl(e, t) {
	let n = Bl(e);
	return n !== Rl && (n = xr), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/VisualElement.mjs
var Hl = [
	"AnimationStart",
	"AnimationComplete",
	"Update",
	"BeforeLayoutMeasure",
	"LayoutMeasure",
	"LayoutAnimationStart",
	"LayoutAnimationComplete"
], Ul = class {
	scrapeMotionValuesFromProps(e, t, n) {
		return {};
	}
	constructor({ parent: e, props: t, presenceContext: n, reducedMotionConfig: r, blockInitialAnimation: i, visualState: a }, o = {}) {
		this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = pa, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
			this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
		}, this.renderScheduledAt = 0, this.scheduleRender = () => {
			let e = U.now();
			this.renderScheduledAt < e && (this.renderScheduledAt = e, F.render(this.render, !1, !0));
		};
		let { latestValues: s, renderState: c } = a;
		this.latestValues = s, this.baseTarget = { ...s }, this.initialValues = t.initial ? { ...s } : {}, this.renderState = c, this.parent = e, this.props = t, this.presenceContext = n, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = r, this.options = o, this.blockInitialAnimation = !!i, this.isControllingVariants = tt(t), this.isVariantNode = nt(t), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
		let { willChange: l, ...u } = this.scrapeMotionValuesFromProps(t, {}, this);
		for (let e in u) {
			let t = u[e];
			s[e] !== void 0 && H(t) && t.set(s[e], !1);
		}
	}
	mount(e) {
		this.current = e, Tl.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e, t) => this.bindToMotionValue(t, e)), Cl.current || wl(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" || Sl.current, process.env.NODE_ENV !== "production" && Je(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
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
		let n = At.has(e);
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
		for (e in Pe) {
			let t = Pe[e];
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
		for (let t = 0; t < Hl.length; t++) {
			let n = Hl[t];
			this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
			let r = e["on" + n];
			r && (this.propEventSubscriptions[n] = this.on(n, r));
		}
		this.prevMotionValues = El(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
		return n === void 0 && t !== void 0 && (n = Nn(t === null ? void 0 : t, { owner: this }), this.addValue(e, n)), n;
	}
	readValue(e, t) {
		let n = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
		return n != null && (typeof n == "string" && (Dl(n) || Ol(n)) ? n = parseFloat(n) : !Pl(n) && xr.test(t) && (n = Vl(e, t)), this.setBaseTarget(e, H(n) ? n.get() : n)), H(n) ? n.get() : n;
	}
	setBaseTarget(e, t) {
		this.baseTarget[e] = t;
	}
	getBaseTarget(e) {
		let { initial: t } = this.props, n;
		if (typeof t == "string" || typeof t == "object") {
			let r = un(this.props, t, this.presenceContext?.custom);
			r && (n = r[e]);
		}
		if (t && n !== void 0) return n;
		let r = this.getBaseTargetFromProps(this.props, e);
		return r !== void 0 && !H(r) ? r : this.initialValues[e] !== void 0 && n === void 0 ? void 0 : this.baseTarget[e];
	}
	on(e, t) {
		return this.events[e] || (this.events[e] = new Dn()), this.events[e].add(t);
	}
	notify(e, ...t) {
		this.events[e] && this.events[e].notify(...t);
	}
}, Wl = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Gl(e) {
	let t = Wl.exec(e);
	if (!t) return [,];
	let [, n, r, i] = t;
	return [`--${n ?? r}`, i];
}
var Kl = 4;
function ql(e, t, n = 1) {
	R(n <= Kl, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
	let [r, i] = Gl(e);
	if (!r) return;
	let a = window.getComputedStyle(t).getPropertyValue(r);
	if (a) {
		let e = a.trim();
		return Dl(e) ? parseFloat(e) : e;
	}
	return Tt(i) ? ql(i, t, n + 1) : i;
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/keyframes/utils/is-none.mjs
function Jl(e) {
	return typeof e == "number" ? e === 0 : e === null || e === "none" || e === "0" || Ol(e);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/keyframes/utils/make-none-animatable.mjs
var Yl = /* @__PURE__ */ new Set([
	"auto",
	"none",
	"0"
]);
function Xl(e, t, n) {
	let r = 0, i;
	for (; r < e.length && !i;) {
		let t = e[r];
		typeof t == "string" && !Yl.has(t) && gr(t).values.length && (i = e[r]), r++;
	}
	if (i && n) for (let r of t) e[r] = Vl(n, i);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs
var Zl = class extends pa {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i, !0);
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, element: t, name: n } = this;
		if (!t || !t.current) return;
		super.readKeyframes();
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (typeof r == "string" && (r = r.trim(), Tt(r))) {
				let i = ql(r, t.current);
				i !== void 0 && (e[n] = i), n === e.length - 1 && (this.finalKeyframe = r);
			}
		}
		if (this.resolveNoneKeyframes(), !Ha.has(n) || e.length !== 2) return;
		let [r, i] = e, a = Ml(r), o = Ml(i);
		if (a !== o) {
			if (ta(a) && ta(o)) for (let t = 0; t < e.length; t++) {
				let n = e[t];
				typeof n == "string" && (e[t] = parseFloat(n));
			}
			else aa[n] && (this.needsMeasurement = !0);
		}
	}
	resolveNoneKeyframes() {
		let { unresolvedKeyframes: e, name: t } = this, n = [];
		for (let t = 0; t < e.length; t++) (e[t] === null || Jl(e[t])) && n.push(t);
		n.length && Xl(e, n, t);
	}
	measureInitialState() {
		let { element: e, unresolvedKeyframes: t, name: n } = this;
		if (!e || !e.current) return;
		n === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = aa[n](e.measureViewportBox(), window.getComputedStyle(e.current)), t[0] = this.measuredOrigin;
		let r = t[t.length - 1];
		r !== void 0 && e.getValue(n, r).jump(r, !1);
	}
	measureEndState() {
		let { element: e, name: t, unresolvedKeyframes: n } = this;
		if (!e || !e.current) return;
		let r = e.getValue(t);
		r && r.jump(this.measuredOrigin, !1);
		let i = n.length - 1, a = n[i];
		n[i] = aa[t](e.measureViewportBox(), window.getComputedStyle(e.current)), a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a), this.removedTransforms?.length && this.removedTransforms.forEach(([t, n]) => {
			e.getValue(t).set(n);
		}), this.resolveNoneKeyframes();
	}
}, Ql = class extends Ul {
	constructor() {
		super(...arguments), this.KeyframeResolver = Zl;
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
function $l(e, { style: t, vars: n }, r, i) {
	Object.assign(e.style, t, i && i.getProjectionStyles(r));
	for (let t in n) e.style.setProperty(t, n[t]);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/html/HTMLVisualElement.mjs
function eu(e) {
	return window.getComputedStyle(e);
}
var tu = class extends Ql {
	constructor() {
		super(...arguments), this.type = "html", this.renderInstance = $l;
	}
	readValueFromInstance(e, t) {
		if (At.has(t)) return this.projection?.isProjecting ? Zi(t) : $i(e, t);
		{
			let n = eu(e), r = (Ct(t) ? n.getPropertyValue(t) : n[t]) || 0;
			return typeof r == "string" ? r.trim() : r;
		}
	}
	measureInstanceViewportBox(e, { transformPagePoint: t }) {
		return qo(e, t);
	}
	build(e, t, n) {
		Kt(e, t, n.transformTemplate);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return hn(e, t, n);
	}
}, nu = /* @__PURE__ */ new Set([
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
function ru(e, t, n, r) {
	$l(e, t, void 0, r);
	for (let n in t.attrs) e.setAttribute(nu.has(n) ? n : lt(n), t.attrs[n]);
}
//#endregion
//#region ../../node_modules/.pnpm/motion@12.17.0_@emotion+is-prop-valid@1.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/motion/dist/es/framer-motion/dist/es/render/svg/SVGVisualElement.mjs
var iu = class extends Ql {
	constructor() {
		super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = X;
	}
	getBaseTargetFromProps(e, t) {
		return e[t];
	}
	readValueFromInstance(e, t) {
		if (At.has(t)) {
			let e = Bl(t);
			return e && e.default || 0;
		}
		return t = nu.has(t) ? t : lt(t), e.getAttribute(t);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return _n(e, t, n);
	}
	build(e, t, n) {
		tn(e, t, this.isSVGTag, n.transformTemplate, n.style);
	}
	renderInstance(e, t, n, r) {
		ru(e, t, n, r);
	}
	mount(e) {
		this.isSVGTag = rn(e.tagName), super.mount(e);
	}
}, au = (e, t) => sn(e) ? new iu(t) : new tu(t, { allowProjection: e !== y }), ou = /*@__PURE__*/ Ye(/* @__PURE__ */ yn({
	...co,
	...bl,
	...Kc,
	...xl
}, au)), su = a({
	base: "inline-block shrink-0",
	variants: { size: {
		lg: "w-6 [&_circle]:stroke-lg [&_path]:stroke-lg [&_rect]:stroke-lg",
		md: "w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md",
		sm: "w-4 [&_circle]:stroke-sm [&_path]:stroke-sm [&_rect]:stroke-sm",
		xs: "w-3 [&_circle]:stroke-xs [&_path]:stroke-xs [&_rect]:stroke-xs"
	} },
	defaultVariants: { size: "md" }
}), cu = {
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
function lu(e) {
	return e.startsWith("#");
}
var uu = C(function({ size: e, icon: t, state: n = "normal", color: r = "currentColor", ...i }, a) {
	if (!t) return null;
	let o = t, s = t.displayName?.includes("Animated"), c = lu(r), l = ((e) => e === "currentColor" ? "text-current" : e === "default" ? "text-f1-icon" : lu(e) ? "" : cu[e])(r), d = c ? { color: r } : void 0;
	return s ? /* @__PURE__ */ A(o, {
		ref: a,
		...i,
		animate: n,
		className: u(su({ size: e }), "select-none", l),
		style: d,
		"data-has-color": r === "currentColor" ? void 0 : "true"
	}) : /* @__PURE__ */ A(o, {
		ref: a,
		...i,
		className: u("aspect-square", su({ size: e }), l),
		style: d,
		"data-has-color": r === "currentColor" ? void 0 : "true"
	});
}), du = s(o({
	name: "F0Icon",
	type: "info"
}, uu)), fu = {};
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
	function ee(e) {
		var t = e.getBoundingClientRect();
		e.width = t.width, e.height = t.height;
	}
	function te(e) {
		var t = document.createElement("canvas");
		return t.style.position = "fixed", t.style.top = "0px", t.style.left = "0px", t.style.pointerEvents = "none", t.style.zIndex = e, t;
	}
	function w(e, t, n, r, i, a, o, s, c) {
		e.save(), e.translate(t, n), e.rotate(a), e.scale(r, i), e.arc(0, 0, 1, o, s, c), e.restore();
	}
	function T(e) {
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
		} else if (t.shape === "circle") e.ellipse ? e.ellipse(t.x, t.y, Math.abs(a - r) * t.ovalScalar, Math.abs(s - i) * t.ovalScalar, Math.PI / 10 * t.wobble, 0, 2 * Math.PI) : w(e, t.x, t.y, Math.abs(a - r) * t.ovalScalar, Math.abs(s - i) * t.ovalScalar, Math.PI / 10 * t.wobble, 0, 2 * Math.PI);
		else if (t.shape === "star") for (var g = Math.PI / 2 * 3, _ = 4 * t.scalar, v = 8 * t.scalar, y = t.x, b = t.y, x = 5, S = Math.PI / x; x--;) y = t.x + Math.cos(g) * v, b = t.y + Math.sin(g) * v, e.lineTo(y, b), g += S, y = t.x + Math.cos(g) * _, b = t.y + Math.sin(g) * _, e.lineTo(y, b), g += S;
		else e.moveTo(Math.floor(t.x), Math.floor(t.y)), e.lineTo(Math.floor(t.wobbleX), Math.floor(i)), e.lineTo(Math.floor(a), Math.floor(s)), e.lineTo(Math.floor(r), Math.floor(t.wobbleY));
		return e.closePath(), e.fill(), t.tick < t.totalTicks;
	}
	function ne(e, t, n, a, o) {
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
	function re(e, n) {
		var r = !e, i = !!g(n || {}, "resize"), o = !1, s = g(n, "disableForReducedMotion", Boolean), c = a && g(n || {}, "useWorker") ? f() : null, u = r ? C : ee, d = e && c ? !!e.__confetti_initialized : !1, p = typeof matchMedia == "function" && matchMedia("(prefers-reduced-motion)").matches, m;
		function h(t, n, r) {
			for (var i = g(t, "particleCount", _), a = g(t, "angle", Number), o = g(t, "spread", Number), s = g(t, "startVelocity", Number), c = g(t, "decay", Number), l = g(t, "gravity", Number), d = g(t, "drift", Number), f = g(t, "colors", b), p = g(t, "ticks", Number), h = g(t, "shapes"), y = g(t, "scalar"), x = !!g(t, "flat"), C = S(t), ee = i, te = [], w = e.width * C.x, E = e.height * C.y; ee--;) te.push(T({
				x: w,
				y: E,
				angle: a,
				spread: o,
				startVelocity: s,
				color: f[ee % f.length],
				shape: h[v(0, h.length)],
				ticks: p,
				decay: c,
				gravity: l,
				drift: d,
				scalar: y,
				flat: x
			}));
			return m ? m.addFettis(te) : (m = ne(e, te, u, n, r), m.promise);
		}
		function y(n) {
			var a = s || g(n, "disableForReducedMotion", Boolean), f = g(n, "zIndex", Number);
			if (a && p) return l(function(e) {
				e();
			});
			r && m ? e = m.canvas : r && !e && (e = te(f), document.body.appendChild(e)), i && !d && u(e);
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
	var ie;
	function D() {
		return ie ||= re(null, {
			useWorker: !0,
			resize: !0
		}), ie;
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
		return D().apply(this, arguments);
	}, n.exports.reset = function() {
		D().reset();
	}, n.exports.create = re, n.exports.shapeFromPath = k, n.exports.shapeFromText = ae;
})((function() {
	return typeof window < "u" ? window : typeof self < "u" ? self : this || {};
})(), fu, !1);
var pu = fu.exports;
fu.exports.create;
//#endregion
//#region ../../node_modules/.pnpm/twemoji-parser@14.0.0/node_modules/twemoji-parser/dist/lib/regex.js
var mu = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = /(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c[\udffc-\udfff]|\ud83e\udef1\ud83c\udffc\u200d\ud83e\udef2\ud83c[\udffb\udffd-\udfff]|\ud83e\udef1\ud83c\udffd\u200d\ud83e\udef2\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\udef1\ud83c\udffe\u200d\ud83e\udef2\ud83c[\udffb-\udffd\udfff]|\ud83e\udef1\ud83c\udfff\u200d\ud83e\udef2\ud83c[\udffb-\udffe]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83e\udd1d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91]|\ud83e\udd1d)|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd\udec3-\udec5\udef0-\udef6]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udedd-\udedf\udeeb\udeec\udef4-\udefc\udfe0-\udfeb\udff0]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78-\uddb4\uddb7\uddba\uddbc-\uddcc\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7c\ude80-\ude86\ude90-\udeac\udeb0-\udeba\udec0-\udec2\uded0-\uded9\udee0-\udee7]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g;
})), hu = /* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.TypeName = void 0, e.parse = i;
	var t = n(mu());
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
})), gu = /* @__PURE__ */ i(((e, t) => {
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
		function ee() {
			s !== void 0 && clearTimeout(s), l = 0, r = c = i = s = void 0;
		}
		function te() {
			return s === void 0 ? o : C(m());
		}
		function w() {
			var e = m(), n = x(e);
			if (r = arguments, i = this, c = e, n) {
				if (s === void 0) return v(c);
				if (d) return s = setTimeout(S, t), _(c);
			}
			return s === void 0 && (s = setTimeout(S, t)), o;
		}
		return w.cancel = ee, w.flush = te, w;
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
})), _u = hu(), vu = /* @__PURE__ */ n(gu(), 1), yu = typeof window < "u" ? ie : E;
function bu(e, t, n, r) {
	let i = O(t);
	yu(() => {
		i.current = t;
	}, [t]), E(() => {
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
var xu = typeof window > "u";
function Su(e, { defaultValue: t = !1, initializeWithValue: n = !0 } = {}) {
	let r = (e) => xu ? t : window.matchMedia(e).matches, [i, a] = k(() => n ? r(e) : t);
	function o() {
		a(r(e));
	}
	return yu(() => {
		let t = window.matchMedia(e);
		return o(), t.addListener ? t.addListener(o) : t.addEventListener("change", o), () => {
			t.removeListener ? t.removeListener(o) : t.removeEventListener("change", o);
		};
	}, [e]), i;
}
function Cu(e) {
	let t = O(e);
	t.current = e, E(() => () => {
		t.current();
	}, []);
}
function wu(e, t = 500, n) {
	let r = O();
	Cu(() => {
		r.current && r.current.cancel();
	});
	let i = D(() => {
		let i = (0, vu.default)(e, t, n), a = (...e) => i(...e);
		return a.cancel = () => {
			i.cancel();
		}, a.isPending = () => !!r.current, a.flush = () => i.flush(), a;
	}, [
		e,
		t,
		n
	]);
	return E(() => {
		r.current = (0, vu.default)(e, t, n);
	}, [
		e,
		t,
		n
	]), i;
}
function Tu(e, t, n) {
	let r = n?.equalityFn ?? ((e, t) => e === t), i = e instanceof Function ? e() : e, [a, o] = k(i), s = O(i), c = wu(o, t, n);
	return r(s.current, i) || (c(i), s.current = i), [a, c];
}
function Eu({ threshold: e = 0, root: t = null, rootMargin: n = "0%", freezeOnceVisible: r = !1, initialIsIntersecting: i = !1, onChange: a } = {}) {
	let [o, s] = k(null), [c, l] = k(() => ({
		isIntersecting: i,
		entry: void 0
	})), u = O();
	u.current = a;
	let d = c.entry?.isIntersecting && r;
	E(() => {
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
	let f = O(null);
	E(() => {
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
function Du() {
	let e = O(!1);
	return E(() => (e.current = !0, () => {
		e.current = !1;
	}), []), w(() => e.current, []);
}
function Ou(e, t, n = "mousedown", r = {}) {
	bu(n, (n) => {
		let r = n.target;
		!r || !r.isConnected || (Array.isArray(e) ? e.filter((e) => !!e.current).every((e) => e.current && !e.current.contains(r)) : e.current && !e.current.contains(r)) && t(n);
	}, void 0, r);
}
var ku = {
	width: void 0,
	height: void 0
};
function Au(e) {
	let { ref: t, box: n = "content-box" } = e, [{ width: r, height: i }, a] = k(ku), o = Du(), s = O({ ...ku }), c = O(void 0);
	return c.current = e.onResize, E(() => {
		if (!t.current || typeof window > "u" || !("ResizeObserver" in window)) return;
		let e = new ResizeObserver(([e]) => {
			let t = n === "border-box" ? "borderBoxSize" : n === "device-pixel-content-box" ? "devicePixelContentBoxSize" : "contentBoxSize", r = ju(e, t, "inlineSize"), i = ju(e, t, "blockSize");
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
function ju(e, t, n) {
	return e[t] ? Array.isArray(e[t]) ? e[t][0][n] : e[t][n] : t === "contentBoxSize" ? e.contentRect[n === "inlineSize" ? "width" : "height"] : void 0;
}
//#endregion
//#region src/lib/a11y.tsx
var Mu = () => Su("(prefers-reduced-motion: reduce)", {
	initializeWithValue: !0,
	defaultValue: !1
}), Nu = a({
	variants: { size: {
		xs: "h-3 w-3",
		sm: "h-4 w-4",
		md: "h-5 w-5",
		lg: "h-6 w-6"
	} },
	defaultVariants: { size: "sm" }
}), Pu = a({
	variants: { size: {
		xs: "text-[12px]",
		sm: "text-[16px]",
		md: "text-[20px]",
		lg: "text-[24px]"
	} },
	defaultVariants: { size: "sm" }
});
function Fu({ emoji: e, size: t, alt: n, mode: r = "image" }) {
	let i = r === "native" ? null : Iu(e), a = {
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
	return r === "native" ? /* @__PURE__ */ A(ou.span, {
		className: u(Nu({ size: t }), Pu({ size: t }), "inline-flex items-center justify-center leading-none font-emoji"),
		"aria-label": n === "" ? void 0 : n ?? e,
		role: n === "" ? void 0 : "img",
		"aria-hidden": n === "" || void 0,
		...a,
		children: e
	}, e) : i ? /* @__PURE__ */ A(ou.img, {
		src: i.url,
		alt: n ?? e,
		className: Nu({ size: t }),
		draggable: !1,
		...a
	}, i.url) : /* @__PURE__ */ A(ou.span, {
		...a,
		children: e
	}, e);
}
var Iu = (e) => {
	let [t] = (0, _u.parse)(e, { buildUrl: (e) => `https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/${e}.svg` });
	return t || null;
};
function Lu(e) {
	return `${e} emoji`;
}
var Ru = () => {
	let e = Mu();
	return { fireEmojiConfetti: w((t, n) => {
		let r = n.current;
		if (r) {
			let n = r.getBoundingClientRect(), i = n.left + n.width / 2, a = n.top;
			pu({
				particleCount: 20,
				gravity: 0,
				spread: 360,
				startVelocity: 10,
				ticks: 50,
				origin: {
					x: i / window.innerWidth,
					y: a / window.innerHeight
				},
				shapes: [pu.shapeFromText({
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
function zu(e) {
	if (!ee(e)) return e;
	let t = e.props;
	if (t.title == null) return e;
	let n = { title: void 0 };
	return t["aria-label"] == null && t["aria-labelledby"] == null && typeof t.title == "string" && (n["aria-label"] = t.title), b(e, n);
}
var Bu = C((e, t) => /* @__PURE__ */ oe("svg", {
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
})), Vu = x(null), Hu = (e, t) => {
	let n = e.split("."), r = t;
	for (let e of n) if (r && typeof r == "object" && e in r) r = r[e];
	else return;
	return typeof r == "string" ? r : void 0;
}, Uu = (e) => typeof e == "object" && !!e && !Array.isArray(e), Wu = (e, t) => {
	let n = { ...e };
	for (let [e, r] of Object.entries(t)) {
		if (r === void 0) continue;
		let t = n[e];
		n[e] = Uu(r) && Uu(t) ? Wu(t, r) : r;
	}
	return n;
};
function Gu({ children: e, translations: t }) {
	let n = D(() => Wu(h, t), [t]), r = (e, t = {}) => {
		let r = Hu(e, n);
		if (r === void 0) return console.warn(`Translation key ${e} not found`), e;
		for (let [e, n] of Object.entries(t)) r = r.replace(`{{${e}}}`, n.toString());
		return r;
	};
	return /* @__PURE__ */ A(Vu.Provider, {
		value: {
			...n,
			t: r
		},
		children: e
	});
}
var Ku = {
	...h,
	t: (e, t = {}) => {
		let n = Hu(e, h);
		if (n === void 0) return e;
		for (let [e, r] of Object.entries(t)) n = n.replace(`{{${e}}}`, r.toString());
		return n;
	}
};
function qu() {
	return T(Vu) ?? Ku;
}
var Ju = (e) => e, Yu = a({
	base: "flex h-5 min-w-[1ch] items-center justify-center rounded-xs border border-solid py-0.5 font-sans text-sm font-semibold leading-none",
	variants: { variant: {
		default: "border-f1-border-secondary bg-f1-background-tertiary text-f1-foreground-secondary",
		inverse: "border-f1-border-inverse text-f1-foreground-inverse-secondary"
	} },
	defaultVariants: { variant: "default" }
}), Xu = /* @__PURE__ */ new Set([
	"cmd",
	"option",
	"ctrl"
]), Zu = {
	mac: {
		cmd: "⌘",
		option: "⌥",
		ctrl: "⌃"
	},
	windows: {
		ctrl: "Ctrl",
		cmd: Bu,
		option: "Alt"
	},
	linux: {
		ctrl: "^",
		cmd: "Meta",
		option: "Alt"
	}
}, Qu = (e) => Xu.has(e);
function $u({ keys: e, variant: t }) {
	let n = c(), r = qu();
	if (n === "unknown" || n === "mobile") return null;
	let i = Zu[n];
	return /* @__PURE__ */ oe("div", {
		className: "flex flex-wrap items-center gap-0.5",
		children: [/* @__PURE__ */ A("span", {
			className: "sr-only",
			children: r.shortcut
		}), e.map((e, n) => {
			let r = e.toLowerCase(), a = Qu(r), o = a ? i[r] : e, s = typeof o != "string";
			return /* @__PURE__ */ A("kbd", {
				className: u(Yu({ variant: t }), a ? "" : "uppercase", s ? "w-5 px-0.5" : "min-w-5 px-1"),
				children: s ? /* @__PURE__ */ A(du, {
					icon: o,
					size: "sm"
				}) : o
			}, n);
		})]
	});
}
var ed = s(ce("Shortcut", $u));
//#endregion
//#region src/experimental/Overlays/Tooltip/index.tsx
function td({ label: e, description: t, items: n, children: r, shortcut: i, instant: a = !1, delay: o = 700, onOpen: s }) {
	let [c, l] = k(!1), h = O(null), g = D(() => a ? 100 : o, [o, a]), _ = !!(e || t || n?.length || i), v = w(() => {
		h.current &&= (clearTimeout(h.current), null);
	}, []), y = w(() => {
		v(), l(!1);
	}, [v]), b = w(() => {
		_ && (s?.(), v(), h.current = setTimeout(() => l(!0), g));
	}, [
		v,
		_,
		s,
		g
	]);
	E(() => y, [y]);
	let x = w((e) => {
		try {
			return e.matches(":focus-visible");
		} catch {
			return !1;
		}
	}, []);
	return /* @__PURE__ */ A(ae, { children: /* @__PURE__ */ A(p, {
		delayDuration: g,
		disableHoverableContent: a,
		children: /* @__PURE__ */ oe(m, {
			open: _ && c,
			onOpenChange: (e) => {
				e || y();
			},
			children: [/* @__PURE__ */ A(d, {
				asChild: !0,
				className: "pointer-events-auto",
				onPointerEnter: (e) => {
					e.pointerType !== "touch" && b();
				},
				onPointerLeave: () => y(),
				onPointerDown: () => y(),
				onFocus: (e) => {
					_ && (x(e.currentTarget) ? (s?.(), l(!0)) : y());
				},
				onBlur: () => y(),
				children: zu(r)
			}), /* @__PURE__ */ A(f, {
				className: u("max-w-xs", i && "pr-1.5", a && "pointer-events-none"),
				children: /* @__PURE__ */ oe("div", {
					className: "flex flex-col gap-0.5",
					children: [
						/* @__PURE__ */ oe("div", {
							className: "flex items-center gap-2",
							children: [e && /* @__PURE__ */ A("p", {
								className: "font-semibold",
								children: e
							}), i && /* @__PURE__ */ A(ed, {
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
							children: n.map((e, t) => /* @__PURE__ */ A("li", { children: typeof e == "string" ? e : /* @__PURE__ */ oe(ae, { children: [/* @__PURE__ */ A("span", {
								className: "font-semibold",
								children: e.title
							}), e.description && /* @__PURE__ */ oe(ae, { children: [" ", e.description] })] }) }, `${t}-${typeof e == "string" ? e : e.title}`))
						})
					]
				})
			})]
		})
	}) });
}
var nd = ["delay", "onOpen"], rd = s(ce("Tooltip", (e) => {
	let t = nd.reduce((e, t) => {
		let { [t]: n, ...r } = e;
		return r;
	}, e);
	return /* @__PURE__ */ A(td, { ...t });
})), id = "bg-f1-background-secondary hover:bg-f1-background-secondary-hover !px-1.5 font-medium text-f1-foreground rounded-xs no-underline transition-colors", ad = `${id} focus:outline focus:outline-1 focus:outline-offset-1 focus:outline-f1-border-selected-bold`, od = "group relative inline-flex items-center justify-center gap-1 whitespace-nowrap rounded border-none p-0 text-base font-medium shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] transition-colors [&_.main]:transform-gpu [&_.main]:transition-transform [&_.main]:duration-100 active:[&_.main]:translate-y-px active:[&_.main]:scale-[0.97] [&_.main]:flex [&_.main]:items-center [&_.main]:justify-center disabled:opacity-30 disabled:cursor-not-allowed [&[aria-disabled=true]]:pointer-events-none [&[aria-disabled=true]]:cursor-not-allowed [&[aria-disabled=true]]:opacity-30 no-underline [&_.main]:z-20", sd = "relative flex-row font-medium [&[aria-disabled=true]]:pointer-events-none [&[aria-disabled=true]]:cursor-not-allowed [&[aria-disabled=true]]:opacity-30 transition-colors", cd = a({
	base: "inline-flex items-center gap-1 text-base font-medium transition-colors",
	variants: {
		variant: {
			default: u(od, "bg-f1-background-accent-bold text-f1-foreground-inverse shadow-[0_2px_6px_-1px_rgba(13,22,37,.10),inset_0_-2px_4px_rgba(13,22,37,.08)] after:pointer-events-none after:absolute after:inset-0 after:rounded after:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)] after:content-[''] hover:bg-f1-background-accent-bold-hover", "active:bg-f1-background-accent-bold-hover active:shadow-[0_-2px_6px_-1px_rgba(13,22,37,.10)] active:after:shadow-[inset_0_3px_6px_0_rgba(13,22,37,.2)]", "data-[pressed=true]:bg-f1-background-accent-bold-hover data-[pressed=true]:shadow-[0_-2px_6px_-1px_rgba(13,22,37,.10)] data-[pressed=true]:after:shadow-[inset_0_3px_6px_0_rgba(13,22,37,.2)]"),
			outline: u(od, "bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary text-f1-foreground after:pointer-events-none after:absolute after:inset-0 after:rounded after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] hover:bg-f1-background-tertiary hover:after:opacity-70 hover:after:ring-f1-border-hover", "active:bg-f1-background-tertiary active:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] active:after:opacity-70 active:after:ring-f1-border-hover", "data-[pressed=true]:bg-f1-background-tertiary data-[pressed=true]:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] data-[pressed=true]:after:opacity-70 data-[pressed=true]:after:ring-f1-border-hover"),
			neutral: u(od, "bg-f1-background-secondary text-f1-foreground hover:bg-f1-background-secondary-hover", "active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_8px_0_rgba(13,22,37,.16)]", "data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_8px_0_rgba(13,22,37,.16)]"),
			critical: u(od, "bg-f1-background-secondary text-f1-foreground-critical after:pointer-events-none after:absolute after:inset-0 after:rounded after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] hover:bg-f1-background-critical-bold hover:text-f1-foreground-inverse hover:after:ring-transparent dark:bg-transparent dark:hover:bg-f1-background-critical-bold", "active:bg-f1-background-critical-bold active:text-f1-foreground-inverse active:after:shadow-[inset_0_3px_6px_0_rgba(13,22,37,.2)] active:after:ring-transparent", "data-[pressed=true]:bg-f1-background-critical-bold data-[pressed=true]:text-f1-foreground-inverse data-[pressed=true]:after:shadow-[inset_0_3px_6px_0_rgba(13,22,37,.2)] data-[pressed=true]:after:ring-transparent"),
			ghost: u(od, "bg-transparent text-f1-foreground shadow-none hover:bg-f1-background-secondary-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)]", "active:bg-f1-background-secondary-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)]", "data-[pressed=true]:bg-f1-background-secondary-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)]"),
			promote: u(od, "bg-f1-background-promote text-f1-foreground shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(245,165,28,.15)] after:pointer-events-none after:absolute after:inset-0 after:rounded after:ring-1 after:ring-inset after:ring-f1-border-promote after:transition-all after:content-[''] hover:bg-f1-background-promote-hover dark:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.30)]", "active:shadow-[inset_0_2px_4px_0_rgba(206,139,24,.5)]", "data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(206,139,24,.5)]"),
			outlinePromote: u(od, "bg-f1-background-inverse-secondary dark:bg-f1-background-tertiary text-f1-foreground after:pointer-events-none after:absolute after:inset-0 after:rounded after:ring-1 after:ring-inset after:ring-f1-border after:transition-all after:content-[''] hover:bg-f1-background-tertiary hover:after:opacity-70 hover:after:ring-f1-border-hover", "active:bg-f1-background-tertiary active:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] active:after:opacity-70 active:after:ring-f1-border-hover", "data-[pressed=true]:bg-f1-background-tertiary data-[pressed=true]:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] data-[pressed=true]:after:opacity-70 data-[pressed=true]:after:ring-f1-border-hover"),
			link: u(sd, "text-f1-foreground underline decoration-f1-border-hover decoration-1 underline-offset-[5px] visited:text-f1-foreground hover:text-f1-foreground hover:decoration-f1-border-bold active:text-f1-foreground"),
			unstyled: u(sd, "text-inherit no-underline"),
			mention: u(sd, id),
			selected: u(od, "bg-f1-background-selected text-f1-icon-selected shadow-none hover:bg-f1-background-selected-hover hover:text-f1-icon-selected-hover hover:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)]", "active:bg-f1-background-selected-hover active:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)]", "data-[pressed=true]:bg-f1-background-selected-hover data-[pressed=true]:shadow-[inset_0_2px_4px_0_rgba(13,22,37,.1)]"),
			ai: u(od, "bg-f1-border text-f1-foreground transition-colors duration-200", "[--gradient-angle:0deg]", "hover:bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] hover:before:opacity-100", "hover:animate-rotate-gradient", "before:pointer-events-none before:absolute before:inset-px before:z-10 before:rounded-[9px] before:bg-f1-background before:shadow-[0_2px_6px_-1px_rgba(13,22,37,.04),inset_0_-2px_4px_rgba(13,22,37,.04)] before:content-['']", "after:pointer-events-none after:absolute after:inset-0 after:translate-y-px after:scale-90 after:animate-rotate-gradient after:rounded after:bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))] after:opacity-0 after:blur-sm after:content-[''] after:[transition:transform_200ms,opacity_200ms] hover:after:scale-100 hover:after:opacity-80", "active:bg-f1-background-tertiary active:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)]", "data-[pressed=true]:bg-f1-background-tertiary data-[pressed=true]:shadow-[inset_0_2px_6px_0_rgba(13,22,37,.15)] data-[pressed=true]:after:opacity-70 data-[pressed=true]:after:ring-f1-border-hover")
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
}), ld = a({
	variants: { size: {
		sm: "rounded-sm text-base before:rounded-[7px] [&_.main]:h-6 [&_.main]:px-2",
		md: "rounded text-base before:rounded-[9px] [&_.main]:h-8 [&_.main]:px-3",
		lg: "rounded-md text-lg before:rounded-[11px] [&_.main]:h-10 [&_.main]:px-4"
	} },
	defaultVariants: { size: "md" }
}), ud = a({
	base: "rounded-xs p-0",
	variants: { size: {
		sm: "text-base",
		md: "text-base",
		lg: "text-lg"
	} },
	defaultVariants: { size: "md" }
}), dd = a({
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
}), fd = a({
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
export { jn as $, iu as A, Ms as B, Ou as C, du as D, pu as E, Cl as F, li as G, Wa as H, Sl as I, ai as J, ci as K, qc as L, Ul as M, Tl as N, uu as O, wl as P, W as Q, uc as R, Su as S, hu as T, Ta as U, X as V, yi as W, Gr as X, ri as Y, q as Z, Mu as _, fd as a, Je as at, Eu as b, td as c, F as ct, Ju as d, me as dt, Nn as et, qu as f, fe as ft, Ru as g, Lu as h, ce as ht, ud as i, R as it, tu as j, ou as k, ed as l, Ee as lt, Fu as m, le as mt, ld as n, Tn as nt, ad as o, Ge as ot, Bu as p, ue as pt, si as q, dd as r, H as rt, rd as s, I as st, cd as t, En as tt, Gu as u, Se as ut, wu as v, Au as w, yu as x, Tu as y, lc as z };
