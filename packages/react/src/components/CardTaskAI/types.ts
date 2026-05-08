import type { ReactNode } from "react"

export type TaskItemStatus = "completed" | "in-progress" | "pending" | "error"

export type TaskType =
  | "notification"
  | "sign"
  | "basic-task"
  | "upload-document"
  | "data-collection"
  | "training"
  | "surveys"

export type OptionType =
  | "single-task"
  | "one-automation"
  | "with-folder"
  | "document-upload"
  | "condition"
  | "assignee"

export interface TaskItem {
  id: string
  label: string
  status?: TaskItemStatus
}

/**
 * Single task option - Instructions or forms to fill for the assignee
 * Icon: List
 */
export interface SingleTaskOption {
  type: "single-task"
  id: string
  label: string
  icon?: ReactNode
}

/**
 * ONE Automation option - Task automatically handled by ONE AI
 * No user action needed. Icon: Ai
 */
export interface OneAutomationOption {
  type: "one-automation"
  id: string
  label?: string
}

/**
 * With Folder option - Specifies where template/file comes from or where to save
 * Icon: Folders
 */
export interface WithFolderOption {
  type: "with-folder"
  id: string
  label: string
  icon?: ReactNode
  onClick?: () => void
}

/**
 * Document upload option - File available for download with type badge
 * Icon: Paperclip
 */
export interface DocumentUploadOption {
  type: "document-upload"
  id: string
  label: string
  fileType?: "pdf" | "doc" | "docx" | "xlsx" | "pptx"
  icon?: ReactNode
  onClick?: () => void
}

/**
 * Condition option - Shows task conditions as tags (Split icon)
 * Up to 3 tags shown inline; 4+ shown in list/stack mode
 * Cannot coexist with one-automation
 */
export interface ConditionTag {
  id: string
  label: string
}

export interface ConditionOption {
  type: "condition"
  id: string
  conditions: ConditionTag[]
}

/**
 * Assignee option - User metadata with avatar
 */
export interface AssigneeOption {
  type: "assignee"
  id: string
  firstName: string
  lastName: string
  src?: string
  deactivated?: boolean
}

/**
 * ONE Automation is mutually exclusive with single-task, with-folder,
 * document-upload and condition. Only assignee can coexist with it.
 */
export type AutomationOnlyOption = OneAutomationOption | AssigneeOption

export type NonAutomationOption =
  | SingleTaskOption
  | WithFolderOption
  | DocumentUploadOption
  | ConditionOption
  | AssigneeOption

export type TaskOption =
  | SingleTaskOption
  | OneAutomationOption
  | WithFolderOption
  | DocumentUploadOption
  | ConditionOption
  | AssigneeOption

export interface CardTaskAIBadge {
  label: string
  variant?: "default" | "primary" | "success" | "warning" | "error"
  avatar?: ReactNode
}

export interface CardTaskAIProps {
  /** Type of task to determine icon and colors */
  taskType: TaskType
  /** Icon to display (typically an avatar or icon component) */
  icon: ReactNode
  /** Main title of the task */
  title: string
  /** Optional description of the task */
  description?: string
  /** List of flexible task options (1-5 items) */
  options: TaskOption[]
  /** Optional badge showing task status or metadata */
  badge?: CardTaskAIBadge
  /** Click handler when card is clicked */
  onClick?: () => void
  /** Optional action button (appears on hover) */
  actionLabel?: string
  /** Click handler for the action button */
  onAction?: () => void
  /** Additional className for styling */
  className?: string
  /** Test identifier */
  "data-testid"?: string
}
