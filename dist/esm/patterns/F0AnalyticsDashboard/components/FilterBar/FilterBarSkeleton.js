import { Skeleton as e } from "../../../../ui/skeleton.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/patterns/F0AnalyticsDashboard/components/FilterBar/FilterBarSkeleton.tsx
function r() {
	return /* @__PURE__ */ n("div", {
		className: "flex items-center gap-1",
		role: "status",
		"aria-label": "Loading filters",
		children: [
			/* @__PURE__ */ t(e, { className: "h-8 w-24 rounded-md" }),
			/* @__PURE__ */ t(e, { className: "h-8 w-20 rounded-md" }),
			/* @__PURE__ */ t(e, { className: "h-8 w-20 rounded-md" })
		]
	});
}
//#endregion
export { r as FilterBarSkeleton };
