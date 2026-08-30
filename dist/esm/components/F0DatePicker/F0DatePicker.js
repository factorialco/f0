import { useI18n as e } from "../../lib/providers/i18n/i18n-provider.js";
import { resolveGranularityDefinition as t } from "../OneCalendar/granularities/index.js";
import { isSameDatePickerValue as n } from "../../ui/DatePickerPopup/utils.js";
import { DatePickerPopup as r } from "../../ui/DatePickerPopup/DatePickerPopup.js";
import { DateInput as i } from "./components/DateInput.js";
import { useCallback as a, useEffect as o, useMemo as s, useRef as c, useState as l } from "react";
import { jsx as u } from "react/jsx-runtime";
//#region src/components/F0DatePicker/F0DatePicker.tsx
function d({ onChange: d, value: f, presets: p = [], granularities: m = ["day"], minDate: h, maxDate: g, open: _ = !1, showIcon: v = !0, displayFormat: y, selectOnCellOnly: b, ...x }) {
	let [S, C] = l(), [w, T] = l(_);
	o(() => {
		T(_);
	}, [_]);
	let E = e(), D = s(() => m[0] ?? "day", [m]), O = a((e) => {
		let n = e || D;
		return {
			...t(n),
			key: n
		};
	}, [D]), k = a((e) => {
		if (!e) return;
		let t = O(e.granularity), n = t.toRange(t.calendarMode === "range" ? e.value : e.value?.from ?? void 0);
		if (n) return {
			value: n,
			granularity: e.granularity
		};
	}, [O]), A = s(() => O(S?.granularity), [S?.granularity, O]);
	o(() => {
		let e = k(f);
		n(S, e) || C(e);
	}, [f]);
	let j = (e) => {
		let t = k(e), r = O(t?.granularity).calendarMode !== "range" && !n(t, S);
		M(t), r && T(!1);
	}, M = (e) => {
		let t = k(e);
		if (C(t), !n(t, S)) {
			let e = O(t?.granularity);
			d?.(t, e.toString(t?.value, E));
		}
	}, N = (e) => {
		T(e), x.onOpenChange?.(e);
	}, P = s(() => p.filter((e) => m.includes(e.granularity)), [p, m]), F = c(null);
	return o(() => {
		w && F.current && requestAnimationFrame(() => {
			F.current?.focus();
		});
	}, [w]), /* @__PURE__ */ u(r, {
		hideCalendarInput: !0,
		onSelect: j,
		value: S,
		presets: P,
		granularities: m,
		minDate: h,
		maxDate: g,
		open: w,
		onOpenChange: N,
		selectOnCellOnly: b,
		asChild: !0,
		children: /* @__PURE__ */ u(i, {
			ref: F,
			...x,
			value: S,
			granularity: A,
			onDateChange: M,
			showIcon: v,
			displayFormat: y
		})
	});
}
//#endregion
export { d as F0DatePicker };
