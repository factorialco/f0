import { F0Icon as e } from "../../../../components/F0Icon/index.js";
import t from "../../../../icons/app/ArrowDown.js";
import n from "../../../../icons/app/ArrowUp.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/ui/value-display/types/delta/delta.tsx
var a = {
	positive: n,
	negative: t
}, o = (t) => {
	let { deltaStatus: n } = t, o = a[n];
	return /* @__PURE__ */ i("div", {
		className: "flex items-center gap-1 pt-0.5",
		children: [/* @__PURE__ */ r(e, {
			icon: o,
			color: n == "positive" ? "positive" : "critical"
		}), /* @__PURE__ */ r("span", {
			className: "text-f1-foreground font-normal",
			children: t.label
		})]
	});
};
//#endregion
export { o as DeltaCell };
