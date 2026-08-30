import { cn as e } from "../../lib/utils.js";
import { F0Icon as t } from "../F0Icon/index.js";
import { EmojiImage as n } from "../../lib/emojis.js";
import { OneEllipsis as r } from "../../lib/OneEllipsis/OneEllipsis.js";
import { useTextFormatEnforcer as i } from "../../lib/text.js";
import { Action as a } from "../../ui/Action/Action.js";
import { Counter as o } from "../../ui/Counter/index.js";
import { fontSizeVariants as s } from "./variants.js";
import { forwardRef as c, useState as l } from "react";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
import { motion as f } from "motion/react";
//#region src/components/F0Button/internal.tsx
var p = f.create(t), m = c(function({ label: c, hideLabel: f, onClick: m, disabled: h, withoutDisabledAppearance: g, loading: _, icon: v, iconPosition: y = "left", emoji: b, emojiMode: x, variant: S = "default", size: C = "md", fontSize: w, append: T, className: E, "aria-label": D, tooltip: O, noAutoTooltip: k, noTitle: A, iconRotate: j = !1, block: M = !1, counterValue: N, ...P }, F) {
	i(c, {
		disallowEmpty: !0,
		disallowEmojis: !0
	}, {
		warn: !0,
		componentName: "F0Button"
	});
	let [I, L] = l(!1), [R, z] = l(!1), B = async (e) => {
		let t = m?.(e);
		if (t instanceof Promise) {
			L(!0);
			try {
				await t;
			} finally {
				L(!1);
			}
		}
	}, V = _ || I, H = f || b, U = (c ?? "").toString(), W = N !== void 0 && N > 0, G = C === "sm" ? "sm" : "md", K = S === "default" || S === "critical" && R, q = w ?? C, J = v ? j ? /* @__PURE__ */ u(p, {
		size: C === "sm" ? "sm" : "md",
		icon: v,
		animate: {
			rotate: R ? 90 : 0,
			scale: R ? [
				1,
				.8,
				1
			] : 1,
			filter: R ? [
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
	}) : /* @__PURE__ */ u(t, {
		size: C === "sm" ? "sm" : "md",
		icon: v
	}) : null;
	return /* @__PURE__ */ u(a, {
		variant: S,
		size: C,
		disabled: h || V,
		ref: F,
		...P,
		tooltip: O ?? (!k && f && c),
		onClick: B,
		loading: V,
		className: e("max-w-full", M && "w-full", W && {
			sm: "[&_.main]:!pr-1",
			md: "[&_.main]:!pr-2",
			lg: "[&_.main]:!pr-3"
		}[C], g && h && "disabled:pointer-events-none disabled:opacity-100 disabled:cursor-default [&[aria-disabled=true]]:opacity-100 [&[aria-disabled=true]]:cursor-default", E),
		mode: f ? "only" : "default",
		"aria-label": D || P.title || U,
		title: A ? void 0 : P.title || (f ? U : void 0),
		compact: !!H,
		onMouseEnter: () => z(!0),
		onMouseLeave: () => z(!1),
		children: /* @__PURE__ */ d("div", {
			className: e(V && "invisible", "flex min-w-0 flex-1 items-center justify-center gap-1", v && !f && (y === "right" ? "-mr-[3px]" : "-ml-[3px]")),
			children: [
				y === "left" && J,
				b && /* @__PURE__ */ u(n, {
					emoji: b,
					mode: x,
					size: C === "sm" ? "sm" : "md",
					alt: ""
				}),
				H ? /* @__PURE__ */ u("span", {
					className: "sr-only",
					children: U
				}) : /* @__PURE__ */ u(r, {
					className: e(H && "sr-only", s({ fontSize: q })),
					tag: "span",
					children: U
				}),
				y === "right" && J,
				T,
				" ",
				W && /* @__PURE__ */ u("span", {
					className: e("ml-1 inline-flex items-center", K && "dark"),
					children: /* @__PURE__ */ u(o, {
						value: N,
						size: G,
						type: "default"
					})
				})
			]
		})
	});
});
//#endregion
export { m as ButtonInternal };
