import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
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
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof meta>

const Card = ({ candidate }: { candidate: Candidate }) => (
  <div className="flex w-80 flex-col gap-1 rounded-xl border border-solid border-f1-border-secondary bg-f1-background p-5 shadow-md">
    <span className="text-lg font-semibold text-f1-foreground">
      {candidate.name}
    </span>
    <span className="text-f1-foreground-secondary">{candidate.headline}</span>
  </div>
)

const Demo = () => {
  const [decisions, setDecisions] = useState<
    { name: string; direction: SwipeDirection }[]
  >([])

  const deck = useSwipeDeck<Candidate>({
    items: candidates,
    getItemId: (candidate) => candidate.id,
    onDecide: ({ item, direction }) =>
      setDecisions((previous) => [...previous, { name: item.name, direction }]),
    onUndo: () => setDecisions((previous) => previous.slice(0, -1)),
  })

  return (
    <div className="flex w-96 flex-col items-center gap-6">
      <F0SwipeDeck
        deck={deck}
        renderCard={(candidate) => <Card candidate={candidate} />}
        empty={
          <span className="text-f1-foreground-secondary">
            Every candidate reviewed
          </span>
        }
      />
      <ul className="flex w-full flex-col gap-1 text-f1-foreground-secondary">
        {decisions.map((decision) => (
          <li key={decision.name}>
            {decision.direction === "right" ? "Invited" : "Discarded"}{" "}
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
  render: () => <Demo />,
}
