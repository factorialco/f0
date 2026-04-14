import { Meta, StoryObj } from "@storybook/react-vite"

import { ExampleComponent } from "../mockData"

const meta = {
  title: "Data Collection/Temporary or Deprecated features",
  component: ExampleComponent,
  tags: ["autodocs", "experimental"],
  decorators: [
    (Story) => (
      <div style={{ border: "1px red red" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ExampleComponent>

export default meta
type Story = StoryObj<typeof meta>

export const TmpFullWidth: Story = {
  parameters: {
    docs: {
      source: {
        code: `
            <OneDataCollection tmpFullWidth={true} .../>
            `,
      },
    },
  },
  render: () => (
    <ExampleComponent
      hideFilters={true}
      tmpFullWidth={true}
      totalItemSummary={(totalItems) =>
        `Total items in the datacollection: ${totalItems}`
      }
    />
  ),
}
