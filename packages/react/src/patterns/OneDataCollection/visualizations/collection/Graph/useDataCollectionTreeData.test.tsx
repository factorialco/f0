import { act, renderHook, waitFor } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import {
  FiltersDefinition,
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"
import { DataCollectionSource } from "@/patterns/OneDataCollection/hooks/useDataCollectionSource/types"
import { ItemActionsDefinition } from "@/patterns/OneDataCollection/item-actions"
import { NavigationFiltersDefinition } from "@/patterns/OneDataCollection/navigationFilters/types"
import { SummariesDefinition } from "@/patterns/OneDataCollection/summary"

import type { GraphVisualizationOptions } from "./types"
import { useDataCollectionTreeData } from "./useDataCollectionTreeData"

type Employee = RecordType & {
  id: string
  name: string
  childrenCount: number
  /** Set on live-update records to drive `getParentId` in re-parenting tests. */
  parentId?: string
}

type TestFilters = FiltersDefinition
type TestNavigationFilters = NavigationFiltersDefinition

const ROOT_KEY = "ROOT"

const employees: Record<string, Employee> = {
  ceo: { id: "ceo", name: "Sofia", childrenCount: 2 },
  vp1: { id: "vp1", name: "Marcus", childrenCount: 1 },
  vp2: { id: "vp2", name: "Nina", childrenCount: 0 },
  mgr1: { id: "mgr1", name: "Leo", childrenCount: 0 },
}

const childrenByParent: Record<string, Employee[]> = {
  [ROOT_KEY]: [employees.ceo],
  ceo: [employees.vp1, employees.vp2],
  vp1: [employees.mgr1],
  vp2: [],
  mgr1: [],
}

const getParentKey = (options: { filters?: { parentId?: string[] } }): string =>
  options.filters?.parentId?.[0] ?? ROOT_KEY

const buildSource = (
  fetchData: ReturnType<typeof vi.fn>
): DataCollectionSource<
  Employee,
  TestFilters,
  SortingsDefinition,
  SummariesDefinition,
  ItemActionsDefinition<Employee>,
  TestNavigationFilters,
  GroupingDefinition<Employee>
> =>
  ({
    currentFilters: {},
    setCurrentFilters: vi.fn(),
    currentSortings: null,
    setCurrentSortings: vi.fn(),
    currentNavigationFilters: {},
    setCurrentNavigationFilters: vi.fn(),
    navigationFilters: undefined,
    currentSearch: undefined,
    debouncedCurrentSearch: undefined,
    setCurrentSearch: vi.fn(),
    isLoading: false,
    setIsLoading: vi.fn(),
    currentGrouping: undefined,
    setCurrentGrouping: vi.fn(),
    dataAdapter: { fetchData },
    idProvider: (item: Employee) => item.id,
    // eslint-disable-next-line no-type-assertion/no-type-assertion -- test scaffolding for a structurally complete source
  }) as unknown as DataCollectionSource<
    Employee,
    TestFilters,
    SortingsDefinition,
    SummariesDefinition,
    ItemActionsDefinition<Employee>,
    TestNavigationFilters,
    GroupingDefinition<Employee>
  >

const buildOptions = (
  overrides: Partial<
    GraphVisualizationOptions<Employee, TestFilters, SortingsDefinition>
  > = {}
): GraphVisualizationOptions<Employee, TestFilters, SortingsDefinition> => ({
  title: (employee) => employee.name,
  getChildrenCount: (employee) => employee.childrenCount,
  // eslint-disable-next-line no-type-assertion/no-type-assertion -- minimal filter shape for the mock adapter
  childrenFilters: (parentId) =>
    ({ parentId: [parentId ?? ROOT_KEY] }) as Partial<unknown>,
  ...overrides,
})

const fetchByParent = (options: { filters?: { parentId?: string[] } }) => ({
  records: childrenByParent[getParentKey(options)] ?? [],
})

const callbacks = () => ({ onLoadData: vi.fn(), onLoadError: vi.fn() })

const countParentFetches = (
  fetchData: ReturnType<typeof vi.fn>,
  parent: string
): number =>
  fetchData.mock.calls.filter(([options]) => getParentKey(options) === parent)
    .length

describe("useDataCollectionTreeData", () => {
  it("loads only the roots at depth 0; children stay unloaded", async () => {
    const fetchData = vi.fn(fetchByParent)
    const source = buildSource(fetchData)
    const cbs = callbacks()

    const { result } = renderHook(() =>
      useDataCollectionTreeData(
        source,
        buildOptions({ defaultExpandDepth: 0 }),
        cbs
      )
    )

    await waitFor(() => expect(result.current.isInitialLoading).toBe(false))

    // Root is collapsed and its children are NOT pre-loaded: the CEO shows an
    // expander purely from `childrenCount`. A single fetch (the roots), no fan-out.
    expect(result.current.expandedNodes.size).toBe(0)
    expect(result.current.nodes.map((node) => node.id)).toEqual(["ceo"])
    expect(fetchData).toHaveBeenCalledTimes(1)
    expect(countParentFetches(fetchData, "ceo")).toBe(0)
    expect(cbs.onLoadData).toHaveBeenCalled()
  })

  it("expands the configured depth and loads only that level", async () => {
    const fetchData = vi.fn(fetchByParent)
    const source = buildSource(fetchData)

    const { result } = renderHook(() =>
      useDataCollectionTreeData(
        source,
        buildOptions({ defaultExpandDepth: 1 }),
        callbacks()
      )
    )

    await waitFor(() => expect(result.current.isInitialLoading).toBe(false))

    // CEO expanded and its reports visible — but their children are NOT
    // pre-loaded (no "one level ahead"); vp1 still shows an expander via count.
    expect(result.current.expandedNodes.has("ceo")).toBe(true)
    const ids = result.current.nodes.map((node) => node.id)
    expect(ids).toContain("vp1")
    expect(ids).toContain("vp2")
    expect(ids).not.toContain("mgr1")
    expect(countParentFetches(fetchData, "vp1")).toBe(0)
  })

  it("loads only the expanded node's children, once (no fan-out)", async () => {
    const fetchData = vi.fn(fetchByParent)
    const source = buildSource(fetchData)

    const { result } = renderHook(() =>
      useDataCollectionTreeData(
        source,
        buildOptions({ defaultExpandDepth: 0 }),
        callbacks()
      )
    )

    await waitFor(() => expect(result.current.isInitialLoading).toBe(false))

    // Expand the CEO: only the CEO's direct children are fetched (one call),
    // never their children — so vp1's child is not loaded yet.
    await act(async () => {
      result.current.setExpandedNodes(new Set(["ceo"]))
    })
    await waitFor(() =>
      expect(result.current.nodes.map((node) => node.id)).toContain("vp1")
    )
    expect(countParentFetches(fetchData, "ceo")).toBe(1)
    expect(countParentFetches(fetchData, "vp1")).toBe(0)
    expect(result.current.nodes.map((node) => node.id)).not.toContain("mgr1")

    // Expanding vp1 then loads its child — incrementally, a single fetch.
    await act(async () => {
      result.current.setExpandedNodes(new Set(["ceo", "vp1"]))
    })
    await waitFor(() =>
      expect(result.current.nodes.map((node) => node.id)).toContain("mgr1")
    )
    expect(countParentFetches(fetchData, "vp1")).toBe(1)

    // Re-applying the same expansion does not refetch.
    await act(async () => {
      result.current.setExpandedNodes(new Set(["ceo", "vp1"]))
    })
    expect(countParentFetches(fetchData, "vp1")).toBe(1)
  })

  it("reveals a node with its full ancestor path on search", async () => {
    const fetchData = vi.fn(fetchByParent)
    const source = buildSource(fetchData)
    const loadNodePath = vi.fn(async () => [
      employees.ceo,
      employees.vp1,
      employees.mgr1,
    ])

    const { result } = renderHook(() =>
      useDataCollectionTreeData(
        source,
        buildOptions({ defaultExpandDepth: 0, loadNodePath }),
        callbacks()
      )
    )

    await waitFor(() => expect(result.current.isInitialLoading).toBe(false))

    await act(async () => {
      await result.current.revealNode("mgr1")
    })

    expect(loadNodePath).toHaveBeenCalledWith("mgr1")
    expect(result.current.expandedNodes.has("ceo")).toBe(true)
    expect(result.current.expandedNodes.has("vp1")).toBe(true)
    expect(result.current.focusedNode).toBe("mgr1")
    expect(result.current.highlightedNodes.has("mgr1")).toBe(true)
    expect(result.current.nodes.map((node) => node.id)).toContain("mgr1")
  })

  it("clearFocus drops the centered/highlighted node", async () => {
    const fetchData = vi.fn(fetchByParent)
    const source = buildSource(fetchData)
    const loadNodePath = vi.fn(async () => [employees.ceo, employees.vp1])

    const { result } = renderHook(() =>
      useDataCollectionTreeData(
        source,
        buildOptions({ defaultExpandDepth: 0, loadNodePath }),
        callbacks()
      )
    )

    await waitFor(() => expect(result.current.isInitialLoading).toBe(false))

    await act(async () => {
      await result.current.revealNode("vp1")
    })
    expect(result.current.focusedNode).toBe("vp1")
    expect(result.current.highlightedNodes.has("vp1")).toBe(true)

    act(() => {
      result.current.clearFocus()
    })

    expect(result.current.focusedNode).toBeUndefined()
    expect(result.current.highlightedNodes.size).toBe(0)
  })

  it("reports load errors via onLoadError", async () => {
    const fetchData = vi.fn(() => {
      throw new Error("boom")
    })
    const source = buildSource(fetchData)
    const cbs = callbacks()

    const { result } = renderHook(() =>
      useDataCollectionTreeData(source, buildOptions(), cbs)
    )

    await waitFor(() => {
      expect(cbs.onLoadError).toHaveBeenCalled()
    })
    expect(result.current.error).not.toBeNull()
  })
})

describe("useDataCollectionTreeData — two-phase hydration", () => {
  it("stays eager (no dataLoaded, no loader) when loadNodeData is absent", async () => {
    const fetchData = vi.fn(fetchByParent)
    const source = buildSource(fetchData)

    const { result } = renderHook(() =>
      useDataCollectionTreeData(
        source,
        buildOptions({ defaultExpandDepth: 0 }),
        callbacks()
      )
    )
    await waitFor(() => expect(result.current.isInitialLoading).toBe(false))

    expect(result.current.loadVisibleNodeData).toBeUndefined()
    expect(result.current.nodes[0]?.dataLoaded).toBeUndefined()
  })

  it("builds nodes as unhydrated and exposes a loader when loadNodeData is set", async () => {
    const fetchData = vi.fn(fetchByParent)
    const source = buildSource(fetchData)
    const loadNodeData = vi.fn(async () => [])

    const { result } = renderHook(() =>
      useDataCollectionTreeData(
        source,
        buildOptions({ defaultExpandDepth: 0, loadNodeData }),
        callbacks()
      )
    )
    await waitFor(() => expect(result.current.isInitialLoading).toBe(false))

    expect(typeof result.current.loadVisibleNodeData).toBe("function")
    expect(result.current.nodes[0]?.id).toBe("ceo")
    expect(result.current.nodes[0]?.dataLoaded).toBe(false)
  })

  it("hydrates only the requested unhydrated nodes and merges the rich data", async () => {
    const fetchData = vi.fn(fetchByParent)
    const source = buildSource(fetchData)
    const loadNodeData = vi.fn(async (ids: string[]) =>
      ids.map((id) => ({ ...employees[id]!, name: `Hydrated ${id}` }))
    )

    const { result } = renderHook(() =>
      useDataCollectionTreeData(
        source,
        buildOptions({ defaultExpandDepth: 0, loadNodeData }),
        callbacks()
      )
    )
    await waitFor(() => expect(result.current.isInitialLoading).toBe(false))

    await act(async () => {
      result.current.loadVisibleNodeData?.(["ceo"])
    })
    await waitFor(() => {
      const ceo = result.current.nodes.find((n) => n.id === "ceo")
      expect(ceo?.dataLoaded).toBe(true)
      expect(ceo?.data.name).toBe("Hydrated ceo")
    })
    expect(loadNodeData).toHaveBeenCalledWith(["ceo"])

    // Re-requesting an already-hydrated node does not fetch again.
    await act(async () => {
      result.current.loadVisibleNodeData?.(["ceo"])
    })
    expect(loadNodeData).toHaveBeenCalledTimes(1)
  })

  it("surfaces an error when hydration fails", async () => {
    const fetchData = vi.fn(fetchByParent)
    const source = buildSource(fetchData)
    const loadNodeData = vi.fn(async () => {
      throw new Error("hydrate boom")
    })
    const cbs = callbacks()

    const { result } = renderHook(() =>
      useDataCollectionTreeData(
        source,
        buildOptions({ defaultExpandDepth: 0, loadNodeData }),
        cbs
      )
    )
    await waitFor(() => expect(result.current.isInitialLoading).toBe(false))

    await act(async () => {
      result.current.loadVisibleNodeData?.(["ceo"])
    })
    await waitFor(() => expect(cbs.onLoadError).toHaveBeenCalled())
    expect(result.current.error).not.toBeNull()
  })

  type OptionOverrides = Partial<
    GraphVisualizationOptions<Employee, TestFilters, SortingsDefinition>
  >

  it("liveUpdate upsert refreshes a node's data in place, without refetch or collapse", async () => {
    const fetchData = vi.fn(fetchByParent)
    const source = buildSource(fetchData)

    const { result, rerender } = renderHook(
      (props: OptionOverrides) =>
        useDataCollectionTreeData(
          source,
          buildOptions({ defaultExpandDepth: 1, ...props }),
          callbacks()
        ),
      { initialProps: {} as OptionOverrides }
    )

    await waitFor(() => expect(result.current.isInitialLoading).toBe(false))
    expect(result.current.expandedNodes.has("ceo")).toBe(true)
    const fetchesBefore = fetchData.mock.calls.length

    await act(async () => {
      rerender({
        liveUpdate: {
          version: 1,
          upsert: [{ ...employees.vp1, name: "Renamed" }],
        },
      })
    })

    // Data swapped in place; expansion preserved; no refetch, no fan-out.
    expect(
      result.current.nodes.find((node) => node.id === "vp1")?.data.name
    ).toBe("Renamed")
    expect(result.current.expandedNodes.has("ceo")).toBe(true)
    expect(fetchData.mock.calls.length).toBe(fetchesBefore)
    expect(result.current.nodes.map((node) => node.id)).not.toContain("mgr1")
  })

  it("liveUpdate upsert inserts a new attachable child under a loaded parent", async () => {
    const fetchData = vi.fn(fetchByParent)
    const source = buildSource(fetchData)
    const vp3: Employee = { id: "vp3", name: "Ada", childrenCount: 0 }
    const getParentId = (employee: Employee) =>
      employee.id === "vp3" ? "ceo" : null

    const { result, rerender } = renderHook(
      (props: OptionOverrides) =>
        useDataCollectionTreeData(
          source,
          buildOptions({ defaultExpandDepth: 1, getParentId, ...props }),
          callbacks()
        ),
      { initialProps: {} as OptionOverrides }
    )

    await waitFor(() => expect(result.current.isInitialLoading).toBe(false))
    const fetchesBefore = fetchData.mock.calls.length

    await act(async () => {
      rerender({ liveUpdate: { version: 1, upsert: [vp3] } })
    })

    // Inserted under its (loaded) parent — not fetched.
    expect(
      result.current.nodes.find((node) => node.id === "vp3")?.parentId
    ).toBe("ceo")
    expect(fetchData.mock.calls.length).toBe(fetchesBefore)
  })

  it("liveUpdate remove drops a node with its descendants and prunes expansion", async () => {
    const fetchData = vi.fn(fetchByParent)
    const source = buildSource(fetchData)

    const { result, rerender } = renderHook(
      (props: OptionOverrides) =>
        useDataCollectionTreeData(
          source,
          buildOptions({ defaultExpandDepth: 1, ...props }),
          callbacks()
        ),
      { initialProps: {} as OptionOverrides }
    )

    await waitFor(() => expect(result.current.isInitialLoading).toBe(false))
    // Expand vp1 so its child mgr1 is loaded (a descendant to cascade).
    await act(async () => {
      result.current.setExpandedNodes(new Set(["ceo", "vp1"]))
    })
    await waitFor(() =>
      expect(result.current.nodes.map((node) => node.id)).toContain("mgr1")
    )
    expect(result.current.expandedNodes.has("vp1")).toBe(true)

    await act(async () => {
      rerender({ liveUpdate: { version: 1, remove: ["vp1"] } })
    })

    const ids = result.current.nodes.map((node) => node.id)
    expect(ids).not.toContain("vp1")
    expect(ids).not.toContain("mgr1") // descendant cascaded
    expect(ids).toContain("ceo")
    expect(result.current.expandedNodes.has("vp1")).toBe(false)
    expect(result.current.expandedNodes.has("ceo")).toBe(true)
  })

  it("liveUpdate re-parenting reconciles the old parent (no eternal spinner) and the new leaf parent (gains its expander, no refetch)", async () => {
    const fetchData = vi.fn(fetchByParent)
    const source = buildSource(fetchData)
    // Only live-update records carry `parentId`; initial loads never call this.
    const getParentId = (employee: Employee) => employee.parentId ?? null

    const { result, rerender } = renderHook(
      (props: OptionOverrides) =>
        useDataCollectionTreeData(
          source,
          buildOptions({ defaultExpandDepth: 1, getParentId, ...props }),
          callbacks()
        ),
      { initialProps: {} as OptionOverrides }
    )

    await waitFor(() => expect(result.current.isInitialLoading).toBe(false))
    // Expand vp1 so mgr1 (its only child) is loaded.
    await act(async () => {
      result.current.setExpandedNodes(new Set(["ceo", "vp1"]))
    })
    await waitFor(() =>
      expect(result.current.nodes.map((node) => node.id)).toContain("mgr1")
    )

    // Move mgr1 from vp1 (loaded, only child) to vp2 (a leaf, childrenCount 0).
    await act(async () => {
      rerender({
        liveUpdate: {
          version: 1,
          upsert: [{ ...employees.mgr1, parentId: "vp2" }],
        },
      })
    })

    const byId = new Map(result.current.nodes.map((node) => [node.id, node]))
    expect(byId.get("mgr1")?.parentId).toBe("vp2")
    // Old parent: still expanded but must stop advertising children, or the
    // graph renders a loading expander forever (children never arrive).
    expect(byId.get("vp1")?.childrenCount).toBe(0)
    expect(byId.get("vp1")?.childrenLoaded).toBe(true)
    // New parent: was a leaf, now advertises its child and is fully loaded.
    expect(byId.get("vp2")?.childrenCount).toBe(1)
    expect(byId.get("vp2")?.childrenLoaded).toBe(true)

    // Expanding the new parent must NOT fetch — the server may not reflect the
    // live change yet; the in-memory child is the ground truth.
    await act(async () => {
      result.current.setExpandedNodes(new Set(["ceo", "vp1", "vp2"]))
    })
    expect(countParentFetches(fetchData, "vp2")).toBe(0)
  })

  it("liveUpdate remove of the last child drops the loaded parent's childrenCount to 0", async () => {
    const fetchData = vi.fn(fetchByParent)
    const source = buildSource(fetchData)

    const { result, rerender } = renderHook(
      (props: OptionOverrides) =>
        useDataCollectionTreeData(
          source,
          buildOptions({ defaultExpandDepth: 1, ...props }),
          callbacks()
        ),
      { initialProps: {} as OptionOverrides }
    )

    await waitFor(() => expect(result.current.isInitialLoading).toBe(false))
    await act(async () => {
      result.current.setExpandedNodes(new Set(["ceo", "vp1"]))
    })
    await waitFor(() =>
      expect(result.current.nodes.map((node) => node.id)).toContain("mgr1")
    )

    await act(async () => {
      rerender({ liveUpdate: { version: 1, remove: ["mgr1"] } })
    })

    const vp1 = result.current.nodes.find((node) => node.id === "vp1")
    expect(vp1?.childrenCount).toBe(0)
    expect(vp1?.childrenLoaded).toBe(true)
  })

  it("liveUpdate re-parenting under a not-loaded parent removes the subtree and reconciles the old parent", async () => {
    const fetchData = vi.fn(fetchByParent)
    const source = buildSource(fetchData)
    const getParentId = (employee: Employee) => employee.parentId ?? null

    const { result, rerender } = renderHook(
      (props: OptionOverrides) =>
        useDataCollectionTreeData(
          source,
          buildOptions({ defaultExpandDepth: 1, getParentId, ...props }),
          callbacks()
        ),
      { initialProps: {} as OptionOverrides }
    )

    await waitFor(() => expect(result.current.isInitialLoading).toBe(false))
    await act(async () => {
      result.current.setExpandedNodes(new Set(["ceo", "vp1"]))
    })
    await waitFor(() =>
      expect(result.current.nodes.map((node) => node.id)).toContain("mgr1")
    )

    // vp1 moves under a parent that is not in the loaded tree: it leaves the
    // graph (with its descendant mgr1) instead of floating as a fake root.
    await act(async () => {
      rerender({
        liveUpdate: {
          version: 1,
          upsert: [{ ...employees.vp1, parentId: "outsider" }],
        },
      })
    })

    const ids = result.current.nodes.map((node) => node.id)
    expect(ids).not.toContain("vp1")
    expect(ids).not.toContain("mgr1")
    expect(result.current.expandedNodes.has("vp1")).toBe(false)
    const ceo = result.current.nodes.find((node) => node.id === "ceo")
    expect(ceo?.childrenCount).toBe(1)
  })

  it("liveUpdate adopts its initial version without applying it on mount", async () => {
    const fetchData = vi.fn(fetchByParent)
    const source = buildSource(fetchData)

    const { result } = renderHook(() =>
      useDataCollectionTreeData(
        source,
        buildOptions({
          defaultExpandDepth: 1,
          liveUpdate: {
            version: 7,
            upsert: [{ ...employees.vp1, name: "Should not apply" }],
          },
        }),
        callbacks()
      )
    )

    await waitFor(() => expect(result.current.isInitialLoading).toBe(false))
    // A batch already present on mount is treated as applied — data untouched.
    expect(
      result.current.nodes.find((node) => node.id === "vp1")?.data.name
    ).toBe("Marcus")
  })
})

describe("useDataCollectionTreeData — focus on entry", () => {
  it("pre-resolves and expands the focusOnEntry path on initial load, without focusing", async () => {
    const fetchData = vi.fn(fetchByParent)
    const source = buildSource(fetchData)
    const loadNodePath = vi.fn(async () => [
      employees.ceo,
      employees.vp1,
      employees.mgr1,
    ])

    const { result } = renderHook(() =>
      useDataCollectionTreeData(
        source,
        buildOptions({
          defaultExpandDepth: 0,
          loadNodePath,
          focusOnEntry: "mgr1",
        }),
        callbacks()
      )
    )

    await waitFor(() => expect(result.current.isInitialLoading).toBe(false))

    // Path resolved + ancestors expanded before the first paint...
    expect(loadNodePath).toHaveBeenCalledWith("mgr1")
    expect(result.current.expandedNodes.has("ceo")).toBe(true)
    expect(result.current.expandedNodes.has("vp1")).toBe(true)
    expect(result.current.nodes.map((node) => node.id)).toContain("mgr1")
    // ...but NO focus/highlight — the initial viewport frames it (initialFocusNodeId).
    expect(result.current.focusedNode).toBeUndefined()
    expect(result.current.highlightedNodes.size).toBe(0)
  })

  it("falls back to the default view when focusOnEntry path resolution fails", async () => {
    const fetchData = vi.fn(fetchByParent)
    const source = buildSource(fetchData)
    const loadNodePath = vi.fn(async () => {
      throw new Error("no path")
    })

    const { result } = renderHook(() =>
      useDataCollectionTreeData(
        source,
        buildOptions({
          defaultExpandDepth: 1,
          loadNodePath,
          focusOnEntry: "mgr1",
        }),
        callbacks()
      )
    )

    // Initial load still completes (no throw) → fit-to-all fallback.
    await waitFor(() => expect(result.current.isInitialLoading).toBe(false))
    expect(result.current.nodes.map((node) => node.id)).toContain("ceo")
  })
})
