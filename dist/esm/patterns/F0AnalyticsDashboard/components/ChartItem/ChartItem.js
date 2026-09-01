import e from "../../../../icons/app/ChartFunnel.js";
import t from "../../../../icons/app/ChartHorizontalBars.js";
import n from "../../../../icons/app/ChartLine.js";
import r from "../../../../icons/app/ChartPie.js";
import i from "../../../../icons/app/ChartVerticalBars.js";
import a from "../../../../icons/app/Table.js";
import { useI18n as o } from "../../../../lib/providers/i18n/i18n-provider.js";
import { tooltipValueFormat as s } from "../../../../kits/F0DataChart/utils/options.js";
import { DataChartEmptyStateView as c } from "../../../../kits/F0DataChart/components/EmptyState/DataChartEmptyStateView.js";
import { BarChartSkeleton as l, FunnelChartSkeleton as u, GaugeChartSkeleton as d, HeatmapChartSkeleton as f, LineChartSkeleton as p, PieChartSkeleton as m, RadarChartSkeleton as h, ScatterChartSkeleton as g } from "../../../../kits/F0DataChart/skeletons.js";
import { F0DataChart as ee } from "../../../../kits/F0DataChart/index.js";
import { useAiChat as te } from "../../../../kits/ai/F0AiChat/providers/AiChatStateProvider.js";
import { OneDataCollection as _ } from "../../../OneDataCollection/index.js";
import { useDataCollectionSource as v } from "../../../OneDataCollection/hooks/useDataCollectionSource/useDataCollectionSource.js";
import { compatibleTargetTypes as ne, defaultChartConfig as y, detectDataShape as b, fromCanonical as x, isRenderableChart as re, toCanonical as S } from "../../utils/chartDataAdapter.js";
import { chartDataToTabular as C } from "../../utils/chartDataToTabular.js";
import { useChartDownloadActions as ie } from "../../hooks/useChartDownloadActions.js";
import { useDashboardItemData as ae } from "../../hooks/useDashboardItemData.js";
import { DashboardItem as oe } from "../DashboardItem/DashboardItem.js";
import { AccessiblePointActions as se } from "./AccessiblePointActions.js";
import { PointActionPopover as ce } from "./PointActionPopover.js";
import { useCallback as w, useEffect as T, useMemo as E, useRef as D, useState as O } from "react";
import { jsx as k, jsxs as le } from "react/jsx-runtime";
//#region src/patterns/F0AnalyticsDashboard/components/ChartItem/ChartItem.tsx
function ue(o) {
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
function A(e, t, n = "y") {
	return n === "x" && e.type === "scatter" ? s(e.xTooltipValueFormatter, e.xValueFormatter)(t) : s(e.tooltipValueFormatter, e.valueFormatter)(t);
}
function j(e, t, n) {
	if (t.type === "scatter" && n.values.length >= 2) {
		let r = n.category ? `${e} — ${n.category}` : e, i = t.xAxisName ?? "X", a = t.yAxisName ?? "Y";
		return `${r}\n${n.seriesName ? `${n.seriesName}\n` : ""}${i}: ${A(t, n.values[0], "x")}\n${a}: ${A(t, n.values[1])}`;
	}
	if (t.type === "line" && n.series.length > 1) {
		let r = t.categoryFormatter ? t.categoryFormatter(n.category) : n.category;
		return `${r ? `${e} — ${r}` : e}\n${n.series.map(({ name: e, value: n }) => `${e}: ${A(t, n)}`).join("\n")}`;
	}
	if (t.type === "radar" && t.indicators.length && n.values.length > 1) return `${n.category ? `${e} — ${n.category}` : e}\n${t.indicators.slice(0, n.values.length).map(({ name: e }, r) => `${e}: ${A(t, n.values[r])}`).join("\n")}`;
	if (t.type === "heatmap" && n.values.length >= 3) {
		let r = t.xCategories[n.values[0]], i = [t.yCategories[n.values[1]], r].filter(Boolean).join(" — ");
		return `${i ? `${e} — ${i}` : e}\n${A(t, n.value)}`;
	}
	let r = "categoryFormatter" in t && t.categoryFormatter ? t.categoryFormatter(n.category) : n.category;
	return `${r ? `${e} — ${r}` : e}\n${n.seriesName ? `${n.seriesName}: ` : ""}${A(t, n.value)}`;
}
function M(e) {
	let t = typeof e == "object" && e && "value" in e ? e.value : e;
	if (t == null || t === "") return null;
	let n = Number(t);
	return Number.isFinite(n) ? n : null;
}
function N(e, t) {
	return {
		key: e,
		point: t
	};
}
function P(e, t = {}) {
	let n = {
		source: "keyboard",
		clientX: 0,
		clientY: 0
	};
	switch (e.type) {
		case "bar": return e.series.flatMap((r, i) => t[r.name] === !1 ? [] : r.data.flatMap((t, a) => {
			let o = M(t);
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
			return [N(`bar-${i}-${a}`, s)];
		}));
		case "line": return e.categories.flatMap((r, i) => {
			let a = e.series.flatMap((e, n) => {
				if (t[e.name] === !1) return [];
				let r = M(e.data[i]);
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
			return [N(`line-${i}`, s)];
		});
		case "funnel": return e.series.data.flatMap((r, i) => {
			if (t[r.name] === !1) return [];
			let a = M(r.value);
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
			return [N(`funnel-${i}`, o)];
		});
		case "pie": return e.series.data.flatMap((r, i) => {
			if (t[r.name] === !1) return [];
			let a = M(r.value);
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
			return [N(`pie-${i}`, o)];
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
			return [N(`radar-${r}`, o)];
		});
		case "gauge": {
			let t = M(e.value);
			return t === null ? [] : [N("gauge-0", {
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
			return [N(`heatmap-${i}`, a)];
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
			return [N(`scatter-${r}-${i}`, c)];
		}));
	}
}
function F(e, t = {}) {
	switch (e.type) {
		case "bar": return e.series.some((e) => t[e.name] !== !1 && e.data.some((e) => M(e) !== null));
		case "line": return e.categories.some((n, r) => e.series.some((e) => t[e.name] !== !1 && M(e.data[r]) !== null));
		case "funnel": return e.series.data.some((e) => t[e.name] !== !1 && M(e.value) !== null);
		case "pie": return e.series.data.some((e) => t[e.name] !== !1 && M(e.value) !== null);
		case "radar": return e.series.some((e) => t[e.name] !== !1 && e.data.length > 0 && e.data.every(Number.isFinite));
		case "gauge": return M(e.value) !== null;
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
var de = { type: "bar" };
function fe(e) {
	switch (e.type) {
		case "bar": return /* @__PURE__ */ k(l, {
			orientation: e.orientation,
			stacked: e.stacked,
			showLegend: e.showLegend
		});
		case "line": return /* @__PURE__ */ k(p, {
			lineType: e.lineType,
			showArea: e.showArea,
			showDots: e.showDots,
			showLegend: e.showLegend
		});
		case "funnel": return /* @__PURE__ */ k(u, {
			orient: e.orient,
			sort: e.sort,
			showLegend: e.showLegend
		});
		case "pie": return /* @__PURE__ */ k(m, {
			innerRadius: e.innerRadius,
			showLegend: e.showLegend
		});
		case "radar": return /* @__PURE__ */ k(h, { showLegend: e.showLegend });
		case "gauge": return /* @__PURE__ */ k(d, {});
		case "heatmap": return /* @__PURE__ */ k(f, {});
		case "scatter": return /* @__PURE__ */ k(g, { showLegend: e.showLegend ?? !1 });
	}
}
function I(e, t, n, r) {
	let i = n ?? e.chart.type;
	if (i === b(t, i) && i === e.chart.type && !r) return L(e, t);
	let a = S(t), o = x(a, i), s = y(i), c = {};
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
function L(e, t) {
	let { chart: n } = e;
	switch (n.type) {
		case "funnel": {
			let e = t.series;
			if (Array.isArray(t.series)) {
				let n = S(t, "bar");
				e = x(n, "funnel").series;
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
				let i = S(t, "funnel"), a = x(i, n.type);
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
function pe({ config: e, data: t }) {
	let n = b(t, e.type), r = n === e.type ? e : {
		...e,
		type: n
	}, i = E(() => C(r, t), [r, t]), a = E(() => ({
		dataAdapter: { fetchData: () => ({ records: i.rows }) },
		columns: i.columns.map((e) => ({
			label: e,
			id: e
		}))
	}), [i]), o = v(a, [i]), s = E(() => [{
		type: "table",
		options: { columns: i.columns.map((e, t) => ({
			label: e,
			render: (n) => String(n[i.keys?.[t] ?? e] ?? "")
		})) }
	}], [i.columns]);
	return /* @__PURE__ */ k(_, {
		fullHeight: !0,
		source: o,
		visualizations: s
	});
}
function R(e) {
	return re(e.chart) && e.chart.type === "bar" && "orientation" in e.chart && e.chart.orientation === "horizontal";
}
function z({ item: e, filters: t, actions: n, itemFilters: r, editMode: i, handleDelete: a, onAskAi: s, onAskAiTarget: l, onTransformChart: u, isFullscreen: d, onFullscreenChange: f }) {
	let p = o(), [m, h] = O("chart"), { enabled: g, setPendingQuote: _, setOpen: v, focusChatInput: y } = te(), x = !re(e.chart), S = x ? de : e.chart, [C, A] = O(null), [M, N] = O(), L = e.useDashboardFilters !== !1, z = JSON.stringify(r?.value ?? {}), { data: B, isLoading: V, error: me, retry: he } = ae(e.fetchData, t, L, z), H = D(null), U = D(null), W = E(() => B && !x ? I(e, B) : void 0, [
		e,
		B,
		x
	]);
	T(() => {
		A(null), N(void 0);
	}, [
		B,
		V,
		S.type
	]);
	let G = s ? "host" : g ? "chat" : "none", K = G !== "none" && e.title.trim().length > 0;
	T(() => {
		A(null);
	}, [G]);
	let q = w((t) => {
		if (s) {
			s({
				id: e.id,
				title: e.title,
				point: t
			}), A(null), requestAnimationFrame(() => {
				let e = document.activeElement;
				(!e || e === document.body || !e.isConnected) && U.current?.focus();
			});
			return;
		}
		if (!W) return;
		let n = { text: j(e.title, W, t) };
		l?.({
			id: e.id,
			title: e.title,
			point: t,
			quote: n
		}), _(n), d && f?.(!1), v(!0), y(), A(null);
	}, [
		e,
		W,
		s,
		l,
		d,
		f,
		_,
		v,
		y
	]), ge = E(() => ue(p), [p]), J = ie({
		chartContainerRef: H,
		chartConfig: S,
		data: B,
		title: e.title
	}), _e = E(() => [...n ?? [], ...J], [n, J]), ve = E(() => !!W && K && F(W, M), [
		W,
		K,
		M
	]), ye = w(() => W ? P(W, M).map(({ key: t, point: n }) => ({
		key: t,
		getLabel: () => j(e.title, W, n).split("\n").join(", "),
		onSelect: () => q(n)
	})) : [], [
		W,
		e.title,
		M,
		q
	]), be = w((e) => {
		A(null), e !== "outside" && requestAnimationFrame(() => U.current?.focus());
	}, []), Y = S.type === "bar" ? "orientation" in S ? S.orientation ?? "vertical" : "vertical" : void 0, X = B ? b(B, S.type) : S.type, xe = E(() => ne(X), [X]), Se = B && Array.isArray(B.series) ? B.series.length : 1, Ce = ge.filter((e) => {
		let t = e.type === "bar" ? "bar" : e.type;
		return !(!xe.has(t) || e.type === "pie" && Se > 1);
	}), we = u && X !== "scatter" ? Ce.map((t) => {
		let n = t.type === "table", r = n ? m === "table" : m === "chart" && S.type === t.type && (t.type !== "bar" || Y === t.orientation);
		return {
			label: t.label,
			value: t.value,
			icon: t.icon,
			isActive: r,
			onSelect: () => {
				n ? h("table") : (h("chart"), (S.type !== t.type || t.type === "bar" && Y !== t.orientation) && u(e.id, t.type, t.orientation));
			}
		};
	}) : void 0, Z = !!d && R(e), [Te, Ee] = O(0), Q = !!f && R(e), De = Q && !d && Te > 0, Oe = Q && !!d, ke = B?.categories?.length ?? 0, Ae = De ? p.dataChart.windowedCategories.replace("{{count}}", String(Math.max(0, ke - Te))).replace("{{total}}", String(ke)) : void 0, $ = De ? {
		label: p.actions.showAll,
		onClick: () => f?.(!0)
	} : Oe ? {
		label: p.actions.showLess,
		onClick: () => f?.(!1)
	} : void 0;
	return /* @__PURE__ */ k(oe, {
		title: e.title,
		description: Ae ?? e.description,
		info: e.info,
		...$ ? { descriptionAction: $ } : {},
		explanation: e.explanation,
		isLoading: V,
		error: me ?? (x ? /* @__PURE__ */ Error() : void 0),
		onRetry: x ? void 0 : he,
		skeleton: fe(S),
		actions: _e,
		itemFilters: r,
		editMode: i,
		handleDelete: a,
		onAskAi: s,
		onAskAiTarget: l,
		itemId: e.id,
		chartTypeOptions: we,
		isFullscreen: d,
		fitContent: Z,
		onFullscreenChange: f,
		children: B && W ? m === "table" ? /* @__PURE__ */ k(pe, {
			config: S,
			data: B
		}) : /* @__PURE__ */ le("div", {
			ref: H,
			className: "relative h-full w-full px-4 py-3",
			children: [
				/* @__PURE__ */ k(ee, {
					...W,
					...W.type !== "gauge" && W.type !== "heatmap" ? { onLegendSelectionChange: N } : {},
					onPointClick: K ? (e) => A(e) : void 0,
					...Q ? {
						windowCategories: !0,
						onHiddenCategoriesChange: Ee
					} : {},
					...Z ? { showAllCategories: !0 } : {}
				}),
				/* @__PURE__ */ k(se, {
					hasActions: ve,
					getActions: ye,
					resetOn: {
						data: B,
						isLoading: V,
						chartType: S.type,
						legendSelection: M,
						owner: G,
						title: e.title
					},
					label: p.ai.dashboardItem.askOne,
					triggerLabel: `${p.ai.dashboardItem.askOne}: ${e.title}`,
					previousLabel: p.navigation.previous,
					nextLabel: p.navigation.next,
					setTrigger: (e) => {
						U.current = e;
					},
					focusChatAfterSelect: !s,
					focusChatInput: y
				}),
				/* @__PURE__ */ k(ce, {
					anchor: C,
					onAsk: () => {
						C && q(C);
					},
					onDismiss: be
				})
			]
		}) : V ? null : /* @__PURE__ */ k("div", {
			className: "h-full w-full px-4 py-3",
			children: /* @__PURE__ */ k(c, {})
		})
	});
}
//#endregion
export { z as ChartItem, P as buildAccessibleChartPoints, I as buildChartProps, j as buildPointQuoteText, R as chartItemFitsContent, F as hasAccessibleChartPoint };
