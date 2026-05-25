import { waitFor } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { zeroRender } from "@/testing/test-utils"

import { GraphCollection } from "../Graph"

import { createEagerSource, stubRenderNode, type TestPerson } from "./_helpers"

// Warning is gated on `useIsDev()`; the default test provider returns false,
// so we force-enable dev mode for this suite.
vi.mock("@/lib/providers/user-platafform", async () => {
  const actual = await vi.importActual<
    typeof import("@/lib/providers/user-platafform")
  >("@/lib/providers/user-platafform")
  return { ...actual, useIsDev: () => true }
})

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

const nodeAdapter = (r: TestPerson) => ({ parentId: r.parentId })

const orderedRecords: TestPerson[] = [
  { id: "a", name: "A", parentId: null },
  { id: "b", name: "B", parentId: "a" },
]
const reorderedRecords: TestPerson[] = [
  { id: "b", name: "B", parentId: "a" },
  { id: "a", name: "A", parentId: null },
]

describe("GraphCollection stable identity warning", () => {
  let warnSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {})
  })

  afterEach(() => {
    warnSpy.mockRestore()
  })

  // NOTE: PLAN §4.3 describes detecting nodeAdapter identity change. The
  // implemented heuristic is simpler — it warns when a record key shifts
  // index between renders. These tests assert the implemented behavior.

  it("does not warn when record keys keep their index across renders", async () => {
    const source = createEagerSource(orderedRecords)
    const { rerender } = zeroRender(
      <GraphCollection
        source={source}
        nodeAdapter={nodeAdapter}
        renderNode={stubRenderNode}
        onSelectItems={vi.fn()}
        onLoadData={vi.fn()}
        onLoadError={vi.fn()}
      />
    )

    await waitFor(() => {
      // Wait for data fetch to settle.
      expect(source.dataAdapter.fetchData).toBeDefined()
    })

    rerender(
      <GraphCollection
        source={createEagerSource(orderedRecords)}
        nodeAdapter={nodeAdapter}
        renderNode={stubRenderNode}
        onSelectItems={vi.fn()}
        onLoadData={vi.fn()}
        onLoadError={vi.fn()}
      />
    )

    // Allow effects to flush.
    await new Promise((r) => setTimeout(r, 0))

    const movedWarnings = warnSpy.mock.calls.filter((c) =>
      String(c[0]).includes("moved from index")
    )
    expect(movedWarnings).toHaveLength(0)
  })

  it("warns when a record key moves to a different index between renders", async () => {
    const source1 = createEagerSource(orderedRecords)
    const { rerender } = zeroRender(
      <GraphCollection
        source={source1}
        nodeAdapter={nodeAdapter}
        renderNode={stubRenderNode}
        onSelectItems={vi.fn()}
        onLoadData={vi.fn()}
        onLoadError={vi.fn()}
      />
    )

    await waitFor(() => {
      expect(source1.dataAdapter.fetchData).toBeDefined()
    })

    // Re-render with reordered records to trigger the index-shift warning.
    // The source's data is reloaded; we wait until records reach the
    // collection by polling for the warning.
    const source2 = createEagerSource(reorderedRecords)
    rerender(
      <GraphCollection
        source={source2}
        nodeAdapter={nodeAdapter}
        renderNode={stubRenderNode}
        onSelectItems={vi.fn()}
        onLoadData={vi.fn()}
        onLoadError={vi.fn()}
      />
    )

    await waitFor(() => {
      const movedWarnings = warnSpy.mock.calls.filter((c) =>
        String(c[0]).includes("moved from index")
      )
      expect(movedWarnings.length).toBeGreaterThan(0)
    })

    const message = String(
      warnSpy.mock.calls.find((c) =>
        String(c[0]).includes("moved from index")
      )?.[0]
    )
    expect(message).toContain("Graph visualization: record key")
    expect(message).toContain(
      "Provide a stable `source.selectable` (idProvider)"
    )
  })
})
