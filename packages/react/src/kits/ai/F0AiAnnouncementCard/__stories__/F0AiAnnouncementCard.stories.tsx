import type { Meta, StoryObj } from "@storybook/react-vite"

import { expect, fn, userEvent, within } from "storybook/test"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0AiAnnouncementCard } from "../F0AiAnnouncementCard"

const MEDIA_URL =
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"

const meta = {
  component: F0AiAnnouncementCard,
  title: "AI/AiAnnouncementCard",
  parameters: {
    layout: "padded",
    // Held to the stable bar from the start: a11y violations fail CI rather
    // than only showing in the test UI (the repo default is `todo`).
    a11y: { test: "error" },
  },
  // `!autodocs` because this component ships a hand-written MDX page; autodocs
  // is enabled globally, so it has to be opted out of explicitly.
  tags: ["experimental", "!autodocs"],
  // The card is built for narrow surfaces, so every story is framed at the
  // width it is designed against rather than the full canvas.
  decorators: [
    (Story) => (
      <div className="w-[308px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof F0AiAnnouncementCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: "Submit expenses in seconds",
    description:
      "Upload a receipt and One fills in the rest for you, then files it to the right category.",
    mediaUrl: MEDIA_URL,
    primaryAction: { label: "Try it out", onClick: fn() },
    secondaryAction: { label: "Not now", onClick: fn() },
    onClose: fn(),
  },
  // The flow the card exists for: read it, then take the action. Deliberately
  // stops short of dismissing — `play` runs on mount, so closing here would
  // leave the story and its autodocs entry showing empty space.
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement)

    await expect(canvas.getByText(args.title)).toBeVisible()
    await expect(canvas.getByRole("button", { name: "Close" })).toBeVisible()

    await userEvent.click(canvas.getByRole("button", { name: "Try it out" }))
    await expect(args.primaryAction?.onClick).toHaveBeenCalledOnce()

    // Clicking leaves the button focused, and this story is the one embedded in
    // the docs — without this, every reader sees the focus ring as if it were
    // the button's own border.
    ;(document.activeElement as HTMLElement | null)?.blur()
  },
}

/** Media is optional — a text-only announcement is still a valid one. */
export const WithoutMedia: Story = {
  args: {
    title: "One can draft your reviews",
    description:
      "Ask for a first draft from the feedback you have already collected.",
    primaryAction: { label: "Show me", onClick: fn() },
    onClose: fn(),
  },
}

/** The description clamps at two lines so the actions never get pushed away. */
export const LongDescription: Story = {
  args: {
    ...Default.args,
    description:
      "Upload a receipt and One fills in the rest for you, then files it to the right category, matches it against the policy for your legal entity, flags anything that needs a manager's approval, and keeps the original attached for the audit trail.",
  },
}

/** No dismiss control is rendered when `onClose` is omitted. */
export const NotDismissible: Story = {
  args: {
    ...Default.args,
    onClose: undefined,
  },
}

export const Loading: Story = {
  args: {
    ...Default.args,
    isLoading: true,
  },
}

/**
 * `children` land in the actions row, for consumers whose buttons are decided
 * at runtime rather than at build time — authored content, a feature flag, a
 * permission check.
 */
export const WithCustomActions: Story = {
  args: {
    title: "Submit expenses in seconds",
    description:
      "Upload a receipt and One fills in the rest for you, then files it to the right category.",
    mediaUrl: MEDIA_URL,
    onClose: fn(),
    children: (
      <button type="button" className="text-base text-f1-foreground-secondary">
        A consumer-owned button
      </button>
    ),
  },
}

/**
 * Single consolidated visual-regression story — Chromatic bills per snapshot,
 * so the states that differ visually are stacked into one.
 */
export const Snapshot: Story = {
  args: Default.args,
  parameters: withSnapshot({ layout: "padded" }),
  render: (args) => (
    <div className="flex flex-col gap-6">
      <F0AiAnnouncementCard {...args} />
      <F0AiAnnouncementCard {...args} mediaUrl={undefined} />
      <F0AiAnnouncementCard {...args} isLoading />
    </div>
  ),
}
