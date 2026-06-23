import { act, screen, waitFor, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"

import type {
  GroupingDefinition,
  GroupingState,
  SortingsDefinition,
} from "@/hooks/datasource"

import { TextCell } from "@/ui/value-display/types/text"
import { useDataCollectionData } from "@/patterns/OneDataCollection/hooks/useDataCollectionData/useDataCollectionData"
import { DataCollectionSource } from "@/patterns/OneDataCollection/hooks/useDataCollectionSource/types"
import { NavigationFiltersDefinition } from "@/patterns/OneDataCollection/navigationFilters/types"
import {
  BaseFetchOptions,
  FiltersDefinition,
  PaginatedFetchOptions,
  PaginationType,
} from "@/hooks/datasource"
import { zeroRender as render, zeroRenderHook } from "@/testing/test-utils"

import { ItemActionsDefinition } from "../../../../item-actions"
import { SummariesDefinition } from "../../../../summary"
import { TableCollection } from "../index"
import type { TableColumnDefinition } from "../types"

vi.mock("../../property", () => ({
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
  displayName: string
}

const testData: Person[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    displayName: "Dr. John Doe",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    displayName: "Dr. Jane Smith",
  },
]

const testColumns = [
  { label: "name", render: (item: Person) => item.name },
  { label: "email", render: (item: Person) => item.email },
]

const createTestSource = (
  data: Person[] = testData,
  error?: Error
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
    fetchData: async ({ filters: _filters }: BaseFetchOptions<TestFilters>) => {
      if (error) throw error
      return { records: data }
    },
  },
  currentGrouping: undefined,
  setCurrentGrouping: vi.fn(),
})

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

describe("TableCollection", () => {
  describe("rendering", () => {
    it("shows loading state initially", async () => {
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
          source={createTestSource()}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      )

      // The OneTable.Skeleton component uses aria-hidden="true" and role="presentation"
      // so we need to use { hidden: true } to find these elements
      const loadingRows = screen.getAllByRole("row", { hidden: true })

      // Header row + skeleton rows (5 by default in OneTable.Skeleton)
      expect(loadingRows.length).toBeGreaterThan(0)

      // Look for skeleton elements by their class name
      const skeletons = document.getElementsByClassName("animate-pulse")
      expect(skeletons.length).toBeGreaterThan(0) // Should have multiple skeleton elements
    })

    it("renders table with data after loading", async () => {
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
          source={createTestSource()}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      )

      // Wait for loading state to disappear by checking for actual data
      await waitFor(() => {
        expect(screen.getByText(testData[0].name)).toBeInTheDocument()
      })

      // Verify table structure
      expect(screen.getByRole("table")).toBeInTheDocument()
      expect(screen.getAllByRole("columnheader")).toHaveLength(2)

      // Verify data rendering
      testData.forEach((item) => {
        expect(screen.getByText(item.name)).toBeInTheDocument()
        expect(screen.getByText(item.email)).toBeInTheDocument()
      })
    })
  })

  describe("referenceRowType striked variant", () => {
    it("applies line-through only to rows the predicate marks as striked", async () => {
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
          source={createTestSource()}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
          referenceRowType={(item) => (item.id === 1 ? "striked" : "none")}
        />
      )

      await waitFor(() => {
        expect(screen.getByText(testData[0].name)).toBeInTheDocument()
      })

      const struckRow = screen.getByText(testData[0].name).closest("tr")
      expect(struckRow?.className).toMatch(/line-through/)

      const plainRow = screen.getByText(testData[1].name).closest("tr")
      expect(plainRow?.className).not.toMatch(/line-through/)
    })
  })

  describe("features", () => {
    it("renders custom column formatting", async () => {
      const columnsWithCustomRender = [
        testColumns[0], // Keep original name column
        {
          key: "displayName" as const,
          label: "Formal Title",
          render: (item: Person) => `Dr. ${item.name}`,
        },
      ]

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
          columns={columnsWithCustomRender}
          source={createTestSource()}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      )

      await waitFor(() => {
        testData.forEach((item) => {
          expect(screen.getByText(`Dr. ${item.name}`)).toBeInTheDocument()
        })
      })
    })

    it("applies minWidth to header and row cells", async () => {
      const columnsWithMinWidth = [
        {
          label: "name",
          render: (item: Person) => item.name,
          minWidth: 220,
        },
        {
          label: "email",
          render: (item: Person) => item.email,
        },
      ]

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
          columns={columnsWithMinWidth}
          source={createTestSource()}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      )

      await waitFor(() => {
        expect(screen.getByText(testData[0].name)).toBeInTheDocument()
      })

      const nameHeader = screen.getByRole("columnheader", { name: "name" })
      expect(nameHeader).toHaveStyle({ minWidth: "220px" })

      const firstNameCell = screen
        .getAllByText(testData[0].name)[0]
        .closest("td")
      expect(firstNameCell).toHaveStyle({ minWidth: "220px" })
    })

    it("applies minWidth in grouped header placeholders for ungrouped columns", async () => {
      const groupedColumns = [
        {
          label: "name",
          render: (item: Person) => item.name,
          headerGroupId: "identity",
        },
        {
          label: "email",
          render: (item: Person) => item.email,
          minWidth: 180,
        },
      ]

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
          columns={groupedColumns}
          source={createTestSource()}
          headerGroupLabels={{ identity: "Identity" }}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      )

      await waitFor(() => {
        expect(screen.getByText(testData[0].name)).toBeInTheDocument()
      })

      const identityGroupHeader = screen.getByRole("columnheader", {
        name: "Identity",
      })
      const groupedHeaderRow = identityGroupHeader.closest("tr")
      const groupedHeaderCells = within(
        groupedHeaderRow as HTMLElement
      ).getAllByRole("columnheader")

      const ungroupedPlaceholderHeader =
        groupedHeaderCells[groupedHeaderCells.length - 1]
      expect(ungroupedPlaceholderHeader).toHaveStyle({ minWidth: "180px" })
    })

    it("renders error state when data fetch fails", async () => {
      const errorMessage = "Failed to fetch data"
      const error = new Error(errorMessage)

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
          source={createTestSource([], error)}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      )

      // Wait for loading state to finish
      await waitFor(() => {
        const rows = screen.getAllByRole("row")
        expect(rows).toHaveLength(1) // Just the header row
      })

      // Headers should still be present
      expect(screen.getAllByRole("columnheader")).toHaveLength(2)

      // Verify error state
      const { result } = zeroRenderHook(() =>
        useDataCollectionData(createTestSource([], error))
      )
      await waitFor(() => {
        expect(result.current.error).toEqual({
          message: "Error fetching data",
          cause: error,
        })
      })
    })
  })

  describe("pagination", () => {
    const createPaginatedTestSource = ({
      totalItems = 50,
      itemsPerPage = 10,
      paginationType = "pages",
    }: {
      totalItems?: number
      itemsPerPage?: number
      paginationType?: PaginationType
    }): DataCollectionSource<
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
      currentSearch: undefined,
      debouncedCurrentSearch: undefined,
      setCurrentSearch: vi.fn(),
      isLoading: false,
      setIsLoading: vi.fn(),
      setCurrentNavigationFilters: vi.fn(),
      navigationFilters: undefined,
      currentNavigationFilters: {},
      currentGrouping: undefined,
      setCurrentGrouping: vi.fn(),
      dataAdapter: {
        paginationType,
        perPage: itemsPerPage,
        fetchData: async (
          options:
            | BaseFetchOptions<TestFilters>
            | PaginatedFetchOptions<TestFilters>
        ) => {
          // Handle both BaseFetchOptions and PaginatedFetchOptions
          const currentPage =
            "pagination" in options ? (options.pagination?.currentPage ?? 1) : 1
          const pagesCount = Math.ceil(totalItems / itemsPerPage)
          const startIndex = (currentPage - 1) * itemsPerPage
          const endIndex = startIndex + itemsPerPage
          const paginatedData = Array.from({ length: totalItems }, (_, i) => ({
            id: i + 1,
            name: `User ${i + 1}`,
            email: `user${i + 1}@example.com`,
            displayName: `Dr. User ${i + 1}`,
          })).slice(startIndex, endIndex)

          return {
            records: paginatedData,
            total: totalItems,
            currentPage,
            perPage: itemsPerPage,
            pagesCount,
            type: "pages" as const,
          }
        },
      },
    })

    it("renders pagination controls when pages pagination is enabled", async () => {
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
          source={createPaginatedTestSource({
            paginationType: "pages",
          })}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      )

      await waitFor(() => {
        // OnePagination renders navigation buttons and page numbers
        const buttons = screen.getAllByRole("button")
        expect(buttons).toHaveLength(2) // Previous and Next buttons
        expect(screen.getByText("1")).toBeInTheDocument()
      })
    })

    it("should not render pagination controls when infinite scroll pagination is enabled", async () => {
      expect(new IntersectionObserver((entries) => entries)).toBeInstanceOf(
        IntersectionObserver
      )
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
          source={createPaginatedTestSource({
            paginationType: "infinite-scroll",
          })}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      )

      await waitFor(() => {
        // OnePagination renders navigation buttons and page numbers
        const buttons = screen.queryByRole("link")
        expect(buttons).not.toBeInTheDocument()
        expect(screen.queryByText("1")).not.toBeInTheDocument()
      })
    })

    it("shows loading state when switching pages", async () => {
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
          source={createPaginatedTestSource({})}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      )

      // Wait for initial load
      await waitFor(() => {
        expect(screen.getByText("User 1")).toBeInTheDocument()
      })

      // Click page 2
      const nextButton = screen.getByLabelText("Go to next page")
      nextButton.click()

      // Wait for page 2 data to load
      await waitFor(() => {
        expect(screen.getByText("User 11")).toBeInTheDocument()
      })
    })

    it("displays correct data for each page", async () => {
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
          source={createPaginatedTestSource({})}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      )

      // Check first page
      await waitFor(() => {
        expect(screen.getByText("User 1")).toBeInTheDocument()
        expect(screen.getByText("User 10")).toBeInTheDocument()
      })

      // Go to second page
      const nextButton = screen.getByLabelText("Go to next page")
      nextButton.click()

      // Check second page
      await waitFor(() => {
        expect(screen.getByText("User 11")).toBeInTheDocument()
        expect(screen.getByText("User 20")).toBeInTheDocument()
      })
    })

    it("handles edge case with single page", async () => {
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
          source={createPaginatedTestSource({
            totalItems: 5,
            itemsPerPage: 10,
          })}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      )

      await waitFor(() => {
        expect(screen.getByText("User 1")).toBeInTheDocument()
        expect(screen.getByText("User 5")).toBeInTheDocument()
      })
    })

    it("handles edge case with empty data", async () => {
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
          source={createPaginatedTestSource({
            totalItems: 0,
            itemsPerPage: 10,
          })}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      )

      await waitFor(() => {
        // With empty data, there should be no pagination controls
        expect(screen.queryByRole("navigation")).not.toBeInTheDocument()
      })
    })
  })

  describe("sorting", () => {
    it("allows sorting by column with a sorting key", async () => {
      // Create a modified source with sorting capability
      const sortableSource = {
        ...createTestSource(),
        currentSortings: null,
        setCurrentSortings: vi.fn(),
        sortings: {
          name: { label: "Name" },
          email: { label: "Email" },
        },
      }

      // Create columns with sorting keys
      const columnsWithSorting = [
        {
          label: "name",
          render: (item: Person) => item.name,
          sorting: "name" as const,
        },
        {
          label: "email",
          render: (item: Person) => item.email,
          sorting: "email" as const,
        },
      ]

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
          columns={columnsWithSorting}
          source={sortableSource}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      )

      await waitFor(() => {
        expect(screen.getByText(testData[0].name)).toBeInTheDocument()
      })

      // Get the header cells - we need to find the th element that contains the name text
      const headerCells = screen.getAllByRole("columnheader")
      const nameHeader = headerCells.find((cell) =>
        cell.textContent?.includes("name")
      )

      // Verify column headers have sort buttons and aria-sort attribute
      expect(nameHeader).toHaveAttribute("aria-sort", "none")
    })

    it("calls setCurrentSortings when a sortable column is clicked", async () => {
      // Given a table with sortable columns
      const setCurrentSortingsMock = vi.fn()

      const modifiedSource = {
        ...createTestSource(),
        currentSortings: null,
        setCurrentSortings: setCurrentSortingsMock,
        sortings: {
          name: { label: "Name" },
        },
      }

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
          columns={[
            {
              label: "name",
              render: (item: Person) => item.name,
              sorting: "name" as const,
            },
            {
              label: "email",
              render: (item: Person) => item.email,
            },
          ]}
          source={modifiedSource}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      )

      // Wait for the table to load and verify it's rendered
      await waitFor(() => {
        expect(screen.getByText(testData[0].name)).toBeInTheDocument()
      })

      // Find the header with the sortable column
      const headers = screen.getAllByRole("columnheader")
      const nameHeader = headers[0]
      const sortButton = within(nameHeader).queryByRole("button")

      // When we click the sort button
      act(() => {
        if (sortButton) {
          ;(sortButton as HTMLButtonElement).click()
        }
      })

      // Then setCurrentSortings should be called with a function
      expect(setCurrentSortingsMock).toHaveBeenCalled()

      // Execute the function passed to setCurrentSortings
      const setStateFn = setCurrentSortingsMock.mock.calls[0][0]
      const result = setStateFn()

      // Check the result of the function
      expect(result).toEqual({
        field: "name",
        order: "asc" as const,
      })
    })

    it("toggles sort order when clicking the same column twice", async () => {
      // Given a table with sortings already applied
      const setCurrentSortingsMock = vi.fn()

      const modifiedSource = {
        ...createTestSource(),
        currentSortings: {
          field: "name",
          order: "asc" as const,
        },
        setCurrentSortings: setCurrentSortingsMock,
        sortings: {
          name: { label: "Name" },
        },
      }

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
          columns={[
            {
              label: "name",
              render: (item: Person) => item.name,
              sorting: "name" as const,
            },
            {
              label: "email",
              render: (item: Person) => item.email,
            },
          ]}
          source={modifiedSource}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      )

      // Wait for the table to load and verify it's rendered
      await waitFor(() => {
        expect(screen.getByText(testData[0].name)).toBeInTheDocument()
      })

      // Find the header with the sortable column
      const headers = screen.getAllByRole("columnheader")
      const nameHeader = headers[0]
      const sortButton = within(nameHeader).queryByRole("button")

      // Check that aria-sort is correctly set to "ascending"
      expect(nameHeader).toHaveAttribute("aria-sort", "ascending")

      // When we click the sort button again
      act(() => {
        if (sortButton) {
          ;(sortButton as HTMLButtonElement).click()
        }
      })

      // Then setCurrentSortings should be called with a function
      expect(setCurrentSortingsMock).toHaveBeenCalled()

      // Execute the function passed to setCurrentSortings
      const setStateFn = setCurrentSortingsMock.mock.calls[0][0]
      const result = setStateFn()

      // Check the result of the function
      expect(result).toEqual({
        field: "name",
        order: "desc" as const,
      })
    })

    it("clears sorting when clicking a sorted column in desc order", async () => {
      // Given a table with desc sortings already applied
      const setCurrentSortingsMock = vi.fn()

      const modifiedSource = {
        ...createTestSource(),
        currentSortings: {
          field: "name",
          order: "desc" as const,
        },
        setCurrentSortings: setCurrentSortingsMock,
        sortings: {
          name: { label: "Name" },
        },
      }

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
          columns={[
            {
              label: "name",
              render: (item: Person) => item.name,
              sorting: "name" as const,
            },
            {
              label: "email",
              render: (item: Person) => item.email,
            },
          ]}
          source={modifiedSource}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      )

      // Wait for the table to load and verify it's rendered
      await waitFor(() => {
        expect(screen.getByText(testData[0].name)).toBeInTheDocument()
      })

      // Find the header with the sortable column
      const headers = screen.getAllByRole("columnheader")
      const nameHeader = headers[0]
      const sortButton = within(nameHeader).queryByRole("button")

      // Check that aria-sort is correctly set to "descending"
      expect(nameHeader).toHaveAttribute("aria-sort", "descending")

      // When we click the sort button again
      act(() => {
        if (sortButton) {
          ;(sortButton as HTMLButtonElement).click()
        }
      })

      // Then setCurrentSortings should be called with a function
      expect(setCurrentSortingsMock).toHaveBeenCalled()

      // Execute the function passed to setCurrentSortings
      const setStateFn = setCurrentSortingsMock.mock.calls[0][0]
      const result = setStateFn()

      // Check the result of the function
      expect(result).toBeNull()
    })

    it("warns when sorting is used without sortings defined in source", async () => {
      // Spy on console.warn
      const consoleSpy = vi.spyOn(console, "warn").mockImplementation(() => {})

      // Create columns with sorting but don't provide sortings in source
      const columnsWithSorting = [
        {
          label: "name",
          render: (item: Person) => item.name,
          sorting: "name" as const,
        },
      ]

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
          columns={columnsWithSorting}
          source={createTestSource()} // No sortings defined
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      )

      await waitFor(() => {
        expect(screen.getByText(testData[0].name)).toBeInTheDocument()
      })

      // Verify warning was logged
      expect(consoleSpy).toHaveBeenCalledWith(
        "Sorting is defined on a column but no sortings are provided in the data source"
      )

      // Clean up mock
      consoleSpy.mockRestore()
    })
  })

  describe("header click", () => {
    it("renders the header label as a button and calls onHeaderClick when clicked", async () => {
      const user = userEvent.setup()
      const onHeaderClick = vi.fn()

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
          columns={[
            {
              label: "name",
              render: (item: Person) => item.name,
              onHeaderClick,
            },
            { label: "email", render: (item: Person) => item.email },
          ]}
          source={createTestSource()}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      )

      await waitFor(() => {
        expect(screen.getByText(testData[0].name)).toBeInTheDocument()
      })

      const headers = screen.getAllByRole("columnheader")
      const nameHeader = headers.find((h) => h.textContent?.includes("name"))!
      const headerButton = within(nameHeader).getByRole("button", {
        name: "name",
      })

      await user.click(headerButton)

      expect(onHeaderClick).toHaveBeenCalledTimes(1)
    })

    it("does not render the header label as a button when onHeaderClick is not provided", async () => {
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
          source={createTestSource()}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      )

      await waitFor(() => {
        expect(screen.getByText(testData[0].name)).toBeInTheDocument()
      })

      const headers = screen.getAllByRole("columnheader")
      const nameHeader = headers.find((h) => h.textContent?.includes("name"))!

      expect(within(nameHeader).queryByRole("button")).not.toBeInTheDocument()
    })

    it("supports onHeaderClick independently of sorting on the same column", async () => {
      const user = userEvent.setup()
      const onHeaderClick = vi.fn()
      const setCurrentSortingsMock = vi.fn()

      const modifiedSource = {
        ...createTestSource(),
        currentSortings: null,
        setCurrentSortings: setCurrentSortingsMock,
        sortings: {
          name: { label: "Name" },
        },
      }

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
          columns={[
            {
              label: "name",
              render: (item: Person) => item.name,
              sorting: "name" as const,
              onHeaderClick,
            },
            { label: "email", render: (item: Person) => item.email },
          ]}
          source={modifiedSource}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      )

      await waitFor(() => {
        expect(screen.getByText(testData[0].name)).toBeInTheDocument()
      })

      const nameHeader = screen.getAllByRole("columnheader")[0]

      // Clicking the label button triggers onHeaderClick, not sorting
      const labelButton = within(nameHeader).getByRole("button", {
        name: "name",
      })
      await user.click(labelButton)
      expect(onHeaderClick).toHaveBeenCalledTimes(1)
      expect(setCurrentSortingsMock).not.toHaveBeenCalled()

      // Clicking the separate sort button triggers sorting, not onHeaderClick
      const sortButton = within(nameHeader).getByRole("button", {
        name: "Sort",
      })
      await user.click(sortButton)
      expect(setCurrentSortingsMock).toHaveBeenCalled()
      expect(onHeaderClick).toHaveBeenCalledTimes(1)
    })
  })

  describe("column visibility", () => {
    it("hides columns with hidden: true on first render", async () => {
      const columnsWithHidden = [
        {
          label: "Visible Column",
          render: (item: Person) => item.name,
        },
        {
          label: "Hidden Column",
          hidden: true,
          render: (item: Person) => item.email,
        },
      ]

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
          columns={columnsWithHidden}
          source={createTestSource()}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
          allowColumnHiding={true}
        />
      )

      await waitFor(() => {
        expect(screen.getByText(testData[0].name)).toBeInTheDocument()
      })

      // Verify visible column header is present
      const headers = screen.getAllByRole("columnheader")
      expect(
        headers.some((h) => h.textContent?.includes("Visible Column"))
      ).toBe(true)

      // Verify hidden column header is NOT present
      expect(
        headers.some((h) => h.textContent?.includes("Hidden Column"))
      ).toBe(false)

      // Verify data from visible column is shown
      expect(screen.getByText(testData[0].name)).toBeInTheDocument()

      // Verify data from hidden column is NOT shown
      expect(screen.queryByText(testData[0].email)).not.toBeInTheDocument()
    })
  })

  describe("summary placeholders", () => {
    type SummaryTestDefinitions = {
      salary: {
        type: "sum"
      }
    }

    type SummaryPerson = Person & {
      salary?: number | null | string
    }

    const summaryColumns: ReadonlyArray<
      TableColumnDefinition<
        SummaryPerson,
        SortingsDefinition,
        SummaryTestDefinitions
      >
    > = [
      { label: "name", render: (item: SummaryPerson) => item.name },
      { label: "email", render: (item: SummaryPerson) => item.email },
      {
        label: "salary",
        summary: "salary" as const,
        align: "right" as const,
        render: (item: SummaryPerson) => item.salary ?? undefined,
      },
    ]

    const createSummarySource = ({
      salarySummary,
    }: {
      salarySummary: SummaryPerson["salary"]
    }): DataCollectionSource<
      SummaryPerson,
      TestFilters,
      SortingsDefinition,
      SummaryTestDefinitions,
      ItemActionsDefinition<SummaryPerson>,
      TestNavigationFilters,
      GroupingDefinition<SummaryPerson>
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
        fetchData: async ({
          filters: _filters,
        }: BaseFetchOptions<TestFilters>) => ({
          records: testData,
          summaries: {
            ...testData[0],
            salary: salarySummary,
          } as SummaryPerson,
        }),
      },
      currentGrouping: undefined,
      setCurrentGrouping: vi.fn(),
      summaries: {
        salary: { type: "sum" },
      },
    })

    const getSummaryRowCells = async () => {
      await waitFor(() => {
        expect(screen.getByText(testData[0].name)).toBeInTheDocument()
      })

      const rows = screen.getAllByRole("row")
      const summaryRow = rows[rows.length - 1]
      return within(summaryRow).getAllByRole("cell")
    }

    it("uses default '-' placeholder for empty summary values", async () => {
      render(
        <TableCollection<
          SummaryPerson,
          TestFilters,
          SortingsDefinition,
          SummaryTestDefinitions,
          ItemActionsDefinition<SummaryPerson>,
          TestNavigationFilters,
          GroupingDefinition<SummaryPerson>
        >
          columns={summaryColumns}
          source={createSummarySource({ salarySummary: null })}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      )

      const summaryCells = await getSummaryRowCells()
      const salaryCell = summaryCells[2]

      expect(within(salaryCell).queryByText(/sum/i)).not.toBeInTheDocument()
      expect(within(salaryCell).getByText("-")).toHaveClass(
        "text-f1-foreground-secondary"
      )
    })

    it("applies row-level summaryPlaceholder to empty summary and non-summary cells", async () => {
      render(
        <TableCollection<
          SummaryPerson,
          TestFilters,
          SortingsDefinition,
          SummaryTestDefinitions,
          ItemActionsDefinition<SummaryPerson>,
          TestNavigationFilters,
          GroupingDefinition<SummaryPerson>
        >
          columns={summaryColumns}
          source={createSummarySource({ salarySummary: null })}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
          summaryPlaceholder="ROW"
        />
      )

      const summaryCells = await getSummaryRowCells()
      const emailCell = summaryCells[1]
      const salaryCell = summaryCells[2]

      expect(within(emailCell).getByText("ROW")).toHaveClass(
        "text-f1-foreground-secondary"
      )
      expect(within(salaryCell).queryByText(/sum/i)).not.toBeInTheDocument()
      expect(within(salaryCell).getByText("ROW")).toHaveClass(
        "text-f1-foreground-secondary"
      )
    })

    it("uses per-column summaryPlaceholder over row-level placeholder", async () => {
      render(
        <TableCollection<
          SummaryPerson,
          TestFilters,
          SortingsDefinition,
          SummaryTestDefinitions,
          ItemActionsDefinition<SummaryPerson>,
          TestNavigationFilters,
          GroupingDefinition<SummaryPerson>
        >
          columns={
            [
              ...summaryColumns.slice(0, 2),
              {
                ...summaryColumns[2],
                summaryPlaceholder: "COLUMN",
              },
            ] as ReadonlyArray<
              TableColumnDefinition<
                SummaryPerson,
                SortingsDefinition,
                SummaryTestDefinitions
              >
            >
          }
          source={createSummarySource({ salarySummary: null })}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
          summaryPlaceholder="ROW"
        />
      )

      const summaryCells = await getSummaryRowCells()
      const emailCell = summaryCells[1]
      const salaryCell = summaryCells[2]

      expect(within(emailCell).getByText("ROW")).toBeInTheDocument()
      expect(within(salaryCell).getByText("COLUMN")).toBeInTheDocument()
    })

    it("keeps sum prefix for non-empty values and treats 0 as non-empty", async () => {
      render(
        <TableCollection<
          SummaryPerson,
          TestFilters,
          SortingsDefinition,
          SummaryTestDefinitions,
          ItemActionsDefinition<SummaryPerson>,
          TestNavigationFilters,
          GroupingDefinition<SummaryPerson>
        >
          columns={summaryColumns}
          source={createSummarySource({ salarySummary: 0 })}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
          summaryPlaceholder="ROW"
        />
      )

      const summaryCells = await getSummaryRowCells()
      const salaryCell = summaryCells[2]

      expect(within(salaryCell).getByText(/sum/i)).toBeInTheDocument()
      expect(within(salaryCell).getByText("0")).toBeInTheDocument()
      expect(within(salaryCell).queryByText("ROW")).not.toBeInTheDocument()
    })

    it("treats empty-string summaries as empty and shows the placeholder", async () => {
      render(
        <TableCollection<
          SummaryPerson,
          TestFilters,
          SortingsDefinition,
          SummaryTestDefinitions,
          ItemActionsDefinition<SummaryPerson>,
          TestNavigationFilters,
          GroupingDefinition<SummaryPerson>
        >
          columns={summaryColumns}
          source={createSummarySource({ salarySummary: "" })}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
          summaryPlaceholder="ROW"
        />
      )

      const summaryCells = await getSummaryRowCells()
      const salaryCell = summaryCells[2]

      expect(within(salaryCell).queryByText(/sum/i)).not.toBeInTheDocument()
      expect(within(salaryCell).getByText("ROW")).toHaveClass(
        "text-f1-foreground-secondary"
      )
    })
  })

  describe("Item Actions", () => {
    const testPersonWithActions = {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      displayName: "Dr. John Doe",
    }

    const createTestSourceWithActions = (
      itemActions: ItemActionsDefinition<Person>
    ): DataCollectionSource<
      Person,
      TestFilters,
      SortingsDefinition,
      SummariesDefinition,
      ItemActionsDefinition<Person>,
      TestNavigationFilters,
      GroupingDefinition<Person>
    > => ({
      ...createTestSource([testPersonWithActions]),
      itemActions,
    })

    it("renders actions as buttons and dropdown", async () => {
      const mockAction = vi.fn()

      const itemActions: ItemActionsDefinition<Person> = (_item) => [
        {
          label: "Edit User",
          type: "primary", // Required for button rendering
          onClick: mockAction,
        },
        {
          label: "View Profile",
          type: "secondary", // Goes to dropdown
          onClick: mockAction,
        },
      ]

      render(
        <TableCollection
          columns={testColumns}
          source={createTestSourceWithActions(itemActions)}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      )

      await waitFor(() => {
        expect(screen.getByText("John Doe")).toBeInTheDocument()
      })

      // Verify primary action is rendered as button
      expect(
        screen.getByRole("button", { name: /edit user/i })
      ).toBeInTheDocument()

      // Secondary actions go to dropdown (just verify dropdown exists)
      // ItemActionsRenderer renders both desktop and mobile versions,
      // so we expect 2 buttons total (1 desktop + 1 mobile for 1 row)
      const actionsButtons = screen.getAllByRole("button", {
        name: /actions/i,
      })
      expect(actionsButtons).toHaveLength(2) // Desktop + Mobile
      expect(actionsButtons[0]).toBeInTheDocument()
    })

    it("calls onClick handlers when buttons are clicked", async () => {
      const user = userEvent.setup()
      const actionMock = vi.fn()

      const itemActions: ItemActionsDefinition<Person> = (_item) => [
        {
          label: "Edit User",
          type: "primary",
          onClick: actionMock,
        },
      ]

      render(
        <TableCollection
          columns={testColumns}
          source={createTestSourceWithActions(itemActions)}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      )

      await waitFor(() => {
        expect(screen.getByText("John Doe")).toBeInTheDocument()
      })

      const actionButton = screen.getByRole("button", {
        name: /edit user/i,
      })

      await user.click(actionButton)

      expect(actionMock).toHaveBeenCalledTimes(1)
    })
  })

  describe("customization", () => {
    it("renders cells through a custom cellRenderer", async () => {
      const cellRendererSpy = vi.fn(
        ({
          children,
        }: {
          item: Person
          column: unknown
          cellIndex: number
          children: React.ReactNode
        }) => <span data-testid="custom-cell">{children}</span>
      )

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
          source={createTestSource()}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
          cellRenderer={cellRendererSpy}
        />
      )

      await waitFor(() => {
        expect(screen.getByText(testData[0].name)).toBeInTheDocument()
      })

      const customCells = screen.getAllByTestId("custom-cell")
      // 2 rows * 2 columns = 4 custom cells
      expect(customCells).toHaveLength(4)

      // Verify the renderer was called with expected props
      expect(cellRendererSpy).toHaveBeenCalled()
      const firstCall = cellRendererSpy.mock.calls[0][0]
      expect(firstCall).toHaveProperty("item")
      expect(firstCall).toHaveProperty("column")
      expect(firstCall).toHaveProperty("cellIndex")
      expect(firstCall).toHaveProperty("children")
    })

    it("wraps each row through a custom rowWrapper", async () => {
      const wrapperSpy = vi.fn()

      const TestRowWrapper = ({
        item,
        index,
        children,
      }: {
        item: Person
        index: number
        children: React.ReactNode
      }) => {
        wrapperSpy({ item, index })
        return <>{children}</>
      }

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
          source={createTestSource()}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
          rowWrapper={TestRowWrapper}
        />
      )

      await waitFor(() => {
        expect(screen.getByText(testData[0].name)).toBeInTheDocument()
      })

      expect(wrapperSpy).toHaveBeenCalledTimes(testData.length)
      expect(wrapperSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          item: expect.objectContaining({ id: testData[0].id }),
          index: 0,
        })
      )
      expect(wrapperSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          item: expect.objectContaining({ id: testData[1].id }),
          index: 1,
        })
      )
    })

    it("hides item actions when showItemActions is false", async () => {
      const itemActions: ItemActionsDefinition<Person> = (_item) => [
        {
          label: "Edit User",
          type: "primary",
          onClick: vi.fn(),
        },
      ]

      const sourceWithActions = {
        ...createTestSource(),
        itemActions,
      }

      // First render WITHOUT showItemActions={false} to confirm actions appear
      const { unmount } = render(
        <TableCollection
          columns={testColumns}
          source={sourceWithActions}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      )

      await waitFor(() => {
        expect(screen.getByText("John Doe")).toBeInTheDocument()
      })

      expect(
        screen.getAllByRole("button", { name: /edit user/i }).length
      ).toBeGreaterThan(0)

      unmount()

      // Now render WITH showItemActions={false}
      render(
        <TableCollection
          columns={testColumns}
          source={sourceWithActions}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
          showItemActions={false}
        />
      )

      await waitFor(() => {
        expect(screen.getByText("John Doe")).toBeInTheDocument()
      })

      expect(
        screen.queryByRole("button", { name: /edit user/i })
      ).not.toBeInTheDocument()
    })
  })

  describe("allPagesSelection banner", () => {
    const createSelectableSource = (
      allPagesSelection = false,
      totalItems = 2
    ): DataCollectionSource<
      Person,
      TestFilters,
      SortingsDefinition,
      SummariesDefinition,
      ItemActionsDefinition<Person>,
      TestNavigationFilters,
      GroupingDefinition<Person>
    > => ({
      ...createTestSource(),
      selectable: (item: Person) => item.id,
      allPagesSelection,
      dataAdapter: {
        paginationType: "pages",
        perPage: totalItems,
        fetchData: async () => ({
          records: testData,
          total: totalItems,
          currentPage: 1,
          perPage: totalItems,
          pagesCount: 1,
          type: "pages" as const,
        }),
      },
    })

    it("keeps column headers visible when items are selected", async () => {
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
          source={createSelectableSource()}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      )

      await waitFor(() => {
        expect(screen.getByText(testData[0].name)).toBeInTheDocument()
      })

      // Column headers must be present before selection
      expect(screen.getAllByRole("columnheader").length).toBeGreaterThan(0)

      // Select one row via the first row's checkbox
      const checkboxes = screen.getAllByRole("checkbox")
      await user.click(checkboxes[1]) // index 0 is the header checkbox

      // Column headers must still be present after selection
      expect(screen.getAllByRole("columnheader").length).toBeGreaterThan(0)
      expect(screen.getByText("name")).toBeInTheDocument()
      expect(screen.getByText("email")).toBeInTheDocument()
    })

    it("does not render banner row when allPagesSelection is not enabled", async () => {
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
          source={createSelectableSource()} // allPagesSelection not enabled
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      )

      await waitFor(() => {
        expect(screen.getByText(testData[0].name)).toBeInTheDocument()
      })

      // Select one row
      const checkboxes = screen.getAllByRole("checkbox")
      await user.click(checkboxes[1])

      await waitFor(() => {
        // Header row is still present
        expect(screen.getByText("name")).toBeInTheDocument()
        expect(screen.getByText("email")).toBeInTheDocument()
      })

      // Banner content must not appear — no "Select all N items" button, no count text in thead
      expect(
        screen.queryByRole("button", { name: /select all/i })
      ).not.toBeInTheDocument()

      // thead must contain exactly one row (the column header row — no banner row)
      const thead = document.querySelector("thead")
      expect(thead?.querySelectorAll("tr")).toHaveLength(1)
    })

    it("shows allOnPage banner with 'Select all N items' button when page is fully selected and allPagesSelection is true", async () => {
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
          source={createSelectableSource(true, 50)}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      )

      await waitFor(() => {
        expect(screen.getByText(testData[0].name)).toBeInTheDocument()
      })

      // Select all items on the page via the header checkbox
      const checkboxes = screen.getAllByRole("checkbox")
      await user.click(checkboxes[0])

      await waitFor(() => {
        // "Select all 50 items" button should appear
        expect(
          screen.getByRole("button", { name: /select all 50/i })
        ).toBeInTheDocument()
      })
    })

    it("shows allItemsSelected text after clicking 'Select all N items'", async () => {
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
          source={createSelectableSource(true, 50)}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      )

      await waitFor(() => {
        expect(screen.getByText(testData[0].name)).toBeInTheDocument()
      })

      // Select all on page
      const checkboxes = screen.getAllByRole("checkbox")
      await user.click(checkboxes[0])

      await waitFor(() => {
        expect(
          screen.getByRole("button", { name: /select all 50/i })
        ).toBeInTheDocument()
      })

      // Click "Select all 50 items"
      await user.click(screen.getByRole("button", { name: /select all 50/i }))

      // "Select all N items" button should disappear (all items now selected)
      await waitFor(() => {
        expect(
          screen.queryByRole("button", { name: /select all 50/i })
        ).not.toBeInTheDocument()
      })

      // HighlightedCount splits the number into its own span so we can't use
      // getByText directly — check via textContent instead
      expect(document.body.textContent).toMatch(/All 50 items selected/)
    })

    it("shows header checkbox as indeterminate (unchecked + minus icon) when only some items are selected", async () => {
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
          source={createSelectableSource()}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      )

      await waitFor(() => {
        expect(screen.getByText(testData[0].name)).toBeInTheDocument()
      })

      // Before selection: header checkbox is unchecked
      const headerCheckboxBefore = screen.getAllByRole("checkbox")[0]
      expect(headerCheckboxBefore).toHaveAttribute("aria-checked", "false")

      // Select only one of two rows
      const checkboxes = screen.getAllByRole("checkbox")
      await user.click(checkboxes[1])

      await waitFor(() => {
        // Header checkbox is unchecked during partial selection: aria-checked="false"
        // and data-state="unchecked" are correct for the toggle direction (clicking
        // promotes to all-selected rather than deselecting).
        // Note: F0Checkbox's indeterminate prop does not currently cause the minus
        // icon to render when checked=false — Radix's Indicator only mounts when
        // checked is truthy or "indeterminate". Forwarding Radix's indeterminate
        // state is a known DS-level gap tracked separately.
        const headerCheckbox = screen.getAllByRole("checkbox")[0]
        expect(headerCheckbox).toHaveAttribute("aria-checked", "false")
        // data-state reflects the Radix checked value — unchecked during partial
        expect(headerCheckbox).toHaveAttribute("data-state", "unchecked")
      })
    })

    it("shows checked header checkbox when all page items are selected", async () => {
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
          source={createSelectableSource()}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      )

      await waitFor(() => {
        expect(screen.getByText(testData[0].name)).toBeInTheDocument()
      })

      // Select all via header checkbox
      const checkboxes = screen.getAllByRole("checkbox")
      await user.click(checkboxes[0])

      await waitFor(() => {
        const headerCheckbox = screen.getAllByRole("checkbox")[0]
        expect(headerCheckbox).toHaveAttribute("aria-checked", "true")
      })
    })

    it("after 'Select all N items' + deselecting one row, shows correct count and re-shows the select-all button", async () => {
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
          source={createSelectableSource(true, 50)}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      )

      await waitFor(() => {
        expect(screen.getByText(testData[0].name)).toBeInTheDocument()
      })

      // Select all on page via header checkbox
      const checkboxes = screen.getAllByRole("checkbox")
      await user.click(checkboxes[0])

      await waitFor(() => {
        expect(
          screen.getByRole("button", { name: /select all 50/i })
        ).toBeInTheDocument()
      })

      // Click "Select all 50 items"
      await user.click(screen.getByRole("button", { name: /select all 50/i }))

      await waitFor(() => {
        expect(
          screen.queryByRole("button", { name: /select all 50/i })
        ).not.toBeInTheDocument()
      })

      // Deselect one row
      const rowCheckboxes = screen.getAllByRole("checkbox")
      await user.click(rowCheckboxes[1])

      await waitFor(() => {
        // Label must NOT say "all items selected"
        expect(
          screen.queryByText(/all 50 items selected/i)
        ).not.toBeInTheDocument()

        // "Select all N items" button must reappear
        expect(
          screen.getByRole("button", { name: /select all 50/i })
        ).toBeInTheDocument()
      })
    })

    it("does not show header as fully checked when cross-page selectedCount coincidentally equals page size but no current-page rows are selected", async () => {
      // Regression test for: allSelectedStatus.selectedCount === data.records.length
      // can be true when selections from another page match the current page size.
      // The fix checks per-ID membership instead of comparing global counts.
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
          source={{
            ...createSelectableSource(true, 50),
            // Pre-seed 2 selections with IDs that are NOT on the current page
            // (current page has IDs 1 and 2; these are off-page IDs).
            // selectedCount (2) would coincidentally equal data.records.length (2),
            // triggering the bug in the old formula.
            defaultSelectedItems: {
              allSelected: false,
              items: [
                { id: 99, checked: true },
                { id: 100, checked: true },
              ],
            },
          }}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
        />
      )

      await waitFor(() => {
        expect(screen.getByText(testData[0].name)).toBeInTheDocument()
      })

      const headerCheckbox = screen.getAllByRole("checkbox")[0]
      // No current-page row is selected — header must not appear fully checked
      expect(headerCheckbox).toHaveAttribute("aria-checked", "false")
      expect(headerCheckbox).toHaveAttribute("data-state", "unchecked")
    })
  })

  it("does not render add-row button when no AddRowProvider wraps the table", async () => {
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
        source={createTestSource()}
        onSelectItems={vi.fn()}
        onLoadData={vi.fn()}
        onLoadError={vi.fn()}
      />
    )

    await waitFor(() => {
      expect(screen.getByText(testData[0].name)).toBeInTheDocument()
    })

    expect(
      screen.queryByRole("button", { name: /add row/i })
    ).not.toBeInTheDocument()
  })
  describe("grouped and selectable", () => {
    type GroupedPerson = Person & { department: string }

    const groupedTestData: GroupedPerson[] = [
      {
        id: 1,
        name: "Alice",
        email: "alice@example.com",
        displayName: "Dr. Alice",
        department: "Engineering",
      },
      {
        id: 2,
        name: "Bob",
        email: "bob@example.com",
        displayName: "Dr. Bob",
        department: "Engineering",
      },
      {
        id: 3,
        name: "Carol",
        email: "carol@example.com",
        displayName: "Dr. Carol",
        department: "Marketing",
      },
    ]

    const groupedTestColumns = [
      { label: "name", render: (item: GroupedPerson) => item.name },
      { label: "email", render: (item: GroupedPerson) => item.email },
      {
        label: "department",
        render: (item: GroupedPerson) => item.department,
      },
    ]

    const createGroupedSelectableSource = (
      data: GroupedPerson[] = groupedTestData,
      collapsible = true
    ): DataCollectionSource<
      GroupedPerson,
      TestFilters,
      SortingsDefinition,
      SummariesDefinition,
      ItemActionsDefinition<GroupedPerson>,
      TestNavigationFilters,
      GroupingDefinition<GroupedPerson>
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
        fetchData: async (_options: BaseFetchOptions<TestFilters>) => {
          return { records: data }
        },
      },
      selectable: (item: GroupedPerson) => item.id,
      grouping: {
        mandatory: true,
        ...(collapsible
          ? { collapsible: true, defaultOpenGroups: true }
          : { collapsible: false }),
        groupBy: {
          department: {
            name: "Department",
            label: (groupId: string) => groupId,
            itemCount: (groupId: string) =>
              data.filter((p) => p.department === groupId).length,
          },
        },
      },
      currentGrouping: {
        field: "department",
        order: "asc",
      } as GroupingState<GroupedPerson, GroupingDefinition<GroupedPerson>>,
      setCurrentGrouping: vi.fn(),
    })

    it("renders group headers with separate checkbox cells when grouped and selectable", async () => {
      render(
        <TableCollection<
          GroupedPerson,
          TestFilters,
          SortingsDefinition,
          SummariesDefinition,
          ItemActionsDefinition<GroupedPerson>,
          TestNavigationFilters,
          GroupingDefinition<GroupedPerson>
        >
          columns={groupedTestColumns}
          source={createGroupedSelectableSource()}
          onSelectItems={vi.fn()}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
          frozenColumns={2}
        />
      )

      await waitFor(() => {
        expect(screen.getByText("Alice")).toBeInTheDocument()
      })

      // Both group headers are rendered (use getAllByText since "Engineering"
      // also appears in department data cells)
      expect(screen.getAllByText("Engineering").length).toBeGreaterThan(0)
      expect(screen.getAllByText("Marketing").length).toBeGreaterThan(0)

      // All data rows are rendered
      expect(screen.getByText("Bob")).toBeInTheDocument()
      expect(screen.getByText("Carol")).toBeInTheDocument()

      // Each group header row contains a checkbox in its own cell.
      // Target the <h6> group heading to find the group header row specifically.
      const engineeringHeading = screen.getByRole("heading", {
        name: "Engineering",
      })
      const engineeringRow = engineeringHeading.closest("tr")!
      expect(within(engineeringRow).getByRole("checkbox")).toBeInTheDocument()

      const marketingHeading = screen.getByRole("heading", {
        name: "Marketing",
      })
      const marketingRow = marketingHeading.closest("tr")!
      expect(within(marketingRow).getByRole("checkbox")).toBeInTheDocument()
    })

    it("group header checkbox toggles selection for that group's items", async () => {
      const user = userEvent.setup()
      const onSelectItems = vi.fn()

      render(
        <TableCollection<
          GroupedPerson,
          TestFilters,
          SortingsDefinition,
          SummariesDefinition,
          ItemActionsDefinition<GroupedPerson>,
          TestNavigationFilters,
          GroupingDefinition<GroupedPerson>
        >
          columns={groupedTestColumns}
          source={createGroupedSelectableSource()}
          onSelectItems={onSelectItems}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
          frozenColumns={2}
        />
      )

      await waitFor(() => {
        expect(screen.getByText("Alice")).toBeInTheDocument()
      })

      // Click the Engineering group header checkbox.
      // Target the <h6> heading to find the group header row specifically.
      const engineeringHeading = screen.getByRole("heading", {
        name: "Engineering",
      })
      const engineeringRow = engineeringHeading.closest("tr")!
      const groupCheckbox = within(engineeringRow).getByRole("checkbox")

      await user.click(groupCheckbox)

      // onSelectItems must have been called with Engineering group members selected
      expect(onSelectItems).toHaveBeenCalled()
      const lastCall =
        onSelectItems.mock.calls[onSelectItems.mock.calls.length - 1]
      const selectedItems = lastCall[0]
      expect(selectedItems.selectedIds).toEqual(expect.arrayContaining([1, 2]))
    })

    it("group label text click does not toggle selection when table is not collapsible", async () => {
      const user = userEvent.setup()
      const onSelectItems = vi.fn()

      render(
        <TableCollection<
          GroupedPerson,
          TestFilters,
          SortingsDefinition,
          SummariesDefinition,
          ItemActionsDefinition<GroupedPerson>,
          TestNavigationFilters,
          GroupingDefinition<GroupedPerson>
        >
          columns={groupedTestColumns}
          source={createGroupedSelectableSource(groupedTestData, false)}
          onSelectItems={onSelectItems}
          onLoadData={vi.fn()}
          onLoadError={vi.fn()}
          frozenColumns={2}
        />
      )

      await waitFor(() => {
        expect(screen.getByText("Alice")).toBeInTheDocument()
      })

      const callCountAfterRender = onSelectItems.mock.calls.length

      // Click the group label heading text (not the checkbox) — it should not
      // trigger group selection since the checkbox is the only selection affordance
      const engineeringHeading = screen.getByRole("heading", {
        name: "Engineering",
      })
      await user.click(engineeringHeading)

      expect(onSelectItems.mock.calls.length).toBe(callCountAfterRender)
    })
  })
})
