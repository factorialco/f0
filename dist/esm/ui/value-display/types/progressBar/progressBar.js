import { getColor as e } from "../../../../kits/Charts/utils/colors.js";
import { Progress as t } from "../../../progress.js";
import { isShowingPlaceholder as n, resolveValue as r } from "../../utils.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/ui/value-display/types/progressBar/progressBar.tsx
var o = (o, s) => {
	let c = r(o, "value"), l = n(o, "value");
	if (c === void 0) return null;
	if (l) return /* @__PURE__ */ i("span", {
		className: "text-f1-foreground-secondary",
		"data-cell-type": "progressBar",
		children: c
	});
	let u = c, d = typeof o == "object" && "max" in o ? o.max ?? 100 : 100, f = typeof o == "object" && "label" in o ? o.label : void 0, p = typeof o == "object" && "hideLabel" in o ? o.hideLabel : void 0, m = typeof o == "object" && "color" in o ? o.color : void 0, h = e(m || "categorical-1"), g = u / d * 100;
	return /* @__PURE__ */ a("div", {
		className: "flex w-full items-center gap-2",
		"data-cell-type": "progressBar",
		children: [/* @__PURE__ */ i("div", {
			className: "min-w-16 flex-grow",
			children: /* @__PURE__ */ i(t, {
				color: h,
				value: g,
				max: 100,
				getValueLabel: (e) => `${(e ?? 0).toFixed(1)}% ${f}`,
				"aria-label": f,
				className: "w-full"
			})
		}), !p && /* @__PURE__ */ i("div", {
			className: "flex-shrink-0 text-sm font-medium text-f1-foreground",
			children: f
		})]
	});
};
//#endregion
export { o as ProgressBarCell };
