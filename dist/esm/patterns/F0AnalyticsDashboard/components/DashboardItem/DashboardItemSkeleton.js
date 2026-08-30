import { Skeleton as e } from "../../../../ui/skeleton.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/patterns/F0AnalyticsDashboard/components/DashboardItem/DashboardItemSkeleton.tsx
function r() {
	return /* @__PURE__ */ n("div", {
		className: "flex h-full items-end gap-3 px-4 pb-4",
		children: [/* @__PURE__ */ t(e, { className: "h-10 w-36 rounded" }), /* @__PURE__ */ t(e, { className: "h-4 w-16 rounded" })]
	});
}
//#endregion
export { r as MetricSkeleton };
