import { t as e } from "./dist-CqnuTXEz.js";
import { d as t, t as n } from "./OneEllipsis-DuhKMtYp.js";
import { D as r, T as i, a, c as o, ht as s, i as c, k as l, lt as u, m as d, n as f, r as p, t as m } from "./variants-BOK7SMP_.js";
import { n as h, t as g } from "./utils-CVzxZnoI.js";
import _, { createContext as v, forwardRef as y, useCallback as b, useContext as x, useEffect as S, useMemo as C, useState as w } from "react";
import { Fragment as T, jsx as E, jsxs as D } from "react/jsx-runtime";
//#region src/lib/text.ts
var O = i(), k = (e) => (0, O.parse)(e).length > 0, A = (e, t, n = !1, r = "") => {
	if (t.disallowEmpty && e.length === 0) {
		let e = `${r}: You need to provide some text that is not empty`;
		if (n) console.warn(e);
		else throw Error(e);
	}
	if (t.maxLength !== void 0 && e.length > t.maxLength) {
		let i = `${r}: "${e}" should have no more than ${t.maxLength} characters`;
		if (n) console.warn(i);
		else throw Error(i);
	}
	if (t.minLength !== void 0 && e.length < t.minLength) {
		let i = `${r}: "${e}" should have at least ${t.minLength} characters`;
		if (n) console.warn(i);
		else throw Error(i);
	}
	if (t.disallowEmojis && k(e)) {
		let t = `${r}: Emojis are not allowed here: "${e}"`;
		if (n) console.warn(t);
		else throw Error(t);
	}
}, j = (e, t, n = {
	warn: void 0,
	componentName: ""
}) => {
	S(() => {
		e !== void 0 && t && A(e, t, n.warn ?? !0, n.componentName);
	}, [
		e,
		t,
		n
	]);
}, M = v(void 0), N = ({ children: e, component: t, currentPath: n }) => /* @__PURE__ */ E(M.Provider, {
	value: {
		component: t,
		currentPath: n
	},
	children: e
}), P = () => ({
	controller: () => ({}),
	...x(M)
}), F = (e) => {
	if (!e || e.startsWith("#") || typeof window > "u") return !1;
	try {
		let t = new URL(e, window.location.href);
		return t.protocol !== "http:" && t.protocol !== "https:" ? !1 : t.hostname !== window.location.hostname;
	} catch {
		return !1;
	}
};
function I(e) {
	return e.endsWith("/") ? e.slice(0, -1) : e;
}
function L(e) {
	let t = e.indexOf("?");
	return t === -1 ? [e, new URLSearchParams()] : [e.slice(0, t), new URLSearchParams(e.slice(t))];
}
function R(e, t) {
	for (let [n, r] of t) if (e.get(n) !== r) return !1;
	return !0;
}
function z(e, t) {
	return R(e, t) && R(t, e);
}
var B = () => {
	let { currentPath: e } = P();
	return {
		currentPath: e,
		isActive: b((t, { exact: n = !1 } = { exact: !1 }) => {
			if (e === void 0 || t === void 0) return !1;
			let [r, i] = L(e), [a, o] = L(t);
			return n ? I(r) === I(a) && z(i, o) : `${I(r)}/`.startsWith(`${I(a)}/`) ? o.size > 0 ? R(i, o) : !0 : !1;
		}, [e])
	};
}, V = y(function({ disabled: e, ...t }, n) {
	let { component: r } = P(), { isActive: i } = B(), a = i(t.href, { exact: t.exactMatch }), o = !t.href || e, s = {
		"data-is-active": a,
		...t,
		disabled: o
	}, c = C(() => y(function(e, t) {
		if (o) {
			let { href: n, target: r, rel: i, download: a, exactMatch: o, ...s } = e;
			return /* @__PURE__ */ E("span", {
				ref: t,
				"aria-disabled": !0,
				...s
			});
		}
		return e.target === "_blank" || !r ? /* @__PURE__ */ E("a", {
			ref: t,
			...e
		}) : r(e, t);
	}), [r, o]);
	return /* @__PURE__ */ E(c, {
		ref: n,
		...s
	});
});
//#endregion
//#region src/ui/skeleton.tsx
function H({ className: e, ...t }) {
	return /* @__PURE__ */ E("div", {
		"data-testid": "skeleton",
		className: g("animate-pulse rounded-xs bg-f1-background-secondary", e),
		...t
	});
}
//#endregion
//#region src/ui/Action/types.ts
var U = [
	"default",
	"outline",
	"critical",
	"neutral",
	"ghost",
	"promote",
	"outlinePromote",
	"ai"
], W = [
	"link",
	"unstyled",
	"mention"
];
[...U, ...W];
var G = [
	"sm",
	"md",
	"lg"
], K = (e) => W.includes(e), q = _.forwardRef((t, n) => {
	let r = (e) => "href" in e, { children: i, prepend: s, append: d, prependOutside: _, appendOutside: v, disabled: y, loading: b, pressed: x, className: S, href: C, target: w, variant: O, size: k = "md", mode: A = "default", title: j, compact: M = !1, "aria-label": N, tooltip: P, onMouseEnter: F, onMouseLeave: I, ...L } = t, R = r(t) ? "link" : "default", z = O ?? R, B = m({
		variant: z,
		pressed: x
	}), U = K(z) ? c({ size: k }) : f({ size: k }), W = e({
		variants: { size: {
			sm: "!px-[4px]",
			md: "!px-[6px]",
			lg: "!px-[10px]"
		} },
		defaultVariants: { size: "md" }
	}), G = /* @__PURE__ */ D(T, { children: [/* @__PURE__ */ D("div", {
		className: g("main flex min-w-0 flex-1 items-center justify-center gap-1", M && W({ size: k }), b && "opacity-0", p({
			variant: z,
			mode: A
		})),
		children: [
			s,
			/* @__PURE__ */ E("span", {
				className: "flex min-w-0 flex-1 items-center justify-center",
				children: i
			}),
			d
		]
	}), /* @__PURE__ */ E(u, { children: b && /* @__PURE__ */ E(T, { children: K(z) ? /* @__PURE__ */ E(H, { className: "absolute inset-0 my-auto h-full w-full" }) : /* @__PURE__ */ E("div", {
		className: "absolute inset-0 flex items-center justify-center",
		children: /* @__PURE__ */ E(l.div, {
			className: g(a({
				size: k,
				variant: z
			})),
			animate: { rotate: 360 },
			transition: {
				duration: 1,
				repeat: Infinity,
				ease: "linear"
			},
			"aria-label": "Loading..."
		})
	}) }) })] }), q = {
		disabled: y,
		className: g(B, U, h(), S),
		"aria-busy": b,
		"aria-label": N,
		title: j,
		...L
	}, J = r(t) ? /* @__PURE__ */ E(V, {
		...q,
		onClick: t.onClick,
		onFocus: t.onFocus,
		onBlur: t.onBlur,
		onMouseEnter: F,
		onMouseLeave: I,
		ref: n,
		href: C,
		target: w,
		rel: w === "_blank" ? "noopener noreferrer" : void 0,
		"aria-disabled": y,
		role: "link",
		children: G
	}) : /* @__PURE__ */ E("button", {
		...q,
		onClick: t.onClick,
		onFocus: t.onFocus,
		onBlur: t.onBlur,
		onMouseEnter: F,
		onMouseLeave: I,
		ref: n,
		"data-pressed": x,
		role: "button",
		children: G
	}), Y = P && typeof P == "object" ? P : P ? { description: P.toString() } : void 0, X = Y ? /* @__PURE__ */ E(o, {
		...Y,
		delay: 1e3,
		children: J
	}) : J;
	return _ || v ? /* @__PURE__ */ D("div", {
		className: "flex items-center",
		children: [
			_,
			X,
			v
		]
	}) : X;
});
q.displayName = "Action";
//#endregion
//#region src/ui/Counter/index.tsx
var J = e({
	base: "inline-flex items-center justify-center whitespace-nowrap rounded-xs text-sm font-medium tabular-nums transition-all",
	variants: {
		size: {
			md: "min-w-5 p-0.5",
			sm: "min-w-4 px-0.5"
		},
		type: {
			default: "bg-f1-background-secondary outline outline-1 outline-f1-border",
			selected: "bg-f1-background-selected-bold text-f1-foreground-inverse",
			bold: "bg-f1-background-accent-bold text-f1-foreground-inverse"
		}
	},
	defaultVariants: {
		size: "md",
		type: "default"
	}
});
function Y({ size: e, type: t, value: n, maxValue: r }) {
	let i = r && n > r ? `+${r}` : n;
	return /* @__PURE__ */ E("div", {
		className: g("text-f1-foreground", J({
			size: e,
			type: t
		})),
		children: i
	});
}
var X = t(s("Counter", Y)), Z = e({
	variants: { fontSize: {
		xs: "text-base",
		sm: "text-base",
		md: "text-base",
		lg: "text-lg"
	} },
	defaultVariants: { fontSize: "md" }
}), ee = l.create(r), Q = y(function({ label: e, hideLabel: t, onClick: i, disabled: a, withoutDisabledAppearance: o, loading: s, icon: c, iconPosition: l = "left", emoji: u, emojiMode: f, variant: p = "default", size: m = "md", fontSize: h, append: _, className: v, "aria-label": y, tooltip: b, noAutoTooltip: x, noTitle: S, iconRotate: C = !1, block: T = !1, counterValue: O, ...k }, A) {
	j(e, {
		disallowEmpty: !0,
		disallowEmojis: !0
	}, {
		warn: !0,
		componentName: "F0Button"
	});
	let [M, N] = w(!1), [P, F] = w(!1), I = async (e) => {
		let t = i?.(e);
		if (t instanceof Promise) {
			N(!0);
			try {
				await t;
			} finally {
				N(!1);
			}
		}
	}, L = s || M, R = t || u, z = (e ?? "").toString(), B = O !== void 0 && O > 0, V = m === "sm" ? "sm" : "md", H = p === "default" || p === "critical" && P, U = h ?? m, W = c ? C ? /* @__PURE__ */ E(ee, {
		size: m === "sm" ? "sm" : "md",
		icon: c,
		animate: {
			rotate: P ? 90 : 0,
			scale: P ? [
				1,
				.8,
				1
			] : 1,
			filter: P ? [
				"blur(0px)",
				"blur(1px)",
				"blur(0px)"
			] : "blur(0px)"
		},
		transition: {
			rotate: {
				duration: .5,
				ease: [
					.77,
					0,
					.13,
					1.52
				]
			},
			scale: {
				duration: .4,
				ease: [
					.65,
					0,
					.35,
					1
				]
			},
			filter: {
				duration: .4,
				ease: [
					.65,
					0,
					.35,
					1
				]
			}
		}
	}) : /* @__PURE__ */ E(r, {
		size: m === "sm" ? "sm" : "md",
		icon: c
	}) : null;
	return /* @__PURE__ */ E(q, {
		variant: p,
		size: m,
		disabled: a || L,
		ref: A,
		...k,
		tooltip: b ?? (!x && t && e),
		onClick: I,
		loading: L,
		className: g("max-w-full", T && "w-full", B && {
			sm: "[&_.main]:!pr-1",
			md: "[&_.main]:!pr-2",
			lg: "[&_.main]:!pr-3"
		}[m], o && a && "disabled:pointer-events-none disabled:opacity-100 disabled:cursor-default [&[aria-disabled=true]]:opacity-100 [&[aria-disabled=true]]:cursor-default", v),
		mode: t ? "only" : "default",
		"aria-label": y || k.title || z,
		title: S ? void 0 : k.title || (t ? z : void 0),
		compact: !!R,
		onMouseEnter: () => F(!0),
		onMouseLeave: () => F(!1),
		children: /* @__PURE__ */ D("div", {
			className: g(L && "invisible", "flex min-w-0 flex-1 items-center justify-center gap-1", c && !t && (l === "right" ? "-mr-[3px]" : "-ml-[3px]")),
			children: [
				l === "left" && W,
				u && /* @__PURE__ */ E(d, {
					emoji: u,
					mode: f,
					size: m === "sm" ? "sm" : "md",
					alt: ""
				}),
				R ? /* @__PURE__ */ E("span", {
					className: "sr-only",
					children: z
				}) : /* @__PURE__ */ E(n, {
					className: g(R && "sr-only", Z({ fontSize: U })),
					tag: "span",
					children: z
				}),
				l === "right" && W,
				_,
				" ",
				B && /* @__PURE__ */ E("span", {
					className: g("ml-1 inline-flex items-center", H && "dark"),
					children: /* @__PURE__ */ E(X, {
						value: O,
						size: V,
						type: "default"
					})
				})
			]
		})
	});
}), te = [
	"append",
	"className",
	"pressed",
	"compact",
	"noTitle",
	"noAutoTooltip",
	"style",
	"block"
], $ = y((e, t) => {
	let n = te.reduce((e, t) => {
		let { [t]: n, ...r } = e;
		return r;
	}, e);
	return /* @__PURE__ */ E(Q, {
		...n,
		ref: t
	});
});
$.displayName = "F0Button";
var ne = t($), re = U.filter((e) => e !== "ai"), ie = G;
//#endregion
export { X as a, G as c, N as d, F as f, Q as i, H as l, j as m, re as n, q as o, B as p, ne as r, W as s, ie as t, V as u };
