import { renderHook } from "@testing-library/react"
import { act } from "react"
import { afterEach, beforeEach, describe, expect, it } from "vitest"

import { useAccessibleTreeOwns } from "../useAccessibleTreeOwns"

let tree: HTMLDivElement
let container: HTMLDivElement

/** Lets the MutationObserver callback run. */
async function settle(): Promise<void> {
  // MutationObserver callbacks are delivered as microtasks, and the hook writes
  // straight out of the callback rather than deferring to a frame, so a single
  // microtask turn is enough.
  await act(async () => {
    await Promise.resolve()
  })
}

function addTreeitem(id: string): HTMLElement {
  const el = document.createElement("div")
  el.id = id
  el.setAttribute("role", "treeitem")
  container.appendChild(el)
  return el
}

function render() {
  return renderHook(() =>
    useAccessibleTreeOwns({ current: tree }, { current: container })
  )
}

const owned = (): string[] =>
  (tree.getAttribute("aria-owns") ?? "").split(" ").filter(Boolean)

beforeEach(() => {
  tree = document.createElement("div")
  tree.setAttribute("role", "tree")
  container = document.createElement("div")
  document.body.append(tree, container)
})

afterEach(() => {
  tree.remove()
  container.remove()
})

describe("useAccessibleTreeOwns", () => {
  it("owns every treeitem present on mount, in document order", () => {
    addTreeitem("f0-graph-node-1")
    addTreeitem("f0-graph-node-2")
    render()

    expect(owned()).toEqual(["f0-graph-node-1", "f0-graph-node-2"])
    expect(tree.getAttribute("aria-busy")).toBeNull()
  })

  it("marks an empty tree aria-busy instead of leaving it childless", () => {
    // A `role="tree"` owning nothing fails axe `aria-required-children`. The
    // graph is genuinely still loading here (deferred, staged, or fetching
    // viewport data), which is what aria-busy says.
    render()

    expect(tree.getAttribute("aria-owns")).toBeNull()
    expect(tree.getAttribute("aria-busy")).toBe("true")
  })

  it("picks up a treeitem that mounts after the first render", async () => {
    render()
    expect(tree.getAttribute("aria-busy")).toBe("true")

    addTreeitem("f0-graph-node-late")
    await settle()

    expect(owned()).toEqual(["f0-graph-node-late"])
    expect(tree.getAttribute("aria-busy")).toBeNull()
  })

  it("drops a culled treeitem so no reference dangles", async () => {
    // The bug this exists for: React Flow culls painted nodes on its own
    // schedule, so ids taken from React state outlive the elements. A dangling
    // `aria-owns` target is axe `aria-valid-attr-value`, critical.
    const first = addTreeitem("f0-graph-node-1")
    addTreeitem("f0-graph-node-2")
    render()

    first.remove()
    await settle()

    expect(owned()).toEqual(["f0-graph-node-2"])
    for (const id of owned()) {
      expect(document.getElementById(id)).not.toBeNull()
    }
  })

  it("goes back to aria-busy when the last treeitem is culled", async () => {
    const only = addTreeitem("f0-graph-node-1")
    render()

    only.remove()
    await settle()

    expect(tree.getAttribute("aria-owns")).toBeNull()
    expect(tree.getAttribute("aria-busy")).toBe("true")
  })

  it("ignores an element that has no id to reference", () => {
    const anonymous = document.createElement("div")
    anonymous.setAttribute("role", "treeitem")
    container.appendChild(anonymous)
    addTreeitem("f0-graph-node-1")
    render()

    expect(owned()).toEqual(["f0-graph-node-1"])
  })

  it("stops observing on unmount", async () => {
    const { unmount } = render()
    addTreeitem("f0-graph-node-1")
    await settle()
    expect(owned()).toEqual(["f0-graph-node-1"])

    unmount()
    addTreeitem("f0-graph-node-2")
    await settle()

    expect(owned()).toEqual(["f0-graph-node-1"])
  })

  it("does nothing when either element is missing", () => {
    renderHook(() =>
      useAccessibleTreeOwns({ current: null }, { current: container })
    )

    expect(tree.getAttribute("aria-owns")).toBeNull()
    expect(tree.getAttribute("aria-busy")).toBeNull()
  })
})
