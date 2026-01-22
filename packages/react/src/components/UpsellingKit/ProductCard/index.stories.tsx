import type { Meta, StoryObj } from "@storybook/react-vite"

import { ComponentProps } from "react"

import { ProductCard } from "./index"

const meta: Meta<typeof ProductCard> = {
  title: "UpsellingKit/ProductCard",
  component: ProductCard,
  tags: ["autodocs", "no-sidebar"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [(Story) => <Story />],
}

export default meta
type Story = StoryObj<ComponentProps<typeof ProductCard>>

export const Default: Story = {
  args: {
    isVisible: true,
    title: "Benefits",
    description:
      "Improve your team’s salary without impacting your budget through flexible compensation.",
    onClick: () => {
      alert("onClick")
    },
    onClose: () => {
      alert("onClose")
    },
    module: "kudos",
    dismissable: false,
  },
  tags: ["autodocs", "experimental"],
}

export const Dismissable: Story = {
  args: {
    ...Default.args,
    dismissable: true,
  },
}
