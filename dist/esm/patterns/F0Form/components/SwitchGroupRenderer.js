import { useI18n as e } from "../../../lib/providers/i18n/i18n-provider.js";
import { CardSelectableContainer as t } from "../../../components/CardSelectable/index.js";
import { F0Alert as n } from "../../../components/F0Alert/F0Alert.js";
import { FormField as r, FormItem as i, FormMessage as a } from "../../../ui/form.js";
import { isZodType as o, unwrapZodSchema as s } from "../f0Schema.js";
import { evaluateDisabled as c, evaluateRenderIf as l, resolveFieldAlert as u } from "../fields/utils.js";
import { generateAnchorId as d, useF0FormContext as f } from "../context.js";
import { CardSelectDepsContext as p } from "../fields/cardSelect/CardSelectDepsContext.js";
import { FieldRenderer as m } from "../fields/FieldRenderer.js";
import { RowRenderer as h } from "./RowRenderer.js";
import { useEffect as g, useMemo as _, useRef as v } from "react";
import { jsx as y, jsxs as b } from "react/jsx-runtime";
import { useFormContext as x } from "react-hook-form";
//#region src/patterns/F0Form/components/SwitchGroupRenderer.tsx
function S(e) {
	let t = s(e);
	return o(t, "ZodLiteral") && t._def.value === !0;
}
function C({ fields: o, dependentFields: s, cardSelectDependentFields: C, sectionId: w }) {
	let T = x(), { formName: E } = f(), { watch: D, setValue: O } = T, { isSubmitting: k } = T.formState, A = D(), j = _(() => o.filter((e) => !e.renderIf || l(e.renderIf, A)), [o, A]), M = _(() => Object.fromEntries(j.map((e) => [e.id, c(e.disabled, A) || k])), [
		j,
		k,
		A
	]), N = v({});
	g(() => {
		let e = N.current, t = T.formState.defaultValues ?? {};
		for (let n of j) {
			if (!(n.id in e)) continue;
			let r = e[n.id], i = M[n.id] ?? !1;
			if (!r && i && n.resetOnDisable) {
				let e = t[n.id] ?? !1;
				O(n.id, e, { shouldValidate: !1 });
			}
		}
		N.current = { ...M };
	}, [
		M,
		j,
		T,
		O
	]);
	let P = _(() => j.map((e) => ({
		value: e.id,
		title: e.label,
		description: e.helpText,
		disabled: M[e.id] ?? !1,
		required: !!(e.validation && S(e.validation)),
		moreInfoLink: e.moreInfoLink,
		selectedContent: s?.has(e.id) ? /* @__PURE__ */ y("div", {
			className: "flex flex-col gap-4",
			children: s.get(e.id).map((e) => {
				if ("type" in e && e.type === "row") return /* @__PURE__ */ y(h, {
					row: e,
					sectionId: w
				}, e.fields.map((e) => e.id).join("-"));
				let t = e;
				if (t.type === "cardSelect" && C?.has(t.id)) {
					let e = C.get(t.id), n = /* @__PURE__ */ new Map();
					for (let [t, r] of e) n.set(t, /* @__PURE__ */ y("div", {
						className: "flex flex-col gap-4",
						children: r.map((e) => "type" in e && e.type === "row" ? /* @__PURE__ */ y(h, {
							row: e,
							sectionId: w
						}, e.fields.map((e) => e.id).join("-")) : /* @__PURE__ */ y(m, {
							field: e,
							sectionId: w
						}, e.id))
					}, t));
					return /* @__PURE__ */ y(p.Provider, {
						value: n,
						children: /* @__PURE__ */ y(m, {
							field: t,
							sectionId: w
						})
					}, t.id);
				}
				return /* @__PURE__ */ y(m, {
					field: t,
					sectionId: w
				}, t.id);
			})
		}) : void 0
	})), [
		j,
		M,
		s,
		C,
		w
	]), F = _(() => j.filter((e) => A[e.id]).map((e) => e.id), [j, A]);
	if (j.length === 0) return null;
	let I = (e) => {
		for (let t of j) {
			let n = e.includes(t.id);
			n !== !!A[t.id] && O(t.id, n, {
				shouldValidate: !0,
				shouldDirty: !0
			});
		}
	}, L = _(() => {
		let e = [];
		for (let t of j) {
			let n = u(t.alert, A[t.id], A);
			n && e.push({
				fieldId: t.id,
				props: n
			});
		}
		return e;
	}, [j, A]), { forms: R } = e(), z = j.filter((e) => e.validation && S(e.validation)).map((e) => {
		let t = T.formState.errors[e.id];
		return t ? {
			fieldId: e.id,
			label: e.label,
			message: t.message
		} : null;
	}).filter((e) => e !== null), B = _(() => j.map((e) => ({
		fieldId: e.id,
		anchorId: d(E, w, e.id)
	})), [
		j,
		E,
		w
	]);
	return /* @__PURE__ */ b("div", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ b("div", {
			id: B[0]?.anchorId,
			className: "flex scroll-mt-4 flex-col gap-4",
			children: [
				B.slice(1).map(({ fieldId: e, anchorId: t }) => /* @__PURE__ */ y("span", {
					id: t,
					className: "hidden"
				}, e)),
				/* @__PURE__ */ y(t, {
					multiple: !0,
					isToggle: !0,
					grouped: !0,
					items: P,
					value: F,
					onChange: I
				}),
				L.map(({ fieldId: e, props: t }) => /* @__PURE__ */ y(n, {
					...t,
					variant: t.variant ?? "info"
				}, e))
			]
		}), z.length > 0 && /* @__PURE__ */ y("div", {
			className: "flex flex-col gap-1",
			children: z.map((e) => /* @__PURE__ */ y(r, {
				control: T.control,
				name: e.fieldId,
				render: () => /* @__PURE__ */ y(i, { children: /* @__PURE__ */ y(a, { fallback: R.validation.required }) })
			}, e.fieldId))
		})]
	});
}
//#endregion
export { C as SwitchGroupRenderer };
