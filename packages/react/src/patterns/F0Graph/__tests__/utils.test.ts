import { describe, expect, it } from "vitest"

import type { TreeNode } from "../types"
import type { PositionedNode } from "../types"
import {
  collectExpandableNodeIds,
  collectVisibleNodes,
  computeExpandedByDepth,
  computeLayoutBounds,
  deriveEdgesFromTree,
  findStackHoverZoneAt,
  nodeIntersectsRect,
  resolveInitialFitViewNodes,
  type StackHoverZone,
  type ViewportRect,
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

// ─── Viewport windowing geometry ──────────────────────────────────

describe("nodeIntersectsRect", () => {
  const rect: ViewportRect = { minX: 0, minY: 0, maxX: 100, maxY: 100 }

  it("returns true for a box fully inside the rect", () => {
    expect(nodeIntersectsRect(10, 10, 20, 20, rect)).toBe(true)
  })

  it("returns true for a box partially overlapping any edge", () => {
    expect(nodeIntersectsRect(-10, 50, 20, 20, rect)).toBe(true) // straddles left
    expect(nodeIntersectsRect(90, 50, 40, 20, rect)).toBe(true) // straddles right
    expect(nodeIntersectsRect(50, -10, 20, 20, rect)).toBe(true) // straddles top
  })

  it("treats edge-touching boxes as intersecting", () => {
    expect(nodeIntersectsRect(100, 100, 10, 10, rect)).toBe(true)
  })

  it("returns false for boxes entirely outside on any axis", () => {
    expect(nodeIntersectsRect(200, 50, 10, 10, rect)).toBe(false) // right
    expect(nodeIntersectsRect(-30, 50, 10, 10, rect)).toBe(false) // left
    expect(nodeIntersectsRect(50, 200, 10, 10, rect)).toBe(false) // below
    expect(nodeIntersectsRect(50, -30, 10, 10, rect)).toBe(false) // above
  })
})

describe("computeLayoutBounds", () => {
  it("returns null for an empty layout", () => {
    expect(computeLayoutBounds([])).toBeNull()
  })

  it("wraps every node in one bounding box", () => {
    const nodes: PositionedNode[] = [
      { id: "a", x: 0, y: 0, width: 100, height: 50 },
      { id: "b", x: 200, y: 300, width: 100, height: 50 },
    ]
    expect(computeLayoutBounds(nodes)).toEqual({
      x: 0,
      y: 0,
      width: 300,
      height: 350,
    })
  })

  it("handles negative coordinates", () => {
    const nodes: PositionedNode[] = [
      { id: "a", x: -100, y: -50, width: 40, height: 40 },
      { id: "b", x: 100, y: 100, width: 40, height: 40 },
    ]
    expect(computeLayoutBounds(nodes)).toEqual({
      x: -100,
      y: -50,
      width: 240,
      height: 190,
    })
  })
})

describe("resolveInitialFitViewNodes", () => {
  const present = new Set(["root", "c1", "c2", "me"])

  it("returns undefined (fit-all) when no target is given", () => {
    expect(resolveInitialFitViewNodes(undefined, [], present)).toBeUndefined()
  })

  it("frames the target alone when it has no children", () => {
    expect(resolveInitialFitViewNodes("me", [], present)).toEqual([
      { id: "me" },
    ])
  })

  it("frames the target together with its direct children (show first level)", () => {
    expect(resolveInitialFitViewNodes("root", ["c1", "c2"], present)).toEqual([
      { id: "root" },
      { id: "c1" },
      { id: "c2" },
    ])
  })

  it("drops children that aren't present, keeps the target", () => {
    expect(
      resolveInitialFitViewNodes("root", ["c1", "ghost"], present)
    ).toEqual([{ id: "root" }, { id: "c1" }])
  })

  it("falls back to fit-all when the target isn't present (never a blank frame)", () => {
    expect(resolveInitialFitViewNodes("ghost", ["c1"], present)).toBeUndefined()
  })
})

describe("findStackHoverZoneAt", () => {
  // One column: a 256x118 card at (0, 0), then a 228x252 group from y=175, so
  // the zone runs from the card's top to the group's bottom.
  const zone: StackHoverZone = {
    parentId: "role-0",
    x: 0,
    y: 0,
    width: 256,
    height: 427,
  }
  const zones = [zone]

  it("matches a point on the parent card", () => {
    expect(findStackHoverZoneAt(zones, 128, 60)).toBe("role-0")
  })

  it("matches a point in the lane between the card and the column", () => {
    expect(findStackHoverZoneAt(zones, 128, 150)).toBe("role-0")
  })

  it("matches a point on a row", () => {
    expect(findStackHoverZoneAt(zones, 128, 240)).toBe("role-0")
  })

  it("matches a point in the gap between two rows", () => {
    // The reason this helper exists: crossing the gap must not read as leaving
    // the column, or the affordance would blink on every row-to-row move.
    expect(findStackHoverZoneAt(zones, 128, 300)).toBe("role-0")
  })

  it("matches a point in the group's own padding", () => {
    expect(findStackHoverZoneAt(zones, 20, 420)).toBe("role-0")
  })

  it.each([
    ["top-left", 0, 0],
    ["top-right", 256, 0],
    ["bottom-left", 0, 427],
    ["bottom-right", 256, 427],
  ])("is inclusive on the %s corner", (_corner, x, y) => {
    expect(findStackHoverZoneAt(zones, x, y)).toBe("role-0")
  })

  it.each([
    ["above", 128, -1],
    ["below", 128, 428],
    ["left", -1, 200],
    ["right", 257, 200],
  ])("returns null just %s the zone", (_side, x, y) => {
    expect(findStackHoverZoneAt(zones, x, y)).toBeNull()
  })

  it("returns null for no zones at all", () => {
    expect(findStackHoverZoneAt([], 128, 200)).toBeNull()
  })

  it("picks the zone the point is actually in", () => {
    const sibling: StackHoverZone = { ...zone, parentId: "role-1", x: 300 }
    expect(findStackHoverZoneAt([zone, sibling], 400, 200)).toBe("role-1")
    expect(findStackHoverZoneAt([zone, sibling], 128, 200)).toBe("role-0")
    expect(findStackHoverZoneAt([zone, sibling], 280, 200)).toBeNull()
  })
})
