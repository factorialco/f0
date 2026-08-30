import { cn as e } from "../../../../../lib/utils.js";
import { useI18n as t } from "../../../../../lib/providers/i18n/i18n-provider.js";
import { F0Checkbox as n } from "../../../../../components/F0Checkbox/F0Checkbox.js";
import { useSurveyFormBuilderContext as r } from "../../Context.js";
import { useQuestionDisabled as i } from "../BaseQuestion/useQuestionDisabled.js";
import { BaseQuestion as a } from "../BaseQuestion/index.js";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/kits/surveys/SurveyFormBuilder/QuestionTypes/CheckboxQuestion/index.tsx
var c = { fieldSizing: "content" }, l = ({ value: l, label: u, ...d }) => {
	let { onQuestionChange: f, answering: p, disabled: m, getSectionContainingQuestion: h } = r(), g = i(d), { t: _ } = t();
	if (p) return /* @__PURE__ */ o(a, {
		...d,
		children: /* @__PURE__ */ o(n, {
			id: d.id,
			checked: l ?? !1,
			onCheckedChange: (e) => {
				f?.({
					...d,
					type: "checkbox",
					label: u,
					value: e || null
				});
			},
			disabled: g,
			title: u
		})
	});
	let v = m || h(d.id)?.locked || d.locked;
	return /* @__PURE__ */ o(a, {
		...d,
		children: /* @__PURE__ */ s("div", {
			className: "flex items-start",
			children: [/* @__PURE__ */ o(n, {
				checked: !1,
				disabled: !0,
				hideLabel: !0,
				presentational: !0
			}), /* @__PURE__ */ o("textarea", {
				value: u,
				placeholder: _("surveyFormBuilder.checkboxQuestion.placeholder"),
				"aria-label": _("surveyFormBuilder.checkboxQuestion.placeholder"),
				onChange: (e) => {
					f?.({
						...d,
						type: "checkbox",
						label: e.target.value
					});
				},
				disabled: !!v,
				className: e("w-full resize-none bg-transparent pt-0.5 pl-2.5 text-f1-foreground-secondary outline-none placeholder:text-f1-foreground-tertiary", v && "cursor-not-allowed opacity-50"),
				style: c
			})]
		})
	});
};
//#endregion
export { l as CheckboxQuestion };
