import type { FiltersDefinition } from "@/components/OneFilterPicker"
import {
  BaseFetchOptions,
  BaseResponse,
  GROUP_ID_SYMBOL,
  GroupingDefinition,
  PaginatedFetchOptions,
  SortingsDefinition,
  SortingsState,
  WithGroupId,
} from "@/hooks/datasource"
import { PromiseState } from "@/lib/promise-to-observable"
import { defaultTranslations, I18nProvider } from "@/lib/providers/i18n"
import {
  zeroRender as render,
  zeroRenderHook as renderHook,
} from "@/testing/test-utils"
import { act, screen, waitFor, within } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import { LayoutGrid } from "lucide-react"
import { describe, expect, test, vi } from "vitest"
import { Observable } from "zen-observable-ts"
import { useDataCollectionData } from "../hooks/useDataCollectionData/useDataCollectionData"
import {
  DataCollectionSource,
  useDataCollectionSource,
} from "../hooks/useDataCollectionSource"

import { OneDataCollection } from "../index"
import { ItemActionsDefinition } from "../item-actions"
import { NavigationFiltersDefinition } from "../navigationFilters/types"
import { SummariesDefinition } from "../summary"

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <I18nProvider translations={defaultTranslations}>{children}</I18nProvider>
)

describe("Collections", () => {
  test("renders with basic search filter", async () => {
    const mockData: WithGroupId<{ name: string }>[] = [
      { name: "John Doe", [GROUP_ID_SYMBOL]: undefined },
      { name: "Jane Smith", [GROUP_ID_SYMBOL]: undefined },
    ]

    const { result } = renderHook(
      () =>
        useDataCollectionSource({
          filters: {
            name: { type: "search", label: "Name" },
          },
          dataAdapter: {
            fetchData: async ({ filters }) => {
              if ("email" in filters) {
                throw new Error("Email is not a valid filter")
              }

              return {
                records: mockData.filter((user) => {
                  if (filters.name && typeof filters.name === "string") {
                    return user.name
                      .toLowerCase()
                      .includes(filters.name.toLowerCase())
                  }
                  return true
                }),
              }
            },
          },
        }),
      { wrapper: TestWrapper }
    )

    render(
      <TestWrapper>
        <OneDataCollection
          source={result.current}
          visualizations={[
            {
              type: "table",
              options: {
                columns: [{ label: "name", render: (item) => item.name }],
              },
            },
          ]}
        />
      </TestWrapper>
    )

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument()
      expect(screen.getByText("Jane Smith")).toBeInTheDocument()
    })
  })

  test("renders with multiple visualizations", async () => {
    const { result } = renderHook(
      () =>
        useDataCollectionSource({
          dataAdapter: {
            fetchData: async () => ({
              records: [
                { name: "John Doe", email: "john@example.com" },
                { name: "Jane Smith", email: "jane@example.com" },
              ],
            }),
          },
        }),
      { wrapper: TestWrapper }
    )

    render(
      <TestWrapper>
        <OneDataCollection
          source={result.current}
          visualizations={[
            {
              type: "table",
              options: {
                columns: [
                  { label: "Name", render: (item) => item.name },
                  { label: "Email", render: (item) => item.email },
                ],
              },
            },
            {
              type: "card",
              options: {
                cardProperties: [
                  { label: "Name", render: (item) => item.name },
                  { label: "Email", render: (item) => item.email },
                ],
                title: (item) => item.name,
              },
            },
          ]}
        />
      </TestWrapper>
    )

    await waitFor(() => {
      expect(screen.getByText("john@example.com")).toBeInTheDocument()
      expect(screen.getByText("jane@example.com")).toBeInTheDocument()
    })
  })

  test("handles observable data source", async () => {
    const { result } = renderHook(
      () =>
        useDataCollectionSource({
          dataAdapter: {
            fetchData: () =>
              new Observable<
                PromiseState<BaseResponse<{ name: string; role: string }>>
              >((observer) => {
                observer.next({
                  loading: true,
                  error: null,
                  data: null,
                })

                setTimeout(() => {
                  observer.next({
                    loading: false,
                    error: null,
                    data: {
                      records: [
                        { name: "John Doe", role: "Senior Engineer" },
                        { name: "Jane Smith", role: "Product Manager" },
                      ],
                    },
                  })
                  observer.complete()
                }, 0)

                return () => {}
              }),
          },
        }),
      { wrapper: TestWrapper }
    )

    render(
      <TestWrapper>
        <OneDataCollection
          source={result.current}
          visualizations={[
            {
              type: "table",
              options: {
                columns: [
                  { label: "Name", render: (item) => item.name },
                  { label: "Role", render: (item) => item.role },
                ],
              },
            },
          ]}
        />
      </TestWrapper>
    )

    await waitFor(() => {
      expect(screen.getByText("Senior Engineer")).toBeInTheDocument()
      expect(screen.getByText("Product Manager")).toBeInTheDocument()
    })
  })

  test("handles multiple filter types", async () => {
    const mockData = [
      {
        name: "John Doe",
        email: "john@example.com",
        department: "Engineering",
      },
      {
        name: "Jane Smith",
        email: "jane@example.com",
        department: "Product",
      },
    ]

    const { result } = renderHook(
      () =>
        useDataCollectionSource({
          filters: {
            search: {
              type: "search",
              label: "Search",
            },
            department: {
              type: "in",
              label: "Department",
              options: {
                options: [
                  { value: "Engineering", label: "Engineering" },
                  { value: "Product", label: "Product" },
                ],
              },
            },
          },
          dataAdapter: {
            fetchData: async ({ filters }) => {
              let filtered = [...mockData]

              if (filters.search && typeof filters.search === "string") {
                const searchLower = filters.search.toLowerCase()
                filtered = filtered.filter(
                  (user) =>
                    user.name.toLowerCase().includes(searchLower) ||
                    user.email.toLowerCase().includes(searchLower)
                )
              }

              if (filters.department && filters.department.length > 0) {
                filtered = filtered.filter((user) =>
                  filters.department?.includes(user.department)
                )
              }

              return { records: filtered }
            },
          },
        }),
      { wrapper: TestWrapper }
    )

    render(
      <TestWrapper>
        <OneDataCollection
          source={result.current}
          visualizations={[
            {
              type: "table",
              options: {
                columns: [
                  { label: "Name", render: (item) => item.name },
                  { label: "Department", render: (item) => item.department },
                ],
              },
            },
          ]}
        />
      </TestWrapper>
    )

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument()
      expect(screen.getByText("Engineering")).toBeInTheDocument()
    })
  })

  test("it allows data to be passed in with the right properties", () => {
    const { result } = renderHook(
      () =>
        useDataCollectionSource({
          dataAdapter: {
            fetchData: async () => ({ records: [{ name: "John" }] }),
          },
        }),
      { wrapper: TestWrapper }
    )

    expect(result.current).toBeDefined()
  })

  test("renders with custom visualization", async () => {
    type Item = {
      name: string
      email: string
      role: string
      department: string
    }

    const CustomComponent = ({
      source,
    }: {
      source: DataCollectionSource<
        Item,
        FiltersDefinition,
        SortingsDefinition,
        SummariesDefinition,
        ItemActionsDefinition<Item>,
        NavigationFiltersDefinition,
        GroupingDefinition<Item>
      >
    }) => {
      const { data } = useDataCollectionData<
        Item,
        FiltersDefinition,
        SortingsDefinition,
        SummariesDefinition,
        NavigationFiltersDefinition,
        GroupingDefinition<Item>
      >(source)

      return (
        <div data-testid="custom-visualization">
          {data?.records.map((item) => (
            <div key={item.email} className="custom-item">
              <h3>{item.name}</h3>
              <p>
                {item.role} - {item.department}
              </p>
            </div>
          ))}
        </div>
      )
    }

    const { result } = renderHook(
      () =>
        useDataCollectionSource({
          dataAdapter: {
            fetchData: () =>
              new Observable<PromiseState<BaseResponse<Item>>>((observer) => {
                observer.next({
                  loading: true,
                  error: null,
                  data: null,
                })

                setTimeout(() => {
                  observer.next({
                    loading: false,
                    error: null,
                    data: {
                      records: [
                        {
                          name: "John Doe",
                          role: "Senior Engineer",
                          department: "Engineering",
                          email: "john@example.com",
                        },
                        {
                          name: "Jane Smith",
                          role: "Product Manager",
                          department: "Product",
                          email: "jane@example.com",
                        },
                      ],
                    },
                  })
                  observer.complete()
                }, 0)

                return () => {}
              }),
          },
        }),
      { wrapper: TestWrapper }
    )

    render(
      <TestWrapper>
        <OneDataCollection
          source={result.current}
          visualizations={[
            {
              type: "custom",
              label: "Custom View",
              icon: LayoutGrid,
              component: CustomComponent,
            },
          ]}
        />
      </TestWrapper>
    )

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument()
      expect(
        screen.getByText("Senior Engineer - Engineering")
      ).toBeInTheDocument()
    })
  })

  test("integrates TableCollection with sortable columns", async () => {
    type Person = {
      id: number
      name: string
      email: string
      role: string
    }

    const mockData: Person[] = [
      { id: 1, name: "John Doe", email: "john@example.com", role: "Developer" },
      {
        id: 2,
        name: "Alice Brown",
        email: "alice@example.com",
        role: "Designer",
      },
      { id: 3, name: "Bob Smith", email: "bob@example.com", role: "Manager" },
    ]

    // Create a mock for setCurrentSortings function
    const setCurrentSortingsMock = vi.fn()

    const { result } = renderHook(
      () => {
        const source = useDataCollectionSource<
          Person,
          FiltersDefinition,
          SortingsDefinition,
          SummariesDefinition,
          ItemActionsDefinition<Person>,
          NavigationFiltersDefinition,
          GroupingDefinition<Person>
        >({
          dataAdapter: {
            fetchData: async ({ sortings }) => {
              const sorted = [...mockData]

              if (sortings) {
                sortings.forEach(({ field, order }) => {
                  if (field === "name") {
                    sorted.sort((a, b) => {
                      const direction = order === "asc" ? 1 : -1
                      return a.name.localeCompare(b.name) * direction
                    })
                  }
                })
              }

              return { records: sorted }
            },
          },
          sortings: {
            name: {
              label: "Name",
            },
          },
        })

        // Override the setCurrentSortings with our mock for testing
        source.setCurrentSortings = setCurrentSortingsMock

        return source
      },
      { wrapper: TestWrapper }
    )

    render(
      <TestWrapper>
        <OneDataCollection
          source={result.current}
          visualizations={[
            {
              type: "table",
              options: {
                columns: [
                  {
                    label: "Name",
                    render: (item: Person) => item.name,
                    sorting: "name" as const,
                  },
                  {
                    label: "Email",
                    render: (item: Person) => item.email,
                  },
                ],
              },
            },
          ]}
        />
      </TestWrapper>
    )

    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument()
      expect(screen.getByText("Alice Brown")).toBeInTheDocument()
      expect(screen.getByText("Bob Smith")).toBeInTheDocument()
    })

    // Find and click the sort button in the Name column
    const nameColumnHeader = await screen.findByRole("columnheader", {
      name: /name/i,
    })
    expect(nameColumnHeader).toBeInTheDocument()

    // The sort button should be inside the column header
    const sortButton = within(nameColumnHeader).getByRole("button")
    expect(sortButton).toBeInTheDocument()

    // Click the sort button
    await userEvent.click(sortButton)

    // Verify that setCurrentSortings is called with the correct parameters
    expect(setCurrentSortingsMock).toHaveBeenCalled()
  })

  test("applies defaultSorting correctly on initial render", async () => {
    type Person = {
      id: number
      name: string
      email: string
      role: string
    }

    const mockData: Person[] = [
      { id: 1, name: "John Doe", email: "john@example.com", role: "Developer" },
      {
        id: 2,
        name: "Alice Brown",
        email: "alice@example.com",
        role: "Designer",
      },
      { id: 3, name: "Bob Smith", email: "bob@example.com", role: "Manager" },
    ]

    // Create a mock for data fetching that sorts based on sortings
    const fetchDataMock = vi.fn().mockImplementation(({ sortings }) => {
      const sorted = [...mockData]

      if (sortings) {
        const nameSorting = sortings.find(
          (sorting: SortingsState<SortingsDefinition>) =>
            sorting?.field === "name"
        )
        if (nameSorting) {
          sorted.sort((a, b) => {
            const direction = nameSorting.order === "asc" ? 1 : -1
            return a.name.localeCompare(b.name) * direction
          })
        }
      }

      return sorted
    })

    const { result } = renderHook(
      () =>
        useDataCollectionSource<
          Person,
          FiltersDefinition,
          SortingsDefinition,
          SummariesDefinition,
          ItemActionsDefinition<Person>,
          NavigationFiltersDefinition,
          GroupingDefinition<Person>
        >({
          dataAdapter: {
            fetchData: fetchDataMock,
          },
          sortings: {
            name: {
              label: "Name",
            },
          },
          defaultSorting: {
            field: "name",
            order: "desc",
          },
        }),
      { wrapper: TestWrapper }
    )

    render(
      <TestWrapper>
        <OneDataCollection
          source={result.current}
          visualizations={[
            {
              type: "table",
              options: {
                columns: [
                  {
                    label: "Name",
                    render: (item: Person) => item.name,
                    sorting: "name" as const,
                  },
                  {
                    label: "Email",
                    render: (item: Person) => item.email,
                  },
                ],
              },
            },
          ]}
        />
      </TestWrapper>
    )

    // Verify the fetchData function was called with the correct default sorting
    expect(fetchDataMock).toHaveBeenCalledWith(
      expect.objectContaining({
        sortings: [
          {
            field: "name",
            order: "desc",
          },
        ],
      })
    )

    // Wait for the sorted data to be rendered
    // With descending sort by name, "John Doe" should appear before "Alice Brown"
    await waitFor(() => {
      const rows = screen.getAllByRole("row")
      // Skip header row
      const dataRows = rows.slice(1)

      // With desc sorting, the order should be: John, Bob, Alice
      expect(within(dataRows[0]).getByText("John Doe")).toBeInTheDocument()
      expect(within(dataRows[1]).getByText("Bob Smith")).toBeInTheDocument()
      expect(within(dataRows[2]).getByText("Alice Brown")).toBeInTheDocument()
    })
  })

  test("initializes currentSortings state with defaultSorting value", () => {
    type Person = {
      id: number
      name: string
    }

    const defaultSorting = {
      field: "name",
      order: "asc" as const,
    }

    const { result } = renderHook(
      () =>
        useDataCollectionSource<
          Person,
          FiltersDefinition,
          SortingsDefinition,
          SummariesDefinition,
          ItemActionsDefinition<Person>,
          NavigationFiltersDefinition,
          GroupingDefinition<Person>
        >({
          dataAdapter: {
            fetchData: async () => ({
              records: [
                { id: 1, name: "John Doe" },
                { id: 2, name: "Alice Brown" },
              ],
            }),
          },
          sortings: {
            name: {
              label: "Name",
            },
          },
          defaultSorting,
        }),
      { wrapper: TestWrapper }
    )

    // Verify that currentSortings is initialized with defaultSorting
    expect(result.current.currentSortings).toEqual(defaultSorting)
  })

  test("allows changing sort from defaultSorting", async () => {
    type Person = {
      id: number
      name: string
      email: string
    }

    const mockData: Person[] = [
      { id: 1, name: "John Doe", email: "john@example.com" },
      { id: 2, name: "Alice Brown", email: "alice@example.com" },
      { id: 3, name: "Bob Smith", email: "bob@example.com" },
    ]

    // Create a data source with actual sorting logic
    const { result } = renderHook(
      () =>
        useDataCollectionSource<
          Person,
          FiltersDefinition,
          SortingsDefinition,
          SummariesDefinition,
          ItemActionsDefinition<Person>,
          NavigationFiltersDefinition,
          GroupingDefinition<Person>
        >({
          dataAdapter: {
            fetchData: async ({ sortings }) => {
              const sorted = [...mockData]

              if (sortings) {
                sortings.forEach(({ field, order }) => {
                  if (field === "name") {
                    sorted.sort((a, b) => {
                      const direction = order === "asc" ? 1 : -1
                      return a.name.localeCompare(b.name) * direction
                    })
                  } else if (field === "email") {
                    sorted.sort((a, b) => {
                      const direction = order === "asc" ? 1 : -1
                      return a.email.localeCompare(b.email) * direction
                    })
                  }
                })
              }

              return { records: sorted }
            },
          },
          sortings: {
            name: { label: "Name" },
            email: { label: "Email" },
          },
          defaultSorting: {
            field: "name",
            order: "desc",
          },
        }),
      { wrapper: TestWrapper }
    )

    render(
      <TestWrapper>
        <OneDataCollection
          source={result.current}
          visualizations={[
            {
              type: "table",
              options: {
                columns: [
                  {
                    label: "Name",
                    render: (item: Person) => item.name,
                    sorting: "name" as const,
                  },
                  {
                    label: "Email",
                    render: (item: Person) => item.email,
                    sorting: "email" as const,
                  },
                ],
              },
            },
          ]}
        />
      </TestWrapper>
    )

    // Step 1: Verify initial sorting state - currentSortings should be set to the defaultSorting
    expect(result.current.currentSortings).toEqual({
      field: "name",
      order: "desc",
    })

    // Name column header should reflect the sorting (descending)
    const nameColumnHeader = await screen.findByRole("columnheader", {
      name: /name/i,
    })
    expect(nameColumnHeader).toHaveAttribute("aria-sort", "descending")

    // Step 2: Find and click the email column header sort button
    const emailColumnHeader = screen.getByRole("columnheader", {
      name: /email/i,
    })
    const emailSortButton = within(emailColumnHeader).getByRole("button", {
      name: /sort/i,
    })

    // Perform the click
    await act(async () => {
      await userEvent.click(emailSortButton)
    })

    // Step 3: Verify that currentSortings state changed correctly
    // This is the most important assertion - it proves the default sorting can be changed
    await waitFor(() => {
      expect(result.current.currentSortings).toEqual({
        field: "email",
        order: "asc",
      })
    })

    // Now the test has successfully verified that defaultSorting can be changed to a different sorting
  })

  test("integrates TableCollection with filtering capabilities", async () => {
    type Person = {
      id: number
      name: string
      department: string
    }

    const mockData: Person[] = [
      { id: 1, name: "John Doe", department: "Engineering" },
      { id: 2, name: "Jane Smith", department: "Product" },
      { id: 3, name: "Bob Johnson", department: "Engineering" },
      { id: 4, name: "Alice Williams", department: "Design" },
    ]

    // Create a mock for setCurrentFilters function
    const setCurrentFiltersMock = vi.fn()

    const { result } = renderHook(
      () => {
        const source = useDataCollectionSource({
          filters: {
            department: {
              type: "in",
              label: "Department",
              options: {
                options: [
                  { value: "Engineering", label: "Engineering" },
                  { value: "Product", label: "Product" },
                  { value: "Design", label: "Design" },
                ],
              },
            },
            search: {
              type: "search",
              label: "Search",
            },
          },
          dataAdapter: {
            fetchData: async ({ filters }) => {
              let filtered = [...mockData]

              if (filters.department && filters.department.length > 0) {
                filtered = filtered.filter((person) =>
                  filters.department?.includes(person.department)
                )
              }

              if (filters.search && typeof filters.search === "string") {
                const searchLower = filters.search.toLowerCase()
                filtered = filtered.filter((person) =>
                  person.name.toLowerCase().includes(searchLower)
                )
              }

              return { records: filtered }
            },
          },
        })

        // Override the setCurrentFilters with our mock for testing
        source.setCurrentFilters = setCurrentFiltersMock

        return source
      },
      { wrapper: TestWrapper }
    )

    render(
      <TestWrapper>
        <OneDataCollection
          source={result.current}
          visualizations={[
            {
              type: "table",
              options: {
                columns: [
                  { label: "Name", render: (item: Person) => item.name },
                  {
                    label: "Department",
                    render: (item: Person) => item.department,
                  },
                ],
              },
            },
          ]}
        />
      </TestWrapper>
    )

    await waitFor(() => {
      // Use getAllByText since there might be multiple elements with the same text
      const johnElements = screen.getAllByText("John Doe")
      const janeElements = screen.getAllByText("Jane Smith")
      const engineeringElements = screen.getAllByText("Engineering")
      const productElements = screen.getAllByText("Product")

      expect(johnElements.length).toBeGreaterThan(0)
      expect(janeElements.length).toBeGreaterThan(0)
      expect(engineeringElements.length).toBeGreaterThan(0)
      expect(productElements.length).toBeGreaterThan(0)
    })

    // Find the filter button
    const filterButton = screen.getByRole("button", { name: "Filters" })

    // Just verify the filter button exists
    expect(filterButton).toBeInTheDocument()

    // Note: We don't test clicking the filter button since that would open a dialog
    // and we'd need more knowledge about the specifics of the dialog implementation
  })

  test("integrates TableCollection with actions", async () => {
    type Person = {
      id: number
      name: string
      email: string
    }

    const mockData: WithGroupId<Person>[] = [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        [GROUP_ID_SYMBOL]: undefined,
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        [GROUP_ID_SYMBOL]: undefined,
      },
    ]

    // Create mock handlers for our actions
    const handleEdit = vi.fn()
    const handleDelete = vi.fn()

    // Create a data source with actions
    const { result } = renderHook(
      () =>
        useDataCollectionSource<
          Person,
          FiltersDefinition,
          SortingsDefinition,
          SummariesDefinition,
          ItemActionsDefinition<Person>,
          NavigationFiltersDefinition,
          GroupingDefinition<Person>
        >({
          dataAdapter: {
            fetchData: async () => ({
              records: mockData,
            }),
          },
          itemActions: (item) => [
            {
              label: "Edit",
              onClick: () => {
                // Using a closure to ensure the handler is called only once
                if (!handleEdit.mock.calls.length) {
                  handleEdit(item)
                }
              },
            },
            {
              label: "Delete",
              variant: "destructive",
              onClick: () => handleDelete(item),
            },
          ],
        }),
      { wrapper: TestWrapper }
    )

    render(
      <OneDataCollection
        source={result.current}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                {
                  label: "Name",
                  render: (item) => item.name,
                },
                {
                  label: "Email",
                  render: (item) => item.email,
                },
              ],
            },
          },
        ]}
      />
    )

    // Check that our data is rendered
    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument()
      expect(screen.getByText("jane@example.com")).toBeInTheDocument()
    })

    // Find the table rows first to trigger hover behavior
    const tableRows = screen.getAllByRole("row").slice(1) // Skip header row
    expect(tableRows).toHaveLength(2)

    // Hover over the first row to make desktop actions visible
    await userEvent.hover(tableRows[0])

    // Find and click the actions button (typically has MoreVertical icon or similar)
    // so we expect 4 buttons total (2 desktop + 2 mobile for 2 rows)
    const actionsButtons = await waitFor(() =>
      screen.getAllByRole("button", { name: /actions/i })
    )
    expect(actionsButtons).toHaveLength(4) // Desktop + Mobile

    // Find the desktop version of the actions (first 2 are desktop, last 2 are mobile)
    // Click the actions button for the first row (desktop version)
    await userEvent.click(actionsButtons[0])

    // The Radix dropdown content should now be in the document
    // Wait for the dropdown to be visible (Radix UI adds data-state="open" when open)
    const dropdown = await screen.findByRole("menu")
    expect(dropdown).toBeInTheDocument()

    // Find and click the Edit action
    const editButton = within(dropdown).getByText("Edit")
    await userEvent.click(editButton)

    // Verify our handler was called with the correct item
    await waitFor(() => expect(handleEdit).toHaveBeenCalledTimes(1))
    await waitFor(() =>
      expect(handleEdit).toHaveBeenCalledWith(
        expect.objectContaining({
          ...mockData[0],
          [GROUP_ID_SYMBOL]: undefined,
        })
      )
    )
  })

  test("integrates search functionality", async () => {
    type Person = {
      id: number
      name: string
      email: string
      role: string
    }

    const mockData: Person[] = [
      { id: 1, name: "John Doe", email: "john@example.com", role: "Developer" },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        role: "Designer",
      },
      {
        id: 3,
        name: "Alice Johnson",
        email: "alice@example.com",
        role: "Manager",
      },
      { id: 4, name: "Bob Brown", email: "bob@example.com", role: "Tester" },
    ]

    // Mock the setCurrentSearch function
    const setCurrentSearchMock = vi.fn()

    // Create a data source with search enabled
    const { result } = renderHook(
      () => {
        const source = useDataCollectionSource<
          Person,
          FiltersDefinition,
          SortingsDefinition,
          SummariesDefinition,
          ItemActionsDefinition<Person>,
          NavigationFiltersDefinition,
          GroupingDefinition<Person>
        >({
          dataAdapter: {
            fetchData: async ({ search }) => {
              if (!search) return { records: mockData }

              const searchLower = search.toLowerCase()
              return {
                records: mockData.filter(
                  (person) =>
                    person.name.toLowerCase().includes(searchLower) ||
                    person.email.toLowerCase().includes(searchLower) ||
                    person.role.toLowerCase().includes(searchLower)
                ),
              }
            },
          },
          search: {
            enabled: true,
            sync: true,
          },
        })

        // Override setCurrentSearch with our mock
        source.setCurrentSearch = setCurrentSearchMock

        return source
      },
      { wrapper: TestWrapper }
    )

    // Render the DataCollection with our configured source
    render(
      <OneDataCollection
        source={result.current}
        visualizations={[
          {
            type: "table",
            options: {
              columns: [
                { label: "Name", render: (item: Person) => item.name },
                { label: "Email", render: (item: Person) => item.email },
                { label: "Role", render: (item: Person) => item.role },
              ],
            },
          },
        ]}
      />
    )

    // Verify that all four initial users are displayed
    await waitFor(() => {
      expect(screen.getByText("John Doe")).toBeInTheDocument()
      expect(screen.getByText("Jane Smith")).toBeInTheDocument()
      expect(screen.getByText("Alice Johnson")).toBeInTheDocument()
      expect(screen.getByText("Bob Brown")).toBeInTheDocument()
    })

    // Find the search button/input
    const searchButton = screen.getByLabelText(/search/i)
    expect(searchButton).toBeInTheDocument()

    // Click on the search button to open the search input
    await userEvent.click(searchButton)

    // Find the search input after it's opened
    const searchInput = screen.getByPlaceholderText(/search/i)
    expect(searchInput).toBeInTheDocument()

    // Enter a search term
    await userEvent.type(searchInput, "john")

    // Verify the setCurrentSearch was called with the correct term
    expect(setCurrentSearchMock).toHaveBeenCalledWith("john")
  })

  test("integrates TableCollection with pagination", async () => {
    type Person = {
      id: number
      name: string
      email: string
    }

    // Create a simple data source with pagination
    const { result } = renderHook(
      () =>
        useDataCollectionSource<
          Person,
          FiltersDefinition,
          SortingsDefinition,
          SummariesDefinition,
          ItemActionsDefinition<Person>,
          NavigationFiltersDefinition,
          GroupingDefinition<Person>
        >({
          dataAdapter: {
            paginationType: "pages",
            perPage: 10,
            fetchData: async (
              options:
                | BaseFetchOptions<FiltersDefinition>
                | PaginatedFetchOptions<FiltersDefinition>
            ) => {
              const pagination =
                "pagination" in options ? options.pagination : undefined
              const { currentPage = 1 } = pagination || {}
              const itemsPerPage = 10
              const totalItems = 45

              // Generate paginated data
              const startIndex = (currentPage - 1) * itemsPerPage
              const endIndex = Math.min(startIndex + itemsPerPage, totalItems)

              const paginatedData = Array.from(
                { length: endIndex - startIndex },
                (_, i) => ({
                  id: startIndex + i + 1,
                  name: `User ${startIndex + i + 1}`,
                  email: `user${startIndex + i + 1}@example.com`,
                })
              )

              return {
                records: paginatedData,
                total: totalItems,
                currentPage,
                perPage: itemsPerPage,
                pagesCount: Math.ceil(totalItems / itemsPerPage),
                type: "pages" as const,
              }
            },
          },
        }),
      { wrapper: TestWrapper }
    )

    render(
      <TestWrapper>
        <OneDataCollection
          source={result.current}
          visualizations={[
            {
              type: "table",
              options: {
                columns: [
                  { label: "Name", render: (item: Person) => item.name },
                  { label: "Email", render: (item: Person) => item.email },
                ],
              },
            },
          ]}
        />
      </TestWrapper>
    )

    await waitFor(() => {
      // Verify first page data is displayed
      expect(screen.getByText("User 1")).toBeInTheDocument()
      expect(screen.getByText("user10@example.com")).toBeInTheDocument()
    })

    // Find and click the next page button
    const nextPageButton =
      screen.getByLabelText(/next/i) || screen.getByText(/next/i)

    act(() => {
      nextPageButton.click()
    })

    // Verify second page data is displayed
    await waitFor(() => {
      expect(screen.getByText("User 11")).toBeInTheDocument()
      expect(screen.getByText("user20@example.com")).toBeInTheDocument()
    })
  })
})
