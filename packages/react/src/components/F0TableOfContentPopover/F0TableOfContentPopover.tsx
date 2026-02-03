"use client"

import { cva } from "cva"
import { useCallback, useRef, useState } from "react"

import { cn, focusRing } from "@/lib/utils"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/ui/hover-card"

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
  const [isOpen, setIsOpen] = useState(false)
  const shouldScrollRef = useRef(false)

  const handleOpenChange = (nextIsOpenStatus: boolean) => {
    const isOpening = nextIsOpenStatus && !isOpen
    if (isOpening) {
      shouldScrollRef.current = true
    }
    setIsOpen(nextIsOpenStatus)
  }

  const contentRefCallback = useCallback((container: HTMLDivElement | null) => {
    if (!container || !shouldScrollRef.current) return

    shouldScrollRef.current = false

    requestAnimationFrame(() => {
      container
        .querySelector("[data-active]")
        ?.scrollIntoView({ block: "center", behavior: "smooth" })
    })
  }, [])

  return (
    <HoverCard
      open={isOpen}
      onOpenChange={handleOpenChange}
      openDelay={OPEN_DELAY}
      closeDelay={CLOSE_DELAY}
    >
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
        ref={contentRefCallback}
        side={barsAlign === "left" ? "right" : "left"}
        align="center"
        sideOffset={-28}
        className={cn(
          contentVariants({ size }),
          !title && "pt-2",
          "scrollbar-macos"
        )}
      >
        <F0TableOfContent
          title={title}
          items={items}
          activeItem={activeItem}
          collapsible={collapsible}
          hideChildrenCounter={!showChildrenCounter}
          scrollable={false}
        />
      </HoverCardContent>
    </HoverCard>
  )
}
