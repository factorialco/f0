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

// Examples with multiple visualizations
export const TableFrozenCols: Story = {
  render: () => <ExampleComponent frozenColumns={2} />,
}

// Examples with multiple visualizations
export const TableColumnOrdering: Story = {
  render: () => (
    <ExampleComponent frozenColumns={2} mockTableColOrderingAndHidding />
  ),
}
