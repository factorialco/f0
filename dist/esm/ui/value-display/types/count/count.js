import { jsx as e, jsxs as t } from "react/jsx-runtime";
//#region src/ui/value-display/types/count/count.tsx
var n = (n, r) => /* @__PURE__ */ t("div", {
	className: "flex gap-1",
	children: [/* @__PURE__ */ e("span", {
		className: "text-f1-foreground-secondary",
		children: r.i18n.collections.summaries.types.count
	}), `${n.label}`]
});
//#endregion
export { n as CountCell };
