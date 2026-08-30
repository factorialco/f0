import { F0DatePicker as e } from "../../../../F0DatePicker.js";
import { useMemo as t } from "react";
import { jsx as n } from "react/jsx-runtime";
//#region src/patterns/F0Form/fields/date/DateFieldRenderer.tsx
function r(e, t) {
	if (e) return {
		value: {
			from: e,
			to: e
		},
		granularity: t?.[0] ?? "day"
	};
}
function i(e) {
	return e?.value?.from;
}
function a({ field: a, formField: o, error: s, loading: c, status: l }) {
	let u = t(() => r(o.value ?? void 0, a.granularities), [o.value, a.granularities]);
	return /* @__PURE__ */ n(e, {
		label: a.label,
		placeholder: a.placeholder,
		disabled: a.disabled,
		granularities: a.granularities,
		minDate: a.minDate,
		maxDate: a.maxDate,
		presets: a.presets,
		clearable: a.clearable,
		value: u,
		onChange: (e) => {
			o.onChange(i(e) ?? null);
		},
		onOpenChange: (e) => {
			e || setTimeout(() => o.onBlur(), 0);
		},
		size: "md",
		hideLabel: !0,
		error: s,
		status: l,
		loading: c
	});
}
//#endregion
export { a as DateFieldRenderer };
