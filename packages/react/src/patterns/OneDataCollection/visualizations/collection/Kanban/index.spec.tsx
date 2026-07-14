import { screen, waitFor } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { Observable } from "zen-observable-ts"

import { DataCollectionSource } from "@/patterns/OneDataCollection/hooks/useDataCollectionSource/types"
import {
  FiltersDefinition,
  GroupingDefinition,
  RecordType,
  SortingsDefinition,
} from "@/hooks/datasource"
import { userEvent, zeroRender } from "@/testing/test-utils"

import { ItemActionsDefinition } from "../../../item-actions"
import { NavigationFiltersDefinition } from "../../../navigationFilters/types"
import { SummariesDefinition } from "../../../summary"
import { KanbanCollection } from "./Kanban"

type Person = RecordType & {
  id: number | string
  name: string
}

type TestFilters = FiltersDefinition
type TestNavigationFilters = NavigationFiltersDefinition

const createSource = (
  data: Person[]
): DataCollectionSource<
  Person,
  TestFilters,
  SortingsDefinition,
  SummariesDefinition,
  ItemActionsDefinition<Person>,
  TestNavigationFilters,
  GroupingDefinition<Person>
> => ({
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
  dataAdapter: {
    fetchData: async (
      _options: import("@/hooks/datasource").PaginatedFetchOptions<TestFilters>
    ) => ({
      records: data,
      total: data.length,
      perPage: data.length,
      type: "infinite-scroll" as const,
      cursor: null,
      hasMore: false,
    }),
    paginationType: "infinite-scroll",
    perPage: data.length,
  },
  idProvider: (item: Person) => item.id,
})

describe("KanbanCollection - item click", () => {
  it("calls itemOnClick when a card is clicked", async () => {
    const user = userEvent.setup()
    const people: Person[] = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
    ]
    const onItemClick = vi.fn()

    const source = {
      ...createSource(people),
      lanes: [
        { id: "todo", filters: {} },
        { id: "doing", filters: {} },
      ],
      selectable: (p: Person) => p.id,
      itemOnClick: (item: Person) => () => onItemClick(item),
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

    // Click first card (John)
    const cards = await screen.findAllByTestId("card")
    await user.click(cards[0])
    expect(onItemClick).toHaveBeenCalledTimes(1)
    expect(onItemClick).toHaveBeenCalledWith(
      expect.objectContaining({ id: 1, name: "John" })
    )
  })
})

describe("KanbanCollection - lane loading", () => {
  it("renders cards when data arrived but the source never settles loading", async () => {
    const people: Person[] = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
    ]

    const source = {
      ...createSource(people),
      dataAdapter: {
        fetchData: () =>
          new Observable<{
            loading: boolean
            error: null
            data: {
              records: Person[]
              total: number
              perPage: number
              type: "infinite-scroll"
              cursor: string | null
              hasMore: boolean
            }
          }>((subscriber) => {
            subscriber.next({
              loading: true,
              error: null,
              data: {
                records: people,
                total: people.length,
                perPage: people.length,
                type: "infinite-scroll",
                cursor: null,
                hasMore: false,
              },
            })
          }),
        paginationType: "infinite-scroll" as const,
        perPage: people.length,
      },
      lanes: [{ id: "todo", filters: {} }],
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
        lanes={[{ id: "todo", title: "Todo" }]}
        title={(p) => p.name}
        description={(p) => p.name}
        metadata={() => []}
        source={source}
        onSelectItems={vi.fn()}
        onLoadData={vi.fn()}
        onLoadError={vi.fn()}
      />
    )

    const cards = await screen.findAllByTestId("card")
    expect(cards).toHaveLength(2)
    expect(screen.getAllByText("John").length).toBeGreaterThan(0)
    expect(screen.getAllByText("Jane").length).toBeGreaterThan(0)
    expect(screen.queryAllByTestId("skeleton")).toHaveLength(0)
  })

  it("clears the skeleton when an empty lane settles loading", async () => {
    const emptyResponse = {
      records: [] as Person[],
      total: 0,
      perPage: 10,
      type: "infinite-scroll" as const,
      cursor: null,
      hasMore: false,
    }

    const source = {
      ...createSource([]),
      dataAdapter: {
        fetchData: () =>
          new Observable<{
            loading: boolean
            error: null
            data: typeof emptyResponse
          }>((subscriber) => {
            subscriber.next({ loading: true, error: null, data: emptyResponse })
            const settle = setTimeout(() => {
              subscriber.next({
                loading: false,
                error: null,
                data: emptyResponse,
              })
            }, 10)
            return () => clearTimeout(settle)
          }),
        paginationType: "infinite-scroll" as const,
        perPage: 10,
      },
      lanes: [{ id: "todo", filters: {} }],
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
        lanes={[{ id: "todo", title: "Todo" }]}
        title={(p) => p.name}
        description={(p) => p.name}
        metadata={() => []}
        source={source}
        onSelectItems={vi.fn()}
        onLoadData={vi.fn()}
        onLoadError={vi.fn()}
      />
    )

    expect(screen.getAllByTestId("skeleton").length).toBeGreaterThan(0)

    await waitFor(() => {
      expect(screen.queryAllByTestId("skeleton")).toHaveLength(0)
    })
  })
})
