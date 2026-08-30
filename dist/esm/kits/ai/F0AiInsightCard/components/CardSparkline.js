import { cn as e } from "../../../../lib/utils.js";
import { createElement as t, useId as n } from "react";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
import { Area as a, AreaChart as o, ResponsiveContainer as s, YAxis as c } from "recharts";
//#region src/kits/ai/F0AiInsightCard/components/CardSparkline.tsx
var l = {
	positive: {
		stroke: "hsl(var(--positive-50))",
		fill: "hsl(var(--positive-50))",
		border: "border-f1-border-positive-bold"
	},
	negative: {
		stroke: "hsl(var(--critical-50))",
		fill: "hsl(var(--critical-50))",
		border: "border-f1-border-critical-bold"
	},
	neutral: {
		stroke: "hsl(var(--neutral-50))",
		fill: "hsl(var(--neutral-50))",
		border: "border-f1-border"
	}
};
function u(e, t) {
	let n = e[0]?.value ?? 0, r = e[e.length - 1]?.value ?? 0, i = Math.sign(r - n), a = t ? i * -1 : i;
	return a > 0 ? "positive" : a < 0 ? "negative" : "neutral";
}
var d = ({ cx: e, cy: t, index: n, dataLength: i, color: a }) => n !== i - 1 || e == null || t == null ? null : /* @__PURE__ */ r("circle", {
	cx: e,
	cy: t,
	r: 2,
	fill: a,
	stroke: "none"
}), f = ({ label: t, direction: n }) => {
	let i = l[n];
	return /* @__PURE__ */ r("span", {
		className: e("absolute right-0 inline-flex items-center rounded-full border border-solid bg-f1-background px-1.5 py-px text-xs font-medium shadow", n === "negative" ? "bottom-0 translate-y-full" : "top-0 -translate-y-full", i.border, {
			positive: "text-f1-foreground-positive",
			negative: "text-f1-foreground-critical",
			neutral: "text-f1-foreground-secondary"
		}[n]),
		"data-testid": "sparkline-balance",
		children: t
	});
}, p = ({ data: e, label: p, invertStatus: m }) => {
	let h = `sparkline-gradient-${n().replace(/:/g, "")}`, g = u(e, m), _ = l[g];
	return /* @__PURE__ */ r("div", {
		className: "flex flex-1 flex-col",
		children: /* @__PURE__ */ i("div", {
			className: "relative w-full flex-1",
			role: "img",
			"aria-label": `Sparkline chart showing ${g} trend`,
			children: [/* @__PURE__ */ r(s, {
				width: "100%",
				height: "100%",
				children: /* @__PURE__ */ i(o, {
					data: e,
					margin: {
						top: 4,
						right: 4,
						bottom: 0,
						left: 0
					},
					children: [
						/* @__PURE__ */ r("defs", { children: /* @__PURE__ */ i("linearGradient", {
							id: h,
							x1: "0",
							y1: "0",
							x2: "0",
							y2: "1",
							children: [/* @__PURE__ */ r("stop", {
								offset: "5%",
								stopColor: _.fill,
								stopOpacity: .3
							}), /* @__PURE__ */ r("stop", {
								offset: "95%",
								stopColor: _.fill,
								stopOpacity: .02
							})]
						}) }),
						/* @__PURE__ */ r(c, {
							hide: !0,
							domain: ["dataMin - 1", "dataMax + 1"]
						}),
						/* @__PURE__ */ r(a, {
							type: "linear",
							dataKey: "value",
							stroke: _.stroke,
							strokeWidth: 1.5,
							fill: `url(#${h})`,
							fillOpacity: 1,
							isAnimationActive: !1,
							dot: (n) => /* @__PURE__ */ t(d, {
								...n,
								key: n.index,
								dataLength: e.length,
								color: _.stroke
							}),
							activeDot: !1
						})
					]
				})
			}), /* @__PURE__ */ r(f, {
				label: p,
				direction: g
			})]
		})
	});
};
//#endregion
export { p as CardSparkline };
