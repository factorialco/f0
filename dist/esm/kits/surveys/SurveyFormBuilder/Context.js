import { getDefaultParamsForQuestionType as e, getDefaultQuestionTypeToAdd as t, getNewElementId as n } from "./lib.js";
import { createContext as r, useCallback as i, useContext as a, useEffect as o, useMemo as s, useRef as c } from "react";
import { jsx as l } from "react/jsx-runtime";
import u from "lodash/flatten";
//#region src/kits/surveys/SurveyFormBuilder/Context.tsx
var d = r(void 0);
function f({ elements: r, children: a, disabled: f, answering: p, disallowOptionalQuestions: m, onChange: h, allowedQuestionTypes: g, errors: _, onFieldBlur: v, useUpload: y, datasets: b, placeholders: x, labels: S, skipDefaultSection: C }) {
	let w = c(r);
	w.current = r;
	let T = c(h);
	T.current = h;
	let E = s(() => {
		let e = r[r.length - 1];
		if (e) return e.type === "section" ? e.section.id : e.question.id;
	}, [r]), D = i((e) => {
		let t = e.id, n = w.current.map((n) => {
			if (n.type === "question") return n.question.id === t ? {
				...n,
				question: {
					...n.question,
					...e
				}
			} : n;
			if (n.type === "section") {
				let r = n.section.questions?.map((n) => n.id === t ? {
					...n,
					...e
				} : n);
				return {
					...n,
					section: {
						...n.section,
						questions: r
					}
				};
			}
			return n;
		});
		T.current(n);
	}, []), O = i((e) => {
		let t = e.id, n = w.current.map((n) => n.type === "section" && n.section.id === t ? {
			...n,
			section: {
				...n.section,
				...e
			}
		} : n);
		T.current(n);
	}, []), k = i(({ element: e, afterId: t }) => {
		let n = [...w.current];
		if (!t) {
			n.push(e), T.current(n);
			return;
		}
		((t) => {
			n.forEach((r, i) => {
				r.type === "section" && r.section.id === t && n.splice(i + 1, 0, e), r.type === "question" && r.question.id === t && n.splice(i + 1, 0, e);
			});
		})(t), e.type === "question" && n.length === w.current.length && n.forEach((r, i) => {
			if (r.type !== "section") return;
			let a = [...r.section.questions ?? []];
			a?.forEach((n, r) => {
				n.id === t && a.splice(r + 1, 0, e.question);
			}), n.splice(i, 1, {
				...r,
				section: {
					...r.section,
					questions: a
				}
			});
		}), T.current(n);
	}, []), A = i(({ type: r, afterId: i, datasetKey: a }) => {
		if ((r === "dropdown-single" || r === "dropdown-multi") && !a) throw Error(`${r} questions require a datasetKey`);
		let o = n(r === "section" ? "section" : "question"), s = t(g), c = r === "section" ? {
			type: "section",
			section: {
				id: o,
				title: "",
				questions: [{
					id: n("question"),
					title: "",
					description: "",
					type: s,
					required: !0,
					...e(s)
				}]
			}
		} : {
			type: "question",
			question: {
				id: o,
				title: "",
				description: "",
				type: r,
				required: !0,
				...e(r),
				...a ? { datasetKey: a } : {}
			}
		};
		k({
			element: c,
			afterId: i
		});
	}, [k, g]), j = i(({ elementId: e }) => {
		let t = u(w.current.map((e) => e.type === "section" ? [e, ...e.section.questions ?? []] : [e.question])).find((t) => t.type === "section" ? t.section.id === e : t.id === e), r;
		t && (r = t.type === "section" ? {
			...t,
			section: {
				...t.section,
				id: n("section")
			}
		} : {
			type: "question",
			question: {
				...t,
				id: n("question")
			}
		}), r && k({
			element: r,
			afterId: e
		});
	}, [k]), M = i((e) => u(w.current.map((e) => e.type === "question" ? [e.question] : e.section.questions)).find((t) => t?.id === e), []), N = i((e) => {
		let t = w.current.filter((t) => t.type === "section" ? t.section.id !== e : t.type !== "question" || t.question.id !== e);
		t.length === w.current.length && (t = t.map((t) => t.type === "section" ? {
			...t,
			section: {
				...t.section,
				questions: t.section.questions?.filter((t) => t.id !== e)
			}
		} : t)), T.current(t);
	}, []), P = i((e) => {
		let t = w.current.find((t) => t.type === "section" && t.section.questions?.some((t) => t.id === e));
		return t?.type === "section" && t?.section.questions?.length === 1;
	}, []), F = i((e) => {
		let t = w.current.find((t) => t.type === "section" && t.section.questions?.some((t) => t.id === e));
		return t?.type === "section" ? t.section : void 0;
	}, []), I = c(!0), L = !r.length;
	o(() => {
		if (I.current) {
			I.current = !1, L && !f && !p && !C && A({ type: "section" });
			return;
		}
	}, [
		L,
		A,
		f,
		p,
		C
	]);
	let R = i((e) => e === "file" && !y ? !1 : !g || g.includes(e), [g, y]), z = s(() => ({
		onQuestionChange: D,
		onSectionChange: O,
		onAddNewElement: A,
		onDuplicateElement: j,
		getIsSingleQuestionInSection: P,
		getSectionContainingQuestion: F,
		disabled: f,
		answering: p,
		getQuestionById: M,
		deleteElement: N,
		lastElementId: E,
		disallowOptionalQuestions: m,
		isQuestionTypeAllowed: R,
		errors: _,
		onFieldBlur: v,
		useUpload: y,
		datasets: b,
		placeholders: x,
		labels: S
	}), [
		D,
		O,
		A,
		j,
		P,
		F,
		f,
		p,
		M,
		N,
		E,
		m,
		R,
		_,
		v,
		y,
		b,
		x,
		S
	]);
	return /* @__PURE__ */ l(d.Provider, {
		value: z,
		children: a
	});
}
function p() {
	let e = a(d);
	if (!e) throw Error("useSurveyFormBuilderContext must be used within a SurveyFormBuilderProvider");
	return e;
}
//#endregion
export { f as SurveyFormBuilderProvider, p as useSurveyFormBuilderContext };
