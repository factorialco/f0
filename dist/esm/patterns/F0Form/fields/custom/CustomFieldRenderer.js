import { useOptionalF0FormContext as e } from "../../context.js";
import { Fragment as t, jsx as n } from "react/jsx-runtime";
//#region src/patterns/F0Form/fields/custom/CustomFieldRenderer.tsx
function r({ field: r, formField: i, error: a, isValidating: o, required: s }) {
	let c = e()?.renderCustomField, l = {
		id: r.id,
		label: r.label,
		placeholder: r.placeholder,
		value: i.value,
		onChange: i.onChange,
		onBlur: i.onBlur,
		error: a,
		isValidating: o,
		disabled: r.disabled,
		required: s,
		config: r.fieldConfig
	};
	if (r.customFieldName) {
		if (!c) throw Error(`Custom field "${r.id}" has customFieldName "${r.customFieldName}" but no renderCustomField prop was provided to F0Form.`);
		return /* @__PURE__ */ n(t, { children: c({
			...l,
			customFieldName: r.customFieldName,
			fieldType: "custom"
		}) });
	}
	if (!r.render) throw Error(`Custom field "${r.id}" has neither a render function nor a customFieldName.`);
	return /* @__PURE__ */ n(t, { children: r.render(l) });
}
//#endregion
export { r as CustomFieldRenderer };
