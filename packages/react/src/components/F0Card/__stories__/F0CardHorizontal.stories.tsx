import type { Meta, StoryObj } from "@storybook/react-vite"

import image from "@storybook-static/avatars/person04.jpg"
import { fn } from "storybook/test"

import { Briefcase, Check, Cross, Delete, Envelope } from "@/icons/app"

import { F0CardHorizontal } from "../F0CardHorizontal"

// Story handlers alert which control fired (on top of the Actions-panel spy),
// so a docs reader can confirm exactly which button they pressed.
const clickAlert = (label: string) => fn(() => alert(`${label} clicked`))

const meta: Meta<typeof F0CardHorizontal> = {
  component: F0CardHorizontal,
  title: "Card Horizontal",
  parameters: {
    docs: {
      description: {
        component: [
          "`F0CardHorizontal` is a compact, single-row card: an optional avatar on the left, a title with an optional description, and trailing actions on the right.",
          "Use it for list rows, inline confirmations and dense layouts where a full `F0Card` is too heavy — e.g. a settings toggle row, a pending-approval item, or a selectable entity.",
          "Actions stay inline at every width by default. Set <code>stackAt</code> to collapse them onto their own line below a container breakpoint — secondary buttons fold into a left ⋯ menu while the primary stays pinned. For an approve/reject row, use the icon-only <code>confirmAction</code> / <code>rejectAction</code> variant. The avatar renders at a fixed size and accepts any avatar type in the system.",
          "A row is either driven by its actions <em>or</em> by a whole-row click target (<code>link</code> / <code>onClick</code>) — not both. Pass <code>link</code>/<code>onClick</code> for entry-point cards whose entire surface is the action, and leave them unset for rows that act through their buttons.",
        ]
          .map((line) => `<p>${line}</p>`)
          .join("\n"),
      },
      story: { inline: false, height: "160px" },
    },
  },
  tags: ["autodocs", "experimental"],
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
        "Optional avatar rendered at a fixed `lg` size on the left. Any avatar type: person, team, company, file, flag, emoji, icon, module, alert, date.",
    },
    stackAt: {
      control: "select",
      options: ["sm", "md", "lg", "never"],
      description:
        "Container width at which the actions drop to their own line. `never` keeps them inline at every width.",
      table: { defaultValue: { summary: "never" } },
    },
    inactive: {
      control: "boolean",
      description:
        "Strikes through and dims the title/description (e.g. a voided or closed row). Purely presentational.",
    },
    fullHeight: {
      control: "boolean",
      description: "Stretch to fill the height of the container.",
    },
    link: {
      control: "text",
      description:
        "Opt-in: makes the whole row a link to this href — adds pointer + hover/focus affordance and a full-row overlay link. Mutually exclusive with action buttons.",
    },
    disableOverlayLink: {
      control: "boolean",
      description:
        "Disables the full-row overlay link (used with `link`) so a parent can manage drag-and-drop while still allowing click navigation via `onClick`.",
    },
    // Function-bearing props: disable the control so it doesn't dump the
    // serialized mock fn() source. They still appear in the args table.
    primaryAction: {
      control: false,
      description:
        'Primary action button, pinned at the trailing edge. Set `variant: "outline"` to render it as an outline button while keeping it pinned (a lone CTA that never sheds into the ⋯ menu).',
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
    status: {
      control: false,
      description:
        "Resolved-state icon (`{ icon, variant, label }`) shown at the trailing edge in place of any actions.",
    },
    alert: {
      control: false,
      description: "Alert banner displayed above the row.",
    },
    onClick: {
      control: false,
      description:
        "Opt-in: called when the whole row is clicked — adds pointer + hover/focus affordance. Mutually exclusive with action buttons.",
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
      onClick: clickAlert("Confirm"),
    },
    secondaryActions: [
      {
        label: "Cancel",
        onClick: clickAlert("Cancel"),
      },
    ],
  },
}

/**
 * A single CTA that shouldn't carry full primary weight: pass it as the
 * `primaryAction` with `variant: "outline"` to render an outline button. It
 * stays pinned at the trailing edge and never collapses into the "⋯" menu, even
 * in a narrow row — unlike a lone `secondaryActions` entry, which can shed.
 */
export const OutlinePrimaryAction: Story = {
  args: {
    title: "Your export is ready to download",
    primaryAction: {
      label: "Download",
      onClick: clickAlert("Download"),
      variant: "outline",
    },
  },
}

/**
 * Opt-in whole-row click target: pass `onClick` (or `link`) and the entire row
 * becomes clickable — pointer cursor plus a hover/focus affordance. Use it for
 * entry-point cards whose whole surface is the action. Such a row carries no
 * action buttons: a row is driven by its buttons *or* by a row click, never both.
 */
export const ClickableRow: Story = {
  args: {
    avatar: { type: "module", module: "goals" },
    title: "Company goals",
    description: "Click anywhere on the row to open",
    onClick: clickAlert("Row"),
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
    rejectAction: { label: "Reject", onClick: clickAlert("Reject") },
    confirmAction: { label: "Approve", onClick: clickAlert("Approve") },
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
    secondaryActions: [{ label: "Edit", onClick: clickAlert("Edit") }],
    otherActions: [
      { label: "Mail", icon: Envelope, onClick: clickAlert("Mail") },
      { type: "separator" },
      {
        label: "Delete",
        icon: Delete,
        onClick: clickAlert("Delete"),
        critical: true,
      },
    ],
    primaryAction: { label: "Open", onClick: clickAlert("Open") },
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
      onClick: clickAlert("Open"),
    },
    secondaryActions: [
      {
        label: "Edit",
        onClick: clickAlert("Edit"),
      },
    ],
    otherActions: [
      {
        label: "Mail",
        icon: Envelope,
        onClick: clickAlert("Mail"),
      },
      { type: "separator" },
      {
        label: "Delete",
        icon: Delete,
        onClick: clickAlert("Delete"),
        critical: true,
      },
    ],
  },
}

/**
 * The title and description wrap when long, so the row grows to fit. The avatar
 * and the trailing actions stay pinned to the top (rather than drifting to the
 * vertical centre), so both keep aligning with the title's first line. Long
 * unbroken strings — URLs, ids — break instead of overrunning the actions.
 */
export const LongContent: Story = {
  args: {
    avatar: {
      type: "person",
      firstName: "Jane",
      lastName: "Cooper",
      src: image,
    },
    title: "Jane Cooper",
    description:
      "Product designer leading the design system team across web and mobile, with a bio long enough to wrap onto several lines — ref https://example.com/people/jane-cooper-design-systems-lead-2026",
    primaryAction: { label: "Open", onClick: clickAlert("Open") },
    secondaryActions: [{ label: "Edit", onClick: clickAlert("Edit") }],
  },
  parameters: {
    docs: { story: { inline: false, height: "220px" } },
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
      onClick: clickAlert("Renew"),
    },
    secondaryActions: [
      {
        label: "Dismiss",
        onClick: clickAlert("Dismiss"),
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
      <F0CardHorizontal
        avatar={{
          type: "person",
          firstName: "Jane",
          lastName: "Cooper",
          src: image,
        }}
        title="Jane Cooper"
        description="Person avatar"
        primaryAction={{ label: "Open", onClick: clickAlert("Open") }}
      />
      <F0CardHorizontal
        avatar={{ type: "company", name: "Acme Inc" }}
        title="Acme Inc"
        description="Company avatar"
        primaryAction={{ label: "Open", onClick: clickAlert("Open") }}
      />
      <F0CardHorizontal
        avatar={{ type: "team", name: "Design" }}
        title="Design Team"
        description="Team avatar"
        primaryAction={{ label: "Open", onClick: clickAlert("Open") }}
      />
      <F0CardHorizontal
        avatar={{
          type: "file",
          file: { name: "contract.pdf", type: "application/pdf" },
        }}
        title="contract.pdf"
        description="File avatar"
        primaryAction={{ label: "Open", onClick: clickAlert("Open") }}
      />
      <F0CardHorizontal
        avatar={{ type: "flag", flag: "es" }}
        title="Spain"
        description="Flag avatar"
        primaryAction={{ label: "Open", onClick: clickAlert("Open") }}
      />
      <F0CardHorizontal
        avatar={{ type: "icon", icon: Briefcase }}
        title="Engineering"
        description="Icon avatar"
        primaryAction={{ label: "Open", onClick: clickAlert("Open") }}
      />
      <F0CardHorizontal
        avatar={{ type: "emoji", emoji: "🚀" }}
        title="Launch"
        description="Emoji avatar"
        primaryAction={{ label: "Open", onClick: clickAlert("Open") }}
      />
      <F0CardHorizontal
        avatar={{ type: "module", module: "goals" }}
        title="Goals"
        description="Module avatar"
        primaryAction={{ label: "Open", onClick: clickAlert("Open") }}
      />
      <F0CardHorizontal
        avatar={{ type: "alert", variant: "warning" }}
        title="Action required"
        description="Alert avatar"
        primaryAction={{ label: "Open", onClick: clickAlert("Open") }}
      />
      <F0CardHorizontal
        avatar={{ type: "date", date: new Date(2026, 5, 5) }}
        title="Team offsite"
        description="Date avatar"
        primaryAction={{ label: "Open", onClick: clickAlert("Open") }}
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
