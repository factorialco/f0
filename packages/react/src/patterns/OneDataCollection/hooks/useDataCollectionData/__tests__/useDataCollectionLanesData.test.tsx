import { waitFor } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import {
  FiltersDefinition,
  GroupingDefinition,
  PaginatedFetchOptions,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"
import { DataCollectionSource } from "@/patterns/OneDataCollection/hooks/useDataCollectionSource/types"
import { ItemActionsDefinition } from "@/patterns/OneDataCollection/item-actions"
import { NavigationFiltersDefinition } from "@/patterns/OneDataCollection/navigationFilters/types"
import { SummariesDefinition } from "@/patterns/OneDataCollection/summary"
import { zeroRender } from "@/testing/test-utils"

import { KanbanCollection } from "../../../visualizations/collection/Kanban/Kanban"

type Person = RecordType & {
  id: number | string
  name: string
  stage: string
}

type TestFilters = FiltersDefinition
type TestNavigationFilters = NavigationFiltersDefinition

const people: Person[] = [
  { id: 1, name: "John", stage: "todo" },
  { id: 2, name: "Jane", stage: "doing" },
  { id: 3, name: "Alice", stage: "todo" },
]

type FetchOptions = PaginatedFetchOptions<TestFilters> & {
  navigationFilters?: unknown
}

describe("useDataCollectionLanesData — lane-authoritative merge", () => {
  it("each lane queries its own filter when global currentFilters is disjoint", async () => {
    const fetchData = vi.fn(async (_options: FetchOptions) => ({
      records: people,
      total: people.length,
      perPage: people.length,
      type: "infinite-scroll" as const,
      cursor: null,
      hasMore: false,
    }))

    const source: DataCollectionSource<
      Person,
      TestFilters,
      SortingsDefinition,
      SummariesDefinition,
      ItemActionsDefinition<Person>,
      TestNavigationFilters,
      GroupingDefinition<Person>
    > = {
      currentFilters: { stage: ["todo"] },
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
      dataAdapter: {
        fetchData,
        paginationType: "infinite-scroll",
        perPage: 10,
      },
      idProvider: (item: Person) => item.id,
      lanes: [
        { id: "todo", filters: { stage: ["todo"] } },
        { id: "doing", filters: { stage: ["doing"] } },
        { id: "done", filters: { stage: ["done"] } },
      ],
    }

    zeroRender(
      <KanbanCollection<
        Person,
        TestFilters,
        SortingsDefinition,
        SummariesDefinition,
        ItemActionsDefinition<Person>,
        TestNavigationFilters,
        GroupingDefinition<Person>
      >
        lanes={[
          { id: "todo", title: "Todo" },
          { id: "doing", title: "Doing" },
          { id: "done", title: "Done" },
        ]}
        title={(p) => p.name}
        description={(p) => p.name}
        metadata={() => []}
        source={source}
        onSelectItems={vi.fn()}
        onLoadData={vi.fn()}
        onLoadError={vi.fn()}
      />
    )

    await waitFor(() => {
      expect(fetchData.mock.calls.length).toBeGreaterThanOrEqual(3)
    })

    const stagesByCall = fetchData.mock.calls
      .map(([options]) => options.filters as { stage?: string[] })
      .map((f) => f.stage)

    for (const stage of stagesByCall) {
      expect(stage).toBeDefined()
      expect(Array.isArray(stage)).toBe(true)
      expect(stage!.length).toBeGreaterThan(0)
    }

    const stageSet = new Set(stagesByCall.flatMap((s) => s ?? []))
    expect(stageSet).toEqual(new Set(["todo", "doing", "done"]))
  })
})
