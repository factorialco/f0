import { withDataTestId as e } from "../../../lib/data-testid/index.js";
import { experimentalComponent as t } from "../../../lib/experimental.js";
import { cn as n } from "../../../lib/utils.js";
import { F0Button as r } from "../../../components/F0Button/F0Button.js";
import { Card as i, CardContent as a, CardHeader as o, CardTitle as s } from "../../../ui/Card/Card.js";
import c from "./Backgrounds/EmptyBarChart.js";
import l from "./Backgrounds/EmptyLineChart.js";
import { forwardRef as u } from "react";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
//#region src/experimental/Widgets/ChartWidgetEmptyState/index.tsx
var p = {
	"line-chart": "border-f1-border",
	"bar-chart": "border-f1-border-promote"
}, m = {
	"line-chart": "min-h-48",
	"bar-chart": "min-h-64"
}, h = {
	"line-chart": "from-f1-background-accent",
	"bar-chart": "from-f1-background-promote"
}, g = {
	"line-chart": "default",
	"bar-chart": "promote"
}, _ = u(function({ title: e, content: t, buttonLabel: u, buttonIcon: _, buttonAction: v, type: y }, b) {
	let x = p[y], S = m[y], C = h[y], w = g[y];
	return /* @__PURE__ */ f(i, {
		className: n("relative flex gap-4 overflow-hidden border-dashed", x),
		ref: b,
		children: [/* @__PURE__ */ d(o, {
			className: "-mt-0.5",
			children: /* @__PURE__ */ d(s, { children: e })
		}), /* @__PURE__ */ f(a, {
			className: n("flex flex-col gap-4", S),
			children: [/* @__PURE__ */ f("div", {
				className: n("absolute -top-12 bottom-0 left-0 right-0 flex flex-col justify-end bg-gradient-to-b to-transparent opacity-30", C),
				children: [y === "bar-chart" && /* @__PURE__ */ d("div", {
					className: "absolute bottom-1 left-4 right-4",
					children: /* @__PURE__ */ d(c, { className: "w-full" })
				}), y === "line-chart" && /* @__PURE__ */ d(l, { className: "w-full" })]
			}), /* @__PURE__ */ f("div", {
				className: "relative flex min-h-28 flex-1 flex-col items-start gap-5",
				children: [/* @__PURE__ */ d("p", {
					className: "flex w-3/4 text-xl font-semibold",
					children: t
				}), u && /* @__PURE__ */ d(r, {
					label: u,
					icon: _,
					variant: w,
					onClick: v
				})]
			})]
		})]
	});
}), v = e(t("ChartWidgetEmptyState", _));
//#endregion
export { v as ChartWidgetEmptyState };
