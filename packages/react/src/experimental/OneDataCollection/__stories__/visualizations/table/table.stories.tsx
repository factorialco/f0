import { Meta, StoryObj } from "@storybook/react-vite"
import { ExampleComponent, getMockVisualizations } from "../../mockData"
import { useState, useMemo } from "react"
import { F0Button } from "@/components/F0Button"

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
  render: () => {
    const mockVisualizations = getMockVisualizations({
      table: {
        allowColumnReordering: true,
      },
    })
    return (
      <ExampleComponent
        frozenColumns={2}
        tableAllowColumnReordering
        visualizations={[mockVisualizations.table]}
        id="table-column-ordering/v1"
      />
    )
  },
}

export const TableColumnHidden: Story = {
  render: () => {
    const mockVisualizations = getMockVisualizations({
      table: {
        allowColumnHiding: true,
      },
    })
    return (
      <ExampleComponent
        frozenColumns={2}
        tableAllowColumnHiding
        visualizations={[mockVisualizations.table]}
        id="table-column-hidden/v1"
      />
    )
  },
}

export const TableColumnOrderingAndHiddenWithColumnsChanges: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates how the table columns can be changed after the initial render, the order and hidden state of the columns change as well.",
      },
    },
  },
  render: () => {
    const [index, setIndex] = useState<number>(0)

    const mockVisualizations = useMemo(
      () =>
        getMockVisualizations({
          table: {
            noSorting: true,
            allowColumnHiding: true,
            allowColumnReordering: true,
          },
        }),
      []
    )

    console.log(mockVisualizations.table)

    const tableDef: ReturnType<typeof getMockVisualizations>["table"] = {
      ...mockVisualizations.table,
    }

    const columns = useMemo(() => {
      return [
        ...((tableDef as any)["options"]?.["columns"]?.slice(0, index) ?? []),
      ]
    }, [index])

    return (
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <F0Button
            onClick={() => setIndex(index + 1)}
            label="Add Column"
          ></F0Button>
          <F0Button
            onClick={() => setIndex(index - 1)}
            label="Remove Column"
            disabled={index === 0}
          ></F0Button>
        </div>
        <ExampleComponent
          frozenColumns={2}
          tableAllowColumnReordering
          tableAllowColumnHiding
          noSorting
          visualizations={[
            {
              ...mockVisualizations.table,
              type: "table",
              options: {
                ...(mockVisualizations.table as any)["options"],
                columns: columns,
              },
            },
          ]}
          id="employees/v1"
        />
      </div>
    )
  },
}
