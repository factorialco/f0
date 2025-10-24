import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { F0ListNavigation } from "./F0ListNavigation"

const meta = {
  title: "ListNavigation",
  component: F0ListNavigation,
  parameters: {
    docs: {
      description: {
        component: ["TODO"].map((text) => `<p>${text}.</p>`).join(""),
      },
    },
  },
  tags: ["autodocs", "experimental"],
  render(args) {
    const [value, setValue] = useState<string>(args.value)
    return (
      <F0ListNavigation
        {...args}
        value={value}
        onChange={(newValue) => {
          args?.onChange(newValue)
          setValue(newValue)
        }}
      />
    )
  },
} satisfies Meta<typeof F0ListNavigation>

export default meta
type Story = StoryObj<typeof meta>

export const Simple: Story = {
  args: {
    value: "cycle-1",
    onChange: () => {},
    options: [
      { label: "10/02/2025 → 17/02/2025", value: "cycle-1" },
      { label: "10/02/2025 → 17/02/2025", value: "cycle-2" },
      { label: "17/02/2025 → 24/02/2025", value: "cycle-3" },
      { label: "24/02/2025 → 03/03/2025", value: "cycle-4" },
    ],
  },
}
