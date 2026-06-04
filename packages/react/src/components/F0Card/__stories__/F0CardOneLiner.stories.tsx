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
  // Explicit argTypes: docgen can't infer props through the
  // withDataTestId(withSkeleton(...)) wrapper, so we declare the controls here.
  argTypes: {
    title: { control: "text", description: "The primary line of text." },
    description: {
      control: "text",
      description: "Optional secondary line (single line, truncated).",
    },
    avatar: {
      control: "object",
      description:
        "Optional avatar rendered at md on the left. Any avatar type: person, team, company, file, flag, emoji, icon, module.",
    },
    stackAt: {
      control: "select",
      options: ["sm", "md", "lg", "never"],
      description:
        "Container width at which the actions drop to their own line. `never` keeps them inline at every width.",
      table: { defaultValue: { summary: "sm" } },
    },
    compact: {
      control: "boolean",
      description: "Tighter padding and smaller controls.",
    },
    fullHeight: {
      control: "boolean",
      description: "Stretch to fill the height of the container.",
    },
    link: {
      control: "text",
      description: "When set, the whole row becomes a link to this href.",
    },
    primaryAction: {
      control: "object",
      description: "Primary action button, pinned at the trailing edge.",
    },
    secondaryActions: {
      control: "object",
      description: "Secondary actions (buttons) or a single link.",
    },
    otherActions: {
      control: "object",
      description: "Overflow (⋯) menu actions, kept in the left more-menu.",
    },
    confirmAction: {
      control: "object",
      description:
        "Confirm (✓) icon-only action of the confirm/reject variant.",
    },
    rejectAction: {
      control: "object",
      description: "Reject (✗) icon-only action of the confirm/reject variant.",
    },
    alert: {
      control: "object",
      description: "Alert banner displayed above the row.",
    },
    onClick: {
      action: "clicked",
      description: "Called when the row is clicked.",
    },
  },
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

/**
 * Confirm/reject variant: icon-only ✗ (reject) + ✓ (confirm) buttons instead of
 * the standard actions. Useful for inline approve/reject rows.
 */
export const ConfirmReject: Story = {
  args: {
    avatar: {
      type: "person",
      firstName: "Jane",
      lastName: "Cooper",
      src: image,
    },
    title: "Jane Cooper",
    description: "Requested 3 days off",
    rejectAction: { label: "Reject", onClick: fn() },
    confirmAction: { label: "Approve", onClick: fn() },
  },
}

/**
 * `stackAt` controls the container width at which the actions drop to their own
 * line. `never` keeps them inline at every width (the title truncates instead).
 */
export const NeverStack: Story = {
  args: {
    avatar: {
      type: "person",
      firstName: "Jane",
      lastName: "Cooper",
      src: image,
    },
    title: "Jane Cooper",
    description: "Actions stay inline at every width",
    stackAt: "never",
    secondaryActions: [{ label: "Edit", onClick: fn() }],
    primaryAction: { label: "Open", onClick: fn() },
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
      <F0CardOneLiner
        avatar={{ type: "module", module: "goals" }}
        title="Goals"
        description="Module avatar"
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
