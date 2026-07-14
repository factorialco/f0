import type { Meta, StoryObj } from "@storybook/react-vite"
import type { ComponentProps } from "react"

import { expect, within } from "storybook/test"

import { Calendar, Check, Warning } from "@/icons/app"
import { dataTestIdArgs } from "@/lib/data-testid/__stories__/args"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { internalAvatarSizes } from "@/ui/Avatar"

import { avatarSizes } from "../../internal/BaseAvatar"
import { getBaseAvatarArgTypes } from "../../internal/BaseAvatar/__stories__/utils"
import { F0Avatar } from "../F0Avatar"

const meta = {
  component: F0Avatar,
  title: "Avatars/Avatar",
  tags: ["stable", "!autodocs"],
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
} satisfies Meta<typeof F0Avatar>

export default meta
type Story = StoryObj<typeof F0Avatar>

const SIZES = avatarSizes

export const WithDataTestId: Story = {
  args: {
    size: "lg",
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
    await expect(canvas.getByTestId("my-test-avatar")).toBeInTheDocument()
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
              src: "/avatars/person02.jpg",
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
              src: "/avatars/team02.jpg",
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
              src: "/avatars/company01.jpg",
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

export const Default: Story = {
  args: {
    size: "lg",
    avatar: {
      type: "person",
      firstName: "John",
      lastName: "Doe",
      "aria-label": "John Doe",
    },
  } as ComponentProps<typeof F0Avatar>,
  render: (args) => <F0Avatar {...args} />,
}

export const AllTypes: Story = {
  render: () => {
    const types = [
      {
        label: "Person",
        avatar: {
          type: "person",
          firstName: "John",
          lastName: "Doe",
          src: "/avatars/person04.jpg",
        },
      },
      {
        label: "Team",
        avatar: {
          type: "team",
          name: "Engineering Team",
          src: "/avatars/team01.jpg",
        },
      },
      {
        label: "Company",
        avatar: {
          type: "company",
          name: "Factorial HR",
          src: "/avatars/company02.jpg",
        },
      },
      {
        label: "File",
        avatar: {
          type: "file",
          file: { name: "report.pdf", type: "application/pdf" },
        },
      },
      { label: "Flag", avatar: { type: "flag", flag: "es" } },
      { label: "Emoji", avatar: { type: "emoji", emoji: "🎉" } },
      { label: "Icon", avatar: { type: "icon", icon: Calendar } },
    ] as const

    return (
      <div className="flex w-fit flex-col gap-4">
        <h3 className="text-lg font-semibold">All Avatar Types</h3>
        <div className="flex flex-row flex-wrap gap-4">
          {types.map(({ label, avatar }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <span className="text-sm font-medium">{label}</span>
              <F0Avatar size="lg" avatar={avatar} />
            </div>
          ))}
        </div>
      </div>
    )
  },
}

export const Snapshot: Story = {
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
