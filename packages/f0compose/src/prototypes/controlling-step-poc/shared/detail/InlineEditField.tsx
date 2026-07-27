import { useEffect, useRef, useState } from "react"
import { Pencil } from "@factorialco/f0-react/icons/app"

/**
 * Inline click-to-edit value for the read-mode summary.
 *
 * Used ONLY for plain-text fields (amount, description, vendor, date)
 * on One-created drafts — NOT for coded/dropdown fields (category,
 * cost center, project), which stay One-only (an inline dropdown would
 * just be the form in disguise).
 *
 * Click the value → it becomes an input pre-filled with the current
 * text. Enter / blur commits via `onCommit(rawString)`; Escape
 * cancels. A faint pencil appears on hover so the affordance is
 * discoverable without adding chrome to every row.
 */
export function InlineEditField(props: {
  /** Display string when not editing. */
  value: string
  /** Raw editable string (defaults to `value`). */
  editValue?: string
  /** HTML input type — "text" | "number" | "date". */
  type?: "text" | "number" | "date"
  /** Called with the raw input string on commit. No-op if unchanged. */
  onCommit: (raw: string) => void
  /** Optional aria/label for the field. */
  label?: string
}) {
  const { value, editValue, type = "text", onCommit, label } = props
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(editValue ?? value)
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (editing) {
      setDraft(editValue ?? value)
      // Focus on the next frame so the input exists.
      requestAnimationFrame(() => {
        inputRef.current?.focus()
        inputRef.current?.select()
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editing])

  const commit = () => {
    setEditing(false)
    const trimmed = draft.trim()
    if (trimmed.length > 0 && trimmed !== (editValue ?? value)) {
      onCommit(trimmed)
    }
  }

  if (editing) {
    return (
      <input
        ref={inputRef}
        type={type}
        value={draft}
        aria-label={label}
        onChange={(e) => setDraft(e.target.value)}
        onBlur={commit}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault()
            commit()
          } else if (e.key === "Escape") {
            e.preventDefault()
            setEditing(false)
          }
        }}
        style={{
          font: "inherit",
          color: "inherit",
          padding: "2px 6px",
          border: "1px solid #d4d4d8",
          borderRadius: 6,
          background: "var(--f1-background, #fff)",
          outline: "none",
          minWidth: 0,
          maxWidth: 220,
        }}
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setEditing(true)}
      title="Click to edit"
      className="group inline-flex items-center gap-1 rounded-sm px-1 py-0.5 hover:bg-f1-background-secondary"
      style={{
        font: "inherit",
        color: "inherit",
        border: "none",
        background: "transparent",
        cursor: "text",
        textAlign: "left",
      }}
    >
      <span>{value}</span>
      <Pencil
        className="opacity-0 transition-opacity group-hover:opacity-50"
        width={12}
        height={12}
        aria-hidden="true"
      />
    </button>
  )
}
