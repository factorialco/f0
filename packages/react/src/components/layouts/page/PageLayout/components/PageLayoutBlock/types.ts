import { ReactElement } from "react"

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
}

// Base marker interface for PageLayoutBlock components
export interface PageLayoutBlockComponent {
  __isPageLayoutBlock: true
  displayName?: string
}

// Type for components that inherit from PageLayoutBlock
export type PageLayoutBlockElement = ReactElement<PageLayoutBlockProps>
