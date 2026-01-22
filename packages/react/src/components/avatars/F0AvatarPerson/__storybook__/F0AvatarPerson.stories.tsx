import type { Meta, StoryObj } from "@storybook/react-vite"

import { Check } from "@/icons/app"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { mockImage } from "@/testing/mocks/images"

import { getBaseAvatarArgTypes } from "../../internal/BaseAvatar/__stories__/utils"
import { avatarSizes } from "../../internal/BaseAvatar/types"
import { F0AvatarPerson } from "../F0AvatarPerson"

const meta: Meta<typeof F0AvatarPerson> = {
  component: F0AvatarPerson,
  title: "Avatars/AvatarPerson",
  tags: ["autodocs"],
  argTypes: {
    ...getBaseAvatarArgTypes([
      "size",
      "aria-label",
      "aria-labelledby",
      "badge",
    ]),
  },
} satisfies Meta<typeof F0AvatarPerson>

export default meta

type Story = StoryObj<typeof F0AvatarPerson>

export const Default: Story = {
  args: {
    firstName: "Dani",
    lastName: "Moreno",
    size: "md",
  },
}

export const WithImage: Story = {
  args: {
    ...Default.args,
    src: "/avatars/person04.jpg",
  },
}

export const WithBadge: Story = {
  args: {
    ...Default.args,
    badge: {
      type: "positive",
      icon: Check,
    },
  },
}

export const WithBadgeTooltip: Story = {
  args: {
    ...Default.args,
    badge: {
      type: "positive",
      icon: Check,
      tooltip: "This is a tooltip",
    },
  },
}

export const Deactivated: Story = {
  args: {
    ...Default.args,
    deactivated: true,
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
            <F0AvatarPerson
              key={size}
              size={size}
              firstName="Juanito"
              lastName="Perez"
            />
          ))}
        </div>
      </section>
      <section>
        <h4 className="text-lg font-semibold">With Image</h4>
        <div className="flex flex-row gap-2">
          {avatarSizes.map((size, index) => (
            <F0AvatarPerson
              key={size}
              size={size}
              firstName="Juanito"
              lastName="Perez"
              src={mockImage("person", index)}
            />
          ))}
        </div>
      </section>
      <section>
        <h4 className="text-lg font-semibold">With Module Badge</h4>
        <div className="flex flex-row gap-2">
          {avatarSizes.map((size, index) => (
            <F0AvatarPerson
              key={size}
              size={size}
              firstName="Juanito"
              lastName="Perez"
              src={mockImage("person", index)}
              badge={{ type: "module", module: "inbox" }}
            />
          ))}
        </div>
      </section>
      <section>
        <h4 className="text-lg font-semibold">Deactivated</h4>
        <div className="flex flex-row gap-2">
          {avatarSizes.map((size) => (
            <F0AvatarPerson
              key={size}
              size={size}
              deactivated
              firstName="Juanito"
              lastName="Perez"
            />
          ))}
        </div>
      </section>
    </div>
  ),
}
