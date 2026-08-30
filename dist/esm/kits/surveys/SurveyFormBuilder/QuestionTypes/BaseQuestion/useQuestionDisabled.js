import { useSurveyFormBuilderContext as e } from "../../Context.js";
//#region src/kits/surveys/SurveyFormBuilder/QuestionTypes/BaseQuestion/useQuestionDisabled.ts
function t(t) {
	let { answering: n, getSectionContainingQuestion: r } = e(), i = r(t.id)?.locked;
	return n ? !1 : i || !0;
}
//#endregion
export { t as useQuestionDisabled };
