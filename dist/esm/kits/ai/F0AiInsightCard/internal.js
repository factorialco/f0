import { cn as e, focusRing as t } from "../../../lib/utils.js";
import { useReducedMotion as n } from "../../../lib/a11y.js";
import { cardVariants as r, headingVariants as i } from "./variants.js";
import { CardHeader as a } from "./components/CardHeader.js";
import { CardMetadata as o } from "./components/CardMetadata.js";
import { CardSparkline as s } from "./components/CardSparkline.js";
import { forwardRef as c, useState as l } from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
import { motion as p } from "motion/react";
//#region src/kits/ai/F0AiInsightCard/internal.tsx
var m = c((c, m) => {
	let { description: h, heading: g, label: _, selected: v = !1, onClick: y, onAskOne: b, className: x, ...S } = c, [C, w] = l(!1), [T, E] = l(!1), D = C || T, O = n(), k = D && !!b, A = {
		duration: O ? 0 : .2,
		ease: [
			.33,
			1,
			.68,
			1
		]
	};
	return /* @__PURE__ */ f("div", {
		className: "relative",
		children: [v && /* @__PURE__ */ f(u, { children: [/* @__PURE__ */ d("div", {
			"data-testid": "selected-border",
			className: e("absolute -inset-px rounded-2xl", "[--gradient-angle:0deg]", "bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))]", "animate-rotate-gradient")
		}), /* @__PURE__ */ d("div", {
			"aria-hidden": !0,
			className: e("pointer-events-none absolute -inset-px rounded-2xl", "[--gradient-angle:0deg]", "bg-[conic-gradient(from_var(--gradient-angle),hsla(229,57%,76%,0.7),hsla(348,80%,50%,0.7),hsla(348,80%,50%,0.7),hsla(18,80%,50%,0.7),hsla(229,57%,76%,0.7),hsla(229,57%,76%,0.7))]", "animate-rotate-gradient opacity-80 blur-sm")
		})] }), /* @__PURE__ */ f("div", {
			ref: m,
			role: y ? "button" : void 0,
			tabIndex: y ? 0 : void 0,
			className: e(r({ selected: v }), v && "relative border-transparent", y && "cursor-pointer select-none", y && t(), x),
			onClick: y ? () => {
				y?.();
			} : void 0,
			onKeyDown: y ? (e) => {
				e.currentTarget === e.target && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), y?.());
			} : void 0,
			onMouseEnter: () => w(!0),
			onMouseLeave: () => w(!1),
			onFocus: () => E(!0),
			onBlur: () => E(!1),
			children: [/* @__PURE__ */ d(a, {
				description: h,
				isRevealed: D,
				onAskOne: b
			}), S.content === "sparkline" ? /* @__PURE__ */ f("div", {
				className: "flex flex-1 flex-col gap-2",
				children: [/* @__PURE__ */ d("span", {
					className: e(i()),
					children: g
				}), /* @__PURE__ */ d(p.div, {
					className: "-ml-4 flex flex-1 flex-col",
					animate: { opacity: +!k },
					transition: A,
					children: /* @__PURE__ */ d(s, {
						data: S.data,
						label: _ ?? "",
						invertStatus: S.invertStatus
					})
				})]
			}) : /* @__PURE__ */ d(o, {
				heading: g,
				label: _,
				shouldFadeContent: k,
				fadeTransition: A,
				...S
			})]
		})]
	});
});
m.displayName = "F0AiInsightCardInternal";
//#endregion
export { m as CardInternal };
