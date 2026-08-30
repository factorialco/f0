import { resolveChartSize as e } from "../../utils/responsive.js";
import { useAxisLabelTooltip as t } from "../../utils/useAxisLabelTooltip.js";
import { useChartTheme as n } from "../../utils/useChartTheme.js";
import { useContainerSize as r } from "../../utils/useContainerSize.js";
import { useEChartsInstance as i } from "../../utils/useEChartsInstance.js";
import { usePointClick as a } from "../../utils/usePointClick.js";
import { useLegendInteraction as o } from "../../utils/useLegendInteraction.js";
import { useScatterChartOptions as s } from "./useScatterChartOptions.js";
import { useRef as c } from "react";
import { jsx as l } from "react/jsx-runtime";
//#region src/kits/F0DataChart/components/ScatterChart/ScatterChart.tsx
var u = (u) => {
	let d = c(null), { width: f } = r(d), p = e(f), m = s(d, u, p), h = i(d, m);
	a(h, u.onPointClick);
	let g = n(d);
	return t(h, d, g), o(h, u.onLegendSelectionChange), /* @__PURE__ */ l("div", {
		ref: d,
		className: "h-full w-full data-[axis-hover=true]:[&_canvas]:!cursor-default"
	});
};
//#endregion
export { u as ScatterChart };
