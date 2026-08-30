import { useI18n as e } from "../../../lib/providers/i18n/i18n-provider.js";
import { F0Link as t } from "../../../components/F0Link/F0Link.js";
import { InputMessages as n } from "../../../components/F0InputField/components/InputMessages.js";
import { F0Alert as r } from "../../../components/F0Alert/F0Alert.js";
import { FormControl as i, FormDescription as a, FormField as o, FormItem as s, FormMessage as c } from "../../../ui/form.js";
import { evaluateDisabled as l, evaluateRenderIf as u, resolveFieldAlert as d } from "./utils.js";
import { generateAnchorId as f, useF0FormContext as p } from "../context.js";
import { isFieldRequired as m } from "./schema.js";
import { renderFieldInput as h } from "./renderFieldInput.js";
import { useEffect as g, useRef as _ } from "react";
import { Fragment as v, jsx as y, jsxs as b } from "react/jsx-runtime";
import { useFormContext as x } from "react-hook-form";
//#region src/patterns/F0Form/fields/FieldRenderer.tsx
function S(e) {
	return typeof e == "object" && !!e && "_type" in e && e._type === "select-config";
}
function C({ field: e, formField: t, fieldState: n, isSubmitting: r, isRequired: i, values: a, isFormLoading: o, renderCustomField: s }) {
	if (e.customFieldName && e.type !== "custom") {
		if (!s) throw Error(`Field "${e.id}" has customFieldName "${e.customFieldName}" but no renderCustomField prop was provided to F0Form.`);
		let c = s({
			id: e.id,
			label: e.label,
			placeholder: e.placeholder,
			value: t.value,
			onChange: t.onChange,
			onBlur: t.onBlur,
			error: void 0,
			isValidating: n.isValidating,
			disabled: typeof e.disabled == "boolean" ? e.disabled : void 0,
			required: i,
			customFieldName: e.customFieldName,
			config: void 0,
			fieldType: e.type
		});
		if (S(c)) {
			let s = {
				...e,
				...c,
				type: "select"
			};
			return h({
				field: s,
				formField: t,
				fieldState: n,
				fieldStatus: e.status,
				isSubmitting: r,
				isRequired: i,
				values: a,
				isFormLoading: o
			});
		}
		return /* @__PURE__ */ y(v, { children: c });
	}
	return h({
		field: e,
		formField: t,
		fieldState: n,
		fieldStatus: e.status,
		isSubmitting: r,
		isRequired: i,
		values: a,
		isFormLoading: o
	});
}
function w({ field: h, sectionId: v }) {
	let S = x(), w = S.watch(), { isSubmitting: T } = S.formState, { formName: E, isLoading: D, renderCustomField: O, submitConfig: k } = p(), { forms: A } = e(), j = k?.type === "autosubmit", M = j || h.autoSave ? !1 : T, N = l(h.disabled, w), P = _(N);
	g(() => {
		let e = P.current;
		if (P.current = N, !e && N && h.resetOnDisable) {
			let e = S.formState.defaultValues?.[h.id];
			S.setValue(h.id, e, { shouldValidate: !1 });
		}
	}, [
		N,
		h.resetOnDisable,
		h.id,
		S
	]);
	let F = !h.renderIf || u(h.renderIf, w), I = h.type !== "checkbox" && h.type !== "custom" && h.type !== "entitiesList" && !(h.type === "cardSelect" && h.hideLabel), L = h.type !== "custom" && h.type !== "entitiesList", R = h.validation && m(h.validation, h.type), z = f(E, v, h.id);
	return F ? /* @__PURE__ */ y(o, {
		control: S.control,
		name: h.id,
		...j || h.autoSave ? { disabled: !1 } : {},
		render: ({ field: e, fieldState: o }) => /* @__PURE__ */ b(s, {
			id: z,
			className: "scroll-mt-4",
			children: [
				I && /* @__PURE__ */ b("label", {
					className: "text-base font-medium leading-normal text-f1-foreground-secondary",
					children: [h.label, R && /* @__PURE__ */ y("span", {
						className: "ml-0.5 text-f1-foreground-critical",
						children: "*"
					})]
				}),
				/* @__PURE__ */ y(i, { children: C({
					field: h,
					formField: e,
					fieldState: o,
					isSubmitting: M,
					isRequired: R,
					values: w,
					isFormLoading: D,
					renderCustomField: O
				}) }),
				h.helpText && /* @__PURE__ */ y(a, { children: h.helpText }),
				"moreInfoLink" in h && h.moreInfoLink && /* @__PURE__ */ y(t, {
					href: h.moreInfoLink.href,
					target: "_blank",
					variant: "link",
					children: h.moreInfoLink.label ?? A.moreInformation
				}),
				(() => {
					let t = d(h.alert, e.value, w);
					return t ? /* @__PURE__ */ y(r, {
						...t,
						variant: t.variant ?? "info"
					}) : null;
				})(),
				L && !o.error && /* @__PURE__ */ y(n, { status: h.status }),
				L && o.error?.type !== "alertCritical" && /* @__PURE__ */ y(c, { fallback: R ? A.validation.required : A.validation.invalidType })
			]
		})
	}) : /* @__PURE__ */ y(o, {
		control: S.control,
		name: h.id,
		...j || h.autoSave ? { disabled: !1 } : {},
		render: () => /* @__PURE__ */ y("span", {
			className: "hidden",
			"aria-hidden": "true"
		})
	});
}
//#endregion
export { w as FieldRenderer };
