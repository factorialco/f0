import type { Meta, StoryObj } from "@storybook/react-vite"

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
