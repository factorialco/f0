import { F0Dialog } from "@factorialco/f0-react"

export type BulkActionKind =
  | "display-catalog"
  | "hide-catalog"
  | "delete"
  | "export"

type Props = {
  open: boolean
  kind: BulkActionKind
  count: number
  onClose: () => void
}

const COPY: Record<
  BulkActionKind,
  {
    title: string
    body: (n: number) => string
    confirmLabel: string
    cancelLabel: string
    critical?: boolean
  }
> = {
  "display-catalog": {
    title: "Update catalog",
    body: () =>
      "Do you want to add these courses to the catalog? Once you do that the employees will be able to request enter these courses.",
    confirmLabel: "Confirm",
    cancelLabel: "Cancel",
  },
  "hide-catalog": {
    title: "Update catalog",
    body: () =>
      "Do you want to remove these courses from the catalog? Once you do that the employees won't be able to request enter these courses.",
    confirmLabel: "Confirm",
    cancelLabel: "Cancel",
  },
  delete: {
    title: "Delete courses",
    body: () => "Are you sure you want to delete these courses?",
    confirmLabel: "Yes",
    cancelLabel: "Return to the list",
    critical: true,
  },
  export: {
    title: "Export training report",
    body: (n) =>
      `Export ${n} course${n === 1 ? "" : "s"} as a CSV file. The export will be queued and you will find it in your documents when completed.`,
    confirmLabel: "Export",
    cancelLabel: "Cancel",
  },
}

export function BulkActionModal({ open, kind, count, onClose }: Props) {
  if (!open) return null
  const copy = COPY[kind]
  return (
    <F0Dialog
      isOpen
      onClose={onClose}
      position="center"
      width="md"
      title={copy.title}
      description={copy.body(count)}
      primaryAction={{
        label: copy.confirmLabel,
        variant: copy.critical ? "critical" : "default",
        onClick: onClose,
      }}
      secondaryAction={{
        label: copy.cancelLabel,
        onClick: onClose,
      }}
    />
  )
}
