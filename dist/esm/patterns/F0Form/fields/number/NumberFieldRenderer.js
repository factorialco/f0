import { F0NumberInput as e } from "../../../../components/F0NumberInput/F0NumberInput.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/patterns/F0Form/fields/number/NumberFieldRenderer.tsx
function n({ field: n, formField: r, error: i, loading: a, status: o }) {
	return /* @__PURE__ */ t(e, {
		...r,
		label: n.label,
		placeholder: n.placeholder,
		disabled: n.disabled,
		step: n.step,
		min: n.min,
		max: n.max,
		maxDecimals: n.maxDecimals,
		units: n.units,
		locale: n.locale ?? "en-US",
		value: r.value == null ? void 0 : Number(r.value),
		onChange: (e) => r.onChange(e),
		size: "md",
		hideLabel: !0,
		hint: "",
		error: i,
		status: o,
		loading: a,
		clearable: n.clearable
	});
}
//#endregion
export { n as NumberFieldRenderer };
