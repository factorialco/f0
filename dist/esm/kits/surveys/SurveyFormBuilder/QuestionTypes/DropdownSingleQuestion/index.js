import { useI18n as e } from "../../../../../lib/providers/i18n/i18n-provider.js";
import { F0FormField as t } from "../../../../../patterns/F0FormField/F0FormField.js";
import { useSurveyFormBuilderContext as n } from "../../Context.js";
import { useQuestionDisabled as r } from "../BaseQuestion/useQuestionDisabled.js";
import { BaseQuestion as i } from "../BaseQuestion/index.js";
import { jsx as a } from "react/jsx-runtime";
//#region src/kits/surveys/SurveyFormBuilder/QuestionTypes/DropdownSingleQuestion/index.tsx
var o = ({ datasetKey: o, showSearchBox: s, searchBoxPlaceholder: c, ...l }) => {
	let { onQuestionChange: u, answering: d, datasets: f } = n(), p = r(l), { t: m } = e(), h = f?.[o];
	if (!h) throw Error(`Dataset "${o}" not found for ${l.type}`);
	let g = l.type === "dropdown-multi", _ = s ?? !0, v = l.type === "dropdown-single" ? l.allowCreate : void 0, y = d && !g && v && h.onCreate ? (e) => h.onCreate(e).then((e) => {
		let t = h.mapOptions(e);
		u?.({
			id: l.id,
			type: "dropdown-single",
			value: t.value
		});
	}, (e) => {
		console.warn("[SurveyFormBuilder] onCreate failed:", e);
	}) : void 0, b = {
		id: l.id,
		type: "select",
		label: m("surveyFormBuilder.answer.label"),
		placeholder: h.placeholder ?? m("surveyFormBuilder.answer.dropdownPlaceholder"),
		source: h.dataSource,
		mapOptions: h.mapOptions,
		icon: h.icon,
		clearable: !l.required,
		multiple: g,
		showSearchBox: _,
		searchBoxPlaceholder: c,
		onCreate: y
	};
	return /* @__PURE__ */ a(i, {
		...l,
		children: /* @__PURE__ */ a("div", {
			className: "flex flex-col items-start [&>div]:w-full",
			children: /* @__PURE__ */ a(t, {
				field: b,
				value: g ? l.value ?? [] : l.value ?? "",
				onChange: (e) => {
					g ? u?.({
						id: l.id,
						type: "dropdown-multi",
						value: e
					}) : u?.({
						id: l.id,
						type: "dropdown-single",
						value: e
					});
				},
				disabled: !d || p,
				hideLabel: !0
			})
		})
	});
};
//#endregion
export { o as DropdownSingleQuestion };
