import { cn as e } from "../../../../lib/utils.js";
import { F0Icon as t } from "../../../../components/F0Icon/index.js";
import { TooltipWrapper as n } from "../../../../lib/tooltip-wrapper.js";
import { tableDisplayClassNames as r } from "../../const.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/ui/value-display/types/icon/icon.tsx
var o = (o, s) => /* @__PURE__ */ i("div", {
	className: e("flex items-center gap-2", s.visualization === "table" && r.avatar),
	children: /* @__PURE__ */ i(n, {
		tooltip: o.tooltip,
		children: /* @__PURE__ */ a("div", {
			className: "inline-flex items-center gap-2",
			children: [/* @__PURE__ */ i(t, {
				icon: o.icon,
				"aria-label": o.hideLabel ? o.label : void 0
			}), o.hideLabel ? /* @__PURE__ */ i("span", {
				className: "sr-only",
				children: o.label
			}) : /* @__PURE__ */ i("span", {
				className: "text-f1-foreground",
				children: o.label
			})]
		})
	})
});
//#endregion
export { o as IconCell };
