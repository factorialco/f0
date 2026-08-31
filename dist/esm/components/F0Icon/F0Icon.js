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
}), a = {
	secondary: "text-f1-icon-secondary",
	inverse: "text-f1-icon-inverse",
	bold: "text-f1-icon-bold",
	critical: "text-f1-icon-critical",
	"critical-bold": "text-f1-icon-critical-bold",
	accent: "text-f1-icon-accent",
	info: "text-f1-icon-info",
	warning: "text-f1-icon-warning",
	positive: "text-f1-icon-positive",
	promote: "text-f1-icon-promote",
	selected: "text-f1-icon-selected",
	"selected-hover": "text-f1-icon-selected-hover",
	"mood-super-negative": "text-f1-icon-mood-super-negative",
	"mood-negative": "text-f1-icon-mood-negative",
	"mood-neutral": "text-f1-icon-mood-neutral",
	"mood-positive": "text-f1-icon-mood-positive",
	"mood-super-positive": "text-f1-icon-mood-super-positive"
};
function o(e) {
	return e.startsWith("#");
}
var s = t(function({ size: t, icon: n, state: s = "normal", color: c = "currentColor", ...l }, u) {
	if (!n) return null;
	let d = n, f = n.displayName?.includes("Animated"), p = o(c), m = ((e) => e === "currentColor" ? "text-current" : e === "default" ? "text-f1-icon" : o(e) ? "" : a[e])(c), h = p ? { color: c } : void 0;
	return f ? /* @__PURE__ */ r(d, {
		ref: u,
		...l,
		animate: s,
		className: e(i({ size: t }), "select-none", m),
		style: h,
		"data-has-color": c === "currentColor" ? void 0 : "true"
	}) : /* @__PURE__ */ r(d, {
		ref: u,
		...l,
		className: e("aspect-square", i({ size: t }), m),
		style: h,
		"data-has-color": c === "currentColor" ? void 0 : "true"
	});
});
//#endregion
export { s as F0Icon };
