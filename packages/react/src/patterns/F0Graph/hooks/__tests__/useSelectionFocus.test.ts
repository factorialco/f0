import { renderHook } from "@testing-library/react"
import { createRef } from "react"
import { afterEach, beforeEach, describe, expect, it } from "vitest"

import type { TreeNode } from "../../types"
import { useSelectionFocus } from "../useSelectionFocus"

function treeNode(
  id: string,
  parentId: string | null,
  children: TreeNode<string>[] = []
): TreeNode<string> {
  return {
    id,
    parentId,
    data: id,
    children,
    depth: parentId === null ? 0 : 1,
    childrenCount: children.length,
    childrenLoaded: true,
  }
}

const child = treeNode("child", "root")
const roots = [treeNode("root", null, [child])]

/** A focusable stand-in for a mounted graph node. */
function nodeEl(id: string, parent: HTMLElement): HTMLElement {
  const el = document.createElement("div")
  el.id = id
  el.setAttribute("role", "treeitem")
  el.tabIndex = 0
  parent.appendChild(el)
  return el
}

let canvas: HTMLDivElement

function render() {
  const canvasRef = createRef<HTMLDivElement>() as {
    current: HTMLDivElement | null
  }
  canvasRef.current = canvas
  return renderHook(() =>
    useSelectionFocus<string>({
      roots,
      expandedNodes: new Set(["root"]),
      selectionMode: "single",
      canvasRef,
    })
  )
}

beforeEach(() => {
  canvas = document.createElement("div")
  document.body.appendChild(canvas)
})

afterEach(() => {
  canvas.remove()
})

describe("useSelectionFocus — requestNodeFocus", () => {
  it("focuses a mounted node straight away", () => {
    const { result } = render()
    const el = nodeEl("root", canvas)
    result.current.registerNodeRef("root", el)

    result.current.requestNodeFocus("root")

    expect(document.activeElement).toBe(el)
  })

  it("focuses a node that is not mounted yet once it registers", () => {
    // The case that used to strand keyboard focus: React Flow culls off-screen
    // nodes, so an arrow key can target a node that only exists after the camera
    // has flown to it.
    const { result } = render()

    // Mirrors useGraphKeyboard: the focused id is set before the request, so the
    // staleness guard knows this is still the node the graph wants focused.
    result.current.focusedNodeIdRef.current = "child"
    result.current.requestNodeFocus("child")

    const el = nodeEl("child", canvas)
    result.current.registerNodeRef("child", el)

    expect(document.activeElement).toBe(el)
  })

  it("honours only the most recent request", () => {
    const { result } = render()

    result.current.focusedNodeIdRef.current = "root"
    result.current.requestNodeFocus("root")
    result.current.focusedNodeIdRef.current = "child"
    result.current.requestNodeFocus("child")

    const rootEl = nodeEl("root", canvas)
    result.current.registerNodeRef("root", rootEl)
    expect(document.activeElement).not.toBe(rootEl)

    const childEl = nodeEl("child", canvas)
    result.current.registerNodeRef("child", childEl)
    expect(document.activeElement).toBe(childEl)
  })

  it("drops a pending request once the focused node has moved on", () => {
    const { result } = render()

    result.current.focusedNodeIdRef.current = "child"
    result.current.requestNodeFocus("child")
    // Something else takes focus before the node arrives.
    result.current.selectNode("root")

    const el = nodeEl("child", canvas)
    result.current.registerNodeRef("child", el)

    expect(document.activeElement).not.toBe(el)
  })

  it("drops a pending request when focus has left the graph", () => {
    const { result } = render()
    const outside = document.createElement("button")
    document.body.appendChild(outside)

    result.current.focusedNodeIdRef.current = "child"
    result.current.requestNodeFocus("child")
    outside.focus()
    expect(document.activeElement).toBe(outside)

    const el = nodeEl("child", canvas)
    result.current.registerNodeRef("child", el)

    // A node mounting must not yank focus out of a side panel or dialog.
    expect(document.activeElement).toBe(outside)
    outside.remove()
  })

  it("clearSelection discards a pending request", () => {
    const { result } = render()

    result.current.focusedNodeIdRef.current = "child"
    result.current.requestNodeFocus("child")
    result.current.clearSelection()

    const el = nodeEl("child", canvas)
    result.current.registerNodeRef("child", el)

    expect(document.activeElement).not.toBe(el)
  })
})
