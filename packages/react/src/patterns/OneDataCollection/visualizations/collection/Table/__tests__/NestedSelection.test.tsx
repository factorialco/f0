import { waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import type { GroupingDefinition, SortingsDefinition } from "@/hooks/datasource"

import { FiltersDefinition } from "@/hooks/datasource"
import { screen, zeroRender as render } from "@/testing/test-utils"
import { TextCell } from "@/ui/value-display/types/text"

import { DataCollectionSource } from "../../../../hooks/useDataCollectionSource/types"
import { ItemActionsDefinition } from "../../../../item-actions"
import { NavigationFiltersDefinition } from "../../../../navigationFilters/types"
import { SummariesDefinition } from "../../../../summary"
import { EditableTableCollection } from "../../EditableTable/EditableTable"

vi.mock("../../../property", () => ({
  propertyRenderers: {
    text: TextCell,
  },
}))

class MockIntersectionObserver implements IntersectionObserver {
  root: Document | Element | null = null
  rootMargin = ""
  thresholds: readonly number[] = []
  disconnect = vi.fn()
  observe = vi.fn()
  takeRecords = vi.fn()
  unobserve = vi.fn()
}
window.IntersectionObserver = MockIntersectionObserver

type Person = { id: string; name: string; children?: Person[] }

const parents: Person[] = [
  {
    id: "p1",
    name: "Parent",
    children: [
      { id: "c1", name: "Child One" },
      { id: "c2", name: "Child Two" },
    ],
  },
  {
    id: "p2",
    name: "Parent Two",
    children: [{ id: "c3", name: "Child Three" }],
  },
]

const columns = [{ label: "name", render: (item: Person) => item.name }]

const createSource = (
  onSelectItems: () => void
): DataCollectionSource<
  Person,
  FiltersDefinition,
  SortingsDefinition,
  SummariesDefinition,
  ItemActionsDefinition<Person>,
  NavigationFiltersDefinition,
  GroupingDefinition<Person>
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
    selectable: (item: Person) => (item.children?.length ? undefined : item.id),
    allPagesSelection: true,
    itemsWithChildren: (item: Person) => !!item.children?.length,
    fetchChildren: ({ item }: { item: Person }) => ({
      records: item.children ?? [],
    }),
    dataAdapter: {
      paginationType: "pages",
      fetchData: async () => ({
        records: parents,
        type: "pages",
        total: parents.length,
        perPage: 20,
        currentPage: 1,
        pagesCount: 1,
      }),
    },
    onSelectItems,
  }) as unknown as DataCollectionSource<
    Person,
    FiltersDefinition,
    SortingsDefinition,
    SummariesDefinition,
    ItemActionsDefinition<Person>,
    NavigationFiltersDefinition,
    GroupingDefinition<Person>
  >

const expandParent = async (user: ReturnType<typeof userEvent.setup>) => {
  const chevron = document.querySelector(".lucide-chevron-right")
  expect(chevron).not.toBeNull()
  await user.click(chevron as Element)
  await waitFor(() => {
    expect(screen.getByTitle("Select c1")).toBeInTheDocument()
  })
}

describe("Table nested-row selection (registry-backed select all)", () => {
  it("header select-all checks every loaded nested child", async () => {
    const user = userEvent.setup()
    render(
      <EditableTableCollection
        columns={columns}
        source={createSource(vi.fn())}
        onSelectItems={vi.fn()}
        onLoadData={vi.fn()}
        onLoadError={vi.fn()}
      />
    )

    await waitFor(() => expect(screen.getByText("Parent")).toBeInTheDocument())
    await expandParent(user)

    const headerCheckbox = screen.getAllByRole("checkbox")[0]
    await user.click(headerCheckbox)

    await waitFor(() => {
      expect(screen.getByTitle("Select c1")).toBeChecked()
      expect(screen.getByTitle("Select c2")).toBeChecked()
    })
  })

  it("'Select all N items' selects nested children without wiping the existing selection", async () => {
    const user = userEvent.setup()
    render(
      <EditableTableCollection
        columns={columns}
        source={createSource(vi.fn())}
        onSelectItems={vi.fn()}
        onLoadData={vi.fn()}
        onLoadError={vi.fn()}
      />
    )

    await waitFor(() => expect(screen.getByText("Parent")).toBeInTheDocument())
    await expandParent(user)

    await user.click(screen.getByTitle("Select c1"))
    await waitFor(() => expect(screen.getByTitle("Select c1")).toBeChecked())

    const selectAllItems = await screen.findByRole("button", {
      name: /select all/i,
    })
    await user.click(selectAllItems)

    await waitFor(() => {
      expect(screen.getByTitle("Select c1")).toBeChecked()
      expect(screen.getByTitle("Select c2")).toBeChecked()
    })
  })
})
