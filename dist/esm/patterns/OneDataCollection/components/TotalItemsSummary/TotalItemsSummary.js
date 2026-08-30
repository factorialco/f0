import { Skeleton as e } from "../../../../ui/skeleton.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/components/TotalItemsSummary/TotalItemsSummary.tsx
var r = ({ isReady: r, totalItemSummaryResult: i }) => /* @__PURE__ */ t("div", {
	className: "flex flex-1 flex-shrink items-center gap-4 text-lg font-semibold",
	children: r ? /* @__PURE__ */ n("div", {
		className: "flex h-5 items-center",
		children: [" ", i]
	}) : /* @__PURE__ */ t(e, { className: "h-5 w-24" })
});
//#endregion
export { r as TotalItemsSummary };
