import { cn as e, focusRing as t } from "../../../lib/utils.js";
import { F0Icon as n } from "../../F0Icon/index.js";
import { TooltipInternal as r } from "../../../experimental/Overlays/Tooltip/index.js";
import { actionVariants as i, buttonSizeVariants as a } from "../../../ui/Action/variants.js";
import { forwardRef as o, useMemo as s, useState as c } from "react";
import { cva as l } from "cva";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
import { AnimatePresence as f, motion as p } from "motion/react";
import * as m from "@radix-ui/react-toggle";
//#region src/components/F0ButtonToggle/internal/F0ButtonToggle.internal.tsx
var h = l({
	variants: {
		size: {
			sm: "h-6",
			md: "h-8",
			lg: "h-10"
		},
		variant: {
			expanded: "p-2",
			compact: ""
		},
		withBorder: {
			true: "border border-solid border-f1-border",
			false: ""
		},
		selected: {
			true: "",
			false: ""
		}
	},
	compoundVariants: [
		{
			variant: "expanded",
			size: "sm",
			class: "h-[52px] w-[63px] [&_.main]:h-4"
		},
		{
			variant: "expanded",
			size: "md",
			class: "h-[60px] w-[70px] [&_.main]:h-5"
		},
		{
			withBorder: !0,
			selected: !0,
			class: "border-f1-border-selected"
		}
	],
	defaultVariants: {
		size: "md",
		variant: "compact"
	}
}), g = {
	accent: e("bg-[hsl(var(--accent-50)/0.1)] hover:bg-[hsl(var(--accent-50)/0.2)]", "border-[hsl(var(--accent-50)/0.6)]", "text-f1-icon-accent hover:text-f1-icon-accent"),
	critical: e("bg-[hsl(var(--critical-50)/0.1)] hover:bg-[hsl(var(--critical-50)/0.2)]", "border-[hsl(var(--critical-50)/0.6)]", "text-f1-icon-critical hover:text-f1-icon-critical"),
	warning: e("bg-[hsl(var(--warning-50)/0.1)] hover:bg-[hsl(var(--warning-50)/0.2)]", "border-[hsl(var(--warning-50)/0.6)]", "text-f1-icon-warning hover:text-f1-icon-warning"),
	promote: e("bg-[hsl(var(--promote-50)/0.1)] hover:bg-[hsl(var(--promote-50)/0.2)]", "border-[hsl(var(--promote-50)/0.6)]", "text-f1-icon-promote hover:text-f1-icon-promote"),
	info: e("bg-[hsl(var(--info-50)/0.1)] hover:bg-[hsl(var(--info-50)/0.2)]", "border-[hsl(var(--info-50)/0.6)]", "text-f1-icon-info hover:text-f1-icon-info"),
	positive: e("bg-[hsl(var(--positive-50)/0.1)] hover:bg-[hsl(var(--positive-50)/0.2)]", "border-[hsl(var(--positive-50)/0.6)]", "text-f1-icon-positive hover:text-f1-icon-positive"),
	"mood-super-negative": e("bg-[hsl(var(--mood-super-negative)/0.1)] hover:bg-[hsl(var(--mood-super-negative)/0.2)]", "border-[hsl(var(--mood-super-negative)/0.6)]", "text-f1-icon-mood-super-negative hover:text-f1-icon-mood-super-negative"),
	"mood-negative": e("bg-[hsl(var(--mood-negative)/0.1)] hover:bg-[hsl(var(--mood-negative)/0.2)]", "border-[hsl(var(--mood-negative)/0.6)]", "text-f1-icon-mood-negative hover:text-f1-icon-mood-negative"),
	"mood-neutral": e("bg-[hsl(var(--mood-neutral)/0.1)] hover:bg-[hsl(var(--mood-neutral)/0.2)]", "border-[hsl(var(--mood-neutral)/0.6)]", "text-f1-icon-mood-neutral hover:text-f1-icon-mood-neutral"),
	"mood-positive": e("bg-[hsl(var(--mood-positive)/0.1)] hover:bg-[hsl(var(--mood-positive)/0.2)]", "border-[hsl(var(--mood-positive)/0.6)]", "text-f1-icon-mood-positive hover:text-f1-icon-mood-positive"),
	"mood-super-positive": e("bg-[hsl(var(--mood-super-positive)/0.1)] hover:bg-[hsl(var(--mood-super-positive)/0.2)]", "border-[hsl(var(--mood-super-positive)/0.6)]", "text-f1-icon-mood-super-positive hover:text-f1-icon-mood-super-positive")
}, _ = "text-f1-icon", v = l({ variants: { size: {
	sm: "text-xs",
	md: "text-sm",
	lg: "text-sm"
} } }), y = o(({ onSelectedChange: o, selected: l, label: y, disabled: b = !1, icon: x, size: S = "md", variant: C = "compact", tooltip: w, color: T, withBorder: E = !1, className: D, defaultSelected: O = !1, ...k }, A) => {
	let j = !Array.isArray(x), [M, N] = j ? [x, x] : x, [P, F] = Array.isArray(y) ? y : [y, y], I = s(() => j ? void 0 : {
		initial: {
			opacity: 0,
			scale: .8
		},
		animate: {
			opacity: 1,
			scale: 1
		},
		exit: {
			opacity: 0,
			scale: .6
		},
		transition: {
			duration: .25,
			ease: "easeOut"
		}
	}, [j]), [L, R] = c(O), z = l !== void 0, B = {
		selected: z ? l : L,
		onSelectedChange: z ? o : R
	}, V = B.selected ? F : P, H = s(() => C === "expanded" && S === "lg" ? (console.warn("F0ButtonToggle: lg size is not supported for expanded variant"), "md") : S, [S, C]), U = typeof w == "object" ? w : w ? { description: w } : void 0, W = /* @__PURE__ */ d(m.Root, {
		ref: A,
		pressed: B.selected,
		onPressedChange: B.onSelectedChange,
		disabled: b,
		"aria-label": V,
		title: V,
		className: e("aspect-square px-0", "flex flex-col items-center justify-center gap-2", t(), i({ variant: B.selected ? "selected" : "ghost" }), a({ size: H }), h({
			size: H,
			variant: C,
			withBorder: E,
			selected: B.selected
		}), T && (B.selected ? g[T] : _), D),
		...k,
		"data-state": B.selected ? "on" : "off",
		children: [/* @__PURE__ */ u(f, {
			initial: !1,
			children: /* @__PURE__ */ u("div", {
				className: "main relative flex flex-col items-center justify-center",
				children: B.selected ? /* @__PURE__ */ u(p.div, {
					className: "absolute flex items-center justify-center",
					...I,
					children: /* @__PURE__ */ u(n, {
						icon: N,
						size: H
					})
				}, "icon-on") : /* @__PURE__ */ u(p.div, {
					className: "absolute flex items-center justify-center",
					...I,
					children: /* @__PURE__ */ u(n, {
						icon: M,
						size: H
					})
				}, "icon-off")
			})
		}), C === "expanded" && /* @__PURE__ */ u(f, {
			initial: !1,
			children: /* @__PURE__ */ u("span", {
				className: e("max-w-full truncate", v({ size: H })),
				children: V
			})
		})]
	});
	return U ? /* @__PURE__ */ u(r, {
		...U,
		children: W
	}) : W;
});
y.displayName = "F0ButtonToggleInternal";
//#endregion
export { y as F0ButtonToggleInternal };
