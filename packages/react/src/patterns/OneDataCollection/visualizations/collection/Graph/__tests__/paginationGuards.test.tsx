import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { zeroRender } from "@/testing/test-utils"

import {
  EAGER_REQUIRES_NO_PAGINATION_MESSAGE,
  GraphCollection,
  LAZY_REQUIRES_PAGINATION_MESSAGE,
} from "../Graph"

import {
  createEagerSource,
  createPaginatedSource,
  stubRenderNode,
  type TestPerson,
} from "./_helpers"

// Force `useIsDev` to return true so the guards in Graph.tsx fire. Without
// this the default test provider returns `false` and the guards are skipped.
vi.mock("@/lib/providers/user-platafform", async () => {
  const actual = await vi.importActual<
    typeof import("@/lib/providers/user-platafform")
  >("@/lib/providers/user-platafform")
  return {
    ...actual,
    useIsDev: () => true,
  }
})

// Mock F0Graph so a successful render does not pull in React Flow runtime.
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
  { id: "1", name: "Root", parentId: null },
  { id: "2", name: "Child", parentId: "1" },
]

const nodeAdapter = (r: TestPerson) => ({ parentId: r.parentId })

const renderEager = (
  source: ReturnType<typeof createEagerSource>,
  loadChildren?: () => Promise<unknown[]>
) =>
  zeroRender(
    <GraphCollection
      source={source}
      nodeAdapter={nodeAdapter}
      renderNode={stubRenderNode}
      loadChildren={loadChildren as never}
      onSelectItems={vi.fn()}
      onLoadData={vi.fn()}
      onLoadError={vi.fn()}
    />
  )

const renderLazy = (
  source: ReturnType<typeof createPaginatedSource>,
  loadChildren?: () => Promise<unknown[]>
) =>
  zeroRender(
    <GraphCollection
      source={source}
      nodeAdapter={nodeAdapter}
      renderNode={stubRenderNode}
      loadChildren={loadChildren as never}
      onSelectItems={vi.fn()}
      onLoadData={vi.fn()}
      onLoadError={vi.fn()}
    />
  )

describe("GraphCollection dev guards", () => {
  let consoleErrorSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    // React logs caught render errors via console.error; silence to keep test
    // output clean. The guard error itself is asserted via `toThrow`.
    consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {})
  })

  afterEach(() => {
    consoleErrorSpy.mockRestore()
  })

  it("throws in eager mode when the source is paginated", () => {
    const source = createPaginatedSource(records)
    expect(() => renderEager(source)).toThrow(
      EAGER_REQUIRES_NO_PAGINATION_MESSAGE
    )
  })

  it("throws in lazy mode when the source is not paginated", () => {
    const source = createEagerSource(records)
    expect(() => renderLazy(source, async () => [])).toThrow(
      LAZY_REQUIRES_PAGINATION_MESSAGE
    )
  })

  it("renders without throwing in valid eager mode (no-pagination, no loadChildren)", () => {
    const source = createEagerSource(records)
    expect(() => renderEager(source)).not.toThrow()
  })

  it("renders without throwing in valid lazy mode (paginated + loadChildren)", () => {
    const source = createPaginatedSource(records)
    expect(() => renderLazy(source, async () => [])).not.toThrow()
  })
})
