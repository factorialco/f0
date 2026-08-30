import { Skeleton as e } from "../../ui/skeleton.js";
import { withSkeleton as t } from "../../lib/skeleton.js";
import { numericFinalValue as n } from "../../lib/numeric/utils/numericFinalValue.js";
import { numericFormatter as r } from "../../lib/numeric/utils/numericFormatter.js";
import { useNormalizeNumericValueWithFormatter as i } from "../../lib/numeric/hooks/useNormalizeNumericValueWithFormatter.js";
import { F0TagBalance as a } from "../tags/F0TagBalance/index.js";
import { useMemo as o } from "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/components/F0BigNumber/F0BigNumber.tsx
var l = (e) => typeof e == "boolean" || !e ? {
	show: !!e,
	invertStatus: !1
} : {
	show: e.show ?? !0,
	invertStatus: e.invertStatus ?? !1
}, u = ({ label: e, ...t }) => {
	let u = i(), d = u(t.value, { formatterOptions: { decimalPlaces: 2 } }), f = l(t.trend), p = u(t.comparison), m = r(d.numericValue, d.formatterOptions), h = n(p.numericValue), g = n(d.numericValue), _ = o(() => {
		if (!(!h || !f.show) && !(!h || !g)) return (g - h) / h * 100;
	}, [
		g,
		h,
		f.show
	]);
	return /* @__PURE__ */ c("div", {
		className: "flex flex-col gap-2",
		children: [e && /* @__PURE__ */ s("div", { children: e }), /* @__PURE__ */ c("div", {
			className: "flex flex-row flex-wrap items-center gap-2",
			children: [/* @__PURE__ */ s("span", {
				className: "font-bold text-2xl",
				children: m
			}), h !== void 0 && /* @__PURE__ */ s(a, {
				percentage: _,
				amount: p,
				invertStatus: f.invertStatus,
				hint: t.comparisonHint
			})]
		})]
	});
}, d = () => /* @__PURE__ */ c("div", {
	className: "relative flex h-full w-full cursor-progress flex-col gap-2",
	children: [/* @__PURE__ */ s(e, { className: "h-3 w-full max-w-16 rounded-md" }), /* @__PURE__ */ c("div", {
		className: "flex flex-row flex-wrap items-end gap-2",
		children: [/* @__PURE__ */ s(e, { className: "h-8 w-full max-w-36 rounded-sm" }), /* @__PURE__ */ s(e, { className: "h-6 w-full max-w-18 rounded-sm" })]
	})]
});
u.displayName = "F0BigNumber";
var f = t(u, d);
//#endregion
export { f as F0BigNumber };
