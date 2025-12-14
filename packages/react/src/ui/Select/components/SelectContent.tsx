import { Spinner } from "@/experimental/Information/Spinner"
import { useReducedMotion } from "@/lib/a11y"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/ui/scrollarea"
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
import * as SelectPrimitive from "./radix-ui"

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
  showLoadingIndicator?: boolean
} & (
    | {
        value?: string[]
        multiple: true
      }
    | {
        value?: string
        multiple?: false
      }
  )

type SelectContentWithItemsProps = Omit<SelectItemProps, "children"> & {
  items: VirtualItem[]
  children?: never
}

type SelectContentWithChildrenProps = Omit<SelectItemProps, "children"> & {
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
  forceMinHeight?: boolean
  scrollMargin?: number
  taller?: boolean
  portalContainer?: HTMLElement | null
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
      taller = false,
      emptyMessage,
      onScrollBottom,
      onScrollTop,
      isLoadingMore,
      isLoading,
      scrollMargin,
      forceMinHeight,
      showLoadingIndicator,
      asChild,
      portalContainer,
      ...props
    },
    ref
  ) => {
    // ----------- Virtual list -----------
    // The scrollable element for your list
    const parentRef = useRef(null)
    const isVirtual = Array.isArray(items)

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
    const { value, open, as: asSelectProp } = useContext(SelectContext)

    const asList = asSelectProp === "list"

    const valueArray = useMemo(() => {
      return new Set(
        (Array.isArray(value) ? value : [value]).filter(
          (item) => item !== undefined
        )
      )
    }, [value])

    const positionIndex = useMemo(() => {
      return (
        items?.findIndex(
          (item) => item.value !== undefined && valueArray.has(item.value)
        ) || 0
      )
    }, [items, valueArray])

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
      // Measure the items when the animation is finished
      virtualizer.measure()
    }, [virtualizer, animationStarted, asList])

    useEffect(() => {
      // Scroll to selected item when position changes
      virtualizer.scrollToIndex(positionIndex)
    }, [virtualizer, positionIndex])

    const virtualItems = virtualizer.getVirtualItems()

    const viewportContent = isEmpty ? (
      <div className="flex h-full w-full items-center justify-center p-2">
        <p className="text-center">{emptyMessage || "-"}</p>
      </div>
    ) : isVirtual ? (
      <div
        className={cn(
          !asList && "transition-opacity delay-100",
          asList || virtualReady ? "" : "opacity-0",
          !asList && forceMinHeight ? "min-h-[450px]" : ""
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
                <div className="flex w-full items-center justify-center py-4">
                  <Spinner size="small" />
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
        ref={ref}
        asChild={asChild || asList}
        className={cn(
          "relative z-50 min-w-[8rem] overflow-hidden text-f1-foreground",
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
        // Prevent the default focus restoration when the select closes.
        // This avoids infinite focus loops when the select is inside a modal
        // or other focus-trapping container.
        onCloseAutoFocus={(event) => {
          // Call user's handler if provided
          if (
            props.onCloseAutoFocus &&
            typeof props.onCloseAutoFocus === "function"
          ) {
            props.onCloseAutoFocus(event)
          }
          // Always prevent the default behavior - the browser will naturally
          // return focus to the last focused element before the select opened
          event.preventDefault()
        }}
        onAnimationStart={() => {
          // Set the animation state to started as the elements are visible
          setAnimationStarted(true)
          setTimeout(() => {
            virtualizer.scrollToIndex(positionIndex, { align: "center" })
            setVirtualReady(true)
          })
        }}
      >
        {asList ? (
          // When rendering as list, wrap in a div so asChild has a proper element to merge with
          <div className="flex h-full flex-col overflow-hidden">
            {props.top}
            <div className="relative flex min-h-0 flex-1 flex-col">
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
                  "flex h-full flex-1 flex-col overflow-y-auto",
                  isEmpty && "justify-center",
                  loadingNewContent &&
                    "select-none opacity-10 transition-opacity"
                )}
                onScrollBottom={onScrollBottom}
                onScrollTop={onScrollTop}
                scrollMargin={scrollMargin}
              >
                {viewportContent}
              </ScrollArea>
            </div>
            {props.bottom}
          </div>
        ) : (
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
                  taller
                    ? "max-h-[min(460px,calc(var(--radix-select-content-available-height,460px)-110px))]"
                    : "max-h-[min(320px,calc(var(--radix-select-content-available-height,320px)))]",
                  forceMinHeight &&
                    "min-h-[min(450px,calc(var(--radix-select-content-available-height,450px)-110px))]",
                  isEmpty && "justify-center",
                  loadingNewContent &&
                    "select-none opacity-10 transition-opacity"
                )}
                onScrollBottom={onScrollBottom}
                onScrollTop={onScrollTop}
                scrollMargin={scrollMargin}
              >
                <SelectPrimitive.Viewport
                  asChild
                  className={cn(
                    "p-1",
                    position === "popper" &&
                      "h-[var(--radix-select-trigger-height)] w-full",
                    isEmpty && "flex h-full"
                  )}
                >
                  {viewportContent}
                </SelectPrimitive.Viewport>
              </ScrollArea>
            </div>
            {props.bottom}
          </>
        )}
      </SelectPrimitive.Content>
    )

    return asList ? (
      content
    ) : (
      <SelectPrimitive.Portal container={portalContainer}>
        <>
          {/* 
            Overlay to prevent clicks from propagating.
            Only render when NOT using a custom portal container to avoid
            conflicts with modal focus management.
          */}
          {open && !portalContainer && (
            <div
              className="pointer-events-auto fixed inset-0 z-40"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
              }}
            />
          )}
          {content}
        </>
      </SelectPrimitive.Portal>
    )
  }
)

SelectContent.displayName = SelectPrimitive.Content.displayName

export { SelectContent }
