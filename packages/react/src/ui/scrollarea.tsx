"use client"

import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
import {
  forwardRef,
  useEffect,
  useRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react"

import { cn } from "../lib/utils"

const ScrollArea = forwardRef<
  ElementRef<typeof ScrollAreaPrimitive.Root>,
  ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> & {
    showBar?: boolean
    viewportRef?: React.RefObject<HTMLDivElement>
    onScrollTop?: () => void
    onScrollBottom?: () => void
    /**
     * The margin to add to the scroll area when the user is at the top or bottom of the scroll area.
     * @default 0
     */
    scrollMargin?: number
  }
>(
  (
    {
      className,
      children,
      showBar = true,
      viewportRef,
      onScrollTop,
      onScrollBottom,
      scrollMargin = 0,
      ...props
    },
    ref
  ) => {
    const internalViewportRef = useRef<HTMLDivElement | null>(null)
    const localViewportRef = viewportRef ?? internalViewportRef

    useEffect(() => {
      const handleScroll = (e: Event) => {
        const target = e.target as HTMLElement
        const { scrollTop, scrollHeight, clientHeight } = target

        // Check if scrolled to top
        if (scrollTop - scrollMargin <= 0 && onScrollTop) {
          onScrollTop()
        }

        // Check if scrolled to bottom
        if (
          scrollTop + clientHeight + scrollMargin >= scrollHeight &&
          onScrollBottom
        ) {
          onScrollBottom()
        }
      }
      const localViewport = localViewportRef.current
      localViewport?.addEventListener("scroll", handleScroll)

      return () => {
        localViewport?.removeEventListener("scroll", handleScroll)
      }
    }, [localViewportRef.current, onScrollBottom, onScrollTop, scrollMargin])

    return (
      <ScrollAreaPrimitive.Root
        ref={ref}
        className={cn("relative overflow-hidden", className)}
        scrollHideDelay={200}
        {...props}
      >
        <ScrollAreaPrimitive.Viewport
          ref={localViewportRef}
          className="size-full snap-none rounded-[inherit] [&>div]:!block"
          tabIndex={0}
          data-scroll-container
        >
          {children}
        </ScrollAreaPrimitive.Viewport>
        <ScrollBar orientation="vertical" showBar={showBar} />
        <ScrollBar orientation="horizontal" showBar={showBar} />
        <ScrollAreaPrimitive.Corner />
      </ScrollAreaPrimitive.Root>
    )
  }
)
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = forwardRef<
  ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar> & {
    showBar?: boolean
  }
>(({ className, orientation = "vertical", showBar = true, ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "group/scrollbar z-50 flex touch-none select-none p-[1px]",
      "transition-opacity data-[state=hidden]:pointer-events-none data-[state=visible]:pointer-events-auto data-[state=hidden]:opacity-0 data-[state=visible]:opacity-100",
      orientation === "vertical" && "h-full w-2",
      orientation === "horizontal" && "h-2 flex-col",
      className
    )}
    {...props}
  >
    {showBar && (
      <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-f1-background-inverse opacity-30 transition-opacity group-hover/scrollbar:opacity-50" />
    )}
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }
