import type { ReactNode } from "react"
import type { IconType } from "@/components/F0Icon"

/**
 * One entry of the row's action strip. The caller has already decided the
 * action exists and what it says; the row only draws it and calls it back.
 */
export type RowAction = {
  key: string
  icon: IconType
  label: string
  onClick: () => void
  /** Draws the glyph in the positive token, for a state the row is confirming. */
  positive?: boolean
}

/**
 * Everything the row needs and nothing about the thing inside it. `value` is
 * an already-rendered node, `actions` an already-built list, so the row works
 * with a `<span>` and two fakes and never learns what a field is.
 */
export type InlineFieldRowProps = {
  label: string
  /** Help copy, revealed from an ⓘ beside the label. */
  hint?: string
  value: ReactNode
  /** Fixed order, closest to the value first. Copy is appended after it. */
  actions: RowAction[]
  /** When set, the row appends a copy action that writes exactly this string. */
  copyValue?: string
  /** Absent means the value is inert: no activator, nothing focusable. */
  onActivate?: () => void
  /**
   * What the pointer promises over the value: a caret for anything that turns
   * into an input, a click for a value that opens a list or a calendar. The row
   * cannot tell the two apart, so the caller says which.
   */
  activatorCursor?: "caret" | "pointer"
  editing: boolean
  /**
   * Why the value is being refused, under the box. A node rather than a string
   * so the caller keeps its own wording; the row only places it and paints it
   * critical.
   */
  message?: ReactNode
}
