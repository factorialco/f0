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
import { FieldRenderer as p } from "./fields/FieldRenderer.js";
import { RowRenderer as ee } from "./components/RowRenderer.js";
import { buildCardSelectContentMap as te, groupContiguousSwitches as ne } from "./groupingUtils.js";
import { useSchemaDefinition as re } from "./useSchemaDefinition.js";
import { createZodErrorMap as ie } from "./zodErrorMap.js";
import { SwitchGroupRenderer as m } from "./components/SwitchGroupRenderer.js";
import { F0FormSection as h } from "./components/F0FormSection.js";
import { SectionRenderer as ae } from "./components/SectionRenderer.js";
import { useF0AiFormRegistry as g } from "./F0AiFormRegistry.js";
import { useErrorNavigation as _ } from "./useErrorNavigation.js";
import { useCallback as v, useEffect as y, useMemo as b, useRef as x, useState as S } from "react";
import { flushSync as oe } from "react-dom";
import { jsx as C, jsxs as w } from "react/jsx-runtime";
import { useMediaQuery as T } from "usehooks-ts";
import { useForm as se } from "react-hook-form";
//#region src/patterns/F0Form/F0Form.tsx
var ce = 800, le = () => T("(max-width: 560px)", { initializeWithValue: !1 });
function ue(e) {
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
function E(e) {
	if (typeof e != "object" || !e) return !1;
	let t = e._def;
	return t?.typeName === "ZodObject" || t?.typeName === "ZodEffects";
}
var de = {
	"on-blur": "onBlur",
	"on-change": "onChange",
	"on-submit": "onSubmit"
};
function D(t) {
	let { name: n, schema: r, sections: a, defaultValues: o, onSubmit: s, submitConfig: c, className: l, errorTriggerMode: u = "on-submit", styling: f, initialFiles: p, isLoadingInitialFiles: ee, renderCustomField: te, isLoading: ne, useUpload: re } = t, ie = le(), m = (f?.showSectionsSidepanel ?? !1) && !ie, ae = f?.noPadding ?? !1, g = b(() => Object.keys(r), [r]), _ = m && (f?.showOnlySelectedSection ?? !1) && !!a && g.length > 0, y = v((e) => {
		if (_) return;
		let t = d(n, e), r = document.getElementById(t);
		r && r.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	}, [n, _]), [x, oe] = S(g[0]), T = b(() => !a || !m ? [] : g.map((e) => ({
		id: e,
		label: a[e]?.title ?? e,
		onClick: () => {
			oe(e), y(e);
		}
	})), [
		a,
		g,
		m,
		y
	]), se = /* @__PURE__ */ C("div", {
		className: e("flex w-full flex-col max-w-content", l),
		children: g.map((t, i) => {
			let l = r[t], f = a?.[t], ie = o?.[t], m = f?.submitConfig ?? c;
			return /* @__PURE__ */ C("div", {
				id: d(n, t),
				className: e("scroll-mt-4", i !== 0 && !_ && "mt-6", _ && t !== x && "hidden"),
				children: /* @__PURE__ */ C(h, {
					formName: n,
					sectionId: t,
					schema: l,
					sectionConfig: f,
					defaultValues: ie,
					onSubmit: (e) => s(t, e),
					submitConfig: m,
					errorTriggerMode: u,
					initialFiles: p,
					isLoadingInitialFiles: ee,
					renderCustomField: te,
					isLoading: ne,
					useUpload: re
				})
			}, t);
		})
	});
	return m && T.length > 0 ? /* @__PURE__ */ w("div", {
		className: "flex w-full overflow-scroll",
		children: [
			/* @__PURE__ */ C("div", {
				className: "sticky top-0 mr-4 h-fit shrink-0 self-start pt-2",
				children: /* @__PURE__ */ C(i, {
					items: T,
					activeItem: x,
					scrollable: !1
				})
			}),
			/* @__PURE__ */ C("div", { className: "sticky bottom-0 top-0 w-px bg-f1-border-secondary" }),
			/* @__PURE__ */ C("div", {
				className: "flex w-full justify-center px-4 py-2",
				children: se
			})
		]
	}) : /* @__PURE__ */ C("div", {
		className: e("flex justify-center", !ae && "p-4"),
		children: se
	});
}
function O(e) {
	return "formDefinition" in e && e.formDefinition != null;
}
function k(e) {
	let t = e;
	if (O(t)) return /* @__PURE__ */ C(fe, { ...t });
	let n = t;
	return E(n.schema) ? /* @__PURE__ */ C(me, { ...n }) : /* @__PURE__ */ C(D, { ...n });
}
function fe(e) {
	let { formDefinition: t, className: n, styling: r, formRef: i, initialFiles: a, renderCustomField: o } = e, s = "useUpload" in e ? e.useUpload : void 0;
	return t.isLoading ? t._brand === "single" ? /* @__PURE__ */ C(A, {
		formDefinition: t,
		className: n,
		styling: r,
		formRef: i,
		initialFiles: a,
		renderCustomField: o,
		useUpload: s,
		isLoading: !0
	}) : /* @__PURE__ */ C(pe, {
		formDefinition: t,
		className: n,
		styling: r,
		formRef: i,
		initialFiles: a,
		renderCustomField: o,
		useUpload: s,
		isLoading: !0
	}) : t._brand === "single" ? /* @__PURE__ */ C(A, {
		formDefinition: t,
		className: n,
		styling: r,
		formRef: i,
		initialFiles: a,
		renderCustomField: o,
		useUpload: s
	}) : /* @__PURE__ */ C(pe, {
		formDefinition: t,
		className: n,
		styling: r,
		formRef: i,
		initialFiles: a,
		renderCustomField: o,
		useUpload: s
	});
}
function A({ formDefinition: e, className: t, styling: n, formRef: r, initialFiles: i, renderCustomField: o, useUpload: s, isLoading: c }) {
	let l = e, { resolved: u, isLoading: d } = a(l.asyncDefaultValues ?? l.defaultValuesFn ?? l.defaultValues, l.defaultValuesParamsSchema), f = v((e) => l.onSubmit({ data: e }), [l]);
	return /* @__PURE__ */ C(me, {
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
	let l = e, { resolved: u, isLoading: d } = a(l.asyncDefaultValues ?? l.defaultValuesFn ?? l.defaultValues, l.defaultValuesParamsSchema), f = x(u ? { ...u } : {}), p = v((e, t) => (f.current[e] = t, l.onSubmit({
		sectionId: e,
		data: t,
		fullData: { ...f.current }
	})), [l]);
	return /* @__PURE__ */ C(D, {
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
function me(a) {
	let h = n(), { forms: T } = h, { name: E, schema: D, sections: O, defaultValues: k, onSubmit: fe, submitConfig: A, className: pe, errorTriggerMode: me = "on-submit", styling: he, formRef: j, isLoading: M, defaultValuesParamsSchema: ge, defaultValuesFn: _e, description: ve, module: ye } = a, { useUpload: be } = a, xe = le(), N = (he?.showSectionsSidepanel ?? !1) && !xe, Se = he?.noPadding ?? !1, P = A?.type === "action-bar", F = A?.type === "autosubmit", Ce = A?.label ?? "Submit", we = A?.icon ?? void 0, Te = (A?.type === "default" || A?.type === void 0) && !!A?.hideSubmitButton, I = (A?.type === "default" || A?.type === void 0) && !!A?.showSubmitWhenDirty, Ee = A?.type !== "action-bar" && !!A?.hideActionBar, De = !P && !F && !Te, Oe = A?.type === "action-bar" && A?.discardable, L = P ? A?.discardConfig : void 0, ke = L?.label ?? T.actionBar.discard, Ae = L?.icon === null ? void 0 : L?.icon ?? t, je = P ? A?.actionBarLabel ?? T.actionBar.unsavedChanges : T.actionBar.unsavedChanges, Me = A?.savingMessage ?? T.actionBar.saving, Ne = A?.successMessageDuration, R = re(D, O), Pe = b(() => R.filter((e) => e.type === "section").map((e) => e.id), [R]), z = b(() => {
		let e = /* @__PURE__ */ new Set(), t = (t) => {
			t.autoSave && e.add(t.id);
		};
		for (let e of R) if (e.type === "field") t(e.field);
		else if (e.type === "row") e.fields.forEach(t);
		else if (e.type === "section") for (let n of e.section.fields) n.type === "field" ? t(n.field) : n.type === "row" && n.fields.forEach(t);
		return e;
	}, [R]), Fe = z.size > 0, Ie = x(z);
	Ie.current = z;
	let [B, Le] = S(Pe[0]), Re = x(null), ze = v((e) => {
		Le(e);
		let t = Re.current, n = d(E, e), r = document.getElementById(n);
		r && t && t.scrollTo({
			top: r.offsetTop - t.offsetTop,
			behavior: "smooth"
		});
	}, [E]), Be = b(() => ie(h), [h]), Ve = de[me], He = b(() => l(D, { errorMap: Be }), [D, Be]), V = se({
		resolver: He,
		mode: Ve,
		defaultValues: k
	}), Ue = x(M);
	y(() => {
		Ue.current && !M && k && V.reset(k), Ue.current = M;
	}, [
		M,
		k,
		V
	]);
	let We = b(() => R.some((e) => e.type === "section" && !!e.section.renderIf), [R]), Ge = N && We ? V.watch() : void 0, Ke = Ge ? R.filter((e) => e.type === "section").filter((e) => !e.section.renderIf || c(e.section.renderIf, Ge)).map((e) => e.id) : Pe, qe = B && Ke.includes(B) ? B : Ke[0], Je = O && N ? Ke.map((e) => ({
		id: e,
		label: O[e]?.title ?? e,
		onClick: () => ze(e)
	})) : [], Ye = V.formState.errors.root, { isDirty: Xe, isSubmitting: H, errors: Ze } = V.formState, [Qe, $e] = S(() => /* @__PURE__ */ new Set()), et = v((e, t) => {
		$e((n) => {
			if (t === n.has(e)) return n;
			let r = new Set(n);
			return t ? r.add(e) : r.delete(e), r;
		});
	}, []), U = Qe.size > 0, tt = x(U);
	tt.current = U;
	let [nt, W] = S("idle"), [rt, it] = S(), G = x(null), K = x(null), at = x(null), q = x(!0), ot = x(null), J = x(null), { hasErrors: Y, errorCount: st, goToPreviousError: ct, goToNextError: lt, resetErrorNavigation: X } = _({
		formName: E,
		errors: Ze
	}), ut = nt === "loading" ? Me : nt === "success" ? rt ?? T.actionBar.saved : je, Z = async (e) => {
		if (tt.current) return;
		G.current &&= (clearTimeout(G.current), null), oe(() => {
			W("loading");
		});
		let t = { ...e };
		for (let e of Object.keys(t)) t[e] === null && (t[e] = void 0);
		let n = await fe(t);
		q.current && (n.success ? (V.reset(V.getValues()), X(), it(n.message), W("success"), G.current = setTimeout(() => {
			q.current && (W("idle"), it(void 0), G.current = null);
		}, Ne ?? 2e3)) : (W("idle"), n.errors && Object.entries(n.errors).forEach(([e, t]) => {
			V.setError(e, { message: t });
		}), n.rootMessage && V.setError("root", { message: n.rootMessage })));
	};
	y(() => () => {
		q.current = !1, G.current &&= (clearTimeout(G.current), null), K.current &&= (clearTimeout(K.current), null);
	}, []);
	let dt = x(Z);
	dt.current = Z;
	let ft = v(() => {
		let e = document.activeElement;
		if (!(e instanceof HTMLElement) || !J.current?.contains(e)) return;
		let t = e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement, n = t ? e.selectionStart : null, r = t ? e.selectionEnd : null;
		ot.current = {
			element: e,
			selectionStart: n,
			selectionEnd: r
		};
	}, []), pt = x(V.formState.isSubmitting);
	y(() => {
		let e = pt.current;
		if (pt.current = H, !e || H) return;
		let t = ot.current;
		if (ot.current = null, t) {
			if (!t.element.isConnected) {
				I && J.current && (J.current.setAttribute("tabindex", "-1"), J.current.focus());
				return;
			}
			if (document.activeElement !== t.element && (t.element.focus(), t.selectionStart !== null && t.selectionEnd !== null && (t.element instanceof HTMLInputElement || t.element instanceof HTMLTextAreaElement))) try {
				t.element.setSelectionRange(t.selectionStart, t.selectionEnd);
			} catch {}
		}
	}, [H, I]);
	let mt = A?.type === "autosubmit" ? A.delay ?? ce : ce;
	y(() => {
		if (!F && !Fe) return;
		let e = V.watch((e, { name: t }) => {
			if (!V.formState.isSubmitting) {
				if (!F) {
					let e = t?.split(".")[0];
					if (!e || !Ie.current.has(e)) return;
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
		F,
		Fe,
		mt,
		V,
		ft
	]);
	let ht = () => {
		V.reset(), X(), W("idle"), it(void 0), G.current &&= (clearTimeout(G.current), null);
	}, gt = x(null), _t = x(Z);
	_t.current = Z;
	let Q = v((e) => ({
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
		getErrors: () => ue(V.formState.errors),
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
	}), [V, X]), $ = g(), vt = x(null), yt = j ?? vt;
	y(() => {
		if ($) return j || (vt.current = Q()), $.register(E, yt, D, O, ge, _e, ve, ye), () => {
			$.unregister(E);
		};
	}, [
		$,
		E,
		ve,
		ye,
		D,
		O,
		j,
		yt,
		Q,
		ge
	]), y(() => (j && (j.current = Q({ stateCallback: !0 })), () => {
		j && (j.current = null);
	}), [j, Q]), y(() => {
		gt.current && gt.current({
			isSubmitting: H,
			hasErrors: Y
		});
	}, [H, Y]);
	let bt = ne(R), xt = b(() => ({
		formName: E,
		initialFiles: a.initialFiles,
		isLoadingInitialFiles: a.isLoadingInitialFiles,
		renderCustomField: a.renderCustomField,
		isLoading: M,
		useUpload: be,
		registerUploadState: et,
		submitConfig: A
	}), [
		E,
		a.initialFiles,
		a.isLoadingInitialFiles,
		a.renderCustomField,
		M,
		be,
		et,
		A
	]), St = V.handleSubmit(Z), Ct = /* @__PURE__ */ w("form", {
		ref: J,
		onSubmit: (e) => {
			let t = document.activeElement;
			(!(t instanceof HTMLElement && (t.tagName === "BUTTON" || t.tagName === "INPUT" && t.type === "submit")) || I) && ft(), St(e);
		},
		className: e("flex flex-col w-full mx-auto max-w-content", pe, N && "[&>div:last-child]:pb-6"),
		children: [
			bt.map((t, n) => {
				let r = n !== 0 && t.type !== "section" ? "mt-4" : "";
				switch (t.type) {
					case "switchGroup": return /* @__PURE__ */ C("div", {
						className: r,
						children: /* @__PURE__ */ C(m, {
							fields: t.fields,
							dependentFields: t.dependentFields,
							cardSelectDependentFields: t.cardSelectDependentFields
						})
					}, `switch-group-${n}`);
					case "field": {
						let n = t.cardSelectDependentFields ? /* @__PURE__ */ C(f.Provider, {
							value: te(t.cardSelectDependentFields),
							children: /* @__PURE__ */ C(p, { field: t.item.field })
						}) : /* @__PURE__ */ C(p, { field: t.item.field });
						return /* @__PURE__ */ C("div", {
							className: e(r, "has-[>span.hidden]:hidden"),
							children: n
						}, t.item.field.id);
					}
					case "row": return /* @__PURE__ */ C("div", {
						className: r,
						children: /* @__PURE__ */ C(ee, { row: t.item })
					}, `row-${t.index}`);
					case "section": return /* @__PURE__ */ C("div", {
						className: e(n !== 0 && "mt-6"),
						children: /* @__PURE__ */ C(ae, { section: t.item })
					}, t.item.id);
					default: return null;
				}
			}),
			Ye && /* @__PURE__ */ C("p", {
				className: "mt-4 text-base font-medium text-f1-foreground-critical",
				children: Ye.message
			}),
			!P && De && (!I || Xe) && /* @__PURE__ */ C("div", {
				className: "mt-4 flex justify-end",
				children: /* @__PURE__ */ C(r, {
					type: "submit",
					label: Ce,
					icon: we,
					loading: H,
					disabled: Y || M || U
				})
			})
		]
	});
	return /* @__PURE__ */ C(u.Provider, {
		value: xt,
		children: /* @__PURE__ */ w(o, {
			...V,
			children: [N && Je.length > 0 ? /* @__PURE__ */ w("div", {
				ref: Re,
				className: "flex w-full overflow-scroll",
				children: [
					/* @__PURE__ */ C("div", {
						className: "sticky top-0 h-fit shrink-0 self-start pt-2",
						children: /* @__PURE__ */ C(i, {
							items: Je,
							activeItem: qe,
							scrollable: !1
						})
					}),
					/* @__PURE__ */ C("div", { className: "sticky bottom-0 top-0 mr-4 w-px bg-f1-border-secondary" }),
					/* @__PURE__ */ C("div", {
						className: "flex w-full justify-center px-4 py-2",
						children: Ct
					})
				]
			}) : /* @__PURE__ */ C("div", {
				className: e("flex justify-center", !Se && "p-4"),
				children: Ct
			}), !Ee && /* @__PURE__ */ C(s, {
				ref: at,
				isActionBar: P,
				isDirty: Xe,
				actionBarStatus: nt,
				hasErrors: Y,
				hasPendingUploads: U,
				errorCount: st,
				resolvedActionBarLabel: ut,
				submitLabel: Ce,
				submitIcon: we,
				discardableChanges: Oe,
				discardLabel: ke,
				discardIcon: Ae,
				issuesOneLabel: T.actionBar.issues.one,
				issuesOtherLabel: T.actionBar.issues.other,
				onSubmit: () => St(),
				onDiscard: ht,
				goToPreviousError: ct,
				goToNextError: lt
			})]
		})
	});
}
//#endregion
export { k as F0Form };
