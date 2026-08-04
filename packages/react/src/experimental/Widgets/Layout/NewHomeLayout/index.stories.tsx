import type { Meta, StoryObj } from "@storybook/react-vite"

import { NewHomeLayout } from "./index"

/* ------------------------------ main content ------------------------------ */

const Greeting = () => (
  <div className="flex flex-col items-center gap-2 py-4">
    <div className="h-12 w-12 rounded-full bg-f1-background-accent-bold" />
    <div className="text-2xl font-semibold text-f1-foreground">
      Good afternoon, Saúl
    </div>
    <div className="text-f1-foreground-secondary">
      What do you want to get done today?
    </div>
  </div>
)

type Row = {
  glyph: string
  title: string
  subtitle?: string
  tag?: string
  people?: number
}

const FeedRow = ({ glyph, title, subtitle, tag, people }: Row) => (
  <div className="flex items-center gap-3 p-3">
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-f1-background-secondary">
      {glyph}
    </div>
    <div className="min-w-0 flex-1">
      <div className="truncate text-f1-foreground">{title}</div>
      {subtitle ? (
        <div className="truncate text-sm text-f1-foreground-secondary">
          {subtitle}
        </div>
      ) : null}
    </div>
    {tag ? (
      <span className="rounded-full bg-f1-background-info px-2 py-0.5 text-xs text-f1-foreground-info">
        {tag}
      </span>
    ) : null}
    {people ? (
      <div className="flex -space-x-2">
        {Array.from({ length: people }, (_, i) => (
          <div
            key={i}
            className="h-6 w-6 rounded-full border-2 border-solid border-f1-background bg-f1-background-accent-bold"
          />
        ))}
      </div>
    ) : null}
    <span className="text-f1-foreground-secondary">›</span>
  </div>
)

const FeedSection = ({
  label,
  rows,
  hiddenCount,
}: {
  label?: string
  rows: Row[]
  hiddenCount?: number
}) => (
  <div className="flex flex-col gap-2">
    {label ? (
      <h3 className="text-lg font-medium text-f1-foreground-secondary">
        {label}
      </h3>
    ) : null}
    <div className="divide-y divide-f1-border overflow-hidden rounded-lg border border-solid border-f1-border">
      {rows.map((r) => (
        <FeedRow key={r.title} {...r} />
      ))}
    </div>
    {hiddenCount ? (
      <div className="flex justify-end">
        <button type="button" className="text-sm text-f1-foreground-secondary">
          {`View more (${hiddenCount})`}
        </button>
      </div>
    ) : null}
  </div>
)

const HomeContent = () => (
  <div className="flex flex-col gap-6">
    <Greeting />
    <FeedSection
      rows={[
        { glyph: "🌴", title: "Request time off" },
        { glyph: "💳", title: "Add an expense" },
        { glyph: "💬", title: "Ask HR a question" },
        { glyph: "📄", title: "Explain my payslip" },
      ]}
    />
    <FeedSection
      label="Needs you"
      hiddenCount={4}
      rows={[
        {
          glyph: "📝",
          title: "Sign your contract addendum",
          subtitle: "Due tomorrow",
        },
        {
          glyph: "🌴",
          title: "3 time-off requests to approve",
          subtitle: "Your team",
          people: 3,
        },
        {
          glyph: "🎂",
          title: "Ada Lovelace's work anniversary",
          subtitle: "3 years today — send a note",
          people: 1,
        },
        {
          glyph: "📣",
          title: "New remote-work policy published",
          subtitle: "TL;DR: two more remote days a month",
        },
        {
          glyph: "💼",
          title: "3 candidates need your review",
          subtitle: "Wei Zhang, Fatima El-Amin, Jonas Weber",
        },
        {
          glyph: "📅",
          title: "Q3 roadmap all-hands",
          subtitle: "Prep your team's questions",
        },
      ]}
    />
    <FeedSection
      label="One working for you"
      rows={[
        {
          glyph: "✨",
          title: "Summarizing your last 1:1",
          subtitle: "Reading the notes…",
          tag: "In progress",
        },
        {
          glyph: "✨",
          title: "Draft self-review",
          subtitle: "Ready for you to review",
          tag: "Answer ready",
        },
      ]}
    />
  </div>
)

const ChatAside = () => (
  <div className="flex flex-col gap-3 rounded-xl border border-solid border-f1-border p-4">
    <div className="text-f1-foreground-secondary">
      Ask One anything about your work
    </div>
    <div className="flex items-center justify-between rounded-lg bg-f1-background-secondary px-3 py-2 text-f1-foreground-secondary">
      Ask One… <span>🎙️</span>
    </div>
  </div>
)

const meta = {
  title: "Widgets/Layout/NewHomeLayout",
  component: NewHomeLayout,
  tags: ["autodocs", "experimental"],
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof NewHomeLayout>

export default meta
type Story = StoryObj<typeof meta>

/**
 * A single ranked list grouped into sections (an unlabelled shortcuts lead,
 * "Needs you" capped with "View more", "One working for you"), with the greeting
 * on top of the main column and the AI chat in the side rail.
 */
export const Default: Story = {
  args: {
    children: <HomeContent />,
    aside: <ChatAside />,
  },
}
