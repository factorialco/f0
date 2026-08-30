import { ChartContainer as e, ChartTooltip as t, ChartTooltipContent as n } from "../../../ui/chart.js";
import { getCategoricalColor as r, getColor as i } from "../utils/colors.js";
import { cartesianGridProps as a, chartTooltipProps as o, measureTextWidth as s, xAxisProps as c, yAxisProps as l } from "../utils/elements.js";
import { fixedForwardRef as u } from "../utils/forwardRef.js";
import { prepareData as d } from "../utils/muncher.js";
import { jsx as f, jsxs as p } from "react/jsx-runtime";
import { CartesianGrid as m, Line as h, LineChart as g, XAxis as _, YAxis as v } from "recharts";
//#region src/kits/Charts/LineChart/index.tsx
var y = ({ data: u, dataConfig: y, xAxis: b, yAxis: x = { hide: !0 }, lineType: S = "natural", aspect: C, hideTooltip: w = !1, hideGrid: T = !1 }, E) => {
	let D = Object.keys(y), O = d(u), k = Math.max(...O.flatMap((e) => D.map((t) => s(x?.tickFormatter ? x.tickFormatter(`${e[t]}`) : `${e[t]}`))));
	return /* @__PURE__ */ f(e, {
		config: y,
		ref: E,
		aspect: C,
		children: /* @__PURE__ */ p(g, {
			accessibilityLayer: !0,
			data: O,
			margin: {
				left: x && !x.hide ? 0 : 12,
				right: 12
			},
			children: [
				!T && /* @__PURE__ */ f(m, { ...a() }),
				!b?.hide && /* @__PURE__ */ f(_, { ...c(b) }),
				!x?.hide && /* @__PURE__ */ f(v, {
					...l(x),
					width: x.width ?? k + 20
				}),
				!w && /* @__PURE__ */ f(t, {
					...o(),
					content: /* @__PURE__ */ f(n, { yAxisFormatter: x?.tickFormatter })
				}),
				D.map((e, t) => /* @__PURE__ */ f(h, {
					dataKey: e,
					isAnimationActive: !1,
					type: S,
					stroke: y[e].color ? i(y[e].color) : r(t),
					strokeWidth: 1.5,
					strokeDasharray: y[e].dashed ? "4 4" : void 0,
					dot: !1
				}, e))
			]
		})
	});
}, b = u(y);
//#endregion
export { b as LineChart, y as _LineChart };
