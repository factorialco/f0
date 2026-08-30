import { Widget as e } from "../Widget/index.js";
import { forwardRef as t } from "react";
import { jsx as n } from "react/jsx-runtime";
//#region src/experimental/Widgets/Charts/ChartContainer.tsx
var r = Object.assign(t(function({ chart: t, summaries: r, ...i }, a) {
	return /* @__PURE__ */ n(e, {
		ref: a,
		...i,
		summaries: r,
		children: t && /* @__PURE__ */ n("div", {
			className: "min-h-52 min-w-52 grow pt-2",
			children: t
		})
	});
}), { Skeleton: e.Skeleton });
//#endregion
export { r as ChartContainer };
