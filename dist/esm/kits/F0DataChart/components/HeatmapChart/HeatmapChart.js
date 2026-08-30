import { useI18n as e } from "../../../../lib/providers/i18n/i18n-provider.js";
import { resolveChartSize as t } from "../../utils/responsive.js";
import { useAxisLabelTooltip as n } from "../../utils/useAxisLabelTooltip.js";
import { useChartTheme as r } from "../../utils/useChartTheme.js";
import { useContainerSize as i } from "../../utils/useContainerSize.js";
import { useEChartsInstance as a } from "../../utils/useEChartsInstance.js";
import { usePointClick as o } from "../../utils/usePointClick.js";
import { useHeatmapChartOptions as s } from "./useHeatmapChartOptions.js";
import { useRef as c } from "react";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
//#region src/kits/F0DataChart/components/HeatmapChart/HeatmapChart.tsx
var d = (d) => {
	let f = e(), p = c(null), { width: m } = i(p), h = t(m), g = s(p, d, h), _ = a(p, g);
	o(_, d.onPointClick);
	let v = r(p);
	return n(_, p, v), /* @__PURE__ */ u("div", {
		className: "relative h-full w-full",
		children: [/* @__PURE__ */ l("div", {
			ref: p,
			className: "h-full w-full data-[axis-hover=true]:[&_canvas]:!cursor-default"
		}), h === "sm" && /* @__PURE__ */ l("div", {
			className: "absolute inset-0 flex items-center justify-center bg-f1-background p-3 text-center text-sm font-medium text-f1-foreground-tertiary",
			children: f.dataChart.heatmapNotSupported
		})]
	});
};
//#endregion
export { d as HeatmapChart };
