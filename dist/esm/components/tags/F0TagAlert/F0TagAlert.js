import { cn as e } from "../../../lib/utils.js";
import { F0Icon as t } from "../../F0Icon/index.js";
import { useTextFormatEnforcer as n } from "../../../lib/text.js";
import r from "../../../icons/app/AlertCircle.js";
import i from "../../../icons/app/CheckCircle.js";
import a from "../../../icons/app/InfoCircle.js";
import o from "../../../icons/app/Warning.js";
import { BaseTag as s } from "../internal/BaseTag/index.js";
import { forwardRef as c } from "react";
import { jsx as l } from "react/jsx-runtime";
//#region src/components/tags/F0TagAlert/F0TagAlert.tsx
var u = {
	info: a,
	warning: o,
	critical: r,
	positive: i
}, d = c(({ text: r, level: i, info: a }, o) => {
	n(r, {
		disallowEmpty: !0,
		disallowEmojis: !0
	}, { componentName: "F0TagAlert" });
	let c = {
		info: "info",
		warning: "warning",
		critical: "critical",
		positive: "positive"
	}[i];
	return /* @__PURE__ */ l(s, {
		ref: o,
		className: e("pl-0.5", {
			info: "bg-f1-background-info text-f1-foreground-info",
			warning: "bg-f1-background-warning text-f1-foreground-warning",
			critical: "bg-f1-background-critical text-f1-foreground-critical",
			positive: "bg-f1-background-positive text-f1-foreground-positive"
		}[i]),
		left: /* @__PURE__ */ l(t, {
			icon: u[i],
			size: "md",
			"aria-hidden": !0,
			color: c
		}),
		text: r,
		info: a
	});
});
d.displayName = "F0TagAlert";
//#endregion
export { d as F0TagAlert };
