import { withSnapshot } from "@/lib/storybook-utils/parameters"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { getBaseAvatarArgTypes } from "../../internal/BaseAvatar/__stories__/utils"
import { alertAvatarSizes, alertAvatarTypes, F0AvatarAlert } from "../F0AvatarAlert"

const meta: Meta<typeof F0AvatarAlert> = {
  component: F0AvatarAlert,
  title: "Avatars/AvatarAlert",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: ["An avatar component that displays an alert icon and color based on the type."]
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
}

export default meta
type Story = StoryObj<typeof F0AvatarAlert>

const SIZES = alertAvatarSizes
const TYPES = alertAvatarTypes
export const Default: Story = {
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
