import type { Meta, StoryObj } from "@storybook/react-vite"

import type { ComponentProps } from "react"
import { expect, within } from "storybook/test"

import { Check, Warning } from "@/icons/app"
import { dataTestIdArgs } from "@/lib/data-testid/__stories__/args"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { internalAvatarSizes } from "@/ui/Avatar"

import { avatarSizes } from "../../internal/BaseAvatar"
import { getBaseAvatarArgTypes } from "../../internal/BaseAvatar/__stories__/utils"
import { F0Avatar } from "../F0Avatar"

const meta: Meta<typeof F0Avatar> = {
  component: F0Avatar,
  title: "Avatars/Avatar",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: [
          "A polymorphic avatar component that can display person, team, or company avatars.",
          "The component automatically renders the appropriate avatar type based on the avatar prop configuration.",
        ]
          .map((line) => `<p>${line}</p>`)
          .join(""),
      },
    },
  },
  argTypes: {
    ...getBaseAvatarArgTypes(["size"]),
    size: {
      control: "select",
      options: internalAvatarSizes,
      description: "The size of the avatar",
      table: {
        type: {
          summary: "AvatarSize",
        },
      },
    },
    avatar: {
      control: "object",
      description: "The avatar configuration object",
      table: {
        type: {
          summary: "AvatarVariant",
        },
      },
    },
    ...dataTestIdArgs,
  },
}

export default meta
type Story = StoryObj<typeof F0Avatar>

const SIZES = avatarSizes

export const WithDataTestId: Story = {
  args: {
    size: "md",
    avatar: {
      type: "person",
      firstName: "John",
      lastName: "Doe",
      "aria-label": "John Doe",
    },
    dataTestId: "my-test-avatar",
  } as ComponentProps<typeof F0Avatar>,
  render: (args) => <F0Avatar {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const root = canvas
      .getByRole("img", { name: "John Doe" })
      .closest("[data-test-id]")
    await expect(root).toHaveAttribute("data-test-id", "my-test-avatar")
  },
}

export const PersonAvatar: Story = {
  render: () => (
    <div className="flex w-fit flex-col gap-2">
      {SIZES.map((size) => (
        <div key={size} className="flex flex-row items-center gap-2">
          <span className="w-16 text-sm">{size}</span>
          <F0Avatar
            size={size}
            avatar={{
              type: "person",
              firstName: "John",
              lastName: "Doe",
              "aria-label": "John Doe",
              "aria-labelledby": "John Doe",
            }}
          />
          <F0Avatar
            size={size}
            avatar={{
              type: "person",
              firstName: "Jane",
              lastName: "Smith",
              src: "/storybook-assets/avatar.jpeg",
            }}
          />
          <F0Avatar
            size={size}
            avatar={{
              type: "person",
              firstName: "Alex",
              lastName: "Johnson",
              badge: {
                type: "module",
                module: "time-tracking",
              },
            }}
          />
        </div>
      ))}
    </div>
  ),
}

export const TeamAvatar: Story = {
  render: () => (
    <div className="flex w-fit flex-col gap-2">
      {SIZES.map((size) => (
        <div key={size} className="flex flex-row items-center gap-2">
          <span className="w-16 text-sm">{size}</span>
          <F0Avatar
            size={size}
            avatar={{
              type: "team",
              name: "Engineering Team",
            }}
          />
          <F0Avatar
            size={size}
            avatar={{
              type: "team",
              name: "Design Team",
              src: "/storybook-assets/avatar.jpeg",
            }}
          />
          <F0Avatar
            size={size}
            avatar={{
              type: "team",
              name: "Product Team",
              badge: {
                type: "module",
                module: "company_projects",
              },
            }}
          />
        </div>
      ))}
    </div>
  ),
}

export const CompanyAvatar: Story = {
  render: () => (
    <div className="flex w-fit flex-col gap-2">
      {SIZES.map((size) => (
        <div key={size} className="flex flex-row items-center gap-2">
          <span className="w-16 text-sm">{size}</span>
          <F0Avatar
            size={size}
            avatar={{
              type: "company",
              name: "Factorial HR",
            }}
          />
          <F0Avatar
            size={size}
            avatar={{
              type: "company",
              name: "Acme Corp",
              src: "/storybook-assets/avatar.jpeg",
            }}
          />
          <F0Avatar
            size={size}
            avatar={{
              type: "company",
              name: "Tech Solutions",
              badge: {
                type: "positive",
                icon: Check,
              },
            }}
          />
        </div>
      ))}
    </div>
  ),
}

export const AllTypes: Story = {
  render: () => (
    <div className="flex w-fit flex-col gap-4">
      <h3 className="text-lg font-semibold">All Avatar Types</h3>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium">Person</span>
          <F0Avatar
            size="lg"
            avatar={{
              type: "person",
              firstName: "John",
              lastName: "Doe",
              src: "/storybook-assets/avatar.jpeg",
            }}
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium">Team</span>
          <F0Avatar
            size="lg"
            avatar={{
              type: "team",
              name: "Engineering Team",
            }}
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium">Company</span>
          <F0Avatar
            size="lg"
            avatar={{
              type: "company",
              name: "Factorial HR",
            }}
          />
        </div>
      </div>
    </div>
  ),
}

export const WithBadges: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex w-fit flex-col gap-4">
      <h3 className="text-lg font-semibold">Avatars with Badges</h3>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium">Module Badge</span>
          <F0Avatar
            size="lg"
            avatar={{
              type: "person",
              firstName: "John",
              lastName: "Doe",
              badge: {
                type: "module",
                module: "time-tracking",
              },
            }}
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium">Success Badge</span>
          <F0Avatar
            size="lg"
            avatar={{
              type: "team",
              name: "Engineering Team",
              badge: {
                type: "positive",
                icon: Check,
              },
            }}
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm font-medium">Warning Badge</span>
          <F0Avatar
            size="lg"
            avatar={{
              type: "company",
              name: "Factorial HR",
              badge: {
                type: "warning",
                icon: Warning,
              },
            }}
          />
        </div>
      </div>
    </div>
  ),
}
