import { useI18n as e } from "../../../../../lib/providers/i18n/i18n-provider.js";
import { F0FormField as t } from "../../../../../patterns/F0FormField/F0FormField.js";
import { useSurveyFormBuilderContext as n } from "../../Context.js";
import { useQuestionDisabled as r } from "../BaseQuestion/useQuestionDisabled.js";
import { BaseQuestion as i } from "../BaseQuestion/index.js";
import { jsx as a } from "react/jsx-runtime";
//#region src/kits/surveys/SurveyFormBuilder/QuestionTypes/LinkQuestion/index.tsx
var o = ({ value: o, ...s }) => {
	let { t: c } = e(), { onQuestionChange: l, answering: u } = n(), d = r(s), f = c("surveyFormBuilder.answer.linkPlaceholder"), p = {
		id: s.id,
		type: "text",
		inputType: "url",
		label: c("surveyFormBuilder.answer.label"),
		placeholder: f,
		clearable: !s.required
	};
	return /* @__PURE__ */ a(i, {
		...s,
		children: /* @__PURE__ */ a(t, {
			field: p,
			value: u ? o ?? "" : f,
			onChange: (e) => {
				l?.({
					...s,
					type: "link",
					value: e || null
				});
			},
			disabled: d,
			hideLabel: !0
		})
	});
};
//#endregion
export { o as LinkQuestion };
