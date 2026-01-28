import type { Meta, StoryObj } from "@storybook/react-vite"

import { ToggleGroup, ToggleGroupItem } from "../../../../ui/toggleGroup"

const children: React.ReactNode = (
  <>
    <ToggleGroupItem value="1">One</ToggleGroupItem>
    <ToggleGroupItem value="2">Two</ToggleGroupItem>
    <ToggleGroupItem value="3">Three</ToggleGroupItem>
  </>
)

const meta = {
  title: "ToggleGroup",
  component: ToggleGroup,
  tags: ["autodocs", "experimental"],
  args: {
    type: "multiple",
    children,
  },
} satisfies Meta<typeof ToggleGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Single: Story = {
  args: {
    type: "single",
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const Prefilled: Story = {
  args: {
    disabled: true,
    value: ["1", "2"],
  },
}
