import { F0Checkbox as e } from "../../../../components/F0Checkbox/F0Checkbox.js";
import { isZodType as t, unwrapZodSchema as n } from "../../f0Schema.js";
import { jsx as r } from "react/jsx-runtime";
//#region src/patterns/F0Form/fields/checkbox/CheckboxFieldRenderer.tsx
function i(e) {
	let r = n(e);
	return t(r, "ZodLiteral") && r._def.value === !0;
}
function a({ field: t, formField: n }) {
	let a = t.validation && i(t.validation);
	return /* @__PURE__ */ r(e, {
		...n,
		title: t.label,
		disabled: t.disabled,
		required: a,
		checked: !!n.value,
		onCheckedChange: n.onChange
	});
}
//#endregion
export { a as CheckboxFieldRenderer };
