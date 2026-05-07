import type { ReactNode } from "react"

export type TaskItemStatus = "completed" | "in-progress" | "pending" | "error"

export interface TaskItem {
  id: string
  label: string
  status?: TaskItemStatus
}

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
  /** List of task items to complete */
  tasks: TaskItem[]
  /** Optional badge showing task status or metadata */
  badge?: CardTaskAIBadge
  /** Click handler when card is clicked */
  onClick?: () => void
  /** Additional className for styling */
  className?: string
  /** Test identifier */
  "data-testid"?: string
}
