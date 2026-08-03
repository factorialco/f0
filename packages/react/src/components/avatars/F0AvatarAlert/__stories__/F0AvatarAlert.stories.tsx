import type { Meta, StoryObj } from "@storybook/react-vite"

import { expect, within } from "storybook/test"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { getBaseAvatarArgTypes } from "../../internal/BaseAvatar/__stories__/utils"
import {
  alertAvatarSizes,
  alertAvatarTypes,
  F0AvatarAlert,
} from "../F0AvatarAlert"

const meta = {
  component: F0AvatarAlert,
  title: "Avatars/AvatarAlert",
  tags: ["stable", "!autodocs"],
  parameters: {
    a11y: { test: "error" },
    docs: {
      description: {
        component: [
          "An avatar component that displays an alert icon and color based on the type.",
        ]
          .map((line) => `<p>${line}</p>`)
          .join(""),
      },
    },
  },
  argTypes: {
    ...getBaseAvatarArgTypes(["size", "aria-label", "aria-labelledby"]),
    type: {
      control: "select",
      options: alertAvatarTypes,
      description: "The type of the avatar",
      table: {
        type: {
          summary: "AlertAvatarType",
        },
      },
    },
  },
} satisfies Meta<typeof F0AvatarAlert>

export default meta
type Story = StoryObj<typeof F0AvatarAlert>

const SIZES = alertAvatarSizes
const TYPES = alertAvatarTypes
export const Default: Story = {
  args: { type: "info", size: "lg" },
  play: async ({ canvasElement }) => {
    const alert = within(canvasElement).getByRole("alert")
    // `size: "lg"` is a 40px square — the real contract of the size variant.
    await expect(alert).toHaveClass("h-10", "w-10")
    await expect(alert.querySelector("svg")).toBeInTheDocument()
  },
}

/**
 * Each type maps to a fixed icon and semantic color.
 */
export const Types: Story = {
  render: () => (
    <div className="flex w-fit flex-row gap-2">
      {TYPES.map((type) => (
        <F0AvatarAlert key={type} type={type} size="lg" />
      ))}
    </div>
  ),
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex w-fit flex-col gap-2">
      {SIZES.map((size) => (
        <div key={size} className="flex flex-row gap-2">
          {TYPES.map((type) => (
            <F0AvatarAlert key={`${size}-${type}`} size={size} type={type} />
          ))}
        </div>
      ))}
    </div>
  ),
}
