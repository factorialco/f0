import { F0DurationInput as e } from "../../../../components/F0DurationInput/index.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/patterns/F0Form/fields/duration/DurationFieldRenderer.tsx
function n({ field: n, formField: r, error: i, status: a, id: o, "aria-describedby": s, "aria-invalid": c }) {
	let l = typeof r.value == "number" && Number.isFinite(r.value) ? r.value : 0, u = a ?? (i ? { type: "error" } : void 0);
	return /* @__PURE__ */ t(e, {
		id: o,
		"aria-describedby": s,
		"aria-invalid": c,
		label: n.label,
		hideLabel: !0,
		value: l,
		onChange: (e) => r.onChange(e),
		onBlur: r.onBlur,
		units: n.units,
		fields: n.fields,
		allowNegative: n.allowNegative,
		status: u,
		disabled: n.disabled,
		readonly: n.readonly,
		size: n.size
	});
}
//#endregion
export { n as DurationFieldRenderer };
