import { useI18n as e } from "../../../../lib/providers/i18n/i18n-provider.js";
import { resolveChartColorToken as t, resolveDataPointColor as n } from "../../utils/colors.js";
import { useChartTheme as r } from "../../utils/useChartTheme.js";
import { useContainerSize as i } from "../../utils/useContainerSize.js";
import { DEFAULT_EMPHASIS as a, buildGrid as o, buildItemTooltip as s, buildLegend as c, renderValueTooltip as l, tooltipValueFormat as u } from "../../utils/options.js";
import { formatPercent as d } from "../../utils/formatters.js";
import { useMemo as f } from "react";
//#region src/kits/F0DataChart/components/FunnelChart/useFunnelChartOptions.ts
function p(p, { series: m, sort: h = "descending", gap: g = 0, orient: _ = "horizontal", showLegend: v = !1, showLabels: y = !0, showConversion: b = !1, colorScale: x = !0, valueFormatter: S, tooltipValueFormatter: C, echartsOptions: w }) {
	let T = r(p), E = e(), { width: D } = i(p);
	return f(() => {
		let e = m.data ?? [], r = m.color ? t(m.color) : void 0, i = (h === "ascending" ? [...e].sort((e, t) => e.value - t.value) : h === "descending" ? [...e].sort((e, t) => t.value - e.value) : e)[0]?.value ?? 0, f = T.palette[0] ?? "#0aa69b", p = T.colors.borderSecondary, D = Math.max(...e.map((e) => e.value), 1), O = e.map((e, t) => ({
			value: e.value,
			name: e.name,
			itemStyle: {
				color: n(e.color, r, t, x ? {
					ratio: e.value / D,
					lightColor: p,
					baseColor: f
				} : void 0),
				borderWidth: 0,
				borderRadius: 4
			}
		})), k = e.map((e) => e.name), A = _ === "horizontal", j = A ? 0 : y ? 160 : 0, M = A && y ? 90 : 0, N = v ? 28 : 0, P = {
			name: m.name,
			type: "funnel",
			sort: h,
			gap: g,
			orient: _,
			data: O,
			left: j,
			right: 0,
			top: M,
			bottom: N,
			width: "auto",
			height: "auto",
			minSize: "5%",
			maxSize: "100%",
			funnelAlign: "center",
			label: { show: !1 },
			labelLine: { show: !1 },
			itemStyle: {
				borderWidth: 0,
				borderRadius: 4
			},
			emphasis: {
				label: { show: !1 },
				itemStyle: {
					shadowBlur: 0,
					shadowOffsetX: 0,
					shadowColor: "transparent",
					opacity: .85
				}
			}
		}, F = u(C, S), I = {
			animation: !1,
			color: T.palette,
			textStyle: { fontFamily: T.textStyle.fontFamily },
			series: [P],
			legend: c({
				show: v,
				data: k,
				theme: T
			}),
			grid: o({ showLegend: v }),
			tooltip: s({
				theme: T,
				formatter: (() => {
					let t = h === "none" ? e : h === "ascending" ? [...e].sort((e, t) => e.value - t.value) : [...e].sort((e, t) => t.value - e.value), n = /* @__PURE__ */ new Map();
					return t.forEach((e, t) => {
						n.set(e.name, t);
					}), (e) => {
						let r = e, a = Number(r.value ?? 0), o = F(a), s = String(r.name ?? ""), c = n.get(s), u = [];
						if (b && i > 0 && c !== void 0) {
							u.push({
								value: d(a, i),
								label: E.dataChart.tooltip.ofTotal
							});
							let e = c > 0 ? t[c - 1] : void 0;
							e && e.value > 0 && u.push({
								value: d(a, e.value),
								label: E.t("dataChart.tooltip.fromStage", { stage: e.name })
							});
						}
						return l({
							marker: r.marker,
							title: s,
							value: o,
							rows: u
						}, T);
					};
				})()
			}),
			emphasis: a
		};
		return w ? Object.assign({}, I, w) : I;
	}, [
		m,
		h,
		g,
		_,
		v,
		y,
		b,
		x,
		S,
		C,
		w,
		T,
		E,
		D
	]);
}
//#endregion
export { p as useFunnelChartOptions };
