import type { Meta, StoryObj } from "@storybook/react-vite"

import image from "@storybook-static/avatars/person04.jpg"
import { fn } from "storybook/test"

import { Briefcase, Delete, Envelope } from "@/icons/app"

import { F0CardOneLiner } from "../F0CardOneLiner"

const meta: Meta<typeof F0CardOneLiner> = {
  component: F0CardOneLiner,
  title: "Card/OneLiner",
  parameters: {
    docs: { story: { inline: false, height: "160px" } },
  },
  tags: ["autodocs", "stable"],
  decorators: [
    (Story, context) => {
      if (context.parameters?.noMetaLayout) {
        return <Story />
      }
      return (
        <div className="flex h-[calc(100vh-32px)] w-full items-center justify-center">
          <div className="w-[640px]">
            <Story />
          </div>
        </div>
      )
    },
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "Do you want to proceed?",
    primaryAction: {
      label: "Confirm",
      onClick: fn(),
    },
    secondaryActions: [
      {
        label: "Cancel",
        onClick: fn(),
      },
    ],
  },
}

export const WithAvatar: Story = {
  args: {
    avatar: {
      type: "person",
      firstName: "Jane",
      lastName: "Cooper",
      src: image,
    },
    title: "Jane Cooper",
    description: "Product designer",
    primaryAction: {
      label: "Open",
      onClick: fn(),
    },
    secondaryActions: [
      {
        label: "Edit",
        onClick: fn(),
      },
    ],
    otherActions: [
      {
        label: "Mail",
        icon: Envelope,
        onClick: fn(),
      },
      { type: "separator" },
      {
        label: "Delete",
        icon: Delete,
        onClick: fn(),
        critical: true,
      },
    ],
  },
}

export const WithAlert: Story = {
  args: {
    avatar: {
      type: "person",
      firstName: "Jane",
      lastName: "Cooper",
      src: image,
    },
    title: "Jane Cooper",
    description: "Contract ends in 3 days",
    alert: {
      variant: "warning",
      title: "Action required",
    },
    primaryAction: {
      label: "Renew",
      onClick: fn(),
    },
    secondaryActions: [
      {
        label: "Dismiss",
        onClick: fn(),
      },
    ],
  },
  parameters: {
    docs: { story: { inline: false, height: "200px" } },
  },
}

/**
 * The `avatar` prop is not limited to people — it accepts any avatar type in the
 * system (person, company, team, icon, emoji, flag, file), all rendered at `md`
 * on the left.
 */
export const AvatarTypes: Story = {
  parameters: {
    noMetaLayout: true,
    docs: { story: { inline: false, height: "420px" } },
  },
  render: () => (
    <div className="flex w-[640px] flex-col gap-3">
      <F0CardOneLiner
        avatar={{
          type: "person",
          firstName: "Jane",
          lastName: "Cooper",
          src: image,
        }}
        title="Jane Cooper"
        description="Person avatar"
        primaryAction={{ label: "Open", onClick: fn() }}
      />
      <F0CardOneLiner
        avatar={{ type: "company", name: "Acme Inc" }}
        title="Acme Inc"
        description="Company avatar"
        primaryAction={{ label: "Open", onClick: fn() }}
      />
      <F0CardOneLiner
        avatar={{ type: "team", name: "Design" }}
        title="Design Team"
        description="Team avatar"
        primaryAction={{ label: "Open", onClick: fn() }}
      />
      <F0CardOneLiner
        avatar={{ type: "icon", icon: Briefcase }}
        title="Engineering"
        description="Icon avatar"
        primaryAction={{ label: "Open", onClick: fn() }}
      />
      <F0CardOneLiner
        avatar={{ type: "emoji", emoji: "🚀" }}
        title="Launch"
        description="Emoji avatar"
        primaryAction={{ label: "Open", onClick: fn() }}
      />
    </div>
  ),
  decorators: [
    (Story) => (
      <div className="flex min-h-[calc(100vh-32px)] w-full items-center justify-center">
        <Story />
      </div>
    ),
  ],
}
