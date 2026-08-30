import { ChartContainer as e, ChartTooltip as t, ChartTooltipContent as n } from "../../../ui/chart.js";
import { getCategoricalColor as r, getColor as i } from "../utils/colors.js";
import { cartesianGridProps as a, chartTooltipProps as o, measureTextWidth as s, xAxisProps as c, yAxisProps as l } from "../utils/elements.js";
import { fixedForwardRef as u } from "../utils/forwardRef.js";
import { prepareData as d } from "../utils/bar.js";
import { Fragment as f, jsx as p, jsxs as m } from "react/jsx-runtime";
import { Bar as h, BarChart as g, CartesianGrid as _, LabelList as v, XAxis as y, YAxis as b } from "recharts";
import { cloneDeep as x } from "lodash";
//#region src/kits/Charts/VerticalBarChart/index.tsx
var S = (e) => {
	let t = x(e), n = "", r = 0;
	return t.forEach((e) => {
		delete e.x, Object.entries(e).forEach(([e, t]) => {
			r < t && (r = t, n = e);
		});
	}), n;
}, C = u(({ dataConfig: u, data: x, xAxis: C = { hide: !0 }, yAxis: T, label: E = !1, aspect: D, hideTooltip: O = !1, hideGrid: k = !1, showRatio: A = !1, valueFormatter: j }, M) => {
	let N = Object.keys(u), P = d(x), F = Math.max(...P.map((e) => s(`${e.x}`))), I = N.reduce((e, t) => (e[t] = x.reduce((e, n) => e + n.values[t], 0), e), {}), L = {
		...c(C),
		type: "number",
		dataKey: S(P)
	}, R = {
		...l(T),
		type: "category",
		dataKey: "x"
	};
	return /* @__PURE__ */ p(e, {
		config: u,
		ref: M,
		aspect: D,
		children: /* @__PURE__ */ m(g, {
			layout: "vertical",
			accessibilityLayer: !0,
			data: P,
			margin: {
				left: T && !T.hide ? 8 : 12,
				right: E || A ? 100 : 0
			},
			children: [
				!O && /* @__PURE__ */ p(t, {
					...o(!0),
					content: /* @__PURE__ */ p(n, { yAxisFormatter: T?.tickFormatter })
				}),
				!k && /* @__PURE__ */ p(_, {
					...a(),
					vertical: !0,
					horizontal: !1
				}),
				/* @__PURE__ */ p(y, {
					...L,
					hide: C?.hide
				}),
				/* @__PURE__ */ p(b, {
					...R,
					hide: T?.hide,
					width: T?.width ?? F + 20
				}),
				N.map((e, t) => /* @__PURE__ */ p(f, { children: /* @__PURE__ */ p(h, {
					isAnimationActive: !1,
					layout: "vertical",
					dataKey: e,
					fill: u[e].color ? i(u[e].color) : r(t),
					radius: 4,
					maxBarSize: 24,
					children: (E || A) && /* @__PURE__ */ p(v, {
						position: "right",
						offset: 10,
						className: "fill-f1-foreground",
						fontSize: 12,
						formatter: j,
						content: A ? /* @__PURE__ */ p(w, {
							valueFormatter: j,
							total: I[e],
							showLabel: E
						}) : void 0
					}, `label-{${e}}`)
				}, `bar-${e}`) }))
			]
		})
	});
}), w = ({ viewBox: e, offset: t = 0, value: n, valueFormatter: r, total: i, showLabel: a }) => {
	let { x: o = 0, y: c = 0, width: l = 0, height: u = 0 } = e, d = o + l + t, f = c + u / 2, h = r ? r(n) : n, g = s(`${h}`), _ = i > 0 ? Math.round(Number(n) / i * 100) : 0;
	return /* @__PURE__ */ m("g", {
		transform: `translate(${d},${f + 4})`,
		children: [a && /* @__PURE__ */ p("text", {
			x: 0,
			textAnchor: "start",
			className: "fill-f1-foreground-secondary text-sm font-medium",
			children: h
		}), /* @__PURE__ */ m("text", {
			x: a ? g + 8 : 0,
			textAnchor: "start",
			className: "fill-f1-foreground text-sm font-medium",
			children: [_, "%"]
		})]
	});
};
//#endregion
export { C as VerticalBarChart };
