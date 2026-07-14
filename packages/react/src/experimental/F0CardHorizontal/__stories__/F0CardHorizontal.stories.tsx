import type { Meta, StoryObj } from "@storybook/react-vite"

import image from "@storybook-static/avatars/person04.jpg"
import { fn } from "storybook/test"

import { F0Card } from "@/components/F0Card"
import { Briefcase, Check, Cross, Delete, Envelope } from "@/icons/app"

import { F0CardHorizontal } from "../F0CardHorizontal"

// Story handlers alert which control fired (on top of the Actions-panel spy),
// so a docs reader can confirm exactly which button they pressed.
const clickAlert = (label: string) => fn(() => alert(`${label} clicked`))

const meta: Meta<typeof F0CardHorizontal> = {
  component: F0CardHorizontal,
  title: "CardHorizontal",
  parameters: {
    docs: {
      // Prose lives in F0CardHorizontal.mdx (autodocs disabled below).
      story: { inline: false, height: "160px" },
    },
  },
  tags: ["!autodocs", "experimental"],
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
        "Strikes through and dims the title/description (e.g. a voided or closed card). Purely presentational.",
    },
    fullHeight: {
      control: "boolean",
      description: "Stretch to fill the height of the container.",
    },
    link: {
      control: "text",
      description:
        "Opt-in: makes the whole card a link to this href — adds pointer + hover/focus affordance and a full-card overlay link. Mutually exclusive with action buttons.",
    },
    disableOverlayLink: {
      control: "boolean",
      description:
        "Disables the full-card overlay link (used with `link`) so a parent can manage drag-and-drop while still allowing click navigation via `onClick`.",
    },
    disabled: {
      control: "boolean",
      description:
        "Dims the whole card and disables interaction (its actions and any row-level link/click).",
    },
    descriptionAsSingleLine: {
      control: "boolean",
      description:
        "Renders the description on a single line, truncating overflow with an ellipsis (and a tooltip) instead of wrapping.",
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
      description: "Alert banner displayed above the card.",
    },
    onClick: {
      control: false,
      description:
        "Opt-in: called when the whole card is clicked — adds pointer + hover/focus affordance. Mutually exclusive with action buttons.",
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
 * in a narrow card — unlike a lone `secondaryActions` entry, which can shed.
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
 * Opt-in whole-card click target: pass `onClick` (or `link`) and the entire card
 * becomes clickable — pointer cursor plus a hover/focus affordance. Use it for
 * entry-point cards whose whole surface is the action. Such a card carries no
 * action buttons: a card is driven by its buttons *or* by a whole-card click, never both.
 */
export const ClickableCard: Story = {
  args: {
    avatar: { type: "module", module: "goals" },
    title: "Company goals",
    description: "Click anywhere on the card to open",
    onClick: clickAlert("Card"),
  },
}

/**
 * Disabled state: pass `disabled` to dim the whole card and switch off all
 * interaction — its action buttons and any row-level link/click. Purely a
 * visual + interaction affordance.
 */
export const Disabled: Story = {
  args: {
    avatar: { type: "module", module: "goals" },
    title: "Company goals",
    description: "This card is disabled",
    disabled: true,
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
  },
}

/**
 * Confirm/reject variant: icon-only ✗ (reject) + ✓ (confirm) buttons instead of
 * the standard actions. Useful for inline approve/reject decisions.
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
 * Resolved state of a confirm/reject card: once a decision is made, pass `status`
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

// Container widths spanning the `md` (448px) breakpoint, so the same card shows
// its actions inline at the wider sizes and wrapped onto their own line at the
// narrower ones. (The query is on the card's content box, so the flip sits a
// little above the raw 448px once the card's own padding is accounted for.)
const stackingWidths = [
  { className: "w-[600px]", label: "600px — actions inline" },
  { className: "w-[520px]", label: "520px — actions inline" },
  { className: "w-[440px]", label: "440px — actions wrap to their own line" },
  { className: "w-[360px]", label: "360px — actions wrap to their own line" },
]

/**
 * `stackAt` reacts to the card's own width — a container query, not the viewport —
 * with breakpoints `sm` (384px), `md` (448px) and `lg` (512px). At or above the
 * breakpoint the actions sit inline at the trailing edge; below it they drop onto
 * their own full-width line with a footer separator, and secondary buttons fold
 * into the left ⋯ menu. The same `stackAt: "md"` card is shown across a ladder of
 * widths — watch the actions jump to a new line once the card narrows past 448px.
 */
export const ResponsiveStacking: Story = {
  parameters: {
    noMetaLayout: true,
    docs: { story: { inline: false, height: "660px" } },
  },
  render: () => (
    <div className="flex w-full flex-col items-center gap-6 py-4">
      {stackingWidths.map(({ className, label }) => (
        <div key={className} className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-f1-foreground-secondary">
            {label}
          </span>
          <div className={className}>
            <F0CardHorizontal
              avatar={{
                type: "person",
                firstName: "Jane",
                lastName: "Cooper",
                src: image,
              }}
              title="Jane Cooper"
              description="Requested 3 days off"
              stackAt="md"
              secondaryActions={[
                { label: "Edit", onClick: clickAlert("Edit") },
              ]}
              otherActions={[
                { label: "Mail", icon: Envelope, onClick: clickAlert("Mail") },
                { type: "separator" },
                {
                  label: "Delete",
                  icon: Delete,
                  onClick: clickAlert("Delete"),
                  critical: true,
                },
              ]}
              primaryAction={{ label: "Open", onClick: clickAlert("Open") }}
            />
          </div>
        </div>
      ))}
    </div>
  ),
  decorators: [
    (Story) => (
      <div className="flex min-h-[calc(100vh-32px)] w-full justify-center">
        <Story />
      </div>
    ),
  ],
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
 * The title and description wrap when long, so the card grows to fit. The avatar
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

/**
 * Pass `descriptionAsSingleLine` to keep the description on one line — overflow
 * is truncated with an ellipsis (and a tooltip with the full text) instead of
 * wrapping. Mirrors the single-line description behaviour of the deprecated
 * `F0CanvasCard`; use it for dense lists where a fixed row height matters.
 */
export const SingleLineDescription: Story = {
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
    descriptionAsSingleLine: true,
    primaryAction: { label: "Open", onClick: clickAlert("Open") },
    secondaryActions: [{ label: "Edit", onClick: clickAlert("Edit") }],
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

const people = [
  { firstName: "Jane", lastName: "Cooper", role: "Product designer" },
  { firstName: "Cody", lastName: "Fisher", role: "Engineering manager" },
  { firstName: "Esther", lastName: "Howard", role: "Sales lead" },
]

/**
 * Do/don't visual (docs only, hidden from the sidebar): a dense, scannable stack of
 * `F0CardHorizontal` cards — the "do" example for choosing it over `F0Card`.
 */
export const HorizontalCardStack: Story = {
  tags: ["no-sidebar"],
  parameters: {
    noMetaLayout: true,
    docs: { story: { inline: false, height: "220px" } },
  },
  render: () => (
    <div className="mx-auto flex w-[560px] flex-col gap-2">
      {people.map((p) => (
        <F0CardHorizontal
          key={p.lastName}
          avatar={{
            type: "person",
            firstName: p.firstName,
            lastName: p.lastName,
          }}
          title={`${p.firstName} ${p.lastName}`}
          description={p.role}
          primaryAction={{ label: "Open", onClick: fn() }}
        />
      ))}
    </div>
  ),
}

/**
 * Do/don't visual (docs only, hidden from the sidebar): `F0Card` (vertical) stacked
 * as if it were a list of cards — tall and hard to scan. The "don't" example.
 */
export const VerticalCardStack: Story = {
  tags: ["no-sidebar"],
  parameters: {
    noMetaLayout: true,
    docs: { story: { inline: false, height: "420px" } },
  },
  render: () => (
    <div className="mx-auto flex w-[560px] flex-col gap-2">
      {people.map((p) => (
        <F0Card
          key={p.lastName}
          avatar={{
            type: "person",
            firstName: p.firstName,
            lastName: p.lastName,
          }}
          title={`${p.firstName} ${p.lastName}`}
          description={p.role}
          primaryAction={{ label: "Open", onClick: fn() }}
        />
      ))}
    </div>
  ),
}
