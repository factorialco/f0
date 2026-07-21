import { act } from "@testing-library/react"
import { createRef } from "react"
import { beforeAll, describe, expect, it, vi } from "vitest"

import { zeroRender, screen } from "@/testing/test-utils"

import type { GraphNode } from "../types"

import {
  F0Graph,
  type F0GraphHandle,
  type F0GraphNodeRenderContext,
} from "../F0Graph"

// ─── Helpers ───────────────────────────────────────────────────

function makeNodes(): GraphNode<string>[] {
  return [
    { id: "1", parentId: null, data: "CEO", childrenCount: 2 },
    { id: "2", parentId: "1", data: "CTO", childrenCount: 0 },
    { id: "3", parentId: "1", data: "CFO", childrenCount: 0 },
  ]
}

function renderNodeFn(node: GraphNode<string>, ctx: F0GraphNodeRenderContext) {
  return (
    <div
      ref={ctx.nodeRef}
      role="treeitem"
      tabIndex={ctx.tabIndex}
      data-testid={`node-${node.id}`}
      data-state={ctx.state}
      onClick={ctx.onClick}
    >
      {node.data}
    </div>
  )
}

function dispatchKey(element: HTMLElement, key: string) {
  act(() => {
    element.dispatchEvent(
      new KeyboardEvent("keydown", { key, bubbles: true, cancelable: true })
    )
  })
}

// React Flow needs ResizeObserver; jsdom doesn't provide it.
beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
})

// ─── Imperative handle ─────────────────────────────────────────

describe("F0Graph — imperative handle", () => {
  it("exposes focusNode and clearSelection on the ref", () => {
    const ref = createRef<F0GraphHandle>()
    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph ref={ref} nodes={makeNodes()} renderNode={renderNodeFn} />
      </div>
    )

    expect(typeof ref.current?.focusNode).toBe("function")
    expect(typeof ref.current?.clearSelection).toBe("function")
  })

  it("clearSelection() drops the current click selection", () => {
    const ref = createRef<F0GraphHandle>()
    const onSelectedNodesChange = vi.fn()
    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          ref={ref}
          nodes={makeNodes()}
          renderNode={renderNodeFn}
          selectionMode="single"
          defaultExpandedNodes={new Set(["1"])}
          onSelectedNodesChange={onSelectedNodesChange}
        />
      </div>
    )

    // Select the first focused node via keyboard.
    const tree = screen.getByRole("tree", { name: "Graph view" })
    dispatchKey(tree, "Enter")
    expect(onSelectedNodesChange.mock.calls.at(-1)?.[0]).toEqual(new Set(["1"]))

    onSelectedNodesChange.mockClear()
    act(() => ref.current?.clearSelection())

    // Selection is cleared back to an empty set.
    expect(onSelectedNodesChange).toHaveBeenCalledWith(new Set())
    expect(screen.getByTestId("node-1")).toHaveAttribute(
      "data-state",
      "default"
    )
  })

  it("focusNode() can be called repeatedly for the same node without throwing", () => {
    const ref = createRef<F0GraphHandle>()
    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          ref={ref}
          nodes={makeNodes()}
          renderNode={renderNodeFn}
          defaultExpandedNodes={new Set(["1"])}
        />
      </div>
    )

    // The declarative `focusedNode` prop can't re-fly on an unchanged value;
    // the imperative call must run every time (here: not throw across repeats).
    expect(() =>
      act(() => {
        ref.current?.focusNode("2")
        ref.current?.focusNode("2")
      })
    ).not.toThrow()
  })
})
