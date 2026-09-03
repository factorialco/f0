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

import { useReducedMotion } from "@/lib/a11y"
import { cn } from "@/lib/utils"
import { F0DialogContext } from "@/patterns/F0Dialog"
import { ScrollArea } from "@/ui/scrollarea"
import { Spinner } from "@/ui/Spinner"

import { VirtualItem } from "../index"
import { SelectContext } from "../SelectContext"
import * as SelectPrimitive from "./radix-ui"

const VIEWBOX_VERTICAL_PADDING = 8

const TABBABLE_ELEMENT_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",")

/**
 * Select Content component
 */
// Define two different prop types for the two mutually exclusive scenarios
type SelectItemProps = ComponentPropsWithoutRef<
  typeof SelectPrimitive.Content
> & {
  top?: ReactNode
  bottom?: ReactNode
  right?: ReactNode
  emptyMessage?: string
  emptyAction?: ReactNode
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
  /**
   * When true, the dropdown sizes towards its widest option instead of the
   * default 20rem minimum. It remains at least as wide as the trigger when
   * space permits and never exceeds the available viewport width. Useful for
   * compact value pickers like month/year selectors.
   */
  fitContentWidth?: boolean
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
      emptyAction,
      onScrollBottom,
      onScrollTop,
      isLoadingMore,
      isLoading,
      scrollMargin,
      forceMinHeight,
      fitContentWidth = false,
      showLoadingIndicator,
      asChild,
      portalContainer,
      bottom,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      "aria-describedby": ariaDescribedBy,
      ...props
    },
    ref
  ) => {
    // If inside a dialog and no portalContainer is provided, use the dialog's container
    // only for center/fullscreen dialogs (which have focus trap).
    // For side panels (left/right), render in body to prevent clipping.
    const dialogContext = useContext(F0DialogContext)
    const shouldUseDialogContainer =
      dialogContext.portalContainer &&
      (dialogContext.position === "center" ||
        dialogContext.position === "fullscreen")

    const effectivePortalContainer =
      portalContainer !== undefined
        ? portalContainer
        : shouldUseDialogContainer
          ? dialogContext.portalContainer
          : undefined

    // ----------- Virtual list -----------
    // The scrollable element for your list
    const parentRef = useRef(null)
    const lastTabbedOptionRef = useRef<HTMLElement | null>(null)
    const isVirtual = Array.isArray(items)

    const isEmpty = useMemo(() => {
      if (isVirtual) {
        return items.every(
          (item) => !item.value && item.type !== "group-header"
        )
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

    /**
     * Where the selected item sits in the list, or -1 when it isn't there at all
     * (nothing selected, or its group is collapsed).
     *
     * `?? -1` rather than `|| 0`: `findIndex` returns -1 on a miss and `-1 || 0`
     * is `-1` — truthy — so the miss used to be handed to `scrollToIndex`, which
     * clamps it and scrolled the list to the top. A miss now means "don't scroll".
     */
    const positionIndex = useMemo(() => {
      return (
        items?.findIndex(
          (item) => item.value !== undefined && valueArray.has(item.value)
        ) ?? -1
      )
    }, [items, valueArray])

    const virtualizer = useVirtualizer({
      count: items?.length || 0,
      getScrollElement: () => parentRef.current,
      estimateSize: (i: number) => items?.[i]?.height || 0,
      getItemKey: (i: number) => items?.[i]?.key ?? i,
      overscan: 5,
      // Round measured heights to whole pixels. Sub-pixel values from
      // getBoundingClientRect() accumulate into translateY drift that is
      // visible as jitter while scrolling up.
      measureElement: (el) => Math.round(el.getBoundingClientRect().height),
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
      // Measure the items when the animation is finished.
      // Skip measurement when asList is true to prevent layout shifts from tooltips.
      if (!asList) {
        virtualizer.measure()
      }
    }, [virtualizer, animationStarted, asList])

    /**
     * REVEALING THE SELECTION IS AN OPENING GESTURE, once per session, not
     * something that happens again whenever its index moves.
     *
     * Keyed on the index, this re-ran mid-scroll: the index shifts whenever the
     * list above the selection changes — which is exactly what expanding or
     * collapsing a GROUP does — and the list jumped back under the pointer. So it
     * now fires for the first valid index of an open session and then stands down
     * until the list closes again.
     */
    const revealedSelection = useRef(false)
    useEffect(() => {
      // A closed list starts a fresh session. `asList` never closes, so its one
      // reveal is on mount.
      if (!open && !asList) revealedSelection.current = false
    }, [open, asList])
    useEffect(() => {
      if (revealedSelection.current || positionIndex < 0) return
      if (!open && !asList) return
      revealedSelection.current = true
      virtualizer.scrollToIndex(positionIndex)
    }, [asList, open, positionIndex, virtualizer])

    const virtualItems = virtualizer.getVirtualItems()

    const handleContentKeyDown: NonNullable<
      ComponentPropsWithoutRef<typeof SelectPrimitive.Content>["onKeyDown"]
    > = (event) => {
      props.onKeyDown?.(event)

      if (event.defaultPrevented || event.key !== "Tab") {
        return
      }

      const eventTarget = event.target as HTMLElement
      const content = event.currentTarget
      const focusedOption = eventTarget.closest<HTMLElement>('[role="option"]')

      if (
        focusedOption &&
        focusedOption.getAttribute("aria-disabled") !== "true"
      ) {
        lastTabbedOptionRef.current = focusedOption
      }

      const activeOption =
        focusedOption ??
        (lastTabbedOptionRef.current?.isConnected
          ? lastTabbedOptionRef.current
          : content.querySelector<HTMLElement>(
              '[role="option"][data-highlighted]:not([aria-disabled="true"]), [role="option"][data-state="checked"]:not([aria-disabled="true"]), [role="option"]:not([aria-disabled="true"])'
            ))
      const controls = Array.from(
        content.querySelectorAll<HTMLElement>(TABBABLE_ELEMENT_SELECTOR)
      ).filter(
        (element) =>
          (element.tabIndex >= 0 ||
            element.getAttribute("role") === "searchbox") &&
          !element.matches("[data-radix-scroll-area-viewport]") &&
          !element.closest(
            '[hidden], [aria-hidden="true"], [inert], [role="listbox"]'
          )
      )
      const currentControl =
        !focusedOption &&
        eventTarget !== content &&
        !eventTarget.closest('[role="listbox"]')
          ? eventTarget
          : undefined
      const focusTargets = Array.from(
        new Set([
          ...controls,
          ...(activeOption ? [activeOption] : []),
          ...(currentControl ? [currentControl] : []),
        ])
      ).sort((first, second) =>
        first.compareDocumentPosition(second) & Node.DOCUMENT_POSITION_FOLLOWING
          ? -1
          : 1
      )
      const currentFocusTarget = focusedOption ?? eventTarget
      const currentIndex = focusTargets.indexOf(currentFocusTarget)
      const nextFocusTarget =
        currentIndex >= 0
          ? focusTargets[currentIndex + (event.shiftKey ? -1 : 1)]
          : undefined

      if (nextFocusTarget) {
        event.preventDefault()
        nextFocusTarget.focus()
      }
    }

    const viewportContent = isEmpty ? (
      <div className="flex h-full w-full flex-col items-center justify-center p-2">
        <div role="option" aria-disabled="true">
          <p className="text-center">{emptyMessage || "-"}</p>
        </div>
      </div>
    ) : isVirtual ? (
      <div
        className={cn(
          !asList && "transition-opacity delay-100",
          asList || virtualReady ? "" : "opacity-0",
          !asList && forceMinHeight ? "min-h-[412px]" : ""
        )}
        style={{
          height: virtualizer.getTotalSize() + VIEWBOX_VERTICAL_PADDING,
          width: "100%",
          position: "relative",
          // ONE SCROLLPORT, and it is the ScrollArea's (`parentRef`, which is what
          // the virtualizer measures and scrolls). This div is Radix's
          // `Select.Viewport` via `asChild`, so Radix merges its own
          // `overflow: hidden auto; flex: 1 1 0%` onto it — a SECOND scroller
          // nested inside the first, and a spacer that flex could shrink below the
          // height the virtualizer just gave it. Both are overridden here, where
          // the child's style wins the merge: the wheel then moves one list
          // instead of handing off between two.
          overflow: "visible",
          flex: "none",
        }}
      >
        <div
          role="presentation"
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
              role="presentation"
              data-index={virtualItem.index}
              ref={virtualizer.measureElement}
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
      <div>{children}</div>
    )

    const loadingNewContent = isLoading && !isLoadingMore

    const content = (
      <SelectPrimitive.Content
        ref={ref}
        asChild={asChild}
        disableScrollLock={asList || !!effectivePortalContainer}
        className={cn(
          "relative z-50 text-f1-foreground",
          asList
            ? "flex w-full h-full flex-col"
            : "flex min-w-[8rem] flex-col overflow-hidden",
          !asList &&
            "rounded-md border border-solid border-f1-border-secondary bg-f1-background shadow-md data-[state=closed]:fade-out-0 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 motion-safe:data-[state=open]:animate-in motion-safe:data-[state=closed]:animate-out motion-safe:data-[state=open]:fade-in-0 motion-safe:data-[state=closed]:zoom-out-95 motion-safe:data-[state=open]:zoom-in-95 motion-safe:data-[side=bottom]:slide-in-from-top-2",
          !asList &&
            position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          !asList &&
            position === "popper" &&
            !forceMinHeight &&
            (fitContentWidth
              ? "w-max min-w-[var(--radix-select-trigger-width)] max-w-[var(--radix-select-content-available-width)]"
              : "min-w-80 w-[var(--radix-select-trigger-width)]"),
          !asList &&
            position === "popper" &&
            forceMinHeight &&
            "min-w-[32rem] w-[calc(var(--radix-select-trigger-width)+12rem)]",
          // Max-height: fixed cap so Radix can detect overflow and flip sides
          !asList && (taller ? "max-h-[412px]" : "max-h-[320px]"),
          // Hides the content when the virtual list is not ready
          !asList && isVirtual && !virtualReady && "opacity-0",
          className
        )}
        position={asList ? "item-aligned" : position}
        side={asList ? undefined : "bottom"}
        sideOffset={asList ? undefined : 4}
        collisionPadding={16}
        avoidCollisions
        {...props}
        onKeyDown={handleContentKeyDown}
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
        <div
          className="flex min-h-0 flex-1 flex-col"
          style={
            !asList
              ? {
                  maxHeight:
                    "var(--radix-select-content-available-height, 100%)",
                  ...(forceMinHeight
                    ? {
                        minHeight:
                          "min(412px, var(--radix-select-content-available-height, 412px))",
                      }
                    : {}),
                }
              : undefined
          }
        >
          {asList && !props.right && (
            <div className="flex-shrink-0">{props.top}</div>
          )}
          <div className="flex min-h-0 flex-1 flex-row overflow-hidden">
            <div
              className={cn(
                "relative flex flex-1 min-h-0 min-w-0 flex-col overflow-hidden",
                asList && "flex flex-col overflow-hidden flex-1 min-h-0"
              )}
            >
              {(!asList || props.right) && props.top}
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
                  "flex h-full flex-col",
                  isEmpty ? "justify-center" : "pb-1",
                  loadingNewContent &&
                    "select-none opacity-10 transition-opacity"
                )}
                onScrollBottom={onScrollBottom}
                onScrollTop={onScrollTop}
                scrollMargin={scrollMargin}
              >
                {asList ? (
                  <SelectPrimitive.Listbox
                    asChild
                    aria-label={ariaLabel}
                    aria-labelledby={ariaLabelledBy}
                    aria-describedby={ariaDescribedBy}
                  >
                    <div className="min-h-0 p-1">{viewportContent}</div>
                  </SelectPrimitive.Listbox>
                ) : (
                  <SelectPrimitive.Listbox
                    asChild
                    aria-label={ariaLabel}
                    aria-labelledby={ariaLabelledBy}
                    aria-describedby={ariaDescribedBy}
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
                  </SelectPrimitive.Listbox>
                )}
              </ScrollArea>
            </div>
            {props.right}
          </div>
          {(isEmpty && emptyAction) || bottom ? (
            <div className="shrink-0">
              {isEmpty && emptyAction && (
                <div className="w-full border-0 border-t border-solid border-f1-border-secondary p-2">
                  {emptyAction}
                </div>
              )}
              {bottom}
            </div>
          ) : null}
        </div>
      </SelectPrimitive.Content>
    )

    return asList ? (
      content
    ) : (
      <SelectPrimitive.Portal container={effectivePortalContainer}>
        <>
          {/*
            Overlay to prevent clicks from propagating.
            Only render when NOT using a custom portal container to avoid
            conflicts with modal focus management.
          */}
          {open && !effectivePortalContainer && (
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
