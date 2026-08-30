import e from "../../../../../icons/app/AcademicCap.js";
import t from "../../../../../icons/app/AlertCircleLine.js";
import n from "../../../../../icons/app/Check.js";
import r from "../../../../../icons/app/CheckDouble.js";
import i from "../../../../../icons/app/Delete.js";
import a from "../../../../../icons/app/Hub.js";
import o from "../../../../../icons/app/LayersFront.js";
import { useSurveyFormBuilderContext as s } from "../../Context.js";
import { questionTypeIconMap as c } from "../../constants.js";
import { RATING_OPTIONS as l, useQuestionActionsFactory as u } from "../../QuestionTypes/BaseQuestion/ActionsMenu/useQuestionActions.js";
import { useCallback as d, useMemo as f } from "react";
//#region src/kits/surveys/SurveyFormBuilder/Form/TableOfContent/useTableOfContentItems.ts
var p = (e) => c[e], m = (e) => {
	document.getElementById(e)?.scrollIntoView({
		behavior: "smooth",
		block: "start"
	});
}, h = (c, h) => {
	let { untitledSectionLabel: g, untitledQuestionLabel: _, duplicateQuestionLabel: v, deleteQuestionLabel: y, duplicateSectionLabel: b, deleteSectionLabel: x, questionOptionsLabel: S, requiredLabel: C, questionTypeLabel: w, singleSelectionLabel: T, multiSelectionLabel: E } = h, { deleteElement: D, onDuplicateElement: O, disabled: k, answering: A } = s(), { getActionsForQuestion: j, questionTypes: M } = u(), N = d((e) => {
		m(e);
	}, []), P = d((e, s, c) => {
		let { question: u, currentRatingType: d, currentDatasetKey: f, disallowOptionalQuestions: p, handleChangeRequired: m, handleSelectQuestionType: h, handleSelectRatingType: g, handleDuplicate: _, handleDelete: b } = j(e, s, c), x = [{
			type: "label",
			text: S
		}];
		p || x.push({
			type: "toggle",
			label: C,
			icon: t,
			checked: !!u?.required,
			onCheckedChange: m
		});
		let D = M.filter((e) => !e.datasetKey), O = M.filter((e) => !!e.datasetKey), k = D.map((e) => {
			if (e.questionType === "rating") {
				let t = l.map((e) => ({
					label: e.label,
					onClick: () => g(e.value),
					selected: d === e.value
				}));
				return {
					type: "submenu",
					label: e.label,
					icon: e.icon,
					selectedLabel: d ? l.find((e) => e.value === d)?.label : void 0,
					children: t
				};
			}
			return {
				label: e.label,
				icon: e.icon,
				onClick: () => h(e.questionType),
				selected: s === e.questionType && !f
			};
		}), A = /* @__PURE__ */ new Map();
		for (let e of O) e.datasetKey && !A.has(e.datasetKey) && A.set(e.datasetKey, {
			label: e.label,
			icon: e.icon,
			datasetKey: e.datasetKey
		});
		if (A.size > 0) {
			k.push({ type: "separator" });
			for (let [e, t] of A) k.push({
				type: "submenu",
				label: t.label,
				icon: t.icon,
				selectedLabel: f === e ? s === "dropdown-multi" ? E : T : void 0,
				children: [{
					label: T,
					icon: n,
					onClick: () => h("dropdown-single", e),
					selected: f === e && s === "dropdown-single"
				}, {
					label: E,
					icon: r,
					onClick: () => h("dropdown-multi", e),
					selected: f === e && s === "dropdown-multi"
				}]
			});
		}
		let N;
		if (f) {
			let e = A.get(f);
			e && (N = e.label);
		} else N = D.find((e) => e.questionType === s)?.label;
		return x.push({
			type: "submenu",
			label: w,
			icon: a,
			selectedLabel: N,
			children: k
		}), x.push({ type: "separator" }), x.push({
			label: v,
			icon: o,
			onClick: _
		}), c && x.push({
			label: y,
			icon: i,
			onClick: b,
			critical: !0
		}), x;
	}, [
		j,
		M,
		S,
		C,
		w,
		T,
		E,
		v,
		y
	]);
	return f(() => c.map((t) => {
		if (t.type === "section") {
			let n = t.section, r = `co-creation-section-${n.id}`, a = n.questions ?? [], s = a.length === 1;
			return {
				id: r,
				label: n.title || g,
				icon: e,
				onClick: N,
				...!k && !A && !n.locked && { otherActions: [
					{
						label: b,
						icon: o,
						onClick: () => O?.({
							elementId: n.id,
							type: "section"
						})
					},
					{ type: "separator" },
					{
						label: x,
						icon: i,
						onClick: () => D(n.id),
						critical: !0
					}
				] },
				children: a.map((e) => ({
					id: `co-creation-question-${e.id}`,
					label: e.title || _,
					icon: p(e.type),
					onClick: N,
					...!k && !A && !n.locked && { otherActions: P(e.id, e.type, !s) }
				}))
			};
		}
		let n = t.question;
		return {
			id: `co-creation-question-${n.id}`,
			label: n.title || _,
			icon: p(n.type),
			onClick: N,
			...!k && !A && { otherActions: P(n.id, n.type, !0) }
		};
	}), [
		c,
		N,
		g,
		_,
		k,
		A,
		P,
		b,
		x,
		O,
		D
	]);
};
//#endregion
export { h as useTableOfContentItems };
