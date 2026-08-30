import { cn as e } from "../../lib/utils.js";
import { forwardRef as t } from "react";
import { cva as n } from "cva";
import { jsx as r } from "react/jsx-runtime";
//#region src/components/F0Icon/F0Icon.tsx
var i = n({
	base: "inline-block shrink-0",
	variants: { size: {
		lg: "w-6 [&_circle]:stroke-lg [&_path]:stroke-lg [&_rect]:stroke-lg",
		md: "w-5 [&_circle]:stroke-md [&_path]:stroke-md [&_rect]:stroke-md",
		sm: "w-4 [&_circle]:stroke-sm [&_path]:stroke-sm [&_rect]:stroke-sm",
		xs: "w-3 [&_circle]:stroke-xs [&_path]:stroke-xs [&_rect]:stroke-xs"
	} },
	defaultVariants: { size: "md" }
}), a = t(function({ size: t, icon: n, state: a = "normal", color: o = "currentColor", ...s }, c) {
	if (!n) return null;
	let l = n, u = n.displayName?.includes("Animated"), d = o.startsWith("#"), f = ((e) => e === "currentColor" ? "text-current" : e === "default" ? "text-f1-icon" : e.startsWith("#") ? "" : `text-f1-icon-${e}`)(o), p = d ? { color: o } : void 0;
	return u ? /* @__PURE__ */ r(l, {
		ref: c,
		...s,
		animate: a,
		className: e(i({ size: t }), "select-none", f),
		style: p,
		"data-has-color": o === "currentColor" ? void 0 : "true"
	}) : /* @__PURE__ */ r(l, {
		ref: c,
		...s,
		className: e("aspect-square", i({ size: t }), f),
		style: p,
		"data-has-color": o === "currentColor" ? void 0 : "true"
	});
});
//#endregion
export { a as F0Icon };
