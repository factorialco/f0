import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
import {
  forwardRef,
  type HTMLAttributes,
  type ReactNode,
  type MutableRefObject,
  useCallback,
  useMemo,
  useRef,
} from "react"
import { GroupedVirtuoso, type GroupedVirtuosoHandle } from "react-virtuoso"

import { EmojiImage } from "@/lib/emojis"
import { cn } from "@/lib/utils"

import { type EmojiEntry } from "../../utils/emoji-index"
import { emojiButtonClass, EMOJI_BUTTON_SIZE } from "./button"
import { ScrollBar } from "@/ui/scrollarea"

import { type EmojiLayout, type EmojiSection } from "./layout"

/**
 * Nine cells of 32px fill the 288px between the panel's 8px gutters exactly, so
 * the grid, the jump bar and the search box all share one column grid. (It was
 * eight 36px cells before the buttons went to F0's `md` size.)
 */
export const EMOJI_COLUMNS = 9
/** Row height is handed to Virtuoso so it can size the scroller before a single
 * row has been measured — no first-paint jump. */
export const EMOJI_ROW_HEIGHT = EMOJI_BUTTON_SIZE

/**
 * Breathing room at both ends of the scroller.
 *
 * As Virtuoso `components` rather than padding on the scroller itself: these
 * get measured like any other content, so `scrollToIndex` and the sticky group
 * headers still land where they should. Padding on the scroll container would
 * quietly offset both.
 */
const GridSpacer = () => <div className="h-2" />

type EmojiScrollerContext = {
  /** The Radix viewport, so the grid can size its content wrapper — see
   * {@link EmojiScroller}. */
  viewportRef: MutableRefObject<HTMLDivElement | null>
}

/**
 * Virtuoso's scroll container, backed by Radix ScrollArea — the same treatment
 * the message transcript gets, so the picker's scrollbar is F0's thin overlay
 * rather than the platform's.
 *
 * Two things are load-bearing, both learned in `ChatMessagesContainer`:
 *
 * Virtuoso's `style` and props go on the **viewport**, not the root. The
 * viewport is what scrolls, what Virtuoso's forwarded ref listens on, and — via
 * the `position: relative` in that style — the containing block Virtuoso's
 * absolutely positioned inner viewport sizes against.
 *
 * And the list height has to be published to Radix by hand. Radix sizes the
 * thumb from a ResizeObserver on its content wrapper, but Virtuoso's inner
 * viewport is absolute, so the wrapper never grows on its own and the thumb
 * would stay frozen at its mount size. The transcript solves this with a
 * zero-width strip mirroring the total height; here that strip cannot be a
 * sibling of the sticky group header, because it would sit *before* it in flow
 * and push the header's static position 8,000px down — which is precisely how
 * "Frequently used" ended up invisible. So `min-height` goes straight on the
 * wrapper instead: same ResizeObserver, no extra element, nothing to reorder.
 * Reaching for that wrapper is already an assumption `@/ui/scrollarea` makes.
 */
const EmojiScroller = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & { context: EmojiScrollerContext }
>(function EmojiScroller(
  { style, children, className, context, ...props },
  ref
) {
  const setViewport = useCallback(
    (node: HTMLDivElement | null) => {
      context.viewportRef.current = node
      if (typeof ref === "function") ref(node)
      else if (ref) ref.current = node
    },
    [ref, context]
  )

  return (
    <ScrollAreaPrimitive.Root
      className={cn("overflow-hidden", className)}
      scrollHideDelay={200}
    >
      <ScrollAreaPrimitive.Viewport
        ref={setViewport}
        style={style}
        // Radix wraps children in a `display: table` div — force block so the
        // rows lay out full-width (same fix as @/ui/scrollarea).
        className="size-full [&>div]:!block"
        {...props}
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar orientation="vertical" />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
})

type EmojiGridProps = {
  sections: EmojiSection[]
  layout: EmojiLayout
  activeIndex: number
  onActivate: (index: number) => void
  onSelect: (emoji: EmojiEntry) => void
  listboxId: string
  label: string
  optionId: (index: number) => string
  /** Topmost rendered row — the jump-to bar highlights whatever section it
   * belongs to. */
  onTopRowChange: (row: number) => void
}

/**
 * The virtualized emoji grid.
 *
 * Focus never comes here: the search box keeps it and points at the active cell
 * through `aria-activedescendant`, which is what lets someone type `fir` and
 * press Enter without a trip to the grid. Cells are therefore `tabIndex={-1}`
 * and the active one is marked with `aria-selected`, not with DOM focus — a
 * virtualized cell can be unmounted, and focus can't live on a node that isn't
 * there.
 */
export const EmojiGrid = forwardRef<GroupedVirtuosoHandle, EmojiGridProps>(
  function EmojiGrid(
    {
      sections,
      layout,
      activeIndex,
      onActivate,
      onSelect,
      listboxId,
      label,
      optionId,
      onTopRowChange,
    },
    ref
  ): ReactNode {
    const viewportRef = useRef<HTMLDivElement | null>(null)
    const context = useMemo(() => ({ viewportRef }), [])

    const handleListHeightChanged = useCallback((height: number) => {
      const wrapper = viewportRef.current?.firstElementChild
      if (wrapper instanceof HTMLElement) {
        wrapper.style.minHeight = `${height}px`
      }
    }, [])

    return (
      <GroupedVirtuoso
        ref={ref}
        id={listboxId}
        role="listbox"
        aria-label={label}
        // The panel owns the height and clamps it to what the popover can have;
        // the grid just takes whatever is left after the search box and the
        // category bar. `flex-1 min-h-0` on the scroller is what makes that
        // "whatever is left" a real number for Virtuoso to size against.
        className="min-h-0 flex-1"
        style={{ height: "100%" }}
        context={context}
        components={{
          Scroller: EmojiScroller,
          Header: GridSpacer,
          Footer: GridSpacer,
        }}
        totalListHeightChanged={handleListHeightChanged}
        groupCounts={layout.groupCounts}
        // `defaultItemHeight`, NOT `fixedItemHeight`: the latter switches
        // measurement off for group headers too (`fixedGroupHeight` is
        // documented as having no effect without it), so every header — a 24px
        // category label, or the zero-height one a search renders — got booked
        // as a full row. That phantom row was the gap above the results.
        defaultItemHeight={EMOJI_ROW_HEIGHT}
        rangeChanged={({ startIndex }) => onTopRowChange(startIndex)}
        groupContent={(index) => {
          const label = sections[index]?.label
          // A search is one unlabelled block. The group still exists, so this
          // has to collapse to nothing rather than merely look empty.
          if (!label) return <div className="h-0" />
          return (
            <div className="bg-f1-background px-2 pb-1 pt-2 text-xs font-medium uppercase tracking-wide text-f1-foreground-secondary">
              {label}
            </div>
          )
        }}
        itemContent={(rowIndex) => {
          const row = layout.rows[rowIndex]
          if (!row) return null
          return (
            <div className="flex px-2" style={{ height: EMOJI_ROW_HEIGHT }}>
              {row.emojis.map((emoji, column) => {
                const index = row.startIndex + column
                const isActive = index === activeIndex
                return (
                  <button
                    key={emoji.id}
                    type="button"
                    role="option"
                    id={optionId(index)}
                    aria-selected={isActive}
                    aria-label={emoji.name}
                    tabIndex={-1}
                    // The search box owns focus; stealing it on mousedown would
                    // close the caret's home and break type-then-click.
                    onMouseDown={(event) => event.preventDefault()}
                    // `pointermove`, not `mouseenter`: this grid is
                    // virtualized, so a scroll pulls fresh rows under a cursor
                    // that never moved and every one of them fires
                    // `mouseenter`. The active option would chase the scroll
                    // instead of the reader. Same reason the `:` list uses it.
                    onPointerMove={() => onActivate(index)}
                    onClick={() => onSelect(emoji)}
                    className={emojiButtonClass(isActive)}
                    style={{
                      width: EMOJI_BUTTON_SIZE,
                      height: EMOJI_BUTTON_SIZE,
                    }}
                  >
                    {/* The same renderer the reaction pills and the quick-
                        reaction row use, so every emoji in the chat is drawn
                        one way. */}
                    <EmojiImage
                      emoji={emoji.native}
                      mode="native"
                      size="md"
                      alt=""
                    />
                  </button>
                )
              })}
            </div>
          )
        }}
      />
    )
  }
)
