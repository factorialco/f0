import { cn as e } from "../../../../lib/utils.js";
import { tableDisplayClassNames as t } from "../../const.js";
import { isShowingPlaceholder as n, resolveValue as r } from "../../utils.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/ui/value-display/types/number/number.tsx
var o = (o, c) => {
	let l = r(o, "number"), u = n(o, "number"), d = {
		unitsPosition: "right",
		units: "",
		...typeof o == "object" && "number" in o ? o : {
			decimalPlaces: void 0,
			number: l
		}
	};
	return /* @__PURE__ */ a("div", {
		className: e("flex flex-1 items-center gap-1 text-f1-foreground", c.visualization === "table" && ["justify-end", t.text], u && "text-f1-foreground-secondary"),
		children: [
			d.unitsPosition === "left" && d.units && /* @__PURE__ */ i(s, { units: d.units }),
			d.decimalPlaces === void 0 ? d.number?.toString() ?? "" : d.number?.toFixed(d.decimalPlaces),
			d.unitsPosition === "right" && d.units && /* @__PURE__ */ i(s, { units: d.units })
		]
	});
}, s = ({ units: e }) => /* @__PURE__ */ i("span", { children: e.toString() });
//#endregion
export { o as NumberCell };
