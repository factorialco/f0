import { withSnapshot } from "@/lib/storybook-utils/parameters"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { avatarSizes } from "../../internal/BaseAvatar"
import { getBaseAvatarArgTypes } from "../../internal/BaseAvatar/__stories__/utils"
import { F0AvatarFlag } from "../F0AvatarFlag.tsx"

const meta: Meta<typeof F0AvatarFlag> = {
  component: F0AvatarFlag,
  title: "Avatars/AvatarFlag",
  tags: ["autodocs"],
  argTypes: {
    ...getBaseAvatarArgTypes([
      "size",
      "aria-label",
      "aria-labelledby",
      "badge",
    ]),
    flag: {
      control: "text",
      description: "The flag name to display",
    },
  },
  parameters: {
    docs: {
      description: {
        component: ["A flag avatar component."]
          .map((line) => `<p>${line}</p>`)
          .join(""),
      },
    },
  },
  args: {
    size: "md",
    "aria-label": "Factorial avatar",
  },
}

export default meta

type Story = StoryObj<typeof F0AvatarFlag>

export const Default: Story = {}

export const WithImage: Story = {
  args: {
    flag: "🇪🇸",
  },
}

export const WithModuleBadge: Story = {
  args: {
    flag: "🇪🇸",
    badge: {
      type: "module",
      module: "inbox",
    },
  },
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex w-fit flex-col gap-2">
      <h3 className="text-lg font-semibold">All Flag Avatars</h3>

      <section>
        <h4 className="text-lg font-semibold">Without Image</h4>
        <div className="flex flex-row gap-2">
          {avatarSizes.map((size) => (
            <F0AvatarFlag key={size} size={size} />
          ))}
        </div>
      </section>
      <section>
        <h4 className="text-lg font-semibold">With Image</h4>
        <div className="flex flex-row gap-2">
          {avatarSizes.map((size) => (
            <F0AvatarFlag key={size} size={size} flag={`🇪🇸`} />
          ))}
        </div>
      </section>
      <section>
        <h4 className="text-lg font-semibold">With Module Badge</h4>
        <div className="flex flex-row gap-2">
          {avatarSizes.map((size) => (
            <F0AvatarFlag
              key={size}
              size={size}
              flag={`🇪🇸`}
              badge={{ type: "module", module: "inbox" }}
            />
          ))}
        </div>
      </section>
    </div>
  ),
}
