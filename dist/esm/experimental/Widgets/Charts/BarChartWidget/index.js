import { experimentalComponent as e } from "../../../../lib/experimental.js";
import { withSkeleton as t } from "../../../../lib/skeleton.js";
import { BarChart as n } from "../../../../kits/Charts/BarChart/index.js";
import { ChartContainer as r } from "../ChartContainer.js";
import { forwardRef as i } from "react";
import { jsx as a } from "react/jsx-runtime";
//#region src/experimental/Widgets/Charts/BarChartWidget/index.tsx
var o = i(function(e, t) {
	return /* @__PURE__ */ a(r, {
		ref: t,
		...e,
		chart: /* @__PURE__ */ a(n, {
			yAxis: { hide: !0 },
			...e.chart
		})
	});
}), s = e("BarChartWidget", t(o, r.Skeleton));
//#endregion
export { s as BarChartWidget };
