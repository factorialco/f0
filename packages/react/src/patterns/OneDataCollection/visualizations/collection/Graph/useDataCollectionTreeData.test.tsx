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
})
