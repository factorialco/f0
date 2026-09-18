import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { expect, userEvent, within } from "storybook/test"
import { F0Button } from "@/components/F0Button"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { F0SwipeDeck } from "../F0SwipeDeck"
import { useSwipeDeck } from "../hooks/useSwipeDeck"
import type { SwipeDirection } from "../types"

type Candidate = {
  id: string
  name: string
  headline: string
}

const candidates: Candidate[] = [
  {
    id: "1",
    name: "Jorge Manrique",
    headline: "Design Systems Lead at Wallapop",
  },
  { id: "2", name: "Leire Etxeberria", headline: "Product Designer at Glovo" },
  { id: "3", name: "Marco Bellini", headline: "UX/UI Designer at Satispay" },
]

const meta: Meta = {
  title: "F0SwipeDeck",
  component: F0SwipeDeck,
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "padded",
    a11y: { test: "error" },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const Card = ({ candidate }: { candidate: Candidate }) => (
  <div className="flex w-80 flex-col gap-3 rounded-xl border border-solid border-f1-border-secondary bg-f1-background p-5 shadow-md">
    <div className="flex flex-col gap-1">
      <span className="text-lg font-semibold text-f1-foreground">
        {candidate.name}
      </span>
      <span className="text-f1-foreground-secondary">{candidate.headline}</span>
    </div>
    <F0Button
      variant="outline"
      label="See full evaluation report"
      data-swipe-ignore
      onClick={() => undefined}
    />
  </div>
)

const Demo = ({ items = candidates }: { items?: Candidate[] }) => {
  const [decisions, setDecisions] = useState<
    { id: string; name: string; direction: SwipeDirection }[]
  >([])

  const deck = useSwipeDeck<Candidate>({
    items,
    getItemId: (candidate) => candidate.id,
    onDecide: ({ item, direction }) =>
      setDecisions((previous) => [
        ...previous,
        { id: item.id, name: item.name, direction },
      ]),
    onUndo: () => setDecisions((previous) => previous.slice(0, -1)),
  })

  return (
    <div className="flex w-full flex-col items-center gap-6">
      <F0SwipeDeck
        deck={deck}
        renderCard={(candidate) => <Card candidate={candidate} />}
        empty={
          <span className="text-f1-foreground-secondary">
            Every candidate reviewed
          </span>
        }
      />
      <div className="flex gap-2">
        <F0Button variant="outline" label="Skip" onClick={deck.swipeLeft} />
        <F0Button
          variant="outline"
          label="Undo"
          disabled={!deck.canUndo}
          onClick={deck.undo}
        />
        <F0Button label="Invite" onClick={deck.swipeRight} />
      </div>
      <ul className="flex w-full flex-col gap-1 text-f1-foreground-secondary">
        {decisions.map((decision) => (
          <li key={decision.id}>
            {decision.direction === "right" ? "Invited" : "Skipped"}{" "}
            {decision.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

/**
 * Drag a card past the threshold — or flick it — to decide it. The deck reports
 * the decision and moves to the next candidate.
 */
export const Default: Story = {
  parameters: withSnapshot({}),
  render: () => <Demo />,
}

/**
 * Every decision is also reachable without the gesture: the deck is driven by
 * `useSwipeDeck`, so buttons and a drag run the same code path, and `undo`
 * puts the last candidate back on top.
 */
export const DecidedWithoutDragging: Story = {
  render: () => <Demo />,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    await step("Invite the first candidate", async () => {
      await userEvent.click(canvas.getByRole("button", { name: "Invite" }))
      await expect(await canvas.findByText("Leire Etxeberria")).toBeVisible()
      await expect(canvas.getByText("Invited Jorge Manrique")).toBeVisible()
    })

    await step("Undo puts the candidate back on top", async () => {
      await userEvent.click(canvas.getByRole("button", { name: "Undo" }))
      await expect(await canvas.findByText("Jorge Manrique")).toBeVisible()
      await expect(
        canvas.queryByText("Invited Jorge Manrique")
      ).not.toBeInTheDocument()
    })
  },
}

/**
 * Once every candidate has been decided the deck renders the `empty` slot.
 */
export const Empty: Story = {
  parameters: withSnapshot({}),
  render: () => <Demo items={[]} />,
}
