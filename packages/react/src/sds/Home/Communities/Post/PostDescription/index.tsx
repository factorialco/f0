import { forwardRef } from "react"

import { RichTextDisplay } from "@/components/RichText/RichTextDisplay"
import { Skeleton } from "@/ui/skeleton"

import { withSkeleton } from "../../../../../lib/skeleton"
import { cn } from "../../../../../lib/utils"

type HTMLString = string

export type PostDescriptionProps = {
  content: HTMLString
  collapsed?: boolean
  id?: string
  className?: string
  tabIndex?: number
}
export const BasePostDescription = forwardRef<
  HTMLDivElement,
  PostDescriptionProps
>(function BasePostDescription(
  { content, collapsed, id, className, tabIndex }: PostDescriptionProps,
  ref
) {
  return (
    <RichTextDisplay
      ref={ref}
      id={id}
      content={content}
      tabIndex={tabIndex}
      className={cn(
        "FactorialOneTextEditor",
        collapsed && "line-clamp-5 break-words",
        className
      )}
    />
  )
})

export const PostDescriptionSkeleton = () => (
  <div className="flex flex-col justify-around gap-3 py-2">
    <Skeleton className="h-2.5 w-1/2 rounded-2xs" />
    <Skeleton className="h-2.5 w-2/3 rounded-2xs" />
  </div>
)

export const PostDescription = withSkeleton(
  BasePostDescription,
  PostDescriptionSkeleton
)
