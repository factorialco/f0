import { cn as e } from "../../lib/utils.js";
import { F0Icon as t } from "../F0Icon/index.js";
import { EmojiImage as n } from "../../lib/emojis.js";
import { useTextFormatEnforcer as r } from "../../lib/text.js";
import { Action as i } from "../../ui/Action/Action.js";
import { Counter as a } from "../../ui/Counter/index.js";
import { fontSizeVariants as o } from "./variants.js";
import { ButtonLabel as s } from "./components/ButtonLabel.js";
import { forwardRef as c, useState as l } from "react";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
import { motion as f } from "motion/react";
//#region src/components/F0Button/internal.tsx
var p = f.create(t), m = c(function({ label: c, hideLabel: f, onClick: m, disabled: h, withoutDisabledAppearance: g, loading: _, icon: v, iconPosition: y = "left", emoji: b, emojiMode: x, variant: S = "default", size: C = "md", fontSize: w, append: T, className: E, "aria-label": D, tooltip: O, noAutoTooltip: k, noTitle: A, iconRotate: j = !1, block: M = !1, counterValue: N, ...P }, F) {
	r(c, {
		disallowEmpty: !0,
		disallowEmojis: !0
	}, {
		warn: !0,
		componentName: "F0Button"
	});
	let [I, L] = l(!1), [R, z] = l(!1), [B, V] = l(!1), H = async (e) => {
		let t = m?.(e);
		if (t instanceof Promise) {
			L(!0);
			try {
				await t;
			} finally {
				L(!1);
			}
		}
	}, U = _ || I, W = f || b, G = (c ?? "").toString(), K = N !== void 0 && N > 0, q = C === "sm" ? "sm" : "md", J = S === "default" || S === "critical" && R, Y = w ?? C, X = k ? void 0 : f && c || B && c || "", Z = v ? j ? /* @__PURE__ */ u(p, {
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
	return /* @__PURE__ */ u(i, {
		variant: S,
		size: C,
		disabled: h || U,
		ref: F,
		...P,
		tooltip: O ?? (X === void 0 ? void 0 : { description: X }),
		onClick: H,
		loading: U,
		className: e("max-w-full", M && "w-full", K && {
			sm: "[&_.main]:!pr-1",
			md: "[&_.main]:!pr-2",
			lg: "[&_.main]:!pr-3"
		}[C], g && h && "disabled:pointer-events-none disabled:opacity-100 disabled:cursor-default [&[aria-disabled=true]]:opacity-100 [&[aria-disabled=true]]:cursor-default", E),
		mode: f ? "only" : "default",
		"aria-label": D || P.title || G,
		title: A ? void 0 : P.title || (f ? G : void 0),
		compact: !!W,
		onMouseEnter: () => z(!0),
		onMouseLeave: () => z(!1),
		children: /* @__PURE__ */ d("div", {
			className: e(U && "invisible", "flex min-w-0 flex-1 items-center justify-center gap-1", v && !f && (y === "right" ? "-mr-[3px]" : "-ml-[3px]")),
			children: [
				y === "left" && Z,
				b && /* @__PURE__ */ u(n, {
					emoji: b,
					mode: x,
					size: C === "sm" ? "sm" : "md",
					alt: ""
				}),
				W ? /* @__PURE__ */ u("span", {
					className: "sr-only",
					children: G
				}) : /* @__PURE__ */ u(s, {
					className: e(W && "sr-only", o({ fontSize: Y })),
					label: G,
					onOverflowChange: V
				}),
				y === "right" && Z,
				T,
				" ",
				K && /* @__PURE__ */ u("span", {
					className: e("ml-1 inline-flex items-center", J && "dark"),
					children: /* @__PURE__ */ u(a, {
						value: N,
						size: q,
						type: "default"
					})
				})
			]
		})
	});
});
//#endregion
export { m as ButtonInternal };
