import { type RefObject, useCallback, useRef, useState } from "react"
import { useResizeObserver } from "usehooks-ts"

const GAP = 16

// Below this toolbar width the search gives up its permanently expanded input
// and falls back to the icon button, so the filters and the presets keep enough
// room to be usable. Matches Tailwind's `sm`, measured on the container rather
// than the viewport: a collection can sit in a narrow panel on a wide screen.
const SEARCH_COLLAPSE_WIDTH = 640

/**
 * Decides how the header row degrades as it runs out of room:
 * - `collapseActions` drops the view-switcher labels down to icons.
 * - `collapseSearch` turns the search input back into an icon button.
 *
 * Why measured this way:
 * - `toolbarRef.clientWidth` is the *available* width: the toolbar is a block,
 *   so its width comes from its parent, not its (possibly overflowing) content.
 *   `collapseSearch` reads only this, never the search's own width, so the
 *   search collapsing cannot feed back into the decision that collapsed it.
 * - `actionsRef` wraps the actions, which sit in a `shrink-0` slot, so its
 *   `scrollWidth` is their natural (labelled) width regardless of overflow.
 *   `scrollWidth` on the toolbar itself is unreliable with `overflow: visible`.
 * - The natural width is remembered while NOT collapsed; once collapsed the
 *   actions shrink, so re-reading them would flip-flop. Comparing against the
 *   remembered labelled width keeps the toggle stable.
 * - `summaryRef` and `searchRef` sit on the same row but outside the actions
 *   cluster, so their width is not part of `actionsRef` and has to come off the
 *   available room explicitly. The search is also observed, because it changes
 *   width when it collapses or when it takes a query.
 */
export function useHeaderCollapse(
  toolbarRef: RefObject<HTMLElement | null>,
  actionsRef: RefObject<HTMLElement | null>,
  summaryRef?: RefObject<HTMLElement | null>,
  searchRef?: RefObject<HTMLElement | null>
): { collapseActions: boolean; collapseSearch: boolean } {
  const [collapseActions, setCollapseActions] = useState(false)
  const [collapseSearch, setCollapseSearch] = useState(false)
  const collapsedRef = useRef(false)
  const naturalRef = useRef(0)

  const measure = useCallback(() => {
    const toolbar = toolbarRef.current
    const actions = actionsRef.current
    if (!toolbar || !actions) return

    if (!collapsedRef.current) {
      naturalRef.current = actions.scrollWidth
    }

    // clientWidth includes horizontal padding (the toolbar has page padding),
    // so subtract it to get the width actually available to the row content.
    const style = getComputedStyle(toolbar)
    const padding =
      parseFloat(style.paddingLeft) + parseFloat(style.paddingRight)
    const available = toolbar.clientWidth - padding

    setCollapseSearch(available < SEARCH_COLLAPSE_WIDTH)

    // Each reserved element that is actually rendered also eats the row gap
    // that separates it from its neighbour.
    const reservedWidth = [summaryRef, searchRef].reduce((total, ref) => {
      const width = ref?.current?.offsetWidth ?? 0
      return width > 0 ? total + width + GAP : total
    }, 0)
    const room = available - reservedWidth

    const next = naturalRef.current > room
    if (next !== collapsedRef.current) {
      collapsedRef.current = next
      setCollapseActions(next)
    }
  }, [toolbarRef, actionsRef, summaryRef, searchRef])

  useResizeObserver({
    ref: toolbarRef as RefObject<HTMLDivElement>,
    onResize: measure,
  })
  useResizeObserver({
    ref: actionsRef as RefObject<HTMLDivElement>,
    onResize: measure,
  })
  useResizeObserver({
    ref: searchRef as RefObject<HTMLDivElement>,
    onResize: measure,
  })

  return { collapseActions, collapseSearch }
}
