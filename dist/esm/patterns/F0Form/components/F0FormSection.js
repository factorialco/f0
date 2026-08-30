import { cn as e } from "../../../lib/utils.js";
import { useI18n as t } from "../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as n } from "../../../components/F0Button/F0Button.js";
import { Form as r } from "../../../ui/form.js";
import { SectionHeader as i } from "../../SectionHeader/index.js";
import { createConditionalResolver as a } from "../conditionalResolver.js";
import { FIELD_GAP as o } from "../constants.js";
import { F0FormContext as s } from "../context.js";
import { CardSelectDepsContext as c } from "../fields/cardSelect/CardSelectDepsContext.js";
import { FieldRenderer as l } from "../fields/FieldRenderer.js";
import { RowRenderer as u } from "./RowRenderer.js";
import { buildCardSelectContentMap as d, groupContiguousSwitches as f } from "../groupingUtils.js";
import { useSchemaDefinition as p } from "../useSchemaDefinition.js";
import { createZodErrorMap as m } from "../zodErrorMap.js";
import { SwitchGroupRenderer as h } from "./SwitchGroupRenderer.js";
import g, { useCallback as _, useEffect as v, useMemo as y, useRef as b } from "react";
import { jsx as x, jsxs as S } from "react/jsx-runtime";
import { useForm as C } from "react-hook-form";
//#region src/patterns/F0Form/components/F0FormSection.tsx
var ee = {
	"on-blur": "onBlur",
	"on-change": "onChange",
	"on-submit": "onSubmit"
};
function w(e) {
	let t = {};
	function n(e, r) {
		for (let [i, a] of Object.entries(e)) {
			if (i === "root") continue;
			let e = r ? `${r}.${i}` : i;
			if (a && typeof a == "object" && !Array.isArray(a)) {
				let r = a;
				"message" in r && typeof r.message == "string" ? t[e] = r.message : n(r, e);
			}
		}
	}
	return n(e, ""), t;
}
function T({ formName: T, sectionId: E, schema: D, sectionConfig: O, defaultValues: k, onSubmit: A, submitConfig: j, errorTriggerMode: te, className: ne, initialFiles: M, isLoadingInitialFiles: N, formRef: P, renderCustomField: F, useUpload: I, isLoading: L }) {
	let R = t(), z = p(D), B = j?.label ?? "Submit", V = j?.icon ?? void 0, H = j?.showSubmitWhenDirty ?? !1, U = j?.hideSubmitButton ?? !1, W = y(() => m(R), [R]), G = ee[te], K = y(() => a(D, { errorMap: W }), [D, W]), q = C({
		resolver: K,
		mode: G,
		defaultValues: k
	}), J = b(L);
	v(() => {
		J.current && !L && k && q.reset(k), J.current = L;
	}, [
		L,
		k,
		q
	]);
	let Y = q.formState.errors.root, { isSubmitting: X, isDirty: re } = q.formState, Z = Object.keys(q.formState.errors).filter((e) => e !== "root").length > 0, Q = b(null), $ = _(async (e) => {
		let t = { ...e };
		for (let e of Object.keys(t)) t[e] === null && (t[e] = void 0);
		let n = await A(t);
		n.success ? q.reset(e) : (n.errors && Object.entries(n.errors).forEach(([e, t]) => {
			q.setError(e, { message: t });
		}), n.rootMessage && q.setError("root", { message: n.rootMessage }));
	}, [A, q]);
	v(() => (P && (P.current = {
		submit: () => new Promise((e, t) => {
			q.handleSubmit(async (t) => {
				await $(t), e();
			}, () => {
				t(/* @__PURE__ */ Error("Form validation failed"));
			})();
		}),
		reset: () => q.reset(),
		isDirty: () => q.formState.isDirty,
		getValues: () => q.getValues(),
		setValue: (e, t, n) => {
			q.setValue(e, t, {
				shouldValidate: n?.shouldValidate ?? !0,
				shouldDirty: n?.shouldDirty ?? !0
			});
		},
		setValues: (e, t) => {
			for (let [n, r] of Object.entries(e)) q.setValue(n, r, {
				shouldValidate: !1,
				shouldDirty: t?.shouldDirty ?? !0
			});
			t?.shouldValidate !== !1 && q.trigger();
		},
		trigger: async (e) => e ? q.trigger(e) : q.trigger(),
		getErrors: () => w(q.formState.errors),
		getFieldNames: () => Object.keys(q.getValues()),
		actionBar: { wiggle: () => {} },
		_setStateCallback: (e) => {
			Q.current = e;
		}
	}), () => {
		P && (P.current = null);
	}), [
		P,
		q,
		$
	]), v(() => {
		Q.current && Q.current({
			isSubmitting: X,
			hasErrors: Z
		});
	}, [X, Z]);
	let ie = f(z), ae = y(() => ({
		formName: T,
		initialFiles: M,
		isLoadingInitialFiles: N,
		renderCustomField: F,
		isLoading: L,
		useUpload: I
	}), [
		T,
		M,
		N,
		F,
		L,
		I
	]), oe = O?.title ?? E, se = O?.description;
	return /* @__PURE__ */ x(s.Provider, {
		value: ae,
		children: /* @__PURE__ */ x(r, {
			...q,
			children: /* @__PURE__ */ S("form", {
				onSubmit: q.handleSubmit($),
				className: e("flex flex-col", ne),
				children: [
					/* @__PURE__ */ S("div", {
						className: e("flex items-start justify-between py-5", "[&>div]:px-0 [&>div]:mx-0 [&>div]:border-0"),
						children: [/* @__PURE__ */ x(i, {
							title: oe,
							description: se ?? ""
						}), O?.action && /* @__PURE__ */ x(n, {
							label: O.action.label,
							icon: O.action.icon,
							onClick: O.action.onClick,
							href: O.action.href,
							variant: "outline",
							size: "md"
						})]
					}),
					/* @__PURE__ */ x("div", {
						className: `flex flex-col ${o}`,
						children: ie.map((e, t) => {
							switch (e.type) {
								case "switchGroup": return /* @__PURE__ */ x(h, {
									fields: e.fields,
									dependentFields: e.dependentFields,
									cardSelectDependentFields: e.cardSelectDependentFields,
									sectionId: E
								}, `switch-group-${t}`);
								case "field": {
									let t = e.cardSelectDependentFields ? /* @__PURE__ */ x(c.Provider, {
										value: d(e.cardSelectDependentFields, E),
										children: /* @__PURE__ */ x(l, {
											field: e.item.field,
											sectionId: E
										})
									}) : /* @__PURE__ */ x(l, {
										field: e.item.field,
										sectionId: E
									});
									return /* @__PURE__ */ x(g.Fragment, { children: t }, e.item.field.id);
								}
								case "row": return /* @__PURE__ */ x(u, {
									row: e.item,
									sectionId: E
								}, `row-${e.index}`);
								default: return null;
							}
						})
					}),
					Y && /* @__PURE__ */ x("p", {
						className: "mt-4 text-base font-medium text-f1-foreground-critical",
						children: Y.message
					}),
					!U && (!H || re) && /* @__PURE__ */ x("div", {
						className: "mt-4 flex justify-end",
						children: /* @__PURE__ */ x(n, {
							type: "submit",
							label: B,
							icon: V,
							loading: X,
							disabled: Z || L
						})
					})
				]
			})
		})
	});
}
//#endregion
export { T as F0FormSection };
