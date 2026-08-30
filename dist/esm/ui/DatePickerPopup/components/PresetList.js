import { Select as e } from "../../Select/components/Select.js";
import { SelectContent as t } from "../../Select/components/SelectContent.js";
import { SelectItem as n } from "../../Select/components/SelectItem.js";
import { SelectSeparator as r } from "../../Select/components/SelectSeparator.js";
import { useEffect as i, useState as a } from "react";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
import { isEqual as c } from "date-fns";
//#region src/ui/DatePickerPopup/components/PresetList.tsx
var l = "__custom__", u = (e, t) => {
	if (!e?.value) return !1;
	let n = typeof t.value == "function" ? t.value() : t.value;
	return e.granularity === t.granularity && c(e.value.from, n.from) && (!e.value.to || !n.to || c(e.value.to, n.to));
}, d = ({ presets: c, ...d }) => {
	let [f, p] = a();
	return i(() => {
		if (d.date) {
			let e = Object.entries(c).find(([e, t]) => u(d.date, t));
			p(e ? e[0] : void 0);
		}
	}, [d.date, c]), /* @__PURE__ */ o(e, {
		as: "list",
		value: f,
		onValueChange: (e) => {
			p(e), d.onSelect?.(e);
		},
		children: /* @__PURE__ */ s(t, { children: [
			Object.entries(c).map(([e, t]) => /* @__PURE__ */ o(n, {
				value: e,
				children: t?.label || e
			}, e)),
			/* @__PURE__ */ o(r, {}),
			/* @__PURE__ */ o(n, {
				value: l,
				children: "Custom"
			}, l)
		] })
	});
};
//#endregion
export { d as PresetList };
