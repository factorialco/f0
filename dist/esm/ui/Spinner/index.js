import { withDataTestId as e } from "../../lib/data-testid/index.js";
import { experimentalComponent as t } from "../../lib/experimental.js";
import { cn as n } from "../../lib/utils.js";
import { cva as r } from "cva";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
import { motion as o } from "motion/react";
//#region src/ui/Spinner/index.tsx
var s = r({
	base: "flex select-none items-center justify-center text-f1-foreground-secondary",
	variants: { size: {
		small: "h-4 w-4 [&_circle]:stroke-[4]",
		medium: "h-8 w-8 [&_circle]:stroke-[2.6]",
		large: "h-12 w-12 [&_circle]:stroke-2"
	} },
	defaultVariants: { size: "medium" }
});
function c({ size: e, className: t }) {
	return /* @__PURE__ */ i("div", {
		className: n(s({
			size: e,
			className: t
		})),
		"aria-live": "polite",
		"aria-busy": !0,
		children: /* @__PURE__ */ a("svg", {
			viewBox: "0 0 32 32",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			className: "h-full w-full",
			children: [/* @__PURE__ */ i("circle", {
				cx: "16",
				cy: "16",
				r: "12",
				className: "stroke-f1-background-secondary"
			}), /* @__PURE__ */ i(o.circle, {
				cx: "16",
				cy: "16",
				r: "12",
				stroke: "currentColor",
				strokeLinecap: "round",
				strokeDasharray: "1 80",
				className: "opacity-50",
				initial: {
					rotate: 0,
					originX: "50%",
					originY: "50%"
				},
				animate: {
					rotate: [
						0,
						450,
						1080
					],
					strokeDasharray: [
						"1 80",
						"60 40",
						"1 80"
					]
				},
				transition: {
					duration: 2,
					ease: "linear",
					repeat: Infinity
				}
			})]
		})
	});
}
var l = e(t("Spinner", c));
//#endregion
export { l as Spinner };
