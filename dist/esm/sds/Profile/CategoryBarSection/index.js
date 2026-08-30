import { cn as e } from "../../../lib/utils.js";
import { CategoryBarChart as t } from "../../../kits/Charts/CategoryBarChart/index.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/sds/Profile/CategoryBarSection/index.tsx
function i({ title: i, subtitle: a, data: o, helpText: s, legend: c = !1, hideTooltip: l = !1 }) {
	return /* @__PURE__ */ r("div", { children: [
		/* @__PURE__ */ r("div", {
			className: "flex items-baseline justify-between",
			children: [/* @__PURE__ */ n("span", {
				className: "text-3xl font-semibold",
				children: i
			}), /* @__PURE__ */ n("span", {
				className: "text-xl text-f1-foreground-secondary",
				children: a
			})]
		}),
		/* @__PURE__ */ n("div", {
			className: "mt-2",
			children: /* @__PURE__ */ n(t, {
				data: o,
				legend: c,
				hideTooltip: l
			})
		}),
		!!s && /* @__PURE__ */ n("div", {
			className: c ? "mt-1" : "mt-2",
			children: /* @__PURE__ */ n("span", {
				className: e("text-f1-foreground", c ? "text-sm" : "text-base"),
				children: s
			})
		})
	] });
}
//#endregion
export { i as CategoryBarSection };
