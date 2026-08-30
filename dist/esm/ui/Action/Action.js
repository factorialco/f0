import { cn as e, focusRing as t } from "../../lib/utils.js";
import { TooltipInternal as n } from "../../experimental/Overlays/Tooltip/index.js";
import { Link as r } from "../../lib/linkHandler.js";
import { Skeleton as i } from "../skeleton.js";
import { isLinkStyled as a } from "./utils.js";
import { actionVariants as o, buttonSizeVariants as s, iconVariants as c, linkSizeVariants as l, loadingVariants as u } from "./variants.js";
import d from "react";
import { cva as f } from "cva";
import { Fragment as p, jsx as m, jsxs as h } from "react/jsx-runtime";
import { AnimatePresence as g, motion as _ } from "motion/react";
//#region src/ui/Action/Action.tsx
var v = d.forwardRef((d, v) => {
	let y = (e) => "href" in e, { children: b, prepend: x, append: S, prependOutside: C, appendOutside: w, disabled: T, loading: E, pressed: D, className: O, href: k, target: A, variant: j, size: M = "md", mode: N = "default", title: P, compact: F = !1, "aria-label": I, tooltip: L, onMouseEnter: R, onMouseLeave: z, ...B } = d, V = y(d) ? "link" : "default", H = j ?? V, U = o({
		variant: H,
		pressed: D
	}), W = a(H) ? l({ size: M }) : s({ size: M }), G = f({
		variants: { size: {
			sm: "!px-[4px]",
			md: "!px-[6px]",
			lg: "!px-[10px]"
		} },
		defaultVariants: { size: "md" }
	}), K = /* @__PURE__ */ h(p, { children: [/* @__PURE__ */ h("div", {
		className: e("main flex min-w-0 flex-1 items-center justify-center gap-1", F && G({ size: M }), E && "opacity-0", c({
			variant: H,
			mode: N
		})),
		children: [
			x,
			/* @__PURE__ */ m("span", {
				className: "flex min-w-0 flex-1 items-center justify-center",
				children: b
			}),
			S
		]
	}), /* @__PURE__ */ m(g, { children: E && /* @__PURE__ */ m(p, { children: a(H) ? /* @__PURE__ */ m(i, { className: "absolute inset-0 my-auto h-full w-full" }) : /* @__PURE__ */ m("div", {
		className: "absolute inset-0 flex items-center justify-center",
		children: /* @__PURE__ */ m(_.div, {
			className: e(u({
				size: M,
				variant: H
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
		disabled: T,
		className: e(U, W, t(), O),
		"aria-busy": E,
		"aria-label": I,
		title: P,
		...B
	}, J = y(d) ? /* @__PURE__ */ m(r, {
		...q,
		onClick: d.onClick,
		onFocus: d.onFocus,
		onBlur: d.onBlur,
		onMouseEnter: R,
		onMouseLeave: z,
		ref: v,
		href: k,
		target: A,
		rel: A === "_blank" ? "noopener noreferrer" : void 0,
		"aria-disabled": T,
		role: "link",
		children: K
	}) : /* @__PURE__ */ m("button", {
		...q,
		onClick: d.onClick,
		onFocus: d.onFocus,
		onBlur: d.onBlur,
		onMouseEnter: R,
		onMouseLeave: z,
		ref: v,
		"data-pressed": D,
		role: "button",
		children: K
	}), Y = L && typeof L == "object" ? L : L ? { description: L.toString() } : void 0, X = Y ? /* @__PURE__ */ m(n, {
		...Y,
		delay: 1e3,
		children: J
	}) : J;
	return C || w ? /* @__PURE__ */ h("div", {
		className: "flex items-center",
		children: [
			C,
			X,
			w
		]
	}) : X;
});
v.displayName = "Action";
//#endregion
export { v as Action };
