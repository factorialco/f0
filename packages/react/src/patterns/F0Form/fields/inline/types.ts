import type { ReactNode } from "react"
import type { IconType } from "@/components/F0Icon"

export type RowAction = {
  key: string
  icon: IconType
  label: string
  onClick: () => void
  /** Draws the glyph in the positive token, for a state the row is confirming. */
  positive?: boolean
}

export type InlineFieldRowProps = {
  /** Anchor the row so section navigation and error scrolling can reach it. */
  anchorId?: string
  label: string
  /** Hint shown beside the label. */
  hint?: string
  value: ReactNode
  /** Fixed order, closest to the value first. Copy is appended after it. */
  actions: RowAction[]
  /** When set, the row appends a copy action that writes exactly this string. */
  copyValue?: string
  /** Omit to disable activation. */
  onActivate?: () => void
  /** Use a caret for text editors and a pointer for popup editors. */
  activatorCursor?: "caret" | "pointer"
  editing: boolean
  /**
   * Validation copy displayed below the value. Its presence also marks the
   * value box as critical while the row reads.
   */
  message?: string
}
