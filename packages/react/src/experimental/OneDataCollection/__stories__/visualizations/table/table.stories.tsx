import { Meta, StoryObj } from "@storybook/react-vite"
import { ExampleComponent, getMockVisualizations } from "../../mockData"

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
  render: () => (
    <ExampleComponent
      frozenColumns={2}
      tableAllowColumnReordering
      tableAllowColumnHiding
    />
  ),
}

export const TableColumnOrdering: Story = {
  render: () => (
    <ExampleComponent frozenColumns={2} tableAllowColumnReordering />
  ),
}

export const TableColumnHidden: Story = {
  render: () => <ExampleComponent frozenColumns={2} tableAllowColumnHiding />,
}
