import "./model.js";
import { getLabels as e, normalizeData as t } from "./helpers.js";
import { HorizontalBar as n } from "./HorizontalBar.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
import { Cell as a, Pie as o, PieChart as s } from "recharts";
//#region src/sds/Home/ClockIn/ClockInGraph/index.tsx
function c({ data: c = [], trackedMinutes: l = 0, remainingMinutes: u, variant: d = "ring" }) {
	let f = t({
		data: c,
		trackedMinutes: l,
		remainingMinutes: u
	});
	if (d === "horizontal-bar") return /* @__PURE__ */ r(n, { segments: f });
	let { primaryLabel: p, secondaryLabel: m, time: h } = e({
		data: c,
		trackedMinutes: l,
		remainingMinutes: u
	});
	return /* @__PURE__ */ i("div", {
		className: "relative h-40 w-40",
		children: [
			/* @__PURE__ */ r(s, {
				width: 156,
				height: 156,
				children: /* @__PURE__ */ r(o, {
					data: f,
					cx: 74,
					cy: 74,
					innerRadius: 62,
					outerRadius: 74,
					startAngle: 225,
					endAngle: -45,
					paddingAngle: 2,
					cornerRadius: 4,
					dataKey: "value",
					strokeWidth: 0,
					isAnimationActive: !1,
					children: f.map((e, t) => /* @__PURE__ */ r(a, {
						fill: e.color,
						role: "presentation",
						"aria-label": `${e.value} minutes`
					}, `cell-${t}`))
				})
			}),
			/* @__PURE__ */ r("div", {
				className: "absolute inset-0 flex items-center justify-center",
				children: /* @__PURE__ */ r("span", {
					className: "text-3xl font-semibold tabular-nums text-f1-foreground",
					children: h
				})
			}),
			/* @__PURE__ */ i("div", {
				className: "absolute bottom-3 flex w-full justify-between px-8 text-f1-foreground-secondary",
				children: [/* @__PURE__ */ r("span", {
					className: "text-sm font-medium opacity-60",
					children: p
				}), /* @__PURE__ */ r("span", {
					className: "text-sm font-medium opacity-60",
					children: m
				})]
			})
		]
	});
}
//#endregion
export { c as ClockInGraph };
