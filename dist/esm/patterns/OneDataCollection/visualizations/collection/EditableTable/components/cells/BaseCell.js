import { cn as e, focusRing as t } from "../../../../../../../lib/utils.js";
import { F0Icon as n } from "../../../../../../../components/F0Icon/index.js";
import { Tooltip as r, TooltipContent as i, TooltipProvider as a, TooltipTrigger as o } from "../../../../../../../ui/tooltip.js";
import { ErrorTooltip as s } from "./ErrorTooltip.js";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/components/cells/BaseCell.tsx
var u = {
	text: "cursor-text",
	pointer: "cursor-pointer",
	default: "cursor-default",
	"not-allowed": "cursor-not-allowed"
};
function d({ disabled: d = !1, readonly: f = !1, showRightBorder: p = !0, cursor: m = "text", isActive: h = !1, borderOnHover: g = !0, error: _, hint: v, hintPosition: y = "left", children: b }) {
	let x = v && !_ && /* @__PURE__ */ c(a, {
		delayDuration: 100,
		children: /* @__PURE__ */ l(r, { children: [/* @__PURE__ */ c(o, {
			asChild: !0,
			children: /* @__PURE__ */ c("button", {
				type: "button",
				"aria-label": v.message,
				className: e("pointer-events-auto flex shrink-0 cursor-pointer items-center rounded px-1", t()),
				children: /* @__PURE__ */ c(n, {
					icon: v.icon,
					size: "md",
					color: v.iconColor
				})
			})
		}), /* @__PURE__ */ c(i, {
			side: "top",
			className: "border-black/10 max-w-64 cursor-default text-f1-foreground shadow-md",
			children: /* @__PURE__ */ c("span", {
				className: "text-sm font-medium text-f1-foreground",
				children: v.message
			})
		})] })
	});
	return /* @__PURE__ */ c("div", {
		className: e("flex w-full h-full min-w-0 min-h-12 border-solid", "border-0 border-r-[1px] border-f1-border-secondary", !p && "border-r-0", u[m], _ ? "relative z-[1] border-r-0 bg-f1-background-critical/10 shadow-[inset_0_0_0_1px_hsl(var(--critical-50))]" : h ? "relative z-[1] border-r-0 bg-f1-background shadow-[inset_0_0_0_1px_hsl(var(--selected-50))]" : g ? "shadow-none [&:not(:focus-within)]:hover:shadow-[inset_0_0_0_1px_hsl(var(--neutral-30))] focus-within:relative focus-within:z-[1] focus-within:border-r-0 focus-within:bg-f1-background focus-within:shadow-[inset_0_0_0_1px_hsl(var(--selected-50))]" : "shadow-none", f && "bg-f1-background-secondary", d && "bg-f1-background-disabled"),
		children: /* @__PURE__ */ l(s, {
			message: _,
			children: [
				y === "left" && x,
				/* @__PURE__ */ c("div", {
					className: "min-w-0 flex-1",
					children: b
				}),
				y === "right" && x
			]
		})
	});
}
//#endregion
export { d as BaseCell };
