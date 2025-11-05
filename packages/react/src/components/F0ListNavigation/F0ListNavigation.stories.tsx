import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { F0ListNavigation } from "./F0ListNavigation"

const meta = {
  title: "ListNavigation",
  component: F0ListNavigation,
  parameters: {
    docs: {
      description: {
        component: [
          "The `F0ListNavigation` component allows the user to select an option frim a given list",
          "The component also allows you navigation arrows to allow user to navigate to the next or previous item in the list.",
        ]
          .map((text) => `<p>${text}.</p>`)
          .join(""),
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
    value: "engineering",
    onChange: () => {},
    options: [
      { label: "Engineering", value: "engineering" },
      { label: "Sales", value: "sales" },
      { label: "Marketing", value: "marketing" },
      { label: "Finance", value: "finance" },
    ],
  },
}
