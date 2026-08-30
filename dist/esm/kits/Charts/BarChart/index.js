import { ChartContainer as e, ChartLegend as t, ChartLegendContent as n, ChartTooltip as r, ChartTooltipContent as i } from "../../../ui/chart.js";
import { getCategoricalColor as a, getColor as o } from "../utils/colors.js";
import { cartesianGridProps as s, chartTooltipProps as c, measureTextWidth as l, xAxisProps as u, yAxisProps as d } from "../utils/elements.js";
import { fixedForwardRef as f } from "../utils/forwardRef.js";
import { prepareData as p } from "../utils/muncher.js";
import { jsx as m, jsxs as h } from "react/jsx-runtime";
import { Bar as g, BarChart as _, CartesianGrid as v, LabelList as y, XAxis as b, YAxis as x } from "recharts";
var S = f(({ dataConfig: f, data: S, xAxis: C, yAxis: w = { hide: !0 }, label: T = !1, type: E = "simple", hideTooltip: D = !1, hideGrid: O = !1, aspect: k, legend: A, showValueUnderLabel: j = !1, highlightLastBar: M = !1, onClick: N }, P) => {
	let F = Object.keys(f), I = p(S).map((e, t, n) => M && F.length === 1 && !f[F[0]]?.color ? {
		...e,
		fill: t === n.length - 1 ? a(t) : a(t, .5)
	} : e), L = Math.max(...I.flatMap((e) => F.map((t) => l(w?.tickFormatter ? w.tickFormatter(`${e[t]}`) : `${e[t]}`))));
	return /* @__PURE__ */ m(e, {
		config: f,
		ref: P,
		aspect: k,
		children: /* @__PURE__ */ h(_, {
			accessibilityLayer: !0,
			data: I,
			margin: {
				left: w && !w.hide ? 0 : 12,
				right: 12,
				top: T ? 24 : 0,
				bottom: j ? 24 : 12
			},
			stackOffset: E === "stacked-by-sign" ? "sign" : void 0,
			onClick: (e) => {
				if (!N || !e.activeLabel || !e.activePayload) return;
				let t = {
					label: e.activeLabel,
					values: {}
				};
				for (let n of e.activePayload) t.values[n.name] = n.value;
				N(t);
			},
			children: [
				!D && /* @__PURE__ */ m(r, {
					...c(),
					content: /* @__PURE__ */ m(i, { yAxisFormatter: w.tickFormatter })
				}),
				!O && /* @__PURE__ */ m(v, { ...s() }),
				/* @__PURE__ */ m(x, {
					...d(w),
					tick: !0,
					width: w.width ?? L + 20,
					hide: w.hide
				}),
				/* @__PURE__ */ m(b, {
					...u(C),
					hide: C?.hide,
					tick: j ? (e) => {
						let { x: t, y: n, payload: r } = e, i = S.find((e) => e.label === r.value)?.values || "", a = Object.keys(i).length === 1 ? Object.values(i)?.[0] : void 0, o = a !== void 0 && w.tickFormatter ? w.tickFormatter(`${a}`) : a.toLocaleString();
						return /* @__PURE__ */ h("g", {
							transform: `translate(${t},${n})`,
							children: [/* @__PURE__ */ m("text", {
								x: 0,
								y: 0,
								dy: 12,
								textAnchor: "middle",
								className: "text-sm font-medium !text-f1-foreground-secondary",
								children: r.value
							}), !!a && /* @__PURE__ */ m("text", {
								x: 0,
								y: 0,
								dy: 28,
								textAnchor: "middle",
								className: "!fill-f1-foreground text-sm font-medium",
								children: o
							})]
						});
					} : void 0
				}),
				F.map((e, t) => /* @__PURE__ */ m(g, {
					isAnimationActive: !1,
					dataKey: e,
					stackId: E === "stacked" || E === "stacked-by-sign" ? "stack" : void 0,
					fill: M ? ((e) => e.fill) : f[e].color ? o(f[e].color) : a(t),
					radius: E === "stacked-by-sign" ? [
						4,
						4,
						0,
						0
					] : 4,
					maxBarSize: 32,
					children: T && /* @__PURE__ */ m(y, {
						position: "top",
						offset: 10,
						className: "fill-f1-foreground",
						fontSize: 12
					}, `label-${e}`)
				}, `bar-${e}`)),
				A && /* @__PURE__ */ m(t, {
					content: /* @__PURE__ */ m(n, { nameKey: "label" }),
					align: "center",
					verticalAlign: "bottom",
					layout: "vertical",
					className: "flex-row items-start gap-4 pr-3 pt-2"
				})
			]
		})
	});
});
//#endregion
export { S as BarChart };
