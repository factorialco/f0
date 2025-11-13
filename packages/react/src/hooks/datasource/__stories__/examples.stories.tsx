import { Meta, StoryObj } from "@storybook/react-vite"
import { useMemo } from "react"
import {
  createDataSourceDefinition,
  PaginatedDataAdapter,
  useData,
  useDataSource,
  useGroups,
  useSelectable,
} from "../index"

const meta: Meta = {
  title: "Datasource/Examples",
  parameters: {
    a11y: {
      skipCi: true,
    },
    docs: {
      description: {
        component:
          "Examples demonstrating the usage of datasource hooks together.",
      },
    },
  },
}

export default meta

import { Await } from "@/components/Utilities/Await"
import {
  generateMockUsers,
  MockUser,
} from "@/experimental/OneDataCollection/__stories__/mockData"
import { DEPARTMENTS_MOCK } from "@/mocks"

const mockUsers: MockUser[] = generateMockUsers(30)

const userFilters = {
  department: {
    type: "in" as const,
    label: "Department",
    options: {
      options: DEPARTMENTS_MOCK.map((value) => ({ value, label: value })),
    },
  },
  status: {
    type: "in" as const,
    label: "Status",
    options: {
      options: [
        { value: "active", label: "Active" },
        { value: "inactive", label: "Inactive" },
      ],
    },
  },
}

// Mock data adapter
const createMockDataAdapter = () =>
  ({
    paginationType: "infinite-scroll",
    fetchData: async ({ filters, pagination }) => {
      await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate API delay

      let filteredUsers = mockUsers

      console.log(filters, pagination)

      if (filters.department && filters.department.length > 0) {
        filteredUsers = filteredUsers.filter((user) =>
          filters.department?.includes(user.department)
        )
      }

      if (filters.status && filters.status.length > 0) {
        filteredUsers = filteredUsers.filter((user) =>
          filters.status?.includes(user.status)
        )
      }
      const { cursor, perPage } = pagination

      if (cursor) {
        filteredUsers = filteredUsers.slice(
          parseInt(cursor),
          parseInt(cursor) + (perPage ?? 10)
        )
      }

      return {
        records: filteredUsers,
        total: filteredUsers.length,
        perPage: perPage ?? 10,
        type: "infinite-scroll",
        cursor: null,
        hasMore: true,
      }
    },
  }) satisfies PaginatedDataAdapter<MockUser, typeof userFilters>

const mockDataAdapter = createMockDataAdapter()

// Basic example
const BasicExample = () => {
  const datasourceDefinition = useMemo(
    () =>
      createDataSourceDefinition({
        filters: userFilters,
        dataAdapter: mockDataAdapter,
      }),
    []
  )

  const dataSource = useDataSource(datasourceDefinition)

  const { data, isLoading, error } = useData(dataSource)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <h3>Basic Data Collection</h3>
      <p>Simple list of users without grouping or selection</p>

      <div style={{ marginBottom: "16px" }}>
        <strong>Current filters:</strong>
        <pre>{JSON.stringify(dataSource.currentFilters, null, 2)}</pre>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {data.records.map((user) => (
          <div
            key={user.id}
            style={{
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <strong>{user.name}</strong>
              <div style={{ fontSize: "0.9em", color: "#666" }}>
                {user.email} • {user.department} • {user.role}
              </div>
            </div>
            <div>
              <span
                style={{
                  padding: "2px 8px",
                  borderRadius: "12px",
                  backgroundColor:
                    user.status === "active" ? "#d4edda" : "#f8d7da",
                  color: user.status === "active" ? "#155724" : "#721c24",
                  fontSize: "0.8em",
                }}
              >
                {user.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Grouped example
const GroupedExample = () => {
  const dataSource = useDataSource(
    useMemo(
      () =>
        createDataSourceDefinition({
          filters: userFilters,
          grouping: {
            groupBy: {
              department: {
                name: "Department",
                label: (groupId: string) => groupId,
              },
            },
          },
          currentGrouping: { field: "department", order: "asc" },
          dataAdapter: mockDataAdapter,
        }),
      []
    )
  )

  const { data, isLoading, error } = useData(dataSource)
  const { openGroups, setGroupOpen } = useGroups(data.groups, ["Engineering"])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  if (data.type !== "grouped") return <div>Data is not grouped</div>

  return (
    <div>
      <h3>Grouped Data Collection</h3>
      <p>Users grouped by department with expand/collapse functionality</p>

      <div style={{ marginBottom: "16px" }}>
        <button
          onClick={() =>
            data.groups.forEach((group) => setGroupOpen(group.key, true))
          }
          style={{ marginRight: "8px" }}
        >
          Expand All
        </button>
        <button
          onClick={() =>
            data.groups.forEach((group) => setGroupOpen(group.key, false))
          }
        >
          Collapse All
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {data.groups.map((group) => (
          <div
            key={group.key}
            style={{ border: "1px solid #ddd", borderRadius: "8px" }}
          >
            <button
              onClick={() => setGroupOpen(group.key, !openGroups[group.key])}
              style={{
                width: "100%",
                padding: "12px",
                background: "#f8f9fa",
                border: "none",
                borderBottom: openGroups[group.key] ? "1px solid #ddd" : "none",
                borderRadius: openGroups[group.key] ? "8px 8px 0 0" : "8px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <span>{openGroups[group.key] ? "▼" : "▶"}</span>
                <strong>
                  <Await resolve={group.itemCount} fallback={<span>...</span>}>
                    {(itemCount) => (
                      <>
                        {group.label} ({itemCount})
                      </>
                    )}
                  </Await>
                </strong>
              </span>
            </button>

            {openGroups[group.key] && (
              <div
                style={{
                  padding: "12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                {group.records.map((user) => (
                  <div
                    key={user.id}
                    style={{
                      padding: "8px",
                      backgroundColor: "#f8f9fa",
                      borderRadius: "4px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <strong>{user.name}</strong>
                      <div style={{ fontSize: "0.9em", color: "#666" }}>
                        {user.email} • {user.role}
                      </div>
                    </div>
                    <div>
                      <span
                        style={{
                          padding: "2px 8px",
                          borderRadius: "12px",
                          backgroundColor:
                            user.status === "active" ? "#d4edda" : "#f8d7da",
                          color:
                            user.status === "active" ? "#155724" : "#721c24",
                          fontSize: "0.8em",
                        }}
                      >
                        {user.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// Selectable example
const SelectableExample = () => {
  const dataSource = useDataSource(
    useMemo(
      () =>
        createDataSourceDefinition({
          filters: userFilters,
          selectable: (user) => (user.canBeSelected ? user.id : undefined),
          dataAdapter: mockDataAdapter,
        }),
      []
    )
  )

  const { data, isLoading, error, paginationInfo } = useData(dataSource)

  const {
    selectedItems,
    handleSelectItemChange,
    handleSelectAll,
    allSelectedStatus,
  } = useSelectable(data, paginationInfo, dataSource, {
    onSelectItems: (selectedItems) => {
      console.log("Selection changed:", {
        selectedItems,
      })
    },
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <h3>Selectable Data Collection</h3>
      <p>Users with individual selection and bulk operations</p>

      <div
        style={{
          marginBottom: "16px",
          padding: "12px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
        }}
      >
        <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <input
            type="checkbox"
            checked={allSelectedStatus.checked}
            ref={(el) => {
              if (el) el.indeterminate = allSelectedStatus.indeterminate
            }}
            onChange={(e) => handleSelectAll(e.target.checked)}
          />
          <strong>
            {allSelectedStatus.selectedCount > 0
              ? `${allSelectedStatus.selectedCount} items selected`
              : "Select all"}
          </strong>
        </label>

        {selectedItems.size > 0 && (
          <div style={{ marginTop: "8px", display: "flex", gap: "8px" }}>
            <button
              onClick={() => {
                const selectedArray = Array.from(selectedItems.values())
                console.log("Bulk delete:", selectedArray)
                alert(`Would delete ${selectedArray.length} users`)
              }}
              style={{
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                padding: "4px 8px",
                borderRadius: "4px",
              }}
            >
              Delete Selected
            </button>
            <button
              onClick={() => {
                const selectedArray = Array.from(selectedItems.values())
                console.log("Bulk export:", selectedArray)
                alert(`Would export ${selectedArray.length} users`)
              }}
              style={{
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                padding: "4px 8px",
                borderRadius: "4px",
              }}
            >
              Export Selected
            </button>
          </div>
        )}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {data.records.map((user) => (
          <div
            key={user.id}
            style={{
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              backgroundColor: selectedItems.has(user.id) ? "#e3f2fd" : "white",
            }}
          >
            <input
              type="checkbox"
              checked={selectedItems.has(user.id)}
              onChange={(e) => handleSelectItemChange(user, e.target.checked)}
              disabled={!user.canBeSelected}
            />
            <div style={{ flex: 1 }}>
              <strong>{user.name}</strong>
              <div style={{ fontSize: "0.9em", color: "#666" }}>
                {user.email} • {user.department} • {user.role}
              </div>
            </div>
            <div>
              <span
                style={{
                  padding: "2px 8px",
                  borderRadius: "12px",
                  backgroundColor:
                    user.status === "active" ? "#d4edda" : "#f8d7da",
                  color: user.status === "active" ? "#155724" : "#721c24",
                  fontSize: "0.8em",
                }}
              >
                {user.status}
              </span>
              {!user.canBeSelected && (
                <span
                  style={{
                    marginLeft: "8px",
                    fontSize: "0.8em",
                    color: "#6c757d",
                  }}
                >
                  (Cannot be selected)
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Complete example with all hooks
const CompleteExample = () => {
  const dataSource = useDataSource(
    useMemo(
      () =>
        createDataSourceDefinition({
          filters: userFilters,
          selectable: (user) => (user.canBeSelected ? user.id : undefined),
          grouping: {
            groupBy: {
              department: {
                name: "Department",
                label: (groupId: string) => groupId,
              },
            },
          },
          currentGrouping: { field: "department", order: "asc" },
          dataAdapter: mockDataAdapter,
        }),
      []
    )
  )

  const { data, isLoading, error, paginationInfo } = useData(dataSource)
  const { openGroups, setGroupOpen } = useGroups(data.groups, ["Engineering"])

  const {
    selectedItems,
    handleSelectItemChange,
    handleSelectAll,
    handleSelectGroupChange,
    allSelectedStatus,
    groupAllSelectedStatus,
  } = useSelectable(data, paginationInfo, dataSource, {
    selectionMode: "single",
    onSelectItems: (selectedItems) => {
      console.log("Selection changed:", {
        selectedItems,
      })
    },
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  if (data.type !== "grouped") return <div>Data is not grouped</div>

  return (
    <div>
      <h3>Complete Data Collection</h3>
      <p>
        All hooks working together: grouping, selection, and group management
      </p>

      {/* Global controls */}
      <div
        style={{
          marginBottom: "16px",
          padding: "12px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "8px",
          }}
        >
          <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <input
              type="checkbox"
              checked={allSelectedStatus.checked}
              ref={(el) => {
                if (el) el.indeterminate = allSelectedStatus.indeterminate
              }}
              onChange={(e) => handleSelectAll(e.target.checked)}
            />
            <strong>
              {allSelectedStatus.selectedCount > 0
                ? `${allSelectedStatus.selectedCount} items selected`
                : "Select all"}
            </strong>
          </label>

          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={() =>
                data.groups.forEach((group) => setGroupOpen(group.key, true))
              }
              style={{
                padding: "4px 8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                backgroundColor: "white",
              }}
            >
              Expand All
            </button>
            <button
              onClick={() =>
                data.groups.forEach((group) => setGroupOpen(group.key, false))
              }
              style={{
                padding: "4px 8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                backgroundColor: "white",
              }}
            >
              Collapse All
            </button>
          </div>
        </div>

        {selectedItems.size > 0 && (
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={() => {
                const selectedArray = Array.from(selectedItems.values())
                console.log("Bulk delete:", selectedArray)
                alert(`Would delete ${selectedArray.length} users`)
              }}
              style={{
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                padding: "4px 8px",
                borderRadius: "4px",
              }}
            >
              Delete Selected
            </button>
            <button
              onClick={() => {
                const selectedArray = Array.from(selectedItems.values())
                console.log("Bulk export:", selectedArray)
                alert(`Would export ${selectedArray.length} users`)
              }}
              style={{
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                padding: "4px 8px",
                borderRadius: "4px",
              }}
            >
              Export Selected
            </button>
          </div>
        )}
      </div>

      {/* Groups */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {data.groups.map((group) => {
          const groupStatus = groupAllSelectedStatus[group.key]

          return (
            <div
              key={group.key}
              style={{ border: "1px solid #ddd", borderRadius: "8px" }}
            >
              <div
                style={{
                  padding: "12px",
                  background: "#f8f9fa",
                  borderBottom: openGroups[group.key]
                    ? "1px solid #ddd"
                    : "none",
                  borderRadius: openGroups[group.key] ? "8px 8px 0 0" : "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <input
                    type="checkbox"
                    checked={groupStatus?.checked || false}
                    ref={(el) => {
                      if (el)
                        el.indeterminate = groupStatus?.indeterminate || false
                    }}
                    onChange={(e) =>
                      handleSelectGroupChange(group, e.target.checked)
                    }
                  />
                  <button
                    onClick={() =>
                      setGroupOpen(group.key, !openGroups[group.key])
                    }
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span>{openGroups[group.key] ? "▼" : "▶"}</span>
                    <strong>
                      <Await
                        resolve={group.label}
                        fallback={<div>Loading...</div>}
                      >
                        {(label) => <>{label}</>}
                      </Await>
                    </strong>
                  </button>
                </div>

                <div style={{ fontSize: "0.9em", color: "#666" }}>
                  <Await
                    resolve={group.itemCount}
                    fallback={<div>Loading...</div>}
                  >
                    {(itemCount) => (
                      <>
                        {groupStatus?.selectedCount || 0} of {itemCount}{" "}
                        selected
                      </>
                    )}
                  </Await>
                </div>
              </div>

              {openGroups[group.key] && (
                <div
                  style={{
                    padding: "12px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  {group.records.map((user) => (
                    <div
                      key={user.id}
                      style={{
                        padding: "8px",
                        backgroundColor: selectedItems.has(user.id)
                          ? "#e3f2fd"
                          : "#f8f9fa",
                        borderRadius: "4px",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={selectedItems.has(user.id)}
                        onChange={(e) =>
                          handleSelectItemChange(user, e.target.checked)
                        }
                        disabled={!user.canBeSelected}
                      />
                      <div style={{ flex: 1 }}>
                        <strong>{user.name}</strong>
                        <div style={{ fontSize: "0.9em", color: "#666" }}>
                          {user.email} • {user.role}
                        </div>
                      </div>
                      <div>
                        <span
                          style={{
                            padding: "2px 8px",
                            borderRadius: "12px",
                            backgroundColor:
                              user.status === "active" ? "#d4edda" : "#f8d7da",
                            color:
                              user.status === "active" ? "#155724" : "#721c24",
                            fontSize: "0.8em",
                          }}
                        >
                          {user.status}
                        </span>
                        {!user.canBeSelected && (
                          <span
                            style={{
                              marginLeft: "8px",
                              fontSize: "0.8em",
                              color: "#6c757d",
                            }}
                          >
                            (Cannot be selected)
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Filter example
const FilterExample = () => {
  const dataSource = useDataSource(
    useMemo(
      () =>
        createDataSourceDefinition({
          filters: userFilters,
          currentFilters: {
            department: [
              "Engineering" as (typeof userFilters)["department"]["options"]["options"][number]["value"],
            ],
          },
          dataAdapter: mockDataAdapter,
        }),
      []
    )
  )

  const { data, isLoading, error } = useData(dataSource)

  const handleFilterChange = (filterKey: string, value: string[]) => {
    dataSource.setCurrentFilters({
      ...dataSource.currentFilters,
      [filterKey]: value,
    })
  }

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <h3>Filtered Data Collection</h3>
      <p>Data collection with interactive filters</p>

      <div
        style={{
          marginBottom: "16px",
          padding: "12px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
        }}
      >
        <div style={{ display: "flex", gap: "16px", marginBottom: "8px" }}>
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "4px",
                fontWeight: "bold",
              }}
            >
              Department:
            </label>
            <select
              multiple
              value={dataSource.currentFilters.department || []}
              onChange={(e) => {
                const values = Array.from(
                  e.target.selectedOptions,
                  (option) => option.value
                )
                handleFilterChange("department", values)
              }}
              style={{ padding: "4px", minWidth: "150px" }}
            >
              <option value="Engineering">Engineering</option>
              <option value="Design">Design</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>

          <div>
            <label
              style={{
                display: "block",
                marginBottom: "4px",
                fontWeight: "bold",
              }}
            >
              Status:
            </label>
            <select
              multiple
              value={dataSource.currentFilters.status || []}
              onChange={(e) => {
                const values = Array.from(
                  e.target.selectedOptions,
                  (option) => option.value
                )
                handleFilterChange("status", values)
              }}
              style={{ padding: "4px", minWidth: "150px" }}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>

        <div style={{ fontSize: "0.9em", color: "#666" }}>
          Current filters: {JSON.stringify(dataSource.currentFilters)}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {data.records.map((user) => (
          <div
            key={user.id}
            style={{
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <strong>{user.name}</strong>
              <div style={{ fontSize: "0.9em", color: "#666" }}>
                {user.email} • {user.department} • {user.role}
              </div>
            </div>
            <div>
              <span
                style={{
                  padding: "2px 8px",
                  borderRadius: "12px",
                  backgroundColor:
                    user.status === "active" ? "#d4edda" : "#f8d7da",
                  color: user.status === "active" ? "#155724" : "#721c24",
                  fontSize: "0.8em",
                }}
              >
                {user.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Story exports
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => <BasicExample />,
  parameters: {
    docs: {
      description: {
        story:
          "Basic usage of useDataSource and useData hooks to display a simple list of users.",
      },
    },
  },
}

export const Grouped: Story = {
  render: () => <GroupedExample />,
  parameters: {
    docs: {
      description: {
        story:
          "Data collection with grouping functionality using useGroups hook.",
      },
    },
  },
}

export const Selectable: Story = {
  render: () => <SelectableExample />,
  parameters: {
    docs: {
      description: {
        story:
          "Data collection with selection functionality using useSelectable hook.",
      },
    },
  },
}

export const Complete: Story = {
  render: () => <CompleteExample />,
  parameters: {
    docs: {
      description: {
        story:
          "Complete example showcasing all hooks working together with grouping, selection, and group management.",
      },
    },
  },
}

export const WithFilters: Story = {
  render: () => <FilterExample />,
  parameters: {
    docs: {
      description: {
        story:
          "Data collection with interactive filters demonstrating state management.",
      },
    },
  },
}
