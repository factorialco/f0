import { jsx as s } from "react/jsx-runtime";
import { Dialog as t } from "../../../../deprecated/Dialog/index.js";
import { useI18n as l } from "../../../../lib/providers/i18n/i18n-provider.js";
const c = ({
  open: i,
  onConfirm: r,
  onCancel: e
}) => {
  const { t: o } = l();
  return /* @__PURE__ */ s(
    t,
    {
      open: i,
      onClose: e,
      header: {
        type: "warning",
        title: o("surveyFormBuilder.labels.lastQuestionDialogTitle"),
        description: o(
          "surveyFormBuilder.labels.lastQuestionDialogDescription"
        )
      },
      actions: {
        primary: {
          label: o("surveyFormBuilder.actions.confirmMoveLastQuestion"),
          onClick: r
        },
        secondary: {
          label: o("surveyFormBuilder.actions.cancelMoveLastQuestion"),
          onClick: e
        }
      }
    }
  );
};
export {
  c as LastQuestionDialog
};
