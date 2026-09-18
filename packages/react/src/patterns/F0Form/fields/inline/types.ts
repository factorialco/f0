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
  /** Validation content displayed below the value. */
  message?: ReactNode
}
