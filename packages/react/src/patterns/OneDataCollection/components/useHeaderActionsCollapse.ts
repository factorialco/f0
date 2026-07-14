import { type RefObject, useCallback, useRef, useState } from "react"
import { useResizeObserver } from "usehooks-ts"

const GAP = 16

/**
 * Decides whether the header's action cluster should collapse (e.g. drop the
 * view-switcher labels) because it no longer fits next to the rest of the row.
 *
 * Why measured this way:
 * - `toolbarRef.clientWidth` is the *available* width: the toolbar is a block,
 *   so its width comes from its parent, not its (possibly overflowing) content.
 * - `actionsRef` wraps the actions, which sit in a `shrink-0` slot, so its
 *   `scrollWidth` is their natural (labelled) width regardless of overflow.
 *   `scrollWidth` on the toolbar itself is unreliable with `overflow: visible`.
 * - The natural width is remembered while NOT collapsed; once collapsed the
 *   actions shrink, so re-reading them would flip-flop. Comparing against the
 *   remembered labelled width keeps the toggle stable.
 */
export function useHeaderActionsCollapse(
  toolbarRef: RefObject<HTMLElement | null>,
  actionsRef: RefObject<HTMLElement | null>,
  reservedRef?: RefObject<HTMLElement | null>
): boolean {
  const [collapsed, setCollapsed] = useState(false)
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
    const reservedWidth = reservedRef?.current?.offsetWidth ?? 0
    const room =
      toolbar.clientWidth -
      padding -
      (reservedWidth > 0 ? reservedWidth + GAP : 0)

    const next = naturalRef.current > room
    if (next !== collapsedRef.current) {
      collapsedRef.current = next
      setCollapsed(next)
    }
  }, [toolbarRef, actionsRef, reservedRef])

  useResizeObserver({
    ref: toolbarRef as RefObject<HTMLDivElement>,
    onResize: measure,
  })
  useResizeObserver({
    ref: actionsRef as RefObject<HTMLDivElement>,
    onResize: measure,
  })

  return collapsed
}
