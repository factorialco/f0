import { renderHook } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import type { MutableRefObject } from "react"

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

describe("useGraphRenderModel — expander affordance", () => {
  it("renders an expander for a collapsed node with childrenCount but NO loaded children", () => {
    // ceo (expanded) → cto (collapsed, 81 reports, children NOT loaded)
    const cto = treeNode("cto", "ceo", 81, [], 1)
    const ceo = treeNode("ceo", null, 1, [cto])
    const { result } = renderHook(() =>
      useGraphRenderModel(baseOptions([ceo], ["ceo"]))
    )

    const expander = result.current.rfNodes.find((n) => n.id === "expander-cto")
    expect(expander).toBeDefined()
    expect(expander?.type).toBe("expanderNode")
    expect(expander?.data?.count).toBe(81)
  })

  it("does NOT render an expander for an expanded node", () => {
    const cto = treeNode("cto", "ceo", 81, [], 1)
    const ceo = treeNode("ceo", null, 1, [cto])
    const { result } = renderHook(() =>
      // Both expanded — cto's children still aren't loaded, so it has no
      // visible subtree, but being expanded it shows no expander.
      useGraphRenderModel(baseOptions([ceo], ["ceo", "cto"]))
    )

    expect(result.current.rfNodes.some((n) => n.id === "expander-cto")).toBe(
      false
    )
  })

  it("renders no expander for a true leaf (childrenCount 0)", () => {
    const leaf = treeNode("leaf", "ceo", 0, [], 1)
    const ceo = treeNode("ceo", null, 1, [leaf])
    const { result } = renderHook(() =>
      useGraphRenderModel(baseOptions([ceo], ["ceo"]))
    )

    expect(result.current.rfNodes.some((n) => n.id === "expander-leaf")).toBe(
      false
    )
  })
})
