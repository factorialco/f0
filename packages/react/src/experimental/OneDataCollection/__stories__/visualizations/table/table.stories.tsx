import { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import {
  ExampleComponent,
  getMockVisualizations,
  MockUser,
  sortings,
} from "../../mockData"

const meta = {
  title: "Data Collection/Visualizations/Table",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Table view specific visualization. Displays a table of items with a checkbox column and a list of properties.",
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const BasicListVisualization: Story = {
  render: () => {
    const mockVisualizations = getMockVisualizations()
    return <ExampleComponent visualizations={[mockVisualizations.table]} />
  },
}

export const TableFrozenCols: Story = {
  render: () => <ExampleComponent frozenColumns={2} />,
}

export const TableColumnOrderingAndHidden: Story = {
  render: () => {
    const mockVisualizations = getMockVisualizations({
      table: {
        noSorting: true,
        allowColumnHiding: true,
        allowColumnReordering: true,
      },
    })
    return (
      <ExampleComponent
        frozenColumns={2}
        tableAllowColumnReordering
        tableAllowColumnHiding
        noSorting
        visualizations={[mockVisualizations.table]}
        id="employees/v1"
      />
    )
  },
}

export const TableColumnOrderingAndHiddenNoPersistentStorage: Story = {
  render: () => {
    const mockVisualizations = getMockVisualizations({
      table: {
        noSorting: true,
        allowColumnHiding: true,
        allowColumnReordering: true,
      },
    })
    return (
      <ExampleComponent
        frozenColumns={2}
        tableAllowColumnReordering
        tableAllowColumnHiding
        noSorting
        storage={false}
        visualizations={[mockVisualizations.table]}
        id="employees/v1"
      />
    )
  },
}

export const TableWithNestedRecords: Story = {
  render: () => {
    const mockVisualizations = getMockVisualizations({
      table: {
        noSorting: true,
        allowColumnHiding: true,
        allowColumnReordering: true,
      },
    })

    return (
      <ExampleComponent
        frozenColumns={2}
        tableAllowColumnReordering
        tableAllowColumnHiding
        noSorting
        storage={false}
        visualizations={[mockVisualizations.table]}
        id="employees/v1"
        nestedRecords
      />
    )
  },
}

export const TableColumnOrdering: Story = {
  render: () => (
    <ExampleComponent frozenColumns={2} tableAllowColumnReordering />
  ),
}

export const TableColumnHidden: Story = {
  render: () => <ExampleComponent frozenColumns={2} tableAllowColumnHiding />,
}

export const TableDynamicColumns: Story = {
  render: () => {
    const [count, setCount] = useState(0)
    return (
      <>
        <button onClick={() => setCount((prev) => prev + 1)}>Add column</button>

        <ExampleComponent
          frozenColumns={2}
          tableAllowColumnReordering
          tableAllowColumnHiding
          tableColumns={(_data) => {
            console.log("data", _data)
            return [
              {
                label: "Name",
                render: (item: MockUser) => item.name,
                sorting: "name" as keyof typeof sortings,
                width: 140,
              },
              {
                label: "Email",
                render: (item: MockUser) => item.email,
                sorting: "email" as keyof typeof sortings,
                width: 140,
              },
              {
                label: "Role",
                render: (item: MockUser) => item.role,
                sorting: "role" as keyof typeof sortings,
                width: 140,
              },
              {
                label: "Department",
                render: (item: MockUser) => item.department,
                sorting: "department" as keyof typeof sortings,
                width: 140,
              },
            ].slice(0, count)
          }}
        />
      </>
    )
  },
}
