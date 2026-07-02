import { Dialog } from "@factorialco/f0-react/dist/experimental"
import type { Policy } from "@/fixtures"

type DeleteDialogProps = {
  page: Policy
  open: boolean
  onClose: () => void
  onDelete: () => void
}

export function DeletePageDialog({
  page,
  open,
  onClose,
  onDelete,
}: DeleteDialogProps) {
  if (!open) return null

  return (
    <Dialog
      open={open}
      onClose={onClose}
      header={{
        type: "critical",
        title: "Delete page",
        description: `Are you sure you want to delete "${page.title}"? This action cannot be undone.`,
      }}
      actions={{
        primary: {
          label: "Delete",
          onClick: () => {
            onDelete()
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
