import { waitFor } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { zeroRender } from "@/testing/test-utils"

import { GraphCollection } from "../Graph"

import { createEagerSource, stubRenderNode, type TestPerson } from "./_helpers"

// `isDev` flag is controlled per test by re-mocking the provider through
// vi.doMock + dynamic import. Default is dev=true.
let isDevReturn = true
vi.mock("@/lib/providers/user-platafform", async () => {
  const actual = await vi.importActual<
    typeof import("@/lib/providers/user-platafform")
  >("@/lib/providers/user-platafform")
  return { ...actual, useIsDev: () => isDevReturn }
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

const records: TestPerson[] = [
  { id: "a", name: "A", parentId: null },
  { id: "b", name: "B", parentId: "a" },
]

const renderWithFreshAdapter = (
  source: ReturnType<typeof createEagerSource>
) => {
  // Inlined adapter: identity changes every render.
  return zeroRender(
    <GraphCollection
      source={source}
      nodeAdapter={(r: TestPerson) => ({ parentId: r.parentId })}
      renderNode={stubRenderNode}
      onSelectItems={vi.fn()}
      onLoadData={vi.fn()}
      onLoadError={vi.fn()}
    />
  )
}

const rerenderWithFreshAdapter = (
  rerender: (ui: React.ReactElement) => void,
  source: ReturnType<typeof createEagerSource>
) => {
  rerender(
    <GraphCollection
      source={source}
      nodeAdapter={(r: TestPerson) => ({ parentId: r.parentId })}
      renderNode={stubRenderNode}
      onSelectItems={vi.fn()}
      onLoadData={vi.fn()}
      onLoadError={vi.fn()}
    />
  )
}

describe("GraphCollection stable identity warning", () => {
  let warnSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    isDevReturn = true
    warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {})
  })

  afterEach(() => {
    warnSpy.mockRestore()
  })

  it("warns exactly once when an inlined nodeAdapter changes identity 6+ times within 1s", async () => {
    const source = createEagerSource(records)
    const { rerender } = renderWithFreshAdapter(source)
    await waitFor(() => {
      expect(source.dataAdapter.fetchData).toBeDefined()
    })

    // 5 additional rerenders → 6 total identity values within the 1s window.
    for (let i = 0; i < 6; i++) {
      rerenderWithFreshAdapter(rerender, source)
    }
    // Allow effects to flush.
    await new Promise((r) => setTimeout(r, 0))

    const adapterWarnings = warnSpy.mock.calls.filter((c) =>
      String(c[0]).includes("`nodeAdapter` identity changed")
    )
    expect(adapterWarnings).toHaveLength(1)
    expect(String(adapterWarnings[0][0])).toContain(
      "Wrap it in `useCallback`/`useMemo`"
    )
  })

  it("does not warn when adapters are memoized across many renders", async () => {
    const source = createEagerSource(records)
    const stableAdapter = (r: TestPerson) => ({ parentId: r.parentId })
    const stableRender = stubRenderNode

    const ui = (
      <GraphCollection
        source={source}
        nodeAdapter={stableAdapter}
        renderNode={stableRender}
        onSelectItems={vi.fn()}
        onLoadData={vi.fn()}
        onLoadError={vi.fn()}
      />
    )
    const { rerender } = zeroRender(ui)
    await waitFor(() => {
      expect(source.dataAdapter.fetchData).toBeDefined()
    })

    for (let i = 0; i < 10; i++) {
      rerender(ui)
    }
    await new Promise((r) => setTimeout(r, 0))

    const identityWarnings = warnSpy.mock.calls.filter((c) =>
      String(c[0]).includes("identity changed")
    )
    expect(identityWarnings).toHaveLength(0)
  })

  it("does not warn in production builds even with inlined adapters", async () => {
    isDevReturn = false
    const source = createEagerSource(records)
    const { rerender } = renderWithFreshAdapter(source)
    await waitFor(() => {
      expect(source.dataAdapter.fetchData).toBeDefined()
    })

    for (let i = 0; i < 10; i++) {
      rerenderWithFreshAdapter(rerender, source)
    }
    await new Promise((r) => setTimeout(r, 0))

    const identityWarnings = warnSpy.mock.calls.filter((c) =>
      String(c[0]).includes("identity changed")
    )
    expect(identityWarnings).toHaveLength(0)
  })
})
