import { ChartContainer as e, ChartLegend as t, ChartLegendContent as n, ChartTooltip as r, ChartTooltipContent as i } from "../../../ui/chart.js";
import { getCategoricalColor as a, getColor as o } from "../utils/colors.js";
import { fixedForwardRef as s } from "../utils/forwardRef.js";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
import { Cell as u, Label as d, Pie as f, PieChart as p } from "recharts";
//#region src/kits/Charts/PieChart/index.tsx
var m = ({ data: s, dataConfig: m, overview: h, aspect: g, tickFormatter: _ }, v) => {
	let y = s.map((e, t) => ({
		...e,
		fill: m[e.label]?.color ? o(m[e.label].color) : a(t)
	})), b = s.map((e) => e.value).reduce((e, t) => e + t);
	return b === 0 && y.push({
		label: "-",
		value: 1,
		fill: "hsl(var(--neutral-2))"
	}), /* @__PURE__ */ c(e, {
		config: m,
		ref: v,
		aspect: g,
		"data-chromatic": "ignore",
		style: { height: 380 },
		children: /* @__PURE__ */ l(p, {
			accessibilityLayer: !0,
			margin: {
				left: 0,
				right: 0
			},
			children: [
				b !== 0 && /* @__PURE__ */ c(r, {
					isAnimationActive: !1,
					content: /* @__PURE__ */ c(i, { yAxisFormatter: _ })
				}),
				/* @__PURE__ */ l(f, {
					isAnimationActive: !1,
					nameKey: "label",
					legendType: "circle",
					dataKey: "value",
					data: y,
					innerRadius: 120,
					outerRadius: 135,
					paddingAngle: 2.5,
					children: [y.map((e, t) => {
						let n = _ ? _(String(e.value)) : e.value;
						return /* @__PURE__ */ c(u, {
							fill: e.fill,
							"aria-label": `${e.label}: ${n} (${(e.value / b * 100).toFixed(0)}%)`
						}, `cell-${t}`);
					}), /* @__PURE__ */ c(d, { content: ({ viewBox: e }) => {
						if (e && "cx" in e && "cy" in e) return /* @__PURE__ */ l("text", {
							x: e.cx,
							y: e.cy,
							textAnchor: "middle",
							dominantBaseline: "middle",
							children: [/* @__PURE__ */ c("tspan", {
								x: e.cx,
								y: (e.cy || 0) + 8,
								className: "fill-f1-foreground text-4xl font-semibold",
								children: h?.number ? _ ? _(String(h.number)) : h.number : null
							}), /* @__PURE__ */ c("tspan", {
								x: e.cx,
								y: (e.cy || 0) - 16,
								className: "fill-f1-foreground-secondary",
								children: h?.label
							})]
						});
					} })]
				}),
				/* @__PURE__ */ c(t, {
					content: /* @__PURE__ */ c(n, {
						nameKey: "label",
						hiddenKey: "-"
					}),
					align: "center",
					verticalAlign: "bottom",
					layout: "vertical",
					className: "flex-row items-start gap-4 pr-3 pt-2"
				})
			]
		})
	});
}, h = s(m);
//#endregion
export { h as PieChart, m as _PieChart };
