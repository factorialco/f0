import { renderHook } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import type { MutableRefObject } from "react"

import type { ExpanderNodeData } from "../../internal/ReactFlowAdapters"
import type { TreeNode } from "../../types"
import { useGraphRenderModel } from "../useGraphRenderModel"

const treeNode = (
  id: string,
  parentId: string | null,
  childrenCount: number,
  children: TreeNode<null>[] = [],
  depth = 0
): TreeNode<null> => ({
  id,
  parentId,
  data: null,
  children,
  depth,
  childrenCount,
  childrenLoaded: children.length > 0,
})

const baseOptions = (roots: TreeNode<null>[], expanded: string[]) => {
  const nodeMap = new Map<string, TreeNode<null>>()
  const index = (n: TreeNode<null>) => {
    nodeMap.set(n.id, n)
    n.children.forEach(index)
  }
  roots.forEach(index)

  return {
    roots,
    nodeMap,
    expandedNodes: new Set(expanded),
    anchorNodeRef: { current: null } as MutableRefObject<string | null>,
    stableRenderNode: () => null,
    visibleTagTypesSet: new Set<never>(),
    zoomLevel: "detail" as const,
    direction: "TB" as const,
    hoveredEdgeId: null,
  }
}

const expanderFor = (
  rfNodes: ReturnType<typeof useGraphRenderModel>["rfNodes"],
  id: string
) => rfNodes.find((n) => n.id === `expander-${id}`)

describe("useGraphRenderModel — expander affordance", () => {
  it("renders an expander for a collapsed node with childrenCount but NO loaded children", () => {
    // ceo (expanded) → cto (collapsed, 81 reports, children NOT loaded)
    const cto = treeNode("cto", "ceo", 81, [], 1)
    const ceo = treeNode("ceo", null, 1, [cto])
    const { result } = renderHook(() =>
      useGraphRenderModel(baseOptions([ceo], ["ceo"]))
    )

    const expander = expanderFor(result.current.rfNodes, "cto")
    expect(expander?.type).toBe("expanderNode")
    expect((expander?.data as ExpanderNodeData).count).toBe(81)
    expect((expander?.data as ExpanderNodeData).loading).toBe(false)
  })

  it("keeps the expander with a loading flag while an expanded node waits for children", () => {
    // cto is expanded but its 81 children have not arrived yet.
    const cto = treeNode("cto", "ceo", 81, [], 1)
    const ceo = treeNode("ceo", null, 1, [cto])
    const { result } = renderHook(() =>
      useGraphRenderModel(baseOptions([ceo], ["ceo", "cto"]))
    )

    const expander = expanderFor(result.current.rfNodes, "cto")
    expect(expander).toBeDefined()
    expect((expander?.data as ExpanderNodeData).loading).toBe(true)
  })

  it("removes the expander once an expanded node's children are loaded", () => {
    const report = treeNode("report", "boss", 0, [], 1)
    const boss = treeNode("boss", null, 1, [report])
    const { result } = renderHook(() =>
      useGraphRenderModel(baseOptions([boss], ["boss"]))
    )

    expect(expanderFor(result.current.rfNodes, "boss")).toBeUndefined()
  })

  it("renders no expander for a true leaf (childrenCount 0)", () => {
    const leaf = treeNode("leaf", "ceo", 0, [], 1)
    const ceo = treeNode("ceo", null, 1, [leaf])
    const { result } = renderHook(() =>
      useGraphRenderModel(baseOptions([ceo], ["ceo"]))
    )

    expect(expanderFor(result.current.rfNodes, "leaf")).toBeUndefined()
  })
})
