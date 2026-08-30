import { useI18n as e } from "../../../../../lib/providers/i18n/i18n-provider.js";
import { F0FormField as t } from "../../../../../patterns/F0FormField/F0FormField.js";
import { useSurveyFormBuilderContext as n } from "../../Context.js";
import { useQuestionDisabled as r } from "../BaseQuestion/useQuestionDisabled.js";
import { BaseQuestion as i } from "../BaseQuestion/index.js";
import { useMemo as a } from "react";
import { jsx as o } from "react/jsx-runtime";
//#region src/kits/surveys/SurveyFormBuilder/QuestionTypes/TextQuestion/index.tsx
var s = ({ value: s, ...c }) => {
	let { onQuestionChange: l, answering: u, placeholders: d } = n(), f = r(c), { t: p } = e(), m = d?.answer ?? p("surveyFormBuilder.answer.textPlaceholder"), h = a(() => c.type === "text" ? {
		id: c.id,
		type: "text",
		label: p("surveyFormBuilder.answer.label"),
		placeholder: m,
		clearable: !c.required
	} : {
		id: c.id,
		type: "textarea",
		label: p("surveyFormBuilder.answer.label"),
		placeholder: m,
		rows: 4
	}, [
		c.id,
		c.type,
		c.required,
		m,
		p
	]);
	return /* @__PURE__ */ o(i, {
		...c,
		children: /* @__PURE__ */ o(t, {
			field: h,
			value: u ? s ?? "" : m,
			onChange: (e) => {
				l?.({
					...c,
					value: e
				});
			},
			disabled: f,
			hideLabel: !0
		})
	});
};
//#endregion
export { s as TextQuestion };
