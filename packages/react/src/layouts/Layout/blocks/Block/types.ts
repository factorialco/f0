import { IconType } from "@/components/F0Icon"
import { ReactElement } from "react"

export interface BlockActionItem {
  label: string
  description?: string
  icon?: IconType
  onClick: () => void
}

export interface BlockActionGroup {
  label?: string
  items: BlockActionItem[]
}

export interface BlockProps {
  children: React.ReactNode
  variant?: "default" | "full-width" | "full"
  fullHeight?: boolean
  className?: string
  // Drag and drop props (for future implementation)
  draggable?: boolean
  onDragStart?: (e: React.DragEvent) => void
  onDragEnd?: (e: React.DragEvent) => void
  onDrop?: (e: React.DragEvent) => void
  dragId?: string
  /**
   * The actions to display in the block.
   */
  actions?: BlockActionItem[] | BlockActionGroup[] | BlockActionGroup
  /**
   * TODO: Limit the elements here to button or onebutton
   */
  primaryAction?: React.ReactNode
}

// Type for components that inherit from PageLayoutBlock
export type BlockElement = ReactElement<BlockProps>
