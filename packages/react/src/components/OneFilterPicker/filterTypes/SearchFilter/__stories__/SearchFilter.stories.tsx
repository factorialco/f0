import type { Meta, StoryObj } from "@storybook/react-vite"

import { SearchFilter } from "../SearchFilter"

const meta = {
  title: "FilterPicker/Filters/SearchFilter",
  component: SearchFilter,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="border-f1-border-primary w-[300px] rounded-md border p-4">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SearchFilter>

export default meta

type Story = StoryObj<typeof SearchFilter>

// Static options example
export const Default: Story = {
  args: {
    schema: {
      label: "Search",
    },
    onChange: (value) => {
      console.log("onChange", value)
    },
  },
}

export const WithStrictToggle: Story = {
  args: {
    schema: {
      label: "Search",
      options: {
        strictToggle: true,
      },
    },
    onChange: (value) => {
      console.log("onChange", value)
    },
  },
}
