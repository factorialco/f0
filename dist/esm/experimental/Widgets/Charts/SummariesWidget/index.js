import { experimentalComponent as e } from "../../../../lib/experimental.js";
import { withSkeleton as t } from "../../../../lib/skeleton.js";
import { ChartContainer as n } from "../ChartContainer.js";
import { forwardRef as r } from "react";
import { jsx as i } from "react/jsx-runtime";
//#region src/experimental/Widgets/Charts/SummariesWidget/index.tsx
var a = t(r(function(e, t) {
	return /* @__PURE__ */ i(n, {
		ref: t,
		...e,
		chart: null
	});
}), n.Skeleton), o = e("SummariesWidget", a);
//#endregion
export { o as SummariesWidget };
