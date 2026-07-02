import { Dialog } from "@factorialco/f0-react/dist/experimental"

type DiscardDraftDialogProps = {
  open: boolean
  onClose: () => void
  onDiscard: () => void
}

export function DiscardDraftDialog({
  open,
  onClose,
  onDiscard,
}: DiscardDraftDialogProps) {
  if (!open) return null

  return (
    <Dialog
      open={open}
      onClose={onClose}
      header={{
        type: "info",
        title: "Discard changes",
        description:
          "Are you sure you want to discard your draft changes? The page will revert to its last published version.",
      }}
      actions={{
        primary: {
          label: "Discard",
          onClick: () => {
            onDiscard()
            onClose()
          },
        },
        secondary: {
          label: "Cancel",
          onClick: onClose,
        },
      }}
    />
  )
}
