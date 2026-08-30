import { InputMessages as e } from "../../components/F0InputField/components/InputMessages.js";
import { isFieldRequired as t } from "../F0Form/fields/schema.js";
import { renderFieldInput as n } from "../F0Form/fields/renderFieldInput.js";
import { useId as r } from "react";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/patterns/F0FormField/F0FormField.tsx
function o({ field: o, value: s, onChange: c, onBlur: l, error: u, errorMessage: d, status: f, loading: p, required: m, disabled: h, hideLabel: g, initialFiles: _ }) {
	let v = r(), y = m ?? (o.validation ? t(o.validation) : !1), b = !g && o.type !== "checkbox" && o.type !== "custom", x = {
		value: s,
		onChange: c,
		onBlur: l ?? (() => {}),
		name: o.id,
		ref: () => {}
	}, S = {
		error: u || f?.type === "error" ? {
			type: "custom",
			message: d ?? f?.message
		} : void 0,
		isValidating: !!p
	}, C = u ? {
		type: "error",
		message: d
	} : f, w = h === void 0 ? o : {
		...o,
		disabled: h
	}, T = o.type === "file" ? _ : void 0;
	return /* @__PURE__ */ a("div", {
		className: "space-y-2",
		id: v,
		children: [
			b && /* @__PURE__ */ a("label", {
				htmlFor: o.id,
				className: "text-base font-medium leading-normal text-f1-foreground-secondary",
				children: [o.label, y && /* @__PURE__ */ i("span", {
					className: "ml-0.5 text-f1-foreground-critical",
					children: "*"
				})]
			}),
			n({
				field: w,
				formField: x,
				fieldState: S,
				isSubmitting: !1,
				isRequired: y,
				values: {},
				initialFiles: T,
				fieldStatus: C
			}),
			o.helpText && /* @__PURE__ */ i("p", {
				className: "text-base text-f1-foreground-secondary",
				children: o.helpText
			}),
			/* @__PURE__ */ i(e, { status: C })
		]
	});
}
o.displayName = "F0FormField";
//#endregion
export { o as F0FormField };
