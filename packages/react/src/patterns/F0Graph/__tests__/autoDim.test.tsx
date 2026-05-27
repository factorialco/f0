import { screen, waitFor } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { zeroRender } from "@/testing/test-utils"

import { F0Graph } from "../F0Graph"
import type { GraphNode } from "../types"

type TestRecord = { id: string; name: string }

const nodes: GraphNode<TestRecord>[] = [
  { id: "1", parentId: null, data: { id: "1", name: "Root" } },
  { id: "2", parentId: "1", data: { id: "2", name: "Child A" } },
  { id: "3", parentId: "1", data: { id: "3", name: "Child B" } },
]

const renderTestNode = (
  node: GraphNode<TestRecord>,
  ctx: { state: string }
) => (
  <span data-testid={`node-${node.id}`} data-state={ctx.state}>
    {node.data.name}
  </span>
)

const getState = async (id: string): Promise<string | null> => {
  const el = await screen.findByTestId(`node-${id}`)
  return el.getAttribute("data-state")
}

describe("F0Graph auto-dim behavior", () => {
  it("renders every node in the 'default' state when no highlights or selection are active", async () => {
    zeroRender(
      <F0Graph<TestRecord>
        nodes={nodes}
        defaultExpandDepth={Infinity}
        renderNode={renderTestNode}
      />
    )

    await waitFor(async () => {
      expect(await getState("1")).toBe("default")
    })
    expect(await getState("2")).toBe("default")
    expect(await getState("3")).toBe("default")
  })

  it("dims non-highlighted nodes and marks highlighted nodes as 'highlighted' when highlightedNodes is non-empty", async () => {
    zeroRender(
      <F0Graph<TestRecord>
        nodes={nodes}
        defaultExpandDepth={Infinity}
        highlightedNodes={new Set(["2"])}
        renderNode={renderTestNode}
      />
    )

    await waitFor(async () => {
      expect(await getState("2")).toBe("highlighted")
    })
    expect(await getState("1")).toBe("dimmed")
    expect(await getState("3")).toBe("dimmed")
  })

  it("keeps the 'selected' state even when the node is also highlighted or would otherwise dim", async () => {
    zeroRender(
      <F0Graph<TestRecord>
        nodes={nodes}
        defaultExpandDepth={Infinity}
        selectionMode="multi"
        selectedNodes={new Set(["1", "2"])}
        highlightedNodes={new Set(["2"])}
        renderNode={renderTestNode}
      />
    )

    // Node 1: selected (not in highlight set, but selection wins over dim).
    await waitFor(async () => {
      expect(await getState("1")).toBe("selected")
    })
    // Node 2: selected AND highlighted → selection wins.
    expect(await getState("2")).toBe("selected")
    // Node 3: neither selected nor highlighted → dimmed because highlights are active.
    expect(await getState("3")).toBe("dimmed")
  })
})
