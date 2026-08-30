import { cn as e } from "../../lib/utils.js";
import t from "../../icons/app/Delete.js";
import { useI18n as n } from "../../lib/providers/i18n/i18n-provider.js";
import { F0Button as r } from "../../components/F0Button/F0Button.js";
import { F0TableOfContent as i } from "../../experimental/Navigation/F0TableOfContent/index.js";
import { useAsyncDefaultValues as a } from "../F0WizardForm/useF0FormDefinition.js";
import { Form as o } from "../../ui/form.js";
import { FormActionBar as s } from "./components/ActionBar.js";
import { evaluateRenderIf as c } from "./fields/utils.js";
import { createConditionalResolver as l } from "./conditionalResolver.js";
import "./constants.js";
import { F0FormContext as u, generateAnchorId as d } from "./context.js";
import { CardSelectDepsContext as f } from "./fields/cardSelect/CardSelectDepsContext.js";
import { F0FormRendererProvider as p } from "./formRendererContext.js";
import { FieldRenderer as m } from "./fields/FieldRenderer.js";
import { RowRenderer as ee } from "./components/RowRenderer.js";
import { buildCardSelectContentMap as te, groupContiguousSwitches as ne } from "./groupingUtils.js";
import { useSchemaDefinition as re } from "./useSchemaDefinition.js";
import { createZodErrorMap as h } from "./zodErrorMap.js";
import { SwitchGroupRenderer as ie } from "./components/SwitchGroupRenderer.js";
import { F0FormSection as g } from "./components/F0FormSection.js";
import { SectionRenderer as _ } from "./components/SectionRenderer.js";
import { useF0AiFormRegistry as v } from "./F0AiFormRegistry.js";
import { useErrorNavigation as y } from "./useErrorNavigation.js";
import { useCallback as b, useEffect as x, useMemo as S, useRef as C, useState as w } from "react";
import { flushSync as ae } from "react-dom";
import { jsx as T, jsxs as E } from "react/jsx-runtime";
import { useMediaQuery as D } from "usehooks-ts";
import { useForm as oe } from "react-hook-form";
//#region src/patterns/F0Form/F0Form.tsx
var se = 800, ce = () => D("(max-width: 560px)", { initializeWithValue: !1 });
function le(e) {
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
function O(e) {
	if (typeof e != "object" || !e) return !1;
	let t = e._def;
	return t?.typeName === "ZodObject" || t?.typeName === "ZodEffects";
}
var ue = {
	"on-blur": "onBlur",
	"on-change": "onChange",
	"on-submit": "onSubmit"
};
function k(t) {
	let { name: n, schema: r, sections: a, defaultValues: o, onSubmit: s, submitConfig: c, className: l, errorTriggerMode: u = "on-submit", styling: f, initialFiles: p, isLoadingInitialFiles: m, renderCustomField: ee, isLoading: te, useUpload: ne } = t, re = ce(), h = (f?.showSectionsSidepanel ?? !1) && !re, ie = f?.noPadding ?? !1, _ = S(() => Object.keys(r), [r]), v = h && (f?.showOnlySelectedSection ?? !1) && !!a && _.length > 0, y = b((e) => {
		if (v) return;
		let t = d(n, e), r = document.getElementById(t);
		r && r.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	}, [n, v]), [x, C] = w(_[0]), ae = S(() => !a || !h ? [] : _.map((e) => ({
		id: e,
		label: a[e]?.title ?? e,
		onClick: () => {
			C(e), y(e);
		}
	})), [
		a,
		_,
		h,
		y
	]), D = /* @__PURE__ */ T("div", {
		className: e("flex w-full flex-col max-w-content", l),
		children: _.map((t, i) => {
			let l = r[t], f = a?.[t], re = o?.[t], h = f?.submitConfig ?? c;
			return /* @__PURE__ */ T("div", {
				id: d(n, t),
				className: e("scroll-mt-4", i !== 0 && !v && "mt-6", v && t !== x && "hidden"),
				children: /* @__PURE__ */ T(g, {
					formName: n,
					sectionId: t,
					schema: l,
					sectionConfig: f,
					defaultValues: re,
					onSubmit: (e) => s(t, e),
					submitConfig: h,
					errorTriggerMode: u,
					initialFiles: p,
					isLoadingInitialFiles: m,
					renderCustomField: ee,
					isLoading: te,
					useUpload: ne
				})
			}, t);
		})
	});
	return h && ae.length > 0 ? /* @__PURE__ */ E("div", {
		className: "flex w-full overflow-scroll",
		children: [
			/* @__PURE__ */ T("div", {
				className: "sticky top-0 mr-4 h-fit shrink-0 self-start pt-2",
				children: /* @__PURE__ */ T(i, {
					items: ae,
					activeItem: x,
					scrollable: !1
				})
			}),
			/* @__PURE__ */ T("div", { className: "sticky bottom-0 top-0 w-px bg-f1-border-secondary" }),
			/* @__PURE__ */ T("div", {
				className: "flex w-full justify-center px-4 py-2",
				children: D
			})
		]
	}) : /* @__PURE__ */ T("div", {
		className: e("flex justify-center", !ie && "p-4"),
		children: D
	});
}
function A(e) {
	return "formDefinition" in e && e.formDefinition != null;
}
function de(e) {
	let t = e, n;
	if (A(t)) n = /* @__PURE__ */ T(j, { ...t });
	else {
		let e = t;
		n = O(e.schema) ? /* @__PURE__ */ T(M, { ...e }) : /* @__PURE__ */ T(k, { ...e });
	}
	return /* @__PURE__ */ T(p, {
		value: de,
		children: n
	});
}
function j(e) {
	let { formDefinition: t, className: n, styling: r, formRef: i, initialFiles: a, renderCustomField: o } = e, s = "useUpload" in e ? e.useUpload : void 0;
	return t.isLoading ? t._brand === "single" ? /* @__PURE__ */ T(fe, {
		formDefinition: t,
		className: n,
		styling: r,
		formRef: i,
		initialFiles: a,
		renderCustomField: o,
		useUpload: s,
		isLoading: !0
	}) : /* @__PURE__ */ T(pe, {
		formDefinition: t,
		className: n,
		styling: r,
		formRef: i,
		initialFiles: a,
		renderCustomField: o,
		useUpload: s,
		isLoading: !0
	}) : t._brand === "single" ? /* @__PURE__ */ T(fe, {
		formDefinition: t,
		className: n,
		styling: r,
		formRef: i,
		initialFiles: a,
		renderCustomField: o,
		useUpload: s
	}) : /* @__PURE__ */ T(pe, {
		formDefinition: t,
		className: n,
		styling: r,
		formRef: i,
		initialFiles: a,
		renderCustomField: o,
		useUpload: s
	});
}
function fe({ formDefinition: e, className: t, styling: n, formRef: r, initialFiles: i, renderCustomField: o, useUpload: s, isLoading: c }) {
	let l = e, { resolved: u, isLoading: d } = a(l.asyncDefaultValues ?? l.defaultValuesFn ?? l.defaultValues, l.defaultValuesParamsSchema), f = b((e) => l.onSubmit({ data: e }), [l]);
	return /* @__PURE__ */ T(M, {
		name: l.name,
		description: l.description,
		module: l.module,
		schema: l.schema,
		sections: l.sections,
		defaultValues: u,
		onSubmit: f,
		submitConfig: l.submitConfig,
		errorTriggerMode: l.errorTriggerMode,
		className: t,
		styling: n,
		formRef: r,
		initialFiles: l.initialFiles ?? i,
		isLoadingInitialFiles: l.isLoadingInitialFiles,
		renderCustomField: o,
		useUpload: s,
		isLoading: c || d,
		defaultValuesParamsSchema: l.defaultValuesParamsSchema,
		defaultValuesFn: l.defaultValuesFn
	});
}
function pe({ formDefinition: e, className: t, styling: n, formRef: r, initialFiles: i, renderCustomField: o, useUpload: s, isLoading: c }) {
	let l = e, { resolved: u, isLoading: d } = a(l.asyncDefaultValues ?? l.defaultValuesFn ?? l.defaultValues, l.defaultValuesParamsSchema), f = C(u ? { ...u } : {}), p = b((e, t) => (f.current[e] = t, l.onSubmit({
		sectionId: e,
		data: t,
		fullData: { ...f.current }
	})), [l]);
	return /* @__PURE__ */ T(k, {
		name: l.name,
		schema: l.schema,
		sections: l.sections,
		defaultValues: u,
		onSubmit: p,
		submitConfig: l.submitConfig,
		errorTriggerMode: l.errorTriggerMode,
		className: t,
		styling: n,
		formRef: r,
		initialFiles: l.initialFiles ?? i,
		isLoadingInitialFiles: l.isLoadingInitialFiles,
		renderCustomField: o,
		useUpload: s,
		isLoading: c || d
	});
}
function M(a) {
	let p = n(), { forms: g } = p, { name: D, schema: O, sections: k, defaultValues: A, onSubmit: de, submitConfig: j, className: fe, errorTriggerMode: pe = "on-submit", styling: M, formRef: N, isLoading: P, defaultValuesParamsSchema: me, defaultValuesFn: he, description: ge, module: _e } = a, { useUpload: ve } = a, ye = ce(), F = (M?.showSectionsSidepanel ?? !1) && !ye, be = M?.noPadding ?? !1, I = j?.type === "action-bar", L = j?.type === "autosubmit", xe = j?.label ?? "Submit", Se = j?.icon ?? void 0, Ce = (j?.type === "default" || j?.type === void 0) && !!j?.hideSubmitButton, R = (j?.type === "default" || j?.type === void 0) && !!j?.showSubmitWhenDirty, we = j?.type !== "action-bar" && !!j?.hideActionBar, Te = !I && !L && !Ce, Ee = j?.type === "action-bar" && j?.discardable, z = I ? j?.discardConfig : void 0, De = z?.label ?? g.actionBar.discard, Oe = z?.icon === null ? void 0 : z?.icon ?? t, ke = I ? j?.actionBarLabel ?? g.actionBar.unsavedChanges : g.actionBar.unsavedChanges, Ae = j?.savingMessage ?? g.actionBar.saving, je = j?.successMessageDuration, B = re(O, k), Me = S(() => B.filter((e) => e.type === "section").map((e) => e.id), [B]), Ne = S(() => {
		let e = /* @__PURE__ */ new Set(), t = (t) => {
			t.autoSave && e.add(t.id);
		};
		for (let e of B) if (e.type === "field") t(e.field);
		else if (e.type === "row") e.fields.forEach(t);
		else if (e.type === "section") for (let n of e.section.fields) n.type === "field" ? t(n.field) : n.type === "row" && n.fields.forEach(t);
		return e;
	}, [B]), Pe = Ne.size > 0, Fe = C(Ne);
	Fe.current = Ne;
	let [Ie, Le] = w(Me[0]), Re = C(null), ze = b((e) => {
		Le(e);
		let t = Re.current, n = d(D, e), r = document.getElementById(n);
		r && t && t.scrollTo({
			top: r.offsetTop - t.offsetTop,
			behavior: "smooth"
		});
	}, [D]), Be = S(() => h(p), [p]), Ve = ue[pe], He = S(() => l(O, { errorMap: Be }), [O, Be]), V = oe({
		resolver: He,
		mode: Ve,
		defaultValues: A
	}), Ue = C(P);
	x(() => {
		Ue.current && !P && A && V.reset(A), Ue.current = P;
	}, [
		P,
		A,
		V
	]);
	let We = S(() => B.some((e) => e.type === "section" && !!e.section.renderIf), [B]), Ge = F && We ? V.watch() : void 0, Ke = Ge ? B.filter((e) => e.type === "section").filter((e) => !e.section.renderIf || c(e.section.renderIf, Ge)).map((e) => e.id) : Me, qe = Ie && Ke.includes(Ie) ? Ie : Ke[0], Je = k && F ? Ke.map((e) => ({
		id: e,
		label: k[e]?.title ?? e,
		onClick: () => ze(e)
	})) : [], Ye = V.formState.errors.root, { isDirty: Xe, isSubmitting: H, errors: Ze } = V.formState, [Qe, $e] = w(() => /* @__PURE__ */ new Set()), et = b((e, t) => {
		$e((n) => {
			if (t === n.has(e)) return n;
			let r = new Set(n);
			return t ? r.add(e) : r.delete(e), r;
		});
	}, []), U = Qe.size > 0, tt = C(U);
	tt.current = U;
	let [nt, W] = w("idle"), [rt, it] = w(), G = C(null), K = C(null), at = C(null), q = C(!0), ot = C(null), J = C(null), { hasErrors: Y, errorCount: st, goToPreviousError: ct, goToNextError: lt, resetErrorNavigation: X } = y({
		formName: D,
		errors: Ze
	}), ut = nt === "loading" ? Ae : nt === "success" ? rt ?? g.actionBar.saved : ke, Z = async (e) => {
		if (tt.current) return;
		G.current &&= (clearTimeout(G.current), null), ae(() => {
			W("loading");
		});
		let t = { ...e };
		for (let e of Object.keys(t)) t[e] === null && (t[e] = void 0);
		let n = await de(t);
		q.current && (n.success ? (V.reset(V.getValues()), X(), it(n.message), W("success"), G.current = setTimeout(() => {
			q.current && (W("idle"), it(void 0), G.current = null);
		}, je ?? 2e3)) : (W("idle"), n.errors && Object.entries(n.errors).forEach(([e, t]) => {
			V.setError(e, { message: t });
		}), n.rootMessage && V.setError("root", { message: n.rootMessage })));
	};
	x(() => () => {
		q.current = !1, G.current &&= (clearTimeout(G.current), null), K.current &&= (clearTimeout(K.current), null);
	}, []);
	let dt = C(Z);
	dt.current = Z;
	let ft = b(() => {
		let e = document.activeElement;
		if (!(e instanceof HTMLElement) || !J.current?.contains(e)) return;
		let t = e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement, n = t ? e.selectionStart : null, r = t ? e.selectionEnd : null;
		ot.current = {
			element: e,
			selectionStart: n,
			selectionEnd: r
		};
	}, []), pt = C(V.formState.isSubmitting);
	x(() => {
		let e = pt.current;
		if (pt.current = H, !e || H) return;
		let t = ot.current;
		if (ot.current = null, t) {
			if (!t.element.isConnected) {
				R && J.current && (J.current.setAttribute("tabindex", "-1"), J.current.focus());
				return;
			}
			if (document.activeElement !== t.element && (t.element.focus(), t.selectionStart !== null && t.selectionEnd !== null && (t.element instanceof HTMLInputElement || t.element instanceof HTMLTextAreaElement))) try {
				t.element.setSelectionRange(t.selectionStart, t.selectionEnd);
			} catch {}
		}
	}, [H, R]);
	let mt = j?.type === "autosubmit" ? j.delay ?? se : se;
	x(() => {
		if (!L && !Pe) return;
		let e = V.watch((e, { name: t }) => {
			if (!V.formState.isSubmitting) {
				if (!L) {
					let e = t?.split(".")[0];
					if (!e || !Fe.current.has(e)) return;
				}
				K.current && clearTimeout(K.current), K.current = setTimeout(() => {
					K.current = null, q.current && V.formState.isDirty && (ft(), V.handleSubmit((e) => dt.current(e))());
				}, mt);
			}
		});
		return () => {
			e.unsubscribe(), K.current &&= (clearTimeout(K.current), null);
		};
	}, [
		L,
		Pe,
		mt,
		V,
		ft
	]);
	let ht = () => {
		V.reset(), X(), W("idle"), it(void 0), G.current &&= (clearTimeout(G.current), null);
	}, gt = C(null), _t = C(Z);
	_t.current = Z;
	let Q = b((e) => ({
		submit: () => new Promise((e, t) => {
			V.handleSubmit(async (t) => {
				await _t.current(t), e();
			}, () => t(/* @__PURE__ */ Error("Form validation failed")))();
		}),
		reset: () => {
			V.reset(), X();
		},
		isDirty: () => V.formState.isDirty,
		getValues: () => V.getValues(),
		setValue: (e, t, n) => {
			V.setValue(e, t, {
				shouldValidate: n?.shouldValidate ?? !0,
				shouldDirty: n?.shouldDirty ?? !0
			});
		},
		setValues: (e, t) => {
			for (let [n, r] of Object.entries(e)) V.setValue(n, r, {
				shouldValidate: !1,
				shouldDirty: t?.shouldDirty ?? !0
			});
			t?.shouldValidate !== !1 && V.trigger();
		},
		trigger: async (e) => e ? V.trigger(e) : V.trigger(),
		getErrors: () => le(V.formState.errors),
		getFieldNames: () => Object.keys(V.getValues()),
		actionBar: { wiggle: (e) => {
			let t = Object.keys(V.formState.errors).length > 0;
			at.current?.wiggle(e?.errorHighlight && !t ? {
				...e,
				errorHighlight: !1
			} : e);
		} },
		_setStateCallback: e?.stateCallback ? (e) => {
			gt.current = e;
		} : () => {}
	}), [V, X]), $ = v(), vt = C(null), yt = N ?? vt;
	x(() => {
		if ($) return N || (vt.current = Q()), $.register(D, yt, O, k, me, he, ge, _e), () => {
			$.unregister(D);
		};
	}, [
		$,
		D,
		ge,
		_e,
		O,
		k,
		N,
		yt,
		Q,
		me
	]), x(() => (N && (N.current = Q({ stateCallback: !0 })), () => {
		N && (N.current = null);
	}), [N, Q]), x(() => {
		gt.current && gt.current({
			isSubmitting: H,
			hasErrors: Y
		});
	}, [H, Y]);
	let bt = ne(B), xt = S(() => ({
		formName: D,
		initialFiles: a.initialFiles,
		isLoadingInitialFiles: a.isLoadingInitialFiles,
		renderCustomField: a.renderCustomField,
		isLoading: P,
		useUpload: ve,
		registerUploadState: et,
		submitConfig: j
	}), [
		D,
		a.initialFiles,
		a.isLoadingInitialFiles,
		a.renderCustomField,
		P,
		ve,
		et,
		j
	]), St = V.handleSubmit(Z), Ct = /* @__PURE__ */ E("form", {
		ref: J,
		onSubmit: (e) => {
			let t = document.activeElement;
			(!(t instanceof HTMLElement && (t.tagName === "BUTTON" || t.tagName === "INPUT" && t.type === "submit")) || R) && ft(), St(e);
		},
		className: e("flex flex-col w-full mx-auto max-w-content", fe, F && "[&>div:last-child]:pb-6"),
		children: [
			bt.map((t, n) => {
				let r = n !== 0 && t.type !== "section" ? "mt-4" : "";
				switch (t.type) {
					case "switchGroup": return /* @__PURE__ */ T("div", {
						className: r,
						children: /* @__PURE__ */ T(ie, {
							fields: t.fields,
							dependentFields: t.dependentFields,
							cardSelectDependentFields: t.cardSelectDependentFields
						})
					}, `switch-group-${n}`);
					case "field": {
						let n = t.cardSelectDependentFields ? /* @__PURE__ */ T(f.Provider, {
							value: te(t.cardSelectDependentFields),
							children: /* @__PURE__ */ T(m, { field: t.item.field })
						}) : /* @__PURE__ */ T(m, { field: t.item.field });
						return /* @__PURE__ */ T("div", {
							className: e(r, "has-[>span.hidden]:hidden"),
							children: n
						}, t.item.field.id);
					}
					case "row": return /* @__PURE__ */ T("div", {
						className: r,
						children: /* @__PURE__ */ T(ee, { row: t.item })
					}, `row-${t.index}`);
					case "section": return /* @__PURE__ */ T("div", {
						className: e(n !== 0 && "mt-6"),
						children: /* @__PURE__ */ T(_, { section: t.item })
					}, t.item.id);
					default: return null;
				}
			}),
			Ye && /* @__PURE__ */ T("p", {
				className: "mt-4 text-base font-medium text-f1-foreground-critical",
				children: Ye.message
			}),
			!I && Te && (!R || Xe) && /* @__PURE__ */ T("div", {
				className: "mt-4 flex justify-end",
				children: /* @__PURE__ */ T(r, {
					type: "submit",
					label: xe,
					icon: Se,
					loading: H,
					disabled: Y || P || U
				})
			})
		]
	});
	return /* @__PURE__ */ T(u.Provider, {
		value: xt,
		children: /* @__PURE__ */ E(o, {
			...V,
			children: [F && Je.length > 0 ? /* @__PURE__ */ E("div", {
				ref: Re,
				className: "flex w-full overflow-scroll",
				children: [
					/* @__PURE__ */ T("div", {
						className: "sticky top-0 h-fit shrink-0 self-start pt-2",
						children: /* @__PURE__ */ T(i, {
							items: Je,
							activeItem: qe,
							scrollable: !1
						})
					}),
					/* @__PURE__ */ T("div", { className: "sticky bottom-0 top-0 mr-4 w-px bg-f1-border-secondary" }),
					/* @__PURE__ */ T("div", {
						className: "flex w-full justify-center px-4 py-2",
						children: Ct
					})
				]
			}) : /* @__PURE__ */ T("div", {
				className: e("flex justify-center", !be && "p-4"),
				children: Ct
			}), !we && /* @__PURE__ */ T(s, {
				ref: at,
				isActionBar: I,
				isDirty: Xe,
				actionBarStatus: nt,
				hasErrors: Y,
				hasPendingUploads: U,
				errorCount: st,
				resolvedActionBarLabel: ut,
				submitLabel: xe,
				submitIcon: Se,
				discardableChanges: Ee,
				discardLabel: De,
				discardIcon: Oe,
				issuesOneLabel: g.actionBar.issues.one,
				issuesOtherLabel: g.actionBar.issues.other,
				onSubmit: () => St(),
				onDiscard: ht,
				goToPreviousError: ct,
				goToNextError: lt
			})]
		})
	});
}
//#endregion
export { de as F0Form };
