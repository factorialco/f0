import { getFieldInputIcon as e } from "../../../../lib/field-input-icons.js";
import { F0TextInput as t } from "../../../../components/F0TextInput/F0TextInput.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/patterns/F0Form/fields/text/TextFieldRenderer.tsx
var r = { email: "name@example.com" };
function i({ field: i, formField: a, error: o, loading: s, status: c }) {
	let l = i.inputType ?? "text", u = i.placeholder ?? r[l] ?? void 0, d = e(l);
	return /* @__PURE__ */ n(t, {
		...a,
		label: i.label,
		type: l,
		placeholder: u,
		disabled: i.disabled,
		value: a.value == null ? "" : String(a.value),
		size: "md",
		hideLabel: !0,
		error: o,
		status: c,
		loading: s,
		icon: d,
		clearable: i.clearable
	});
}
//#endregion
export { i as TextFieldRenderer };
