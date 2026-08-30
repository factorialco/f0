import { cn as e } from "../../../lib/utils.js";
import { F0Icon as t } from "../../F0Icon/index.js";
import n from "../../../icons/app/ArrowDown.js";
import r from "../../../icons/app/ArrowUp.js";
import { BaseTag as i } from "../internal/BaseTag/index.js";
import { isEmptyNumeric as a } from "../../../lib/numeric/utils/isEmptyNumeric.js";
import { numericFinalValue as o } from "../../../lib/numeric/utils/numericFinalValue.js";
import { useNormalizeNumericValueWithFormatter as s } from "../../../lib/numeric/hooks/useNormalizeNumericValueWithFormatter.js";
import { forwardRef as c } from "react";
import { jsx as l } from "react/jsx-runtime";
//#region src/components/tags/F0TagBalance/F0TagBalance.tsx
var u = {
	"-1": n,
	1: r
}, d = {
	"-1": "negative",
	0: "neutral",
	1: "positive"
}, f = c(({ percentage: n, amount: r, invertStatus: c, info: f, hint: p, nullText: m }, h) => {
	let g = s(), _ = g(r, { formatterOptions: { decimalPlaces: 2 } }), v = g(n, { formatterOptions: {
		decimalPlaces: 0,
		emptyPlaceholder: m ?? "N/A"
	} }), y = o(v.numericValue), b = o(_.numericValue), x = "", S = null, C = "", w = "null", T = p;
	if (a(b)) x = m ?? "N/A", T = void 0;
	else {
		let n = Math.sign(y ?? 0).toString();
		w = d[Math.sign((y ?? 0) * (c ? -1 : 1)).toString()], x = [a(y) ? null : v.formatter({
			...v.numericValue,
			units: "%",
			unitsPosition: "append"
		}, v.formatterOptions), _.formatter(_.numericValue, _.formatterOptions)].filter(Boolean).join(" · "), C = `${w} balance`, S = w === "neutral" ? null : /* @__PURE__ */ l(t, {
			icon: u[n],
			size: "sm",
			className: e({
				positive: "text-f1-icon-positive",
				neutral: "text-f1-icon-secondary",
				negative: "text-f1-icon-critical"
			}[w])
		});
	}
	return /* @__PURE__ */ l(i, {
		ref: h,
		className: e({
			positive: "bg-f1-background-positive text-f1-foreground-positive",
			neutral: "bg-f1-background-secondary text-f1-foreground-secondary",
			negative: "bg-f1-background-critical text-f1-foreground-critical",
			null: "text-f1-foreground-secondary"
		}[w]),
		info: f,
		hint: T,
		left: S,
		additionalAccessibleText: C,
		text: x
	});
});
f.displayName = "F0TagBalance";
//#endregion
export { f as F0TagBalance };
