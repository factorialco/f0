import { Dialog } from "@/experimental/Overlays/Dialog"
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
        title: t("coCreationForm.labels.lastQuestionDialogTitle"),
        description: t("coCreationForm.labels.lastQuestionDialogDescription"),
      }}
      actions={{
        primary: {
          label: t("coCreationForm.actions.confirmMoveLastQuestion"),
          onClick: onConfirm,
        },
        secondary: {
          label: t("coCreationForm.actions.cancelMoveLastQuestion"),
          onClick: onCancel,
        },
      }}
    />
  )
}
