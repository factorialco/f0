import { useI18n as e } from "../../../../../lib/providers/i18n/i18n-provider.js";
import { F0FormField as t } from "../../../../../patterns/F0FormField/F0FormField.js";
import { useSurveyFormBuilderContext as n } from "../../Context.js";
import { useQuestionDisabled as r } from "../BaseQuestion/useQuestionDisabled.js";
import { BaseQuestion as i } from "../BaseQuestion/index.js";
import { jsx as a } from "react/jsx-runtime";
//#region src/kits/surveys/SurveyFormBuilder/QuestionTypes/DateQuestion/index.tsx
var o = ({ value: o, ...s }) => {
	let { onQuestionChange: c } = n(), l = r(s), { t: u } = e(), d = {
		id: s.id,
		type: "date",
		label: u("surveyFormBuilder.answer.label"),
		clearable: !s.required
	};
	return /* @__PURE__ */ a(i, {
		...s,
		children: /* @__PURE__ */ a(t, {
			field: d,
			value: o ?? void 0,
			onChange: (e) => {
				c?.({
					...s,
					type: "date",
					value: e ?? void 0
				});
			},
			disabled: l,
			hideLabel: !0
		})
	});
};
//#endregion
export { o as DateQuestion };
