import { F0DatePicker as e } from "../../../../F0DatePicker.js";
import { useMemo as t } from "react";
import { jsx as n } from "react/jsx-runtime";
//#region src/patterns/F0Form/fields/period/PeriodFieldRenderer.tsx
function r({ field: r, formField: i, error: a, loading: o, status: s }) {
	let c = t(() => i.value ?? void 0, [i.value]);
	return /* @__PURE__ */ n(e, {
		label: r.label,
		placeholder: r.placeholder,
		disabled: r.disabled,
		granularities: r.granularities,
		minDate: r.minDate,
		maxDate: r.maxDate,
		presets: r.presets,
		displayFormat: r.displayFormat,
		selectOnCellOnly: !0,
		clearable: r.clearable,
		value: c,
		onChange: (e) => {
			i.onChange(e ?? null);
		},
		onOpenChange: (e) => {
			e || i.onBlur();
		},
		size: "md",
		hideLabel: !0,
		error: a,
		status: s,
		loading: o
	});
}
//#endregion
export { r as PeriodFieldRenderer };
