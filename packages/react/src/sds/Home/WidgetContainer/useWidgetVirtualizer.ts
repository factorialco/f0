import {
  defaultRangeExtractor,
  useVirtualizer,
  type Range,
} from "@tanstack/react-virtual"
import { useCallback, useLayoutEffect, useRef, useState } from "react"

/**
 * How many widgets it takes before mounting them all is worth avoiding. Below
 * this a column renders every widget: virtualization buys nothing there and
 * costs a measurement pass per card.
 */
const DEFAULT_THRESHOLD = 12
/**
 * The first guess at a card's height, before it has been measured. It is only a
 * guess — every mounted card is measured and the guess is replaced — so what it
 * has to be is CLOSE, not right: too small and a column of unmeasured widgets
 * under-reports its height, so the scrollbar grows as you scroll it.
 */
const DEFAULT_ESTIMATE_PX = 280
/**
 * Cards kept mounted past each edge of the viewport. Two, because a widget is a
 * card with data in it: the next one has to be there before it is scrolled to,
 * or scrolling reads as a queue of cards loading.
 */
const DEFAULT_OVERSCAN = 2

/** The `overflow-y` values that make an element a scroll region. */
const SCROLLS = new Set(["auto", "scroll", "overlay"])

/**
 * The scroll region a column lives in — the box its widgets are on screen OF.
 *
 * Walked from the column rather than passed in, because a column does not know
 * who is scrolling it: `NewHomeLayout` scrolls each of its columns in a box of
 * its own, a page might scroll the lot in one, and a story just puts it in a
 * `div`. The body is not an answer: virtualizing against the document needs a
 * window virtualizer, and a column with no scroll region of any kind has no
 * viewport to be clipped to — it renders everything (see `enabled` below).
 */
const scrollableAncestor = (from: HTMLElement): HTMLElement | null => {
  let el = from.parentElement
  while (el && el !== document.body && el !== document.documentElement) {
    // `getPropertyValue`, not `.overflowY`: the property accessor is the one
    // jsdom's computed style does not implement, and this is the API both it and
    // every browser agree on.
    if (SCROLLS.has(getComputedStyle(el).getPropertyValue("overflow-y")))
      return el
    el = el.parentElement
  }
  return null
}

/**
 * VIRTUALIZATION — what a column does when it has more widgets than a screen.
 *
 * A widget is not a row: it is a card with its own data, its own chart, its own
 * list of rows inside it. A hundred of them mounted is a hundred fetches, a
 * hundred charts laid out and a DOM the browser spends every frame on, and all
 * but the three you can see are work nobody asked for. So a virtualized column
 * mounts ONLY the widgets in view (plus `overscan` past each edge) and holds the
 * space of the rest open, so the scrollbar still describes the whole column.
 *
 * WHAT IT COSTS, and why it is opt-in rather than the default:
 *
 * - A widget that scrolls out is UNMOUNTED. Whatever it had loaded, timed or
 *   animated is gone, and it starts again when it comes back — the opposite of
 *   what the collapsed rail is built to guarantee. For a column of a few widgets
 *   that trade is a bad one, which is what `threshold` is for.
 * - Dragging still reorders correctly, but only the widgets that are MOUNTED
 *   shuffle out of the way as you go: dnd-kit can't move a card that isn't
 *   there. The dragged card itself is pinned into the DOM for the whole gesture.
 * - `fullHeight` means nothing here. A virtualized column's height is the sum of
 *   its cards, so there is no column height for a card to fill.
 */
export interface WidgetVirtualization {
  /**
   * Below this many widgets the column simply renders them all. Defaults to 12.
   */
  threshold?: number
  /** First guess at a card's height in px, before it is measured. */
  estimateHeight?: number
  /** How many cards stay mounted past each edge of the viewport. */
  overscan?: number
  /**
   * The scroll region to virtualize against. Defaults to the column's nearest
   * scrollable ancestor — pass it when you already have the element (it saves
   * the walk, and it is exact).
   */
  scrollElement?: HTMLElement | null
}

/** Where one on-screen widget goes, and how much room it takes. */
export interface WidgetPlacement {
  /** Its index in the column's full list of widgets. */
  index: number
  /** Its offset from the top of the list element, in px. */
  start: number
}

export interface WidgetVirtualizer {
  /** Goes on the element that holds the widgets. */
  listRef: (node: HTMLDivElement | null) => void
  /**
   * The widgets to mount and where to put them — or `null`, meaning render
   * every widget in normal flow (not virtualized, paused, below the threshold,
   * or no scroll region to be clipped to).
   */
  window: {
    placements: WidgetPlacement[]
    /** The height the whole column would be, cards not mounted included. */
    totalSize: number
  } | null
  /** Goes on every mounted widget's box, alongside its `data-index`. */
  measureRef: (node: HTMLElement | null) => void
}

export interface UseWidgetVirtualizerOptions {
  /** `false` — the column renders every widget, as an unvirtualized one does. */
  config: WidgetVirtualization | false
  /** How many widgets the column has in total. */
  count: number
  /**
   * The column's gap in px. The virtualizer places the cards itself, so it needs
   * the gap as a number as well as a class: placed cards are out of the flex
   * flow, and a flex gap does not apply to them.
   */
  gap: number
  /**
   * Widgets that must stay mounted wherever the column is scrolled to, by index.
   * The card under the pointer during a drag is the case this exists for:
   * unmounting it mid-gesture takes dnd-kit's active node out from under it.
   */
  pinned?: number[]
  /**
   * Suspends virtualization: the column renders every widget in normal flow
   * again, keeping the SAME elements it had. For a container that stops being a
   * column — `NewHomeLayout`'s floating panel, which is one widget in a box of
   * its own and has no viewport for the others to be measured against.
   */
  paused?: boolean
}

/**
 * The window of widgets a column should have in the DOM.
 *
 * It is ALWAYS CALLED, virtualized or not, and it always returns the same shape:
 * whether a column virtualizes decides how many widgets it draws and where, not
 * what its tree looks like. A hook (or a wrapper element) that came and went
 * with the setting would remount every widget in the column the moment it
 * flipped — the panel opening, a widget being added past the threshold — which
 * is exactly the cost virtualization is here to avoid paying twice.
 */
export function useWidgetVirtualizer({
  config,
  count,
  gap,
  pinned = [],
  paused = false,
}: UseWidgetVirtualizerOptions): WidgetVirtualizer {
  const settings = config === false ? null : config
  const [listEl, setListEl] = useState<HTMLDivElement | null>(null)
  // The walked ancestor. In state, not a ref: it is found after the first
  // render, and nothing else would re-render the column to use it.
  const [ancestor, setAncestor] = useState<HTMLElement | null>(null)
  const scrollElement = settings?.scrollElement ?? ancestor

  const wanted = settings != null && !paused
  const explicit = settings?.scrollElement != null

  useLayoutEffect(() => {
    if (!wanted || explicit || !listEl) return
    setAncestor(scrollableAncestor(listEl))
  }, [wanted, explicit, listEl])

  /**
   * HOW FAR DOWN THE SCROLL REGION THE WIDGETS START.
   *
   * A column is not only its widgets: the main one has a greeting, shortcuts and
   * a feed above them, and all of that scrolls in the same box. So the offsets
   * the virtualizer works in are measured from the scroll region's top, while the
   * cards are placed inside the list element — the difference between the two is
   * this, and it changes whenever the content above the widgets does.
   */
  const [scrollMargin, setScrollMargin] = useState(0)

  useLayoutEffect(() => {
    if (!wanted || !listEl || !scrollElement) return

    const read = () => {
      const offset =
        listEl.getBoundingClientRect().top -
        scrollElement.getBoundingClientRect().top +
        scrollElement.scrollTop
      // Sub-pixel differences are not a change: fractional scroll offsets and
      // zoom leave remainders, and taking them would re-render on every observed
      // frame — including the ones this very list's height caused.
      setScrollMargin((prev) => (Math.abs(prev - offset) < 1 ? prev : offset))
    }

    read()
    if (typeof ResizeObserver !== "function") return
    const observer = new ResizeObserver(read)
    observer.observe(scrollElement)
    // The COLUMN, because what moves the widgets down is the content above them
    // growing — the feed loading, a card appearing — and none of that resizes
    // either the scroll region or the list.
    if (listEl.parentElement) observer.observe(listEl.parentElement)
    return () => observer.disconnect()
  }, [wanted, listEl, scrollElement])

  const enabled =
    wanted &&
    scrollElement != null &&
    count >= (settings?.threshold ?? DEFAULT_THRESHOLD)

  /**
   * The window, PLUS whatever must be in the DOM regardless of where the column
   * is scrolled to. Keyed by the pinned indexes rather than closing over them:
   * the virtualizer memoizes its range on this function's identity, so a new pin
   * has to be a new function or it would not be looked at until the next scroll.
   */
  const pinnedRef = useRef(pinned)
  pinnedRef.current = pinned
  const pinnedKey = pinned.join(",")
  const rangeExtractor = useCallback(
    (range: Range) => {
      const indexes = new Set(defaultRangeExtractor(range))
      for (const index of pinnedRef.current)
        if (index >= 0 && index < range.count) indexes.add(index)
      return [...indexes].sort((a, b) => a - b)
    },
    [pinnedKey]
  )

  const virtualizer = useVirtualizer({
    enabled,
    count,
    gap,
    scrollMargin,
    rangeExtractor,
    overscan: settings?.overscan ?? DEFAULT_OVERSCAN,
    estimateSize: () => settings?.estimateHeight ?? DEFAULT_ESTIMATE_PX,
    getScrollElement: () => scrollElement,
  })

  return {
    listRef: setListEl,
    measureRef: virtualizer.measureElement,
    window: enabled
      ? {
          // `start` is measured from the SCROLL REGION's top and the cards are
          // placed inside the list, so the offset to the list comes back off it.
          placements: virtualizer.getVirtualItems().map(({ index, start }) => ({
            index,
            start: start - scrollMargin,
          })),
          totalSize: virtualizer.getTotalSize(),
        }
      : null,
  }
}
