import { jsxs as f, jsx as r } from "react/jsx-runtime";
import { useRef as l } from "react";
import { useI18n as u } from "../../../../lib/providers/i18n/i18n-provider.js";
import { resolveChartSize as c } from "../../utils/responsive.js";
import { useAxisLabelTooltip as p } from "../../utils/useAxisLabelTooltip.js";
import { useChartTheme as h } from "../../utils/useChartTheme.js";
import { useContainerSize as d } from "../../utils/useContainerSize.js";
import { useEChartsInstance as x } from "../../utils/useEChartsInstance.js";
import { useHeatmapChartOptions as v } from "./useHeatmapChartOptions.js";
const H = (o) => {
  const s = u(), t = l(null), { width: a } = d(t), e = c(a), i = v(t, o, e), m = x(t, i), n = h(t);
  return p(m, t, n), /* @__PURE__ */ f("div", { className: "relative h-full w-full", children: [
    /* @__PURE__ */ r(
      "div",
      {
        ref: t,
        className: "h-full w-full data-[axis-hover=true]:[&_canvas]:!cursor-default"
      }
    ),
    e === "sm" && /* @__PURE__ */ r("div", { className: "absolute inset-0 flex items-center justify-center bg-f1-background p-3 text-center text-sm font-medium text-f1-foreground-tertiary", children: s.dataChart.heatmapNotSupported })
  ] });
};
export {
  H as HeatmapChart
};
