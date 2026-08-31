import { type RefObject, useEffect } from "react"

/**
 * Keeps the graph's `role="tree"` element owning exactly the treeitems that are
 * in the DOM right now, and marks it `aria-busy` while there are none.
 *
 * Two constraints force this shape.
 *
 * **The tree cannot be an ancestor of the canvas.** React Flow hardcodes
 * `role="application"` on its own wrapper, after the props spread, so it cannot
 * be overridden. axe reports `aria-required-children` on any `role="tree"`
 * above it: "Element has children which are not allowed: [role=application]".
 * Wrapping React Flow in a `role="group"` does not help, axe descends through
 * it. So the tree is an empty element beside the canvas that claims the items by
 * reference.
 *
 * **The item list has to be read from the DOM, not from React state.** F0 hands
 * React Flow an array of nodes, then React Flow culls the off-screen ones
 * (`onlyRenderVisibleElements`) on its own schedule. The two sets differ: on the
 * `InitialFocus` story the render model counts the root as rendered and owns
 * `f0-graph-node-root`, while React Flow has painted three nodes deep in the
 * tree and no root at all. That leaves a dangling `aria-owns` reference
 * (`aria-valid-attr-value`) and three treeitems with no owner
 * (`aria-required-parent`), both critical. Mirroring the DOM cannot drift.
 *
 * Ownership is flat: the tree owns every painted treeitem and `aria-level` /
 * `aria-setsize` / `aria-posinset` carry the hierarchy. Nesting the ownership
 * instead (each parent owning its own children) cannot survive culling, because
 * a node whose parent was culled has no owner to attach to.
 *
 * Document order is React's render order, which is the depth-first order the
 * render model produces, so the tree reads top to bottom.
 *
 * The sync runs straight out of the observer callback rather than being deferred
 * to the next frame. A frame of lag is a frame in which a node exists and is
 * unowned, which axe reports as `aria-required-parent` — measured on the
 * `InitialFocus` story, where the mount-time camera fly mounts and unmounts nodes
 * in bursts. The browser already batches the callback per mutation record group,
 * and the observer ignores style and transform changes, so the write frequency is
 * bounded by node mounts rather than by pan and zoom.
 */
export function useAccessibleTreeOwns(
  treeRef: RefObject<HTMLElement | null>,
  containerRef: RefObject<HTMLElement | null>
): void {
  useEffect(() => {
    const tree = treeRef.current
    const container = containerRef.current
    if (!tree || !container) return

    const sync = (): void => {
      const ids = Array.from(
        container.querySelectorAll<HTMLElement>('[role="treeitem"]')
      )
        .map((el) => el.id)
        .filter(Boolean)

      if (ids.length > 0) {
        tree.setAttribute("aria-owns", ids.join(" "))
        tree.removeAttribute("aria-busy")
      } else {
        // A tree with no treeitems fails `aria-required-children` on its own.
        // `aria-busy` says the content is still arriving, which is the truth
        // while the graph is deferred, staged, or loading viewport data.
        tree.removeAttribute("aria-owns")
        tree.setAttribute("aria-busy", "true")
      }
    }

    sync()

    const observer = new MutationObserver(sync)
    observer.observe(container, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["id", "role"],
    })

    return () => {
      observer.disconnect()
    }
  }, [treeRef, containerRef])
}
