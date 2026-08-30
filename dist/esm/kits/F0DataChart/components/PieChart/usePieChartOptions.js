import { useI18n as e } from "../../../../lib/providers/i18n/i18n-provider.js";
import { resolveChartColorToken as t, resolveDataPointColor as n } from "../../utils/colors.js";
import { useChartTheme as r } from "../../utils/useChartTheme.js";
import { useContainerSize as i } from "../../utils/useContainerSize.js";
import { DEFAULT_EMPHASIS as a, buildItemTooltip as o, buildLegend as s, renderValueTooltip as c, tooltipValueFormat as l } from "../../utils/options.js";
import { useMemo as u } from "react";
//#region src/kits/F0DataChart/components/PieChart/usePieChartOptions.ts
function d(e) {
	return {
		showLegend: e !== "sm",
		showOutsideLabels: e === "lg"
	};
}
function f(f, { series: p, innerRadius: m = 0, showLegend: h = !0, showLabels: g = !0, showPercentage: _ = !1, valueFormatter: v, tooltipValueFormatter: y, echartsOptions: b }, x) {
	let S = r(f), C = e(), { width: w } = i(f);
	return u(() => {
		let e = p.data ?? [], r = p.color ? t(p.color) : void 0, i = l(y, v), u = d(x), f = u.showLegend && h, w = u.showOutsideLabels && g, T = e.map((e, t) => ({
			value: e.value,
			name: e.name,
			itemStyle: {
				color: n(e.color, r, t),
				borderWidth: 2,
				borderColor: S.colors.background
			}
		})), E = e.map((e) => e.name), D = () => w ? {
			show: !0,
			position: "outside",
			alignTo: "edge",
			edgeDistance: 8,
			color: S.colors.foreground,
			fontSize: S.textStyle.fontSize,
			fontWeight: S.textStyle.fontWeight,
			fontFamily: S.textStyle.fontFamily,
			overflow: "truncate",
			formatter(e) {
				let t = String(e.name ?? ""), n = Number(e.value ?? 0), r = v ? v(n) : String(n);
				return _ ? `${t}: ${r} (${(e.percent ?? 0).toFixed(1)}%)` : `${t}: ${r}`;
			}
		} : { show: !1 }, O = x === "sm" ? ["50%", "50%"] : w ? ["50%", "45%"] : ["50%", f ? "45%" : "50%"], k = x === "sm" ? 85 : w ? 50 : 75, A = Math.min(m, k - 10), j = {
			name: p.name,
			type: "pie",
			radius: [`${A}%`, `${k}%`],
			center: O,
			data: T,
			avoidLabelOverlap: !0,
			label: D(),
			labelLine: {
				show: w,
				length: 8,
				length2: 8,
				lineStyle: { color: S.colors.borderSecondary }
			},
			labelLayout: w ? { hideOverlap: !0 } : void 0,
			emphasis: {
				label: { show: w },
				itemStyle: {
					shadowBlur: 0,
					shadowOffsetX: 0,
					shadowColor: "transparent",
					opacity: .85
				}
			}
		}, M = {
			animation: !1,
			color: S.palette,
			textStyle: { fontFamily: S.textStyle.fontFamily },
			series: [j],
			legend: s({
				show: f,
				data: E,
				theme: S
			}),
			tooltip: o({
				theme: S,
				formatter: (t) => {
					let n = t, r = Number(n.value ?? 0), a = e.reduce((e, t) => e + t.value, 0);
					return c({
						marker: n.marker,
						title: String(n.name ?? ""),
						value: i(r),
						rows: [{
							value: `${(n.percent ?? 0).toFixed(1)}%`,
							label: C.dataChart.tooltip.ofTotal
						}, {
							value: i(a),
							label: C.dataChart.tooltip.total
						}]
					}, S);
				}
			}),
			emphasis: a
		};
		return b ? Object.assign({}, M, b) : M;
	}, [
		p,
		m,
		h,
		g,
		_,
		v,
		y,
		b,
		S,
		C,
		w,
		x
	]);
}
//#endregion
export { f as usePieChartOptions };
