import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { ChevronToggle } from "../ChevronToggle"

const meta = {
  title: "Components/ChevronToggle",
  component: ChevronToggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "internal"],
} satisfies Meta<typeof ChevronToggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    open: false,
  },
}

export const Open: Story = {
  args: {
    open: true,
  },
}

export const Interactive: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div className="flex flex-col items-center gap-4">
        <ChevronToggle
          open={isOpen}
          className="cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
        <button
          className="bg-blue-500 text-white rounded px-4 py-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          Toggle Chevron
        </button>
      </div>
    )
  },
}

export const WithCustomSize: Story = {
  args: {
    open: false,
    className: "h-6 w-6",
  },
}
