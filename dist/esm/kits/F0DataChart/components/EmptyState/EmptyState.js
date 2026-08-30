import { withDataTestId as e } from "../../../../lib/data-testid/index.js";
import { forwardRef as t } from "react";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/kits/F0DataChart/components/EmptyState/EmptyState.tsx
var i = t(function({ content: e, description: t }, i) {
	return /* @__PURE__ */ n("div", {
		ref: i,
		className: "relative flex h-full w-full items-center justify-center overflow-hidden",
		children: /* @__PURE__ */ r("div", {
			className: "relative flex flex-col items-center gap-1 px-6 text-center",
			children: [/* @__PURE__ */ n("p", {
				className: "text-lg font-medium text-f1-foreground",
				children: e
			}), t && /* @__PURE__ */ n("p", {
				className: "text-md max-w-sm text-f1-foreground-secondary",
				children: t
			})]
		})
	});
}), a = e(i);
//#endregion
export { a as DataChartEmptyState };
