import { cn as e } from "../../../lib/utils.js";
import { F0Icon as t } from "../../F0Icon/index.js";
import { OneEllipsis as n } from "../../../lib/OneEllipsis/OneEllipsis.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/F0InputField/components/Label.tsx
var a = ({ label: a, required: o, htmlFor: s, id: c, className: l, icon: u, disabled: d }) => /* @__PURE__ */ i("label", {
	id: c,
	className: e(l, "text-md flex max-w-full gap-1 font-medium text-f1-foreground-secondary"),
	htmlFor: s,
	"aria-label": a,
	"aria-disabled": d,
	children: [
		u && /* @__PURE__ */ r(t, {
			icon: u,
			size: "sm"
		}),
		/* @__PURE__ */ r(n, {
			className: "shrink-1 min-w-0",
			children: a
		}),
		o && /* @__PURE__ */ r("span", {
			className: "text-f1-foreground-critical",
			"aria-hidden": "true",
			children: "*"
		})
	]
});
//#endregion
export { a as Label };
