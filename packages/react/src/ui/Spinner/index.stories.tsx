import type { Meta, StoryObj } from "@storybook/react-vite"

import { Spinner } from "./index"

const meta = {
  component: Spinner,
  title: "Spinner",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner size="small" />
      <Spinner size="medium" />
      <Spinner size="large" />
    </div>
  ),
}
