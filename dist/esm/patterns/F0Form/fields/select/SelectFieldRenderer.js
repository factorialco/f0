import { useI18n as e } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0Select as t } from "../../../../F0Select.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/patterns/F0Form/fields/select/SelectFieldRenderer.tsx
function r({ field: e, formField: r, error: i, loading: a, status: o }) {
	let s = {
		label: e.label,
		placeholder: e.placeholder,
		disabled: e.disabled,
		options: e.options,
		showSearchBox: e.showSearchBox,
		searchBoxPlaceholder: e.searchBoxPlaceholder,
		icon: e.icon,
		onCreate: e.onCreate,
		name: r.name,
		onBlur: r.onBlur,
		error: i,
		status: o,
		loading: a,
		size: "md",
		hideLabel: !0
	};
	return e.multiple ? /* @__PURE__ */ n(t, {
		...s,
		multiple: !0,
		clearable: e.clearable,
		value: r.value ?? [],
		onChange: (e) => {
			r.onChange(e), r.onBlur();
		}
	}) : e.clearable ? /* @__PURE__ */ n(t, {
		...s,
		clearable: !0,
		value: r.value ?? void 0,
		onChange: (e) => {
			r.onChange(e), r.onBlur();
		}
	}) : /* @__PURE__ */ n(t, {
		...s,
		value: r.value ?? void 0,
		onChange: (e) => {
			r.onChange(e), r.onBlur();
		}
	});
}
function i({ field: e, formField: r, error: i, loading: a, status: o }) {
	let s = {
		label: e.label,
		placeholder: e.placeholder,
		disabled: e.disabled,
		source: e.source,
		mapOptions: e.mapOptions,
		showSearchBox: e.showSearchBox,
		searchBoxPlaceholder: e.searchBoxPlaceholder,
		icon: e.icon,
		onCreate: e.onCreate,
		name: r.name,
		onBlur: r.onBlur,
		error: i,
		status: o,
		loading: a,
		size: "md",
		hideLabel: !0
	};
	return e.multiple ? /* @__PURE__ */ n(t, {
		...s,
		multiple: !0,
		clearable: e.clearable,
		value: r.value ?? [],
		onChange: (e) => {
			r.onChange(e), r.onBlur();
		}
	}) : e.clearable ? /* @__PURE__ */ n(t, {
		...s,
		clearable: !0,
		value: r.value ?? void 0,
		onChange: (e) => {
			r.onChange(e), r.onBlur();
		}
	}) : /* @__PURE__ */ n(t, {
		...s,
		value: r.value ?? void 0,
		onChange: (e) => {
			r.onChange(e), r.onBlur();
		}
	});
}
function a(t) {
	let { t: a } = e(), o = {
		...t.field,
		placeholder: t.field.placeholder ?? a("common.selectPlaceholder")
	};
	return "source" in o && o.source !== void 0 && o.mapOptions !== void 0 ? /* @__PURE__ */ n(i, {
		...t,
		field: o
	}) : "options" in o && o.options !== void 0 ? /* @__PURE__ */ n(r, {
		...t,
		field: o
	}) : null;
}
//#endregion
export { a as SelectFieldRenderer };
