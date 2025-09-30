import type { Meta, StoryObj } from "@storybook/react-vite"

import { Placeholder } from "@/icons/app"
import { ComponentProps } from "react"
import { Trigger } from "./index"

const meta: Meta = {
  component: Trigger,
  title: "EntitySelect/Trigger",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "experimental"],
  decorators: [
    (Story) => (
      <div className="w-full min-w-72 max-w-96">
        <Story />
      </div>
    ),
  ],
  args: {
    placeholder: "Select employees...",
    selected: "employees selected",
    selectedEntities: [],
    label: "Role",
    labelIcon: Placeholder,
    icon: undefined, // Search,
    error: "", // "Something went wrong",
    status: {
      // If there is error or hint, status will be overwritten
      type: "warning",
      message: "This is a warning",
    },
    hint: "", //"This is a hint", // If there is a hint, status will be overwritten
    hideLabel: false,
    maxLength: undefined,
    hiddenAvatar: false,
  } satisfies ComponentProps<typeof Trigger>,
} satisfies Meta<typeof Trigger>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
