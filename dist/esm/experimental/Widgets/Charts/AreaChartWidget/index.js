import { experimentalComponent as e } from "../../../../lib/experimental.js";
import { withSkeleton as t } from "../../../../lib/skeleton.js";
import { AreaChart as n } from "../../../../kits/Charts/AreaChart/index.js";
import { ChartContainer as r } from "../ChartContainer.js";
import { forwardRef as i } from "react";
import { jsx as a } from "react/jsx-runtime";
//#region src/experimental/Widgets/Charts/AreaChartWidget/index.tsx
var o = t(i(function({ canBeBlurred: e, ...t }, i) {
	let o = {
		...t,
		header: {
			...t.header,
			canBeBlurred: e
		}
	}, s = {
		...t.chart,
		yAxis: t.chart.yAxis ? { ...t.chart.yAxis } : { hide: !0 }
	};
	return /* @__PURE__ */ a(r, {
		ref: i,
		...o,
		chart: /* @__PURE__ */ a(n, {
			...s,
			canBeBlurred: e
		})
	});
}), r.Skeleton), s = e("AreaChartWidget", o);
//#endregion
export { s as AreaChartWidget };
