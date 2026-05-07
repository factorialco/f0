import type { ReactNode } from "react"

export type TaskItemStatus = "completed" | "in-progress" | "pending" | "error"

export type OptionType = "text" | "automation" | "form" | "document" | "tags"

export interface TaskItem {
  id: string
  label: string
  status?: TaskItemStatus
}

/**
 * Text option - Simple description with list icon
 */
export interface TextOption {
  type: "text"
  id: string
  label: string
  icon?: ReactNode
}

/**
 * Automation option - Shows task is sent by ONE AI
 */
export interface AutomationOption {
  type: "automation"
  id: string
  label?: string
}

/**
 * Form option - Survey or form to fill
 */
export interface FormOption {
  type: "form"
  id: string
  label: string
  icon?: ReactNode
  onClick?: () => void
}

/**
 * Document option - File download with type badge (PDF, DOC, etc)
 */
export interface DocumentOption {
  type: "document"
  id: string
  label: string
  fileType?: "pdf" | "doc" | "docx" | "xlsx" | "pptx"
  icon?: ReactNode
  onClick?: () => void
}

/**
 * Tags option - Metadata pills/chips (location, role, category, etc)
 */
export interface Tag {
  id: string
  label: string
  icon?: ReactNode
}

export interface TagsOption {
  type: "tags"
  id: string
  tags: Tag[]
  icon?: ReactNode
}

export type TaskOption =
  | TextOption
  | AutomationOption
  | FormOption
  | DocumentOption
  | TagsOption

export interface CardTaskAIBadge {
  label: string
  variant?: "default" | "primary" | "success" | "warning" | "error"
  avatar?: ReactNode
}

export interface CardTaskAIProps {
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
  /** Additional className for styling */
  className?: string
  /** Test identifier */
  "data-testid"?: string
}
