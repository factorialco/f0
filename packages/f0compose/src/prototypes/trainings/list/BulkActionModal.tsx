type Props = {
  open: boolean
  kind: BulkActionKind
  count: number
  onClose: () => void
}

export type BulkActionKind = "show-catalog" | "hide-catalog" | "delete" | "export"

const COPY: Record<
  BulkActionKind,
  {
    title: string
    body: (n: number) => string
    confirmLabel: string
    variant: "default" | "critical"
  }
> = {
  "show-catalog": {
    title: "Add to catalog",
    body: (n) =>
      `Make ${n} training${n === 1 ? "" : "s"} visible in the employee catalog. Employees will be able to enroll themselves.`,
    confirmLabel: "Add to catalog",
    variant: "default",
  },
  "hide-catalog": {
    title: "Remove from catalog",
    body: (n) =>
      `Hide ${n} training${n === 1 ? "" : "s"} from the employee catalog. Existing enrollments are kept.`,
    confirmLabel: "Remove from catalog",
    variant: "default",
  },
  delete: {
    title: "Delete trainings",
    body: (n) =>
      `Delete ${n} training${n === 1 ? "" : "s"} permanently. All classes, sessions and participant data will be removed. This action cannot be undone.`,
    confirmLabel: "Delete",
    variant: "critical",
  },
  export: {
    title: "Export to CSV",
    body: (n) =>
      `Export ${n} training${n === 1 ? "" : "s"} with full metadata (name, code, status, participant counts) as a CSV file.`,
    confirmLabel: "Export",
    variant: "default",
  },
}

export function BulkActionModal({ open, kind, count, onClose }: Props) {
  if (!open) return null

  const copy = COPY[kind]
  const confirmBg =
    copy.variant === "critical"
      ? "var(--f1-background-critical-bold)"
      : "var(--f1-background-bold)"
  const confirmFg =
    copy.variant === "critical"
      ? "var(--f1-foreground-critical-bold)"
      : "var(--f1-foreground-bold)"

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={copy.title}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.4)",
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "var(--f1-space-xl)",
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(480px, 100%)",
          background: "var(--f1-background-primary)",
          borderRadius: "var(--f1-radius-lg)",
          padding: "var(--f1-space-xl)",
          display: "flex",
          flexDirection: "column",
          gap: "var(--f1-space-lg)",
          boxShadow: "0 12px 32px rgba(0,0,0,0.2)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--f1-space-sm)" }}>
          <h3 style={{ fontSize: "var(--f1-font-size-lg)", fontWeight: 600 }}>
            {copy.title}
          </h3>
          <p
            style={{
              fontSize: "var(--f1-font-size-sm)",
              color: "var(--f1-color-foreground-muted)",
              lineHeight: 1.5,
            }}
          >
            {copy.body(count)}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "var(--f1-space-sm)",
          }}
        >
          <button
            type="button"
            onClick={onClose}
            style={{
              padding: "8px 16px",
              borderRadius: "var(--f1-radius-md)",
              border: "1px solid var(--f1-border-secondary)",
              background: "var(--f1-background-primary)",
              fontSize: "var(--f1-font-size-sm)",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onClose}
            style={{
              padding: "8px 16px",
              borderRadius: "var(--f1-radius-md)",
              border: "none",
              background: confirmBg,
              color: confirmFg,
              fontSize: "var(--f1-font-size-sm)",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            {copy.confirmLabel}
          </button>
        </div>
      </div>
    </div>
  )
}
