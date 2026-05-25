import { waitFor } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { F0Graph } from "@/patterns/F0Graph"
import { zeroRender } from "@/testing/test-utils"

import { GraphCollection } from "../Graph"

import { createEagerSource, stubRenderNode, type TestPerson } from "./_helpers"

vi.mock("@/patterns/F0Graph", async () => {
  const actual =
    await vi.importActual<typeof import("@/patterns/F0Graph")>(
      "@/patterns/F0Graph"
    )
  return {
    ...actual,
    F0Graph: vi.fn(() => <div data-testid="f0graph-mock" />),
  }
})

const f0GraphMock = vi.mocked(F0Graph)
const nodeAdapter = (r: TestPerson) => ({ parentId: r.parentId })

const records: TestPerson[] = [
  { id: "1", name: "Root", parentId: null },
  { id: "2", name: "Child", parentId: "1" },
]

describe("GraphCollection graphId isolation", () => {
  beforeEach(() => {
    f0GraphMock.mockClear()
  })

  it("auto-generates a unique graphId per instance when none is provided", async () => {
    zeroRender(
      <div>
        <GraphCollection
          source={createEagerSource(records)}
          nodeAdapter={nodeAdapter}
          renderNode={stubRenderNode}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
        <GraphCollection
          source={createEagerSource(records)}
          nodeAdapter={nodeAdapter}
          renderNode={stubRenderNode}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      </div>
    )

    await waitFor(() => {
      // Each instance must have rendered F0Graph at least once with nodes.
      const calls = f0GraphMock.mock.calls
      const withNodes = calls.filter((c) => {
        const props = c[0] as unknown as { nodes?: unknown[] }
        return Array.isArray(props.nodes) && props.nodes.length > 0
      })
      expect(withNodes.length).toBeGreaterThanOrEqual(2)
    })

    const graphIds = new Set<string>()
    for (const call of f0GraphMock.mock.calls) {
      const props = call[0] as unknown as { graphId?: string }
      if (typeof props.graphId === "string") graphIds.add(props.graphId)
    }
    // Two instances → at least two distinct auto-generated graphIds.
    expect(graphIds.size).toBeGreaterThanOrEqual(2)
  })

  it("uses the caller-provided graphId verbatim when supplied", async () => {
    zeroRender(
      <GraphCollection
        graphId="custom-graph"
        source={createEagerSource(records)}
        nodeAdapter={nodeAdapter}
        renderNode={stubRenderNode}
        onSelectItems={vi.fn()}
        onLoadData={vi.fn()}
        onLoadError={vi.fn()}
      />
    )

    await waitFor(() => {
      const calls = f0GraphMock.mock.calls
      expect(calls.length).toBeGreaterThan(0)
    })
    const allIds = f0GraphMock.mock.calls.map(
      (c) => (c[0] as unknown as { graphId?: string }).graphId
    )
    expect(allIds.every((id) => id === "custom-graph")).toBe(true)
  })
})
