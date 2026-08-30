import { getColor as e } from "../utils/colors.js";
import { fixedForwardRef as t } from "../utils/forwardRef.js";
import { Progress as n } from "../../../ui/progress.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
var a = t(({ value: t, max: a = 100, label: o, color: s }, c) => {
	let l = e(s || "categorical-1"), u = t / a * 100;
	return /* @__PURE__ */ i("div", {
		className: "flex items-center space-x-2",
		"aria-live": "polite",
		children: [/* @__PURE__ */ r("div", {
			className: "flex-grow",
			children: /* @__PURE__ */ r(n, {
				color: l,
				value: u,
				className: "w-full",
				"aria-valuemin": 0,
				"aria-valuemax": a,
				"aria-valuenow": t,
				"aria-label": `${u.toFixed(1)}%`
			})
		}), o && /* @__PURE__ */ r("div", {
			className: "flex-shrink-0 text-sm font-medium",
			children: o
		})]
	});
});
//#endregion
export { a as ProgressBar };
