/**
 * Shared helpers for the F0Graph test suite.
 */

/**
 * The element a graph keystroke actually originates from in a browser.
 *
 * `role="tree"` no longer sits on an ancestor of the canvas: React Flow
 * hardcodes `role="application"` on its wrapper and injects its own live region
 * and focusable boxes, none of which are legal children of a tree, so the tree
 * is now an empty element that owns the rendered items through `aria-owns`
 * (see `F0GraphView`). Keystrokes dispatched on that element would never reach
 * the key handler, because it is a sibling of the canvas rather than its parent.
 *
 * In a real browser the keystroke lands on the treeitem holding the roving
 * tabindex and bubbles up to the canvas container, which is what this returns:
 * the focused treeitem when one is rendered, otherwise the container itself.
 */
export function graphKeyTarget(): HTMLElement {
  const focused = document.querySelector<HTMLElement>(
    '[role="treeitem"][tabindex="0"]'
  )
  if (focused) return focused
  return graphContainer()
}

/**
 * The element carrying F0Graph's own pointer and key handlers: the direct parent
 * of React Flow's wrapper. Use it when a test needs to reach those handlers, or
 * to mount a stand-in node the handlers can resolve.
 */
export function graphContainer(): HTMLElement {
  const container = document.querySelector(".react-flow")?.parentElement
  if (container instanceof HTMLElement) return container

  throw new Error("graphContainer: no graph container in the document")
}
