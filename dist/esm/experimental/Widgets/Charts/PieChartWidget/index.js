import { experimentalComponent as e } from "../../../../lib/experimental.js";
import { withSkeleton as t } from "../../../../lib/skeleton.js";
import { PieChart as n } from "../../../../kits/Charts/PieChart/index.js";
import { ChartContainer as r } from "../ChartContainer.js";
import { forwardRef as i } from "react";
import { jsx as a } from "react/jsx-runtime";
//#region src/experimental/Widgets/Charts/PieChartWidget/index.tsx
var o = t(i(function(e, t) {
	return /* @__PURE__ */ a(r, {
		ref: t,
		...e,
		chart: /* @__PURE__ */ a(n, { ...e.chart })
	});
}), r.Skeleton), s = e("PieChartWidget", o);
//#endregion
export { s as PieChartWidget };
