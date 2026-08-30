import { useTextFormatEnforcer as e } from "../../../lib/text.js";
import { BaseTag as t } from "../internal/BaseTag/index.js";
import { forwardRef as n } from "react";
import { jsx as r } from "react/jsx-runtime";
import { baseColors as i } from "@factorialco/f0-core";
//#region src/components/tags/F0TagDot/F0TagDot.tsx
var a = n(({ text: n, info: a, ...o }, s) => {
	e(n, { disallowEmpty: !0 }, { componentName: "F0TagDot" });
	let c = "color" in o && o.color ? `hsl(${i[o.color][50]})` : "customColor" in o && o.customColor;
	return c ? /* @__PURE__ */ r(t, {
		ref: s,
		className: "border-[1px] border-solid border-f1-border-secondary",
		left: /* @__PURE__ */ r("div", {
			className: "m-1 aspect-square w-2 rounded-full",
			style: { backgroundColor: c },
			"aria-hidden": !0
		}),
		text: n,
		info: a
	}) : null;
});
a.displayName = "F0TagDot";
//#endregion
export { a as F0TagDot };
