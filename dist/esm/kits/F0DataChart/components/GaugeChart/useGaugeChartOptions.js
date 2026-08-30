import { useI18n as e } from "../../../../lib/providers/i18n/i18n-provider.js";
import { paletteColor as t, resolveChartColorToken as n } from "../../utils/colors.js";
import { useChartTheme as r } from "../../utils/useChartTheme.js";
import { buildItemTooltip as i, renderMarker as a, renderValueTooltip as o, tooltipValueFormat as s } from "../../utils/options.js";
import { useMemo as c } from "react";
//#region src/kits/F0DataChart/components/GaugeChart/useGaugeChartOptions.ts
function l(e) {
	return e === "sm" ? {
		showName: !1,
		detailFontSize: 18,
		titleFontSize: 11,
		ringWidth: 8
	} : e === "md" ? {
		showName: !0,
		detailFontSize: 24,
		titleFontSize: 12,
		ringWidth: 12
	} : {
		showName: !0,
		detailFontSize: 32,
		titleFontSize: 12,
		ringWidth: 18
	};
}
function u(u, { value: d, min: f = 0, max: p = 100, name: m, color: h, showValue: g = !0, valueFormatter: _, tooltipValueFormatter: v, echartsOptions: y }, b) {
	let x = r(u), S = e();
	return c(() => {
		let e = h ? n(h) : t(0), { colors: r } = x, c = l(b), u = c.showName && !!m, C = {
			type: "gauge",
			min: f,
			max: p,
			data: [{
				value: d,
				name: m ?? ""
			}],
			progress: {
				show: !0,
				width: c.ringWidth,
				roundCap: !0,
				itemStyle: { color: e }
			},
			pointer: { show: !1 },
			axisLine: {
				roundCap: !0,
				lineStyle: {
					width: c.ringWidth,
					color: [[1, x.colors.borderSecondary]]
				}
			},
			axisTick: { show: !1 },
			splitLine: { show: !1 },
			axisLabel: { show: !1 },
			title: {
				show: u,
				offsetCenter: [0, g ? "25%" : "0%"],
				color: r.foregroundSecondary,
				fontSize: c.titleFontSize,
				fontWeight: x.textStyle.fontWeight,
				fontFamily: x.textStyle.fontFamily
			},
			detail: {
				show: g,
				offsetCenter: [0, "0%"],
				color: r.foreground,
				fontSize: c.detailFontSize,
				fontWeight: 700,
				fontFamily: x.textStyle.fontFamily,
				formatter: _ ? (e) => _(e) : void 0
			}
		}, w = {
			animation: !1,
			textStyle: { fontFamily: x.textStyle.fontFamily },
			series: [C],
			tooltip: i({
				theme: x,
				formatter: (t) => {
					let n = t, r = Number(n.value ?? 0), i = p - f;
					return o({
						marker: a(e),
						title: n.name ? String(n.name) : void 0,
						value: s(v, _)(r),
						rows: [i > 0 && {
							value: `${((r - f) / i * 100).toFixed(1)}%`,
							label: S.dataChart.tooltip.ofRange
						}]
					}, x);
				}
			})
		};
		return y ? Object.assign({}, w, y) : w;
	}, [
		d,
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
export { u as useGaugeChartOptions };
