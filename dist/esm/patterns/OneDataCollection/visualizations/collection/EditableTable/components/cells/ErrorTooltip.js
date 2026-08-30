import { F0Icon as e } from "../../../../../../../components/F0Icon/index.js";
import { Tooltip as t, TooltipContent as n, TooltipProvider as r, TooltipTrigger as i } from "../../../../../../../ui/tooltip.js";
import a from "../../../../../../../icons/app/AlertCircle.js";
import { useCallback as o, useEffect as s, useState as c } from "react";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/visualizations/collection/EditableTable/components/cells/ErrorTooltip.tsx
function d({ message: d, children: f }) {
	let [p, m] = c(!1), h = o(() => {
		d && m(!0);
	}, [d]), g = o(() => m(!1), []);
	return s(() => {
		d || m(!1);
	}, [d]), /* @__PURE__ */ l("div", {
		className: "relative h-full w-full",
		children: /* @__PURE__ */ l(r, {
			delayDuration: 100,
			disableHoverableContent: !0,
			children: /* @__PURE__ */ u(t, {
				open: p && !!d,
				onOpenChange: m,
				children: [/* @__PURE__ */ l(i, {
					asChild: !0,
					className: "pointer-events-auto h-full w-full",
					children: /* @__PURE__ */ l("div", {
						className: "flex h-full w-full items-center",
						onFocusCapture: h,
						onBlurCapture: g,
						children: f
					})
				}), d && /* @__PURE__ */ u(n, {
					side: "top",
					className: "border-black/10 flex items-center gap-1 bg-[#fff] shadow-md",
					children: [/* @__PURE__ */ l(e, {
						icon: a,
						color: "critical",
						size: "sm"
					}), /* @__PURE__ */ l("span", {
						className: "text-sm font-medium text-f1-foreground-critical",
						children: d
					})]
				})]
			})
		})
	});
}
//#endregion
export { d as ErrorTooltip };
