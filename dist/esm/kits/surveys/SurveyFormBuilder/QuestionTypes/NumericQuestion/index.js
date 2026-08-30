import e from "../../../../../icons/app/Numbers.js";
import { useI18n as t } from "../../../../../lib/providers/i18n/i18n-provider.js";
import { F0NumberInput as n } from "../../../../../components/F0NumberInput/F0NumberInput.js";
import { F0TextInput as r } from "../../../../../components/F0TextInput/F0TextInput.js";
import { useSurveyFormBuilderContext as i } from "../../Context.js";
import { useQuestionDisabled as a } from "../BaseQuestion/useQuestionDisabled.js";
import { BaseQuestion as o } from "../BaseQuestion/index.js";
import { jsx as s } from "react/jsx-runtime";
//#region src/kits/surveys/SurveyFormBuilder/QuestionTypes/NumericQuestion/index.tsx
var c = ({ value: c, ...l }) => {
	let { t: u } = t(), { onQuestionChange: d, answering: f } = i(), p = a(l), m = (e) => {
		d?.({
			...l,
			type: "numeric",
			value: e
		});
	}, h = u("surveyFormBuilder.answer.numericPlaceholder");
	return /* @__PURE__ */ s(o, {
		...l,
		children: f ? /* @__PURE__ */ s(n, {
			locale: "en-US",
			size: "md",
			value: c,
			onChange: m,
			disabled: p,
			label: u("surveyFormBuilder.answer.label"),
			hideLabel: !0,
			required: l.required,
			maxDecimals: 0,
			placeholder: h,
			icon: e
		}) : /* @__PURE__ */ s(r, {
			type: "text",
			size: "md",
			value: h,
			onChange: () => {},
			disabled: !0,
			label: u("surveyFormBuilder.answer.label"),
			hideLabel: !0,
			icon: e
		})
	});
};
//#endregion
export { c as NumericQuestion };
