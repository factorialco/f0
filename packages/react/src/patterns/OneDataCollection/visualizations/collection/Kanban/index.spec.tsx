import { screen, waitFor } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"

import { DataCollectionSource } from "@/patterns/OneDataCollection/hooks/useDataCollectionSource/types"
import {
  FiltersDefinition,
  GroupingDefinition,
  OnSelectItemsCallback,
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

describe("KanbanCollection - lane select-all", () => {
  const renderKanban = (extra?: {
    onSelectItems?: OnSelectItemsCallback<Person, TestFilters>
    selectable?: boolean
  }) => {
    const people: Person[] = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
    ]

    const baseSource = createSource(people)
    const source = {
      ...baseSource,
      lanes: [
        { id: "todo", filters: {} },
        { id: "doing", filters: {} },
      ],
      ...(extra?.selectable === false
        ? {}
        : { selectable: (p: Person) => p.id }),
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
        onSelectItems={
          extra?.onSelectItems ??
          (vi.fn() as unknown as OnSelectItemsCallback<Person, TestFilters>)
        }
        onLoadData={vi.fn()}
        onLoadError={vi.fn()}
      />
    )
  }

  it("renders one select-all checkbox per lane only when source.selectable is defined", async () => {
    renderKanban()
    // Wait for content to render
    await screen.findAllByTestId("card")
    const selectAllBoxes = screen.getAllByRole("checkbox", {
      name: "Select all",
    })
    expect(selectAllBoxes).toHaveLength(2)
  })

  it("does not render lane select-all checkboxes when source.selectable is undefined", async () => {
    renderKanban({ selectable: false })
    await screen.findAllByTestId("card")
    const selectAllBoxes = screen.queryAllByRole("checkbox", {
      name: "Select all",
    })
    expect(selectAllBoxes).toHaveLength(0)
  })

  it("calls onSelectItems with all lane records when the lane select-all is clicked", async () => {
    const user = userEvent.setup()
    const onSelectItems = vi.fn()
    renderKanban({ onSelectItems })

    await screen.findAllByTestId("card")
    const selectAllBoxes = screen.getAllByRole("checkbox", {
      name: "Select all",
    })
    await user.click(selectAllBoxes[0])

    await waitFor(() => {
      expect(onSelectItems).toHaveBeenCalled()
    })

    const lastCall = onSelectItems.mock.calls.at(-1)?.[0] as {
      allSelected?: boolean
      itemsStatus?: ReadonlyArray<{
        item: { id: number | string; name: string }
        checked: boolean
      }>
    }
    expect(lastCall).toBeDefined()
    expect(Array.isArray(lastCall.itemsStatus)).toBe(true)

    const selectedIds = (lastCall.itemsStatus ?? [])
      .filter((entry) => entry.checked)
      .map((entry) => entry.item.id)
      .sort()
    // The lane's loaded records are John (id=1) and Jane (id=2). Both must
    // appear in itemsStatus with checked=true after a select-all click.
    expect(selectedIds).toEqual([1, 2])
  })

  it("becomes checked after selecting all cards in a lane (indeterminate state is wired but Radix maps it to aria-checked='false' due to a known DS gap)", async () => {
    const user = userEvent.setup()
    renderKanban()

    const cards = await screen.findAllByTestId("card")
    expect(cards.length).toBeGreaterThanOrEqual(2)

    const allCheckboxes = screen.getAllByRole("checkbox")
    const cardCheckboxes = allCheckboxes.filter(
      (el) => el.getAttribute("title") !== "Select all"
    )
    expect(cardCheckboxes.length).toBeGreaterThanOrEqual(2)

    // Select first card in the first lane: lane select-all stays not-checked
    // (F0Checkbox does not currently forward indeterminate to Radix's
    // aria-checked='mixed' — see Table.test.tsx for the same documented gap).
    await user.click(cardCheckboxes[0])

    await waitFor(() => {
      const boxes = screen.getAllByRole("checkbox", { name: "Select all" })
      expect(boxes[0].getAttribute("aria-checked")).toBe("false")
    })

    // Selecting the second card flips lane select-all to checked
    await user.click(cardCheckboxes[1])

    await waitFor(() => {
      const boxes = screen.getAllByRole("checkbox", { name: "Select all" })
      expect(boxes[0].getAttribute("aria-checked")).toBe("true")
    })
  })

  // -------------------------------------------------------------------------
  // Cross-page "select all items in lane" banner
  // -------------------------------------------------------------------------

  const renderKanbanWithBanner = (opts: {
    allPagesSelection: boolean
    total: number
  }) => {
    const people: Person[] = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
    ]

    const source: DataCollectionSource<
      Person,
      TestFilters,
      SortingsDefinition,
      SummariesDefinition,
      ItemActionsDefinition<Person>,
      TestNavigationFilters,
      GroupingDefinition<Person>
    > & {
      lanes: Array<{ id: string; filters: Record<string, unknown> }>
      allPagesSelection?: boolean
    } = {
      ...createSource(people),
      selectable: (p: Person) => p.id,
      allPagesSelection: opts.allPagesSelection,
      lanes: [
        { id: "todo", filters: {} },
        { id: "doing", filters: {} },
      ],
      dataAdapter: {
        paginationType: "pages",
        perPage: people.length,
        fetchData: async () => ({
          records: people,
          total: opts.total,
          currentPage: 1,
          perPage: people.length,
          pagesCount: 1,
          type: "pages" as const,
        }),
      },
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
  }

  it("does not render the cross-page banner when allPagesSelection is not configured, even after selecting all loaded records", async () => {
    const user = userEvent.setup()
    renderKanbanWithBanner({ allPagesSelection: false, total: 10 })

    await screen.findAllByTestId("card")
    const selectAllBoxes = screen.getAllByRole("checkbox", {
      name: "Select all",
    })
    await user.click(selectAllBoxes[0])

    await waitFor(() => {
      expect(selectAllBoxes[0].getAttribute("aria-checked")).toBe("true")
    })

    expect(
      screen.queryByRole("button", { name: /select all .* in this lane/i })
    ).not.toBeInTheDocument()
  })

  it("renders the cross-page banner with the correct CTA when all loaded records are selected and total > loaded count", async () => {
    const user = userEvent.setup()
    renderKanbanWithBanner({ allPagesSelection: true, total: 5 })

    await screen.findAllByTestId("card")
    const selectAllBoxes = screen.getAllByRole("checkbox", {
      name: "Select all",
    })
    await user.click(selectAllBoxes[0])

    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: "Select all 5 in this lane" })
      ).toBeInTheDocument()
    })
  })

  it("switches the banner to the steady-state 'all items selected' copy after the CTA is clicked", async () => {
    const user = userEvent.setup()
    renderKanbanWithBanner({ allPagesSelection: true, total: 5 })

    await screen.findAllByTestId("card")
    const selectAllBoxes = screen.getAllByRole("checkbox", {
      name: "Select all",
    })
    await user.click(selectAllBoxes[0])

    const cta = await screen.findByRole("button", {
      name: "Select all 5 in this lane",
    })
    await user.click(cta)

    await waitFor(() => {
      expect(screen.getByText("All 5 items selected")).toBeInTheDocument()
      expect(
        screen.queryByRole("button", { name: /select all .* in this lane/i })
      ).not.toBeInTheDocument()
    })
  })

  it("does not show the banner in lane A when only lane B has all records selected", async () => {
    const user = userEvent.setup()
    renderKanbanWithBanner({ allPagesSelection: true, total: 5 })

    await screen.findAllByTestId("card")
    const selectAllBoxes = screen.getAllByRole("checkbox", {
      name: "Select all",
    })
    // Click lane B (second lane)
    await user.click(selectAllBoxes[1])

    await waitFor(() => {
      // Exactly one CTA in the document — the one in lane B
      expect(
        screen.getAllByRole("button", { name: "Select all 5 in this lane" })
      ).toHaveLength(1)
    })
  })

  it("does not render the banner when total === selectedCount (no extra pages to extend selection over)", async () => {
    const user = userEvent.setup()
    renderKanbanWithBanner({ allPagesSelection: true, total: 2 })

    await screen.findAllByTestId("card")
    const selectAllBoxes = screen.getAllByRole("checkbox", {
      name: "Select all",
    })
    // No banner expected: handleSelectAll (the per-lane checkbox handler) was
    // called, NOT handleSelectAllItems — so useSelectable's allSelectedStatus.checked
    // stays false. With total === selectedCount the "more pages to select" branch
    // is also false. Both banner conditions miss → banner not rendered.
    await user.click(selectAllBoxes[0])

    await waitFor(() => {
      expect(selectAllBoxes[0].getAttribute("aria-checked")).toBe("true")
    })

    expect(
      screen.queryByRole("button", { name: /select all .* in this lane/i })
    ).not.toBeInTheDocument()
    expect(
      screen.queryByText(/All \d+ items selected/i)
    ).not.toBeInTheDocument()
  })
})
