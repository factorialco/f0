import { screen, waitFor, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import type { GroupingDefinition, SortingsDefinition } from "@/hooks/datasource"

import { TextCell } from "@/ui/value-display/types/text"
import { DataCollectionSource } from "@/experimental/OneDataCollection/hooks/useDataCollectionSource/types"
import { NavigationFiltersDefinition } from "@/experimental/OneDataCollection/navigationFilters/types"
import { BaseFetchOptions, FiltersDefinition } from "@/hooks/datasource"
import { zeroRender as render } from "@/testing/test-utils"

import { AddRowProvider } from "../../../EditableTable/context/AddRowContext"
import { ItemActionsDefinition } from "../../../../../item-actions"
import { SummariesDefinition } from "../../../../../summary"
import { TableCollection } from "../../index"

vi.mock("../../../property", () => ({
  propertyRenderers: {
    text: TextCell,
  },
}))

type TestFilters = FiltersDefinition
type TestNavigationFilters = NavigationFiltersDefinition
type Person = {
  id: number
  name: string
  email: string
  hasChildren: boolean
}

const parentItem: Person = {
  id: 1,
  name: "Parent User",
  email: "parent@example.com",
  hasChildren: true,
}

const childItems: Person[] = [
  {
    id: 10,
    name: "Child A",
    email: "child.a@example.com",
    hasChildren: false,
  },
  {
    id: 11,
    name: "Child B",
    email: "child.b@example.com",
    hasChildren: false,
  },
]

const testColumns = [
  { label: "name", render: (item: Person) => item.name },
  { label: "email", render: (item: Person) => item.email },
]

class MockIntersectionObserver implements IntersectionObserver {
  root: Document | Element | null = null
  rootMargin: string = ``
  thresholds: readonly number[] = []

  disconnect = vi.fn()
  observe = vi.fn()
  takeRecords = vi.fn()
  unobserve = vi.fn()
}
window.IntersectionObserver = MockIntersectionObserver

const createNestedTestSource = (
  overrides?: Partial<
    DataCollectionSource<
      Person,
      TestFilters,
      SortingsDefinition,
      SummariesDefinition,
      ItemActionsDefinition<Person>,
      TestNavigationFilters,
      GroupingDefinition<Person>
    >
  >
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
  dataAdapter: {
    fetchData: async (_options: BaseFetchOptions<TestFilters>) => ({
      records: [parentItem],
    }),
  },
  currentGrouping: undefined,
  setCurrentGrouping: vi.fn(),
  itemsWithChildren: (item: Person) => item.hasChildren,
  fetchChildren: () => ({
    records: childItems,
    type: "basic" as const,
  }),
  ...overrides,
})

describe("NestedRow onAddRow", () => {
  it("does not render add-row button when onAddRow is not provided", async () => {
    const user = userEvent.setup()

    render(
      <TableCollection<
        Person,
        TestFilters,
        SortingsDefinition,
        SummariesDefinition,
        ItemActionsDefinition<Person>,
        TestNavigationFilters,
        GroupingDefinition<Person>
      >
        columns={testColumns}
        source={createNestedTestSource()}
        onSelectItems={vi.fn()}
        onLoadData={vi.fn()}
        onLoadError={vi.fn()}
      />
    )

    await waitFor(() => {
      expect(screen.getByText("Parent User")).toBeInTheDocument()
    })

    // Expand the parent row by clicking the chevron
    const parentRow = screen.getByText("Parent User").closest("tr")!
    const chevron = parentRow.querySelector("[class*='cursor-pointer']")!
    await user.click(chevron)

    await waitFor(() => {
      expect(screen.getByText("Child A")).toBeInTheDocument()
    })

    expect(
      screen.queryByRole("button", { name: /add row/i })
    ).not.toBeInTheDocument()
  })

  it("renders add-row button when onAddRow is provided and row is expanded", async () => {
    const user = userEvent.setup()

    render(
      <AddRowProvider onAddRow={vi.fn()}>
        <TableCollection<
          Person,
          TestFilters,
          SortingsDefinition,
          SummariesDefinition,
          ItemActionsDefinition<Person>,
          TestNavigationFilters,
          GroupingDefinition<Person>
        >
          columns={testColumns}
          source={createNestedTestSource()}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      </AddRowProvider>
    )

    await waitFor(() => {
      expect(screen.getByText("Parent User")).toBeInTheDocument()
    })

    // Expand the parent row
    const parentRow = screen.getByText("Parent User").closest("tr")!
    const chevron = parentRow.querySelector("[class*='cursor-pointer']")!
    await user.click(chevron)

    await waitFor(() => {
      expect(screen.getByText("Child A")).toBeInTheDocument()
    })

    const tbody = screen.getByRole("table").querySelector("tbody")!
    const nestedAddRowButton = within(tbody).getByRole("button", {
      name: /add row/i,
    })
    expect(nestedAddRowButton).toBeInTheDocument()
  })

  it("renders custom nestedAddRowButtonLabel when provided", async () => {
    const user = userEvent.setup()

    render(
      <AddRowProvider
        onAddRow={vi.fn()}
        nestedAddRowButtonLabel="Add line item"
      >
        <TableCollection<
          Person,
          TestFilters,
          SortingsDefinition,
          SummariesDefinition,
          ItemActionsDefinition<Person>,
          TestNavigationFilters,
          GroupingDefinition<Person>
        >
          columns={testColumns}
          source={createNestedTestSource()}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      </AddRowProvider>
    )

    await waitFor(() => {
      expect(screen.getByText("Parent User")).toBeInTheDocument()
    })

    const parentRow = screen.getByText("Parent User").closest("tr")!
    const chevron = parentRow.querySelector("[class*='cursor-pointer']")!
    await user.click(chevron)

    await waitFor(() => {
      expect(screen.getByText("Child A")).toBeInTheDocument()
    })

    expect(
      screen.getByRole("button", { name: /add line item/i })
    ).toBeInTheDocument()
  })

  it("calls onAddRow with the parent item when the nested add-row button is clicked", async () => {
    const user = userEvent.setup()
    const onAddRowMock = vi.fn()

    render(
      <AddRowProvider onAddRow={onAddRowMock}>
        <TableCollection<
          Person,
          TestFilters,
          SortingsDefinition,
          SummariesDefinition,
          ItemActionsDefinition<Person>,
          TestNavigationFilters,
          GroupingDefinition<Person>
        >
          columns={testColumns}
          source={createNestedTestSource()}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      </AddRowProvider>
    )

    await waitFor(() => {
      expect(screen.getByText("Parent User")).toBeInTheDocument()
    })

    // Expand the parent row
    const parentRow = screen.getByText("Parent User").closest("tr")!
    const chevron = parentRow.querySelector("[class*='cursor-pointer']")!
    await user.click(chevron)

    await waitFor(() => {
      expect(screen.getByText("Child A")).toBeInTheDocument()
    })

    const tbody = screen.getByRole("table").querySelector("tbody")!
    const nestedAddRowButton = within(tbody).getByRole("button", {
      name: /add row/i,
    })
    await user.click(nestedAddRowButton)

    expect(onAddRowMock).toHaveBeenCalledTimes(1)
    expect(onAddRowMock).toHaveBeenCalledWith(
      expect.objectContaining({
        id: parentItem.id,
        name: parentItem.name,
        email: parentItem.email,
        hasChildren: parentItem.hasChildren,
      })
    )
  })
})
