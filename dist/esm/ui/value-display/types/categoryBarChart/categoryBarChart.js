import { cn as e, focusRing as t } from "../../../../lib/utils.js";
import { Tooltip as n, TooltipProvider as r, TooltipTrigger as i } from "../../../tooltip.js";
import { Skeleton as a } from "../../../skeleton.js";
import { getCategoricalColor as o, getColor as s } from "../../../../kits/Charts/utils/colors.js";
import { CategoryBarTooltipContent as c, buildCategoryBarSegments as l, formatCategoryBarPercentage as u, toCategoryBarTooltipItems as d } from "../../../../kits/Charts/CategoryBarChart/CategoryBarTooltipContent.js";
import { chartColorTokens as f, resolveChartColorToken as p } from "../../../../kits/F0DataChart/utils/colors.js";
import { tableDisplayClassNames as m } from "../../const.js";
import { useState as h } from "react";
import { jsx as g, jsxs as _ } from "react/jsx-runtime";
//#region src/ui/value-display/types/categoryBarChart/categoryBarChart.tsx
var v = new Set(f);
function y(e) {
	return v.has(e) ? p(e) : s(e);
}
var b = 40;
function x() {
	return "flex h-5 w-full items-center";
}
function S(e) {
	return e.visualization === "table" ? { minWidth: 80 } : {
		minHeight: b,
		minWidth: 80
	};
}
function C({ meta: t }) {
	return /* @__PURE__ */ g("div", {
		className: e("text-f1-foreground-secondary", t.visualization === "table" && m.text),
		"data-cell-type": "categoryBarChart",
		children: "–"
	});
}
function w({ dataPoints: a, total: s, hideTooltip: f, meta: p }) {
	let [m, v] = h(void 0), b = l(a, s, (e, t) => e.color ? y(e.color) : o(t)), C = d(b, s);
	return /* @__PURE__ */ g(r, {
		delayDuration: 350,
		children: /* @__PURE__ */ _(n, { children: [/* @__PURE__ */ g(i, {
			asChild: !0,
			children: /* @__PURE__ */ g("div", {
				className: e(x(), "pointer-events-auto", t(), p.visualization === "table" && "-my-2.5 box-content py-2.5"),
				style: S(p),
				"data-cell-type": "categoryBarChart",
				role: "group",
				"aria-label": "Category bar chart",
				tabIndex: 0,
				children: /* @__PURE__ */ g("div", {
					className: "flex h-2 w-full gap-1 overflow-hidden",
					onMouseLeave: () => v(void 0),
					onMouseOver: (e) => {
						e.target === e.currentTarget && v(void 0);
					},
					children: b.map((e) => /* @__PURE__ */ g("div", {
						className: "pointer-events-auto h-full overflow-hidden rounded-2xs",
						style: {
							width: `${e.percentage}%`,
							backgroundColor: e.color
						},
						role: "img",
						"aria-label": `${e.name}: ${e.value} (${u(e.value, s)}%)`,
						onMouseEnter: () => v(e.key)
					}, e.key))
				})
			})
		}), !f && C.length > 0 && /* @__PURE__ */ g(c, {
			items: C,
			activeKey: m
		})] })
	});
}
var T = (e, t) => {
	if (e?.loading) return /* @__PURE__ */ g("div", {
		className: x(),
		style: S(t),
		"data-cell-type": "categoryBarChart",
		"aria-busy": "true",
		children: /* @__PURE__ */ g(a, { className: "h-2 w-full rounded-2xs" })
	});
	let n = e?.dataPoints;
	if (!n || !Array.isArray(n) || n.length === 0) return /* @__PURE__ */ g(C, { meta: t });
	let r = n.reduce((e, t) => e + t.value, 0);
	return r === 0 ? /* @__PURE__ */ g(C, { meta: t }) : /* @__PURE__ */ g(w, {
		dataPoints: n,
		total: r,
		hideTooltip: e.hideTooltip,
		meta: t
	});
};
//#endregion
export { T as CategoryBarChartCell };
