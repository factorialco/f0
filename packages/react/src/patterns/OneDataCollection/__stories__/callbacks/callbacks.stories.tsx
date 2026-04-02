import { Meta, StoryObj } from "@storybook/react-vite"

import { ExampleComponent } from "../mockData"

const meta = {
  title: "Data Collection/Callbacks",
  component: ExampleComponent,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "<p>The callbacks are functions that are called when the state of the data collection changes.</p>",
      },
    },
  },
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof ExampleComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    onStateChange: (state) => {
      console.log("State changed", "->", state)

      console.log(state.filters?.department)

      alert(JSON.stringify(state, null, 2))
    },
  },
}
