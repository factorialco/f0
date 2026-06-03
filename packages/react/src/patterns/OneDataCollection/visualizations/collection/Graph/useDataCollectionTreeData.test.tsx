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
  it("loads roots collapsed but pre-loads their children so they can expand", async () => {
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

    // Root is collapsed, but its children are already loaded so the CEO shows
    // an expander (F0Graph only draws it for parents with loaded children).
    expect(result.current.expandedNodes.size).toBe(0)
    const ids = result.current.nodes.map((node) => node.id)
    expect(ids).toContain("ceo")
    expect(ids).toContain("vp1")
    expect(ids).toContain("vp2")
    expect(cbs.onLoadData).toHaveBeenCalled()
  })

  it("expands the configured depth and keeps one level ahead loaded", async () => {
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

    // CEO expanded, its reports visible, and the reports' children pre-loaded
    // (so vp1 — which has a report — shows an expander).
    expect(result.current.expandedNodes.has("ceo")).toBe(true)
    expect(result.current.nodes.map((node) => node.id)).toContain("mgr1")
  })

  it("loads the next level when a node is expanded, only once", async () => {
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
    expect(countParentFetches(fetchData, "vp1")).toBe(0)

    // Expand the CEO: vp1 becomes visible, so its children are pre-loaded.
    await act(async () => {
      result.current.setExpandedNodes(new Set(["ceo"]))
    })

    await waitFor(() =>
      expect(result.current.nodes.map((node) => node.id)).toContain("mgr1")
    )
    expect(countParentFetches(fetchData, "vp1")).toBe(1)

    // Re-applying the same expansion does not refetch.
    await act(async () => {
      result.current.setExpandedNodes(new Set(["ceo"]))
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
