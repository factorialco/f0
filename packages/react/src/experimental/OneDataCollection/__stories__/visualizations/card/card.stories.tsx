import { Meta, StoryObj } from "@storybook/react-vite"
import { ExampleComponent, getMockVisualizations } from "../../mockData"

const meta = {
  title: "Data Collection/Visualizations/Card",
  parameters: {
    layout: "padded",
    a11y: {
      skipCi: true,
    },
    docs: {
      description: {
        component:
          "[TODO] Card view specific visualization. Displays a card of items with a checkbox column and a list of properties.",
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const BasicCardVisualization: Story = {
  render: () => {
    const mockVisualizations = getMockVisualizations()
    return <ExampleComponent visualizations={[mockVisualizations.card]} />
  },
}
