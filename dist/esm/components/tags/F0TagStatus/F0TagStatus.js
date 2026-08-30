import { cn as e } from "../../../lib/utils.js";
import { F0Icon as t } from "../../F0Icon/index.js";
import { useTextFormatEnforcer as n } from "../../../lib/text.js";
import { BaseTag as r } from "../internal/BaseTag/index.js";
import { forwardRef as i } from "react";
import { jsx as a } from "react/jsx-runtime";
//#region src/components/tags/F0TagStatus/F0TagStatus.tsx
var o = i(({ text: i, additionalAccessibleText: o, variant: s, icon: c }, l) => (n(i, { disallowEmpty: !0 }, { componentName: "F0TagStatus" }), /* @__PURE__ */ a(r, {
	ref: l,
	className: e({
		neutral: "bg-f1-background-secondary text-f1-foreground-secondary",
		info: "bg-f1-background-info text-f1-foreground-info",
		positive: "bg-f1-background-positive text-f1-foreground-positive",
		warning: "bg-f1-background-warning text-f1-foreground-warning",
		critical: "bg-f1-background-critical text-f1-foreground-critical"
	}[s]),
	left: c ? /* @__PURE__ */ a(t, {
		icon: c,
		size: "sm",
		className: {
			neutral: "text-f1-icon",
			info: "text-f1-icon-info",
			positive: "text-f1-icon-positive",
			warning: "text-f1-icon-warning",
			critical: "text-f1-icon-critical"
		}[s],
		"aria-hidden": !0
	}) : /* @__PURE__ */ a("div", {
		className: e("m-1 aspect-square w-2 rounded-full", {
			neutral: "bg-f1-icon",
			info: "bg-f1-icon-info",
			positive: "bg-f1-icon-positive",
			warning: "bg-f1-icon-warning",
			critical: "bg-f1-icon-critical"
		}[s]),
		"aria-hidden": !0
	}),
	additionalAccessibleText: o,
	text: i
})));
o.displayName = "F0TagStatus";
//#endregion
export { o as F0TagStatus };
