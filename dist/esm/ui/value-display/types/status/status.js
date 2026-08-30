import { F0TagStatus as e } from "../../../../components/tags/F0TagStatus/index.js";
import { TooltipWrapper as t, tooltipAccessibleText as n } from "../../../../lib/tooltip-wrapper.js";
import { jsx as r } from "react/jsx-runtime";
//#region src/ui/value-display/types/status/status.tsx
var i = (i) => /* @__PURE__ */ r("div", {
	"data-cell-type": "status",
	children: /* @__PURE__ */ r(t, {
		tooltip: i.tooltip,
		children: /* @__PURE__ */ r("div", {
			className: "w-fit max-w-full",
			children: /* @__PURE__ */ r(e, {
				variant: i.status,
				text: i.label,
				icon: i.icon,
				additionalAccessibleText: n(i.tooltip)
			})
		})
	})
});
//#endregion
export { i as StatusCell };
