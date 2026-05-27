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

// Mock F0Graph as a thin spy. We do NOT simulate React Flow internals — we
// just capture the props that GraphCollection passes so we can invoke the
// callbacks (`onNodeSelect`, `loadChildren`) ourselves and assert the
// derived `selectedNodes` set on re-render.
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

const eagerRecords: TestPerson[] = [
  { id: "1", name: "Root", parentId: null },
  { id: "2", name: "Child", parentId: "1" },
  { id: "3", name: "Leaf", parentId: "2" },
]

describe("GraphCollection selection bridge", () => {
  beforeEach(() => {
    f0GraphMock.mockClear()
  })

  afterEach(() => {
    f0GraphMock.mockClear()
  })

  it("eager: invoking F0Graph's onNodeSelect routes the record to onSelectItems", async () => {
    const onSelectItems = vi.fn()
    const source = createEagerSource(eagerRecords)

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

    // Wait for fetchData → data → F0Graph render.
    await waitFor(() => {
      const props = lastF0GraphProps()
      // @ts-expect-error eager F0Graph receives nodes
      expect(props.nodes).toBeDefined()
      // @ts-expect-error eager F0Graph receives nodes
      expect(props.nodes.length).toBeGreaterThan(0)
    })

    const props = lastF0GraphProps()
    const onNodeSelect = props.onNodeSelect as (
      id: string,
      selected: boolean
    ) => void

    onNodeSelect("2", true)

    await waitFor(() => {
      expect(onSelectItems).toHaveBeenCalled()
    })

    const lastCall =
      onSelectItems.mock.calls[onSelectItems.mock.calls.length - 1]
    const status = lastCall[0] as {
      selectedIds: ReadonlyArray<string | number>
      itemsStatus: ReadonlyArray<{ item: TestPerson; checked: boolean }>
    }
    expect(status.selectedIds.map(String)).toContain("2")
    const checkedItems = status.itemsStatus
      .filter((s) => s.checked)
      .map((s) => s.item.id)
    expect(checkedItems).toContain("2")
  })

  it("eager: selectedNodes prop reflects checked records on re-render", async () => {
    const source = createEagerSource(eagerRecords)
    zeroRender(
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
      const props = lastF0GraphProps()
      // @ts-expect-error eager F0Graph receives nodes
      expect(props.nodes?.length).toBeGreaterThan(0)
    })

    const props = lastF0GraphProps()
    expect(props.selectedNodes).toBeInstanceOf(Set)
    expect(props.selectedNodes).toHaveProperty("size", 0)

    ;(props.onNodeSelect as (id: string, sel: boolean) => void)("3", true)

    await waitFor(() => {
      const updated = lastF0GraphProps()
      expect(updated.selectedNodes).toBeInstanceOf(Set)
      expect((updated.selectedNodes as Set<string>).has("3")).toBe(true)
    })
  })

  it("lazy: selecting a lazy-loaded child resolves the record via the lazy cache", async () => {
    const onSelectItems = vi.fn()
    const rootRecords: TestPerson[] = [
      { id: "root", name: "Root", parentId: null },
    ]
    const source = createPaginatedSource(rootRecords)

    const childRecord: TestPerson = {
      id: "lazy-1",
      name: "Lazy child",
      parentId: "root",
    }
    const loadChildren = vi.fn(
      async (_nodeId: string, _opts: { signal: AbortSignal }) => [childRecord]
    )

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
      // @ts-expect-error lazy F0Graph receives rootNodes + loadChildren
      expect(props.rootNodes).toBeDefined()
      // @ts-expect-error lazy F0Graph receives rootNodes + loadChildren
      expect(props.loadChildren).toBeTypeOf("function")
    })

    const props = lastF0GraphProps()
    const wrappedLoad = (
      props as unknown as {
        loadChildren: (id: string) => Promise<{ id: string }[]>
      }
    ).loadChildren

    const children = await wrappedLoad("root")
    expect(children).toHaveLength(1)
    expect(children[0].id).toBe("lazy-1")
    expect(loadChildren).toHaveBeenCalledTimes(1)
    expect(loadChildren.mock.calls[0][0]).toBe("root")
    expect(loadChildren.mock.calls[0][1].signal).toBeInstanceOf(AbortSignal)

    // Selecting the lazy child must resolve the record from `lazyRecordsRef`
    // even though it never entered the eager projection. GraphCollection
    // forces `allPagesSelection: true` in lazy mode so the lazy id surfaces
    // in both the F0Graph `selectedNodes` Set AND the `onSelectItems`
    // payload's `selectedIds`.
    ;(props.onNodeSelect as (id: string, sel: boolean) => void)("lazy-1", true)

    await waitFor(() => {
      expect(onSelectItems).toHaveBeenCalled()
    })

    const lastCall =
      onSelectItems.mock.calls[onSelectItems.mock.calls.length - 1]
    const status = lastCall[0] as {
      selectedIds: ReadonlyArray<string | number>
    }
    expect(status.selectedIds.map(String)).toContain("lazy-1")

    await waitFor(() => {
      const updated = lastF0GraphProps()
      expect(updated.selectedNodes).toBeInstanceOf(Set)
      expect((updated.selectedNodes as Set<string>).has("lazy-1")).toBe(true)
    })
  })

  it("disables selection on F0Graph when source.selectable is omitted", async () => {
    const source = createEagerSource(eagerRecords, { selectable: undefined })
    zeroRender(
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
      expect(lastF0GraphProps().selectionMode).toBe("none")
    })
  })
})
