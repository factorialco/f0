import { jsx as r } from "react/jsx-runtime";
import { BarChart as a } from "./components/BarChart/BarChart.js";
import { DataChartEmptyStateView as e } from "./components/EmptyState/DataChartEmptyStateView.js";
import { FunnelChart as m } from "./components/FunnelChart/FunnelChart.js";
import { GaugeChart as i } from "./components/GaugeChart/GaugeChart.js";
import { HeatmapChart as n } from "./components/HeatmapChart/HeatmapChart.js";
import { LineChart as h } from "./components/LineChart/LineChart.js";
import { PieChart as f } from "./components/PieChart/PieChart.js";
import { RadarChart as u } from "./components/RadarChart/RadarChart.js";
import { isDataChartEmpty as o } from "./utils/isDataChartEmpty.js";
const x = (t) => {
  if (!t.emptyState?.disabled && o(t))
    return /* @__PURE__ */ r(
      e,
      {
        chartType: t.type,
        emptyState: t.emptyState
      }
    );
  switch (t.type) {
    case "bar":
      return /* @__PURE__ */ r(a, { ...t });
    case "line":
      return /* @__PURE__ */ r(h, { ...t });
    case "funnel":
      return /* @__PURE__ */ r(m, { ...t });
    case "pie":
      return /* @__PURE__ */ r(f, { ...t });
    case "radar":
      return /* @__PURE__ */ r(u, { ...t });
    case "gauge":
      return /* @__PURE__ */ r(i, { ...t });
    case "heatmap":
      return /* @__PURE__ */ r(n, { ...t });
  }
};
export {
  x as F0DataChart
};
