import type { Meta, StoryObj } from "@storybook/react-vite"

import { Check } from "@/icons/app"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { mockImage } from "@/testing/mocks/images"
import { mockModuleId } from "@/testing/mocks/modules"

import { avatarSizes } from "../../internal/BaseAvatar"
import { getBaseAvatarArgTypes } from "../../internal/BaseAvatar/__stories__/utils"
import { F0AvatarTeam } from "../F0AvatarTeam"

const meta: Meta<typeof F0AvatarTeam> = {
  component: F0AvatarTeam,
  title: "Avatars/AvatarTeam",
  tags: ["autodocs"],
  argTypes: {
    ...getBaseAvatarArgTypes([
      "size",
      "aria-label",
      "aria-labelledby",
      "badge",
    ]),
  },
  args: {
    name: "Design",
    size: "md",
  },
}

export default meta

type Story = StoryObj<typeof F0AvatarTeam>

export const Default: Story = {}

export const WithImage: Story = {
  args: {
    src: "/avatars/team01.jpg",
  },
}

export const WithBadge: Story = {
  args: {
    badge: {
      type: "positive",
      icon: Check,
    },
  },
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex w-fit flex-col gap-2">
      <h3 className="text-lg font-semibold">All Company Avatars</h3>

      <section>
        <h4 className="text-lg font-semibold">Without Image</h4>
        <div className="flex flex-row gap-2">
          {avatarSizes.map((size) => (
            <F0AvatarTeam key={size} size={size} name="Engineering" />
          ))}
        </div>
      </section>
      <section>
        <h4 className="text-lg font-semibold">With Image</h4>
        <div className="flex flex-row gap-2">
          {avatarSizes.map((size, index) => (
            <F0AvatarTeam
              key={size}
              size={size}
              name="Engineering"
              src={mockImage("team", index)}
            />
          ))}
        </div>
      </section>
      <section>
        <h4 className="text-lg font-semibold">With Module Badge</h4>
        <div className="flex flex-row gap-2">
          {avatarSizes.map((size, index) => (
            <F0AvatarTeam
              key={size}
              size={size}
              name="Engineering"
              src={mockImage("team", index)}
              badge={{ type: "module", module: mockModuleId(index) }}
            />
          ))}
        </div>
      </section>
    </div>
  ),
}
