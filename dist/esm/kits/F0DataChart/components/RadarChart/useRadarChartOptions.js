import { paletteColor as e, resolveChartColorToken as t } from "../../utils/colors.js";
import { useChartTheme as n } from "../../utils/useChartTheme.js";
import { useContainerSize as r } from "../../utils/useContainerSize.js";
import { DEFAULT_EMPHASIS as i, buildItemTooltip as a, buildLegend as o, renderValueTooltip as s, tooltipValueFormat as c } from "../../utils/options.js";
import { useMemo as l } from "react";
//#region src/kits/F0DataChart/components/RadarChart/useRadarChartOptions.ts
function u(e) {
	return e === "sm" ? {
		showLegend: !1,
		showIndicatorNames: !1,
		nameWidth: 0
	} : e === "md" ? {
		showLegend: !0,
		showIndicatorNames: !0,
		nameWidth: 56
	} : {
		showLegend: !0,
		showIndicatorNames: !0,
		nameWidth: 96
	};
}
function d(d, { indicators: f, series: p, showArea: m = !0, showLegend: h = !0, showLabels: g = !1, valueFormatter: _, tooltipValueFormatter: v, echartsOptions: y }, b) {
	let x = n(d), S = r(d);
	return l(() => {
		let n = u(b), r = n.showLegend && h, { showIndicatorNames: l, nameWidth: d } = n, S = c(v, _), C = f.map((e, t) => {
			let n = e.max ?? Math.max(...p.map((e) => e.data[t] ?? 0));
			return {
				name: e.name,
				max: n > 0 ? n : 100
			};
		}), w = p.map((n, r) => {
			let i = n.color ? t(n.color) : e(r);
			return {
				name: n.name,
				value: n.data,
				itemStyle: { color: i },
				lineStyle: {
					color: i,
					width: 2
				},
				areaStyle: m ? {
					color: i,
					opacity: .15
				} : void 0,
				symbol: "circle",
				symbolSize: 6,
				label: {
					show: g,
					color: x.colors.foregroundSecondary,
					fontSize: x.textStyle.fontSize,
					fontFamily: x.textStyle.fontFamily,
					formatter: _ ? (e) => _(Number(e.value ?? 0)) : void 0
				}
			};
		}), T = p.map((e) => e.name), E = {
			animation: !1,
			color: x.palette,
			textStyle: { fontFamily: x.textStyle.fontFamily },
			radar: {
				indicator: C,
				shape: "polygon",
				splitNumber: 4,
				axisName: l ? {
					color: x.colors.foregroundSecondary,
					fontSize: x.textStyle.fontSize,
					fontWeight: x.textStyle.fontWeight,
					fontFamily: x.textStyle.fontFamily,
					overflow: "truncate",
					width: d,
					ellipsis: "..."
				} : { show: !1 },
				splitArea: { show: !1 },
				splitLine: { lineStyle: { color: x.colors.borderSecondary } },
				axisLine: { lineStyle: { color: x.colors.borderSecondary } }
			},
			series: [{
				type: "radar",
				data: w,
				emphasis: {
					label: { show: g },
					itemStyle: {
						shadowBlur: 0,
						shadowOffsetX: 0,
						shadowColor: "transparent",
						opacity: .85
					}
				}
			}],
			legend: o({
				show: r,
				data: T,
				theme: x
			}),
			tooltip: a({
				theme: x,
				formatter: (e) => {
					let t = e, n = t.value ?? [];
					return s({
						marker: t.marker,
						title: String(t.name ?? ""),
						rows: f.map((e, t) => ({
							value: S(n[t] ?? 0),
							label: e.name
						}))
					}, x);
				}
			}),
			emphasis: i
		};
		return y ? Object.assign({}, E, y) : E;
	}, [
		f,
		p,
		m,
		h,
		g,
		_,
		v,
		y,
		x,
		S,
		b
	]);
}
//#endregion
export { d as useRadarChartOptions };
