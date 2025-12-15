import { cn } from "@/lib/utils"
import { createPageLayoutBlock } from "../utils"
import { Block, BlockProps } from "./Block"

// Make the additional props optional for the helper function
export interface BlockContentExtraProps {
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
}: BlockProps & BlockContentExtraProps) => {
  if (!title) return null

  const TitleTag = titleLevel

  return (
    <Block {...props} className={cn("space-y-4", className)}>
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

        {description && <p className="text-sm text-f1-foreground-secondary">{description}</p>}
      </div>

      <div className="flex-1">{children}</div>
    </Block>
  )
}

// Create the component using the helper function
export const BlockContent = createPageLayoutBlock("BlockContent", PageLayoutContentBlockComponent)
