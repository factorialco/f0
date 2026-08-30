import e from "../../../../icons/app/ChartFunnel.js";
import t from "../../../../icons/app/ChartHorizontalBars.js";
import n from "../../../../icons/app/ChartLine.js";
import r from "../../../../icons/app/ChartPie.js";
import i from "../../../../icons/app/ChartVerticalBars.js";
import a from "../../../../icons/app/Table.js";
import { useI18n as o } from "../../../../lib/providers/i18n/i18n-provider.js";
import { tooltipValueFormat as s } from "../../../../kits/F0DataChart/utils/options.js";
import { DataChartEmptyStateView as c } from "../../../../kits/F0DataChart/components/EmptyState/DataChartEmptyStateView.js";
import { BarChartSkeleton as l, FunnelChartSkeleton as u, GaugeChartSkeleton as d, HeatmapChartSkeleton as f, LineChartSkeleton as p, PieChartSkeleton as m, RadarChartSkeleton as h, ScatterChartSkeleton as ee } from "../../../../kits/F0DataChart/skeletons.js";
import { F0DataChart as te } from "../../../../kits/F0DataChart/index.js";
import { OneDataCollection as g } from "../../../OneDataCollection/index.js";
import { useDataCollectionSource as _ } from "../../../OneDataCollection/hooks/useDataCollectionSource/useDataCollectionSource.js";
import { useAiChat as ne } from "../../../../kits/ai/F0AiChat/providers/AiChatStateProvider.js";
import { compatibleTargetTypes as re, defaultChartConfig as v, detectDataShape as y, fromCanonical as b, isRenderableChart as ie, toCanonical as x } from "../../utils/chartDataAdapter.js";
import { chartDataToTabular as S } from "../../utils/chartDataToTabular.js";
import { useChartDownloadActions as ae } from "../../hooks/useChartDownloadActions.js";
import { useDashboardItemData as oe } from "../../hooks/useDashboardItemData.js";
import { DashboardItem as se } from "../DashboardItem/DashboardItem.js";
import { AccessiblePointActions as ce } from "./AccessiblePointActions.js";
import { PointActionPopover as le } from "./PointActionPopover.js";
import { useCallback as C, useEffect as w, useMemo as T, useRef as E, useState as D } from "react";
import { jsx as O, jsxs as ue } from "react/jsx-runtime";
//#region src/patterns/F0AnalyticsDashboard/components/ChartItem/ChartItem.tsx
function de(o) {
	return [
		{
			label: o.dataChart.barChartVertical,
			value: "bar-vertical",
			icon: i,
			type: "bar",
			orientation: "vertical"
		},
		{
			label: o.dataChart.barChartHorizontal,
			value: "bar-horizontal",
			icon: t,
			type: "bar",
			orientation: "horizontal"
		},
		{
			label: o.dataChart.lineChart,
			value: "line",
			icon: n,
			type: "line"
		},
		{
			label: o.dataChart.funnel,
			value: "funnel",
			icon: e,
			type: "funnel"
		},
		{
			label: o.dataChart.pieChart,
			value: "pie",
			icon: r,
			type: "pie"
		},
		{
			label: o.dataChart.table,
			value: "table",
			icon: a,
			type: "table"
		}
	];
}
function k(e, t, n = "y") {
	return n === "x" && e.type === "scatter" ? s(e.xTooltipValueFormatter, e.xValueFormatter)(t) : s(e.tooltipValueFormatter, e.valueFormatter)(t);
}
function A(e, t, n) {
	if (t.type === "scatter" && n.values.length >= 2) {
		let r = n.category ? `${e} — ${n.category}` : e, i = t.xAxisName ?? "X", a = t.yAxisName ?? "Y";
		return `${r}\n${n.seriesName ? `${n.seriesName}\n` : ""}${i}: ${k(t, n.values[0], "x")}\n${a}: ${k(t, n.values[1])}`;
	}
	if (t.type === "line" && n.series.length > 1) {
		let r = t.categoryFormatter ? t.categoryFormatter(n.category) : n.category;
		return `${r ? `${e} — ${r}` : e}\n${n.series.map(({ name: e, value: n }) => `${e}: ${k(t, n)}`).join("\n")}`;
	}
	if (t.type === "radar" && t.indicators.length && n.values.length > 1) return `${n.category ? `${e} — ${n.category}` : e}\n${t.indicators.slice(0, n.values.length).map(({ name: e }, r) => `${e}: ${k(t, n.values[r])}`).join("\n")}`;
	if (t.type === "heatmap" && n.values.length >= 3) {
		let r = t.xCategories[n.values[0]], i = [t.yCategories[n.values[1]], r].filter(Boolean).join(" — ");
		return `${i ? `${e} — ${i}` : e}\n${k(t, n.value)}`;
	}
	let r = "categoryFormatter" in t && t.categoryFormatter ? t.categoryFormatter(n.category) : n.category;
	return `${r ? `${e} — ${r}` : e}\n${n.seriesName ? `${n.seriesName}: ` : ""}${k(t, n.value)}`;
}
function j(e) {
	let t = typeof e == "object" && e && "value" in e ? e.value : e;
	if (t == null || t === "") return null;
	let n = Number(t);
	return Number.isFinite(n) ? n : null;
}
function M(e, t) {
	return {
		key: e,
		point: t
	};
}
function N(e, t = {}) {
	let n = {
		source: "keyboard",
		clientX: 0,
		clientY: 0
	};
	switch (e.type) {
		case "bar": return e.series.flatMap((r, i) => t[r.name] === !1 ? [] : r.data.flatMap((t, a) => {
			let o = j(t);
			if (o === null) return [];
			let s = {
				seriesName: r.name,
				category: e.categories[a] ?? "",
				value: o,
				values: [o],
				series: [{
					name: r.name,
					seriesIndex: i,
					value: o
				}],
				dataIndex: a,
				seriesIndex: i,
				...n
			};
			return [M(`bar-${i}-${a}`, s)];
		}));
		case "line": return e.categories.flatMap((r, i) => {
			let a = e.series.flatMap((e, n) => {
				if (t[e.name] === !1) return [];
				let r = j(e.data[i]);
				return r === null ? [] : [{
					name: e.name,
					seriesIndex: n,
					value: r
				}];
			}), o = a[0];
			if (!o) return [];
			let s = {
				seriesName: o.name,
				category: r,
				value: o.value,
				values: [o.value],
				series: a,
				dataIndex: i,
				seriesIndex: o.seriesIndex,
				...n
			};
			return [M(`line-${i}`, s)];
		});
		case "funnel": return e.series.data.flatMap((r, i) => {
			if (t[r.name] === !1) return [];
			let a = j(r.value);
			if (a === null) return [];
			let o = {
				seriesName: e.series.name,
				category: r.name,
				value: a,
				values: [a],
				series: [{
					name: e.series.name,
					seriesIndex: 0,
					value: a
				}],
				dataIndex: i,
				seriesIndex: 0,
				...n
			};
			return [M(`funnel-${i}`, o)];
		});
		case "pie": return e.series.data.flatMap((r, i) => {
			if (t[r.name] === !1) return [];
			let a = j(r.value);
			if (a === null) return [];
			let o = {
				seriesName: e.series.name,
				category: r.name,
				value: a,
				values: [a],
				series: [{
					name: e.series.name,
					seriesIndex: 0,
					value: a
				}],
				dataIndex: i,
				seriesIndex: 0,
				...n
			};
			return [M(`pie-${i}`, o)];
		});
		case "radar": return e.series.flatMap((e, r) => {
			if (t[e.name] === !1) return [];
			let i = e.data;
			if (i.length === 0 || i.some((e) => !Number.isFinite(e))) return [];
			let a = i.at(-1);
			if (a === void 0) return [];
			let o = {
				seriesName: "",
				category: e.name,
				value: a,
				values: i,
				series: [{
					name: "",
					seriesIndex: 0,
					value: a
				}],
				dataIndex: r,
				seriesIndex: 0,
				...n
			};
			return [M(`radar-${r}`, o)];
		});
		case "gauge": {
			let t = j(e.value);
			return t === null ? [] : [M("gauge-0", {
				seriesName: "",
				category: e.name ?? "",
				value: t,
				values: [t],
				series: [{
					name: "",
					seriesIndex: 0,
					value: t
				}],
				dataIndex: 0,
				seriesIndex: 0,
				...n
			})];
		}
		case "heatmap": return e.data.flatMap(([e, t, r], i) => {
			if (![
				e,
				t,
				r
			].every(Number.isFinite)) return [];
			let a = {
				seriesName: "",
				category: "",
				value: r,
				values: [
					e,
					t,
					r
				],
				series: [{
					name: "",
					seriesIndex: 0,
					value: r
				}],
				dataIndex: i,
				seriesIndex: 0,
				...n
			};
			return [M(`heatmap-${i}`, a)];
		});
		case "scatter": return e.series.flatMap((e, r) => t[e.name] === !1 ? [] : e.data.flatMap((t, i) => {
			let [a, o] = Array.isArray(t) ? t : [t.x, t.y];
			if (![a, o].every(Number.isFinite)) return [];
			let s = Array.isArray(t) ? "" : t.label ?? "", c = {
				seriesName: e.name,
				category: s,
				value: o,
				values: [a, o],
				series: [{
					name: e.name,
					seriesIndex: r,
					value: o
				}],
				dataIndex: i,
				seriesIndex: r,
				...n
			};
			return [M(`scatter-${r}-${i}`, c)];
		}));
	}
}
function P(e, t = {}) {
	switch (e.type) {
		case "bar": return e.series.some((e) => t[e.name] !== !1 && e.data.some((e) => j(e) !== null));
		case "line": return e.categories.some((n, r) => e.series.some((e) => t[e.name] !== !1 && j(e.data[r]) !== null));
		case "funnel": return e.series.data.some((e) => t[e.name] !== !1 && j(e.value) !== null);
		case "pie": return e.series.data.some((e) => t[e.name] !== !1 && j(e.value) !== null);
		case "radar": return e.series.some((e) => t[e.name] !== !1 && e.data.length > 0 && e.data.every(Number.isFinite));
		case "gauge": return j(e.value) !== null;
		case "heatmap": return e.data.some(([e, t, n]) => [
			e,
			t,
			n
		].every(Number.isFinite));
		case "scatter": return e.series.some((e) => t[e.name] !== !1 && e.data.some((e) => {
			let [t, n] = Array.isArray(e) ? e : [e.x, e.y];
			return [t, n].every(Number.isFinite);
		}));
	}
}
var fe = { type: "bar" };
function pe(e) {
	switch (e.type) {
		case "bar": return /* @__PURE__ */ O(l, {
			orientation: e.orientation,
			stacked: e.stacked,
			showLegend: e.showLegend
		});
		case "line": return /* @__PURE__ */ O(p, {
			lineType: e.lineType,
			showArea: e.showArea,
			showDots: e.showDots,
			showLegend: e.showLegend
		});
		case "funnel": return /* @__PURE__ */ O(u, {
			orient: e.orient,
			sort: e.sort,
			showLegend: e.showLegend
		});
		case "pie": return /* @__PURE__ */ O(m, {
			innerRadius: e.innerRadius,
			showLegend: e.showLegend
		});
		case "radar": return /* @__PURE__ */ O(h, { showLegend: e.showLegend });
		case "gauge": return /* @__PURE__ */ O(d, {});
		case "heatmap": return /* @__PURE__ */ O(f, {});
		case "scatter": return /* @__PURE__ */ O(ee, { showLegend: e.showLegend ?? !1 });
	}
}
function F(e, t, n, r) {
	let i = n ?? e.chart.type;
	if (i === y(t, i) && i === e.chart.type && !r) return I(e, t);
	let a = x(t), o = b(a, i), s = v(i), c = {};
	switch ("valueFormatter" in e.chart && e.chart.valueFormatter && (c.valueFormatter = e.chart.valueFormatter), "tooltipValueFormatter" in e.chart && e.chart.tooltipValueFormatter && (c.tooltipValueFormatter = e.chart.tooltipValueFormatter), "showLegend" in e.chart && (c.showLegend = e.chart.showLegend), i === "bar" && "showLabels" in e.chart && e.chart.showLabels !== void 0 && (c.showLabels = e.chart.showLabels), i) {
		case "bar": {
			let t = r ?? ("orientation" in e.chart ? e.chart.orientation : void 0) ?? s.orientation;
			return {
				...s,
				...c,
				...t ? { orientation: t } : {},
				categories: o.categories ?? [],
				series: o.series
			};
		}
		case "line": return {
			...s,
			...c,
			categories: o.categories ?? [],
			series: o.series
		};
		case "funnel": return {
			...s,
			...c,
			series: o.series
		};
		case "pie": return {
			...s,
			...c,
			series: o.series
		};
		case "radar": return {
			...s,
			...c,
			indicators: o.indicators ?? [],
			series: o.series
		};
		case "gauge": return {
			...s,
			...c,
			...o.series
		};
		case "heatmap": return {
			...s,
			...c,
			xCategories: o.xCategories ?? [],
			yCategories: o.yCategories ?? [],
			data: o.data ?? []
		};
		case "scatter": return {
			...s,
			...c,
			series: o.scatterSeries ?? []
		};
	}
}
function I(e, t) {
	let { chart: n } = e;
	switch (n.type) {
		case "funnel": {
			let e = t.series;
			if (Array.isArray(t.series)) {
				let n = x(t, "bar");
				e = b(n, "funnel").series;
			}
			return {
				...n,
				series: e
			};
		}
		case "pie": return {
			...n,
			series: t.series
		};
		case "radar": return {
			...n,
			indicators: t.indicators ?? [],
			series: t.series
		};
		case "gauge": return {
			...n,
			...t.series
		};
		case "heatmap": return {
			...n,
			xCategories: t.xCategories ?? [],
			yCategories: t.yCategories ?? [],
			data: t.data ?? []
		};
		case "scatter": return {
			...n,
			series: t.scatterSeries ?? []
		};
		case "bar":
		case "line": {
			let { series: e } = t, r = t.categories ?? [];
			if (e && !Array.isArray(e)) {
				let i = x(t, "funnel"), a = b(i, n.type);
				e = a.series, r = a.categories ?? [];
			}
			return {
				...n,
				...n.type === "bar" ? { showLabels: n.showLabels ?? !0 } : {},
				categories: r,
				series: e
			};
		}
	}
}
function me({ config: e, data: t }) {
	let n = y(t, e.type), r = n === e.type ? e : {
		...e,
		type: n
	}, i = T(() => S(r, t), [r, t]), a = T(() => ({
		dataAdapter: { fetchData: () => ({ records: i.rows }) },
		columns: i.columns.map((e) => ({
			label: e,
			id: e
		}))
	}), [i]), o = _(a, [i]), s = T(() => [{
		type: "table",
		options: { columns: i.columns.map((e, t) => ({
			label: e,
			render: (n) => String(n[i.keys?.[t] ?? e] ?? "")
		})) }
	}], [i.columns]);
	return /* @__PURE__ */ O(g, {
		fullHeight: !0,
		source: o,
		visualizations: s
	});
}
function L(e) {
	return ie(e.chart) && e.chart.type === "bar" && "orientation" in e.chart && e.chart.orientation === "horizontal";
}
function R({ item: e, filters: t, actions: n, itemFilters: r, editMode: i, handleDelete: a, onAskAi: s, onAskAiTarget: l, onTransformChart: u, isFullscreen: d, onFullscreenChange: f }) {
	let p = o(), [m, h] = D("chart"), { enabled: ee, setPendingQuote: g, setOpen: _, focusChatInput: v } = ne(), b = !ie(e.chart), x = b ? fe : e.chart, [S, k] = D(null), [j, M] = D(), I = e.useDashboardFilters !== !1, R = JSON.stringify(r?.value ?? {}), { data: z, isLoading: B, error: he, retry: ge } = oe(e.fetchData, t, I, R), V = E(null), H = E(null), U = T(() => z && !b ? F(e, z) : void 0, [
		e,
		z,
		b
	]);
	w(() => {
		k(null), M(void 0);
	}, [
		z,
		B,
		x.type
	]);
	let W = s ? "host" : ee ? "chat" : "none", G = W !== "none" && e.title.trim().length > 0;
	w(() => {
		k(null);
	}, [W]);
	let K = C((t) => {
		if (s) {
			s({
				id: e.id,
				title: e.title,
				point: t
			}), k(null), requestAnimationFrame(() => {
				let e = document.activeElement;
				(!e || e === document.body || !e.isConnected) && H.current?.focus();
			});
			return;
		}
		if (!U) return;
		let n = { text: A(e.title, U, t) };
		l?.({
			id: e.id,
			title: e.title,
			point: t,
			quote: n
		}), g(n), d && f?.(!1), _(!0), v(), k(null);
	}, [
		e,
		U,
		s,
		l,
		d,
		f,
		g,
		_,
		v
	]), _e = T(() => de(p), [p]), q = ae({
		chartContainerRef: V,
		chartConfig: x,
		data: z,
		title: e.title
	}), ve = T(() => [...n ?? [], ...q], [n, q]), ye = T(() => !!U && G && P(U, j), [
		U,
		G,
		j
	]), be = C(() => U ? N(U, j).map(({ key: t, point: n }) => ({
		key: t,
		getLabel: () => A(e.title, U, n).split("\n").join(", "),
		onSelect: () => K(n)
	})) : [], [
		U,
		e.title,
		j,
		K
	]), xe = C((e) => {
		k(null), e !== "outside" && requestAnimationFrame(() => H.current?.focus());
	}, []), J = x.type === "bar" ? "orientation" in x ? x.orientation ?? "vertical" : "vertical" : void 0, Y = z ? y(z, x.type) : x.type, Se = T(() => re(Y), [Y]), Ce = z && Array.isArray(z.series) ? z.series.length : 1, we = _e.filter((e) => {
		let t = e.type === "bar" ? "bar" : e.type;
		return !(!Se.has(t) || e.type === "pie" && Ce > 1);
	}), Te = u && Y !== "scatter" ? we.map((t) => {
		let n = t.type === "table", r = n ? m === "table" : m === "chart" && x.type === t.type && (t.type !== "bar" || J === t.orientation);
		return {
			label: t.label,
			value: t.value,
			icon: t.icon,
			isActive: r,
			onSelect: () => {
				n ? h("table") : (h("chart"), (x.type !== t.type || t.type === "bar" && J !== t.orientation) && u(e.id, t.type, t.orientation));
			}
		};
	}) : void 0, X = !!d && L(e), [Z, Ee] = D(0), Q = !!f && L(e), De = Q && !d && Z > 0, Oe = Q && !!d, ke = z?.categories?.length ?? 0, Ae = De ? p.dataChart.windowedCategories.replace("{{count}}", String(Math.max(0, ke - Z))).replace("{{total}}", String(ke)) : void 0, $ = De ? {
		label: p.actions.showAll,
		onClick: () => f?.(!0)
	} : Oe ? {
		label: p.actions.showLess,
		onClick: () => f?.(!1)
	} : void 0;
	return /* @__PURE__ */ O(se, {
		title: e.title,
		description: Ae ?? e.description,
		info: e.info,
		...$ ? { descriptionAction: $ } : {},
		explanation: e.explanation,
		isLoading: B,
		error: he ?? (b ? /* @__PURE__ */ Error() : void 0),
		onRetry: b ? void 0 : ge,
		skeleton: pe(x),
		actions: ve,
		itemFilters: r,
		editMode: i,
		handleDelete: a,
		onAskAi: s,
		onAskAiTarget: l,
		itemId: e.id,
		chartTypeOptions: Te,
		isFullscreen: d,
		fitContent: X,
		onFullscreenChange: f,
		children: z && U ? m === "table" ? /* @__PURE__ */ O(me, {
			config: x,
			data: z
		}) : /* @__PURE__ */ ue("div", {
			ref: V,
			className: "relative h-full w-full px-4 py-3",
			children: [
				/* @__PURE__ */ O(te, {
					...U,
					...U.type !== "gauge" && U.type !== "heatmap" ? { onLegendSelectionChange: M } : {},
					onPointClick: G ? (e) => k(e) : void 0,
					...Q ? {
						windowCategories: !0,
						onHiddenCategoriesChange: Ee
					} : {},
					...X ? { showAllCategories: !0 } : {}
				}),
				/* @__PURE__ */ O(ce, {
					hasActions: ye,
					getActions: be,
					resetOn: {
						data: z,
						isLoading: B,
						chartType: x.type,
						legendSelection: j,
						owner: W,
						title: e.title
					},
					label: p.ai.dashboardItem.askOne,
					triggerLabel: `${p.ai.dashboardItem.askOne}: ${e.title}`,
					previousLabel: p.navigation.previous,
					nextLabel: p.navigation.next,
					setTrigger: (e) => {
						H.current = e;
					},
					focusChatAfterSelect: !s,
					focusChatInput: v
				}),
				/* @__PURE__ */ O(le, {
					anchor: S,
					onAsk: () => {
						S && K(S);
					},
					onDismiss: xe
				})
			]
		}) : B ? null : /* @__PURE__ */ O("div", {
			className: "h-full w-full px-4 py-3",
			children: /* @__PURE__ */ O(c, {})
		})
	});
}
//#endregion
export { R as ChartItem, N as buildAccessibleChartPoints, F as buildChartProps, A as buildPointQuoteText, L as chartItemFitsContent, P as hasAccessibleChartPoint };
