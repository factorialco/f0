import { type ReactNode } from "react"

import { type IconType } from "@/components/F0Icon"
import { type DropdownItem } from "@/experimental/Navigation/Dropdown"

export const timelineRowStatuses = [
  "completed",
  "in-progress",
  "not-started",
] as const

export type TimelineRowStatus = (typeof timelineRowStatuses)[number]

export type F0TimelineRowAssignee = {
  firstName: string
  lastName: string
  src?: string
}

export interface F0TimelineRowAction {
  /** Button label */
  label: string
  /** Optional icon for the button */
  icon?: IconType
  /** Click handler */
  onClick: () => void
  /** Whether the button is disabled */
  disabled?: boolean
  /** Whether the button is in a loading state */
  loading?: boolean
}

export type F0TimelineRowOtherAction = DropdownItem

export interface F0TimelineRowBaseProps {
  /** The current status of this timeline entry */
  status: TimelineRowStatus
  /** The title of the timeline entry (e.g., "Tasks") */
  title: string
  /** Whether this is the last row in the timeline (hides the bottom connector line) */
  isLast?: boolean
  /** Hide the status indicator column (used for subtasks inside multitask rows) */
  hideStatus?: boolean
}

/** Props for a single-task timeline row */
export interface F0TimelineRowTaskProps extends F0TimelineRowBaseProps {
  /** The icon representing the task type (defaults to Marker) */
  icon?: IconType
  /** Description text (e.g., "Completed on 20/2025") */
  description?: string
  /** Assignees to display as avatars below the title */
  assignees?: F0TimelineRowAssignee[]
  /** Content to display on the right side (e.g., tags, badges) */
  right?: ReactNode
  /** Files attached to this timeline entry */
  files?: File[]
  /** Primary action button (displayed on the right after a divider) */
  primaryAction?: F0TimelineRowAction
  /** Secondary action buttons (displayed on the left) */
  secondaryActions?: F0TimelineRowAction[]
  /** Overflow menu items (displayed as a dropdown via ellipsis button) */
  otherActions?: F0TimelineRowOtherAction[]
}

/** Props for a multitask (collapsible group) timeline row */
export interface F0TimelineRowMultitaskProps extends F0TimelineRowBaseProps {
  /** Number of grouped tasks */
  taskCount: number
  /** Number of completed tasks in the group (shows a progress pill) */
  completedCount?: number
  /** Whether the multitask row is expanded (controlled) */
  expanded: boolean
  /** Callback when multitask row expand/collapse is toggled */
  onExpandToggle: () => void
  /** The subtask items to render when expanded */
  items: F0TimelineRowTaskProps[]
}

export type F0TimelineRowProps =
  | F0TimelineRowTaskProps
  | F0TimelineRowMultitaskProps
