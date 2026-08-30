import { cn as e, focusRing as t } from "../../../lib/utils.js";
import { Tooltip as n, TooltipProvider as r, TooltipTrigger as i } from "../../../ui/tooltip.js";
import { getCategoricalColor as a, getColor as o } from "../utils/colors.js";
import { fixedForwardRef as s } from "../utils/forwardRef.js";
import { CategoryBarTooltipContent as c, buildCategoryBarSegments as l, formatCategoryBarPercentage as u, toCategoryBarTooltipItems as d } from "./CategoryBarTooltipContent.js";
import { useState as f } from "react";
import { jsx as p, jsxs as m } from "react/jsx-runtime";
var h = s(({ data: s, legend: h = !0, hideTooltip: g = !1 }, _) => {
	let v = s.reduce((e, t) => e + t.value, 0), [y, b] = f(void 0), x = l(s, v, (e, t) => e.color ? o(e.color) : a(t)), S = d(x, v);
	return /* @__PURE__ */ m(r, {
		delayDuration: 350,
		children: [/* @__PURE__ */ p("div", {
			className: "w-full",
			ref: _,
			children: /* @__PURE__ */ m(n, { children: [/* @__PURE__ */ p(i, {
				asChild: !0,
				children: /* @__PURE__ */ p("div", {
					className: e("pointer-events-auto flex h-2 w-full cursor-default gap-1 overflow-hidden", t()),
					onMouseLeave: () => b(void 0),
					onMouseOver: (e) => {
						e.target === e.currentTarget && b(void 0);
					},
					role: "group",
					"aria-label": "Category bar chart",
					tabIndex: x.length > 0 ? 0 : void 0,
					children: x.map((e) => /* @__PURE__ */ p("div", {
						className: "pointer-events-auto h-full overflow-hidden rounded-2xs",
						style: {
							width: `${e.percentage}%`,
							backgroundColor: e.color
						},
						role: "img",
						"aria-label": `${e.name}: ${e.value} (${u(e.value, v)}%)`,
						onMouseEnter: () => b(e.key)
					}, e.key))
				})
			}), !g && S.length > 0 && /* @__PURE__ */ p(c, {
				items: S,
				activeKey: y
			})] })
		}), h && /* @__PURE__ */ p("div", {
			className: "mt-2 flex w-full flex-wrap gap-x-2.5 gap-y-0.5",
			role: "list",
			children: s.map((e, t) => {
				let n = e.color ? o(e.color) : a(t);
				return /* @__PURE__ */ m("div", {
					className: "flex items-center gap-1.5",
					role: "listitem",
					children: [/* @__PURE__ */ p("div", {
						className: "h-2 w-2 shrink-0 rounded-full",
						style: { backgroundColor: n }
					}), /* @__PURE__ */ p("span", {
						className: "text-f1-foreground",
						children: e.name
					})]
				}, e.name);
			})
		})]
	});
});
//#endregion
export { h as CategoryBarChart };
