import { t as e } from "./dist-CqnuTXEz.js";
import { n as t } from "./data-testid-0GIWgc6Q.js";
import { $ as n, _ as r, a as i, at as a, c as o, g as s, i as c, m as l, n as u, r as d, t as f, y as p } from "./variants-BhCxKzs5.js";
import { n as m, t as h } from "./utils-CVzxZnoI.js";
import g, { createContext as _, forwardRef as v, useCallback as y, useContext as b, useEffect as x, useMemo as S, useRef as C, useState as w } from "react";
import { Fragment as T, jsx as E, jsxs as D } from "react/jsx-runtime";
//#region src/lib/text.ts
var O = s(), k = (e) => (0, O.parse)(e).length > 0, A = (e, t, n = !1, r = "") => {
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
	x(() => {
		e !== void 0 && t && A(e, t, n.warn ?? !0, n.componentName);
	}, [
		e,
		t,
		n
	]);
}, M = _(void 0), N = ({ children: e, component: t, currentPath: n }) => /* @__PURE__ */ E(M.Provider, {
	value: {
		component: t,
		currentPath: n
	},
	children: e
}), P = () => ({
	controller: () => ({}),
	...b(M)
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
		isActive: y((t, { exact: n = !1 } = { exact: !1 }) => {
			if (e === void 0 || t === void 0) return !1;
			let [r, i] = L(e), [a, o] = L(t);
			return n ? I(r) === I(a) && z(i, o) : `${I(r)}/`.startsWith(`${I(a)}/`) ? o.size > 0 ? R(i, o) : !0 : !1;
		}, [e])
	};
}, V = v(function({ disabled: e, ...t }, n) {
	let { component: r } = P(), { isActive: i } = B(), a = i(t.href, { exact: t.exactMatch }), o = !t.href || e, s = {
		"data-is-active": a,
		...t,
		disabled: o
	}, c = S(() => v(function(e, t) {
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
		className: h("animate-pulse rounded-xs bg-f1-background-secondary", e),
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
], K = (e) => W.includes(e), q = g.forwardRef((t, r) => {
	let a = (e) => "href" in e, { children: s, prepend: l, append: g, prependOutside: _, appendOutside: v, disabled: y, loading: b, pressed: x, className: S, href: C, target: w, variant: O, size: k = "md", mode: A = "default", title: j, compact: M = !1, "aria-label": N, tooltip: P, onMouseEnter: F, onMouseLeave: I, ...L } = t, R = a(t) ? "link" : "default", z = O ?? R, B = f({
		variant: z,
		pressed: x
	}), U = K(z) ? c({ size: k }) : u({ size: k }), W = e({
		variants: { size: {
			sm: "!px-[4px]",
			md: "!px-[6px]",
			lg: "!px-[10px]"
		} },
		defaultVariants: { size: "md" }
	}), G = /* @__PURE__ */ D(T, { children: [/* @__PURE__ */ D("div", {
		className: h("main flex min-w-0 flex-1 items-center justify-center gap-1", M && W({ size: k }), b && "opacity-0", d({
			variant: z,
			mode: A
		})),
		children: [
			l,
			/* @__PURE__ */ E("span", {
				className: "flex min-w-0 flex-1 items-center justify-center",
				children: s
			}),
			g
		]
	}), /* @__PURE__ */ E(n, { children: b && /* @__PURE__ */ E(T, { children: K(z) ? /* @__PURE__ */ E(H, { className: "absolute inset-0 my-auto h-full w-full" }) : /* @__PURE__ */ E("div", {
		className: "absolute inset-0 flex items-center justify-center",
		children: /* @__PURE__ */ E(p.div, {
			className: h(i({
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
		className: h(B, U, m(), S),
		"aria-busy": b,
		"aria-label": N,
		title: j,
		...L
	}, J = a(t) ? /* @__PURE__ */ E(V, {
		...q,
		onClick: t.onClick,
		onFocus: t.onFocus,
		onBlur: t.onBlur,
		onMouseEnter: F,
		onMouseLeave: I,
		ref: r,
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
		ref: r,
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
		className: h("text-f1-foreground", J({
			size: e,
			type: t
		})),
		children: i
	});
}
var X = t(a("Counter", Y)), Z = e({
	variants: { fontSize: {
		xs: "text-base",
		sm: "text-base",
		md: "text-base",
		lg: "text-lg"
	} },
	defaultVariants: { fontSize: "md" }
});
//#endregion
//#region src/components/F0Button/components/ButtonLabel.tsx
function ee({ className: e, label: t, onOverflowChange: n }) {
	let r = C(null);
	return x(function() {
		let e = r.current;
		if (!e) return;
		let t = () => {
			n(e.scrollWidth > e.clientWidth);
		};
		t();
		let i = requestAnimationFrame(t), a = setTimeout(t, 100), o = new ResizeObserver(t);
		return o.observe(e), () => {
			cancelAnimationFrame(i), clearTimeout(a), o.disconnect();
		};
	}, [t, n]), /* @__PURE__ */ E("span", {
		ref: r,
		className: h("block min-w-0 max-w-full overflow-hidden text-ellipsis whitespace-nowrap", e),
		children: t
	});
}
//#endregion
//#region src/components/F0Button/internal.tsx
var te = p.create(r), Q = v(function({ label: e, hideLabel: t, onClick: n, disabled: i, withoutDisabledAppearance: a, loading: o, icon: s, iconPosition: c = "left", emoji: u, emojiMode: d, variant: f = "default", size: p = "md", fontSize: m, append: g, className: _, "aria-label": v, tooltip: y, noAutoTooltip: b, noTitle: x, iconRotate: S = !1, block: C = !1, counterValue: T, ...O }, k) {
	j(e, {
		disallowEmpty: !0,
		disallowEmojis: !0
	}, {
		warn: !0,
		componentName: "F0Button"
	});
	let [A, M] = w(!1), [N, P] = w(!1), [F, I] = w(!1), L = async (e) => {
		let t = n?.(e);
		if (t instanceof Promise) {
			M(!0);
			try {
				await t;
			} finally {
				M(!1);
			}
		}
	}, R = o || A, z = t || u, B = (e ?? "").toString(), V = T !== void 0 && T > 0, H = p === "sm" ? "sm" : "md", U = f === "default" || f === "critical" && N, W = m ?? p, G = b ? void 0 : t && e || F && e || "", K = s ? S ? /* @__PURE__ */ E(te, {
		size: p === "sm" ? "sm" : "md",
		icon: s,
		animate: {
			rotate: N ? 90 : 0,
			scale: N ? [
				1,
				.8,
				1
			] : 1,
			filter: N ? [
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
		size: p === "sm" ? "sm" : "md",
		icon: s
	}) : null;
	return /* @__PURE__ */ E(q, {
		variant: f,
		size: p,
		disabled: i || R,
		ref: k,
		...O,
		tooltip: y ?? (G === void 0 ? void 0 : { description: G }),
		onClick: L,
		loading: R,
		className: h("max-w-full", C && "w-full", V && {
			sm: "[&_.main]:!pr-1",
			md: "[&_.main]:!pr-2",
			lg: "[&_.main]:!pr-3"
		}[p], a && i && "disabled:pointer-events-none disabled:opacity-100 disabled:cursor-default [&[aria-disabled=true]]:opacity-100 [&[aria-disabled=true]]:cursor-default", _),
		mode: t ? "only" : "default",
		"aria-label": v || O.title || B,
		title: x ? void 0 : O.title || (t ? B : void 0),
		compact: !!z,
		onMouseEnter: () => P(!0),
		onMouseLeave: () => P(!1),
		children: /* @__PURE__ */ D("div", {
			className: h(R && "invisible", "flex min-w-0 flex-1 items-center justify-center gap-1", s && !t && (c === "right" ? "-mr-[3px]" : "-ml-[3px]")),
			children: [
				c === "left" && K,
				u && /* @__PURE__ */ E(l, {
					emoji: u,
					mode: d,
					size: p === "sm" ? "sm" : "md",
					alt: ""
				}),
				z ? /* @__PURE__ */ E("span", {
					className: "sr-only",
					children: B
				}) : /* @__PURE__ */ E(ee, {
					className: h(z && "sr-only", Z({ fontSize: W })),
					label: B,
					onOverflowChange: I
				}),
				c === "right" && K,
				g,
				" ",
				V && /* @__PURE__ */ E("span", {
					className: h("ml-1 inline-flex items-center", U && "dark"),
					children: /* @__PURE__ */ E(X, {
						value: T,
						size: H,
						type: "default"
					})
				})
			]
		})
	});
}), ne = [
	"append",
	"className",
	"pressed",
	"compact",
	"noTitle",
	"noAutoTooltip",
	"style",
	"block"
], $ = v((e, t) => {
	let n = ne.reduce((e, t) => {
		let { [t]: n, ...r } = e;
		return r;
	}, e);
	return /* @__PURE__ */ E(Q, {
		...n,
		ref: t
	});
});
$.displayName = "F0Button";
var re = t($), ie = U.filter((e) => e !== "ai"), ae = G;
//#endregion
export { X as a, G as c, N as d, F as f, Q as i, H as l, j as m, ie as n, q as o, B as p, re as r, W as s, ae as t, V as u };
