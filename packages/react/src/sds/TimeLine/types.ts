import type { IconType } from "@/components/F0Icon"
import type { DropdownItem } from "@/experimental/Navigation/Dropdown"
import type { MetadataItem } from "@/experimental/Information/Headers/Metadata"

export const timelineRowStatuses = [
  "completed",
  "in-progress",
  "not-started",
] as const

export type TimelineRowStatus = (typeof timelineRowStatuses)[number]

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
  /** Metadata items to display (assignees, tags, dates, etc.) using the same pattern as ResourceHeader */
  metadata?: (MetadataItem | undefined | boolean)[]
  /** Primary action button (displayed on the right after a divider) */
  primaryAction?: F0TimelineRowAction
  /** Secondary action buttons (displayed on the left) */
  secondaryActions?: F0TimelineRowAction[]
  /** Overflow menu items (displayed as a dropdown via ellipsis button) */
  otherActions?: F0TimelineRowOtherAction[]
}

/** Item types that can be rendered inside a multitask row */
export type F0TimelineRowMultitaskItemProps =
  | F0TimelineRowTaskProps
  | F0TimelineRowNestedtaskProps

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
  /** The subtask items to render when expanded. Can be single tasks or nestedtask groups */
  items: F0TimelineRowMultitaskItemProps[]
}

/**
 * Props for a nestedtask timeline row.
 * Renders a task-style header (custom icon, title, description, chevron toggle)
 * with collapsible nested items and optional group-level metadata (assignees, file chips, etc.).
 * Unlike multitask, the header looks like a regular task row with expand/collapse capability.
 */
export interface F0TimelineRowNestedtaskProps extends F0TimelineRowBaseProps {
  /** The icon representing the task type */
  icon: IconType
  /** Description text (e.g., "Estimated on 18/07/2025") */
  description?: string
  /** Number of nested items (displayed in the progress pill) */
  taskCount: number
  /** Number of completed items (displayed in the progress pill) */
  completedCount?: number
  /** Whether the row is expanded (controlled). When `collapsible` is false this is ignored and the row is always expanded. */
  expanded?: boolean
  /** Callback when expand/collapse is toggled. Not invoked when `collapsible` is false. */
  onExpandToggle?: () => void
  /**
   * Whether the header chevron toggles the body. When false, the row is
   * always expanded and the header has no toggle affordance — useful when
   * the body controls its own expansion (e.g. a collapsible callout card).
   * @default true
   */
  collapsible?: boolean
  /** Metadata items displayed below the header (e.g., assignees, file chips). Always visible regardless of expand/collapse */
  metadata?: (MetadataItem | undefined | boolean)[]
  /** The nested task items to render when expanded. Ignored when `content` is provided. */
  items?: F0TimelineRowTaskProps[]
  /**
   * Custom content to render in the expanded body of the row. When provided,
   * `items` is ignored and this React node is rendered instead. Use this to
   * embed richer UI (callout cards, tables, custom panels) inside a nested
   * timeline row.
   */
  content?: React.ReactNode
  /** Primary action button (displayed on the right after a divider) */
  primaryAction?: F0TimelineRowAction
  /** Secondary action buttons (displayed on the left) */
  secondaryActions?: F0TimelineRowAction[]
  /** Overflow menu items (displayed as a dropdown via ellipsis button) */
  otherActions?: F0TimelineRowOtherAction[]
}

export type F0TimelineRowProps =
  | F0TimelineRowTaskProps
  | F0TimelineRowMultitaskProps
  | F0TimelineRowNestedtaskProps
