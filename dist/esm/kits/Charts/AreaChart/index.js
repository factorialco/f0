import { usePrivacyMode as e } from "../../../lib/privacyMode.js";
import { ChartContainer as t, ChartLegend as n, ChartLegendContent as r, ChartTooltip as i, ChartTooltipContent as a } from "../../../ui/chart.js";
import { getCategoricalColor as o, getColor as s } from "../utils/colors.js";
import { cartesianGridProps as c, chartTooltipProps as l, measureTextWidth as u } from "../utils/elements.js";
import { fixedForwardRef as d } from "../utils/forwardRef.js";
import { prepareData as f } from "../utils/muncher.js";
import { Fragment as p, jsx as m, jsxs as h } from "react/jsx-runtime";
import { nanoid as g } from "nanoid";
import { Area as _, AreaChart as v, CartesianGrid as y, Text as b, XAxis as x, YAxis as S } from "recharts";
//#region src/kits/Charts/AreaChart/index.tsx
var C = ({ index: e, visibleTicksCount: t, payload: n, tickFormatter: r, ...i }) => {
	let a = e === 0, o = e === t - 1;
	return /* @__PURE__ */ m(b, {
		...i,
		textAnchor: a ? "start" : o ? "end" : "middle",
		children: r?.(n.value, n.index) ?? n.value
	});
}, w = ({ data: d, dataConfig: b, xAxis: w, yAxis: T, canBeBlurred: E, blurArea: D, lineType: O = "monotoneX", aspect: k, marginTop: A = 0 }, j) => {
	let { enabled: M } = e(), N = Object.keys(b), P = g(12), F = f(d), I = Math.max(...F.flatMap((e) => N.map((t) => u(T?.tickFormatter ? T.tickFormatter(`${e[t]}`) : `${e[t]}`)))), L = T?.width ?? I + 20, R = !T?.hide, z = !w?.hide, B = !E || !M;
	return /* @__PURE__ */ m(t, {
		config: b,
		ref: j,
		aspect: k,
		children: /* @__PURE__ */ h(v, {
			accessibilityLayer: !0,
			data: F,
			className: "overflow-visible [&_.recharts-surface]:overflow-visible",
			margin: { top: A },
			children: [
				/* @__PURE__ */ h("defs", { children: [
					/* @__PURE__ */ h("linearGradient", {
						id: `${P}-fadeGradient`,
						gradientUnits: "userSpaceOnUse",
						x1: `${R ? L : 0}`,
						y1: "0",
						x2: "100%",
						y2: "0",
						children: [
							(D === "l" || D === "lr") && /* @__PURE__ */ h(p, { children: [
								/* @__PURE__ */ m("stop", {
									offset: "0%",
									stopColor: "black",
									stopOpacity: "0"
								}),
								/* @__PURE__ */ m("stop", {
									offset: "1%",
									stopColor: "white",
									stopOpacity: "0.1"
								}),
								/* @__PURE__ */ m("stop", {
									offset: "7%",
									stopColor: "white",
									stopOpacity: "1"
								})
							] }),
							(D === "r" || D === "lr") && /* @__PURE__ */ h(p, { children: [
								/* @__PURE__ */ m("stop", {
									offset: "93%",
									stopColor: "white",
									stopOpacity: "1"
								}),
								/* @__PURE__ */ m("stop", {
									offset: "99%",
									stopColor: "white",
									stopOpacity: "0.1"
								}),
								/* @__PURE__ */ m("stop", {
									offset: "100%",
									stopColor: "black",
									stopOpacity: "0"
								})
							] }),
							!D && /* @__PURE__ */ h(p, { children: [/* @__PURE__ */ m("stop", {
								offset: "0%",
								stopColor: "white",
								stopOpacity: "1"
							}), /* @__PURE__ */ m("stop", {
								offset: "100%",
								stopColor: "white",
								stopOpacity: "1"
							})] })
						]
					}),
					/* @__PURE__ */ m("mask", {
						id: `${P}-transparent-edges`,
						maskUnits: "userSpaceOnUse",
						maskContentUnits: "userSpaceOnUse",
						children: /* @__PURE__ */ m("rect", {
							x: "0",
							y: "0",
							width: "100%",
							height: "100%",
							fill: `url(#${P}-fadeGradient)`
						})
					}),
					N.map((e, t) => /* @__PURE__ */ h("linearGradient", {
						id: `fill${String(e)}-${P}`,
						x1: "0",
						y1: "0",
						x2: "0",
						y2: "1",
						children: [/* @__PURE__ */ m("stop", {
							offset: "5%",
							stopColor: b[e].color ? s(b[e].color) : o(t),
							stopOpacity: .8
						}), /* @__PURE__ */ m("stop", {
							offset: "95%",
							stopColor: b[e].color ? s(b[e].color) : o(t),
							stopOpacity: .1
						})]
					}, t))
				] }),
				/* @__PURE__ */ m(y, {
					...c(),
					mask: `url(#${P}-transparent-edges)`
				}),
				z && /* @__PURE__ */ m(x, {
					dataKey: "x",
					tickLine: !1,
					axisLine: !1,
					tickMargin: 8,
					tickFormatter: w?.tickFormatter,
					ticks: w?.ticks,
					domain: w?.domain,
					interval: 0,
					tick: C
				}),
				R && /* @__PURE__ */ m(S, {
					tickLine: !1,
					axisLine: !1,
					tickMargin: 8,
					tickCount: T?.tickCount,
					tickFormatter: E && M ? () => "**" : T?.tickFormatter,
					ticks: T?.ticks,
					domain: T?.domain,
					width: L
				}),
				B && /* @__PURE__ */ m(i, {
					...l(),
					content: /* @__PURE__ */ m(a, {
						indicator: "dot",
						yAxisFormatter: T?.tickFormatter
					})
				}),
				N.map((e, t) => /* @__PURE__ */ m(_, {
					isAnimationActive: !1,
					dataKey: e,
					type: O,
					mask: `url(#${P}-transparent-edges)`,
					fill: `url(#fill${e}-${P})`,
					fillOpacity: b[e].dashed ? 0 : .4,
					stroke: b[e].color ? s(b[e].color) : o(t),
					strokeWidth: 1.5,
					strokeDasharray: b[e].dashed ? "4 4" : void 0
				}, e)),
				Object.keys(b).length > 1 && /* @__PURE__ */ m(n, {
					className: "flex justify-start",
					content: /* @__PURE__ */ m(r, {})
				})
			]
		})
	});
}, T = d(w);
//#endregion
export { T as AreaChart, w as BaseAreaChart };
