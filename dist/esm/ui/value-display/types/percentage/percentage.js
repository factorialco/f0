import { cn as e } from "../../../../lib/utils.js";
import { tableDisplayClassNames as t } from "../../const.js";
import { isShowingPlaceholder as n, resolveValue as r } from "../../utils.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/ui/value-display/types/percentage/percentage.tsx
var o = 100, s = 12, c = (c, l) => {
	let u = r(c, "percentage"), d = n(c, "percentage");
	if (u === void 0) return null;
	if (d) return /* @__PURE__ */ i("span", {
		className: e("text-f1-foreground", d && "text-f1-foreground-secondary", l.visualization === "table" && t.text),
		"data-cell-type": "percentage",
		children: u
	});
	let f = o / 2, p = f - s / 2, m = 2 * Math.PI * 32, h = (100 - Math.min(Number(u), 100)) / 100 * m, g = typeof c == "object" && "label" in c;
	return /* @__PURE__ */ a("div", {
		className: "flex items-center gap-2",
		"data-cell-type": "percentage",
		children: [/* @__PURE__ */ a("svg", {
			viewBox: `0 0 ${o} ${o}`,
			className: "h-7 w-7 -rotate-90 transform",
			children: [/* @__PURE__ */ i("circle", {
				cx: f,
				cy: f,
				r: p,
				className: "fill-f1-background-positive"
			}), /* @__PURE__ */ i("circle", {
				cx: f,
				cy: f,
				r: 32,
				className: "stroke-f1-background-positive-bold",
				fill: "none",
				strokeWidth: s,
				strokeDasharray: m,
				strokeDashoffset: h,
				strokeLinecap: "round"
			})]
		}), /* @__PURE__ */ i("span", {
			className: "text-f1-foreground",
			children: g ? c.label : `${u}%`
		})]
	});
};
//#endregion
export { c as PercentageCell };
