import { withDataTestId as e } from "../../../../lib/data-testid/index.js";
import { cn as t } from "../../../../lib/utils.js";
import n from "../ApplyingChangesTag/index.js";
import { SurveyFormBuilderProvider as r } from "../Context.js";
import { DragProvider as i, useDragContext as a } from "../DragContext.js";
import { AddButton as o } from "./AddButton/index.js";
import { LastQuestionDialog as s } from "./LastQuestionDialog.js";
import { QuestionItem as c } from "./QuestionItem.js";
import { SectionHeaderItem as l } from "./SectionHeaderItem.js";
import { TableOfContent as u } from "./TableOfContent/index.js";
import { computeSectionEndIds as d, flattenElements as f, injectSectionEnds as p, reconstructElements as m } from "./utils.js";
import { useReorderHandler as h } from "./useReorderHandler.js";
import { useEffect as g, useMemo as _ } from "react";
import { jsx as v, jsxs as y } from "react/jsx-runtime";
import { Reorder as b, motion as x } from "motion/react";
//#region src/kits/surveys/SurveyFormBuilder/Form/index.tsx
function S({ children: e }) {
	let { isDragging: n } = a();
	return /* @__PURE__ */ v("div", {
		className: t("relative @container", n && "select-none"),
		children: e
	});
}
var C = e(({ elements: e, disabled: a, onChange: p, disallowOptionalQuestions: m, allowedQuestionTypes: C, applyingChanges: w, useUpload: T, datasets: E, placeholders: D, labels: O, skipDefaultSection: k }) => {
	let A = !a, j = _(() => e.map((e) => e.type === "question" ? {
		...e,
		question: {
			...e.question,
			required: m ? !0 : e.question.required
		}
	} : e.type === "section" ? {
		...e,
		section: {
			...e.section,
			questions: e.section.questions?.map((e) => ({
				...e,
				required: m ? !0 : e.required
			}))
		}
	} : e), [e, m]), M = _(() => f(j), [j]), N = _(() => M.filter((e) => e.type !== "section-end"), [M]), P = _(() => d(j), [j]), F = _(() => {
		let e = /* @__PURE__ */ new Set();
		for (let t of j) if (t.type === "section") for (let n of t.section.questions ?? []) e.add(`question-${n.id}`);
		return e;
	}, [j]), I = _(() => {
		let e = /* @__PURE__ */ new Set();
		for (let t of j) t.type === "section" && t.section.locked && e.add(t.section.id);
		return e;
	}, [j]), { handleFlatReorder: L, handleConfirmLastQuestionMove: R, handleCancelLastQuestionMove: z, lastQuestionDialogOpen: B } = h({
		flatItems: M,
		onChange: p
	});
	g(() => {
		if (w) {
			let e = document.activeElement;
			e && e.getAttribute("name") !== "one-ai-input" && e.blur();
		}
	}, [w]);
	let V = !!j.length;
	return /* @__PURE__ */ y(r, {
		disabled: a,
		elements: j,
		onChange: p,
		disallowOptionalQuestions: m,
		allowedQuestionTypes: C,
		useUpload: T,
		datasets: E,
		placeholders: D,
		labels: O,
		skipDefaultSection: k,
		children: [/* @__PURE__ */ v(i, { children: /* @__PURE__ */ y(S, { children: [V && /* @__PURE__ */ v(u, {
			elements: j,
			onChange: p
		}), /* @__PURE__ */ y("div", {
			className: "relative flex flex-1 flex-col",
			children: [/* @__PURE__ */ y(x.div, {
				className: t("flex w-full max-w-[750px] self-center flex-col gap-6", w && "pointer-events-none"),
				initial: { filter: "blur(0px)" },
				animate: { filter: w ? "blur(2px)" : "none" },
				exit: { filter: "blur(0px)" },
				children: [/* @__PURE__ */ v(b.Group, {
					axis: "y",
					values: N,
					onReorder: L,
					as: "div",
					children: /* @__PURE__ */ v("div", {
						className: "flex flex-col",
						children: (() => {
							let e = [];
							for (let n = 0; n < N.length; n++) {
								let r = N[n];
								if (r.type === "section-header" && I.has(r.section.id)) {
									let i = [r], a = n + 1;
									for (; a < N.length && N[a].type === "question" && F.has(N[a].id);) i.push(N[a]), a++;
									e.push(/* @__PURE__ */ v("div", {
										className: t("rounded-2xl bg-f1-background-secondary pb-8 pt-4", n === 0 ? "" : "mt-8"),
										children: i.map((e, t) => e.type === "section-header" ? /* @__PURE__ */ v(l, {
											item: e,
											className: ""
										}, e.id) : e.type === "question" ? /* @__PURE__ */ v(c, {
											item: e,
											showEndOfSection: !1,
											className: t === 1 ? "mt-2" : "mt-4"
										}, e.id) : null)
									}, `locked-${r.section.id}`)), n = a - 1;
									continue;
								}
								let i = n === 0 ? "" : F.has(r.id) ? "mt-4" : "mt-8";
								r.type === "section-header" ? e.push(/* @__PURE__ */ v(l, {
									item: r,
									className: i
								}, r.id)) : r.type === "question" && e.push(/* @__PURE__ */ v(c, {
									item: r,
									showEndOfSection: P.has(r.id),
									className: i
								}, r.id));
							}
							return e;
						})()
					})
				}), A && /* @__PURE__ */ v(o, {})]
			}), w && /* @__PURE__ */ v(x.div, {
				className: "sticky bottom-1/2 left-0 z-50 flex w-full items-center justify-center",
				initial: {
					opacity: 0,
					scale: .95
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				exit: {
					opacity: 0,
					scale: .95
				},
				children: /* @__PURE__ */ v(n, {})
			})]
		})] }) }), /* @__PURE__ */ v(s, {
			open: B,
			onConfirm: R,
			onCancel: z
		})]
	});
});
//#endregion
export { C as SurveyFormBuilder, d as computeSectionEndIds, f as flattenElements, p as injectSectionEnds, m as reconstructElements };
