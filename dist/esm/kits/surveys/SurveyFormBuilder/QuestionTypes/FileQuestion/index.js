import { useI18n as e } from "../../../../../lib/providers/i18n/i18n-provider.js";
import { F0FormField as t } from "../../../../../patterns/F0FormField/F0FormField.js";
import { useSurveyFormBuilderContext as n } from "../../Context.js";
import { useQuestionDisabled as r } from "../BaseQuestion/useQuestionDisabled.js";
import { BaseQuestion as i } from "../BaseQuestion/index.js";
import { jsx as a } from "react/jsx-runtime";
//#region src/kits/surveys/SurveyFormBuilder/QuestionTypes/FileQuestion/index.tsx
var o = [
	"image/*",
	"application/pdf",
	"application/msword",
	"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
	"application/vnd.ms-excel",
	"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
	"application/vnd.ms-powerpoint",
	"application/vnd.openxmlformats-officedocument.presentationml.presentation",
	"text/plain",
	"text/csv"
], s = () => ({
	upload: async (e) => ({
		type: "success",
		value: `local-${e.name}-${Date.now()}`
	}),
	cancelUpload: () => {},
	progress: 0,
	status: "idle"
}), c = ({ value: c, useUpload: l, accept: u, maxSizeMB: d, ...f }) => {
	let { onQuestionChange: p, useUpload: m } = n(), h = r(f), { t: g } = e(), _ = l ?? m, v = {
		id: f.id,
		type: "file",
		label: g("surveyFormBuilder.answer.label"),
		multiple: !0,
		accept: u ?? o,
		maxSizeMB: d,
		useUpload: _ ?? s
	};
	return /* @__PURE__ */ a(i, {
		...f,
		children: /* @__PURE__ */ a(t, {
			field: v,
			value: c ?? [],
			onChange: (e) => {
				p?.({
					...f,
					type: "file",
					value: e || null
				});
			},
			disabled: h,
			hideLabel: !0
		})
	});
};
//#endregion
export { o as DEFAULT_FILE_ACCEPT, c as FileQuestion };
