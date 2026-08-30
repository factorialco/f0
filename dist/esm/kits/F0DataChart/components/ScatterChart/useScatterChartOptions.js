import { paletteColor as e, resolveChartColorToken as t } from "../../utils/colors.js";
import { useChartTheme as n } from "../../utils/useChartTheme.js";
import { useContainerSize as r } from "../../utils/useContainerSize.js";
import { DEFAULT_EMPHASIS as i, buildGrid as a, buildItemTooltip as o, buildLegend as s, buildValueAxis as c, renderValueTooltip as l, tooltipValueFormat as u } from "../../utils/options.js";
import { useMemo as d } from "react";
//#region src/kits/F0DataChart/components/ScatterChart/useScatterChartOptions.ts
function f(e) {
	return {
		showLegend: e !== "sm",
		showAxes: e !== "sm"
	};
}
var p = 2, m = 2, h = 48;
function g(e) {
	return Array.isArray(e) ? { value: [e[0], e[1]] } : {
		...e.label === void 0 ? {} : { name: e.label },
		value: [e.x, e.y],
		...e.color ? { itemStyle: { color: t(e.color) } } : {}
	};
}
function _(n, r, i) {
	let a = n.color ? t(n.color) : e(r);
	return {
		name: n.name,
		type: "scatter",
		data: n.data.map(g),
		symbol: "circle",
		symbolSize: i,
		itemStyle: {
			color: a,
			opacity: .7
		},
		emphasis: {
			focus: "series",
			itemStyle: {
				opacity: 1,
				shadowBlur: 0,
				shadowOffsetX: 0,
				shadowColor: "transparent"
			}
		}
	};
}
function v({ xAxisName: e, yAxisName: t, xValueFormatter: n, valueFormatter: r, xTooltipValueFormatter: i, tooltipValueFormatter: a }, o) {
	let s = u(i, n), c = u(a, r);
	return (n) => {
		let r = n, i = r.value?.[0] ?? 0, a = r.value?.[1] ?? 0, u = r.seriesName ?? "", d = r.name || u;
		return l({
			marker: r.marker,
			title: d,
			...u && u !== d ? { subtitle: u } : {},
			rows: [{
				value: s(i),
				label: e ?? "",
				size: "large"
			}, {
				value: c(a),
				label: t ?? "",
				size: "large"
			}]
		}, o);
	};
}
function y(e, { series: t, pointSize: l = 12, scaleAxes: u = !0, showLegend: g = !0, showGrid: y = !0, valueFormatter: b, xValueFormatter: x, tooltipValueFormatter: S, xTooltipValueFormatter: C, xAxisName: w, yAxisName: T, echartsOptions: E }, D) {
	let O = n(e), { width: k } = r(e);
	return d(() => {
		let { showAxes: e, showLegend: n } = f(D), r = g && n && t.length > 1, d = Math.min(80, (k || 600) * .2), A = c({
			theme: O,
			showGrid: y,
			formatter: x,
			show: e,
			scale: u,
			splitNumber: p,
			alignEdgeLabels: !0
		}), j = c({
			theme: O,
			showGrid: y,
			formatter: b,
			show: e,
			scale: u,
			splitNumber: p,
			maxLabelWidth: d
		}), M = {
			animation: !1,
			color: O.palette,
			textStyle: { fontFamily: O.textStyle.fontFamily },
			xAxis: A,
			yAxis: j,
			series: t.map((e, t) => _(e, t, Math.min(h, Math.max(m, l)))),
			legend: s({
				show: r,
				data: t.map((e) => e.name),
				theme: O
			}),
			grid: a({ showLegend: r }),
			tooltip: o({
				theme: O,
				formatter: v({
					xAxisName: w,
					yAxisName: T,
					xValueFormatter: x,
					valueFormatter: b,
					xTooltipValueFormatter: C,
					tooltipValueFormatter: S
				}, O)
			}),
			emphasis: i
		};
		return E ? Object.assign({}, M, E) : M;
	}, [
		t,
		l,
		u,
		g,
		y,
		b,
		x,
		S,
		C,
		w,
		T,
		E,
		O,
		k,
		D
	]);
}
//#endregion
export { y as useScatterChartOptions };
