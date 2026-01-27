import type { Meta, StoryObj } from "@storybook/react-vite"

import { ComponentProps } from "react"
import { fn } from "storybook/test"

import { famousEmployees } from "../entity-select-name.factory"
import { mapEntitySelectEntityToSubentity } from "../utils"
import { ListTag } from "./index"

const meta: Meta = {
  component: ListTag,
  title: "EntitySelect/ListTag",
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
    entity: mapEntitySelectEntityToSubentity(famousEmployees[0]),
    onRemove: fn(),
  } satisfies ComponentProps<typeof ListTag>,
} satisfies Meta<typeof ListTag>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
