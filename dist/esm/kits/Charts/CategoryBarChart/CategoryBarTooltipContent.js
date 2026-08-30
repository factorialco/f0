import { cn as e } from "../../../lib/utils.js";
import { TooltipContent as t } from "../../../ui/tooltip.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/kits/Charts/CategoryBarChart/CategoryBarTooltipContent.tsx
function i(e, t) {
	let n = t > 0 ? e / t * 100 : 0;
	return n % 1 == 0 ? n.toFixed(0) : n.toFixed(1);
}
function a(e, t, n) {
	return e.map((e, r) => ({
		...e,
		key: `${e.name}-${r}`,
		percentage: t > 0 ? e.value / t * 100 : 0,
		color: n(e, r)
	})).filter((e) => e.percentage > 0);
}
function o(e, t) {
	return e.map((e) => ({
		key: e.key,
		name: e.name,
		color: e.color,
		valueLabel: `${e.value} (${i(e.value, t)}%)`
	}));
}
function s({ items: i, activeKey: a }) {
	let o = i.some((e) => e.key === a);
	return /* @__PURE__ */ n(t, {
		className: "flex flex-col gap-0.5 text-sm",
		children: i.map((t) => /* @__PURE__ */ r("div", {
			className: e("flex items-center gap-1", o && t.key !== a && "opacity-50"),
			children: [
				/* @__PURE__ */ n("div", {
					className: "h-2.5 w-2.5 shrink-0 rounded-full",
					style: { backgroundColor: t.color }
				}),
				/* @__PURE__ */ n("span", {
					className: "pl-0.5 pr-2 text-f1-foreground-inverse-secondary",
					children: t.name
				}),
				/* @__PURE__ */ n("span", {
					className: "ml-auto font-mono font-medium tabular-nums text-f1-foreground-inverse",
					children: t.valueLabel
				})
			]
		}, t.key))
	});
}
//#endregion
export { s as CategoryBarTooltipContent, a as buildCategoryBarSegments, i as formatCategoryBarPercentage, o as toCategoryBarTooltipItems };
