import { cn } from "@/lib/utils"
import { cva } from "cva"
import { forwardRef } from "react"

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

const variants = cva({
  base: "flex w-full flex-col p-4",
  variants: {
    variant: {
      default: "",
      "full-width": "px-0",
      full: "p-0",
    },
  },
})

export const PageLayoutBlock = forwardRef<HTMLDivElement, PageLayoutBlockProps>(
  (
    {
      children,
      variant = "default",
      className,
      draggable = false,
      onDragStart,
      onDragEnd,
      onDrop,
      dragId,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(variants({ variant }), className)}
        draggable={draggable}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDrop={onDrop}
        data-drag-id={dragId}
        {...props}
      >
        {children}
      </div>
    )
  }
)

PageLayoutBlock.displayName = "PageLayoutBlock"
// Mark as a valid PageLayoutBlock component
;(PageLayoutBlock as unknown as PageLayoutBlockComponent).__isPageLayoutBlock =
  true

// Helper function to create components that inherit from PageLayoutBlock
export const createPageLayoutBlock = <T extends Record<string, unknown>>(
  displayName: string,
  Component: React.ComponentType<PageLayoutBlockProps & T>
): React.ComponentType<PageLayoutBlockProps & T> => {
  const WrappedComponent = Component as React.ComponentType<
    PageLayoutBlockProps & T
  > &
    PageLayoutBlockComponent
  WrappedComponent.displayName = displayName
  WrappedComponent.__isPageLayoutBlock = true
  return WrappedComponent
}
