import { useI18n as e } from "../../../lib/providers/i18n/i18n-provider.js";
import { isActiveDate as t } from "../../OneCalendar/utils.js";
import { Input as n } from "../../../ui/input.js";
import { getFieldInputIcon as r } from "../../../lib/field-input-icons.js";
import { forwardRef as i, useEffect as a, useState as o } from "react";
import { Fragment as s, jsx as c } from "react/jsx-runtime";
//#region src/components/F0DatePicker/components/DateInput.tsx
var l = i(({ value: i, onDateChange: l, granularity: u, onOpenChange: d, minDate: f, maxDate: p, onClear: m, showIcon: h = !0, displayFormat: g, ..._ }, v) => {
	let [y, b] = o(""), [x, S] = o(!1), C = e();
	a(() => {
		b(u.toString(i?.value, C, g ?? "long"));
	}, [
		i,
		u,
		C,
		g
	]);
	let w = (e) => t(e, u, {
		minDate: f,
		maxDate: p
	}), T = (e, t) => {
		if (e === "") {
			l?.({
				value: void 0,
				granularity: t.key
			}), S(_.required ?? !1);
			return;
		}
		let n = t.toRange(t.fromString(e, C));
		n && (w(n?.from) && w(n?.to) ? (l?.({
			value: n,
			granularity: t.key
		}), S(!1)) : S(!0));
	}, E = () => {
		T(y, u);
	}, D = (e) => {
		b(e);
	}, O = _.placeholder ?? u.placeholder();
	return /* @__PURE__ */ c(s, { children: /* @__PURE__ */ c(n, {
		..._,
		placeholder: O,
		icon: h ? r("date") : void 0,
		ref: v,
		onFocus: () => d?.(!0),
		onClear: () => {
			m?.(), b(""), T("", u);
		},
		onKeyDown: (e) => {
			e.key === "Enter" && E();
		},
		type: "text",
		onChange: D,
		error: x || _.error,
		onBlur: E,
		value: y,
		onClickContent: () => d?.(!0)
	}) });
});
l.displayName = "DateInput";
//#endregion
export { l as DateInput };
