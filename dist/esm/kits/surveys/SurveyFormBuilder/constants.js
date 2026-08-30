import e from "../../../icons/app/Calendar.js";
import t from "../../../icons/app/Check.js";
import n from "../../../icons/app/CheckCircle.js";
import r from "../../../icons/app/CheckDouble.js";
import i from "../../../icons/app/ChevronDown.js";
import a from "../../../icons/app/Link.js";
import o from "../../../icons/app/List.js";
import s from "../../../icons/app/Numbers.js";
import c from "../../../icons/app/Star.js";
import l from "../../../icons/app/TextSize.js";
import u from "../../../icons/app/Upload.js";
import { useI18n as d } from "../../../lib/providers/i18n/i18n-provider.js";
import { useSurveyFormBuilderContext as f } from "./Context.js";
//#region src/kits/surveys/SurveyFormBuilder/constants.ts
var p = () => {
	let { isQuestionTypeAllowed: p, datasets: m } = f(), { t: h } = d(), g = [
		{
			label: h("surveyFormBuilder.questionTypes.rating"),
			icon: c,
			questionType: "rating"
		},
		{
			label: h("surveyFormBuilder.questionTypes.multipleChoice"),
			icon: r,
			questionType: "multi-select"
		},
		{
			label: h("surveyFormBuilder.questionTypes.singleChoice"),
			icon: t,
			questionType: "select"
		},
		{
			label: h("surveyFormBuilder.questionTypes.text"),
			icon: l,
			questionType: "text"
		},
		{
			label: h("surveyFormBuilder.questionTypes.longText"),
			icon: o,
			questionType: "longText"
		},
		{
			label: h("surveyFormBuilder.questionTypes.numeric"),
			icon: s,
			questionType: "numeric"
		},
		{
			label: h("surveyFormBuilder.questionTypes.link"),
			icon: a,
			questionType: "link"
		},
		{
			label: h("surveyFormBuilder.questionTypes.date"),
			icon: e,
			questionType: "date"
		},
		{
			label: h("surveyFormBuilder.questionTypes.file"),
			icon: u,
			questionType: "file"
		},
		{
			label: h("surveyFormBuilder.questionTypes.checkbox"),
			icon: n,
			questionType: "checkbox"
		}
	].filter((e) => p(e.questionType)), _ = p("dropdown-single") ? Object.entries(m ?? {}).map(([e, t]) => ({
		label: t.title,
		icon: t.icon ?? i,
		questionType: "dropdown-single",
		datasetKey: e
	})) : [];
	return [...g, ..._];
}, m = {
	rating: c,
	"multi-select": r,
	select: t,
	text: l,
	longText: o,
	numeric: s,
	link: a,
	date: e,
	"dropdown-single": i,
	"dropdown-multi": i,
	file: u,
	checkbox: n
};
//#endregion
export { m as questionTypeIconMap, p as useQuestionTypes };
