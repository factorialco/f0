"use client"

import { experimentalComponent } from "@/lib/experimental"
import { cn, focusRing } from "@/lib/utils"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/ui/hover-card"

import { F0TableOfContent, TOCItem, TOCProps } from "../F0TableOfContent"
import { CollapsedBars } from "./CollapsedBars"

export type PopupSize = "sm" | "md" | "lg"
export type CollapsibleMenuVariant = "dark" | "light"

const sizeClasses: Record<PopupSize, string> = {
  sm: "max-h-[240px]",
  md: "max-h-[400px]",
  lg: "max-h-[600px]",
}

const CLOSE_DELAY = 200
const OPEN_DELAY = 0

export interface F0CollapsibleMenuProps extends Omit<
  TOCProps,
  "sortable" | "onReorder" | "showSearchBox" | "title" | "hideChildrenCounter"
> {
  /** Optional title displayed at the top of the menu popup */
  title?: string
  /** Alignment of the collapsed bars (left or right) */
  barsAlign?: "left" | "right"
  /** Whether sections can be collapsed/expanded */
  collapsible?: boolean
  /** Show the count of children items next to parent items */
  showChildrenCounter?: boolean
  /** Maximum height of the popup: sm (max 240px), md (max 400px), lg (max 600px). Content auto-adjusts within limit. */
  size?: PopupSize
  /** Alignment of the popup content */
  popupAlign?: "center" | "start" | "end"
  /** Visual variant: "dark" for light backgrounds (default), "light" for dark backgrounds */
  variant?: CollapsibleMenuVariant
}

function _F0CollapsibleMenu({
  title,
  items,
  className,
  activeItem,
  collapsible = false,
  showChildrenCounter = false,
  barsAlign = "left",
  size = "md",
  popupAlign = "center",
  variant = "dark",
}: F0CollapsibleMenuProps) {
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
        align={popupAlign}
        sideOffset={-28}
        className={cn(
          "w-auto overflow-y-auto rounded-lg border border-solid border-f1-border-secondary bg-f1-background p-0 shadow-lg",
          sizeClasses[size]
        )}
      >
        <F0TableOfContent
          title={title}
          items={items}
          activeItem={activeItem}
          collapsible={collapsible}
          hideChildrenCounter={!showChildrenCounter}
          scrollable={false}
          className={!title ? "pt-2" : undefined}
        />
      </HoverCardContent>
    </HoverCard>
  )
}

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const F0CollapsibleMenu = experimentalComponent(
  "F0CollapsibleMenu",
  _F0CollapsibleMenu
)

export type { TOCItem as CollapsibleMenuItem }
