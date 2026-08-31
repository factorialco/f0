import { act, waitFor } from "@testing-library/react"
import { forwardRef } from "react"
import { beforeEach, describe, expect, it, vi } from "vitest"

import {
  FiltersDefinition,
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"
import { zeroRender } from "@/testing/test-utils"

import { DataCollectionSource } from "../../../hooks/useDataCollectionSource/types"
import { ItemActionsDefinition } from "../../../item-actions"
import { NavigationFiltersDefinition } from "../../../navigationFilters/types"
import { DataCollectionSettingsProvider } from "../../../Settings/SettingsProvider"
import { SummariesDefinition } from "../../../summary"
import { GraphCollection } from "./index"
import type { GraphVisualizationOptions } from "./types"

// Stub F0Graph so we can read the props `GraphCollection` hands it — the entry
// selection is wired here (controlled `selectedNodes` seeded with
// `initialSelectedNodeId`, mirrored on change), which is what these tests cover.
let latestF0GraphProps: Record<string, unknown> | null = null
vi.mock("@/patterns/F0Graph", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@/patterns/F0Graph")>()
  return {
    ...actual,
    F0Graph: forwardRef((props: Record<string, unknown>, _ref) => {
      latestF0GraphProps = props
      return null
    }),
  }
})

type Employee = RecordType & { id: string; name: string; childrenCount: number }

const ROOT_KEY = "ROOT"
const employees = {
  ceo: { id: "ceo", name: "Sofia", childrenCount: 2 },
  vp1: { id: "vp1", name: "Marcus", childrenCount: 0 },
  vp2: { id: "vp2", name: "Nina", childrenCount: 0 },
} satisfies Record<string, Employee>

const childrenByParent: Record<string, Employee[]> = {
  [ROOT_KEY]: [employees.ceo],
  ceo: [employees.vp1, employees.vp2],
  vp1: [],
  vp2: [],
}

const getParentKey = (options: { filters?: { parentId?: string[] } }): string =>
  options.filters?.parentId?.[0] ?? ROOT_KEY

const fetchByParent = (options: { filters?: { parentId?: string[] } }) => ({
  records: childrenByParent[getParentKey(options)] ?? [],
})

const buildSource = () =>
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
    dataAdapter: { fetchData: vi.fn(fetchByParent) },
    idProvider: (item: Employee) => item.id,
    // eslint-disable-next-line no-type-assertion/no-type-assertion -- test scaffolding for a structurally complete source
  }) as unknown as DataCollectionSource<
    Employee,
    FiltersDefinition,
    SortingsDefinition,
    SummariesDefinition,
    ItemActionsDefinition<Employee>,
    NavigationFiltersDefinition,
    GroupingDefinition<Employee>
  >

const baseOptions = (
  overrides: Partial<
    GraphVisualizationOptions<Employee, FiltersDefinition, SortingsDefinition>
  > = {}
): GraphVisualizationOptions<
  Employee,
  FiltersDefinition,
  SortingsDefinition
> => ({
  title: (employee) => employee.name,
  getChildrenCount: (employee) => employee.childrenCount,
  // eslint-disable-next-line no-type-assertion/no-type-assertion -- minimal filter shape for the mock adapter
  childrenFilters: (parentId) =>
    ({ parentId: [parentId ?? ROOT_KEY] }) as Partial<unknown>,
  ...overrides,
})

const renderGraph = (
  overrides: Partial<
    GraphVisualizationOptions<Employee, FiltersDefinition, SortingsDefinition>
  > = {}
) =>
  zeroRender(
    <DataCollectionSettingsProvider>
      <GraphCollection
        source={buildSource()}
        onSelectItems={vi.fn()}
        onLoadData={vi.fn()}
        onLoadError={vi.fn()}
        searchSelectionNonce={0}
        {...baseOptions(overrides)}
      />
    </DataCollectionSettingsProvider>
  )

// F0Graph only mounts once the initial load settles.
const waitForF0Graph = () =>
  waitFor(() => expect(latestF0GraphProps).not.toBeNull())

beforeEach(() => {
  latestF0GraphProps = null
})

describe("GraphCollection — initialSelectedNodeId entry selection", () => {
  it("seeds F0Graph's controlled selection with the entry node", async () => {
    renderGraph({ initialSelectedNodeId: "ceo" })
    await waitForF0Graph()

    const selected = latestF0GraphProps?.selectedNodes as
      | Set<string>
      | undefined
    expect(selected).toBeInstanceOf(Set)
    expect([...(selected ?? [])]).toEqual(["ceo"])
  })

  it("leaves selection uncontrolled when no entry node is given", async () => {
    renderGraph()
    await waitForF0Graph()

    // Uncontrolled: F0Graph keeps its own selection (prop stays undefined).
    expect(latestF0GraphProps?.selectedNodes).toBeUndefined()
  })

  it("mirrors later selection changes so clicks keep moving the ring", async () => {
    renderGraph({ initialSelectedNodeId: "ceo" })
    await waitForF0Graph()

    const onSelectedNodesChange = latestF0GraphProps?.onSelectedNodesChange as (
      next: Set<string>
    ) => void
    act(() => onSelectedNodesChange(new Set(["vp1"])))

    const selected = latestF0GraphProps?.selectedNodes as
      | Set<string>
      | undefined
    expect([...(selected ?? [])]).toEqual(["vp1"])
  })
})
