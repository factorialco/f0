import { screen, waitFor, within } from "@testing-library/react"
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

describe("KanbanCollection - grouping", () => {
  type GroupPerson = RecordType & {
    id: number
    name: string
    group: string
    lane: string
  }

  const createGroupedSource = (
    data: GroupPerson[]
  ): DataCollectionSource<
    GroupPerson,
    TestFilters,
    SortingsDefinition,
    SummariesDefinition,
    ItemActionsDefinition<GroupPerson>,
    TestNavigationFilters,
    GroupingDefinition<GroupPerson>
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
    currentGrouping: { field: "group", order: "asc" },
    setCurrentGrouping: vi.fn(),
    grouping: {
      collapsible: true,
      defaultOpenGroups: true,
      groupBy: {
        group: {
          name: "Group",
          label: (groupId) => `Group ${String(groupId)}`,
        },
      },
    },
    dataAdapter: {
      fetchData: async (
        options: import("@/hooks/datasource").PaginatedFetchOptions<TestFilters>
      ) => {
        const laneFilter = (options.filters as { lane?: string[] } | undefined)
          ?.lane
        const records = laneFilter
          ? data.filter((p) => laneFilter.includes(p.lane))
          : data
        return {
          records,
          total: records.length,
          perPage: records.length,
          type: "infinite-scroll" as const,
          cursor: null,
          hasMore: false,
        }
      },
      paginationType: "infinite-scroll",
      perPage: data.length,
    },
    idProvider: (item: GroupPerson) => item.id,
  })

  it("pivots grouped data into one board per group showing all lanes", async () => {
    // John(A/todo), Jane(A/doing), Bob(B/doing): group B has no todo item, but
    // the todo lane still renders (empty) so every group keeps the same columns.
    const people: GroupPerson[] = [
      { id: 1, name: "John", group: "A", lane: "todo" },
      { id: 2, name: "Jane", group: "A", lane: "doing" },
      { id: 3, name: "Bob", group: "B", lane: "doing" },
    ]

    const source = {
      ...createGroupedSource(people),
      lanes: [
        { id: "todo", filters: { lane: ["todo"] } },
        { id: "doing", filters: { lane: ["doing"] } },
      ],
    }

    zeroRender(
      <KanbanCollection<
        GroupPerson,
        TestFilters,
        SortingsDefinition,
        SummariesDefinition,
        ItemActionsDefinition<GroupPerson>,
        TestNavigationFilters,
        GroupingDefinition<GroupPerson>
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

    const groupA = await screen.findByTestId("kanban-group-A")
    const groupB = await screen.findByTestId("kanban-group-B")

    expect(within(groupA).getByText("Group A")).toBeInTheDocument()
    expect(within(groupB).getByText("Group B")).toBeInTheDocument()

    // Boards render in grouping order (first appearance across lanes: A, B)
    expect(
      screen
        .getAllByTestId(/^kanban-group-/)
        .map((b) => b.getAttribute("data-testid"))
    ).toEqual(["kanban-group-A", "kanban-group-B"])

    // Group A: both lanes populated (John in Todo, Jane in Doing)
    await waitFor(() => {
      expect(within(groupA).getAllByTestId("card")).toHaveLength(2)
    })
    expect(within(groupA).getByText("Todo")).toBeInTheDocument()
    expect(within(groupA).getByText("Doing")).toBeInTheDocument()

    // Group B: only Bob (in Doing), but both lanes still render — the empty
    // Todo lane is kept, not hidden
    await waitFor(() => {
      expect(within(groupB).getAllByTestId("card")).toHaveLength(1)
    })
    expect(within(groupB).getByText("Doing")).toBeInTheDocument()
    expect(within(groupB).getByText("Todo")).toBeInTheDocument()
  })

  it("collapses and expands a group when its header is toggled", async () => {
    const user = userEvent.setup()
    const people: GroupPerson[] = [
      { id: 1, name: "John", group: "A", lane: "todo" },
      { id: 2, name: "Jane", group: "A", lane: "doing" },
      { id: 3, name: "Bob", group: "B", lane: "doing" },
    ]

    const source = {
      ...createGroupedSource(people),
      lanes: [
        { id: "todo", filters: { lane: ["todo"] } },
        { id: "doing", filters: { lane: ["doing"] } },
      ],
    }

    zeroRender(
      <KanbanCollection<
        GroupPerson,
        TestFilters,
        SortingsDefinition,
        SummariesDefinition,
        ItemActionsDefinition<GroupPerson>,
        TestNavigationFilters,
        GroupingDefinition<GroupPerson>
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

    const groupA = await screen.findByTestId("kanban-group-A")
    await waitFor(() => {
      expect(within(groupA).getAllByTestId("card")).toHaveLength(2)
    })

    // Collapse group A via its header → its board content is hidden
    await user.click(within(groupA).getByTestId("group-header-chevron"))
    await waitFor(() => {
      expect(within(groupA).queryAllByTestId("card")).toHaveLength(0)
    })

    // Expand again → the cards come back
    await user.click(within(groupA).getByTestId("group-header-chevron"))
    await waitFor(() => {
      expect(within(groupA).getAllByTestId("card")).toHaveLength(2)
    })
  })

  // Onboarding case: each version renders its own phases; a version with no
  // people is simply not shown (standard data-driven grouping).
  it("renders each shown version with its own columns and omits empty versions", async () => {
    // v2 and v1 have people (different phases each); v3 has none → must not appear.
    const people: GroupPerson[] = [
      { id: 1, name: "Alice", group: "v2", lane: "p_start" },
      { id: 2, name: "Bob", group: "v2", lane: "p_6mo" },
      { id: 3, name: "Carla", group: "v1", lane: "p_month" },
    ]

    const source = {
      ...createGroupedSource(people),
      // Global union of every version's phases — the fetch runs over this.
      lanes: [
        { id: "p_start", filters: { lane: ["p_start"] } },
        { id: "p_month", filters: { lane: ["p_month"] } },
        { id: "p_prob", filters: { lane: ["p_prob"] } },
        { id: "p_6mo", filters: { lane: ["p_6mo"] } },
      ],
    }

    const lanesByVersion: Record<string, { id: string; title: string }[]> = {
      v2: [
        { id: "p_start", title: "Start" },
        { id: "p_6mo", title: "6 months" },
      ],
      v1: [
        { id: "p_month", title: "Month" },
        { id: "p_prob", title: "Prob" },
      ],
    }

    zeroRender(
      <KanbanCollection<
        GroupPerson,
        TestFilters,
        SortingsDefinition,
        SummariesDefinition,
        ItemActionsDefinition<GroupPerson>,
        TestNavigationFilters,
        GroupingDefinition<GroupPerson>
      >
        lanes={[
          { id: "p_start", title: "Start" },
          { id: "p_month", title: "Month" },
          { id: "p_prob", title: "Prob" },
          { id: "p_6mo", title: "6 months" },
        ]}
        getLanesForGroup={(key) => lanesByVersion[key] ?? []}
        title={(p) => p.name}
        description={(p) => p.name}
        metadata={() => []}
        source={source}
        onSelectItems={vi.fn()}
        onLoadData={vi.fn()}
        onLoadError={vi.fn()}
      />
    )

    // v2 shows ONLY its 2 phases (Start, 6 months) with its people
    const v2 = await screen.findByTestId("kanban-group-v2")
    await waitFor(() => {
      expect(within(v2).getAllByTestId("card")).toHaveLength(2)
    })
    expect(within(v2).getByText("Start")).toBeInTheDocument()
    expect(within(v2).getByText("6 months")).toBeInTheDocument()
    expect(within(v2).queryByText("Month")).not.toBeInTheDocument()
    expect(within(v2).queryByText("Prob")).not.toBeInTheDocument()

    // v1 shows ONLY its own 2 phases (Month, Prob), different from v2's
    const v1 = await screen.findByTestId("kanban-group-v1")
    expect(within(v1).getByText("Month")).toBeInTheDocument()
    expect(within(v1).getByText("Prob")).toBeInTheDocument()
    expect(within(v1).queryByText("Start")).not.toBeInTheDocument()
    expect(within(v1).queryByText("6 months")).not.toBeInTheDocument()

    // v3 has no people → it is NOT rendered at all
    expect(screen.queryByTestId("kanban-group-v3")).not.toBeInTheDocument()
  })
})
