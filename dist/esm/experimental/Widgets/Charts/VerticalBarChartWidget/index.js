import { experimentalComponent as e } from "../../../../lib/experimental.js";
import { withSkeleton as t } from "../../../../lib/skeleton.js";
import { VerticalBarChart as n } from "../../../../kits/Charts/VerticalBarChart/index.js";
import { ChartContainer as r } from "../ChartContainer.js";
import { forwardRef as i } from "react";
import { jsx as a } from "react/jsx-runtime";
//#region src/experimental/Widgets/Charts/VerticalBarChartWidget/index.tsx
var o = t(i(function(e, t) {
	return /* @__PURE__ */ a(r, {
		ref: t,
		...e,
		chart: /* @__PURE__ */ a(n, {
			xAxis: { hide: !0 },
			...e.chart
		})
	});
}), r.Skeleton), s = e("VerticalBarChartWidget", o);
//#endregion
export { s as VerticalBarChartWidget };
