import { lerpColor as e, paletteColor as t } from "../../utils/colors.js";
import { useChartTheme as n } from "../../utils/useChartTheme.js";
import { useContainerSize as r } from "../../utils/useContainerSize.js";
import { buildCategoryAxis as i, buildItemTooltip as a, renderValueTooltip as o, tooltipValueFormat as s } from "../../utils/options.js";
import { useMemo as c } from "react";
//#region src/kits/F0DataChart/components/HeatmapChart/useHeatmapChartOptions.ts
function l(e) {
	return {
		showXAxis: e !== "sm",
		showYAxis: e === "lg"
	};
}
var u = 6;
function d(t, n) {
	return [
		.08,
		.28,
		.5,
		.75,
		1
	].map((r) => e(n, t, r));
}
function f(e, { xCategories: f, yCategories: p, data: m, min: h, max: g, showLabels: _ = !1, showVisualMap: v = !1, valueFormatter: y, tooltipValueFormatter: b, echartsOptions: x }, S) {
	let C = n(e), { width: w, height: T } = r(e);
	return c(() => {
		let e = m.map((e) => e[2]), n = e.length > 0 ? Math.min(...e) : 0, r = e.length > 0 ? Math.max(...e) : 100, c = h ?? n, E = g ?? r, D = C.palette[0] ?? t(0), O = C.colors.borderSecondary, k = d(D, O), { colors: A } = C, { showXAxis: j, showYAxis: M } = l(S), N = Math.max(0, w - (M ? 32 : 8)), P = Math.max(0, T - (j ? 28 : 8)), F = f.length > 0 ? N / f.length : 0, I = p.length > 0 ? P / p.length : 0, L = Math.max(2, Math.min(u, Math.floor(Math.max(0, Math.min(F, I)) / 2))), R = i({
			data: f,
			theme: C,
			axisLength: N || void 0,
			show: j,
			smartLayout: !0,
			edgeAligned: !1
		}), z = i({
			data: p,
			theme: C,
			axisLength: P || void 0,
			show: M,
			smartLayout: !0,
			edgeAligned: !1
		}), B = {
			animation: !1,
			textStyle: { fontFamily: C.textStyle.fontFamily },
			xAxis: {
				...R,
				axisLine: { show: !1 }
			},
			yAxis: {
				...z,
				axisLine: { show: !1 },
				inverse: !1
			},
			visualMap: {
				min: c,
				max: E,
				calculable: !1,
				show: v,
				orient: "horizontal",
				bottom: 10,
				left: "center",
				inRange: { color: k },
				textStyle: {
					color: A.foregroundTertiary,
					fontSize: C.textStyle.fontSize
				}
			},
			grid: {
				left: 4,
				right: 4,
				top: 8,
				bottom: 4,
				containLabel: !0
			},
			series: [{
				type: "heatmap",
				data: m,
				label: {
					show: _,
					color: A.foreground,
					fontSize: C.textStyle.fontSize,
					fontWeight: C.textStyle.fontWeight,
					formatter: y ? (e) => y(Number(e.value?.[2] ?? 0)) : void 0
				},
				itemStyle: {
					borderRadius: L,
					borderWidth: 4,
					borderColor: A.background
				},
				emphasis: { itemStyle: {
					shadowBlur: 0,
					shadowOffsetX: 0,
					shadowColor: "transparent",
					borderColor: A.foreground,
					borderWidth: 1,
					opacity: 1
				} }
			}],
			tooltip: a({
				theme: C,
				formatter: (e) => {
					let t = e, [n, r, i] = t.value ?? [
						0,
						0,
						0
					];
					return o({
						marker: t.marker,
						title: p[r] ?? "",
						subtitle: f[n] ?? "",
						value: s(b, y)(i)
					}, C);
				}
			})
		};
		return x ? Object.assign({}, B, x) : B;
	}, [
		f,
		p,
		m,
		h,
		g,
		_,
		v,
		y,
		b,
		x,
		C,
		w,
		T,
		S
	]);
}
//#endregion
export { f as useHeatmapChartOptions };
