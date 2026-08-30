import { detectRatingOptionType as e, getDefaultParamsForQuestionType as t, getRatingOptions as n } from "../../../lib.js";
import { useSurveyFormBuilderContext as r } from "../../../Context.js";
import { useQuestionTypes as i } from "../../../constants.js";
import { useCallback as a, useMemo as o } from "react";
//#region src/kits/surveys/SurveyFormBuilder/QuestionTypes/BaseQuestion/ActionsMenu/useQuestionActions.ts
var s = [
	{
		label: "1 - 5",
		value: "1-5"
	},
	{
		label: "1 - 10",
		value: "1-10"
	},
	{
		label: "0 - 10",
		value: "0-10"
	},
	{
		label: "Emojis",
		value: "emojis"
	}
];
function c(t, n) {
	if (t !== "rating" || !n || n.type !== "rating") return null;
	let r = n.options;
	return !Array.isArray(r) || r.length === 0 || typeof r[0]?.value != "number" ? null : e(r);
}
function l(e, t, n) {
	return !(e === t || (e === "select" || e === "multi-select") && n && "options" in n && Array.isArray(n.options) && n.options.length > 0 || (e === "dropdown-single" || e === "dropdown-multi") && (t === "dropdown-single" || t === "dropdown-multi"));
}
function u() {
	let { onQuestionChange: e, getQuestionById: o, deleteElement: s, onDuplicateElement: u, disallowOptionalQuestions: d, datasets: f } = r(), p = i();
	return {
		getActionsForQuestion: a((r, i, a) => {
			let m = o(r), h = m && "datasetKey" in m && typeof m.datasetKey == "string" ? m.datasetKey : void 0, g = c(i, m), _ = (t) => {
				e?.({
					id: r,
					type: i,
					required: t
				});
			}, v = (n, a) => {
				let o = l(n, i, m), s = n === "dropdown-single" || n === "dropdown-multi", c = i === "dropdown-single" || i === "dropdown-multi", u = s && c && n !== i, d = s && !c;
				e?.({
					id: r,
					type: n,
					...s ? { datasetKey: a } : { datasetKey: void 0 },
					...u || d ? { value: n === "dropdown-multi" ? [] : null } : {},
					...o && { ...t(n) }
				});
			}, y = (t) => {
				e?.({
					id: r,
					type: "rating",
					value: void 0,
					options: n(t)
				});
			}, b = i === "dropdown-multi" && !!h, x = (t) => {
				h && e?.({
					id: r,
					type: t ? "dropdown-multi" : "dropdown-single",
					datasetKey: h,
					value: t ? [] : null
				});
			}, S = !!(h && f?.[h]?.onCreate), C = !!(m && "allowCreate" in m && m.allowCreate);
			return {
				question: m,
				questionTypes: p,
				currentRatingType: g,
				currentDatasetKey: h,
				isMultiSelectEnabled: b,
				isAllowCreateEnabled: C,
				datasetHasOnCreate: S,
				disallowOptionalQuestions: d,
				canDelete: a,
				handleChangeRequired: _,
				handleSelectQuestionType: v,
				handleSelectRatingType: y,
				handleToggleMultiSelect: x,
				handleToggleAllowCreate: (t) => {
					h && e?.({
						id: r,
						type: i,
						allowCreate: t
					});
				},
				handleDuplicate: () => {
					u?.({
						elementId: r,
						type: i
					});
				},
				handleDelete: () => {
					s(r);
				}
			};
		}, [
			o,
			e,
			s,
			u,
			d,
			p,
			f
		]),
		questionTypes: p
	};
}
function d({ questionId: e, questionType: t, canDelete: n = !0 }) {
	let { getActionsForQuestion: r } = u();
	return o(() => r(e, t, n), [
		r,
		e,
		t,
		n
	]);
}
//#endregion
export { s as RATING_OPTIONS, c as getCurrentRatingType, l as shouldResetParamsOnTypeChange, d as useQuestionActions, u as useQuestionActionsFactory };
