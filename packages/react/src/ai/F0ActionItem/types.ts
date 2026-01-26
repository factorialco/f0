/**
 * Props for the F0ActionItem component
 */
export interface F0ActionItemProps {
  /**
   * The title text displayed next to the status icon
   */
  title: string
  /**
   * Current status of the action item
   */
  status?: "inProgress" | "executing" | "completed"
  /**
   * Whether the action item is part of a group
   */
  inGroup?: boolean
}

export const actionItemStatuses = [
  "inProgress",
  "executing",
  "completed",
] as const
export type ActionItemStatus = (typeof actionItemStatuses)[number]
