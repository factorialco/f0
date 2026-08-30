//#region src/patterns/F0AnalyticsDashboard/utils/chartDataAdapter.ts
function e(e) {
	return typeof e == "number" ? e : typeof e == "object" && e && "value" in e ? e.value : 0;
}
function t(t) {
	let n = t.categories ?? [], r = t.series;
	if (r && !Array.isArray(r) && "data" in r) {
		let e = r;
		if (Array.isArray(e.data) && e.data.length > 0 && typeof e.data[0] == "object" && "name" in e.data[0]) return {
			categories: e.data.map((e) => e.name),
			series: [{
				name: e.name,
				data: e.data.map((e) => e.value)
			}]
		};
	}
	return {
		categories: n,
		series: (Array.isArray(r) ? r : []).map((t) => ({
			name: t.name,
			data: (t.data ?? []).map(e)
		}))
	};
}
function n(e) {
	if (Array.isArray(e.series)) return t(e);
	let n = e.series;
	return n?.data ? {
		categories: n.data.map((e) => e.name),
		series: [{
			name: n.name,
			data: n.data.map((e) => e.value)
		}]
	} : {
		categories: [],
		series: []
	};
}
function r(e) {
	let t = e.series;
	return t?.data ? {
		categories: t.data.map((e) => e.name),
		series: [{
			name: t.name,
			data: t.data.map((e) => e.value)
		}]
	} : {
		categories: [],
		series: []
	};
}
function i(e) {
	let t = e.indicators ?? [], n = Array.isArray(e.series) ? e.series : [];
	return {
		categories: t.map((e) => typeof e == "string" ? e : e.name),
		series: n.map((e) => ({
			name: e.name,
			data: [...e.data]
		}))
	};
}
function a(e) {
	let t = e.series;
	return {
		categories: [t?.name ?? "Value"],
		series: [{
			name: "Value",
			data: [t?.value ?? 0]
		}]
	};
}
var o = new Set(Object.keys({
	bar: !0,
	line: !0,
	funnel: !0,
	pie: !0,
	radar: !0,
	gauge: !0,
	heatmap: !0,
	scatter: !0
}));
function s(e) {
	return e != null && o.has(e.type);
}
function c(e) {
	return Array.isArray(e) ? String(e[0]) : e.label ?? String(e.x);
}
function l(e) {
	let t = e.scatterSeries ?? [], n = [], r = /* @__PURE__ */ new Set();
	for (let e of t) for (let t of e.data) {
		let e = c(t);
		r.has(e) || (r.add(e), n.push(e));
	}
	return {
		categories: n,
		series: t.map((e) => {
			let t = new Map(e.data.map((e) => [c(e), Array.isArray(e) ? e[1] : e.y]));
			return {
				name: e.name,
				data: n.map((e) => t.get(e) ?? 0)
			};
		})
	};
}
function u(e) {
	let t = e.xCategories ?? [], n = e.yCategories ?? [], r = e.data ?? [];
	if (t.length === 0 || n.length === 0) return {
		categories: [],
		series: []
	};
	let i = /* @__PURE__ */ new Map();
	for (let [e, t, n] of r) i.set(`${e},${t}`, n);
	return {
		categories: t,
		series: n.map((e, n) => ({
			name: e,
			data: t.map((e, t) => i.get(`${t},${n}`) ?? 0)
		}))
	};
}
function d(e, t) {
	return e.scatterSeries === void 0 ? e.xCategories?.length || e.yCategories?.length || e.data && Array.isArray(e.data) && e.data.length > 0 && Array.isArray(e.data[0]) ? "heatmap" : e.indicators?.length ? "radar" : e.series && !Array.isArray(e.series) && "value" in e.series && typeof e.series.value == "number" ? "gauge" : e.series && !Array.isArray(e.series) && "data" in e.series ? t === "pie" ? "pie" : "funnel" : "bar" : "scatter";
}
function f(e, o) {
	switch (o ?? d(e)) {
		case "bar":
		case "line": return t(e);
		case "funnel": return n(e);
		case "pie": return r(e);
		case "radar": return i(e);
		case "gauge": return a(e);
		case "heatmap": return u(e);
		case "scatter": return l(e);
	}
}
function p(e) {
	return {
		categories: e.categories,
		series: e.series.map((e) => ({
			name: e.name,
			data: e.data
		}))
	};
}
function m(e) {
	let t = e.series[0];
	return { series: {
		name: t?.name ?? "Funnel",
		data: e.categories.map((e, n) => ({
			name: e,
			value: t?.data[n] ?? 0
		}))
	} };
}
function h(e) {
	let t = e.series[0];
	return { series: {
		name: t?.name ?? "Distribution",
		data: e.categories.map((e, n) => ({
			name: e,
			value: t?.data[n] ?? 0
		}))
	} };
}
function g(e) {
	let t = e.categories.map((t, n) => Math.max(...e.series.map((e) => e.data[n] ?? 0), 1));
	return {
		indicators: e.categories.map((e, n) => ({
			name: e,
			max: Math.ceil(t[n] * 1.2)
		})),
		series: e.series.map((e) => ({
			name: e.name,
			data: e.data
		}))
	};
}
function _(e) {
	return { scatterSeries: e.series.map((t) => ({
		name: t.name,
		data: e.categories.map((e, n) => ({
			x: n,
			y: t.data[n] ?? 0,
			label: e
		}))
	})) };
}
function v(e) {
	return {
		series: {
			value: e.series[0]?.data[0] ?? 0,
			name: e.categories[0] ?? "Value"
		},
		categories: void 0
	};
}
function y(e, t) {
	switch (t) {
		case "bar":
		case "line": return p(e);
		case "funnel": return m(e);
		case "pie": return h(e);
		case "radar": return g(e);
		case "gauge": return v(e);
		case "heatmap": return {
			xCategories: [],
			yCategories: [],
			data: []
		};
		case "scatter": return _(e);
	}
}
function b(e) {
	let t = /* @__PURE__ */ new Set();
	switch (t.add("table"), t.add(e), e) {
		case "bar":
		case "line":
			t.add("bar"), t.add("line"), t.add("funnel"), t.add("radar"), t.add("pie");
			break;
		case "funnel":
		case "pie":
			t.add("bar"), t.add("line"), t.add("funnel"), t.add("pie"), t.add("radar");
			break;
		case "radar":
			t.add("bar"), t.add("line"), t.add("funnel"), t.add("pie");
			break;
		case "gauge": break;
		case "heatmap": t.add("bar"), t.add("line");
	}
	return t;
}
function x(e) {
	switch (e) {
		case "bar": return {
			type: "bar",
			orientation: "vertical",
			showLabels: !0
		};
		case "line": return {
			type: "line",
			lineType: "linear",
			showArea: !0
		};
		case "funnel": return {
			type: "funnel",
			showConversion: !0,
			colorScale: !0
		};
		case "pie": return {
			type: "pie",
			innerRadius: 0,
			showLabels: !0
		};
		case "radar": return {
			type: "radar",
			showArea: !0
		};
		case "gauge": return {
			type: "gauge",
			showValue: !0
		};
		case "heatmap": return { type: "heatmap" };
		case "scatter": return {
			type: "scatter",
			scaleAxes: !0
		};
	}
}
//#endregion
export { b as compatibleTargetTypes, x as defaultChartConfig, d as detectDataShape, y as fromCanonical, s as isRenderableChart, f as toCanonical };
