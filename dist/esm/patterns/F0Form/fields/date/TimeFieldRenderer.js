import { useHourCycle as e } from "../../../../lib/providers/user-platafform/UserPlatformProvider.js";
import { getFieldInputIcon as t } from "../../../../lib/field-input-icons.js";
import { F0TextInput as n } from "../../../../components/F0TextInput/F0TextInput.js";
import { dateToDisplayTime as r, dateToTimeString as i, displayTimeToDate as a, timeStringToDate as o } from "./utils.js";
import { useCallback as s, useEffect as c, useMemo as l, useState as u } from "react";
import { jsx as d } from "react/jsx-runtime";
//#region src/patterns/F0Form/fields/date/TimeFieldRenderer.tsx
function f(t) {
	let n = e();
	return n ? /* @__PURE__ */ d(m, {
		...t,
		hourCycle: n
	}) : /* @__PURE__ */ d(p, { ...t });
}
function p({ field: e, formField: r, error: a, loading: c, status: u }) {
	let f = l(() => i(r.value ?? void 0), [r.value]), p = s((e) => {
		if (!e) {
			r.onChange(null);
			return;
		}
		r.onChange(o(e));
	}, [r]);
	return /* @__PURE__ */ d(n, {
		type: "time",
		label: e.label,
		disabled: e.disabled,
		value: f,
		onChange: p,
		onBlur: r.onBlur,
		size: "md",
		hideLabel: !0,
		error: a,
		status: u,
		loading: c,
		clearable: e.clearable,
		name: r.name,
		ref: r.ref,
		icon: t("time")
	});
}
function m({ field: e, formField: i, error: o, loading: l, status: f, hourCycle: p }) {
	let m = i.value ?? void 0, [h, g] = u(() => r(m, p));
	c(() => {
		g(r(m, p));
	}, [m, p]);
	let _ = s(() => {
		let e = h.trim();
		i.onChange(e ? a(e, p) ?? null : null), i.onBlur();
	}, [
		h,
		p,
		i
	]);
	return /* @__PURE__ */ d(n, {
		label: e.label,
		disabled: e.disabled,
		value: h,
		onChange: g,
		onBlur: _,
		placeholder: p === "12h" ? "hh:mm AM" : "HH:mm",
		size: "md",
		hideLabel: !0,
		error: o,
		status: f,
		loading: l,
		clearable: e.clearable,
		name: i.name,
		ref: i.ref,
		icon: t("time")
	});
}
//#endregion
export { f as TimeFieldRenderer };
