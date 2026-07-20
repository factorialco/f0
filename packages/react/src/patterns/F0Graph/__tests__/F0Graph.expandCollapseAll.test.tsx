import { act } from "@testing-library/react"
import { useEffect } from "react"
import { beforeAll, describe, expect, it, vi } from "vitest"

import { zeroRender } from "@/testing/test-utils"

import type { GraphNode } from "../types"

import { useF0GraphActions, type F0GraphActionsContextValue } from "../contexts"
import { F0Graph, type F0GraphNodeRenderContext } from "../F0Graph"

// ─── Test helpers ──────────────────────────────────────────────

function renderNodeFn(node: GraphNode<string>, ctx: F0GraphNodeRenderContext) {
  return (
    <div
      ref={ctx.nodeRef}
      role="treeitem"
      tabIndex={ctx.tabIndex}
      aria-expanded={ctx.hasChildren ? ctx.expanded : undefined}
      data-testid={`node-${node.id}`}
      onClick={ctx.onClick}
    >
      {node.data}
    </div>
  )
}

/**
 * Captures the actions context so tests can call `expandAll` / `collapseAll`
 * imperatively from outside React. Mounted via `canvasActions` so it sits
 * inside the actions provider.
 */
function ActionsProbe({
  onReady,
}: {
  onReady: (actions: F0GraphActionsContextValue) => void
}) {
  const actions = useF0GraphActions()
  useEffect(() => {
    onReady(actions)
  }, [actions, onReady])
  return null
}

// ─── Eager fixture ─────────────────────────────────────────────

const EAGER_NODES: GraphNode<string>[] = [
  { id: "1", parentId: null, data: "Root" },
  { id: "1.1", parentId: "1", data: "Child A" },
  { id: "1.2", parentId: "1", data: "Child B" },
  { id: "1.1.1", parentId: "1.1", data: "Grandchild A1" },
  { id: "1.2.1", parentId: "1.2", data: "Grandchild B1" },
  { id: "1.2.2", parentId: "1.2", data: "Grandchild B2" },
]

// Mock ResizeObserver which React Flow needs
beforeAll(() => {
  global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
})

// ─── Eager mode ───────────────────────────────────────────────

describe("F0Graph expandAll / collapseAll — eager mode", () => {
  it("expandAll fills the expanded set with every node that has children; collapseAll empties it", async () => {
    let actions: F0GraphActionsContextValue | null = null
    const onExpandedNodesChange = vi.fn<(s: Set<string>) => void>()

    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={EAGER_NODES}
          renderNode={renderNodeFn}
          defaultExpandedNodes={new Set()}
          onExpandedNodesChange={onExpandedNodesChange}
          canvasActions={
            <ActionsProbe
              onReady={(a) => {
                actions = a
              }}
            />
          }
        />
      </div>
    )

    expect(actions).not.toBeNull()

    await act(async () => {
      await actions!.expandAll()
    })

    // "1", "1.1", "1.2" are the expandable nodes (have children).
    // Grandchildren have no children of their own.
    const lastExpand =
      onExpandedNodesChange.mock.calls[
        onExpandedNodesChange.mock.calls.length - 1
      ]?.[0]
    expect(lastExpand).toBeInstanceOf(Set)
    expect(lastExpand).toEqual(new Set(["1", "1.1", "1.2"]))

    onExpandedNodesChange.mockClear()

    act(() => {
      actions!.collapseAll()
    })

    expect(onExpandedNodesChange).toHaveBeenCalledTimes(1)
    expect(onExpandedNodesChange).toHaveBeenLastCalledWith(new Set<string>())
  })

  it("does NOT fire onExpandToggle per node for bulk actions", async () => {
    let actions: F0GraphActionsContextValue | null = null
    const onExpandToggle = vi.fn()

    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={EAGER_NODES}
          renderNode={renderNodeFn}
          defaultExpandedNodes={new Set()}
          onExpandToggle={onExpandToggle}
          canvasActions={
            <ActionsProbe
              onReady={(a) => {
                actions = a
              }}
            />
          }
        />
      </div>
    )

    await act(async () => {
      await actions!.expandAll()
    })
    act(() => {
      actions!.collapseAll()
    })

    expect(onExpandToggle).not.toHaveBeenCalled()
  })

  it("controlled mode: expandAll fires onExpandedNodesChange but does not mutate internal state", async () => {
    let actions: F0GraphActionsContextValue | null = null
    const onExpandedNodesChange = vi.fn<(s: Set<string>) => void>()
    const externalSet = new Set<string>()

    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          nodes={EAGER_NODES}
          renderNode={renderNodeFn}
          expandedNodes={externalSet}
          onExpandedNodesChange={onExpandedNodesChange}
          canvasActions={
            <ActionsProbe
              onReady={(a) => {
                actions = a
              }}
            />
          }
        />
      </div>
    )

    await act(async () => {
      await actions!.expandAll()
    })

    // The controlled `expandedNodes` prop is NOT mutated — caller owns it.
    expect(externalSet.size).toBe(0)
    // But the change callback is informed of the desired next state.
    expect(onExpandedNodesChange).toHaveBeenCalledWith(
      new Set(["1", "1.1", "1.2"])
    )
  })
})

// ─── Lazy mode ────────────────────────────────────────────────

describe("F0Graph expandAll / collapseAll — lazy mode", () => {
  const lazyRoot: GraphNode<string>[] = [
    {
      id: "r",
      parentId: null,
      data: "Root",
      childrenCount: 2,
      childrenLoaded: false,
    },
  ]

  it("BFS cascades through depth: expandAll loads every level and resolves once complete", async () => {
    const loadChildren = vi
      .fn<(id: string) => Promise<GraphNode<string>[]>>()
      .mockImplementation(async (id: string) => {
        if (id === "r") {
          return [
            {
              id: "r.a",
              parentId: "r",
              data: "A",
              childrenCount: 1,
              childrenLoaded: false,
            },
            {
              id: "r.b",
              parentId: "r",
              data: "B",
              childrenCount: 0,
            },
          ]
        }
        if (id === "r.a") {
          return [
            { id: "r.a.1", parentId: "r.a", data: "A1", childrenCount: 0 },
          ]
        }
        return []
      })

    let actions: F0GraphActionsContextValue | null = null
    const onExpandedNodesChange = vi.fn<(s: Set<string>) => void>()

    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          rootNodes={lazyRoot}
          loadChildren={loadChildren}
          renderNode={renderNodeFn}
          defaultExpandedNodes={new Set()}
          onExpandedNodesChange={onExpandedNodesChange}
          canvasActions={
            <ActionsProbe
              onReady={(a) => {
                actions = a
              }}
            />
          }
        />
      </div>
    )

    await act(async () => {
      await actions!.expandAll()
    })

    // Both parents with childrenCount > 0 should have been loaded.
    expect(loadChildren).toHaveBeenCalledWith("r")
    expect(loadChildren).toHaveBeenCalledWith("r.a")
    expect(loadChildren).not.toHaveBeenCalledWith("r.b") // leaf, no fetch
    expect(loadChildren).not.toHaveBeenCalledWith("r.a.1") // leaf, no fetch

    // Final expanded set should include every node that ended up with kids.
    const lastCall =
      onExpandedNodesChange.mock.calls[
        onExpandedNodesChange.mock.calls.length - 1
      ]?.[0]
    expect(lastCall).toEqual(new Set(["r", "r.a"]))
  })

  it("one rejected loadChildren does not abort the cascade", async () => {
    const loadChildren = vi
      .fn<(id: string) => Promise<GraphNode<string>[]>>()
      .mockImplementation(async (id: string) => {
        if (id === "r") {
          return [
            {
              id: "r.fail",
              parentId: "r",
              data: "Fail",
              childrenCount: 1,
              childrenLoaded: false,
            },
            {
              id: "r.ok",
              parentId: "r",
              data: "OK",
              childrenCount: 1,
              childrenLoaded: false,
            },
          ]
        }
        if (id === "r.fail") {
          throw new Error("boom")
        }
        if (id === "r.ok") {
          return [
            { id: "r.ok.1", parentId: "r.ok", data: "OK1", childrenCount: 0 },
          ]
        }
        return []
      })

    let actions: F0GraphActionsContextValue | null = null

    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          rootNodes={lazyRoot}
          loadChildren={loadChildren}
          renderNode={renderNodeFn}
          defaultExpandedNodes={new Set()}
          canvasActions={
            <ActionsProbe
              onReady={(a) => {
                actions = a
              }}
            />
          }
        />
      </div>
    )

    await act(async () => {
      await actions!.expandAll()
    })

    // Failing branch was attempted, succeeding sibling still loaded.
    expect(loadChildren).toHaveBeenCalledWith("r.fail")
    expect(loadChildren).toHaveBeenCalledWith("r.ok")
  })

  it("collapseAll preserves the lazy cache: re-expanding an already-loaded node does not refetch", async () => {
    const loadChildren = vi
      .fn<(id: string) => Promise<GraphNode<string>[]>>()
      .mockImplementation(async (id: string) => {
        if (id === "r") {
          return [{ id: "r.x", parentId: "r", data: "X", childrenCount: 0 }]
        }
        return []
      })

    let actions: F0GraphActionsContextValue | null = null

    zeroRender(
      <div style={{ width: 800, height: 600 }}>
        <F0Graph
          rootNodes={lazyRoot}
          loadChildren={loadChildren}
          renderNode={renderNodeFn}
          defaultExpandedNodes={new Set()}
          canvasActions={
            <ActionsProbe
              onReady={(a) => {
                actions = a
              }}
            />
          }
        />
      </div>
    )

    await act(async () => {
      await actions!.expandAll()
    })
    expect(loadChildren).toHaveBeenCalledTimes(1)

    act(() => {
      actions!.collapseAll()
    })

    await act(async () => {
      await actions!.expandAll()
    })
    // Cache hit — no second fetch.
    expect(loadChildren).toHaveBeenCalledTimes(1)
  })
})
