import { resolveChartSize as e } from "../../utils/responsive.js";
import { useContainerSize as t } from "../../utils/useContainerSize.js";
import { useEChartsInstance as n } from "../../utils/useEChartsInstance.js";
import { usePointClick as r } from "../../utils/usePointClick.js";
import { useLegendInteraction as i } from "../../utils/useLegendInteraction.js";
import { usePieChartOptions as a } from "./usePieChartOptions.js";
import { useRef as o } from "react";
import { jsx as s } from "react/jsx-runtime";
//#region src/kits/F0DataChart/components/PieChart/PieChart.tsx
var c = (c) => {
	let l = o(null), { width: u } = t(l), d = e(u), f = a(l, c, d), p = n(l, f);
	return r(p, c.onPointClick), i(p, c.onLegendSelectionChange), /* @__PURE__ */ s("div", {
		ref: l,
		className: "h-full w-full"
	});
};
//#endregion
export { c as PieChart };
