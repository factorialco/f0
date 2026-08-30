import { F0PhoneInput as e } from "../../../../experimental/Forms/F0PhoneInput/index.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/patterns/F0Form/fields/phone/PhoneFieldRenderer.tsx
function n({ field: n, formField: r, error: i, loading: a, status: o }) {
	return /* @__PURE__ */ t(e, {
		...r,
		label: n.label,
		value: r.value ?? void 0,
		onChange: (e) => r.onChange(e),
		placeholder: n.placeholder,
		disabled: n.disabled,
		size: "md",
		hideLabel: !0,
		error: i,
		status: o,
		loading: a,
		clearable: n.clearable,
		defaultCountry: n.defaultCountry,
		pinnedCountries: n.pinnedCountries,
		allowedCountries: n.allowedCountries
	});
}
//#endregion
export { n as PhoneFieldRenderer };
