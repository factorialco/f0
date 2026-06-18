import { describe, expect, it } from "vitest"

import type { TreeNode } from "../types"
import {
  collectExpandableNodeIds,
  collectVisibleNodes,
  computeExpandedByDepth,
  deriveEdgesFromTree,
} from "../utils"

// Minimal TreeNode factory for topology-only tests.
const node = (
  id: string,
  children: TreeNode<null>[] = [],
  depth = 0
): TreeNode<null> => ({
  id,
  parentId: null,
  data: null,
  children,
  depth,
  childrenCount: children.length,
  childrenLoaded: true,
})

//        a              e
//      /   \
//     b     c
//     |
//     d
const d = node("d")
const b = node("b", [d])
const c = node("c")
const a = node("a", [b, c])
const e = node("e")
const roots = [a, e]

describe("computeExpandedByDepth", () => {
  it("expands only nodes with children above the given depth", () => {
    expect(computeExpandedByDepth(roots, 1)).toEqual(new Set(["a"]))
    expect(computeExpandedByDepth(roots, 2)).toEqual(new Set(["a", "b"]))
  })

  it("expands nothing at depth 0", () => {
    expect(computeExpandedByDepth(roots, 0)).toEqual(new Set())
  })
})

describe("collectExpandableNodeIds", () => {
  it("returns every node that has children", () => {
    expect(collectExpandableNodeIds(roots)).toEqual(new Set(["a", "b"]))
  })
})

describe("deriveEdgesFromTree", () => {
  it("emits one edge per parent→child relationship", () => {
    expect(deriveEdgesFromTree(roots)).toEqual([
      { id: "a->b", source: "a", target: "b" },
      { id: "b->d", source: "b", target: "d" },
      { id: "a->c", source: "a", target: "c" },
    ])
  })
})

describe("collectVisibleNodes", () => {
  it("includes roots and only descendants under expanded nodes", () => {
    const ids = (set: Set<string>) =>
      collectVisibleNodes(roots, set).map((n) => n.id)

    expect(ids(new Set())).toEqual(["a", "e"])
    expect(ids(new Set(["a"]))).toEqual(["a", "b", "c", "e"])
    expect(ids(new Set(["a", "b"]))).toEqual(["a", "b", "d", "c", "e"])
  })
})
