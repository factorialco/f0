function e(e) {
	return Math.min(400, (e ?? 600) * .3);
}
function t(e, t, n = 60) {
	if (!t || e <= 1 || t / e >= n) return;
	let r = Math.max(1, Math.floor(t / n));
	return Math.max(0, Math.ceil(e / r) - 1);
}
function n(e, t, n) {
	if (!t || t <= 0 || e <= 1) return;
	let r = (e) => {
		if (e <= 1) return Math.floor(t);
		if (n) {
			let n = t / (e - 1);
			return Math.floor(n * .65);
		}
		return Math.floor(t / e) - 0;
	}, i = r(e);
	if (i >= 24) return {
		interval: 0,
		labelWidth: Math.max(i, 24)
	};
	let a = Math.max(2, Math.floor(t / 24)), o = Math.max(0, Math.ceil(e / a) - 1), s = r(Math.max(1, Math.ceil(e / (o + 1))));
	return {
		interval: o,
		labelWidth: Math.max(24, s)
	};
}
function r({ data: e, theme: r, formatter: i, axisLength: a, minLabelSpace: o, boundaryGap: s, maxLabelWidth: c, show: l = !0, smartLayout: u = !1, edgeAligned: d = !1, visibleCount: f }) {
	let p = u && l ? n(e.length, a, d) : void 0, m = p?.interval ?? t(f ?? e.length, a, o), h = p?.labelWidth ?? c;
	return {
		type: "category",
		data: e,
		...s === void 0 ? {} : { boundaryGap: s },
		axisLine: {
			show: l,
			lineStyle: { color: r.colors.borderSecondary }
		},
		axisTick: { show: !1 },
		axisLabel: {
			show: l,
			fontSize: r.textStyle.fontSize,
			fontWeight: r.textStyle.fontWeight,
			color: r.colors.foregroundTertiary,
			hideOverlap: !0,
			margin: 12,
			...d ? {
				showMinLabel: !0,
				showMaxLabel: !0
			} : {},
			...d ? {
				alignMinLabel: "left",
				alignMaxLabel: "right"
			} : {},
			...m === void 0 ? {} : { interval: m },
			...i ? { formatter: (e) => i(String(e)) } : {},
			...h === void 0 ? {} : {
				width: h,
				overflow: "truncate",
				ellipsis: "..."
			}
		},
		...l && h !== void 0 ? { triggerEvent: !0 } : {}
	};
}
function i({ theme: e, showGrid: t, formatter: n, maxLabelWidth: r, show: i = !0, splitNumber: a, max: o, position: s, scale: c, alignEdgeLabels: l }) {
	return {
		type: "value",
		...a === void 0 ? {} : { splitNumber: a },
		...o === void 0 ? {} : { max: o },
		...s === void 0 ? {} : { position: s },
		...c === void 0 ? {} : { scale: c },
		axisLine: { show: !1 },
		axisTick: { show: !1 },
		axisLabel: {
			show: i,
			fontSize: e.textStyle.fontSize,
			fontWeight: e.textStyle.fontWeight,
			color: e.colors.foregroundTertiary,
			hideOverlap: !0,
			...l ? {
				alignMinLabel: "left",
				alignMaxLabel: "right"
			} : {},
			...n ? { formatter: (e) => n(Number(e)) } : {},
			...r === void 0 ? {} : {
				width: r,
				overflow: "truncate",
				ellipsis: "..."
			}
		},
		...i && r !== void 0 ? { triggerEvent: !0 } : {},
		splitLine: {
			show: t,
			lineStyle: {
				type: "solid",
				color: e.colors.borderSecondary
			}
		}
	};
}
function a({ show: e, data: t, theme: n }) {
	if (e) return {
		type: "scroll",
		show: !0,
		data: t,
		bottom: 0,
		left: "center",
		icon: "circle",
		itemWidth: 10,
		itemHeight: 10,
		selectedMode: !0,
		textStyle: {
			fontWeight: n.textStyle.fontWeight,
			color: n.colors.foregroundSecondary
		},
		pageIconColor: n.colors.foregroundSecondary,
		pageIconInactiveColor: n.colors.borderSecondary,
		pageTextStyle: { color: n.colors.foregroundTertiary }
	};
}
function o({ showLegend: e }) {
	return {
		left: 4,
		right: 4,
		top: 8,
		bottom: e ? 32 : 4,
		containLabel: !0
	};
}
var s = {
	label: { show: !1 },
	itemStyle: {
		shadowBlur: 0,
		shadowOffsetX: 0,
		shadowColor: "transparent"
	}
};
function c(e) {
	return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
var l = 130;
function u({ marker: e, title: t, subtitle: n, value: r, rows: i = [] }, a) {
	let o = `color: ${a.colors.foregroundSecondary}; font-size: 12px`, s = "font-size: 20px; font-weight: 600; line-height: 1.2", u = i.filter((e) => !!e);
	return `<div style="min-width: ${l}px">${[
		t === void 0 ? "" : `<div style="font-weight: 600">${String(e ?? "")}${c(t)}</div>`,
		n === void 0 ? "" : `<div style="${o}">${c(n)}</div>`,
		r === void 0 ? "" : `<div style="${s}; margin-top: 6px">${c(r)}</div>`,
		u.length > 0 ? `<div style="margin-top: 6px">${u.map((e) => {
			let t = e.color ?? a.colors.foreground, n = String(e.marker ?? "");
			return e.size === "large" ? `<div style="margin-top: 6px">${n}<div style="${s}; color: ${t}">${c(e.value)}</div><div style="${o}">${c(e.label)}</div></div>` : `<div style="${o}">${n}<strong style="color: ${t}">${c(e.value)}</strong> ${c(e.label)}</div>`;
		}).join("")}</div>` : ""
	].join("")}</div>`;
}
function d(e, t) {
	let n = e ?? t;
	return (e) => n ? n(e) : e.toLocaleString();
}
function f(e) {
	return `<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:${e.replace(/[^a-zA-Z0-9#(),.%\s/-]/g, "")}"></span>`;
}
function p(e, t, n, r) {
	if (t === void 0 || t === 0 || !Number.isFinite(e)) return;
	let i = (e - t) / Math.abs(t) * 100;
	return {
		value: `${i >= 0 ? "+" : ""}${i.toFixed(1)}%`,
		label: n,
		color: i >= 0 ? r.colors.positive : r.colors.critical
	};
}
function m({ theme: e, filterSeries: t, valueFormatter: n, customFormatter: r }) {
	let { tooltip: i, axisPointer: a, colors: o } = e;
	return {
		trigger: "axis",
		confine: !0,
		padding: i.padding,
		borderWidth: i.borderWidth,
		transitionDuration: i.transitionDuration,
		textStyle: {
			color: o.foreground,
			fontSize: 14
		},
		position(e, t, n, r, i) {
			let a = i.contentSize[0];
			return [e[0] < i.viewSize[0] / 2 ? e[0] + 10 : e[0] - a - 10, "20%"];
		},
		axisPointer: {
			type: "line",
			lineStyle: {
				color: a.color,
				type: a.type
			}
		},
		extraCssText: [
			`box-shadow: ${i.boxShadow}`,
			`border-radius: ${i.borderRadius}px`,
			`border: 1px solid ${o.borderSecondary}`,
			"backdrop-filter: blur(30px)",
			"-webkit-backdrop-filter: blur(30px)",
			`background: ${i.background}`
		].join("; "),
		formatter: r ?? ((e) => {
			if (!Array.isArray(e)) return "";
			let r = t ? e.filter((e) => !t(String(e.seriesName ?? ""))) : e;
			return r.length === 0 ? "" : `${`<div style="margin-bottom: 4px; font-weight: 500">${c(r[0].axisValueLabel ?? r[0].name ?? "")}</div>`}${r.map((e) => {
				let t = n ? n(Number(e.value)) : String(e.value);
				return `<div>${String(e.marker ?? "")} ${c(e.seriesName ?? "")} <strong>${c(t)}</strong></div>`;
			}).join("")}`;
		})
	};
}
function h({ theme: e, formatter: t }) {
	let { tooltip: n, colors: r } = e;
	return {
		trigger: "item",
		padding: n.padding,
		borderWidth: n.borderWidth,
		transitionDuration: n.transitionDuration,
		textStyle: {
			color: r.foreground,
			fontSize: e.textStyle.fontSize
		},
		extraCssText: [
			`box-shadow: ${n.boxShadow}`,
			`border-radius: ${n.borderRadius}px`,
			`border: 1px solid ${r.borderSecondary}`,
			"backdrop-filter: blur(30px)",
			"-webkit-backdrop-filter: blur(30px)",
			`background: ${n.background}`
		].join("; "),
		formatter: t
	};
}
function g({ isVertical: t, categories: n, theme: a, showGrid: o, valueFormatter: s, categoryFormatter: c, containerWidth: l, containerHeight: u, boundaryGap: d, showCategoryAxis: f = !0, showValueAxis: p = !0, categoryMaxLabelWidth: m, categoryVisibleCount: h, valueAxisSplitNumber: g, valueAxisMax: _ }) {
	let v = e(l), y = l ? Math.max(0, l - 56) : void 0, b = Math.round(a.textStyle.fontSize * 1.4) + 0, x = r({
		data: n,
		theme: a,
		formatter: c,
		axisLength: t ? y : u,
		minLabelSpace: t ? void 0 : b,
		boundaryGap: d,
		show: f,
		smartLayout: t,
		edgeAligned: t && d === !1,
		...h === void 0 ? {} : { visibleCount: h },
		...m === void 0 ? t ? {} : { maxLabelWidth: v } : { maxLabelWidth: m }
	}), S = i({
		theme: a,
		showGrid: o,
		formatter: s,
		show: p,
		splitNumber: g,
		..._ === void 0 ? {} : { max: _ },
		...t ? { maxLabelWidth: v } : { position: "top" }
	});
	return {
		xAxis: t ? { ...x } : { ...S },
		yAxis: t ? { ...S } : {
			...x,
			inverse: !0
		}
	};
}
function _({ categories: e, theme: t, series: n, legendData: r, isVertical: i, showGrid: c, showLegend: l, valueFormatter: u, categoryFormatter: d, tooltipFilterSeries: f, tooltipFormatter: p, tooltipValueFormatter: h, echartsOptions: _, containerWidth: v, containerHeight: y, boundaryGap: b, showCategoryAxis: x = !0, showValueAxis: S = !0, categoryMaxLabelWidth: C, categoryVisibleCount: w, valueAxisSplitNumber: T, valueAxisMax: E }) {
	let { xAxis: D, yAxis: O } = g({
		isVertical: i,
		categories: e,
		theme: t,
		showGrid: c,
		valueFormatter: u,
		categoryFormatter: d,
		containerWidth: v,
		containerHeight: y,
		boundaryGap: b,
		showCategoryAxis: x,
		showValueAxis: S,
		categoryMaxLabelWidth: C,
		categoryVisibleCount: w,
		valueAxisSplitNumber: T,
		valueAxisMax: E
	}), k = {
		animation: !1,
		color: t.palette,
		textStyle: { fontFamily: t.textStyle.fontFamily },
		xAxis: D,
		yAxis: O,
		series: n,
		labelLayout: { hideOverlap: !0 },
		legend: a({
			show: l,
			data: r,
			theme: t
		}),
		grid: o({ showLegend: l }),
		tooltip: m({
			theme: t,
			filterSeries: f,
			valueFormatter: h ?? u,
			customFormatter: p
		}),
		emphasis: s
	};
	return _ ? Object.assign({}, k, _) : k;
}
//#endregion
export { s as DEFAULT_EMPHASIS, g as buildAxes, _ as buildBaseChartOptions, r as buildCategoryAxis, o as buildGrid, h as buildItemTooltip, a as buildLegend, m as buildTooltip, i as buildValueAxis, n as computeCategoryAxisLayout, t as computeLabelInterval, p as deltaRow, c as escapeTooltipText, e as labelWidthCap, f as renderMarker, u as renderValueTooltip, d as tooltipValueFormat };
