//#region src/patterns/F0AnalyticsDashboard/utils/chartDataToTabular.ts
function e(e) {
	return e == null ? null : typeof e == "number" ? e : typeof e == "object" && "value" in e ? e.value : null;
}
function t(e, t) {
	switch (e.type) {
		case "bar":
		case "line": return n(t);
		case "funnel": return r(t);
		case "pie": return i(t);
		case "radar": return a(t);
		case "gauge": return o(t);
		case "heatmap": return s(t);
		case "scatter": return c(e, t);
	}
}
function n(t) {
	let n = t.categories ?? [], r = t.series, i = Array.isArray(r) ? r : [];
	return {
		columns: ["Category", ...i.map((e) => e.name)],
		rows: n.map((t, n) => {
			let r = { Category: t };
			for (let t of i) r[t.name] = e(t.data[n]);
			return r;
		})
	};
}
function r(e) {
	if (Array.isArray(e.series)) {
		let t = e.series[0];
		return t ? {
			columns: ["Stage", "Value"],
			rows: (e.categories ?? []).map((e, n) => ({
				Stage: e,
				Value: t.data[n] ?? 0
			}))
		} : {
			columns: ["Stage", "Value"],
			rows: []
		};
	}
	return {
		columns: ["Stage", "Value"],
		rows: (e.series?.data ?? []).map((e) => ({
			Stage: e.name,
			Value: e.value
		}))
	};
}
function i(e) {
	return {
		columns: ["Name", "Value"],
		rows: (e.series?.data ?? []).map((e) => ({
			Name: e.name,
			Value: e.value
		}))
	};
}
function a(e) {
	let t = e.indicators ?? [], n = e.series, r = Array.isArray(n) ? n : [];
	return {
		columns: ["Indicator", ...r.map((e) => e.name)],
		rows: t.map((e, t) => {
			let n = { Indicator: typeof e == "string" ? e : e.name };
			for (let e of r) n[e.name] = e.data[t] ?? null;
			return n;
		})
	};
}
function o(e) {
	let t = e.series;
	return {
		columns: ["Name", "Value"],
		rows: [{
			Name: t?.name ?? "Value",
			Value: t?.value ?? 0
		}]
	};
}
function s(e) {
	let t = e.xCategories ?? [], n = e.yCategories ?? [];
	return {
		columns: [
			"X",
			"Y",
			"Value"
		],
		rows: (e.data ?? []).map(([e, r, i]) => ({
			X: t[e] ?? e,
			Y: n[r] ?? r,
			Value: i
		}))
	};
}
function c(e, t) {
	let n = (t.scatterSeries ?? []).flatMap((e) => e.data.map((t) => ({
		series: e.name,
		label: Array.isArray(t) ? "" : t.label ?? "",
		x: Array.isArray(t) ? t[0] : t.x,
		y: Array.isArray(t) ? t[1] : t.y
	})));
	return {
		columns: [
			"Series",
			"Label",
			e.xAxisName ?? "X",
			e.yAxisName ?? "Y"
		],
		keys: [
			"series",
			"label",
			"x",
			"y"
		],
		rows: n
	};
}
//#endregion
export { t as chartDataToTabular };
