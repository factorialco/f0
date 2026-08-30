import { useI18n as e } from "../../../../lib/providers/i18n/i18n-provider.js";
import { paletteColor as t, resolveChartColorToken as n } from "../../utils/colors.js";
import { useChartTheme as r } from "../../utils/useChartTheme.js";
import { useContainerSize as i } from "../../utils/useContainerSize.js";
import { buildBaseChartOptions as a, deltaRow as o, renderValueTooltip as s, tooltipValueFormat as c } from "../../utils/options.js";
import { useMemo as l } from "react";
import * as u from "echarts";
//#region src/kits/F0DataChart/components/LineChart/useLineChartOptions.ts
function d(e) {
	return typeof e == "number" ? e : e.value;
}
function f(e, r) {
	return e.color ? n(e.color) : t(r);
}
function p(e) {
	switch (e) {
		case "smooth": return {
			smooth: !0,
			step: !1
		};
		case "step": return {
			smooth: !1,
			step: "end"
		};
		default: return {
			smooth: !1,
			step: !1
		};
	}
}
function m(e) {
	return { color: new u.graphic.LinearGradient(0, 0, 0, 1, [{
		offset: 0,
		color: `${e}59`
	}, {
		offset: 1,
		color: `${e}00`
	}]) };
}
function h(e, t, n, r, i, a, o) {
	let s = f(e, t), c = e.lineType ?? n, l = e.showArea ?? r, { smooth: u, step: h } = p(c);
	return {
		name: e.name,
		type: "line",
		data: e.data.map(d),
		smooth: u,
		step: h,
		itemStyle: { color: s },
		lineStyle: {
			width: 2,
			type: e.dashed ? "dashed" : "solid"
		},
		areaStyle: l ? m(s) : void 0,
		showSymbol: i,
		symbol: "circle",
		symbolSize: 6,
		label: {
			show: a,
			position: "top",
			color: o,
			fontWeight: "bold"
		},
		emphasis: { itemStyle: {
			shadowBlur: 0,
			shadowOffsetX: 0,
			shadowColor: "transparent"
		} }
	};
}
function g(e) {
	return {
		showLegend: e !== "sm",
		showCategoryAxis: e === "lg",
		showValueAxis: e !== "sm"
	};
}
function _(t, { categories: n, series: u, lineType: f = "linear", showArea: p = !0, showDots: m = !1, showLegend: _ = !0, showGrid: v = !0, showLabels: y = !1, valueFormatter: b, tooltipValueFormatter: x, categoryFormatter: S, echartsOptions: C }, w) {
	let T = r(t), E = e(), { width: D, height: O } = i(t);
	return l(() => {
		let e = u.length > 1, t = !e && p, r = g(w), i = r.showLegend && _, { showCategoryAxis: l, showValueAxis: k } = r, A = u.map((n, r) => h(e ? {
			...n,
			showArea: !1
		} : n, r, f, t, m, y, T.colors.foregroundSecondary)), j = u.map((e) => e.name), M = c(x, b);
		return a({
			categories: n,
			theme: T,
			series: A,
			legendData: j,
			isVertical: !0,
			showGrid: v,
			showLegend: i,
			showCategoryAxis: l,
			showValueAxis: k,
			valueFormatter: b,
			tooltipFormatter: (e) => {
				if (!Array.isArray(e) || e.length === 0) return "";
				let t = e, n = t[0], r = String(n?.axisValueLabel ?? n?.name ?? "");
				if (t.length === 1 && n) {
					let e = Number(n.value), t = n.dataIndex ?? 0, i = u.find((e) => e.name === n.seriesName), a = t > 0 && i ? d(i.data[t - 1]) : void 0;
					return s({
						marker: n.marker,
						title: String(n.seriesName ?? ""),
						subtitle: r,
						value: M(e),
						rows: [o(e, a, E.dataChart.tooltip.fromPrevious, T)]
					}, T);
				}
				return s({
					title: r,
					rows: t.map((e) => ({
						marker: e.marker,
						value: M(Number(e.value)),
						label: String(e.seriesName ?? "")
					}))
				}, T);
			},
			categoryFormatter: S,
			echartsOptions: C,
			containerWidth: D,
			containerHeight: O,
			boundaryGap: !1
		});
	}, [
		n,
		u,
		f,
		p,
		m,
		_,
		v,
		y,
		b,
		x,
		S,
		C,
		T,
		E,
		D,
		O,
		w
	]);
}
//#endregion
export { _ as useLineChartOptions };
