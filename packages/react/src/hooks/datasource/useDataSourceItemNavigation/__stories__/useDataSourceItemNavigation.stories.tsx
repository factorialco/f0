import { Meta, StoryObj } from "@storybook/react-vite"
import { useMemo } from "react"

import {
  createDataSourceDefinition,
  PaginatedDataAdapter,
  useData,
  useDataSource,
} from "../../index"
import { useDataSourceItemNavigation } from "../useDataSourceItemNavigation"

type Item = {
  id: number
  name: string
  email: string
  department: string
}

const DEPARTMENTS = ["Engineering", "Design", "Product", "Marketing"]

const generateItems = (count: number): Item[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    department: DEPARTMENTS[i % DEPARTMENTS.length],
  }))

const ALL_ITEMS = generateItems(23)

const itemFilters = {
  department: {
    type: "in" as const,
    label: "Department",
    options: {
      options: DEPARTMENTS.map((d) => ({ value: d, label: d })),
    },
  },
}

type ItemFilters = typeof itemFilters

const meta: Meta = {
  title: "Datasource/useDataSourceItemNavigation",
  parameters: {
    a11y: { skipCi: true },
    docs: {
      description: {
        component:
          "Hook for navigating through paginated data items with prev/next controls. Automatically handles page transitions at boundaries.",
      },
    },
  },
  tags: ["experimental", "!autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

// --- Page-Based Story ---

const createPageBasedAdapter = (
  perPage: number
): PaginatedDataAdapter<Item, ItemFilters> => ({
  paginationType: "pages",
  perPage,
  fetchData: async ({ filters, pagination }) => {
    await new Promise((resolve) => setTimeout(resolve, 300))
    let filtered = ALL_ITEMS
    if (filters.department && filters.department.length > 0) {
      filtered = filtered.filter((item) =>
        (filters.department as string[]).includes(item.department)
      )
    }
    const page = pagination.currentPage ?? 1
    const start = (page - 1) * perPage
    const records = filtered.slice(start, start + perPage)
    return {
      records,
      total: filtered.length,
      perPage,
      type: "pages" as const,
      currentPage: page,
      pagesCount: Math.ceil(filtered.length / perPage),
    }
  },
})

const PageBasedDemo = () => {
  const perPage = 5
  const definition = useMemo(
    () =>
      createDataSourceDefinition({
        filters: itemFilters,
        dataAdapter: createPageBasedAdapter(perPage),
      }),
    []
  )
  const dataSource = useDataSource(definition)
  const { data, paginationInfo, setPage, isLoading, loadMore } =
    useData(dataSource)

  const {
    activeItemId,
    activeItem,
    goToNext,
    goToPrevious,
    hasNext,
    hasPrevious,
    setActiveItemId,
    isNavigating,
  } = useDataSourceItemNavigation({
    dataSource,
    data,
    paginationInfo,
    setPage,
    loadMore,
    isLoading,
    idProvider: (item) => (item as Item).id,
  })

  const activeFilter =
    (dataSource.currentFilters.department as string[] | undefined) ?? []

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 500 }}>
      <h3>Page-Based Navigation</h3>

      <div style={{ marginBottom: 12 }}>
        <strong style={{ fontSize: "0.85em" }}>Filter by department:</strong>
        <div
          style={{ display: "flex", gap: 4, marginTop: 4, flexWrap: "wrap" }}
        >
          {DEPARTMENTS.map((dept) => {
            const isSelected = activeFilter.includes(dept)
            return (
              <button
                key={dept}
                onClick={() => {
                  const next = isSelected
                    ? activeFilter.filter((d) => d !== dept)
                    : [...activeFilter, dept]
                  dataSource.setCurrentFilters((prev) => ({
                    ...prev,
                    department: next.length > 0 ? next : undefined,
                  }))
                }}
                style={{
                  padding: "4px 10px",
                  borderRadius: 12,
                  border: "1px solid #ccc",
                  background: isSelected ? "#2196f3" : "white",
                  color: isSelected ? "white" : "#333",
                  cursor: "pointer",
                  fontSize: "0.8em",
                }}
              >
                {dept}
              </button>
            )
          })}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: 8,
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <button disabled={!hasPrevious || isNavigating} onClick={goToPrevious}>
          ← Previous
        </button>
        <button disabled={!hasNext || isNavigating} onClick={goToNext}>
          Next →
        </button>
        {isNavigating && <span style={{ color: "#888" }}>Loading…</span>}
      </div>

      {activeItem && (
        <div
          style={{
            padding: 12,
            marginBottom: 16,
            background: "#e8f4fd",
            borderRadius: 8,
            border: "1px solid #b3d9f2",
          }}
        >
          <strong>Active:</strong> {(activeItem as Item).name} —{" "}
          {(activeItem as Item).department} ({(activeItem as Item).email})
        </div>
      )}

      {paginationInfo?.type === "pages" && (
        <div style={{ marginBottom: 8, fontSize: "0.85em", color: "#666" }}>
          Page {paginationInfo.currentPage} of {paginationInfo.pagesCount} •{" "}
          {paginationInfo.total} total items
        </div>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {isLoading && data.records.length === 0 ? (
          <div style={{ padding: 16, color: "#888" }}>Loading…</div>
        ) : (
          data.records.map((item) => {
            const record = item as unknown as Item
            const isActive = record.id === activeItemId
            return (
              <div
                key={record.id}
                onClick={() => setActiveItemId(record.id)}
                style={{
                  padding: "8px 12px",
                  borderRadius: 6,
                  cursor: "pointer",
                  border: isActive ? "2px solid #2196f3" : "1px solid #e0e0e0",
                  background: isActive ? "#e3f2fd" : "white",
                  transition: "all 0.15s",
                }}
              >
                <strong>{record.name}</strong>
                <span
                  style={{ marginLeft: 8, color: "#888", fontSize: "0.85em" }}
                >
                  {record.department}
                </span>
                <span
                  style={{ marginLeft: 8, color: "#aaa", fontSize: "0.8em" }}
                >
                  {record.email}
                </span>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export const PageBased: Story = {
  render: () => <PageBasedDemo />,
}

// --- Infinite Scroll Story ---

const createInfiniteScrollAdapter = (
  perPage: number
): PaginatedDataAdapter<Item, ItemFilters> => ({
  paginationType: "infinite-scroll",
  perPage,
  fetchData: async ({ filters, pagination }) => {
    await new Promise((resolve) => setTimeout(resolve, 300))
    let filtered = ALL_ITEMS
    if (filters.department && filters.department.length > 0) {
      filtered = filtered.filter((item) =>
        (filters.department as string[]).includes(item.department)
      )
    }
    const cursor = pagination.cursor ? parseInt(pagination.cursor, 10) : 0
    const records = filtered.slice(cursor, cursor + perPage)
    const nextCursor = cursor + perPage
    return {
      records,
      total: filtered.length,
      perPage,
      type: "infinite-scroll" as const,
      cursor: nextCursor < filtered.length ? String(nextCursor) : null,
      hasMore: nextCursor < filtered.length,
    }
  },
})

const InfiniteScrollDemo = () => {
  const perPage = 5
  const definition = useMemo(
    () =>
      createDataSourceDefinition({
        filters: itemFilters,
        dataAdapter: createInfiniteScrollAdapter(perPage),
      }),
    []
  )
  const dataSource = useDataSource(definition)
  const { data, paginationInfo, setPage, isLoading, isLoadingMore, loadMore } =
    useData(dataSource)

  const {
    activeItemId,
    activeItem,
    goToNext,
    goToPrevious,
    hasNext,
    hasPrevious,
    setActiveItemId,
    isNavigating,
  } = useDataSourceItemNavigation({
    dataSource,
    data,
    paginationInfo,
    setPage,
    loadMore,
    isLoading: isLoading || isLoadingMore,
    idProvider: (item) => (item as Item).id,
  })

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 500 }}>
      <h3>Infinite Scroll Navigation</h3>

      <div style={{ marginBottom: 12 }}>
        <strong style={{ fontSize: "0.85em" }}>Filter by department:</strong>
        <div
          style={{ display: "flex", gap: 4, marginTop: 4, flexWrap: "wrap" }}
        >
          {DEPARTMENTS.map((dept) => {
            const currentFilter =
              (dataSource.currentFilters.department as string[] | undefined) ??
              []
            const isSelected = currentFilter.includes(dept)
            return (
              <button
                key={dept}
                onClick={() => {
                  const next = isSelected
                    ? currentFilter.filter((d) => d !== dept)
                    : [...currentFilter, dept]
                  dataSource.setCurrentFilters((prev) => ({
                    ...prev,
                    department: next.length > 0 ? next : undefined,
                  }))
                }}
                style={{
                  padding: "4px 10px",
                  borderRadius: 12,
                  border: "1px solid #ccc",
                  background: isSelected ? "#2196f3" : "white",
                  color: isSelected ? "white" : "#333",
                  cursor: "pointer",
                  fontSize: "0.8em",
                }}
              >
                {dept}
              </button>
            )
          })}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: 8,
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <button disabled={!hasPrevious || isNavigating} onClick={goToPrevious}>
          ← Previous
        </button>
        <button disabled={!hasNext || isNavigating} onClick={goToNext}>
          Next →
        </button>
        {isNavigating && <span style={{ color: "#888" }}>Loading…</span>}
      </div>

      {activeItem && (
        <div
          style={{
            padding: 12,
            marginBottom: 16,
            background: "#e8f4fd",
            borderRadius: 8,
            border: "1px solid #b3d9f2",
          }}
        >
          <strong>Active:</strong> {(activeItem as Item).name} —{" "}
          {(activeItem as Item).department} ({(activeItem as Item).email})
        </div>
      )}

      <div style={{ marginBottom: 8, fontSize: "0.85em", color: "#666" }}>
        {data.records.length} items loaded
        {paginationInfo?.type === "infinite-scroll" &&
          paginationInfo.hasMore &&
          " • More available"}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {isLoading && data.records.length === 0 ? (
          <div style={{ padding: 16, color: "#888" }}>Loading…</div>
        ) : (
          data.records.map((item) => {
            const record = item as unknown as Item
            const isActive = record.id === activeItemId
            return (
              <div
                key={record.id}
                onClick={() => setActiveItemId(record.id)}
                style={{
                  padding: "8px 12px",
                  borderRadius: 6,
                  cursor: "pointer",
                  border: isActive ? "2px solid #2196f3" : "1px solid #e0e0e0",
                  background: isActive ? "#e3f2fd" : "white",
                  transition: "all 0.15s",
                }}
              >
                <strong>{record.name}</strong>
                <span
                  style={{ marginLeft: 8, color: "#888", fontSize: "0.85em" }}
                >
                  {record.department}
                </span>
                <span
                  style={{ marginLeft: 8, color: "#aaa", fontSize: "0.8em" }}
                >
                  {record.email}
                </span>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export const InfiniteScroll: Story = {
  render: () => <InfiniteScrollDemo />,
}
