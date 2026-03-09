import { Meta, StoryObj } from "@storybook/react-vite"
import { format } from "date-fns"
import { useMemo, useRef, useState } from "react"
import { action } from "storybook/actions"

import { createDataSourceDefinition, RecordType } from "@/hooks/datasource"
import { ROLES_MOCK } from "@/mocks"

import {
  createDataAdapter,
  ExampleComponent,
  generateMockUsers,
  getMockVisualizations,
  type MockUser,
} from "../../mockData"

const meta = {
  title: "Data Collection/Visualizations/Editable Table",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Editable table view. Same as Table but with independent column order and visibility state (stored under 'editableTable' key).",
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

function useEditableTableData(
  initialItems: MockUser[] = generateMockUsers(10),
  options?: { perPage?: number }
) {
  const perPage = options?.perPage ?? 10
  const [items, setItems] = useState<MockUser[]>(initialItems)
  const itemsRef = useRef(items)
  itemsRef.current = items

  const onCellChange = async (updatedItem: MockUser) => {
    action("onCellChange")(updatedItem)
    setItems((prev) =>
      prev.map((i) => (i.id === updatedItem.id ? updatedItem : i))
    )
  }

  const dataAdapter = useMemo(() => {
    const adapter = createDataAdapter({
      data: items,
      paginationType: "pages",
      perPage,
    })
    adapter.fetchData = (fetchOptions: unknown) => {
      const currentAdapter = createDataAdapter({
        data: itemsRef.current,
        paginationType: "pages",
        perPage,
      })
      return currentAdapter.fetchData(fetchOptions as never)
    }
    return adapter
  }, [items, perPage])

  return { items, setItems, dataAdapter, onCellChange }
}

export const BasicEditableTable: Story = {
  render: () => {
    const mockVisualizations = getMockVisualizations({
      table: {
        nestedRecords: true,
      },
    })
    const { dataAdapter, onCellChange } = useEditableTableData()
    return (
      <ExampleComponent
        visualizations={[
          {
            type: "editableTable" as const,
            options: {
              ...(
                mockVisualizations.editableTable as Extract<
                  typeof mockVisualizations.editableTable,
                  { type: "editableTable" }
                >
              ).options,
              onCellChange,
            },
          },
        ]}
        dataAdapter={dataAdapter}
        id="editable-table-basic/v1"
      />
    )
  },
}

export const EditableTableWithColumnSettings: Story = {
  render: () => {
    const mockVisualizations = getMockVisualizations({
      table: {
        allowColumnHiding: true,
        allowColumnReordering: true,
      },
    })
    const { dataAdapter, onCellChange } = useEditableTableData()
    return (
      <ExampleComponent
        tableAllowColumnReordering
        tableAllowColumnHiding
        visualizations={[
          {
            type: "editableTable" as const,
            options: {
              ...(
                mockVisualizations.editableTable as Extract<
                  typeof mockVisualizations.editableTable,
                  { type: "editableTable" }
                >
              ).options,
              onCellChange,
            },
          },
        ]}
        dataAdapter={dataAdapter}
        id="editable-table-settings/v1"
      />
    )
  },
}

export const EditableTableWithErrors: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Editable table where every cell change rejects the promise, showing an error state on the edited cell. Errors can also be returned as a Record<string, string> mapping column IDs to messages.",
      },
    },
  },
  render: () => {
    const mockVisualizations = getMockVisualizations()
    const { dataAdapter } = useEditableTableData()

    const onCellChange = async (updatedItem: MockUser) => {
      action("onCellChange")(updatedItem)
      // Simulate an API call that always fails
      await new Promise((resolve) => setTimeout(resolve, 300))
      throw new Error("Invalid value")
    }

    return (
      <ExampleComponent
        visualizations={[
          {
            type: "editableTable" as const,
            options: {
              ...(
                mockVisualizations.editableTable as Extract<
                  typeof mockVisualizations.editableTable,
                  { type: "editableTable" }
                >
              ).options,
              onCellChange,
            },
          },
        ]}
        dataAdapter={dataAdapter}
        id="editable-table-errors/v1"
      />
    )
  },
}

export const EditableTableWithEditableCallback: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Editable table where the `editable` callback controls per-row editability. Only rows where the role is 'Designer' have editable Email and Role columns.",
      },
    },
  },
  render: () => {
    const mockVisualizations = getMockVisualizations()
    const { dataAdapter, onCellChange } = useEditableTableData()

    const baseOptions = (
      mockVisualizations.editableTable as Extract<
        typeof mockVisualizations.editableTable,
        { type: "editableTable" }
      >
    ).options

    return (
      <ExampleComponent
        visualizations={[
          {
            type: "editableTable" as const,
            options: {
              ...baseOptions,
              columns: baseOptions.columns.map((col) => {
                if (
                  col.editType !== undefined &&
                  (col.id === "email" || col.id === "role")
                ) {
                  return {
                    ...col,
                    editType: (item: MockUser) =>
                      item.role === "Designer" ? "text" : "display-only",
                  }
                }
                return col
              }),
              onCellChange,
            },
          },
        ]}
        dataAdapter={dataAdapter}
        id="editable-table-editable-callback/v1"
      />
    )
  },
}

export const EditableTableWithColumnReordering: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Editable table with column reordering enabled. Users can drag columns to rearrange them via the settings panel.",
      },
    },
  },
  render: () => {
    const mockVisualizations = getMockVisualizations({
      table: {
        allowColumnReordering: true,
      },
    })
    const { dataAdapter, onCellChange } = useEditableTableData()

    return (
      <ExampleComponent
        tableAllowColumnReordering
        visualizations={[
          {
            type: "editableTable" as const,
            options: {
              ...(
                mockVisualizations.editableTable as Extract<
                  typeof mockVisualizations.editableTable,
                  { type: "editableTable" }
                >
              ).options,
              onCellChange,
            },
          },
        ]}
        dataAdapter={dataAdapter}
        id="editable-table-column-reordering/v1"
      />
    )
  },
}

export const EditableTableWithColumnHiding: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Editable table with column hiding enabled. Users can show or hide columns via the settings panel. Columns with `noHiding` cannot be hidden.",
      },
    },
  },
  render: () => {
    const mockVisualizations = getMockVisualizations({
      table: {
        allowColumnHiding: true,
      },
    })
    const { dataAdapter, onCellChange } = useEditableTableData()

    return (
      <ExampleComponent
        tableAllowColumnHiding
        visualizations={[
          {
            type: "editableTable" as const,
            options: {
              ...(
                mockVisualizations.editableTable as Extract<
                  typeof mockVisualizations.editableTable,
                  { type: "editableTable" }
                >
              ).options,
              onCellChange,
            },
          },
        ]}
        dataAdapter={dataAdapter}
        id="editable-table-column-hiding/v1"
      />
    )
  },
}

export const EditableTableWithFrozenColumns: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Editable table with the first column frozen on the left. Scroll horizontally to see the frozen column stay in place.",
      },
    },
  },
  render: () => {
    const mockVisualizations = getMockVisualizations()
    const { dataAdapter, onCellChange } = useEditableTableData()

    return (
      <ExampleComponent
        visualizations={[
          {
            type: "editableTable" as const,
            options: {
              ...(
                mockVisualizations.editableTable as Extract<
                  typeof mockVisualizations.editableTable,
                  { type: "editableTable" }
                >
              ).options,
              frozenColumns: 1,
              onCellChange,
            },
          },
        ]}
        dataAdapter={dataAdapter}
        id="editable-table-frozen-columns/v1"
      />
    )
  },
}

export const EditableTableWithNestedRecords: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Editable table with nested (expandable) records. Parent rows can be expanded to reveal child rows. Editable cells work inside both parent and child rows.",
      },
    },
  },
  render: () => {
    const mockVisualizations = getMockVisualizations({
      table: {
        noSorting: true,
        nestedRecords: true,
        applyLongText: false,
      },
    })

    const onCellChange = async (updatedItem: MockUser) => {
      action("onCellChange")(updatedItem)
    }

    return (
      <ExampleComponent
        noSorting
        storage={false}
        visualizations={[
          {
            type: "editableTable" as const,
            options: {
              ...(
                mockVisualizations.editableTable as Extract<
                  typeof mockVisualizations.editableTable,
                  { type: "editableTable" }
                >
              ).options,
              onCellChange,
            },
          },
        ]}
        id="editable-table-nested/v1"
        nestedRecords
      />
    )
  },
}

export const EditableTableWithNestedRecordsDetailed: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Editable table with detailed nested records. Children are displayed aligned with the parent without tree connectors, creating a flatter view.",
      },
    },
  },
  render: () => {
    const mockVisualizations = getMockVisualizations({
      table: {
        noSorting: true,
        nestedRecords: true,
        applyLongText: false,
      },
    })

    const onCellChange = async (updatedItem: MockUser) => {
      action("onCellChange")(updatedItem)
    }

    return (
      <ExampleComponent
        noSorting
        storage={false}
        visualizations={[
          {
            type: "editableTable" as const,
            options: {
              ...(
                mockVisualizations.editableTable as Extract<
                  typeof mockVisualizations.editableTable,
                  { type: "editableTable" }
                >
              ).options,
              onCellChange,
            },
          },
        ]}
        id="editable-table-nested-detailed/v1"
        nestedRecords
        nestedRecordsType="detailed"
      />
    )
  },
}

export const EditableTableWithSelectableNestedRecordsDetailed: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Editable table with detailed nested records. Children are displayed aligned with the parent without tree connectors, creating a flatter view.",
      },
    },
  },
  render: () => {
    const mockVisualizations = getMockVisualizations({
      table: {
        noSorting: true,
        nestedRecords: true,
        applyLongText: false,
      },
    })

    const onCellChange = async (updatedItem: MockUser) => {
      action("onCellChange")(updatedItem)
    }

    return (
      <ExampleComponent
        noSorting
        storage={false}
        selectable={() => {
          return ""
        }}
        visualizations={[
          {
            type: "editableTable" as const,
            options: {
              ...(
                mockVisualizations.editableTable as Extract<
                  typeof mockVisualizations.editableTable,
                  { type: "editableTable" }
                >
              ).options,
              onCellChange,
            },
          },
        ]}
        id="editable-table-nested-detailed/v1"
        nestedRecords
        nestedRecordsType="detailed"
      />
    )
  },
}

type RoleRecord = { value: string; label: string }

const roleNonPaginatedSource = createDataSourceDefinition<RoleRecord>({
  dataAdapter: {
    fetchData: async ({ search }) => {
      await new Promise((resolve) => setTimeout(resolve, 150))

      let results = ROLES_MOCK.map((role) => ({ value: role, label: role }))

      if (search) {
        const q = search.toLowerCase()
        results = results.filter((r) => r.label.toLowerCase().includes(q))
      }

      return { records: results }
    },
  },
})

export const EditableTableWithDataSourceSelect: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Editable table where the Role column uses a non-paginated data source for its select options, demonstrating the `source` + `mapOptions` pattern in `selectConfig`.",
      },
    },
  },
  render: () => {
    const mockVisualizations = getMockVisualizations()
    const { dataAdapter, onCellChange } = useEditableTableData()

    const baseOptions = (
      mockVisualizations.editableTable as Extract<
        typeof mockVisualizations.editableTable,
        { type: "editableTable" }
      >
    ).options

    return (
      <ExampleComponent
        visualizations={[
          {
            type: "editableTable" as const,
            options: {
              ...baseOptions,
              columns: baseOptions.columns.map((col) => {
                if (col.id === "role") {
                  return {
                    ...col,
                    editType: () => "select" as const,
                    selectConfig: {
                      source: roleNonPaginatedSource,
                      mapOptions: (record: RecordType) => ({
                        value: String(record.value),
                        label: String(record.label),
                      }),
                      placeholder: "Select role",
                      showSearchBox: true,
                    },
                  }
                }
                return col
              }),
              onCellChange,
            },
          },
        ]}
        dataAdapter={dataAdapter}
        id="editable-table-datasource-select/v1"
      />
    )
  },
}

export const TableAndEditableTable: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Both Table and Editable Table in the same collection. Switch via the settings selector; each view keeps its own column order and visibility.",
      },
    },
  },
  render: () => {
    const mockVisualizations = getMockVisualizations({
      table: {
        allowColumnHiding: true,
        allowColumnReordering: true,
      },
    })
    const { dataAdapter, onCellChange } = useEditableTableData()

    return (
      <ExampleComponent
        tableAllowColumnReordering
        tableAllowColumnHiding
        visualizations={[
          mockVisualizations.table,
          {
            type: "editableTable" as const,
            options: {
              ...(
                mockVisualizations.editableTable as Extract<
                  typeof mockVisualizations.editableTable,
                  { type: "editableTable" }
                >
              ).options,
              onCellChange,
            },
          },
        ]}
        dataAdapter={dataAdapter}
        id="table-and-editable/v1"
      />
    )
  },
}

export const EditableTableWithDateCell: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Editable table with a date cell. Click any date cell to open the date picker and select a new date. Values are stored and emitted as ISO date strings (yyyy-MM-dd).",
      },
    },
  },
  render: () => {
    const { dataAdapter, onCellChange } = useEditableTableData()

    const baseOptions = (
      getMockVisualizations().editableTable as Extract<
        ReturnType<typeof getMockVisualizations>["editableTable"],
        { type: "editableTable" }
      >
    ).options

    return (
      <ExampleComponent
        visualizations={[
          {
            type: "editableTable" as const,
            options: {
              ...baseOptions,
              columns: [
                {
                  label: "Name",
                  render: (item: MockUser) => ({
                    type: "person" as const,
                    value: {
                      firstName: item.name.split(" ")[0],
                      lastName: item.name.split(" ")[1],
                    },
                  }),
                  id: "name",
                },
                {
                  label: "Email",
                  render: (item: MockUser) => item.email,
                  id: "email",
                  editType: () => "text" as const,
                },
                {
                  label: "Start date",
                  id: "startDate",
                  render: (item: MockUser) =>
                    format(item.joinedAt, "yyyy-MM-dd"),
                  editType: () => "date" as const,
                  inputPlaceholder: "DD/MM/YYYY",
                },
              ],
              onCellChange,
            },
          },
        ]}
        dataAdapter={dataAdapter}
        id="editable-table-date/v1"
      />
    )
  },
}
