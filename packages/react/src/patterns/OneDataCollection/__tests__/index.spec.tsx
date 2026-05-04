import { act, screen, waitFor, within } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import { LayoutGrid } from "lucide-react"
import { useEffect, useState } from "react"
import { beforeAll, describe, expect, test, vi } from "vitest"
import { Observable } from "zen-observable-ts"

import type { FiltersDefinition } from "@/patterns/OneFilterPicker"

import { aiTranslations } from "@/sds/ai/F0AiChat"
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

import { useDataCollectionData } from "../hooks/useDataCollectionData/useDataCollectionData"
import { useDataCollectionItemNavigation } from "../hooks/useDataCollectionItemNavigation"
import { getDataCollectionItemNavigationDataStateSetter } from "../hooks/useDataCollectionItemNavigation/internal"
import {
  DataCollectionPaginatedFetchOptions,
  DataCollectionSource,
  useDataCollectionSource,
} from "../hooks/useDataCollectionSource"
import { OneDataCollection } from "../index"
import { ItemActionsDefinition } from "../item-actions"
import { NavigationFiltersDefinition } from "../navigationFilters/types"
import { SummariesDefinition } from "../summary"

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <I18nProvider
    translations={{
      ...defaultTranslations,
      ai: {
        ...defaultTranslations.ai,
        ...aiTranslations.ai,
      },
    }}
  >
    {children}
  </I18nProvider>
)

class MockIntersectionObserver implements IntersectionObserver {
  readonly root = null
  readonly rootMargin = ""
  readonly thresholds = []

  disconnect = vi.fn()
  observe = vi.fn()
  takeRecords = vi.fn(() => [])
  unobserve = vi.fn()
}

beforeAll(() => {
  vi.stubGlobal("IntersectionObserver", MockIntersectionObserver)
})

type ItemNavigationPerson = {
  id: number
  name: string
}

type ItemNavigationFetchData = (
  options: DataCollectionPaginatedFetchOptions<
    FiltersDefinition,
    NavigationFiltersDefinition
  >
) => {
  records: ItemNavigationPerson[]
  total: number
  perPage: number
  type: "infinite-scroll"
  cursor: string | null
  hasMore: boolean
}

const itemNavigationColumns = [
  { label: "Name", render: (item: ItemNavigationPerson) => item.name },
]

const itemNavigationPeople: ItemNavigationPerson[] = [
  { id: 1, name: "Ada" },
  { id: 2, name: "Bert" },
  { id: 3, name: "Cleo" },
  { id: 4, name: "Dora" },
  { id: 5, name: "Eli" },
]

const ItemNavigationStatus = ({
  fetchData,
  defaultActiveItemId = 1,
  snapshotMode,
  snapshotKey,
}: {
  fetchData: ItemNavigationFetchData
  defaultActiveItemId?: number
  snapshotMode?: "live" | "session" | "manual"
  snapshotKey?: string
}) => {
  const itemNavigation = useDataCollectionItemNavigation<ItemNavigationPerson>({
    defaultActiveItemId,
    snapshotMode,
    snapshotKey,
    idProvider: (item) => item.id,
  })
  const dataSource = useDataCollectionSource<ItemNavigationPerson>(
    {
      dataAdapter: {
        paginationType: "infinite-scroll",
        perPage: 2,
        fetchData,
      },
      itemUrl: (item) => `/people/${item.id}`,
      itemOnClick: (item) => () => itemNavigation.setActiveItemId(item.id),
    },
    [fetchData]
  )

  return (
    <>
      <div data-testid="active-name">
        {itemNavigation.activeItem?.name ?? "none"}
      </div>
      <div data-testid="absolute-index">
        {itemNavigation.absoluteIndex ?? "none"}
      </div>
      <div data-testid="loaded-count">{itemNavigation.loadedItemsCount}</div>
      <div data-testid="controls-current-index">
        {itemNavigation.controls?.currentIndex ?? "none"}
      </div>
      <div data-testid="controls-total-count">
        {itemNavigation.controls?.totalCount ?? "none"}
      </div>
      <div data-testid="next-url">{itemNavigation.nextItemUrl ?? "none"}</div>
      <div data-testid="ready">{String(itemNavigation.isReady)}</div>
      <button type="button" onClick={itemNavigation.goToNext}>
        Next item
      </button>
      <button type="button" onClick={itemNavigation.goToPrevious}>
        Previous item
      </button>
      <button type="button" onClick={() => itemNavigation.openItem(3)}>
        Select Cleo
      </button>
      <button type="button" onClick={itemNavigation.resetSnapshot}>
        Reset snapshot
      </button>
      <button type="button" onClick={itemNavigation.closeItem}>
        Close item
      </button>
      <OneDataCollection
        source={dataSource}
        storage={false}
        itemNavigation={itemNavigation}
        visualizations={[
          {
            type: "table",
            options: {
              columns: itemNavigationColumns,
            },
          },
        ]}
      />
    </>
  )
}

const ItemNavigationPageStatus = () => {
  const [records, setRecords] = useState(itemNavigationPeople)
  const itemNavigation = useDataCollectionItemNavigation<ItemNavigationPerson>({
    defaultActiveItemId: 2,
    snapshotMode: "session",
    idProvider: (item) => item.id,
  })

  const dataSource = useDataCollectionSource<ItemNavigationPerson>(
    {
      dataAdapter: {
        paginationType: "pages",
        perPage: 2,
        fetchData: ({ pagination }) => {
          const currentPage = pagination.currentPage ?? 1
          const start = (currentPage - 1) * 2
          return {
            records: records.slice(start, start + 2),
            total: records.length,
            perPage: 2,
            type: "pages" as const,
            currentPage,
            pagesCount: Math.ceil(records.length / 2),
          }
        },
      },
    },
    [records]
  )

  return (
    <>
      <div data-testid="active-name">
        {itemNavigation.activeItem?.name ?? "none"}
      </div>
      <div data-testid="active-index">{itemNavigation.activeIndex}</div>
      <div data-testid="absolute-index">
        {itemNavigation.absoluteIndex ?? "none"}
      </div>
      <div data-testid="loaded-count">{itemNavigation.loadedItemsCount}</div>
      <button type="button" onClick={itemNavigation.goToNext}>
        Next item
      </button>
      <button
        type="button"
        onClick={() =>
          setRecords((currentRecords) =>
            currentRecords.map((record) =>
              record.id === 3 ? { ...record, name: "Cleo updated" } : record
            )
          )
        }
      >
        Update active
      </button>
      <OneDataCollection
        source={dataSource}
        storage={false}
        itemNavigation={itemNavigation}
        visualizations={[
          {
            type: "table",
            options: {
              columns: itemNavigationColumns,
            },
          },
        ]}
      />
    </>
  )
}

const ItemNavigationRecordRefreshStatus = () => {
  const [records, setRecords] = useState(itemNavigationPeople.slice(0, 3))
  const itemNavigation = useDataCollectionItemNavigation<ItemNavigationPerson>({
    defaultActiveItemId: 3,
    snapshotMode: "session",
    idProvider: (item) => item.id,
  })

  const dataSource = useDataCollectionSource<ItemNavigationPerson>(
    {
      dataAdapter: {
        fetchData: () => ({ records }),
      },
    },
    [records]
  )

  return (
    <>
      <div data-testid="active-name">
        {itemNavigation.activeItem?.name ?? "none"}
      </div>
      <button
        type="button"
        onClick={() =>
          setRecords((currentRecords) =>
            currentRecords.map((record) =>
              record.id === 3 ? { ...record, name: "Cleo updated" } : record
            )
          )
        }
      >
        Update active
      </button>
      <OneDataCollection
        source={dataSource}
        storage={false}
        itemNavigation={itemNavigation}
        visualizations={[
          {
            type: "table",
            options: {
              columns: itemNavigationColumns,
            },
          },
        ]}
      />
    </>
  )
}

const ItemNavigationSnapshotStatus = () => {
  const [snapshotKey, setSnapshotKey] = useState("first")
  const [records, setRecords] = useState(itemNavigationPeople.slice(0, 3))

  const fetchData: ItemNavigationFetchData = () => ({
    records,
    total: records.length,
    perPage: records.length || 1,
    type: "infinite-scroll" as const,
    cursor: null,
    hasMore: false,
  })

  return (
    <>
      <button
        type="button"
        onClick={() => setRecords(itemNavigationPeople.slice(0, 2))}
      >
        Remove active
      </button>
      <button type="button" onClick={() => setSnapshotKey("second")}>
        New snapshot
      </button>
      <ItemNavigationStatus
        fetchData={fetchData}
        defaultActiveItemId={3}
        snapshotKey={snapshotKey}
      />
    </>
  )
}

const ItemNavigationSessionSnapshotStatus = () => {
  const [records, setRecords] = useState(itemNavigationPeople.slice(0, 3))

  const fetchData: ItemNavigationFetchData = () => ({
    records,
    total: records.length,
    perPage: records.length || 1,
    type: "infinite-scroll" as const,
    cursor: null,
    hasMore: false,
  })

  return (
    <>
      <button
        type="button"
        onClick={() => setRecords(itemNavigationPeople.slice(0, 2))}
      >
        Remove active
      </button>
      <ItemNavigationStatus
        fetchData={fetchData}
        defaultActiveItemId={3}
        snapshotMode="session"
      />
    </>
  )
}

const ItemNavigationLiveSnapshotStatus = () => {
  const [records, setRecords] = useState(itemNavigationPeople.slice(0, 3))

  const fetchData: ItemNavigationFetchData = () => ({
    records,
    total: records.length,
    perPage: records.length || 1,
    type: "infinite-scroll" as const,
    cursor: null,
    hasMore: false,
  })

  return (
    <>
      <button
        type="button"
        onClick={() => setRecords(itemNavigationPeople.slice(0, 2))}
      >
        Remove active
      </button>
      <ItemNavigationStatus
        fetchData={fetchData}
        defaultActiveItemId={3}
        snapshotMode="live"
      />
    </>
  )
}

const ItemNavigationLoadingSnapshotStatus = () => {
  const [snapshotKey, setSnapshotKey] = useState("first")
  const [records, setRecords] = useState(itemNavigationPeople.slice(0, 3))
  const [loading, setLoading] = useState(false)

  const itemNavigation = useDataCollectionItemNavigation<ItemNavigationPerson>({
    defaultActiveItemId: 3,
    snapshotKey,
    idProvider: (item) => item.id,
  })
  const setItemNavigationDataState =
    getDataCollectionItemNavigationDataStateSetter(itemNavigation)

  useEffect(() => {
    if (!loading) return

    setItemNavigationDataState?.({
      source: {},
      data: {
        type: "flat",
        records: records.map((record) => ({
          ...record,
          [GROUP_ID_SYMBOL]: undefined,
        })),
        groups: [],
      },
      paginationInfo: null,
      setPage: () => {},
      loadMore: () => {},
      isLoading: true,
      isLoadingMore: false,
    })
  }, [loading, records, setItemNavigationDataState])

  return (
    <>
      <div data-testid="active-name">
        {itemNavigation.activeItem?.name ?? "none"}
      </div>
      <div data-testid="loaded-count">{itemNavigation.loadedItemsCount}</div>
      <button
        type="button"
        onClick={() => {
          setItemNavigationDataState?.({
            source: {},
            data: {
              type: "flat",
              records: records.map((record) => ({
                ...record,
                [GROUP_ID_SYMBOL]: undefined,
              })),
              groups: [],
            },
            paginationInfo: null,
            setPage: () => {},
            loadMore: () => {},
            isLoading: loading,
            isLoadingMore: false,
          })
        }}
      >
        Register state
      </button>
      <button
        type="button"
        onClick={() => {
          setLoading(true)
        }}
      >
        Start loading
      </button>
      <button
        type="button"
        onClick={() => {
          setLoading(true)
          setSnapshotKey("second")
        }}
      >
        Start loading and change snapshot key
      </button>
      <button type="button" onClick={() => setSnapshotKey("second")}>
        Change snapshot key
      </button>
      <button
        type="button"
        onClick={() => {
          setRecords(itemNavigationPeople.slice(0, 2))
          setLoading(false)
        }}
      >
        Finish with smaller data
      </button>
    </>
  )
}

const UnsupportedItemNavigationVisualizationStatus = () => {
  const itemNavigation = useDataCollectionItemNavigation<ItemNavigationPerson>({
    defaultActiveItemId: 1,
    idProvider: (item) => item.id,
  })

  const dataSource = useDataCollectionSource<ItemNavigationPerson>({
    dataAdapter: {
      fetchData: () => ({ records: itemNavigationPeople.slice(0, 2) }),
    },
  })

  return (
    <>
      <div data-testid="ready">{String(itemNavigation.isReady)}</div>
      <OneDataCollection
        source={dataSource}
        storage={false}
        itemNavigation={itemNavigation}
        visualizations={[
          {
            type: "custom",
            label: "Custom",
            icon: LayoutGrid,
            component: ({ source }) => {
              const { data } = useDataCollectionData<
                ItemNavigationPerson,
                FiltersDefinition,
                SortingsDefinition,
                SummariesDefinition,
                NavigationFiltersDefinition,
                GroupingDefinition<ItemNavigationPerson>
              >(source)

              return (
                <div>
                  {data.records.map((record) => (
                    <div key={record.id}>{record.name}</div>
                  ))}
                </div>
              )
            },
          },
        ]}
      />
    </>
  )
}

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

  test("connects item navigation to the active collection data without extra fetching", async () => {
    const fetchData = vi.fn<ItemNavigationFetchData>(({ pagination }) => {
      const cursor = pagination.cursor ? Number(pagination.cursor) : 0
      const records = itemNavigationPeople.slice(cursor, cursor + 2)
      const nextCursor = cursor + records.length

      return {
        records,
        total: itemNavigationPeople.length,
        perPage: 2,
        type: "infinite-scroll" as const,
        cursor:
          nextCursor < itemNavigationPeople.length ? String(nextCursor) : null,
        hasMore: nextCursor < itemNavigationPeople.length,
      }
    })

    render(
      <TestWrapper>
        <ItemNavigationStatus fetchData={fetchData} />
      </TestWrapper>
    )

    await waitFor(() => {
      expect(screen.getByTestId("active-name")).toHaveTextContent("Ada")
    })

    expect(screen.getByTestId("ready")).toHaveTextContent("true")
    expect(screen.getByTestId("absolute-index")).toHaveTextContent("0")
    expect(screen.getByTestId("loaded-count")).toHaveTextContent("2")
    expect(screen.getByTestId("controls-current-index")).toHaveTextContent("0")
    expect(screen.getByTestId("controls-total-count")).toHaveTextContent("5")
    expect(screen.getByTestId("next-url")).toHaveTextContent("/people/2")
    expect(fetchData).toHaveBeenCalledTimes(1)
  })

  test("loads the next infinite-scroll page when navigating past loaded records", async () => {
    const fetchData = vi.fn<ItemNavigationFetchData>(({ pagination }) => {
      const cursor = pagination.cursor ? Number(pagination.cursor) : 0
      const records = itemNavigationPeople.slice(cursor, cursor + 2)
      const nextCursor = cursor + records.length

      return {
        records,
        total: itemNavigationPeople.length,
        perPage: 2,
        type: "infinite-scroll" as const,
        cursor:
          nextCursor < itemNavigationPeople.length ? String(nextCursor) : null,
        hasMore: nextCursor < itemNavigationPeople.length,
      }
    })

    render(
      <TestWrapper>
        <ItemNavigationStatus fetchData={fetchData} />
      </TestWrapper>
    )

    await waitFor(() => {
      expect(screen.getByTestId("active-name")).toHaveTextContent("Ada")
    })

    await userEvent.click(screen.getByRole("button", { name: "Next item" }))
    expect(screen.getByTestId("active-name")).toHaveTextContent("Bert")

    await userEvent.click(screen.getByRole("button", { name: "Next item" }))

    await waitFor(() => {
      expect(screen.getByTestId("active-name")).toHaveTextContent("Cleo")
    })

    expect(screen.getByTestId("absolute-index")).toHaveTextContent("2")
    expect(screen.getByTestId("loaded-count")).toHaveTextContent("4")
    expect(fetchData).toHaveBeenCalledTimes(2)
  })

  test("replaces session snapshot when page-based navigation loads another page", async () => {
    render(
      <TestWrapper>
        <ItemNavigationPageStatus />
      </TestWrapper>
    )

    await waitFor(() => {
      expect(screen.getByTestId("active-name")).toHaveTextContent("Bert")
    })

    await userEvent.click(screen.getByRole("button", { name: "Next item" }))

    await waitFor(() => {
      expect(screen.getByTestId("active-name")).toHaveTextContent("Cleo")
    })

    expect(screen.getByTestId("active-index")).toHaveTextContent("0")
    expect(screen.getByTestId("absolute-index")).toHaveTextContent("2")
    expect(screen.getByTestId("loaded-count")).toHaveTextContent("2")
  })

  test("refreshes same-id snapshot records after refetch", async () => {
    render(
      <TestWrapper>
        <ItemNavigationRecordRefreshStatus />
      </TestWrapper>
    )

    await waitFor(() => {
      expect(screen.getByTestId("active-name")).toHaveTextContent("Cleo")
    })

    await userEvent.click(screen.getByRole("button", { name: "Update active" }))

    await waitFor(() => {
      expect(screen.getByTestId("active-name")).toHaveTextContent(
        "Cleo updated"
      )
    })
  })

  test("keeps snapshot navigation stable until the snapshot key changes", async () => {
    render(
      <TestWrapper>
        <ItemNavigationSnapshotStatus />
      </TestWrapper>
    )

    await waitFor(() => {
      expect(screen.getByTestId("active-name")).toHaveTextContent("Cleo")
    })

    await userEvent.click(screen.getByRole("button", { name: "Remove active" }))

    await waitFor(() => {
      expect(screen.getByText("Bert")).toBeInTheDocument()
    })

    expect(screen.getByTestId("active-name")).toHaveTextContent("Cleo")
    expect(screen.getByTestId("loaded-count")).toHaveTextContent("3")

    await userEvent.click(screen.getByRole("button", { name: "New snapshot" }))

    await waitFor(() => {
      expect(screen.getByTestId("active-name")).toHaveTextContent("none")
    })

    expect(screen.getByTestId("loaded-count")).toHaveTextContent("2")
  })

  test("keeps session snapshots stable until resetSnapshot is called", async () => {
    render(
      <TestWrapper>
        <ItemNavigationSessionSnapshotStatus />
      </TestWrapper>
    )

    await waitFor(() => {
      expect(screen.getByTestId("active-name")).toHaveTextContent("Cleo")
    })

    await userEvent.click(screen.getByRole("button", { name: "Select Cleo" }))
    await userEvent.click(screen.getByRole("button", { name: "Remove active" }))

    await waitFor(() => {
      expect(screen.getByText("Bert")).toBeInTheDocument()
    })

    expect(screen.getByTestId("active-name")).toHaveTextContent("Cleo")
    expect(screen.getByTestId("loaded-count")).toHaveTextContent("3")

    await userEvent.click(
      screen.getByRole("button", { name: "Reset snapshot" })
    )

    await waitFor(() => {
      expect(screen.getByTestId("active-name")).toHaveTextContent("none")
    })
    expect(screen.getByTestId("loaded-count")).toHaveTextContent("2")
  })

  test("follows live collection data when snapshot mode is live", async () => {
    render(
      <TestWrapper>
        <ItemNavigationLiveSnapshotStatus />
      </TestWrapper>
    )

    await waitFor(() => {
      expect(screen.getByTestId("active-name")).toHaveTextContent("Cleo")
    })

    await userEvent.click(screen.getByRole("button", { name: "Remove active" }))

    await waitFor(() => {
      expect(screen.getByTestId("active-name")).toHaveTextContent("none")
    })
    expect(screen.getByTestId("loaded-count")).toHaveTextContent("2")
  })

  test("closeItem clears active item and controls", async () => {
    const fetchData = vi.fn<ItemNavigationFetchData>(() => ({
      records: itemNavigationPeople.slice(0, 3),
      total: 3,
      perPage: 3,
      type: "infinite-scroll" as const,
      cursor: null,
      hasMore: false,
    }))

    render(
      <TestWrapper>
        <ItemNavigationStatus fetchData={fetchData} />
      </TestWrapper>
    )

    await waitFor(() => {
      expect(screen.getByTestId("active-name")).toHaveTextContent("Ada")
    })

    await userEvent.click(screen.getByRole("button", { name: "Close item" }))

    expect(screen.getByTestId("active-name")).toHaveTextContent("none")
    expect(screen.getByTestId("controls-current-index")).toHaveTextContent(
      "none"
    )
  })

  test("resets snapshot with fresh data when snapshot key changes during loading", async () => {
    render(
      <TestWrapper>
        <ItemNavigationLoadingSnapshotStatus />
      </TestWrapper>
    )

    await userEvent.click(
      screen.getByRole("button", { name: "Register state" })
    )

    await waitFor(() => {
      expect(screen.getByTestId("active-name")).toHaveTextContent("Cleo")
    })

    await userEvent.click(
      screen.getByRole("button", {
        name: "Start loading and change snapshot key",
      })
    )
    expect(screen.getByTestId("loaded-count")).toHaveTextContent("3")

    await userEvent.click(
      screen.getByRole("button", { name: "Finish with smaller data" })
    )
    await userEvent.click(
      screen.getByRole("button", { name: "Register state" })
    )

    await waitFor(() => {
      expect(screen.getByTestId("active-name")).toHaveTextContent("none")
    })

    expect(screen.getByTestId("loaded-count")).toHaveTextContent("2")
  })

  test("does not register item navigation for unsupported visualizations", async () => {
    render(
      <TestWrapper>
        <UnsupportedItemNavigationVisualizationStatus />
      </TestWrapper>
    )

    await waitFor(() => {
      expect(screen.getByText("Ada")).toBeInTheDocument()
    })

    expect(screen.getByTestId("ready")).toHaveTextContent("false")
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
          defaultSortings: {
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
          defaultSortings: defaultSorting,
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
          defaultSortings: {
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
