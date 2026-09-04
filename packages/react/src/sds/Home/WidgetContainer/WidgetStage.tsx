import { ReactNode, useCallback, useLayoutEffect, useRef } from "react"
import { createPortal } from "react-dom"

/**
 * ONE WIDGET'S OWN PIECE OF DOM — and the reason a card can be DRAWN somewhere
 * other than the column that owns it without being built again.
 *
 * A widget's render belongs to its container: the container is what fetched it,
 * what knows its params, and what puts it back when the layout changes. But
 * `NewHomeLayout` needs the rail's cards to APPEAR inside the main column when
 * the layout stacks below `md` — the pinned ones between blocks of content the
 * layout does not own, which is a place no rail-shaped box can reach.
 *
 * React has exactly one way to draw a subtree somewhere its parent is not, and
 * that is a portal. But a portal's CONTAINER cannot be swapped: hand
 * `createPortal` a different element and React rebuilds the whole subtree into
 * it — a remount, which is the one thing this exists to avoid. Proven, not
 * assumed: swapping the container remounts, and the mount counter in
 * `stackedRemount.test.tsx` is what would go up.
 *
 * So the container never changes. Each widget gets ONE div of its own, made
 * once and never replaced, and its card is portaled into that. What moves is
 * the div: appended into the column's own flow normally, into `host` when the
 * layout asks for it elsewhere. Moving a DOM node does not touch a fiber, so
 * the card's state, its effects, its timers and its scroll position all carry
 * straight across — the whole point.
 *
 * `display: contents` on both boxes, so neither is a box: the card stays the
 * flex item its column's gap and its own `fullHeight` are written for.
 */
export const WidgetStage = ({
  host,
  children,
}: {
  /**
   * Draw the card in HERE instead of in the column. Null or undefined for the
   * ordinary case — the column's own flow, where the widget sits.
   */
  host?: HTMLElement | null
  children: ReactNode
}) => {
  const stageRef = useRef<HTMLDivElement>()
  if (!stageRef.current) {
    const stage = document.createElement("div")
    stage.style.display = "contents"
    // Whose card this box holds is worth being able to see in the inspector:
    // stacked, the rail's cards are in the main column's DOM and nothing else
    // says where they came from.
    stage.dataset.widgetStage = ""
    stageRef.current = stage
  }
  const stage = stageRef.current

  const hostRef = useRef(host)
  hostRef.current = host

  /**
   * ATTACHED IN THE COMMIT, not in an effect. A ref callback runs while React is
   * still committing and BEFORE any `useLayoutEffect` below it in the tree — so
   * the card's own layout effects, which is where a widget measures itself, run
   * with the stage already in the document. Appending from an effect here would
   * put this one after the card's, and every widget that measures on mount would
   * measure a detached tree.
   */
  const anchorNode = useRef<HTMLDivElement | null>(null)
  const anchorRef = useCallback(
    (node: HTMLDivElement | null) => {
      anchorNode.current = node
      const parent = hostRef.current ?? node
      if (parent && stage.parentElement !== parent) parent.appendChild(stage)
    },
    [stage]
  )

  // Every LATER move: the layout started (or stopped) asking for the card
  // elsewhere. The anchor is not re-created for this, so its ref does not fire.
  useLayoutEffect(() => {
    const parent = host ?? anchorNode.current
    if (parent && stage.parentElement !== parent) parent.appendChild(stage)
  }, [host, stage])

  // The stage outlives no widget: React empties it when the portal goes, but the
  // div itself is ours to take out of whatever it was appended to.
  useLayoutEffect(() => () => stage.remove(), [stage])

  return (
    <>
      {/* WHERE THE CARD GOES WHEN IT GOES NOWHERE — the widget's place in its own
          column. Before the portal in the tree, so its ref has attached the stage
          by the time the card's effects run. */}
      <div ref={anchorRef} style={{ display: "contents" }} />
      {createPortal(children, stage)}
    </>
  )
}
