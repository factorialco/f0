import type { Meta, StoryObj } from "@storybook/react-vite"

import image from "@storybook-static/avatars/person04.jpg"
import { fn } from "storybook/test"

import { Briefcase, Check, Cross, Delete, Envelope } from "@/icons/app"

import { F0CardRow } from "../F0CardRow"

const meta: Meta<typeof F0CardRow> = {
  component: F0CardRow,
  title: "Card Row",
  parameters: {
    docs: {
      description: {
        component: [
          "`F0CardRow` is a compact, single-row card: an optional avatar on the left, a title with an optional description, and trailing actions on the right.",
          "Use it for list rows, inline confirmations and dense layouts where a full `F0Card` is too heavy — e.g. a settings toggle row, a pending-approval item, or a selectable entity.",
          "Actions stay inline at every width by default. Set <code>stackAt</code> to collapse them onto their own line below a container breakpoint — secondary buttons fold into a left ⋯ menu while the primary stays pinned. For an approve/reject row, use the icon-only <code>confirmAction</code> / <code>rejectAction</code> variant. The avatar renders at a fixed size and accepts any avatar type in the system.",
        ]
          .map((line) => `<p>${line}</p>`)
          .join("\n"),
      },
      story: { inline: false, height: "160px" },
    },
  },
  tags: ["autodocs", "stable"],
  // Explicit argTypes: docgen can't infer props through the
  // withDataTestId(withSkeleton(...)) wrapper, so we declare the controls here.
  argTypes: {
    title: { control: "text", description: "The primary line of text." },
    description: {
      control: "text",
      description: "Optional secondary line (wraps when long).",
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
      table: { defaultValue: { summary: "never" } },
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
    // Function-bearing props: disable the control so it doesn't dump the
    // serialized mock fn() source. They still appear in the args table.
    primaryAction: {
      control: false,
      description:
        'Primary action button, pinned at the trailing edge. Set `variant: "secondary"` to render it as an outline button while keeping it pinned (a lone CTA that never sheds into the ⋯ menu).',
    },
    secondaryActions: {
      control: false,
      description: "Secondary actions (buttons) or a single link.",
    },
    otherActions: {
      control: false,
      description: "Overflow (⋯) menu actions, kept in the left more-menu.",
    },
    confirmAction: {
      control: false,
      description:
        "Confirm (✓) icon-only action of the confirm/reject variant.",
    },
    rejectAction: {
      control: false,
      description: "Reject (✗) icon-only action of the confirm/reject variant.",
    },
    alert: {
      control: false,
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
 * A single CTA that shouldn't carry full primary weight: pass it as the
 * `primaryAction` with `variant: "secondary"` to render an outline button. It
 * stays pinned at the trailing edge and never collapses into the "⋯" menu, even
 * in a narrow row — unlike a lone `secondaryActions` entry, which can shed.
 */
export const SecondaryPrimaryAction: Story = {
  args: {
    title: "Your export is ready to download",
    primaryAction: {
      label: "Download",
      onClick: fn(),
      variant: "secondary",
    },
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
    stackAt: "md",
    rejectAction: { label: "Reject", onClick: fn() },
    confirmAction: { label: "Approve", onClick: fn() },
  },
}

/**
 * Resolved state of a confirm/reject row: once a decision is made, pass `status`
 * a coloured icon (`{ icon, variant, label }`, the `label` keeps it accessible)
 * to swap the buttons for the outcome. The accepted/rejected → positive/critical
 * mapping lives with the caller (here in the story).
 */
export const Accepted: Story = {
  args: {
    avatar: {
      type: "person",
      firstName: "Jane",
      lastName: "Cooper",
      src: image,
    },
    title: "Jane Cooper",
    description: "Requested 3 days off",
    status: { icon: Check, variant: "positive", label: "Accepted" },
  },
}

export const Rejected: Story = {
  args: {
    avatar: {
      type: "person",
      firstName: "Jane",
      lastName: "Cooper",
      src: image,
    },
    title: "Jane Cooper",
    description: "Requested 3 days off",
    status: { icon: Cross, variant: "critical", label: "Rejected" },
    inactive: true,
  },
}

/**
 * Actions stay inline at every width by default (`stackAt: "never"`). Opt into a
 * responsive collapse with `stackAt` (e.g. `"md"`): below that container width the
 * actions drop onto their own line with a separator, and secondary buttons fold
 * into the left ⋯. Resize the card narrower than ~448px to see it.
 */
export const Stacking: Story = {
  args: {
    avatar: {
      type: "person",
      firstName: "Jane",
      lastName: "Cooper",
      src: image,
    },
    title: "Jane Cooper",
    description: "Drops to its own line below @md",
    stackAt: "md",
    secondaryActions: [{ label: "Edit", onClick: fn() }],
    otherActions: [
      { label: "Mail", icon: Envelope, onClick: fn() },
      { type: "separator" },
      { label: "Delete", icon: Delete, onClick: fn(), critical: true },
    ],
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
 * The `avatar` prop accepts every single-avatar type in the system — person,
 * company, team, file, flag, icon, emoji, module, alert and date — each
 * rendered at a single, fixed size on the left (the size is not configurable).
 */
export const AvatarTypes: Story = {
  parameters: {
    noMetaLayout: true,
    docs: { story: { inline: false, height: "840px" } },
  },
  render: () => (
    <div className="flex w-[640px] flex-col gap-3">
      <F0CardRow
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
      <F0CardRow
        avatar={{ type: "company", name: "Acme Inc" }}
        title="Acme Inc"
        description="Company avatar"
        primaryAction={{ label: "Open", onClick: fn() }}
      />
      <F0CardRow
        avatar={{ type: "team", name: "Design" }}
        title="Design Team"
        description="Team avatar"
        primaryAction={{ label: "Open", onClick: fn() }}
      />
      <F0CardRow
        avatar={{
          type: "file",
          file: { name: "contract.pdf", type: "application/pdf" },
        }}
        title="contract.pdf"
        description="File avatar"
        primaryAction={{ label: "Open", onClick: fn() }}
      />
      <F0CardRow
        avatar={{ type: "flag", flag: "es" }}
        title="Spain"
        description="Flag avatar"
        primaryAction={{ label: "Open", onClick: fn() }}
      />
      <F0CardRow
        avatar={{ type: "icon", icon: Briefcase }}
        title="Engineering"
        description="Icon avatar"
        primaryAction={{ label: "Open", onClick: fn() }}
      />
      <F0CardRow
        avatar={{ type: "emoji", emoji: "🚀" }}
        title="Launch"
        description="Emoji avatar"
        primaryAction={{ label: "Open", onClick: fn() }}
      />
      <F0CardRow
        avatar={{ type: "module", module: "goals" }}
        title="Goals"
        description="Module avatar"
        primaryAction={{ label: "Open", onClick: fn() }}
      />
      <F0CardRow
        avatar={{ type: "alert", variant: "warning" }}
        title="Action required"
        description="Alert avatar"
        primaryAction={{ label: "Open", onClick: fn() }}
      />
      <F0CardRow
        avatar={{ type: "date", date: new Date(2026, 5, 5) }}
        title="Team offsite"
        description="Date avatar"
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
