import { resolveChartSize as e } from "../../utils/responsive.js";
import { useContainerSize as t } from "../../utils/useContainerSize.js";
import { useEChartsInstance as n } from "../../utils/useEChartsInstance.js";
import { usePointClick as r } from "../../utils/usePointClick.js";
import { useGaugeChartOptions as i } from "./useGaugeChartOptions.js";
import { useRef as a } from "react";
import { jsx as o } from "react/jsx-runtime";
//#region src/kits/F0DataChart/components/GaugeChart/GaugeChart.tsx
var s = (s) => {
	let c = a(null), { width: l } = t(c), u = e(l), d = i(c, s, u), f = n(c, d);
	return r(f, s.onPointClick), /* @__PURE__ */ o("div", {
		ref: c,
		className: "h-full w-full"
	});
};
//#endregion
export { s as GaugeChart };
