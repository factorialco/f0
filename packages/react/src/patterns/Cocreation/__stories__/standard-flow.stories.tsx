import type { Meta, StoryObj } from "@storybook/react-vite"

import { type ReactNode } from "react"

import { F0CardHorizontal } from "@/experimental/F0CardHorizontal"
import { Check, Cross } from "@/icons/app"

// Illustrative-only stories for the Co-creation "Standard flow" docs page. They
// render compact mocks (not the full-screen flow) so they can be embedded inline
// via <Canvas> in standard-flow.mdx. Hidden from the sidebar; the page itself is
// the manual MDX, so opt out of the globally enabled autodocs.
const meta = {
  title: "Co-creation/Standard flow",
  tags: ["!autodocs"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

// Both the resource cards and the proposal cards are F0CardHorizontal rows that
// share this module avatar, so they line up consistently in the chat and keep
// the status icon / actions aligned on the avatar's centre line (a row with no
// avatar centres differently). See the canonical states in Components / Card
// Horizontal.
const PROPOSAL_AVATAR = { type: "module", module: "engagement" } as const

// A plain assistant line in the mock conversation.
function AssistantLine({ children }: { children: ReactNode }) {
  return (
    <p className="m-0 text-f1-foreground dark:text-f1-foreground-inverse">
      {children}
    </p>
  )
}

// A right-aligned user message bubble in the mock conversation.
function UserLine({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-end">
      <span className="rounded-2xl bg-f1-background-secondary px-4 py-2 text-f1-foreground dark:bg-f1-background-tertiary dark:text-f1-foreground-inverse">
        {children}
      </span>
    </div>
  )
}

/**
 * Mock of the in-chat resource card in its two states, built on `F0CardHorizontal`:
 * the live card carries a module avatar and an Open/Close button; a superseded
 * card — replaced by a newer one for the same resource — drops the button, stops
 * responding to clicks, and fades to 50% opacity while staying in the chat
 * history. Embedded in the Standard flow docs via <Canvas>.
 */
export const ResourceCards: Story = {
  tags: ["no-sidebar"],
  render: () => (
    <div className="mx-auto flex w-full max-w-[520px] flex-col gap-4">
      <AssistantLine>I've created your survey.</AssistantLine>
      {/* Superseded: faded + non-interactive, no action button. */}
      <div className="pointer-events-none opacity-50">
        <F0CardHorizontal
          avatar={PROPOSAL_AVATAR}
          title="Untitled survey"
          description="Survey created in Engagement / Surveys"
        />
      </div>
      <AssistantLine>
        Done — I've added the question to your survey.
      </AssistantLine>
      {/* Active (open in the canvas): the button reads "Close". */}
      <F0CardHorizontal
        avatar={PROPOSAL_AVATAR}
        title="Untitled survey"
        description="Survey updated with your choices."
        primaryAction={{
          label: "Close",
          onClick: () => {},
          variant: "outline",
        }}
      />
    </div>
  ),
}

/**
 * Mock of an in-chat conversation showing the proposal cards in both states:
 * the earlier cards are resolved — accepted keeps its outcome icon, rejected is
 * struck through (`inactive`) and dimmed — and the last card is active, still
 * awaiting the user's accept (✓) / reject (✗). Built on `F0CardHorizontal` so the
 * states match the canonical Components / Card Horizontal stories. Embedded in
 * the Standard flow docs via <Canvas>.
 */
export const HilConversation: Story = {
  tags: ["no-sidebar"],
  render: () => (
    <div className="mx-auto flex w-full max-w-[520px] flex-col gap-4">
      <AssistantLine>
        Good idea — here's a change I'd suggest. Review it below.
      </AssistantLine>
      <F0CardHorizontal
        avatar={PROPOSAL_AVATAR}
        title="Add an open-ended comment question"
        description="A new question at the end of the form"
        status={{ icon: Check, variant: "positive", label: "Accepted" }}
      />
      <UserLine>Can you drop the demographics section?</UserLine>
      <AssistantLine>Here's that change.</AssistantLine>
      <F0CardHorizontal
        avatar={PROPOSAL_AVATAR}
        title="Remove the demographics section"
        description="Drops 4 questions"
        status={{ icon: Cross, variant: "critical", label: "Rejected" }}
        inactive
      />
      <UserLine>Add a rating question instead.</UserLine>
      <AssistantLine>Here's the change — apply it?</AssistantLine>
      <F0CardHorizontal
        avatar={PROPOSAL_AVATAR}
        title="Add a 1–5 satisfaction rating"
        description="A new rating question before the comment"
        rejectAction={{ label: "Discard", onClick: () => {} }}
        confirmAction={{ label: "Apply", onClick: () => {} }}
      />
    </div>
  ),
}
