"use client"

import { cva } from "cva"
import { useCallback, useRef, useState } from "react"

import { cn, focusRing } from "@/lib/utils"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/ui/hover-card"

import { F0TableOfContent } from "@/patterns/Navigation/F0TableOfContent"
import { CollapsedBars } from "./components/CollapsedBars"
import { F0TableOfContentPopoverProps } from "./internal-types"
import { useDeferredClose } from "./useDeferredClose"

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
  sortable,
  onReorder,
  showChildrenCounter = false,
  barsAlign = "left",
  size = "md",
  variant = "light",
  portalContainer,
}: F0TableOfContentPopoverProps) {
  const [isOpen, setIsOpen] = useState(false)
  const shouldScrollRef = useRef(false)
  const contentRef = useRef<HTMLDivElement | null>(null)

  const { deferClose } = useDeferredClose(contentRef, () => setIsOpen(false))

  const handleOpenChange = (nextOpen: boolean) => {
    // When a nested dropdown is open, defer the close until the dropdown
    // is dismissed or the pointer leaves both surfaces.
    if (!nextOpen && deferClose()) return

    if (nextOpen && !isOpen) {
      shouldScrollRef.current = true
    }
    setIsOpen(nextOpen)
  }

  const contentRefCallback = useCallback((container: HTMLDivElement | null) => {
    contentRef.current = container
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
        container={portalContainer}
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
          sortable={sortable}
          onReorder={onReorder}
          hideChildrenCounter={!showChildrenCounter}
          scrollable={false}
        />
      </HoverCardContent>
    </HoverCard>
  )
}
