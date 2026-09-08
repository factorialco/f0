import { t as e } from "./clsx-rBDvwE6-.js";
import * as t from "react";
import { useEffect as n, useLayoutEffect as r } from "react";
import * as i from "react-dom";
import a from "react-dom";
import { Fragment as o, jsx as s, jsxs as c } from "react/jsx-runtime";
//#region ../../node_modules/.pnpm/tailwind-merge@2.6.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs
var l = "-", u = (e) => {
	let t = m(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			let n = e.split(l);
			return n[0] === "" && n.length !== 1 && n.shift(), d(n, t) || p(e);
		},
		getConflictingClassGroupIds: (e, t) => {
			let i = n[e] || [];
			return t && r[e] ? [...i, ...r[e]] : i;
		}
	};
}, d = (e, t) => {
	if (e.length === 0) return t.classGroupId;
	let n = e[0], r = t.nextPart.get(n), i = r ? d(e.slice(1), r) : void 0;
	if (i) return i;
	if (t.validators.length === 0) return;
	let a = e.join(l);
	return t.validators.find(({ validator: e }) => e(a))?.classGroupId;
}, f = /^\[(.+)\]$/, p = (e) => {
	if (f.test(e)) {
		let t = f.exec(e)[1], n = t?.substring(0, t.indexOf(":"));
		if (n) return "arbitrary.." + n;
	}
}, m = (e) => {
	let { theme: t, prefix: n } = e, r = {
		nextPart: /* @__PURE__ */ new Map(),
		validators: []
	};
	return v(Object.entries(e.classGroups), n).forEach(([e, n]) => {
		h(n, r, e, t);
	}), r;
}, h = (e, t, n, r) => {
	e.forEach((e) => {
		if (typeof e == "string") {
			let r = e === "" ? t : g(t, e);
			r.classGroupId = n;
			return;
		}
		if (typeof e == "function") {
			if (_(e)) {
				h(e(r), t, n, r);
				return;
			}
			t.validators.push({
				validator: e,
				classGroupId: n
			});
			return;
		}
		Object.entries(e).forEach(([e, i]) => {
			h(i, g(t, e), n, r);
		});
	});
}, g = (e, t) => {
	let n = e;
	return t.split(l).forEach((e) => {
		n.nextPart.has(e) || n.nextPart.set(e, {
			nextPart: /* @__PURE__ */ new Map(),
			validators: []
		}), n = n.nextPart.get(e);
	}), n;
}, _ = (e) => e.isThemeGetter, v = (e, t) => t ? e.map(([e, n]) => [e, n.map((e) => typeof e == "string" ? t + e : typeof e == "object" ? Object.fromEntries(Object.entries(e).map(([e, n]) => [t + e, n])) : e)]) : e, y = (e) => {
	if (e < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), i = (i, a) => {
		n.set(i, a), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
	};
	return {
		get(e) {
			let t = n.get(e);
			if (t !== void 0) return t;
			if ((t = r.get(e)) !== void 0) return i(e, t), t;
		},
		set(e, t) {
			n.has(e) ? n.set(e, t) : i(e, t);
		}
	};
}, b = "!", x = (e) => {
	let { separator: t, experimentalParseClassName: n } = e, r = t.length === 1, i = t[0], a = t.length, o = (e) => {
		let n = [], o = 0, s = 0, c;
		for (let l = 0; l < e.length; l++) {
			let u = e[l];
			if (o === 0) {
				if (u === i && (r || e.slice(l, l + a) === t)) {
					n.push(e.slice(s, l)), s = l + a;
					continue;
				}
				if (u === "/") {
					c = l;
					continue;
				}
			}
			u === "[" ? o++ : u === "]" && o--;
		}
		let l = n.length === 0 ? e : e.substring(s), u = l.startsWith(b);
		return {
			modifiers: n,
			hasImportantModifier: u,
			baseClassName: u ? l.substring(1) : l,
			maybePostfixModifierPosition: c && c > s ? c - s : void 0
		};
	};
	return n ? (e) => n({
		className: e,
		parseClassName: o
	}) : o;
}, S = (e) => {
	if (e.length <= 1) return e;
	let t = [], n = [];
	return e.forEach((e) => {
		e[0] === "[" ? (t.push(...n.sort(), e), n = []) : n.push(e);
	}), t.push(...n.sort()), t;
}, C = (e) => ({
	cache: y(e.cacheSize),
	parseClassName: x(e),
	...u(e)
}), w = /\s+/, T = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i } = t, a = [], o = e.trim().split(w), s = "";
	for (let e = o.length - 1; e >= 0; --e) {
		let t = o[e], { modifiers: c, hasImportantModifier: l, baseClassName: u, maybePostfixModifierPosition: d } = n(t), f = !!d, p = r(f ? u.substring(0, d) : u);
		if (!p) {
			if (!f) {
				s = t + (s.length > 0 ? " " + s : s);
				continue;
			}
			if (p = r(u), !p) {
				s = t + (s.length > 0 ? " " + s : s);
				continue;
			}
			f = !1;
		}
		let m = S(c).join(":"), h = l ? m + b : m, g = h + p;
		if (a.includes(g)) continue;
		a.push(g);
		let _ = i(p, f);
		for (let e = 0; e < _.length; ++e) {
			let t = _[e];
			a.push(h + t);
		}
		s = t + (s.length > 0 ? " " + s : s);
	}
	return s;
};
function E() {
	let e = 0, t, n, r = "";
	for (; e < arguments.length;) (t = arguments[e++]) && (n = D(t)) && (r && (r += " "), r += n);
	return r;
}
var D = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = D(e[r])) && (n && (n += " "), n += t);
	return n;
};
function O(e, ...t) {
	let n, r, i, a = o;
	function o(o) {
		return n = C(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o);
	}
	function s(e) {
		let t = r(e);
		if (t) return t;
		let a = T(e, n);
		return i(e, a), a;
	}
	return function() {
		return a(E.apply(null, arguments));
	};
}
var k = (e) => {
	let t = (t) => t[e] || [];
	return t.isThemeGetter = !0, t;
}, A = /^\[(?:([a-z-]+):)?(.+)\]$/i, j = /^\d+\/\d+$/, M = /*#__PURE__*/ new Set([
	"px",
	"full",
	"screen"
]), N = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, P = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, F = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, I = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ee = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, L = (e) => te(e) || M.has(e) || j.test(e), R = (e) => fe(e, "length", pe), te = (e) => !!e && !Number.isNaN(Number(e)), ne = (e) => fe(e, "number", te), re = (e) => !!e && Number.isInteger(Number(e)), ie = (e) => e.endsWith("%") && te(e.slice(0, -1)), z = (e) => A.test(e), ae = (e) => N.test(e), B = /*#__PURE__*/ new Set([
	"length",
	"size",
	"percentage"
]), oe = (e) => fe(e, B, me), se = (e) => fe(e, "position", me), ce = /*#__PURE__*/ new Set(["image", "url"]), le = (e) => fe(e, ce, ge), ue = (e) => fe(e, "", he), de = () => !0, fe = (e, t, n) => {
	let r = A.exec(e);
	return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}, pe = (e) => P.test(e) && !F.test(e), me = () => !1, he = (e) => I.test(e), ge = (e) => ee.test(e), _e = /*#__PURE__*/ O(() => {
	let e = k("colors"), t = k("spacing"), n = k("blur"), r = k("brightness"), i = k("borderColor"), a = k("borderRadius"), o = k("borderSpacing"), s = k("borderWidth"), c = k("contrast"), l = k("grayscale"), u = k("hueRotate"), d = k("invert"), f = k("gap"), p = k("gradientColorStops"), m = k("gradientColorStopPositions"), h = k("inset"), g = k("margin"), _ = k("opacity"), v = k("padding"), y = k("saturate"), b = k("scale"), x = k("sepia"), S = k("skew"), C = k("space"), w = k("translate"), T = () => [
		"auto",
		"contain",
		"none"
	], E = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	], D = () => [
		"auto",
		z,
		t
	], O = () => [z, t], A = () => [
		"",
		L,
		R
	], j = () => [
		"auto",
		te,
		z
	], M = () => [
		"bottom",
		"center",
		"left",
		"left-bottom",
		"left-top",
		"right",
		"right-bottom",
		"right-top",
		"top"
	], N = () => [
		"solid",
		"dashed",
		"dotted",
		"double",
		"none"
	], P = () => [
		"normal",
		"multiply",
		"screen",
		"overlay",
		"darken",
		"lighten",
		"color-dodge",
		"color-burn",
		"hard-light",
		"soft-light",
		"difference",
		"exclusion",
		"hue",
		"saturation",
		"color",
		"luminosity"
	], F = () => [
		"start",
		"end",
		"center",
		"between",
		"around",
		"evenly",
		"stretch"
	], I = () => [
		"",
		"0",
		z
	], ee = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	], B = () => [te, z];
	return {
		cacheSize: 500,
		separator: ":",
		theme: {
			colors: [de],
			spacing: [L, R],
			blur: [
				"none",
				"",
				ae,
				z
			],
			brightness: B(),
			borderColor: [e],
			borderRadius: [
				"none",
				"",
				"full",
				ae,
				z
			],
			borderSpacing: O(),
			borderWidth: A(),
			contrast: B(),
			grayscale: I(),
			hueRotate: B(),
			invert: I(),
			gap: O(),
			gradientColorStops: [e],
			gradientColorStopPositions: [ie, R],
			inset: D(),
			margin: D(),
			opacity: B(),
			padding: O(),
			saturate: B(),
			scale: B(),
			sepia: I(),
			skew: B(),
			space: O(),
			translate: O()
		},
		classGroups: {
			aspect: [{ aspect: [
				"auto",
				"square",
				"video",
				z
			] }],
			container: ["container"],
			columns: [{ columns: [ae] }],
			"break-after": [{ "break-after": ee() }],
			"break-before": [{ "break-before": ee() }],
			"break-inside": [{ "break-inside": [
				"auto",
				"avoid",
				"avoid-page",
				"avoid-column"
			] }],
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			box: [{ box: ["border", "content"] }],
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			float: [{ float: [
				"right",
				"left",
				"none",
				"start",
				"end"
			] }],
			clear: [{ clear: [
				"left",
				"right",
				"both",
				"none",
				"start",
				"end"
			] }],
			isolation: ["isolate", "isolation-auto"],
			"object-fit": [{ object: [
				"contain",
				"cover",
				"fill",
				"none",
				"scale-down"
			] }],
			"object-position": [{ object: [...M(), z] }],
			overflow: [{ overflow: E() }],
			"overflow-x": [{ "overflow-x": E() }],
			"overflow-y": [{ "overflow-y": E() }],
			overscroll: [{ overscroll: T() }],
			"overscroll-x": [{ "overscroll-x": T() }],
			"overscroll-y": [{ "overscroll-y": T() }],
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			inset: [{ inset: [h] }],
			"inset-x": [{ "inset-x": [h] }],
			"inset-y": [{ "inset-y": [h] }],
			start: [{ start: [h] }],
			end: [{ end: [h] }],
			top: [{ top: [h] }],
			right: [{ right: [h] }],
			bottom: [{ bottom: [h] }],
			left: [{ left: [h] }],
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			z: [{ z: [
				"auto",
				re,
				z
			] }],
			basis: [{ basis: D() }],
			"flex-direction": [{ flex: [
				"row",
				"row-reverse",
				"col",
				"col-reverse"
			] }],
			"flex-wrap": [{ flex: [
				"wrap",
				"wrap-reverse",
				"nowrap"
			] }],
			flex: [{ flex: [
				"1",
				"auto",
				"initial",
				"none",
				z
			] }],
			grow: [{ grow: I() }],
			shrink: [{ shrink: I() }],
			order: [{ order: [
				"first",
				"last",
				"none",
				re,
				z
			] }],
			"grid-cols": [{ "grid-cols": [de] }],
			"col-start-end": [{ col: [
				"auto",
				{ span: [
					"full",
					re,
					z
				] },
				z
			] }],
			"col-start": [{ "col-start": j() }],
			"col-end": [{ "col-end": j() }],
			"grid-rows": [{ "grid-rows": [de] }],
			"row-start-end": [{ row: [
				"auto",
				{ span: [re, z] },
				z
			] }],
			"row-start": [{ "row-start": j() }],
			"row-end": [{ "row-end": j() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": [
				"auto",
				"min",
				"max",
				"fr",
				z
			] }],
			"auto-rows": [{ "auto-rows": [
				"auto",
				"min",
				"max",
				"fr",
				z
			] }],
			gap: [{ gap: [f] }],
			"gap-x": [{ "gap-x": [f] }],
			"gap-y": [{ "gap-y": [f] }],
			"justify-content": [{ justify: ["normal", ...F()] }],
			"justify-items": [{ "justify-items": [
				"start",
				"end",
				"center",
				"stretch"
			] }],
			"justify-self": [{ "justify-self": [
				"auto",
				"start",
				"end",
				"center",
				"stretch"
			] }],
			"align-content": [{ content: [
				"normal",
				...F(),
				"baseline"
			] }],
			"align-items": [{ items: [
				"start",
				"end",
				"center",
				"baseline",
				"stretch"
			] }],
			"align-self": [{ self: [
				"auto",
				"start",
				"end",
				"center",
				"stretch",
				"baseline"
			] }],
			"place-content": [{ "place-content": [...F(), "baseline"] }],
			"place-items": [{ "place-items": [
				"start",
				"end",
				"center",
				"baseline",
				"stretch"
			] }],
			"place-self": [{ "place-self": [
				"auto",
				"start",
				"end",
				"center",
				"stretch"
			] }],
			p: [{ p: [v] }],
			px: [{ px: [v] }],
			py: [{ py: [v] }],
			ps: [{ ps: [v] }],
			pe: [{ pe: [v] }],
			pt: [{ pt: [v] }],
			pr: [{ pr: [v] }],
			pb: [{ pb: [v] }],
			pl: [{ pl: [v] }],
			m: [{ m: [g] }],
			mx: [{ mx: [g] }],
			my: [{ my: [g] }],
			ms: [{ ms: [g] }],
			me: [{ me: [g] }],
			mt: [{ mt: [g] }],
			mr: [{ mr: [g] }],
			mb: [{ mb: [g] }],
			ml: [{ ml: [g] }],
			"space-x": [{ "space-x": [C] }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": [C] }],
			"space-y-reverse": ["space-y-reverse"],
			w: [{ w: [
				"auto",
				"min",
				"max",
				"fit",
				"svw",
				"lvw",
				"dvw",
				z,
				t
			] }],
			"min-w": [{ "min-w": [
				z,
				t,
				"min",
				"max",
				"fit"
			] }],
			"max-w": [{ "max-w": [
				z,
				t,
				"none",
				"full",
				"min",
				"max",
				"fit",
				"prose",
				{ screen: [ae] },
				ae
			] }],
			h: [{ h: [
				z,
				t,
				"auto",
				"min",
				"max",
				"fit",
				"svh",
				"lvh",
				"dvh"
			] }],
			"min-h": [{ "min-h": [
				z,
				t,
				"min",
				"max",
				"fit",
				"svh",
				"lvh",
				"dvh"
			] }],
			"max-h": [{ "max-h": [
				z,
				t,
				"min",
				"max",
				"fit",
				"svh",
				"lvh",
				"dvh"
			] }],
			size: [{ size: [
				z,
				t,
				"auto",
				"min",
				"max",
				"fit"
			] }],
			"font-size": [{ text: [
				"base",
				ae,
				R
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				"thin",
				"extralight",
				"light",
				"normal",
				"medium",
				"semibold",
				"bold",
				"extrabold",
				"black",
				ne
			] }],
			"font-family": [{ font: [de] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				"tighter",
				"tight",
				"normal",
				"wide",
				"wider",
				"widest",
				z
			] }],
			"line-clamp": [{ "line-clamp": [
				"none",
				te,
				ne
			] }],
			leading: [{ leading: [
				"none",
				"tight",
				"snug",
				"normal",
				"relaxed",
				"loose",
				L,
				z
			] }],
			"list-image": [{ "list-image": ["none", z] }],
			"list-style-type": [{ list: [
				"none",
				"disc",
				"decimal",
				z
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"placeholder-color": [{ placeholder: [e] }],
			"placeholder-opacity": [{ "placeholder-opacity": [_] }],
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			"text-color": [{ text: [e] }],
			"text-opacity": [{ "text-opacity": [_] }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...N(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				"auto",
				"from-font",
				L,
				R
			] }],
			"underline-offset": [{ "underline-offset": [
				"auto",
				L,
				z
			] }],
			"text-decoration-color": [{ decoration: [e] }],
			"text-transform": [
				"uppercase",
				"lowercase",
				"capitalize",
				"normal-case"
			],
			"text-overflow": [
				"truncate",
				"text-ellipsis",
				"text-clip"
			],
			"text-wrap": [{ text: [
				"wrap",
				"nowrap",
				"balance",
				"pretty"
			] }],
			indent: [{ indent: O() }],
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				z
			] }],
			whitespace: [{ whitespace: [
				"normal",
				"nowrap",
				"pre",
				"pre-line",
				"pre-wrap",
				"break-spaces"
			] }],
			break: [{ break: [
				"normal",
				"words",
				"all",
				"keep"
			] }],
			hyphens: [{ hyphens: [
				"none",
				"manual",
				"auto"
			] }],
			content: [{ content: ["none", z] }],
			"bg-attachment": [{ bg: [
				"fixed",
				"local",
				"scroll"
			] }],
			"bg-clip": [{ "bg-clip": [
				"border",
				"padding",
				"content",
				"text"
			] }],
			"bg-opacity": [{ "bg-opacity": [_] }],
			"bg-origin": [{ "bg-origin": [
				"border",
				"padding",
				"content"
			] }],
			"bg-position": [{ bg: [...M(), se] }],
			"bg-repeat": [{ bg: ["no-repeat", { repeat: [
				"",
				"x",
				"y",
				"round",
				"space"
			] }] }],
			"bg-size": [{ bg: [
				"auto",
				"cover",
				"contain",
				oe
			] }],
			"bg-image": [{ bg: [
				"none",
				{ "gradient-to": [
					"t",
					"tr",
					"r",
					"br",
					"b",
					"bl",
					"l",
					"tl"
				] },
				le
			] }],
			"bg-color": [{ bg: [e] }],
			"gradient-from-pos": [{ from: [m] }],
			"gradient-via-pos": [{ via: [m] }],
			"gradient-to-pos": [{ to: [m] }],
			"gradient-from": [{ from: [p] }],
			"gradient-via": [{ via: [p] }],
			"gradient-to": [{ to: [p] }],
			rounded: [{ rounded: [a] }],
			"rounded-s": [{ "rounded-s": [a] }],
			"rounded-e": [{ "rounded-e": [a] }],
			"rounded-t": [{ "rounded-t": [a] }],
			"rounded-r": [{ "rounded-r": [a] }],
			"rounded-b": [{ "rounded-b": [a] }],
			"rounded-l": [{ "rounded-l": [a] }],
			"rounded-ss": [{ "rounded-ss": [a] }],
			"rounded-se": [{ "rounded-se": [a] }],
			"rounded-ee": [{ "rounded-ee": [a] }],
			"rounded-es": [{ "rounded-es": [a] }],
			"rounded-tl": [{ "rounded-tl": [a] }],
			"rounded-tr": [{ "rounded-tr": [a] }],
			"rounded-br": [{ "rounded-br": [a] }],
			"rounded-bl": [{ "rounded-bl": [a] }],
			"border-w": [{ border: [s] }],
			"border-w-x": [{ "border-x": [s] }],
			"border-w-y": [{ "border-y": [s] }],
			"border-w-s": [{ "border-s": [s] }],
			"border-w-e": [{ "border-e": [s] }],
			"border-w-t": [{ "border-t": [s] }],
			"border-w-r": [{ "border-r": [s] }],
			"border-w-b": [{ "border-b": [s] }],
			"border-w-l": [{ "border-l": [s] }],
			"border-opacity": [{ "border-opacity": [_] }],
			"border-style": [{ border: [...N(), "hidden"] }],
			"divide-x": [{ "divide-x": [s] }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": [s] }],
			"divide-y-reverse": ["divide-y-reverse"],
			"divide-opacity": [{ "divide-opacity": [_] }],
			"divide-style": [{ divide: N() }],
			"border-color": [{ border: [i] }],
			"border-color-x": [{ "border-x": [i] }],
			"border-color-y": [{ "border-y": [i] }],
			"border-color-s": [{ "border-s": [i] }],
			"border-color-e": [{ "border-e": [i] }],
			"border-color-t": [{ "border-t": [i] }],
			"border-color-r": [{ "border-r": [i] }],
			"border-color-b": [{ "border-b": [i] }],
			"border-color-l": [{ "border-l": [i] }],
			"divide-color": [{ divide: [i] }],
			"outline-style": [{ outline: ["", ...N()] }],
			"outline-offset": [{ "outline-offset": [L, z] }],
			"outline-w": [{ outline: [L, R] }],
			"outline-color": [{ outline: [e] }],
			"ring-w": [{ ring: A() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: [e] }],
			"ring-opacity": [{ "ring-opacity": [_] }],
			"ring-offset-w": [{ "ring-offset": [L, R] }],
			"ring-offset-color": [{ "ring-offset": [e] }],
			shadow: [{ shadow: [
				"",
				"inner",
				"none",
				ae,
				ue
			] }],
			"shadow-color": [{ shadow: [de] }],
			opacity: [{ opacity: [_] }],
			"mix-blend": [{ "mix-blend": [
				...P(),
				"plus-lighter",
				"plus-darker"
			] }],
			"bg-blend": [{ "bg-blend": P() }],
			filter: [{ filter: ["", "none"] }],
			blur: [{ blur: [n] }],
			brightness: [{ brightness: [r] }],
			contrast: [{ contrast: [c] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				ae,
				z
			] }],
			grayscale: [{ grayscale: [l] }],
			"hue-rotate": [{ "hue-rotate": [u] }],
			invert: [{ invert: [d] }],
			saturate: [{ saturate: [y] }],
			sepia: [{ sepia: [x] }],
			"backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
			"backdrop-blur": [{ "backdrop-blur": [n] }],
			"backdrop-brightness": [{ "backdrop-brightness": [r] }],
			"backdrop-contrast": [{ "backdrop-contrast": [c] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [l] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }],
			"backdrop-invert": [{ "backdrop-invert": [d] }],
			"backdrop-opacity": [{ "backdrop-opacity": [_] }],
			"backdrop-saturate": [{ "backdrop-saturate": [y] }],
			"backdrop-sepia": [{ "backdrop-sepia": [x] }],
			"border-collapse": [{ border: ["collapse", "separate"] }],
			"border-spacing": [{ "border-spacing": [o] }],
			"border-spacing-x": [{ "border-spacing-x": [o] }],
			"border-spacing-y": [{ "border-spacing-y": [o] }],
			"table-layout": [{ table: ["auto", "fixed"] }],
			caption: [{ caption: ["top", "bottom"] }],
			transition: [{ transition: [
				"none",
				"all",
				"",
				"colors",
				"opacity",
				"shadow",
				"transform",
				z
			] }],
			duration: [{ duration: B() }],
			ease: [{ ease: [
				"linear",
				"in",
				"out",
				"in-out",
				z
			] }],
			delay: [{ delay: B() }],
			animate: [{ animate: [
				"none",
				"spin",
				"ping",
				"pulse",
				"bounce",
				z
			] }],
			transform: [{ transform: [
				"",
				"gpu",
				"none"
			] }],
			scale: [{ scale: [b] }],
			"scale-x": [{ "scale-x": [b] }],
			"scale-y": [{ "scale-y": [b] }],
			rotate: [{ rotate: [re, z] }],
			"translate-x": [{ "translate-x": [w] }],
			"translate-y": [{ "translate-y": [w] }],
			"skew-x": [{ "skew-x": [S] }],
			"skew-y": [{ "skew-y": [S] }],
			"transform-origin": [{ origin: [
				"center",
				"top",
				"top-right",
				"right",
				"bottom-right",
				"bottom",
				"bottom-left",
				"left",
				"top-left",
				z
			] }],
			accent: [{ accent: ["auto", e] }],
			appearance: [{ appearance: ["none", "auto"] }],
			cursor: [{ cursor: [
				"auto",
				"default",
				"pointer",
				"wait",
				"text",
				"move",
				"help",
				"not-allowed",
				"none",
				"context-menu",
				"progress",
				"cell",
				"crosshair",
				"vertical-text",
				"alias",
				"copy",
				"no-drop",
				"grab",
				"grabbing",
				"all-scroll",
				"col-resize",
				"row-resize",
				"n-resize",
				"e-resize",
				"s-resize",
				"w-resize",
				"ne-resize",
				"nw-resize",
				"se-resize",
				"sw-resize",
				"ew-resize",
				"ns-resize",
				"nesw-resize",
				"nwse-resize",
				"zoom-in",
				"zoom-out",
				z
			] }],
			"caret-color": [{ caret: [e] }],
			"pointer-events": [{ "pointer-events": ["none", "auto"] }],
			resize: [{ resize: [
				"none",
				"y",
				"x",
				""
			] }],
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			"scroll-m": [{ "scroll-m": O() }],
			"scroll-mx": [{ "scroll-mx": O() }],
			"scroll-my": [{ "scroll-my": O() }],
			"scroll-ms": [{ "scroll-ms": O() }],
			"scroll-me": [{ "scroll-me": O() }],
			"scroll-mt": [{ "scroll-mt": O() }],
			"scroll-mr": [{ "scroll-mr": O() }],
			"scroll-mb": [{ "scroll-mb": O() }],
			"scroll-ml": [{ "scroll-ml": O() }],
			"scroll-p": [{ "scroll-p": O() }],
			"scroll-px": [{ "scroll-px": O() }],
			"scroll-py": [{ "scroll-py": O() }],
			"scroll-ps": [{ "scroll-ps": O() }],
			"scroll-pe": [{ "scroll-pe": O() }],
			"scroll-pt": [{ "scroll-pt": O() }],
			"scroll-pr": [{ "scroll-pr": O() }],
			"scroll-pb": [{ "scroll-pb": O() }],
			"scroll-pl": [{ "scroll-pl": O() }],
			"snap-align": [{ snap: [
				"start",
				"end",
				"center",
				"align-none"
			] }],
			"snap-stop": [{ snap: ["normal", "always"] }],
			"snap-type": [{ snap: [
				"none",
				"x",
				"y",
				"both"
			] }],
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			touch: [{ touch: [
				"auto",
				"none",
				"manipulation"
			] }],
			"touch-x": [{ "touch-pan": [
				"x",
				"left",
				"right"
			] }],
			"touch-y": [{ "touch-pan": [
				"y",
				"up",
				"down"
			] }],
			"touch-pz": ["touch-pinch-zoom"],
			select: [{ select: [
				"none",
				"text",
				"all",
				"auto"
			] }],
			"will-change": [{ "will-change": [
				"auto",
				"scroll",
				"contents",
				"transform",
				z
			] }],
			fill: [{ fill: [e, "none"] }],
			"stroke-w": [{ stroke: [
				L,
				R,
				ne
			] }],
			stroke: [{ stroke: [e, "none"] }],
			sr: ["sr-only", "not-sr-only"],
			"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
		},
		conflictingClassGroups: {
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left"
			],
			"inset-x": ["right", "left"],
			"inset-y": ["top", "bottom"],
			flex: [
				"basis",
				"grow",
				"shrink"
			],
			gap: ["gap-x", "gap-y"],
			p: [
				"px",
				"py",
				"ps",
				"pe",
				"pt",
				"pr",
				"pb",
				"pl"
			],
			px: ["pr", "pl"],
			py: ["pt", "pb"],
			m: [
				"mx",
				"my",
				"ms",
				"me",
				"mt",
				"mr",
				"mb",
				"ml"
			],
			mx: ["mr", "ml"],
			my: ["mt", "mb"],
			size: ["w", "h"],
			"font-size": ["leading"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction"
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			"line-clamp": ["display", "overflow"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl"
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-s",
				"border-w-e",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l"
			],
			"border-w-x": ["border-w-r", "border-w-l"],
			"border-w-y": ["border-w-t", "border-w-b"],
			"border-color": [
				"border-color-s",
				"border-color-e",
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l"
			],
			"border-color-x": ["border-color-r", "border-color-l"],
			"border-color-y": ["border-color-t", "border-color-b"],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml"
			],
			"scroll-mx": ["scroll-mr", "scroll-ml"],
			"scroll-my": ["scroll-mt", "scroll-mb"],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl"
			],
			"scroll-px": ["scroll-pr", "scroll-pl"],
			"scroll-py": ["scroll-pt", "scroll-pb"],
			touch: [
				"touch-x",
				"touch-y",
				"touch-pz"
			],
			"touch-x": ["touch"],
			"touch-y": ["touch"],
			"touch-pz": ["touch"]
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] }
	};
});
//#endregion
//#region src/lib/utils.ts
function ve(...t) {
	return _e(e(t));
}
function ye(e) {
	return ve("focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1", e);
}
typeof window < "u" && window.document && window.document.createElement;
function V(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
	return function(r) {
		if (e?.(r), n === !1 || !r.defaultPrevented) return t?.(r);
	};
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.2_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-compose-refs/dist/index.mjs
function be(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function xe(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = be(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : be(e[t], null);
			}
		};
	};
}
function Se(...e) {
	return t.useCallback(xe(...e), e);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-context@1.1.2_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-context/dist/index.mjs
function Ce(e, n = []) {
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
	return a.scopeName = e, [i, we(a, ...n)];
}
function we(...e) {
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
function Te(e) {
	let n = /* @__PURE__ */ De(e), r = t.forwardRef((e, r) => {
		let { children: i, ...a } = e, o = t.Children.toArray(i), c = o.find(Ae);
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
var Ee = /* @__PURE__ */ Te("Slot");
// @__NO_SIDE_EFFECTS__
function De(e) {
	let n = t.forwardRef((e, n) => {
		let { children: r, ...i } = e;
		if (t.isValidElement(r)) {
			let e = Me(r), a = je(i, r.props);
			return r.type !== t.Fragment && (a.ref = n ? xe(n, e) : e), t.cloneElement(r, a);
		}
		return t.Children.count(r) > 1 ? t.Children.only(null) : null;
	});
	return n.displayName = `${e}.SlotClone`, n;
}
var Oe = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function ke(e) {
	let t = ({ children: e }) => /* @__PURE__ */ s(o, { children: e });
	return t.displayName = `${e}.Slottable`, t.__radixId = Oe, t;
}
function Ae(e) {
	return t.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Oe;
}
function je(e, t) {
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
function Me(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-primitive@2.1.3_@types+react-dom@18.3.1_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-primitive/dist/index.mjs
var H = [
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
	let r = /* @__PURE__ */ Te(`Primitive.${n}`), i = t.forwardRef((e, t) => {
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
function Ne(e, t) {
	e && i.flushSync(() => e.dispatchEvent(t));
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-callback-ref@1.1.1_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
function Pe(e) {
	let n = t.useRef(e);
	return t.useEffect(() => {
		n.current = e;
	}), t.useMemo(() => (...e) => n.current?.(...e), []);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-escape-keydown@1.1.1_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs
function Fe(e, n = globalThis?.document) {
	let r = Pe(e);
	t.useEffect(() => {
		let e = (e) => {
			e.key === "Escape" && r(e);
		};
		return n.addEventListener("keydown", e, { capture: !0 }), () => n.removeEventListener("keydown", e, { capture: !0 });
	}, [r, n]);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-dismissable-layer@1.1.11_@types+react-dom@18.3.1_@types+react@18.3.18_r_1a66cbccf1f1ad5632e26da06aa2c05c/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs
var Ie = "DismissableLayer", Le = "dismissableLayer.update", Re = "dismissableLayer.pointerDownOutside", ze = "dismissableLayer.focusOutside", Be, Ve = t.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set()
}), He = t.forwardRef((e, n) => {
	let { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: i, onPointerDownOutside: a, onFocusOutside: o, onInteractOutside: c, onDismiss: l, ...u } = e, d = t.useContext(Ve), [f, p] = t.useState(null), m = f?.ownerDocument ?? globalThis?.document, [, h] = t.useState({}), g = Se(n, (e) => p(e)), _ = Array.from(d.layers), [v] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1), y = _.indexOf(v), b = f ? _.indexOf(f) : -1, x = d.layersWithOutsidePointerEventsDisabled.size > 0, S = b >= y, C = Ge((e) => {
		let t = e.target, n = [...d.branches].some((e) => e.contains(t));
		S && !n && (a?.(e), c?.(e), e.defaultPrevented || l?.());
	}, m), w = Ke((e) => {
		let t = e.target;
		[...d.branches].some((e) => e.contains(t)) || (o?.(e), c?.(e), e.defaultPrevented || l?.());
	}, m);
	return Fe((e) => {
		b === d.layers.size - 1 && (i?.(e), !e.defaultPrevented && l && (e.preventDefault(), l()));
	}, m), t.useEffect(() => {
		if (f) return r && (d.layersWithOutsidePointerEventsDisabled.size === 0 && (Be = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), d.layersWithOutsidePointerEventsDisabled.add(f)), d.layers.add(f), qe(), () => {
			r && d.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Be);
		};
	}, [
		f,
		m,
		r,
		d
	]), t.useEffect(() => () => {
		f && (d.layers.delete(f), d.layersWithOutsidePointerEventsDisabled.delete(f), qe());
	}, [f, d]), t.useEffect(() => {
		let e = () => h({});
		return document.addEventListener(Le, e), () => document.removeEventListener(Le, e);
	}, []), /* @__PURE__ */ s(H.div, {
		...u,
		ref: g,
		style: {
			pointerEvents: x ? S ? "auto" : "none" : void 0,
			...e.style
		},
		onFocusCapture: V(e.onFocusCapture, w.onFocusCapture),
		onBlurCapture: V(e.onBlurCapture, w.onBlurCapture),
		onPointerDownCapture: V(e.onPointerDownCapture, C.onPointerDownCapture)
	});
});
He.displayName = Ie;
var Ue = "DismissableLayerBranch", We = t.forwardRef((e, n) => {
	let r = t.useContext(Ve), i = t.useRef(null), a = Se(n, i);
	return t.useEffect(() => {
		let e = i.current;
		if (e) return r.branches.add(e), () => {
			r.branches.delete(e);
		};
	}, [r.branches]), /* @__PURE__ */ s(H.div, {
		...e,
		ref: a
	});
});
We.displayName = Ue;
function Ge(e, n = globalThis?.document) {
	let r = Pe(e), i = t.useRef(!1), a = t.useRef(() => {});
	return t.useEffect(() => {
		let e = (e) => {
			if (e.target && !i.current) {
				let t = function() {
					Je(Re, r, i, { discrete: !0 });
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
function Ke(e, n = globalThis?.document) {
	let r = Pe(e), i = t.useRef(!1);
	return t.useEffect(() => {
		let e = (e) => {
			e.target && !i.current && Je(ze, r, { originalEvent: e }, { discrete: !1 });
		};
		return n.addEventListener("focusin", e), () => n.removeEventListener("focusin", e);
	}, [n, r]), {
		onFocusCapture: () => i.current = !0,
		onBlurCapture: () => i.current = !1
	};
}
function qe() {
	let e = new CustomEvent(Le);
	document.dispatchEvent(e);
}
function Je(e, t, n, { discrete: r }) {
	let i = n.originalEvent.target, a = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && i.addEventListener(e, t, { once: !0 }), r ? Ne(i, a) : i.dispatchEvent(a);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.1.1_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var U = globalThis?.document ? t.useLayoutEffect : () => {}, Ye = t.useId || (() => void 0), Xe = 0;
function Ze(e) {
	let [n, r] = t.useState(Ye());
	return U(() => {
		e || r((e) => e ?? String(Xe++));
	}, [e]), e || (n ? `radix-${n}` : "");
}
//#endregion
//#region ../../node_modules/.pnpm/@floating-ui+utils@0.2.10/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var Qe = [
	"top",
	"right",
	"bottom",
	"left"
], $e = Math.min, W = Math.max, et = Math.round, tt = Math.floor, G = (e) => ({
	x: e,
	y: e
}), nt = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
}, rt = {
	start: "end",
	end: "start"
};
function it(e, t, n) {
	return W(e, $e(t, n));
}
function K(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function q(e) {
	return e.split("-")[0];
}
function at(e) {
	return e.split("-")[1];
}
function ot(e) {
	return e === "x" ? "y" : "x";
}
function st(e) {
	return e === "y" ? "height" : "width";
}
var ct = /*#__PURE__*/ new Set(["top", "bottom"]);
function J(e) {
	return ct.has(q(e)) ? "y" : "x";
}
function lt(e) {
	return ot(J(e));
}
function ut(e, t, n) {
	n === void 0 && (n = !1);
	let r = at(e), i = lt(e), a = st(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = yt(o)), [o, yt(o)];
}
function dt(e) {
	let t = yt(e);
	return [
		ft(e),
		t,
		ft(t)
	];
}
function ft(e) {
	return e.replace(/start|end/g, (e) => rt[e]);
}
var pt = ["left", "right"], mt = ["right", "left"], ht = ["top", "bottom"], gt = ["bottom", "top"];
function _t(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? mt : pt : t ? pt : mt;
		case "left":
		case "right": return t ? ht : gt;
		default: return [];
	}
}
function vt(e, t, n, r) {
	let i = at(e), a = _t(q(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(ft)))), a;
}
function yt(e) {
	return e.replace(/left|right|bottom|top/g, (e) => nt[e]);
}
function bt(e) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...e
	};
}
function xt(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : bt(e);
}
function St(e) {
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
function Ct(e, t, n) {
	let { reference: r, floating: i } = e, a = J(t), o = lt(t), s = st(o), c = q(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
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
	switch (at(t)) {
		case "start":
			p[o] -= f * (n && l ? -1 : 1);
			break;
		case "end": p[o] += f * (n && l ? -1 : 1);
	}
	return p;
}
async function wt(e, t) {
	t === void 0 && (t = {});
	let { x: n, y: r, platform: i, rects: a, elements: o, strategy: s } = e, { boundary: c = "clippingAncestors", rootBoundary: l = "viewport", elementContext: u = "floating", altBoundary: d = !1, padding: f = 0 } = K(t, e), p = xt(f), m = o[d ? u === "floating" ? "reference" : "floating" : u], h = St(await i.getClippingRect({
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
	}, y = St(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
var Tt = async (e, t, n) => {
	let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = a.filter(Boolean), c = await (o.isRTL == null ? void 0 : o.isRTL(t)), l = await o.getElementRects({
		reference: e,
		floating: t,
		strategy: i
	}), { x: u, y: d } = Ct(l, r, c), f = r, p = {}, m = 0;
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
				detectOverflow: o.detectOverflow ?? wt
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
		}) : y.rects), {x: u, y: d} = Ct(l, f, c)), n = -1);
	}
	return {
		x: u,
		y: d,
		placement: f,
		strategy: i,
		middlewareData: p
	};
}, Et = (e) => ({
	name: "arrow",
	options: e,
	async fn(t) {
		let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = K(e, t) || {};
		if (l == null) return {};
		let d = xt(u), f = {
			x: n,
			y: r
		}, p = lt(i), m = st(p), h = await o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l)), C = S ? S[y] : 0;
		(!C || !await (o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
		let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = $e(d[_], T), D = $e(d[v], T), O = E, k = C - h[m] - D, A = C / 2 - h[m] / 2 + w, j = it(O, A, k), M = !c.arrow && at(i) != null && A !== j && a.reference[m] / 2 - (A < O ? E : D) - h[m] / 2 < 0, N = M ? A < O ? A - O : A - k : 0;
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
}), Dt = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		async fn(t) {
			var n;
			let { placement: r, middlewareData: i, rects: a, initialPlacement: o, platform: s, elements: c } = t, { mainAxis: l = !0, crossAxis: u = !0, fallbackPlacements: d, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: m = !0, ...h } = K(e, t);
			if ((n = i.arrow) != null && n.alignmentOffset) return {};
			let g = q(r), _ = J(o), v = q(o) === o, y = await (s.isRTL == null ? void 0 : s.isRTL(c.floating)), b = d || (v || !m ? [yt(o)] : dt(o)), x = p !== "none";
			!d && x && b.push(...vt(o, m, p, y));
			let S = [o, ...b], C = await s.detectOverflow(t, h), w = [], T = i.flip?.overflows || [];
			if (l && w.push(C[g]), u) {
				let e = ut(r, a, y);
				w.push(C[e[0]], C[e[1]]);
			}
			if (T = [...T, {
				placement: r,
				overflows: w
			}], !w.every((e) => e <= 0)) {
				let e = (i.flip?.index || 0) + 1, t = S[e];
				if (t && (u !== "alignment" || _ === J(t) || T.every((e) => J(e.placement) !== _ || e.overflows[0] > 0))) return {
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
								let t = J(e.placement);
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
function Ot(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	};
}
function kt(e) {
	return Qe.some((t) => e[t] >= 0);
}
var At = function(e) {
	return e === void 0 && (e = {}), {
		name: "hide",
		options: e,
		async fn(t) {
			let { rects: n, platform: r } = t, { strategy: i = "referenceHidden", ...a } = K(e, t);
			switch (i) {
				case "referenceHidden": {
					let e = Ot(await r.detectOverflow(t, {
						...a,
						elementContext: "reference"
					}), n.reference);
					return { data: {
						referenceHiddenOffsets: e,
						referenceHidden: kt(e)
					} };
				}
				case "escaped": {
					let e = Ot(await r.detectOverflow(t, {
						...a,
						altBoundary: !0
					}), n.floating);
					return { data: {
						escapedOffsets: e,
						escaped: kt(e)
					} };
				}
				default: return {};
			}
		}
	};
}, jt = /*#__PURE__*/ new Set(["left", "top"]);
async function Mt(e, t) {
	let { placement: n, platform: r, elements: i } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), o = q(n), s = at(n), c = J(n) === "y", l = jt.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = K(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
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
var Nt = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		async fn(t) {
			var n;
			let { x: r, y: i, placement: a, middlewareData: o } = t, s = await Mt(t, e);
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
}, Pt = function(e) {
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
			} }, ...l } = K(e, t), u = {
				x: n,
				y: r
			}, d = await a.detectOverflow(t, l), f = J(q(i)), p = ot(f), m = u[p], h = u[f];
			if (o) {
				let e = p === "y" ? "top" : "left", t = p === "y" ? "bottom" : "right", n = m + d[e], r = m - d[t];
				m = it(n, m, r);
			}
			if (s) {
				let e = f === "y" ? "top" : "left", t = f === "y" ? "bottom" : "right", n = h + d[e], r = h - d[t];
				h = it(n, h, r);
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
}, Ft = function(e) {
	return e === void 0 && (e = {}), {
		options: e,
		fn(t) {
			let { x: n, y: r, placement: i, rects: a, middlewareData: o } = t, { offset: s = 0, mainAxis: c = !0, crossAxis: l = !0 } = K(e, t), u = {
				x: n,
				y: r
			}, d = J(i), f = ot(d), p = u[f], m = u[d], h = K(s, t), g = typeof h == "number" ? {
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
				let e = f === "y" ? "width" : "height", t = jt.has(q(i)), n = a.reference[d] - a.floating[e] + (t && o.offset?.[d] || 0) + (t ? 0 : g.crossAxis), r = a.reference[d] + a.reference[e] + (t ? 0 : o.offset?.[d] || 0) - (t ? g.crossAxis : 0);
				m < n ? m = n : m > r && (m = r);
			}
			return {
				[f]: p,
				[d]: m
			};
		}
	};
}, It = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		async fn(t) {
			var n, r;
			let { placement: i, rects: a, platform: o, elements: s } = t, { apply: c = () => {}, ...l } = K(e, t), u = await o.detectOverflow(t, l), d = q(i), f = at(i), p = J(i) === "y", { width: m, height: h } = a.floating, g, _;
			d === "top" || d === "bottom" ? (g = d, _ = f === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (_ = d, g = f === "end" ? "top" : "bottom");
			let v = h - u.top - u.bottom, y = m - u.left - u.right, b = $e(h - u[g], v), x = $e(m - u[_], y), S = !t.middlewareData.shift, C = b, w = x;
			if ((n = t.middlewareData.shift) != null && n.enabled.x && (w = y), (r = t.middlewareData.shift) != null && r.enabled.y && (C = v), S && !f) {
				let e = W(u.left, 0), t = W(u.right, 0), n = W(u.top, 0), r = W(u.bottom, 0);
				p ? w = m - 2 * (e !== 0 || t !== 0 ? e + t : W(u.left, u.right)) : C = h - 2 * (n !== 0 || r !== 0 ? n + r : W(u.top, u.bottom));
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
function Lt() {
	return typeof window < "u";
}
function Rt(e) {
	return zt(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Y(e) {
	var t;
	return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function X(e) {
	return ((zt(e) ? e.ownerDocument : e.document) || window.document)?.documentElement;
}
function zt(e) {
	return Lt() ? e instanceof Node || e instanceof Y(e).Node : !1;
}
function Z(e) {
	return Lt() ? e instanceof Element || e instanceof Y(e).Element : !1;
}
function Q(e) {
	return Lt() ? e instanceof HTMLElement || e instanceof Y(e).HTMLElement : !1;
}
function Bt(e) {
	return !Lt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Y(e).ShadowRoot;
}
var Vt = /*#__PURE__*/ new Set(["inline", "contents"]);
function Ht(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = $(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !Vt.has(i);
}
var Ut = /*#__PURE__*/ new Set([
	"table",
	"td",
	"th"
]);
function Wt(e) {
	return Ut.has(Rt(e));
}
var Gt = [":popover-open", ":modal"];
function Kt(e) {
	return Gt.some((t) => {
		try {
			return e.matches(t);
		} catch {
			return !1;
		}
	});
}
var qt = [
	"transform",
	"translate",
	"scale",
	"rotate",
	"perspective"
], Jt = [
	"transform",
	"translate",
	"scale",
	"rotate",
	"perspective",
	"filter"
], Yt = [
	"paint",
	"layout",
	"strict",
	"content"
];
function Xt(e) {
	let t = Qt(), n = Z(e) ? $(e) : e;
	return qt.some((e) => n[e] ? n[e] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || Jt.some((e) => (n.willChange || "").includes(e)) || Yt.some((e) => (n.contain || "").includes(e));
}
function Zt(e) {
	let t = nn(e);
	for (; Q(t) && !en(t);) {
		if (Xt(t)) return t;
		if (Kt(t)) return null;
		t = nn(t);
	}
	return null;
}
function Qt() {
	return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
var $t = /*#__PURE__*/ new Set([
	"html",
	"body",
	"#document"
]);
function en(e) {
	return $t.has(Rt(e));
}
function $(e) {
	return Y(e).getComputedStyle(e);
}
function tn(e) {
	return Z(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.scrollX,
		scrollTop: e.scrollY
	};
}
function nn(e) {
	if (Rt(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || Bt(e) && e.host || X(e);
	return Bt(t) ? t.host : t;
}
function rn(e) {
	let t = nn(e);
	return en(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Q(t) && Ht(t) ? t : rn(t);
}
function an(e, t, n) {
	t === void 0 && (t = []), n === void 0 && (n = !0);
	let r = rn(e), i = r === e.ownerDocument?.body, a = Y(r);
	if (i) {
		let e = on(a);
		return t.concat(a, a.visualViewport || [], Ht(r) ? r : [], e && n ? an(e) : []);
	}
	return t.concat(r, an(r, [], n));
}
function on(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
//#endregion
//#region ../../node_modules/.pnpm/@floating-ui+dom@1.7.4/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function sn(e) {
	let t = $(e), n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0, i = Q(e), a = i ? e.offsetWidth : n, o = i ? e.offsetHeight : r, s = et(n) !== a || et(r) !== o;
	return s && (n = a, r = o), {
		width: n,
		height: r,
		$: s
	};
}
function cn(e) {
	return Z(e) ? e : e.contextElement;
}
function ln(e) {
	let t = cn(e);
	if (!Q(t)) return G(1);
	let n = t.getBoundingClientRect(), { width: r, height: i, $: a } = sn(t), o = (a ? et(n.width) : n.width) / r, s = (a ? et(n.height) : n.height) / i;
	return (!o || !Number.isFinite(o)) && (o = 1), (!s || !Number.isFinite(s)) && (s = 1), {
		x: o,
		y: s
	};
}
var un = /*#__PURE__*/ G(0);
function dn(e) {
	let t = Y(e);
	return !Qt() || !t.visualViewport ? un : {
		x: t.visualViewport.offsetLeft,
		y: t.visualViewport.offsetTop
	};
}
function fn(e, t, n) {
	return t === void 0 && (t = !1), !n || t && n !== Y(e) ? !1 : t;
}
function pn(e, t, n, r) {
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let i = e.getBoundingClientRect(), a = cn(e), o = G(1);
	t && (r ? Z(r) && (o = ln(r)) : o = ln(e));
	let s = fn(a, n, r) ? dn(a) : G(0), c = (i.left + s.x) / o.x, l = (i.top + s.y) / o.y, u = i.width / o.x, d = i.height / o.y;
	if (a) {
		let e = Y(a), t = r && Z(r) ? Y(r) : r, n = e, i = on(n);
		for (; i && r && t !== n;) {
			let e = ln(i), t = i.getBoundingClientRect(), r = $(i), a = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x, o = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
			c *= e.x, l *= e.y, u *= e.x, d *= e.y, c += a, l += o, n = Y(i), i = on(n);
		}
	}
	return St({
		width: u,
		height: d,
		x: c,
		y: l
	});
}
function mn(e, t) {
	let n = tn(e).scrollLeft;
	return t ? t.left + n : pn(X(e)).left + n;
}
function hn(e, t) {
	let n = e.getBoundingClientRect();
	return {
		x: n.left + t.scrollLeft - mn(e, n),
		y: n.top + t.scrollTop
	};
}
function gn(e) {
	let { elements: t, rect: n, offsetParent: r, strategy: i } = e, a = i === "fixed", o = X(r), s = t ? Kt(t.floating) : !1;
	if (r === o || s && a) return n;
	let c = {
		scrollLeft: 0,
		scrollTop: 0
	}, l = G(1), u = G(0), d = Q(r);
	if ((d || !d && !a) && ((Rt(r) !== "body" || Ht(o)) && (c = tn(r)), Q(r))) {
		let e = pn(r);
		l = ln(r), u.x = e.x + r.clientLeft, u.y = e.y + r.clientTop;
	}
	let f = o && !d && !a ? hn(o, c) : G(0);
	return {
		width: n.width * l.x,
		height: n.height * l.y,
		x: n.x * l.x - c.scrollLeft * l.x + u.x + f.x,
		y: n.y * l.y - c.scrollTop * l.y + u.y + f.y
	};
}
function _n(e) {
	return Array.from(e.getClientRects());
}
function vn(e) {
	let t = X(e), n = tn(e), r = e.ownerDocument.body, i = W(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = W(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight), o = -n.scrollLeft + mn(e), s = -n.scrollTop;
	return $(r).direction === "rtl" && (o += W(t.clientWidth, r.clientWidth) - i), {
		width: i,
		height: a,
		x: o,
		y: s
	};
}
var yn = 25;
function bn(e, t) {
	let n = Y(e), r = X(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
	if (i) {
		a = i.width, o = i.height;
		let e = Qt();
		(!e || e && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
	}
	let l = mn(r);
	if (l <= 0) {
		let e = r.ownerDocument, t = e.body, n = getComputedStyle(t), i = e.compatMode === "CSS1Compat" && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0, o = Math.abs(r.clientWidth - t.clientWidth - i);
		o <= yn && (a -= o);
	} else l <= yn && (a += l);
	return {
		width: a,
		height: o,
		x: s,
		y: c
	};
}
var xn = /*#__PURE__*/ new Set(["absolute", "fixed"]);
function Sn(e, t) {
	let n = pn(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = Q(e) ? ln(e) : G(1);
	return {
		width: e.clientWidth * a.x,
		height: e.clientHeight * a.y,
		x: i * a.x,
		y: r * a.y
	};
}
function Cn(e, t, n) {
	let r;
	if (t === "viewport") r = bn(e, n);
	else if (t === "document") r = vn(X(e));
	else if (Z(t)) r = Sn(t, n);
	else {
		let n = dn(e);
		r = {
			x: t.x - n.x,
			y: t.y - n.y,
			width: t.width,
			height: t.height
		};
	}
	return St(r);
}
function wn(e, t) {
	let n = nn(e);
	return n === t || !Z(n) || en(n) ? !1 : $(n).position === "fixed" || wn(n, t);
}
function Tn(e, t) {
	let n = t.get(e);
	if (n) return n;
	let r = an(e, [], !1).filter((e) => Z(e) && Rt(e) !== "body"), i = null, a = $(e).position === "fixed", o = a ? nn(e) : e;
	for (; Z(o) && !en(o);) {
		let t = $(o), n = Xt(o);
		!n && t.position === "fixed" && (i = null), (a ? !n && !i : !n && t.position === "static" && i && xn.has(i.position) || Ht(o) && !n && wn(e, o)) ? r = r.filter((e) => e !== o) : i = t, o = nn(o);
	}
	return t.set(e, r), r;
}
function En(e) {
	let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? Kt(t) ? [] : Tn(t, this._c) : [].concat(n), r], o = a[0], s = a.reduce((e, n) => {
		let r = Cn(t, n, i);
		return e.top = W(r.top, e.top), e.right = $e(r.right, e.right), e.bottom = $e(r.bottom, e.bottom), e.left = W(r.left, e.left), e;
	}, Cn(t, o, i));
	return {
		width: s.right - s.left,
		height: s.bottom - s.top,
		x: s.left,
		y: s.top
	};
}
function Dn(e) {
	let { width: t, height: n } = sn(e);
	return {
		width: t,
		height: n
	};
}
function On(e, t, n) {
	let r = Q(t), i = X(t), a = n === "fixed", o = pn(e, !0, a, t), s = {
		scrollLeft: 0,
		scrollTop: 0
	}, c = G(0);
	function l() {
		c.x = mn(i);
	}
	if (r || !r && !a) {
		if ((Rt(t) !== "body" || Ht(i)) && (s = tn(t)), r) {
			let e = pn(t, !0, a, t);
			c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop;
		} else i && l();
	}
	a && !r && i && l();
	let u = i && !r && !a ? hn(i, s) : G(0);
	return {
		x: o.left + s.scrollLeft - c.x - u.x,
		y: o.top + s.scrollTop - c.y - u.y,
		width: o.width,
		height: o.height
	};
}
function kn(e) {
	return $(e).position === "static";
}
function An(e, t) {
	if (!Q(e) || $(e).position === "fixed") return null;
	if (t) return t(e);
	let n = e.offsetParent;
	return X(e) === n && (n = n.ownerDocument.body), n;
}
function jn(e, t) {
	let n = Y(e);
	if (Kt(e)) return n;
	if (!Q(e)) {
		let t = nn(e);
		for (; t && !en(t);) {
			if (Z(t) && !kn(t)) return t;
			t = nn(t);
		}
		return n;
	}
	let r = An(e, t);
	for (; r && Wt(r) && kn(r);) r = An(r, t);
	return r && en(r) && kn(r) && !Xt(r) ? n : r || Zt(e) || n;
}
var Mn = async function(e) {
	let t = this.getOffsetParent || jn, n = this.getDimensions, r = await n(e.floating);
	return {
		reference: On(e.reference, await t(e.floating), e.strategy),
		floating: {
			x: 0,
			y: 0,
			width: r.width,
			height: r.height
		}
	};
};
function Nn(e) {
	return $(e).direction === "rtl";
}
var Pn = {
	convertOffsetParentRelativeRectToViewportRelativeRect: gn,
	getDocumentElement: X,
	getClippingRect: En,
	getOffsetParent: jn,
	getElementRects: Mn,
	getClientRects: _n,
	getDimensions: Dn,
	getScale: ln,
	isElement: Z,
	isRTL: Nn
};
function Fn(e, t) {
	return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function In(e, t) {
	let n = null, r, i = X(e);
	function a() {
		var e;
		clearTimeout(r), (e = n) == null || e.disconnect(), n = null;
	}
	function o(s, c) {
		s === void 0 && (s = !1), c === void 0 && (c = 1), a();
		let l = e.getBoundingClientRect(), { left: u, top: d, width: f, height: p } = l;
		if (s || t(), !f || !p) return;
		let m = tt(d), h = tt(i.clientWidth - (u + f)), g = tt(i.clientHeight - (d + p)), _ = tt(u), v = {
			rootMargin: -m + "px " + -h + "px " + -g + "px " + -_ + "px",
			threshold: W(0, $e(1, c)) || 1
		}, y = !0;
		function b(t) {
			let n = t[0].intersectionRatio;
			if (n !== c) {
				if (!y) return o();
				n ? o(!1, n) : r = setTimeout(() => {
					o(!1, 1e-7);
				}, 1e3);
			}
			n === 1 && !Fn(l, e.getBoundingClientRect()) && o(), y = !1;
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
function Ln(e, t, n, r) {
	r === void 0 && (r = {});
	let { ancestorScroll: i = !0, ancestorResize: a = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: s = typeof IntersectionObserver == "function", animationFrame: c = !1 } = r, l = cn(e), u = i || a ? [...l ? an(l) : [], ...an(t)] : [];
	u.forEach((e) => {
		i && e.addEventListener("scroll", n, { passive: !0 }), a && e.addEventListener("resize", n);
	});
	let d = l && s ? In(l, n) : null, f = -1, p = null;
	o && (p = new ResizeObserver((e) => {
		let [r] = e;
		r && r.target === l && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
			var e;
			(e = p) == null || e.observe(t);
		})), n();
	}), l && !c && p.observe(l), p.observe(t));
	let m, h = c ? pn(e) : null;
	c && g();
	function g() {
		let t = pn(e);
		h && !Fn(h, t) && n(), h = t, m = requestAnimationFrame(g);
	}
	return n(), () => {
		var e;
		u.forEach((e) => {
			i && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n);
		}), d?.(), (e = p) == null || e.disconnect(), p = null, c && cancelAnimationFrame(m);
	};
}
var Rn = Nt, zn = Pt, Bn = Dt, Vn = It, Hn = At, Un = Et, Wn = Ft, Gn = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = {
		platform: Pn,
		...n
	}, a = {
		...i.platform,
		_c: r
	};
	return Tt(e, t, {
		...i,
		platform: a
	});
}, Kn = typeof document < "u" ? r : n;
function qn(e, t) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (typeof e == "function" && e.toString() === t.toString()) return !0;
	let n, r, i;
	if (e && t && typeof e == "object") {
		if (Array.isArray(e)) {
			if (n = e.length, n !== t.length) return !1;
			for (r = n; r-- !== 0;) if (!qn(e[r], t[r])) return !1;
			return !0;
		}
		if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
		for (r = n; r-- !== 0;) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
		for (r = n; r-- !== 0;) {
			let n = i[r];
			if (!(n === "_owner" && e.$$typeof) && !qn(e[n], t[n])) return !1;
		}
		return !0;
	}
	return e !== e && t !== t;
}
function Jn(e) {
	return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Yn(e, t) {
	let n = Jn(e);
	return Math.round(t * n) / n;
}
function Xn(e) {
	let n = t.useRef(e);
	return Kn(() => {
		n.current = e;
	}), n;
}
function Zn(e) {
	e === void 0 && (e = {});
	let { placement: n = "bottom", strategy: r = "absolute", middleware: a = [], platform: o, elements: { reference: s, floating: c } = {}, transform: l = !0, whileElementsMounted: u, open: d } = e, [f, p] = t.useState({
		x: 0,
		y: 0,
		strategy: r,
		placement: n,
		middlewareData: {},
		isPositioned: !1
	}), [m, h] = t.useState(a);
	qn(m, a) || h(a);
	let [g, _] = t.useState(null), [v, y] = t.useState(null), b = t.useCallback((e) => {
		e !== w.current && (w.current = e, _(e));
	}, []), x = t.useCallback((e) => {
		e !== T.current && (T.current = e, y(e));
	}, []), S = s || g, C = c || v, w = t.useRef(null), T = t.useRef(null), E = t.useRef(f), D = u != null, O = Xn(u), k = Xn(o), A = Xn(d), j = t.useCallback(() => {
		if (!w.current || !T.current) return;
		let e = {
			placement: n,
			strategy: r,
			middleware: m
		};
		k.current && (e.platform = k.current), Gn(w.current, T.current, e).then((e) => {
			let t = {
				...e,
				isPositioned: A.current !== !1
			};
			M.current && !qn(E.current, t) && (E.current = t, i.flushSync(() => {
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
	Kn(() => {
		d === !1 && E.current.isPositioned && (E.current.isPositioned = !1, p((e) => ({
			...e,
			isPositioned: !1
		})));
	}, [d]);
	let M = t.useRef(!1);
	Kn(() => (M.current = !0, () => {
		M.current = !1;
	}), []), Kn(() => {
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
	}), [S, C]), F = t.useMemo(() => {
		let e = {
			position: r,
			left: 0,
			top: 0
		};
		if (!P.floating) return e;
		let t = Yn(P.floating, f.x), n = Yn(P.floating, f.y);
		return l ? {
			...e,
			transform: "translate(" + t + "px, " + n + "px)",
			...Jn(P.floating) >= 1.5 && { willChange: "transform" }
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
		floatingStyles: F
	}), [
		f,
		j,
		N,
		P,
		F
	]);
}
var Qn = (e) => {
	function t(e) {
		return {}.hasOwnProperty.call(e, "current");
	}
	return {
		name: "arrow",
		options: e,
		fn(n) {
			let { element: r, padding: i } = typeof e == "function" ? e(n) : e;
			return r && t(r) ? r.current == null ? {} : Un({
				element: r.current,
				padding: i
			}).fn(n) : r ? Un({
				element: r,
				padding: i
			}).fn(n) : {};
		}
	};
}, $n = (e, t) => ({
	...Rn(e),
	options: [e, t]
}), er = (e, t) => ({
	...zn(e),
	options: [e, t]
}), tr = (e, t) => ({
	...Wn(e),
	options: [e, t]
}), nr = (e, t) => ({
	...Bn(e),
	options: [e, t]
}), rr = (e, t) => ({
	...Vn(e),
	options: [e, t]
}), ir = (e, t) => ({
	...Hn(e),
	options: [e, t]
}), ar = (e, t) => ({
	...Qn(e),
	options: [e, t]
}), or = "Arrow", sr = t.forwardRef((e, t) => {
	let { children: n, width: r = 10, height: i = 5, ...a } = e;
	return /* @__PURE__ */ s(H.svg, {
		...a,
		ref: t,
		width: r,
		height: i,
		viewBox: "0 0 30 10",
		preserveAspectRatio: "none",
		children: e.asChild ? n : /* @__PURE__ */ s("polygon", { points: "0,0 30,0 15,10" })
	});
});
sr.displayName = or;
var cr = sr;
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-size@1.1.1_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-use-size/dist/index.mjs
function lr(e) {
	let [n, r] = t.useState(void 0);
	return U(() => {
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
var ur = "Popper", [dr, fr] = Ce(ur), [pr, mr] = dr(ur), hr = (e) => {
	let { __scopePopper: n, children: r } = e, [i, a] = t.useState(null);
	return /* @__PURE__ */ s(pr, {
		scope: n,
		anchor: i,
		onAnchorChange: a,
		children: r
	});
};
hr.displayName = ur;
var gr = "PopperAnchor", _r = t.forwardRef((e, n) => {
	let { __scopePopper: r, virtualRef: i, ...a } = e, o = mr(gr, r), c = t.useRef(null), l = Se(n, c), u = t.useRef(null);
	return t.useEffect(() => {
		let e = u.current;
		u.current = i?.current || c.current, e !== u.current && o.onAnchorChange(u.current);
	}), i ? null : /* @__PURE__ */ s(H.div, {
		...a,
		ref: l
	});
});
_r.displayName = gr;
var vr = "PopperContent", [yr, br] = dr(vr), xr = t.forwardRef((e, n) => {
	let { __scopePopper: r, side: i = "bottom", sideOffset: a = 0, align: o = "center", alignOffset: c = 0, arrowPadding: l = 0, avoidCollisions: u = !0, collisionBoundary: d = [], collisionPadding: f = 0, sticky: p = "partial", hideWhenDetached: m = !1, updatePositionStrategy: h = "optimized", onPlaced: g, ..._ } = e, v = mr(vr, r), [y, b] = t.useState(null), x = Se(n, (e) => b(e)), [S, C] = t.useState(null), w = lr(S), T = w?.width ?? 0, E = w?.height ?? 0, D = i + (o === "center" ? "" : "-" + o), O = typeof f == "number" ? f : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...f
	}, k = Array.isArray(d) ? d : [d], A = k.length > 0, j = {
		padding: O,
		boundary: k.filter(Tr),
		altBoundary: A
	}, { refs: M, floatingStyles: N, placement: P, isPositioned: F, middlewareData: I } = Zn({
		strategy: "fixed",
		placement: D,
		whileElementsMounted: (...e) => Ln(...e, { animationFrame: h === "always" }),
		elements: { reference: v.anchor },
		middleware: [
			$n({
				mainAxis: a + E,
				alignmentAxis: c
			}),
			u && er({
				mainAxis: !0,
				crossAxis: !1,
				limiter: p === "partial" ? tr() : void 0,
				...j
			}),
			u && nr({ ...j }),
			rr({
				...j,
				apply: ({ elements: e, rects: t, availableWidth: n, availableHeight: r }) => {
					let { width: i, height: a } = t.reference, o = e.floating.style;
					o.setProperty("--radix-popper-available-width", `${n}px`), o.setProperty("--radix-popper-available-height", `${r}px`), o.setProperty("--radix-popper-anchor-width", `${i}px`), o.setProperty("--radix-popper-anchor-height", `${a}px`);
				}
			}),
			S && ar({
				element: S,
				padding: l
			}),
			Er({
				arrowWidth: T,
				arrowHeight: E
			}),
			m && ir({
				strategy: "referenceHidden",
				...j
			})
		]
	}), [ee, L] = Dr(P), R = Pe(g);
	U(() => {
		F && R?.();
	}, [F, R]);
	let te = I.arrow?.x, ne = I.arrow?.y, re = I.arrow?.centerOffset !== 0, [ie, z] = t.useState();
	return U(() => {
		y && z(window.getComputedStyle(y).zIndex);
	}, [y]), /* @__PURE__ */ s("div", {
		ref: M.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...N,
			transform: F ? N.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: ie,
			"--radix-popper-transform-origin": [I.transformOrigin?.x, I.transformOrigin?.y].join(" "),
			...I.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: e.dir,
		children: /* @__PURE__ */ s(yr, {
			scope: r,
			placedSide: ee,
			onArrowChange: C,
			arrowX: te,
			arrowY: ne,
			shouldHideArrow: re,
			children: /* @__PURE__ */ s(H.div, {
				"data-side": ee,
				"data-align": L,
				..._,
				ref: x,
				style: {
					..._.style,
					animation: F ? void 0 : "none"
				}
			})
		})
	});
});
xr.displayName = vr;
var Sr = "PopperArrow", Cr = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, wr = t.forwardRef(function(e, t) {
	let { __scopePopper: n, ...r } = e, i = br(Sr, n), a = Cr[i.placedSide];
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
		children: /* @__PURE__ */ s(cr, {
			...r,
			ref: t,
			style: {
				...r.style,
				display: "block"
			}
		})
	});
});
wr.displayName = Sr;
function Tr(e) {
	return e !== null;
}
var Er = (e) => ({
	name: "transformOrigin",
	options: e,
	fn(t) {
		let { placement: n, rects: r, middlewareData: i } = t, a = i.arrow?.centerOffset !== 0, o = a ? 0 : e.arrowWidth, s = a ? 0 : e.arrowHeight, [c, l] = Dr(n), u = {
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
function Dr(e) {
	let [t, n = "center"] = e.split("-");
	return [t, n];
}
var Or = hr, kr = _r, Ar = xr, jr = wr, Mr = "Portal", Nr = t.forwardRef((e, n) => {
	let { container: r, ...i } = e, [o, c] = t.useState(!1);
	U(() => c(!0), []);
	let l = r || o && globalThis?.document?.body;
	return l ? a.createPortal(/* @__PURE__ */ s(H.div, {
		...i,
		ref: n
	}), l) : null;
});
Nr.displayName = Mr;
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-presence@1.1.5_@types+react-dom@18.3.1_@types+react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-presence/dist/index.mjs
function Pr(e, n) {
	return t.useReducer((e, t) => n[e][t] ?? e, e);
}
var Fr = (e) => {
	let { present: n, children: r } = e, i = Ir(n), a = typeof r == "function" ? r({ present: i.isPresent }) : t.Children.only(r), o = Se(i.ref, Rr(a));
	return typeof r == "function" || i.isPresent ? t.cloneElement(a, { ref: o }) : null;
};
Fr.displayName = "Presence";
function Ir(e) {
	let [n, r] = t.useState(), i = t.useRef(null), a = t.useRef(e), o = t.useRef("none"), [s, c] = Pr(e ? "mounted" : "unmounted", {
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
		let e = Lr(i.current);
		o.current = s === "mounted" ? e : "none";
	}, [s]), U(() => {
		let t = i.current, n = a.current;
		if (n !== e) {
			let r = o.current, i = Lr(t);
			e ? c("MOUNT") : i === "none" || t?.display === "none" ? c("UNMOUNT") : c(n && r !== i ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e;
		}
	}, [e, c]), U(() => {
		if (n) {
			let e, t = n.ownerDocument.defaultView ?? window, r = (r) => {
				let o = Lr(i.current).includes(CSS.escape(r.animationName));
				if (r.target === n && o && (c("ANIMATION_END"), !a.current)) {
					let r = n.style.animationFillMode;
					n.style.animationFillMode = "forwards", e = t.setTimeout(() => {
						n.style.animationFillMode === "forwards" && (n.style.animationFillMode = r);
					});
				}
			}, s = (e) => {
				e.target === n && (o.current = Lr(i.current));
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
function Lr(e) {
	return e?.animationName || "none";
}
function Rr(e) {
	let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
	return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.2.2_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var zr = t.useInsertionEffect || U;
function Br({ prop: e, defaultProp: n, onChange: r = () => {}, caller: i }) {
	let [a, o, s] = Vr({
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
			let n = Hr(t) ? t(e) : t;
			n !== e && s.current?.(n);
		} else o(t);
	}, [
		c,
		e,
		o,
		s
	])];
}
function Vr({ defaultProp: e, onChange: n }) {
	let [r, i] = t.useState(e), a = t.useRef(r), o = t.useRef(n);
	return zr(() => {
		o.current = n;
	}, [n]), t.useEffect(() => {
		a.current !== r && (o.current?.(r), a.current = r);
	}, [r, a]), [
		r,
		i,
		o
	];
}
function Hr(e) {
	return typeof e == "function";
}
//#endregion
//#region ../../node_modules/.pnpm/@radix-ui+react-visually-hidden@1.2.3_@types+react-dom@18.3.1_@types+react@18.3.18_reac_9b3a251cf3aa6057114b082cfda77e0b/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs
var Ur = Object.freeze({
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
}), Wr = "VisuallyHidden", Gr = t.forwardRef((e, t) => /* @__PURE__ */ s(H.span, {
	...e,
	ref: t,
	style: {
		...Ur,
		...e.style
	}
}));
Gr.displayName = Wr;
var Kr = Gr, [qr, Jr] = Ce("Tooltip", [fr]), Yr = fr(), Xr = "TooltipProvider", Zr = 700, Qr = "tooltip.open", [$r, ei] = qr(Xr), ti = (e) => {
	let { __scopeTooltip: n, delayDuration: r = Zr, skipDelayDuration: i = 300, disableHoverableContent: a = !1, children: o } = e, c = t.useRef(!0), l = t.useRef(!1), u = t.useRef(0);
	return t.useEffect(() => {
		let e = u.current;
		return () => window.clearTimeout(e);
	}, []), /* @__PURE__ */ s($r, {
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
ti.displayName = Xr;
var ni = "Tooltip", [ri, ii] = qr(ni), ai = (e) => {
	let { __scopeTooltip: n, children: r, open: i, defaultOpen: a, onOpenChange: o, disableHoverableContent: c, delayDuration: l } = e, u = ei(ni, e.__scopeTooltip), d = Yr(n), [f, p] = t.useState(null), m = Ze(), h = t.useRef(0), g = c ?? u.disableHoverableContent, _ = l ?? u.delayDuration, v = t.useRef(!1), [y, b] = Br({
		prop: i,
		defaultProp: a ?? !1,
		onChange: (e) => {
			e ? (u.onOpen(), document.dispatchEvent(new CustomEvent(Qr))) : u.onClose(), o?.(e);
		},
		caller: ni
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
	}, []), /* @__PURE__ */ s(Or, {
		...d,
		children: /* @__PURE__ */ s(ri, {
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
ai.displayName = ni;
var oi = "TooltipTrigger", si = t.forwardRef((e, n) => {
	let { __scopeTooltip: r, ...i } = e, a = ii(oi, r), o = ei(oi, r), c = Yr(r), l = Se(n, t.useRef(null), a.onTriggerChange), u = t.useRef(!1), d = t.useRef(!1), f = t.useCallback(() => u.current = !1, []);
	return t.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), /* @__PURE__ */ s(kr, {
		asChild: !0,
		...c,
		children: /* @__PURE__ */ s(H.button, {
			"aria-describedby": a.open ? a.contentId : void 0,
			"data-state": a.stateAttribute,
			...i,
			ref: l,
			onPointerMove: V(e.onPointerMove, (e) => {
				e.pointerType !== "touch" && !d.current && !o.isPointerInTransitRef.current && (a.onTriggerEnter(), d.current = !0);
			}),
			onPointerLeave: V(e.onPointerLeave, () => {
				a.onTriggerLeave(), d.current = !1;
			}),
			onPointerDown: V(e.onPointerDown, () => {
				a.open && a.onClose(), u.current = !0, document.addEventListener("pointerup", f, { once: !0 });
			}),
			onFocus: V(e.onFocus, () => {
				u.current || a.onOpen();
			}),
			onBlur: V(e.onBlur, a.onClose),
			onClick: V(e.onClick, a.onClose)
		})
	});
});
si.displayName = oi;
var ci = "TooltipPortal", [li, ui] = qr(ci, { forceMount: void 0 }), di = (e) => {
	let { __scopeTooltip: t, forceMount: n, children: r, container: i } = e, a = ii(ci, t);
	return /* @__PURE__ */ s(li, {
		scope: t,
		forceMount: n,
		children: /* @__PURE__ */ s(Fr, {
			present: n || a.open,
			children: /* @__PURE__ */ s(Nr, {
				asChild: !0,
				container: i,
				children: r
			})
		})
	});
};
di.displayName = ci;
var fi = "TooltipContent", pi = t.forwardRef((e, t) => {
	let n = ui(fi, e.__scopeTooltip), { forceMount: r = n.forceMount, side: i = "top", ...a } = e, o = ii(fi, e.__scopeTooltip);
	return /* @__PURE__ */ s(Fr, {
		present: r || o.open,
		children: o.disableHoverableContent ? /* @__PURE__ */ s(vi, {
			side: i,
			...a,
			ref: t
		}) : /* @__PURE__ */ s(mi, {
			side: i,
			...a,
			ref: t
		})
	});
}), mi = t.forwardRef((e, n) => {
	let r = ii(fi, e.__scopeTooltip), i = ei(fi, e.__scopeTooltip), a = t.useRef(null), o = Se(n, a), [c, l] = t.useState(null), { trigger: u, onClose: d } = r, f = a.current, { onPointerInTransitChange: p } = i, m = t.useCallback(() => {
		l(null), p(!1);
	}, [p]), h = t.useCallback((e, t) => {
		let n = e.currentTarget, r = {
			x: e.clientX,
			y: e.clientY
		}, i = Si(r, xi(r, n.getBoundingClientRect())), a = Ci(t.getBoundingClientRect()), o = Ti([...i, ...a]);
		l(o), p(!0);
	}, [p]);
	return t.useEffect(() => () => m(), [m]), t.useEffect(() => {
		if (u && f) {
			let e = (e) => h(e, f), t = (e) => h(e, u);
			return u.addEventListener("pointerleave", e), f.addEventListener("pointerleave", t), () => {
				u.removeEventListener("pointerleave", e), f.removeEventListener("pointerleave", t);
			};
		}
	}, [
		u,
		f,
		h,
		m
	]), t.useEffect(() => {
		if (c) {
			let e = (e) => {
				let t = e.target, n = {
					x: e.clientX,
					y: e.clientY
				}, r = u?.contains(t) || f?.contains(t), i = !wi(n, c);
				r ? m() : i && (m(), d());
			};
			return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e);
		}
	}, [
		u,
		f,
		c,
		d,
		m
	]), /* @__PURE__ */ s(vi, {
		...e,
		ref: o
	});
}), [hi, gi] = qr(ni, { isInside: !1 }), _i = /* @__PURE__ */ ke("TooltipContent"), vi = t.forwardRef((e, n) => {
	let { __scopeTooltip: r, children: i, "aria-label": a, onEscapeKeyDown: o, onPointerDownOutside: l, ...u } = e, d = ii(fi, r), f = Yr(r), { onClose: p } = d;
	return t.useEffect(() => (document.addEventListener(Qr, p), () => document.removeEventListener(Qr, p)), [p]), t.useEffect(() => {
		if (d.trigger) {
			let e = (e) => {
				e.target?.contains(d.trigger) && p();
			};
			return window.addEventListener("scroll", e, { capture: !0 }), () => window.removeEventListener("scroll", e, { capture: !0 });
		}
	}, [d.trigger, p]), /* @__PURE__ */ s(He, {
		asChild: !0,
		disableOutsidePointerEvents: !1,
		onEscapeKeyDown: o,
		onPointerDownOutside: l,
		onFocusOutside: (e) => e.preventDefault(),
		onDismiss: p,
		children: /* @__PURE__ */ c(Ar, {
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
			children: [/* @__PURE__ */ s(_i, { children: i }), /* @__PURE__ */ s(hi, {
				scope: r,
				isInside: !0,
				children: /* @__PURE__ */ s(Kr, {
					id: d.contentId,
					role: "tooltip",
					children: a || i
				})
			})]
		})
	});
});
pi.displayName = fi;
var yi = "TooltipArrow", bi = t.forwardRef((e, t) => {
	let { __scopeTooltip: n, ...r } = e, i = Yr(n);
	return gi(yi, n).isInside ? null : /* @__PURE__ */ s(jr, {
		...i,
		...r,
		ref: t
	});
});
bi.displayName = yi;
function xi(e, t) {
	let n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), i = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
	switch (Math.min(n, r, i, a)) {
		case a: return "left";
		case i: return "right";
		case n: return "top";
		case r: return "bottom";
		default: throw Error("unreachable");
	}
}
function Si(e, t, n = 5) {
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
function Ci(e) {
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
function wi(e, t) {
	let { x: n, y: r } = e, i = !1;
	for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
		let o = t[e], s = t[a], c = o.x, l = o.y, u = s.x, d = s.y;
		l > r != d > r && n < (u - c) * (r - l) / (d - l) + c && (i = !i);
	}
	return i;
}
function Ti(e) {
	let t = e.slice();
	return t.sort((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : +(e.y > t.y)), Ei(t);
}
function Ei(e) {
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
var Di = ti, Oi = ai, ki = si, Ai = di, ji = pi, Mi = Di, Ni = Oi, Pi = ki, Fi = t.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ s(Ai, { children: /* @__PURE__ */ s(ji, {
	ref: r,
	sideOffset: t,
	className: ve("z-50 overflow-hidden rounded bg-f1-background border border-solid border-f1-border-secondary dark p-2 leading-tight text-f1-foreground-inverse animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[side=bottom]:origin-top data-[side=top]:origin-bottom data-[side=left]:origin-right data-[side=right]:origin-left", "break-words", e),
	...n
}) }));
Fi.displayName = ji.displayName;
//#endregion
export { Ee as A, Ln as C, Pe as D, He as E, V as F, ve as I, ye as L, Ce as M, xe as N, H as O, Se as P, Zn as S, U as T, ir as _, Ur as a, er as b, Nr as c, Ar as d, Or as f, nr as g, ar as h, Pi as i, Te as j, Ne as k, kr as l, lr as m, Fi as n, Br as o, fr as p, Mi as r, Fr as s, Ni as t, jr as u, tr as v, Ze as w, rr as x, $n as y };
