import { cn as e } from "../../../lib/utils.js";
import { F0Icon as t } from "../../F0Icon/index.js";
import { useTextFormatEnforcer as n } from "../../../lib/text.js";
import { BaseTag as r } from "../internal/BaseTag/index.js";
import { forwardRef as i } from "react";
import { jsx as a } from "react/jsx-runtime";
//#region src/components/tags/F0TagRaw/F0TagRaw.tsx
var o = i(({ text: i, additionalAccessibleText: o, icon: s, onlyIcon: c, info: l, className: u, size: d }, f) => (n(i, { disallowEmpty: !0 }, { componentName: "F0TagRaw" }), /* @__PURE__ */ a(r, {
	ref: f,
	className: e("border-[1px] border-solid border-f1-border-secondary", u),
	size: d,
	left: s ? /* @__PURE__ */ a(t, {
		icon: s,
		size: "sm",
		className: "text-f1-icon",
		"aria-hidden": !0
	}) : null,
	hideLabel: c,
	text: i,
	additionalAccessibleText: o,
	info: l
})));
o.displayName = "F0TagRaw";
//#endregion
export { o as F0TagRaw };
