import type { Meta, StoryObj } from "@storybook/react-vite"

import { expect, fn, userEvent, waitFor, within } from "storybook/test"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0MeetingCard } from "../F0MeetingCard"
import {
  attendeesDisplays,
  meetingStates,
  type MeetingAttendee,
} from "../types"

/**
 * Fixed reference instant. The card never reads a clock of its own, so pinning
 * `now` keeps every story (and its Chromatic snapshot) identical across runs.
 */
const NOW = new Date("2026-03-12T09:00:00")

const at = (time: string) => new Date(`2026-03-12T${time}:00`)

const attendees: MeetingAttendee[] = [
  { type: "internal", firstName: "Ada", lastName: "Lovelace" },
  { type: "internal", firstName: "Alan", lastName: "Turing" },
  { type: "internal", firstName: "Marta", lastName: "Ferrer" },
  { type: "internal", firstName: "Jordi", lastName: "Puig" },
  { type: "internal", firstName: "Noa", lastName: "Ramírez" },
  {
    type: "external",
    name: "Grace Hopper",
    email: "grace.hopper@example.com",
  },
  { type: "external", name: "Marie Curie", email: "marie.curie@example.com" },
  { type: "external", email: "katherine.johnson@example.com" },
]

const summary =
  "Marta covers the first shift and Jordi publishes the revised rota today. The team agreed to review staffing again on Friday, once the new hires finish onboarding."

const meta: Meta<typeof F0MeetingCard> = {
  component: F0MeetingCard,
  title: "F0MeetingCard",
  parameters: {
    docs: {
      // Prose lives in F0MeetingCard.mdx (autodocs disabled below).
      story: { inline: false, height: "200px" },
    },
  },
  tags: ["!autodocs", "experimental"],
  decorators: [(Story) => <div className="max-w-[420px]">{Story()}</div>],
  // Explicit argTypes: docgen can't infer props through the
  // withDataTestId(experimentalComponent(withSkeleton(...))) wrappers.
  argTypes: {
    state: {
      control: "select",
      options: meetingStates,
      description:
        "Lifecycle of the meeting. Always controlled — only the backend knows whether a meeting really started, ended or is still being summarised.",
      table: { type: { summary: meetingStates.join(" | ") } },
    },
    title: { control: "text", description: "The meeting title." },
    startsAt: {
      control: "date",
      description:
        "When the meeting starts. Drives the date line, the countdown and the join window.",
    },
    endsAt: {
      control: "date",
      description: "When it ends. Only used for the duration label once over.",
    },
    now: {
      control: "date",
      description:
        "Reference instant for every time-derived label. Defaults to the current time at render; the card never ticks, so re-render to refresh.",
    },
    attendees: {
      control: "object",
      description:
        "Known attendees, internal (employees) and external (initials only).",
    },
    invitedCount: {
      control: "number",
      description:
        "Total invited people, when `attendees` is a truncated list.",
    },
    presentCount: {
      control: "number",
      description:
        "How many attendees are in the room. Only used while in progress.",
    },
    attendeesDisplay: {
      control: "select",
      options: attendeesDisplays,
      description:
        "`auto` shows avatars while in progress and a written count otherwise.",
      table: { defaultValue: { summary: "auto" } },
    },
    maxAvatars: {
      control: "number",
      description:
        "Avatars shown before the rest collapse into a `+N` counter.",
      table: { defaultValue: { summary: "3" } },
    },
    summary: {
      control: "text",
      description:
        "Recap of the meeting. Rendered in full, and only once `finished`.",
    },
    join: {
      control: "object",
      description:
        "Join affordance. Enabled from `windowMinutes` (default 10) before the start and while running.",
    },
    secondaryActions: {
      control: "object",
      description:
        "Extra footer buttons — e.g. a Transcript action whose destination the consumer owns.",
    },
    compact: {
      control: "boolean",
      description:
        "Dense single-row layout: headline and relative time share a line, avatars shrink to `xs`, and there is no footer band.",
      table: { defaultValue: { summary: "false" } },
    },
  },
  args: {
    now: NOW,
  },
}

export default meta

type Story = StoryObj<typeof meta>

/**
 * An upcoming meeting still outside its join window: the exact time is what
 * matters, so there is no countdown tag and Join is not actionable yet.
 */
export const Default: Story = {
  args: {
    state: "scheduled",
    title: "Morning shift briefing",
    startsAt: at("11:30"),
    attendees,
    invitedCount: 12,
    join: { onJoin: fn() },
  },
}

/**
 * Inside the 10-minute window the countdown appears and Join becomes actionable.
 */
export const StartingSoon: Story = {
  args: {
    ...Default.args,
    startsAt: at("09:08"),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getByText("In 8 mins")).toBeVisible()
    const join = canvas.getByRole("button", { name: /Join/ })
    await expect(join).toBeEnabled()
    await userEvent.click(join)
  },
}

/**
 * While the meeting runs, who is in the room matters more than how many were
 * invited, so attendees switch to faces and the lead label reports elapsed time.
 * The status tag pulses instead of turning red — red in F0 means destructive.
 *
 * Hover the `+N` counter to see the attendees it collapsed. That popover only
 * exists when the card was handed every person it counts — see the docs on
 * `invitedCount` / `presentCount`.
 */
export const InProgress: Story = {
  args: {
    state: "inProgress",
    title: "Morning shift briefing",
    startsAt: at("08:56"),
    attendees,
    presentCount: attendees.length,
    join: { onJoin: fn() },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const counter = await canvas.findByText(`+${attendees.length - 3}`)
    await userEvent.hover(counter)

    // The popover renders in a portal, outside the story canvas, and fades in —
    // so wait for it to actually become visible, not just to exist.
    const collapsed = await within(document.body).findByText("Marie Curie")
    await waitFor(() => expect(collapsed).toBeVisible())
  },
}

/**
 * `compact` is the dense layout for embedding the card inline or in a tight
 * list: headline and relative time share one line, attendees shrink to `xs`, and
 * there is no footer band. A running meeting with no title of its own reads
 * "Call in progress".
 */
export const Compact: Story = {
  args: {
    state: "inProgress",
    startsAt: at("08:56"),
    attendees,
    presentCount: attendees.length,
    join: { onJoin: fn() },
    compact: true,
  },
}

/**
 * Compact isn't tied to the state. Waiting to start, the countdown becomes part
 * of the text line, since there is no footer band to hold a tag.
 */
export const CompactScheduled: Story = {
  args: {
    state: "scheduled",
    title: "Morning shift briefing",
    startsAt: at("09:08"),
    attendees,
    invitedCount: 12,
    join: { onJoin: fn() },
    compact: true,
  },
}

/**
 * The meeting is over but the recap is not ready yet — flagged, and nothing to
 * read or join.
 */
export const Summarizing: Story = {
  args: {
    state: "summarizing",
    title: "Morning shift briefing",
    startsAt: at("08:00"),
    endsAt: at("08:23"),
    attendees,
    invitedCount: 12,
  },
}

/**
 * Once finished, the recap is shown in full — no toggle to open it — and the
 * footer carries the state alongside consumer-owned actions. Where Transcript
 * leads is the product's decision, not the card's.
 */
export const Finished: Story = {
  args: {
    state: "finished",
    title: "Morning shift briefing",
    startsAt: at("08:00"),
    endsAt: at("08:23"),
    attendees,
    invitedCount: 12,
    summary,
    secondaryActions: [{ label: "Transcript", onClick: fn() }],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const group = await canvas.findByRole("group", { name: "Summary" })
    await expect(group).toHaveTextContent(summary)
    await expect(canvas.getByText("Finished")).toBeVisible()
  },
}

export const Cancelled: Story = {
  args: {
    state: "cancelled",
    title: "Morning shift briefing",
    startsAt: at("11:30"),
    attendees,
    invitedCount: 12,
    join: { onJoin: fn() },
  },
}

export const Skeleton: Story = {
  args: {
    state: "scheduled",
    startsAt: at("11:30"),
  },
  render: () => <F0MeetingCard.Skeleton />,
}

export const Snapshot: Story = {
  args: {
    state: "scheduled",
    startsAt: at("11:30"),
  },
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex w-[420px] flex-col gap-4">
      <F0MeetingCard
        state="scheduled"
        title="Morning shift briefing"
        startsAt={at("11:30")}
        now={NOW}
        attendees={attendees}
        invitedCount={12}
        join={{ onJoin: fn() }}
      />
      <F0MeetingCard
        state="scheduled"
        title="Morning shift briefing"
        startsAt={at("09:08")}
        now={NOW}
        attendees={attendees}
        invitedCount={12}
        join={{ onJoin: fn() }}
      />
      <F0MeetingCard
        state="inProgress"
        title="Morning shift briefing"
        startsAt={at("08:56")}
        now={NOW}
        attendees={attendees}
        presentCount={attendees.length}
        join={{ onJoin: fn() }}
      />
      <F0MeetingCard
        state="inProgress"
        startsAt={at("08:56")}
        now={NOW}
        attendees={attendees}
        presentCount={attendees.length}
        join={{ onJoin: fn() }}
        compact
      />
      <F0MeetingCard
        state="scheduled"
        title="Morning shift briefing"
        startsAt={at("09:08")}
        now={NOW}
        attendees={attendees}
        invitedCount={12}
        join={{ onJoin: fn() }}
        compact
      />
      <F0MeetingCard
        state="summarizing"
        title="Morning shift briefing"
        startsAt={at("08:00")}
        endsAt={at("08:23")}
        now={NOW}
        attendees={attendees}
        invitedCount={12}
      />
      <F0MeetingCard
        state="finished"
        title="Morning shift briefing"
        startsAt={at("08:00")}
        endsAt={at("08:23")}
        now={NOW}
        attendees={attendees}
        invitedCount={12}
        summary={summary}
        secondaryActions={[{ label: "Transcript", onClick: fn() }]}
      />
      <F0MeetingCard
        state="cancelled"
        title="Morning shift briefing"
        startsAt={at("11:30")}
        now={NOW}
        attendees={attendees}
        invitedCount={12}
      />
      <F0MeetingCard.Skeleton />
      <F0MeetingCard.Skeleton compact />
    </div>
  ),
}
