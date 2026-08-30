import { BarChart as e } from "./components/BarChart/BarChart.js";
import { DataChartEmptyStateView as t } from "./components/EmptyState/DataChartEmptyStateView.js";
import { FunnelChart as n } from "./components/FunnelChart/FunnelChart.js";
import { GaugeChart as r } from "./components/GaugeChart/GaugeChart.js";
import { HeatmapChart as i } from "./components/HeatmapChart/HeatmapChart.js";
import { LineChart as a } from "./components/LineChart/LineChart.js";
import { PieChart as o } from "./components/PieChart/PieChart.js";
import { RadarChart as s } from "./components/RadarChart/RadarChart.js";
import { ScatterChart as c } from "./components/ScatterChart/ScatterChart.js";
import { isDataChartEmpty as l } from "./utils/isDataChartEmpty.js";
import { jsx as u } from "react/jsx-runtime";
//#region src/kits/F0DataChart/F0DataChart.tsx
var d = (d) => {
	if (!d.emptyState?.disabled && l(d)) return /* @__PURE__ */ u(t, { emptyState: d.emptyState });
	switch (d.type) {
		case "bar": return /* @__PURE__ */ u(e, { ...d });
		case "line": return /* @__PURE__ */ u(a, { ...d });
		case "funnel": return /* @__PURE__ */ u(n, { ...d });
		case "pie": return /* @__PURE__ */ u(o, { ...d });
		case "radar": return /* @__PURE__ */ u(s, { ...d });
		case "gauge": return /* @__PURE__ */ u(r, { ...d });
		case "heatmap": return /* @__PURE__ */ u(i, { ...d });
		case "scatter": return /* @__PURE__ */ u(c, { ...d });
	}
};
//#endregion
export { d as F0DataChart };
