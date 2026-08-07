import { strings } from "./state"

const ts = strings.trainingSettings

/** Simple dark snackbar for settings toggle confirmations. Auto-dismissed by the parent. */
export function SettingsToast({ message, onDismiss }: { message: string; onDismiss: () => void }) {
  return (
    <div
      role="status"
      style={{
        position: "fixed",
        bottom: "24px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        alignItems: "center",
        gap: "16px",
        padding: "12px 12px 12px 16px",
        borderRadius: "12px",
        background: "var(--f1-color-bg-inverse, #1c1c1c)",
        color: "var(--f1-color-fg-inverse, #fff)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
        zIndex: 1000,
        fontFamily: "inherit",
        fontSize: "var(--f1-font-size-base)",
        maxWidth: "min(92vw, 480px)",
        whiteSpace: "nowrap",
      }}
    >
      <span>{message}</span>
      <button
        onClick={onDismiss}
        aria-label={ts.toastDismiss}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          color: "inherit",
          opacity: 0.7,
          fontSize: "18px",
          lineHeight: 1,
          padding: "4px 8px",
          flexShrink: 0,
        }}
      >
        ✕
      </button>
    </div>
  )
}
