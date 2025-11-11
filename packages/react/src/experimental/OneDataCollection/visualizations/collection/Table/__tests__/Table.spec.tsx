import { TextCell } from "@/components/value-display/types/text"
import { useDataCollectionData } from "@/experimental/OneDataCollection/hooks/useDataCollectionData/useDataCollectionData"
import { DataCollectionSource } from "@/experimental/OneDataCollection/hooks/useDataCollectionSource/types"
import { NavigationFiltersDefinition } from "@/experimental/OneDataCollection/navigationFilters/types"
import type { GroupingDefinition, SortingsDefinition } from "@/hooks/datasource"
import {
  BaseFetchOptions,
  FiltersDefinition,
  PaginatedFetchOptions,
  PaginationType,
} from "@/hooks/datasource"
import { act, screen, waitFor, within } from "@testing-library/react"

import { zeroRender as render, zeroRenderHook } from "@/testing/test-utils"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import { ItemActionsDefinition } from "../../../../item-actions"
import { SummariesDefinition } from "../../../../summary"
import { TableCollection } from "../index"

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
    fetchData: async ({ filters: _filters }) => {
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
    it("shows loading state initially", () => {
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
  })

  describe("edge cases", () => {
    it("handles empty data gracefully", async () => {
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
          source={createTestSource([])}
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
    })

    it("handles error states appropriately", async () => {
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
      const actionsButtons = screen.getAllByRole("button", { name: /actions/i })
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
})
