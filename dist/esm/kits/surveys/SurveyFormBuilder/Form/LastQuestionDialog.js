import { useI18n as e } from "../../../../lib/providers/i18n/i18n-provider.js";
import { Dialog as t } from "../../../../deprecated/Dialog/index.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/kits/surveys/SurveyFormBuilder/Form/LastQuestionDialog.tsx
var r = ({ open: r, onConfirm: i, onCancel: a }) => {
	let { t: o } = e();
	return /* @__PURE__ */ n(t, {
		open: r,
		onClose: a,
		header: {
			type: "warning",
			title: o("surveyFormBuilder.labels.lastQuestionDialogTitle"),
			description: o("surveyFormBuilder.labels.lastQuestionDialogDescription")
		},
		actions: {
			primary: {
				label: o("surveyFormBuilder.actions.confirmMoveLastQuestion"),
				onClick: i
			},
			secondary: {
				label: o("surveyFormBuilder.actions.cancelMoveLastQuestion"),
				onClick: a
			}
		}
	});
};
//#endregion
export { r as LastQuestionDialog };
