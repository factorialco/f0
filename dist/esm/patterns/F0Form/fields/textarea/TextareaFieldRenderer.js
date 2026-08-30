import { F0TextAreaInput as e } from "../../../../components/F0TextAreaInput/F0TextAreaInput.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/patterns/F0Form/fields/textarea/TextareaFieldRenderer.tsx
function n({ field: n, formField: r, error: i, loading: a, status: o }) {
	return /* @__PURE__ */ t(e, {
		...r,
		label: n.label,
		placeholder: n.placeholder,
		disabled: n.disabled,
		rows: n.rows,
		maxLength: n.maxLength,
		maxHeight: n.maxHeight,
		value: r.value == null ? "" : String(r.value),
		size: "md",
		hideLabel: !0,
		error: i,
		status: o,
		loading: a
	});
}
//#endregion
export { n as TextareaFieldRenderer };
