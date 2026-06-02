import type { Meta, StoryObj } from "@storybook/react-vite"

import { tagDotColors } from "@/components/tags/F0TagDot/types"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { avatarSizes } from "../../internal/BaseAvatar"
import { getBaseAvatarArgTypes } from "../../internal/BaseAvatar/__stories__/utils"
import { F0AvatarColor } from "../F0AvatarColor"

const meta: Meta<typeof F0AvatarColor> = {
  component: F0AvatarColor,
  title: "Avatars/AvatarColor",
  tags: ["autodocs"],
  argTypes: {
    ...getBaseAvatarArgTypes(["size", "aria-label", "aria-labelledby"]),
    size: {
      control: "select",
      options: avatarSizes,
      description: "The size of the avatar",
    },
    color: {
      control: "select",
      options: tagDotColors,
      description: "A named design-token color",
    },
    customColor: {
      control: "color",
      description:
        "An arbitrary CSS color (e.g. a hex). Use instead of `color`.",
    },
  },
  args: {
    customColor: "#FF5733",
    size: "md",
  },
  parameters: {
    docs: {
      description: {
        component: [
          "An avatar that displays a solid color swatch, for entities whose identity is a color (e.g. a leave type).",
          "Pass a named design token via `color`, or an arbitrary CSS color via `customColor`.",
        ]
          .map((line) => `<p>${line}</p>`)
          .join(""),
      },
    },
    a11y: {
      config: {
        rules: [
          {
            id: "color-contrast",
            enabled: false,
          },
        ],
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof F0AvatarColor>

export const Default: Story = {}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex w-fit flex-col gap-2">
      <div className="flex flex-row items-center gap-2">
        <h4 className="text-lg font-semibold">Custom color (hex)</h4>
        {avatarSizes.map((size) => (
          <F0AvatarColor key={size} size={size} customColor="#FF5733" />
        ))}
      </div>
      <div className="flex flex-row items-center gap-2">
        <h4 className="text-lg font-semibold">Named token</h4>
        {avatarSizes.map((size) => (
          <F0AvatarColor key={size} size={size} color="viridian" />
        ))}
      </div>
    </div>
  ),
}
