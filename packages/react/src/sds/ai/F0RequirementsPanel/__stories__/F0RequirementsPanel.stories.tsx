import { Meta, StoryObj } from "@storybook/react-vite"
import { useMemo, useState } from "react"

import { F0Button } from "@/components/F0Button"

import { F0RequirementsPanel } from "../F0RequirementsPanel"
import type { RequirementItem } from "../types"

const meta = {
  title: "AI/F0RequirementsPanel",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta

export default meta

type Story = StoryObj

/**
 * Card surface so the panel reads like it does in One — the requirements
 * checklist inside the chat-input card.
 */
const ChatInputSurface = ({ children }: { children: React.ReactNode }) => (
  <div className="w-[400px] overflow-hidden rounded-2xl border border-solid border-f1-border bg-f1-background pb-2 shadow-md">
    {children}
  </div>
)

// The chairs intake from the One conversation, mid-flow.
const CHAIRS: RequirementItem[] = [
  {
    id: "what",
    label: "What & quantity",
    value: "50 chairs · Barcelona",
    status: "done",
  },
  { id: "cost", label: "Estimated cost", status: "current" },
  { id: "vendor", label: "Vendor", status: "pending", optional: true },
]

/** A snapshot mid-conversation: one done, one being asked, one optional pending. */
export const Default: Story = {
  render: () => (
    <ChatInputSurface>
      <F0RequirementsPanel requirements={{ items: CHAIRS }} />
    </ChatInputSurface>
  ),
}

/** Everything gathered — the counter turns positive and every row is checked. */
export const AllDone: Story = {
  render: () => (
    <ChatInputSurface>
      <F0RequirementsPanel
        requirements={{
          items: [
            {
              id: "what",
              label: "What & quantity",
              value: "50 chairs · Barcelona",
              status: "done",
            },
            {
              id: "cost",
              label: "Estimated cost",
              value: "€2,000",
              status: "done",
            },
            {
              id: "vendor",
              label: "Vendor",
              value: "Skipped",
              status: "done",
              optional: true,
            },
          ],
        }}
      />
    </ChatInputSurface>
  ),
}

// ---------------------------------------------------------------------------
// Interactive: walk the flow and watch each requirement tick to done.
// ---------------------------------------------------------------------------

const SCRIPT: Array<{
  id: string
  label: string
  value: string
  optional?: boolean
}> = [
  { id: "what", label: "What & quantity", value: "50 chairs · Barcelona" },
  { id: "cost", label: "Estimated cost", value: "€2,000" },
  { id: "vendor", label: "Vendor", value: "Amazon", optional: true },
]

export const Interactive: Story = {
  render: () => {
    const [answered, setAnswered] = useState(0)

    const items = useMemo<RequirementItem[]>(
      () =>
        SCRIPT.map((req, i) => ({
          id: req.id,
          label: req.label,
          optional: req.optional,
          value: i < answered ? req.value : undefined,
          status:
            i < answered ? "done" : i === answered ? "current" : "pending",
        })),
      [answered]
    )

    const allDone = answered >= SCRIPT.length

    return (
      <div className="flex w-[400px] flex-col gap-3">
        <ChatInputSurface>
          <F0RequirementsPanel requirements={{ items }} />
        </ChatInputSurface>
        <div className="flex items-center gap-2">
          <F0Button
            label={
              allDone
                ? "All requirements gathered"
                : "Answer current requirement"
            }
            disabled={allDone}
            onClick={() => setAnswered((n) => Math.min(n + 1, SCRIPT.length))}
          />
          <F0Button
            variant="outline"
            label="Reset"
            onClick={() => setAnswered(0)}
          />
        </div>
      </div>
    )
  },
}
