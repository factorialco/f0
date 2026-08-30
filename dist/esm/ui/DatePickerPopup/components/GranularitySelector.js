import { useI18n as e } from "../../../lib/providers/i18n/i18n-provider.js";
import { Select as t } from "../../Select/components/Select.js";
import { SelectContent as n } from "../../Select/components/SelectContent.js";
import { SelectItem as r } from "../../Select/components/SelectItem.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/ui/DatePickerPopup/components/GranularitySelector.tsx
function o({ granularities: o, value: s, onChange: c, definitions: l }) {
	let u = e(), d = (e) => {
		c(e);
	}, f = (e) => l?.[e]?.selectorLabel || u.date.granularities[e]?.label || e;
	return /* @__PURE__ */ a("div", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ i("h6", {
			className: "text-sm font-medium",
			children: u.date.selectedBy
		}), /* @__PURE__ */ i(t, {
			value: s,
			onValueChange: d,
			as: "list",
			children: /* @__PURE__ */ i(n, { children: o.map((e) => /* @__PURE__ */ i(r, {
				value: e,
				children: f(e)
			}, e)) })
		})]
	});
}
//#endregion
export { o as GranularitySelector };
