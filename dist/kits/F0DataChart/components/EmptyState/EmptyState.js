import { jsxs as a, jsx as e } from "react/jsx-runtime";
import { forwardRef as o } from "react";
import { withDataTestId as s } from "../../../../lib/data-testid/index.js";
import { HeatmapChartSkeleton as i, GaugeChartSkeleton as m, RadarChartSkeleton as f, PieChartSkeleton as h, FunnelChartSkeleton as d, LineChartSkeleton as c, BarChartSkeleton as p } from "../../skeletons.js";
const u = {
  bar: () => /* @__PURE__ */ e(p, { showLegend: !1 }),
  line: () => /* @__PURE__ */ e(c, { showLegend: !1 }),
  funnel: () => /* @__PURE__ */ e(d, { showLegend: !1 }),
  pie: () => /* @__PURE__ */ e(h, { showLegend: !1 }),
  radar: () => /* @__PURE__ */ e(f, { showLegend: !1 }),
  gauge: () => /* @__PURE__ */ e(m, {}),
  heatmap: () => /* @__PURE__ */ e(i, {})
}, x = o(function({ content: n, description: t, chartType: r }, l) {
  return /* @__PURE__ */ a(
    "div",
    {
      ref: l,
      className: "relative flex h-full w-full items-center justify-center overflow-hidden",
      children: [
        /* @__PURE__ */ e(
          "div",
          {
            "aria-hidden": !0,
            className: "pointer-events-none absolute inset-0 flex items-center justify-center opacity-50 [&_*]:animate-none",
            children: /* @__PURE__ */ e("div", { className: "max-w-content h-full max-h-[360px] w-full", children: u[r]() })
          }
        ),
        /* @__PURE__ */ a("div", { className: "relative flex flex-col items-center gap-1 px-6 text-center", children: [
          /* @__PURE__ */ e("p", { className: "text-lg font-medium text-f1-foreground", children: n }),
          t && /* @__PURE__ */ e("p", { className: "text-md max-w-sm text-f1-foreground-secondary", children: t })
        ] })
      ]
    }
  );
}), k = s(x);
export {
  k as DataChartEmptyState
};
