import { jsx as c } from "react/jsx-runtime";
import { useState as P, useRef as $, useMemo as d } from "react";
import z from "../../../../icons/app/ChartFunnel.js";
import H from "../../../../icons/app/ChartHorizontalBars.js";
import N from "../../../../icons/app/ChartLine.js";
import V from "../../../../icons/app/ChartPie.js";
import M from "../../../../icons/app/ChartVerticalBars.js";
import "../../../../icons/app/Menu.js";
import E from "../../../../icons/app/Table.js";
import { F0DataChart as _ } from "../../../../kits/F0DataChart/index.js";
import { OneDataCollection as j } from "../../../OneDataCollection/index.js";
import { useChartDownloadActions as B } from "../../hooks/useChartDownloadActions.js";
import { useDashboardItemData as G } from "../../hooks/useDashboardItemData.js";
import { detectDataShape as m, compatibleTargetTypes as Y, toCanonical as b, fromCanonical as C, defaultChartConfig as q } from "../../utils/chartDataAdapter.js";
import { chartDataToTabular as J } from "../../utils/chartDataToTabular.js";
import { DashboardItem as K } from "../DashboardItem/DashboardItem.js";
import { DataChartEmptyStateView as Q } from "../../../../kits/F0DataChart/components/EmptyState/DataChartEmptyStateView.js";
import { HeatmapChartSkeleton as U, GaugeChartSkeleton as W, RadarChartSkeleton as X, PieChartSkeleton as Z, FunnelChartSkeleton as ee, LineChartSkeleton as re, BarChartSkeleton as te } from "../../../../kits/F0DataChart/skeletons.js";
import { useDataCollectionSource as ae } from "../../../OneDataCollection/hooks/useDataCollectionSource/useDataCollectionSource.js";
import { useI18n as ne } from "../../../../lib/providers/i18n/i18n-provider.js";
function oe(e) {
  return [
    {
      label: e.dataChart.barChartVertical,
      value: "bar-vertical",
      icon: M,
      type: "bar",
      orientation: "vertical"
    },
    {
      label: e.dataChart.barChartHorizontal,
      value: "bar-horizontal",
      icon: H,
      type: "bar",
      orientation: "horizontal"
    },
    {
      label: e.dataChart.lineChart,
      value: "line",
      icon: N,
      type: "line"
    },
    {
      label: e.dataChart.funnel,
      value: "funnel",
      icon: z,
      type: "funnel"
    },
    {
      label: e.dataChart.pieChart,
      value: "pie",
      icon: V,
      type: "pie"
    },
    {
      label: e.dataChart.table,
      value: "table",
      icon: E,
      type: "table"
    }
  ];
}
function se(e) {
  switch (e.type) {
    case "bar":
      return /* @__PURE__ */ c(
        te,
        {
          orientation: e.orientation,
          stacked: e.stacked,
          showLegend: e.showLegend
        }
      );
    case "line":
      return /* @__PURE__ */ c(
        re,
        {
          lineType: e.lineType,
          showArea: e.showArea,
          showDots: e.showDots,
          showLegend: e.showLegend
        }
      );
    case "funnel":
      return /* @__PURE__ */ c(
        ee,
        {
          orient: e.orient,
          sort: e.sort,
          showLegend: e.showLegend
        }
      );
    case "pie":
      return /* @__PURE__ */ c(
        Z,
        {
          innerRadius: e.innerRadius,
          showLegend: e.showLegend
        }
      );
    case "radar":
      return /* @__PURE__ */ c(X, { showLegend: e.showLegend });
    case "gauge":
      return /* @__PURE__ */ c(W, {});
    case "heatmap":
      return /* @__PURE__ */ c(U, {});
  }
}
function ie(e, r, s, l) {
  const t = e.chart.type, u = m(r, t);
  if (t === u && t === e.chart.type)
    return ce(e, r);
  const p = b(r), n = C(p, t), a = q(t), i = {};
  switch ("valueFormatter" in e.chart && e.chart.valueFormatter && (i.valueFormatter = e.chart.valueFormatter), "showLegend" in e.chart && (i.showLegend = e.chart.showLegend), t) {
    case "bar": {
      const f = ("orientation" in e.chart ? e.chart.orientation : void 0) ?? a.orientation;
      return {
        ...a,
        ...i,
        ...f ? { orientation: f } : {},
        categories: n.categories ?? [],
        series: n.series
      };
    }
    case "line":
      return {
        ...a,
        ...i,
        categories: n.categories ?? [],
        series: n.series
      };
    case "funnel":
      return {
        ...a,
        ...i,
        series: n.series
      };
    case "pie":
      return {
        ...a,
        ...i,
        series: n.series
      };
    case "radar":
      return {
        ...a,
        ...i,
        indicators: n.indicators ?? [],
        series: n.series
      };
    case "gauge":
      return {
        ...a,
        ...i,
        ...n.series
      };
    case "heatmap":
      return {
        ...a,
        ...i,
        xCategories: n.xCategories ?? [],
        yCategories: n.yCategories ?? [],
        data: n.data ?? []
      };
  }
}
function ce(e, r) {
  const { chart: s } = e;
  switch (s.type) {
    case "funnel": {
      let l = r.series;
      if (Array.isArray(r.series)) {
        const t = b(r, "bar");
        l = C(t, "funnel").series;
      }
      return { ...s, series: l };
    }
    case "pie":
      return { ...s, series: r.series };
    case "radar":
      return {
        ...s,
        indicators: r.indicators ?? [],
        series: r.series
      };
    case "gauge":
      return {
        ...s,
        ...r.series
      };
    case "heatmap":
      return {
        ...s,
        xCategories: r.xCategories ?? [],
        yCategories: r.yCategories ?? [],
        data: r.data ?? []
      };
    case "bar":
    case "line": {
      let { series: l } = r, t = r.categories ?? [];
      if (l && !Array.isArray(l)) {
        const u = b(r, "funnel"), p = C(u, s.type);
        l = p.series, t = p.categories ?? [];
      }
      return { ...s, categories: t, series: l };
    }
  }
}
function le({
  config: e,
  data: r
}) {
  const s = m(r, e.type), l = s !== e.type ? { ...e, type: s } : e, t = d(
    () => J(l, r),
    [l, r]
  ), u = d(
    () => ({
      dataAdapter: {
        fetchData: () => ({ records: t.rows })
      },
      columns: t.columns.map((a) => ({
        label: a,
        id: a
      }))
    }),
    [t]
  ), p = ae(u, [
    t
  ]), n = d(
    () => [
      {
        type: "table",
        options: {
          columns: t.columns.map((a) => ({
            label: a,
            render: (i) => String(i[a] ?? "")
          }))
        }
      }
    ],
    [t.columns]
  );
  return /* @__PURE__ */ c(
    j,
    {
      fullHeight: !0,
      source: p,
      visualizations: n
    }
  );
}
function xe({
  item: e,
  filters: r,
  actions: s,
  editMode: l,
  handleDelete: t,
  onTransformChart: u,
  isFullscreen: p,
  onFullscreenChange: n
}) {
  const a = ne(), [i, f] = P("chart"), D = e.useDashboardFilters !== !1, { data: h, isLoading: w, error: L, retry: A } = G(e.fetchData, r, D), g = $(null), F = d(
    () => oe(a),
    [a]
  ), v = B({
    chartContainerRef: g,
    chartConfig: e.chart,
    data: h,
    title: e.title
  }), R = d(
    () => [...s ?? [], ...v],
    [s, v]
  ), S = e.chart.type === "bar" ? "orientation" in e.chart ? e.chart.orientation ?? "vertical" : "vertical" : void 0, T = h ? m(h, e.chart.type) : e.chart.type, k = d(
    () => Y(T),
    [T]
  ), x = h && Array.isArray(h.series) ? h.series.length : 1, O = u ? F.filter((o) => {
    const y = o.type === "bar" ? "bar" : o.type;
    return !(!k.has(y) || o.type === "pie" && x > 1);
  }).map((o) => {
    const y = o.type === "table", I = y ? i === "table" : i === "chart" && e.chart.type === o.type && (o.type !== "bar" || S === o.orientation);
    return {
      label: o.label,
      value: o.value,
      icon: o.icon,
      isActive: I,
      onSelect: () => {
        y ? f("table") : (f("chart"), (e.chart.type !== o.type || o.type === "bar" && S !== o.orientation) && u(e.id, o.type, o.orientation));
      }
    };
  }) : void 0;
  return /* @__PURE__ */ c(
    K,
    {
      title: e.title,
      description: e.description,
      explanation: e.explanation,
      isLoading: w,
      error: L,
      onRetry: A,
      skeleton: se(e.chart),
      actions: R,
      editMode: l,
      handleDelete: t,
      itemId: e.id,
      chartTypeOptions: O,
      isFullscreen: p,
      onFullscreenChange: n,
      children: h ? i === "table" ? /* @__PURE__ */ c(le, { config: e.chart, data: h }) : /* @__PURE__ */ c("div", { ref: g, className: "h-full w-full px-4 py-3", children: /* @__PURE__ */ c(
        _,
        {
          ...ie(e, h)
        }
      ) }) : w ? null : /* @__PURE__ */ c("div", { className: "h-full w-full px-4 py-3", children: /* @__PURE__ */ c(Q, { chartType: e.chart.type }) })
    }
  );
}
export {
  xe as ChartItem
};
