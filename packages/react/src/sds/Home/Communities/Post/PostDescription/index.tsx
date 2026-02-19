import { Skeleton } from "@/ui/skeleton"

import { withSkeleton } from "../../../../../lib/skeleton"
import { cn } from "../../../../../lib/utils"
import { RichTextDisplay } from "@/experimental/RichText/RichTextDisplay"

import "./TextEditorTheme.css"

type HTMLString = string

export type PostDescriptionProps = {
  content: HTMLString
  collapsed?: boolean
}
export const BasePostDescription = ({
  content,
  collapsed,
}: PostDescriptionProps) => {
  const className = "FactorialOneTextEditor"

  return (
    <RichTextDisplay
      content={content}
      className={cn(className, collapsed && "line-clamp-5")}
    />
  )
}

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
