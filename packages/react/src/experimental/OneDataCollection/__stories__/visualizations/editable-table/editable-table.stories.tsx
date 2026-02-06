import { Meta, StoryObj } from "@storybook/react-vite"

import { ExampleComponent, getMockVisualizations } from "../../mockData"

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

export const BasicEditableTable: Story = {
  render: () => {
    const mockVisualizations = getMockVisualizations()
    return (
      <ExampleComponent
        visualizations={[mockVisualizations.editableTable]}
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
    return (
      <ExampleComponent
        tableAllowColumnReordering
        tableAllowColumnHiding
        visualizations={[mockVisualizations.editableTable]}
        id="editable-table-settings/v1"
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
    return (
      <ExampleComponent
        tableAllowColumnReordering
        tableAllowColumnHiding
        visualizations={[
          mockVisualizations.table,
          mockVisualizations.editableTable,
        ]}
        id="table-and-editable/v1"
      />
    )
  },
}
