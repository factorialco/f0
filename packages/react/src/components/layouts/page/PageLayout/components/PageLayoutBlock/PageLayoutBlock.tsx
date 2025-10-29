import { cn } from "@/lib/utils"
import { cva } from "cva"
import { forwardRef } from "react"
import { PageLayoutBlockComponent, PageLayoutBlockProps } from "./types"

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
