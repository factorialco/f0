import { Dialog } from "@/deprecated/Dialog"
import { useI18n } from "@/lib/providers/i18n"

type LastQuestionDialogProps = {
  open: boolean
  onConfirm: () => void
  onCancel: () => void
}

export const LastQuestionDialog = ({
  open,
  onConfirm,
  onCancel,
}: LastQuestionDialogProps) => {
  const { t } = useI18n()

  return (
    <Dialog
      open={open}
      onClose={onCancel}
      header={{
        type: "warning",
        title: t("surveyFormBuilder.labels.lastQuestionDialogTitle"),
        description: t(
          "surveyFormBuilder.labels.lastQuestionDialogDescription"
        ),
      }}
      actions={{
        primary: {
          label: t("surveyFormBuilder.actions.confirmMoveLastQuestion"),
          onClick: onConfirm,
        },
        secondary: {
          label: t("surveyFormBuilder.actions.cancelMoveLastQuestion"),
          onClick: onCancel,
        },
      }}
    />
  )
}
