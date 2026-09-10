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
   * Rendered inline after the title — used for the elapsed-time counter.
   *
   * A node rather than a string so that whatever ticks inside it owns its own
   * state: passing a composed label would re-render this item, and everything
   * above it, on every tick.
   */
  suffix?: ReactNode
  /**
   * Current status of the action item
   */
  status?: "inProgress" | "executing" | "writing" | "completed"
  /**
   * Whether the action item is part of a group
   */
  inGroup?: boolean
}

export const actionItemStatuses = [
  "inProgress",
  "executing",
  "writing",
  "completed",
] as const
export type ActionItemStatus = (typeof actionItemStatuses)[number]
