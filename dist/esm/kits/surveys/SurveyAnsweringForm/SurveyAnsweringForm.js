import { cn as e } from "../../../lib/utils.js";
import t from "../../../icons/app/ArrowLeft.js";
import n from "../../../icons/app/ArrowRight.js";
import r from "../../../icons/app/Maximize.js";
import i from "../../../icons/app/Minimize.js";
import { useI18n as a } from "../../../lib/providers/i18n/i18n-provider.js";
import { F0Box as o } from "../../../F0Box.js";
import { ProgressBarCell as s } from "../../../ui/value-display/types/progressBar/progressBar.js";
import { F0Dialog as c } from "../../../F0Dialog.js";
import { useF0Form as l } from "../../../patterns/F0Form/useF0Form.js";
import { OneEmptyState as u } from "../../../components/OneEmptyState/OneEmptyState.js";
import { F0Form as d } from "../../../patterns/F0Form/F0Form.js";
import { SurveyFormBuilderProvider as f } from "../SurveyFormBuilder/Context.js";
import { TableOfContent as p } from "../SurveyFormBuilder/Form/TableOfContent/index.js";
import { F0ResourceHeader as m } from "../../../patterns/F0ResourceHeader/index.js";
import { SurveyAllQuestionsLoadingSkeleton as h, SurveySteppedLoadingSkeleton as ee } from "./components/skeletons/SurveyAnsweringFormLoadingSkeletons.js";
import { useStepper as g } from "./hooks/useStepper.js";
import { extractFlatQuestions as _, useSurveyFormSchema as v } from "./hooks/useSurveyFormSchema.js";
import { useCallback as y, useMemo as b, useRef as x, useState as S } from "react";
import { jsx as C, jsxs as w } from "react/jsx-runtime";
//#region src/kits/surveys/SurveyAnsweringForm/SurveyAnsweringForm.tsx
var T = () => {};
function E(e) {
	return e.inline ? /* @__PURE__ */ C(O, { ...e }) : /* @__PURE__ */ C(D, { ...e });
}
function D({ elements: E, onSubmit: D, mode: O, title: k, description: te, resourceHeader: ne, isOpen: re, onClose: A, position: j = "center", module: ie, allowToChangeFullscreen: ae = !1, defaultValues: M, errorTriggerMode: oe = "on-blur", loading: N = !1, labels: P, preview: F = !1, useUpload: se, datasets: I }) {
	let { t: L } = a(), ce = j === "fullscreen", le = j === "fullscreen" ? "center" : j, [R, ue] = S(ce), { formRef: z, submit: B, isSubmitting: V, hasErrors: de } = l(), H = x({}), U = b(() => _(E), [E]), W = g(U), G = U.length > 0, K = {
		title: P?.empty?.title ?? L("surveyAnsweringForm.labels.empty.title"),
		description: P?.empty?.description ?? L("surveyAnsweringForm.labels.empty.description"),
		emoji: P?.empty?.emoji ?? L("surveyAnsweringForm.labels.empty.emoji")
	}, q = O === "stepped", J = F && !!M && Object.keys(M).length > 0, fe = F && !J, pe = q ? W.currentQuestion?.id : void 0, { schema: me, defaultValues: he, sections: ge } = v(E, O, L, M, pe, q ? H.current : void 0, F, J, se, I), Y = R ? "fullscreen" : le, _e = Y === "center" ? "xl" : void 0, X = x(null), Z = y((e) => {
		X.current && clearTimeout(X.current), X.current = setTimeout(() => {
			X.current = null, A();
		}, e);
	}, [A]), ve = y(async (e) => {
		if (F) return { success: !0 };
		if (!D) throw Error("onSubmit is required when preview is false");
		if (q && !W.isLastStep) return H.current = {
			...H.current,
			...e
		}, W.goToNext(), { success: !0 };
		let t = q ? {
			...H.current,
			...e
		} : e, n = {};
		for (let [e, r] of Object.entries(t)) n[e] = r === void 0 ? null : r;
		if (q) {
			W.setProgress(100);
			let [e] = await Promise.all([D(n), new Promise((e) => setTimeout(e, 1e3))]);
			return e.success ? (Z(e.message ? 1e3 : 0), {
				success: !0,
				message: e.message
			}) : (W.setProgress(null), {
				success: !1,
				errors: e.errors
			});
		}
		let r = await D(n);
		return r.success ? (Z(r.message ? 1e3 : 0), {
			success: !0,
			message: r.message
		}) : {
			success: !1,
			errors: r.errors
		};
	}, [
		D,
		F,
		Z,
		q,
		W.isLastStep,
		W.goToNext,
		W.setProgress
	]), Q = y(async () => {
		try {
			await B();
		} catch {}
	}, [B]), ye = y(() => {
		let e = z.current?.getValues() ?? {};
		H.current = {
			...H.current,
			...e
		}, W.goToPrevious();
	}, [z, W.goToPrevious]), be = ae && !N ? [{
		label: L(R ? "surveyAnsweringForm.actions.collapse" : "surveyAnsweringForm.actions.expand"),
		icon: R ? i : r,
		onClick: () => ue((e) => !e)
	}] : void 0, xe = G ? N || J ? void 0 : fe ? q && !W.isLastStep ? {
		label: L("surveyAnsweringForm.actions.next"),
		onClick: W.goToNext,
		icon: n
	} : {
		label: L("surveyAnsweringForm.actions.submit"),
		onClick: T,
		disabled: !0
	} : q && !W.isLastStep ? {
		label: L("surveyAnsweringForm.actions.next"),
		onClick: Q,
		icon: n
	} : {
		label: L("surveyAnsweringForm.actions.submit"),
		onClick: Q,
		disabled: V || de,
		loading: V
	} : void 0, Se = G ? N || J ? void 0 : q && !W.isFirstStep ? {
		label: L("surveyAnsweringForm.actions.previous"),
		onClick: ye,
		icon: t
	} : void 0 : void 0, Ce = O === "all-questions" && G && !N, we = q && G && !N, Te = q && !!W.currentQuestion?.sectionTitle && !N, $ = Y === "center" || Y === "fullscreen";
	return /* @__PURE__ */ C(c, {
		isOpen: re,
		onClose: A,
		title: k,
		module: ie,
		position: Y,
		width: _e,
		primaryAction: xe,
		secondaryAction: Se,
		otherActions: be,
		disableContentPadding: $,
		children: /* @__PURE__ */ C(f, {
			answering: !0,
			elements: E,
			onChange: T,
			datasets: I,
			children: /* @__PURE__ */ w("div", {
				className: e("relative flex h-full min-h-full flex-col @container", q && !R && "min-h-[600px]"),
				children: [
					Ce && /* @__PURE__ */ C(p, {
						elements: E,
						onChange: T,
						answering: !0
					}),
					we && /* @__PURE__ */ C("div", {
						className: "absolute left-0 right-0 top-0 [&>div>div>div]:h-1 [&>div>div>div]:rounded-none",
						children: /* @__PURE__ */ C(s, {
							label: "Value",
							value: W.progress,
							hideLabel: !0
						})
					}),
					/* @__PURE__ */ w("div", {
						className: e("mx-auto flex w-full flex-1 justify-center flex-col @lg:w-[750px] max-w-full pt-0", $ && "px-4 py-12"),
						children: [
							/* @__PURE__ */ C("div", {
								className: "mb-6",
								children: /* @__PURE__ */ C(m, {
									title: k,
									description: te,
									...ne
								})
							}),
							N ? C(O === "stepped" ? ee : h, {}) : G ? null : /* @__PURE__ */ C(o, {
								display: "flex",
								flexDirection: "column",
								height: "full",
								justifyContent: "center",
								alignItems: "center",
								paddingX: "lg",
								children: /* @__PURE__ */ C(u, {
									emoji: K.emoji,
									title: K.title,
									description: K.description
								})
							}),
							Te && /* @__PURE__ */ w("div", {
								className: "py-1 pl-5",
								children: [/* @__PURE__ */ C("span", {
									className: "text-lg font-semibold text-f1-foreground",
									children: W.currentQuestion?.sectionTitle
								}), W.currentQuestion?.sectionDescription && /* @__PURE__ */ C("p", {
									className: "text-f1-foreground-secondary",
									children: W.currentQuestion?.sectionDescription
								})]
							}),
							G && !N && /* @__PURE__ */ C(d, {
								formRef: z,
								name: "survey-answering",
								schema: me,
								defaultValues: he,
								onSubmit: ve,
								submitConfig: { hideSubmitButton: !0 },
								errorTriggerMode: oe,
								sections: ge
							}, q ? W.currentStep : void 0)
						]
					})
				]
			})
		})
	});
}
function O({ elements: e, title: t, description: n, resourceHeader: r, defaultValues: i, loading: s = !1, labels: c, useUpload: l, datasets: p, hideResourceHeader: ee = !1 }) {
	let { t: g } = a(), y = b(() => _(e), [e]).length > 0, x = {
		title: c?.empty?.title ?? g("surveyAnsweringForm.labels.empty.title"),
		description: c?.empty?.description ?? g("surveyAnsweringForm.labels.empty.description"),
		emoji: c?.empty?.emoji ?? g("surveyAnsweringForm.labels.empty.emoji")
	}, { schema: S, defaultValues: E, sections: D } = v(e, "all-questions", g, i, void 0, void 0, !0, !0, l, p);
	return /* @__PURE__ */ C(f, {
		answering: !0,
		elements: e,
		onChange: T,
		datasets: p,
		children: /* @__PURE__ */ w("div", {
			className: "mx-auto flex w-full max-w-3xl flex-col",
			children: [!ee && /* @__PURE__ */ C("div", {
				className: "mb-6",
				children: /* @__PURE__ */ C(m, {
					title: t,
					description: n,
					...r
				})
			}), s ? /* @__PURE__ */ C(h, {}) : y ? /* @__PURE__ */ C(d, {
				name: "survey-answering-inline",
				schema: S,
				defaultValues: E,
				onSubmit: async () => ({ success: !0 }),
				submitConfig: {
					hideSubmitButton: !0,
					hideActionBar: !0
				},
				sections: D
			}) : /* @__PURE__ */ C(o, {
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				paddingX: "lg",
				children: /* @__PURE__ */ C(u, {
					emoji: x.emoji,
					title: x.title,
					description: x.description
				})
			})]
		})
	});
}
//#endregion
export { E as SurveyAnsweringForm };
