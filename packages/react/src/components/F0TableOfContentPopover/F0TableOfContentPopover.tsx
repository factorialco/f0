"use client"

import { cn, focusRing } from "@/lib/utils"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/ui/hover-card"
import { cva } from "cva"
import { F0TableOfContent } from "../../experimental/Navigation/F0TableOfContent"
import { CollapsedBars } from "./components/CollapsedBars"
import { F0TableOfContentPopoverProps } from "./internal-types"

const CLOSE_DELAY = 300
const OPEN_DELAY = 0

const contentVariants = cva({
  base: "w-auto overflow-y-auto rounded-lg border border-solid border-f1-border-secondary bg-f1-background p-0 shadow-lg",
  variants: {
    size: {
      sm: "max-h-[240px]",
      md: "max-h-[400px]",
      lg: "max-h-[600px]",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

/**
 * Internal implementation of the TableOfContentPopover component.
 * This component includes all props including private ones.
 */
export function F0TableOfContentPopover({
  title,
  items,
  className,
  activeItem,
  collapsible = false,
  showChildrenCounter = false,
  barsAlign = "left",
  size = "md",
  variant = "light",
}: F0TableOfContentPopoverProps) {
  return (
    <HoverCard openDelay={OPEN_DELAY} closeDelay={CLOSE_DELAY}>
      <HoverCardTrigger asChild>
        <button
          className={cn(
            focusRing(),
            "flex cursor-pointer items-center rounded-md px-1.5 py-1",
            className
          )}
          aria-label={title ?? "Menu"}
        >
          <CollapsedBars
            items={items}
            activeItem={activeItem}
            align={barsAlign}
            variant={variant}
          />
        </button>
      </HoverCardTrigger>
      <HoverCardContent
        side={barsAlign === "left" ? "right" : "left"}
        align="center"
        sideOffset={-28}
        className={contentVariants({ size })}
      >
        <F0TableOfContent
          title={title}
          items={items}
          activeItem={activeItem}
          collapsible={collapsible}
          hideChildrenCounter={!showChildrenCounter}
          scrollable={false}
          className={cn(!title && "pt-2")}
        />
      </HoverCardContent>
    </HoverCard>
  )
}
