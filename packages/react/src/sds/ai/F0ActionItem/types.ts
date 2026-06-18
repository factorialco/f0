import { type ReactNode } from "react"

/**
 * Props for the F0ActionItem component
 */
export interface F0ActionItemProps {
  /**
   * The title text displayed next to the status icon
   */
  title?: string
  /**
   * Current status of the action item
   */
  status?: "inProgress" | "executing" | "writing" | "completed"
  /**
   * Whether the action item is part of a group
   */
  inGroup?: boolean
  /**
   * Optional freeform content rendered beneath the title, aligned with it
   * (inside the text column, past the status icon). The component owns the
   * layout; the consumer composes whatever renders here. The Thinking
   * accordion uses it to attach rich per-step content.
   */
  content?: ReactNode
}

export const actionItemStatuses = [
  "inProgress",
  "executing",
  "writing",
  "completed",
] as const
export type ActionItemStatus = (typeof actionItemStatuses)[number]
