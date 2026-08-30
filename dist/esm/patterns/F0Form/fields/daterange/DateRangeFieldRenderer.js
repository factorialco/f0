import { F0DatePicker as e } from "../../../../F0DatePicker.js";
import { useMemo as t } from "react";
import { jsx as n } from "react/jsx-runtime";
//#region src/patterns/F0Form/fields/daterange/DateRangeFieldRenderer.tsx
function r(e) {
	if (!(!e?.from || !e?.to)) return {
		value: {
			from: e.from,
			to: e.to
		},
		granularity: "range"
	};
}
function i(e) {
	if (!(!e?.value?.from || !e?.value?.to)) return {
		from: e.value.from,
		to: e.value.to
	};
}
function a({ field: a, formField: o, error: s, loading: c, status: l }) {
	let u = t(() => r(o.value ?? void 0), [o.value]), d = (e) => {
		o.onChange(i(e) ?? null);
	}, f = (e) => {
		e || o.onBlur();
	}, p = a.fromLabel && a.toLabel ? `${a.label} (${a.fromLabel} - ${a.toLabel})` : a.label;
	return /* @__PURE__ */ n(e, {
		label: p,
		placeholder: a.placeholder,
		disabled: a.disabled,
		granularities: a.granularities ?? ["range"],
		minDate: a.minDate,
		maxDate: a.maxDate,
		presets: a.presets,
		clearable: a.clearable,
		value: u,
		onChange: d,
		onOpenChange: f,
		size: "md",
		hideLabel: !0,
		error: s,
		status: l,
		loading: c
	});
}
//#endregion
export { a as DateRangeFieldRenderer };
