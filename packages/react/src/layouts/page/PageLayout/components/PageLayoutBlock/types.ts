import { IconType } from "@/components/F0Icon"
import { ReactElement } from "react"

export interface LayoutBlockActionItem {
  label: string
  description?: string
  icon?: IconType
  onClick: () => void
}

export interface LayoutBlockActionGroup {
  label?: string
  items: LayoutBlockActionItem[]
}

export interface PageLayoutBlockProps {
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
  actions?:
    | LayoutBlockActionItem[]
    | LayoutBlockActionGroup[]
    | LayoutBlockActionGroup
  /**
   * TODO: Limit the elements here to button or onebutton
   */
  primaryAction?: React.ReactNode
}

// Base marker interface for PageLayoutBlock components
export interface PageLayoutBlockComponent {
  __isPageLayoutBlock: true
  displayName?: string
}

// Type for components that inherit from PageLayoutBlock
export type PageLayoutBlockElement = ReactElement<PageLayoutBlockProps>
