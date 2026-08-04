import type { Meta, StoryObj } from "@storybook/react-vite"

import { type ReactNode } from "react"

import { F0Icon } from "@/components/F0Icon"
import { ChevronDown } from "@/icons/app"

// Illustrative-only story for the AI Cocreation "Phases" docs page. It renders a
// compact flow diagram (not the full-screen mock) so it can be embedded inline
// via <Canvas> in phases.mdx. Hidden from the sidebar; the page itself is the
// manual MDX, so opt out of the globally enabled autodocs.
const meta = {
  title: "AI Cocreation/Phases",
  tags: ["!autodocs"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

// A downward connector between nodes, with an optional caption on the edge.
function Arrow({ caption }: { caption?: string }) {
  return (
    <div className="flex flex-col items-center gap-1 py-1.5 text-f1-foreground-secondary">
      <div className="h-4 w-px bg-f1-border dark:bg-f1-border-secondary" />
      <span aria-hidden="true" className="-mt-2">
        <F0Icon icon={ChevronDown} size="sm" />
      </span>
      {caption ? <span className="text-xs italic">{caption}</span> : null}
    </div>
  )
}

// One of the three numbered phase containers.
function PhaseBox({
  n,
  title,
  children,
}: {
  n: number
  title: string
  children: ReactNode
}) {
  return (
    <div className="w-full rounded-xl border border-solid border-f1-border bg-f1-background p-4 dark:border-f1-border-secondary">
      <div className="mb-2 flex items-center gap-2">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-f1-background-secondary text-sm font-semibold text-f1-foreground dark:bg-f1-background-tertiary dark:text-f1-foreground-inverse">
          {n}
        </span>
        <span className="text-base font-semibold text-f1-foreground dark:text-f1-foreground-inverse">
          {title}
        </span>
      </div>
      {children}
    </div>
  )
}

// A neutral inner step (e.g. the clarifying questions).
function StepNode({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg border border-solid border-f1-border bg-f1-background px-3 py-2 text-sm text-f1-foreground dark:border-f1-border-secondary dark:text-f1-foreground-inverse">
      {children}
    </div>
  )
}

// One of the two entry approaches, shown side by side inside Chat.
function EntryCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex-1 rounded-lg border border-solid border-f1-border bg-f1-background-secondary p-3 dark:border-f1-border-secondary dark:bg-f1-background-tertiary">
      <div className="text-sm font-medium text-f1-foreground dark:text-f1-foreground-inverse">
        {title}
      </div>
      <div className="mt-1 text-xs text-f1-foreground-secondary">{desc}</div>
    </div>
  )
}

// A human-in-the-loop decision point — accented to stand apart from the neutral
// steps, since this is where the user approves what the AI writes.
function GateNode({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-lg border-2 border-solid border-f1-border-selected bg-f1-background px-3 py-2">
      <div className="text-[10px] font-semibold uppercase tracking-wide text-f1-foreground-selected">
        Human decides
      </div>
      <div className="text-sm font-semibold text-f1-foreground dark:text-f1-foreground-inverse">
        {title}
      </div>
      <div className="mt-0.5 text-xs text-f1-foreground-secondary">{desc}</div>
    </div>
  )
}

/**
 * A top-to-bottom map of the cocreation flow: the three phases (Collection →
 * Chat → Split), the two ways Chat can open (welcome screen vs. guided chat),
 * and the human-in-the-loop gates where the user approves what the AI writes
 * (the initial draft, then every later edit). Embedded in the Phases docs via
 * <Canvas>. Marked role="img" with a text summary — the phase table on the same
 * page is the full text equivalent, so screen readers get the gist, not a
 * confusing node-by-node traversal.
 */
export const PhaseFlow: Story = {
  tags: ["no-sidebar"],
  render: () => (
    <div
      role="img"
      aria-label="AI Cocreation runs top to bottom through three phases. Phase 1, Collection: the surface the user starts on; opening the AI moves to Chat. Phase 2, Chat: the user describes what to build through either a welcome screen or a guided chat, answers clarifying questions, then approves a draft-confirmation gate before the AI writes anything. Phase 3, Split: the canvas and chat sit side by side, and every further edit is proposed and confirmed."
      className="mx-auto flex w-full max-w-[560px] flex-col items-stretch"
    >
      <PhaseBox n={1} title="Collection">
        <p className="m-0 text-sm text-f1-foreground-secondary">
          The surface the user starts on — a data collection or page. AI
          Cocreation is one trigger away.
        </p>
      </PhaseBox>

      <Arrow caption="Open the AI · One switch or Create" />

      <PhaseBox n={2} title="Chat">
        <p className="m-0 mb-3 text-sm text-f1-foreground-secondary">
          Describe what to build. The chat opens one of two ways:
        </p>
        <div className="flex gap-3">
          <EntryCard
            title="Welcome Screen"
            desc="Entry-point cards + starter suggestions"
          />
          <EntryCard
            title="Guided Chat"
            desc="One clarifying question up front"
          />
        </div>
        <Arrow />
        <StepNode>Clarifying questions narrow the intent</StepNode>
        <Arrow />
        <GateNode
          title="Draft confirmation"
          desc="Apply drafts the questions · Discard leaves it blank"
        />
      </PhaseBox>

      <Arrow caption="On Apply (or a chosen template)" />

      <PhaseBox n={3} title="Split">
        <p className="m-0 mb-3 text-sm text-f1-foreground-secondary">
          The canvas fills the center; the chat docks alongside it.
        </p>
        <GateNode
          title="Propose → confirm → apply, and repeat"
          desc="Every further edit is an explicit accept / reject"
        />
      </PhaseBox>
    </div>
  ),
}
