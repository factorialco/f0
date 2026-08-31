/**
 * Shared helpers for the F0Graph test suite.
 */

/**
 * The element carrying F0Graph's own pointer and key handlers: the direct parent
 * of React Flow's wrapper.
 *
 * `role="tree"` no longer sits on this element. React Flow hardcodes
 * `role="application"` on its wrapper, which axe rejects as a child of a tree
 * (`aria-required-children`), so the tree is now an empty element beside the
 * canvas that owns the rendered items through `aria-owns` (see
 * `useAccessibleTreeOwns`). Events dispatched on that element would never reach
 * the handlers, because it is a sibling of the canvas rather than its parent.
 *
 * In a real browser a keystroke lands on the treeitem holding the roving
 * tabindex and bubbles up to this container, so dispatching here is the faithful
 * stand-in. Use `graphKeyTarget()` when the focused treeitem itself matters.
 */
export function graphContainer(): HTMLElement {
  const container = document.querySelector(".react-flow")?.parentElement
  if (container instanceof HTMLElement) return container

  throw new Error("graphContainer: no graph container in the document")
}

/**
 * The element a graph keystroke actually originates from in a browser: the
 * treeitem holding the roving tabindex when one is rendered, otherwise the
 * container itself. Either way the event bubbles to the key handler.
 */
export function graphKeyTarget(): HTMLElement {
  const focused = document.querySelector<HTMLElement>(
    '[role="treeitem"][tabindex="0"]'
  )
  if (focused) return focused
  return graphContainer()
}
