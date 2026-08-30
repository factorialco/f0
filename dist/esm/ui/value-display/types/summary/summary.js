import { jsx as e, jsxs as t } from "react/jsx-runtime";
//#region src/ui/value-display/types/summary/summary.tsx
var n = (n, r) => /* @__PURE__ */ t("div", {
	className: "flex gap-1",
	children: [/* @__PURE__ */ e("span", {
		className: "text-f1-foreground-secondary",
		children: r.i18n.collections.summaries.types.sum
	}), `${n.label}`]
});
//#endregion
export { n as SummaryCell };
