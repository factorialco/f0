import { Spinner } from "@/experimental/Information/Spinner"
import { useReducedMotion } from "@/lib/a11y"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/ui/scrollarea"
import * as SelectPrimitive from "@radix-ui/react-select"
import { useVirtualizer } from "@tanstack/react-virtual"
import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { VirtualItem } from "../index"
import { SelectContext } from "../SelectContext"

const VIEWBOX_VERTICAL_PADDING = 8

/**
 * Select Content component
 */
// Define two different prop types for the two mutually exclusive scenarios
type SelectItemProps = ComponentPropsWithoutRef<
  typeof SelectPrimitive.Content
> & {
  top?: ReactNode
  bottom?: ReactNode
  emptyMessage?: string
  value?: string
  showLoadingIndicator?: boolean
}

type BaseSelectContentProps = Omit<SelectItemProps, "children">

type SelectContentWithItemsProps = BaseSelectContentProps & {
  items: VirtualItem[]
  children?: never
}

type SelectContentWithChildrenProps = SelectItemProps & {
  items?: never
  children: ReactNode
}

// Union the types to create a discriminated union to avoid use children and items at the same time
type SelectContentProps = (
  | SelectContentWithItemsProps
  | SelectContentWithChildrenProps
) & {
  onScrollBottom?: () => void
  onScrollTop?: () => void
  isLoadingMore?: boolean
  isLoading?: boolean
  scrollMargin?: number
}

const SelectContent = forwardRef<
  ElementRef<typeof SelectPrimitive.Content>,
  SelectContentProps
>(
  (
    {
      items = undefined,
      className,
      children,
      position = "popper",
      emptyMessage,
      onScrollBottom,
      onScrollTop,
      isLoadingMore,
      isLoading,
      scrollMargin,
      showLoadingIndicator,
      ...props
    },
    ref
  ) => {
    // ----------- Virtual list -----------
    // The scrollable element for your list
    const parentRef = useRef(null)
    const isVirtual = Array.isArray(items)

    const i18n = useI18n()

    const isEmpty = useMemo(() => {
      if (isVirtual) {
        return items.filter((item) => item.value).length === 0
      }
      return !children
    }, [isVirtual, items, children])

    const prefersReducedMotion = useReducedMotion()
    // State to check if the virtual list is ready and the scroll in the correct position
    const [virtualReady, setVirtualReady] = useState(prefersReducedMotion)
    // State to check if the radixui animation has started
    const [animationStarted, setAnimationStarted] = useState(false)

    // Get the value and the open status from the select context
    const { value, open, asList } = useContext(SelectContext)

    const positionIndex = useMemo(() => {
      return (items && items.findIndex((item) => item.value === value)) || 0
    }, [items, value])

    const virtualizer = useVirtualizer({
      count: items?.length || 0,
      getScrollElement: () => parentRef.current,
      estimateSize: (i: number) => items?.[i]?.height || 0,
      overscan: 5,
      // If the content is a list, we need to check if the animation is enabled
      enabled: asList || prefersReducedMotion || animationStarted,
    })

    useEffect(() => {
      // Reset the animation state when the select is closed
      if (!open) {
        setAnimationStarted(false)
        setVirtualReady(true)
      }
    }, [open])

    useEffect(() => {
      // Measure the items when the animation is finished and scroll to item
      virtualizer.measure()
      virtualizer.scrollToIndex(positionIndex)
    }, [virtualizer, positionIndex, animationStarted, asList])

    const virtualItems = virtualizer.getVirtualItems()

    const viewportContent = isEmpty ? (
      <p className={cn("flex items-center justify-center p-2", "min-h-[80px]")}>
        {emptyMessage || "-"}
      </p>
    ) : isVirtual ? (
      <div
        className={cn(
          !asList && "transition-opacity delay-100",
          asList || virtualReady ? "" : "opacity-0"
        )}
        style={{
          height: virtualizer.getTotalSize() + VIEWBOX_VERTICAL_PADDING,
          width: "100%",
          position: "relative",
        }}
      >
        <div
          style={{
            top: 0,
            left: 0,
            width: "100%",
            transform: `translateY(${virtualItems[0]?.start ?? 0}px)`,
          }}
        >
          {virtualItems.map((virtualItem, index) => (
            <div
              key={virtualItem.key}
              data-index={virtualItem.index}
              ref={virtualizer.measureElement}
              tabIndex={virtualItem.index === positionIndex ? 0 : -1}
            >
              {isLoadingMore && index === virtualItems.length - 1 ? (
                <div className="h-10 w-full py-2 text-center">
                  {i18n.select.loadingMore}
                </div>
              ) : (
                items[virtualItem.index].item
              )}
            </div>
          ))}
        </div>
      </div>
    ) : (
      <>{children}</>
    )

    const loadingNewContent = isLoading && !isLoadingMore

    const content = (
      <SelectPrimitive.Content
        asChild={asList}
        ref={ref}
        className={cn(
          "relative z-50 max-h-96 min-w-[8rem] overflow-hidden text-f1-foreground",
          !asList &&
            "rounded-md border border-solid border-f1-border-secondary bg-f1-background shadow-md data-[state=closed]:fade-out-0 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 motion-safe:data-[state=open]:animate-in motion-safe:data-[state=closed]:animate-out motion-safe:data-[state=open]:fade-in-0 motion-safe:data-[state=closed]:zoom-out-95 motion-safe:data-[state=open]:zoom-in-95 motion-safe:data-[side=bottom]:slide-in-from-top-2",
          !asList &&
            position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          !asList &&
            position === "popper" &&
            "min-w-[var(--radix-select-trigger-width)] max-w-[min(calc(var(--radix-select-trigger-width)*2.5),450px)]",
          className,
          // Hides the content when the virtual list is not ready
          !asList && isVirtual && !virtualReady && "opacity-0"
        )}
        position={asList ? "item-aligned" : position}
        collisionPadding={16}
        {...props}
        onAnimationStart={() => {
          // Set the animation state to started as the elements are visible
          setAnimationStarted(true)
          setTimeout(() => {
            virtualizer.scrollToIndex(positionIndex, { align: "center" })
            setVirtualReady(true)
          })
        }}
      >
        <>
          {props.top}
          <div className="relative">
            {showLoadingIndicator && loadingNewContent && (
              <div
                className="absolute inset-0 flex cursor-progress items-center justify-center"
                aria-live="polite"
                aria-busy="true"
              >
                <Spinner />
              </div>
            )}
            <ScrollArea
              viewportRef={parentRef}
              className={cn(
                "flex flex-col overflow-y-auto",
                asList ? "max-h-full" : "max-h-[300px]",
                loadingNewContent && "select-none opacity-10 transition-opacity"
              )}
              onScrollBottom={onScrollBottom}
              onScrollTop={onScrollTop}
              scrollMargin={scrollMargin}
            >
              {asList ? (
                viewportContent
              ) : (
                <SelectPrimitive.Viewport
                  asChild
                  className={cn(
                    "p-1",
                    !asList &&
                      position === "popper" &&
                      "h-[var(--radix-select-trigger-height)] w-full"
                  )}
                >
                  {viewportContent}
                </SelectPrimitive.Viewport>
              )}
            </ScrollArea>
          </div>
          {props.bottom}
        </>
      </SelectPrimitive.Content>
    )

    return asList ? (
      content
    ) : (
      <SelectPrimitive.Portal>{content}</SelectPrimitive.Portal>
    )
  }
)

SelectContent.displayName = SelectPrimitive.Content.displayName

export { SelectContent }
