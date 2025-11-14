import { generateMockUsers, type MockUser } from "@/mocks"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { useMemo, useState } from "react"
import type { PaginatedDataAdapter } from "../types"
import { useData } from "../useData"
import { createDataSourceDefinition, useDataSource } from "../useDataSource"
import { useSelectable } from "./useSelectable"

const meta: Meta = {
  title: "Hooks/Datasource/useSelectable",
  parameters: {
    docs: {
      description: {
        component: "Hook for managing item selection in data collections.",
      },
    },
  },
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof meta>

// Generate mock data
const mockUsers = generateMockUsers(20)

// Simple mock adapter
const createMockAdapter = (): PaginatedDataAdapter<
  MockUser,
  Record<string, never>
> => ({
  paginationType: "pages",
  fetchData: async () => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300))

    return {
      records: mockUsers,
      total: mockUsers.length,
      perPage: 10,
      type: "pages",
      currentPage: 1,
      pagesCount: 2,
    }
  },
})

// Basic Playground Component
const BasicPlayground = () => {
  const [selectionMode, setSelectionMode] = useState<"multi" | "single">(
    "multi"
  )

  const dataSource = useDataSource(
    useMemo(
      () =>
        createDataSourceDefinition({
          filters: {},
          selectable: (user: MockUser) => user.id,
          dataAdapter: createMockAdapter(),
        }),
      []
    )
  )

  const { data, paginationInfo } = useData(dataSource)

  const {
    selectedItems,
    isAllSelected,
    isPartiallySelected,
    handleSelectItemChange,
    handleSelectAll,
    allSelectedStatus,
    selectionStatus,
  } = useSelectable({
    data,
    paginationInfo,
    source: dataSource,
    selectionMode,
    onSelectItems: (status, clearFn) => {
      console.log("Selection changed:", status)
      console.log("Clear function available:", !!clearFn)
    },
  })

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>useSelectable Playground</h2>

      {/* Controls */}
      <div
        style={{
          padding: "16px",
          backgroundColor: "#f5f5f5",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <h3 style={{ marginTop: 0 }}>Controls</h3>

        <div style={{ marginBottom: "12px" }}>
          <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontWeight: "bold" }}>Selection Mode:</span>
            <select
              value={selectionMode}
              onChange={(e) =>
                setSelectionMode(e.target.value as "multi" | "single")
              }
              style={{ padding: "4px 8px" }}
            >
              <option value="multi">Multi</option>
              <option value="single">Single</option>
            </select>
          </label>
        </div>

        {selectionMode === "multi" && (
          <div>
            <label
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <input
                type="checkbox"
                checked={allSelectedStatus.checked}
                ref={(el) => {
                  if (el) el.indeterminate = allSelectedStatus.indeterminate
                }}
                onChange={(e) => handleSelectAll(e.target.checked)}
              />
              <strong>Select All</strong>
            </label>
          </div>
        )}
      </div>

      {/* Status Display */}
      <div
        style={{
          padding: "16px",
          backgroundColor: "#e3f2fd",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <h3 style={{ marginTop: 0 }}>Selection Status</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px",
          }}
        >
          <div>
            <strong>Selected Count:</strong> {allSelectedStatus.selectedCount}
          </div>
          <div>
            <strong>Unselected Count:</strong>{" "}
            {allSelectedStatus.unselectedCount}
          </div>
          <div>
            <strong>Is All Selected:</strong> {isAllSelected ? "Yes" : "No"}
          </div>
          <div>
            <strong>Is Partially Selected:</strong>{" "}
            {isPartiallySelected ? "Yes" : "No"}
          </div>
          <div>
            <strong>All Selected Check:</strong>{" "}
            {allSelectedStatus.checked ? "Yes" : "No"}
          </div>
          <div>
            <strong>Indeterminate:</strong>{" "}
            {allSelectedStatus.indeterminate ? "Yes" : "No"}
          </div>
        </div>
      </div>

      {/* Selected Items Details */}
      <div
        style={{
          padding: "16px",
          backgroundColor: "#f5f5f5",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <h3 style={{ marginTop: 0 }}>Selected Items</h3>
        {selectedItems.size === 0 ? (
          <p style={{ color: "#666" }}>No items selected</p>
        ) : (
          <div>
            <p>
              <strong>Selected IDs:</strong>{" "}
              {Array.from(selectedItems.keys()).join(", ")}
            </p>
            <details>
              <summary style={{ cursor: "pointer", marginBottom: "8px" }}>
                View Full Selection Status
              </summary>
              <pre
                style={{
                  backgroundColor: "#fff",
                  padding: "12px",
                  borderRadius: "4px",
                  overflow: "auto",
                  fontSize: "12px",
                }}
              >
                {JSON.stringify(selectionStatus, null, 2)}
              </pre>
            </details>
          </div>
        )}
      </div>

      {/* Data Items */}
      <div>
        <h3>Items ({data.records.length})</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {data.records.map((user) => {
            const isSelected = selectedItems.has(user.id)
            return (
              <div
                key={user.id}
                style={{
                  padding: "12px",
                  border: "2px solid",
                  borderColor: isSelected ? "#1976d2" : "#ddd",
                  borderRadius: "8px",
                  backgroundColor: isSelected ? "#e3f2fd" : "#fff",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  transition: "all 0.2s",
                }}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={(e) =>
                    handleSelectItemChange(user.id, e.target.checked)
                  }
                  style={{ width: "18px", height: "18px", cursor: "pointer" }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: "bold", marginBottom: "4px" }}>
                    {user.name}
                  </div>
                  <div style={{ fontSize: "14px", color: "#666" }}>
                    {user.email} • {user.department}
                  </div>
                </div>
                <div
                  style={{
                    padding: "4px 12px",
                    borderRadius: "12px",
                    backgroundColor: isSelected ? "#1976d2" : "#e0e0e0",
                    color: isSelected ? "#fff" : "#666",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  ID: {user.id}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// Grouped Data Playground
const GroupedPlayground = () => {
  const dataSource = useDataSource(
    useMemo(
      () =>
        createDataSourceDefinition({
          filters: {},
          selectable: (user: MockUser) => user.id,
          grouping: {
            groupBy: {
              department: {
                name: "Department",
                label: (groupId: string) => groupId,
              },
            },
          },
          currentGrouping: { field: "department", order: "asc" },
          dataAdapter: createMockAdapter(),
        }),
      []
    )
  )

  const { data, paginationInfo } = useData(dataSource)

  const {
    selectedItems,
    handleSelectItemChange,
    handleSelectGroupChange,
    groupAllSelectedStatus,
    allSelectedStatus,
  } = useSelectable({
    data,
    paginationInfo,
    source: dataSource,
    onSelectItems: (status) => {
      console.log("Selection changed:", status)
    },
  })

  if (data.type !== "grouped") {
    return <div>Loading...</div>
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>useSelectable Playground (Grouped)</h2>

      {/* Status */}
      <div
        style={{
          padding: "16px",
          backgroundColor: "#e3f2fd",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <h3 style={{ marginTop: 0 }}>Selection Status</h3>
        <p>
          <strong>Total Selected:</strong> {allSelectedStatus.selectedCount}
        </p>
      </div>

      {/* Groups */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {data.groups.map((group) => {
          const groupStatus = groupAllSelectedStatus[group.key]

          return (
            <div
              key={group.key}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              {/* Group Header */}
              <div
                style={{
                  padding: "12px 16px",
                  backgroundColor: "#f5f5f5",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <input
                  type="checkbox"
                  checked={groupStatus?.checked || false}
                  ref={(el) => {
                    if (el)
                      el.indeterminate = groupStatus?.indeterminate || false
                  }}
                  onChange={(e) =>
                    handleSelectGroupChange(group.key, e.target.checked)
                  }
                  style={{ width: "18px", height: "18px", cursor: "pointer" }}
                />
                <strong>
                  {typeof group.label === "string" ? group.label : "Loading..."}
                </strong>
                <span style={{ marginLeft: "auto", color: "#666" }}>
                  {groupStatus?.selectedCount || 0} / {group.records.length}{" "}
                  selected
                </span>
              </div>

              {/* Group Items */}
              <div style={{ padding: "12px" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  {group.records.map((user) => {
                    const isSelected = selectedItems.has(user.id)
                    return (
                      <div
                        key={user.id}
                        style={{
                          padding: "8px 12px",
                          backgroundColor: isSelected ? "#e3f2fd" : "#fafafa",
                          borderRadius: "4px",
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={(e) =>
                            handleSelectItemChange(user.id, e.target.checked)
                          }
                          style={{
                            width: "16px",
                            height: "16px",
                            cursor: "pointer",
                          }}
                        />
                        <div style={{ flex: 1 }}>
                          <div style={{ fontWeight: "500" }}>{user.name}</div>
                          <div style={{ fontSize: "12px", color: "#666" }}>
                            {user.email}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const Basic: Story = {
  render: () => <BasicPlayground />,
  parameters: {
    docs: {
      description: {
        story:
          "Basic playground to experiment with useSelectable hook features.",
      },
    },
  },
}

export const Grouped: Story = {
  render: () => <GroupedPlayground />,
  parameters: {
    docs: {
      description: {
        story: "Playground with grouped data to test group selection.",
      },
    },
  },
}
