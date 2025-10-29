import { cn } from "@/lib/utils"
import { ReactNode } from "react"
import {
  PageLayoutBlock,
  PageLayoutBlockProps,
  createPageLayoutBlock,
} from "./PageLayoutBlock/PageLayoutBlock"

export interface PageLayoutContentBlockProps extends PageLayoutBlockProps {
  title: string
  description?: string
  titleLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  children: ReactNode
}

// Make the additional props optional for the helper function
interface ContentBlockExtraProps {
  title?: string
  description?: string
  titleLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

const PageLayoutContentBlockComponent = ({
  title = "",
  description,
  titleLevel = "h2",
  children,
  className,
  ...props
}: PageLayoutBlockProps & ContentBlockExtraProps) => {
  if (!title) return null

  const TitleTag = titleLevel

  return (
    <PageLayoutBlock {...props} className={cn("space-y-4", className)}>
      <div className="space-y-2">
        <TitleTag
          className={cn("font-semibold text-f1-foreground", {
            "text-2xl": titleLevel === "h1",
            "text-xl": titleLevel === "h2",
            "text-lg": titleLevel === "h3",
            "text-base": titleLevel === "h4",
            "text-sm": titleLevel === "h5",
            "text-xs": titleLevel === "h6",
          })}
        >
          {title}
        </TitleTag>

        {description && (
          <p className="text-sm text-f1-foreground-secondary">{description}</p>
        )}
      </div>

      <div className="flex-1">{children}</div>
    </PageLayoutBlock>
  )
}

// Create the component using the helper function
export const PageLayoutContentBlock = createPageLayoutBlock(
  "PageLayoutContentBlock",
  PageLayoutContentBlockComponent
)
