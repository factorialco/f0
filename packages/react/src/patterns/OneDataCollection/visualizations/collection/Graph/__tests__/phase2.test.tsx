import { waitFor } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { F0Graph } from "@/patterns/F0Graph"
import { zeroRender } from "@/testing/test-utils"

import { GraphCollection } from "../Graph"

import {
  createEagerSource,
  createPaginatedSource,
  stubRenderNode,
  type TestPerson,
} from "./_helpers"

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
type CapturedProps = Parameters<typeof F0Graph>[0]

const lastF0GraphProps = (): CapturedProps => {
  const calls = f0GraphMock.mock.calls
  if (calls.length === 0) throw new Error("F0Graph was never rendered")
  return calls[calls.length - 1][0] as CapturedProps
}

const nodeAdapter = (r: TestPerson) => ({ parentId: r.parentId })

describe("GraphCollection Phase 2 — rootSelector", () => {
  beforeEach(() => f0GraphMock.mockClear())
  afterEach(() => f0GraphMock.mockClear())

  it("filters records before projection in eager mode", async () => {
    const records: TestPerson[] = [
      { id: "a", name: "A", parentId: null },
      { id: "b", name: "B", parentId: null },
      { id: "c", name: "C", parentId: "a" },
    ]
    const source = createEagerSource(records)

    zeroRender(
      <GraphCollection
        source={source}
        nodeAdapter={nodeAdapter}
        renderNode={stubRenderNode}
        rootSelector={(rs) => rs.filter((r) => r.id !== "b")}
        onSelectItems={vi.fn()}
        onLoadData={vi.fn()}
        onLoadError={vi.fn()}
      />
    )

    await waitFor(() => {
      const props = lastF0GraphProps()
      // @ts-expect-error eager mode passes nodes
      expect(props.nodes).toBeDefined()
    })

    const props = lastF0GraphProps()
    // @ts-expect-error eager mode passes nodes
    const ids = (props.nodes as Array<{ id: string }>).map((n) => n.id).sort()
    expect(ids).toEqual(["a", "c"])
  })

  it("narrows rootNodes in lazy mode while leaving loadChildren intact", async () => {
    const records: TestPerson[] = [
      { id: "r1", name: "Root1", parentId: null },
      { id: "r2", name: "Root2", parentId: null },
    ]
    const source = createPaginatedSource(records)
    const loadChildren = vi.fn(async () => [])

    zeroRender(
      <GraphCollection
        source={source}
        nodeAdapter={nodeAdapter}
        renderNode={stubRenderNode}
        loadChildren={loadChildren}
        rootSelector={(rs) => rs.filter((r) => r.id === "r1")}
        onSelectItems={vi.fn()}
        onLoadData={vi.fn()}
        onLoadError={vi.fn()}
      />
    )

    await waitFor(() => {
      const props = lastF0GraphProps()
      // @ts-expect-error lazy mode passes rootNodes
      expect(props.rootNodes).toBeDefined()
    })

    const props = lastF0GraphProps()
    // @ts-expect-error lazy mode passes rootNodes
    const ids = (props.rootNodes as Array<{ id: string }>).map((n) => n.id)
    expect(ids).toEqual(["r1"])
    // @ts-expect-error loadChildren is forwarded as the wrapped function
    expect(typeof props.loadChildren).toBe("function")
  })
})

describe("GraphCollection Phase 2 — onLoadError for loadChildren", () => {
  beforeEach(() => f0GraphMock.mockClear())
  afterEach(() => {
    f0GraphMock.mockClear()
    vi.restoreAllMocks()
  })

  it("invokes onLoadError when consumer loader rejects with a non-abort error", async () => {
    const records: TestPerson[] = [{ id: "r", name: "Root", parentId: null }]
    const source = createPaginatedSource(records)
    const failure = new Error("network down")
    const loadChildren = vi.fn(async () => {
      throw failure
    })
    const onLoadChildrenError = vi.fn()

    zeroRender(
      <GraphCollection
        source={source}
        nodeAdapter={nodeAdapter}
        renderNode={stubRenderNode}
        loadChildren={loadChildren}
        onLoadChildrenError={(err, nodeId) => onLoadChildrenError(err, nodeId)}
        onSelectItems={vi.fn()}
        onLoadData={vi.fn()}
        onLoadError={vi.fn()}
      />
    )

    await waitFor(() => {
      const props = lastF0GraphProps()
      // @ts-expect-error lazy mode
      expect(props.loadChildren).toBeDefined()
    })

    const props = lastF0GraphProps()
    // @ts-expect-error wrapped loader is forwarded by GraphCollection
    const wrapped = props.loadChildren as (id: string) => Promise<unknown[]>
    const out = await wrapped("r")

    expect(out).toEqual([])
    expect(onLoadChildrenError).toHaveBeenCalledTimes(1)
    expect(onLoadChildrenError).toHaveBeenCalledWith(failure, "r")
  })

  it("swallows AbortError without invoking onLoadError", async () => {
    const records: TestPerson[] = [{ id: "r", name: "Root", parentId: null }]
    const source = createPaginatedSource(records)
    const abort = new DOMException("Aborted", "AbortError")
    const loadChildren = vi.fn(async () => {
      throw abort
    })
    const onLoadChildrenError = vi.fn()

    zeroRender(
      <GraphCollection
        source={source}
        nodeAdapter={nodeAdapter}
        renderNode={stubRenderNode}
        loadChildren={loadChildren}
        onLoadChildrenError={(err, nodeId) => onLoadChildrenError(err, nodeId)}
        onSelectItems={vi.fn()}
        onLoadData={vi.fn()}
        onLoadError={vi.fn()}
      />
    )

    await waitFor(() => {
      const props = lastF0GraphProps()
      // @ts-expect-error lazy mode
      expect(props.loadChildren).toBeDefined()
    })

    const props = lastF0GraphProps()
    // @ts-expect-error wrapped loader
    const wrapped = props.loadChildren as (id: string) => Promise<unknown[]>
    const out = await wrapped("r")

    expect(out).toEqual([])
    expect(onLoadChildrenError).not.toHaveBeenCalled()
  })

  it("defaults to console.error when no onLoadError is provided", async () => {
    const records: TestPerson[] = [{ id: "r", name: "Root", parentId: null }]
    const source = createPaginatedSource(records)
    const failure = new Error("boom")
    const loadChildren = vi.fn(async () => {
      throw failure
    })
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {})

    zeroRender(
      <GraphCollection
        source={source}
        nodeAdapter={nodeAdapter}
        renderNode={stubRenderNode}
        loadChildren={loadChildren}
        onSelectItems={vi.fn()}
        onLoadData={vi.fn()}
        onLoadError={vi.fn()}
      />
    )

    await waitFor(() => {
      const props = lastF0GraphProps()
      // @ts-expect-error lazy mode
      expect(props.loadChildren).toBeDefined()
    })

    const props = lastF0GraphProps()
    // @ts-expect-error wrapped loader
    const wrapped = props.loadChildren as (id: string) => Promise<unknown[]>
    await wrapped("r")

    const calls = errorSpy.mock.calls.filter((c) =>
      String(c[0] ?? "").includes("`loadChildren` rejected for node")
    )
    expect(calls.length).toBeGreaterThanOrEqual(1)
  })
})

describe("GraphCollection Phase 2 — per-record selectable parity", () => {
  beforeEach(() => f0GraphMock.mockClear())
  afterEach(() => f0GraphMock.mockClear())

  it("ignores selection toggle when source.selectable(record) returns undefined", async () => {
    const records: TestPerson[] = [
      { id: "yes", name: "Selectable", parentId: null },
      { id: "no", name: "Locked", parentId: null },
    ]
    const onSelectItems = vi.fn()
    const source = createEagerSource(records, {
      // Lock "no" — return undefined to opt out per-record.
      selectable: (item: TestPerson) =>
        item.id === "no" ? undefined : item.id,
    })

    zeroRender(
      <GraphCollection
        source={source}
        nodeAdapter={nodeAdapter}
        renderNode={stubRenderNode}
        onSelectItems={onSelectItems}
        onLoadData={vi.fn()}
        onLoadError={vi.fn()}
      />
    )

    await waitFor(() => {
      const props = lastF0GraphProps()
      // @ts-expect-error eager
      expect(props.nodes).toBeDefined()
    })

    const props = lastF0GraphProps()
    const onNodeSelect = props.onNodeSelect as (
      id: string,
      selected: boolean
    ) => void

    // onSelectItems fires once on mount with empty state — record that baseline.
    const baseline = onSelectItems.mock.calls.length

    onNodeSelect("no", true)

    // Allow any pending microtasks to settle.
    await Promise.resolve()
    expect(onSelectItems.mock.calls.length).toBe(baseline)

    // Allowed record still flows through.
    onNodeSelect("yes", true)
    await waitFor(() => {
      expect(onSelectItems.mock.calls.length).toBeGreaterThan(baseline)
    })
  })
})

describe("GraphCollection Phase 2 — lazyRecordsRef survives collapse", () => {
  beforeEach(() => f0GraphMock.mockClear())
  afterEach(() => f0GraphMock.mockClear())

  it("keeps lazy-loaded records resolvable for selection after collapse/re-expand", async () => {
    const roots: TestPerson[] = [{ id: "r", name: "Root", parentId: null }]
    const child: TestPerson = { id: "c", name: "Child", parentId: "r" }
    const source = createPaginatedSource(roots)
    const loadChildren = vi.fn(async () => [child])
    const onSelectItems = vi.fn()

    zeroRender(
      <GraphCollection
        source={source}
        nodeAdapter={nodeAdapter}
        renderNode={stubRenderNode}
        loadChildren={loadChildren}
        onSelectItems={onSelectItems}
        onLoadData={vi.fn()}
        onLoadError={vi.fn()}
      />
    )

    await waitFor(() => {
      const props = lastF0GraphProps()
      // @ts-expect-error lazy mode
      expect(props.loadChildren).toBeDefined()
    })

    const props = lastF0GraphProps()
    // @ts-expect-error wrapped loader
    const wrapped = props.loadChildren as (id: string) => Promise<unknown[]>

    // 1. Expand → child is loaded and cached.
    const childNodes = (await wrapped("r")) as Array<{ id: string }>
    expect(childNodes.map((n) => n.id)).toEqual(["c"])

    // 2. Simulate a collapse by NOT calling loadChildren again. The cache
    //    must still hold "c" so the next selection toggle resolves the
    //    record. (F0Graph's useLazyTree owns expand state; GraphCollection
    //    only owns the record cache, which is what this test guards.)
    const onNodeSelect = props.onNodeSelect as (
      id: string,
      selected: boolean
    ) => void
    onNodeSelect("c", true)

    await waitFor(() => {
      expect(onSelectItems).toHaveBeenCalled()
    })

    const lastCall =
      onSelectItems.mock.calls[onSelectItems.mock.calls.length - 1]
    const status = lastCall[0] as {
      selectedIds: ReadonlyArray<string | number>
    }
    expect(status.selectedIds.map(String)).toContain("c")
  })
})
