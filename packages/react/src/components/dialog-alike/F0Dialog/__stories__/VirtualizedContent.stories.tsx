import type { Meta, StoryObj } from "@storybook/react-vite"

import { VirtualList } from "@/lib/VirtualList"

import { F0Dialog } from "../index"

/**
 * Hundreds of rows in a dialog. The body scrolls on its own, so a long list
 * WORKS without doing anything — but every row stays in the DOM, and that is
 * what gets slow. Virtualizing keeps only the visible ones.
 */
const meta = {
  title: "Dialog",
  component: F0Dialog,
  tags: ["experimental"],
} satisfies Meta<typeof F0Dialog>

export default meta
type Story = StoryObj<typeof meta>

const ROW_COUNT = 5000
const ROW_HEIGHT = 56

/** The list's own height: it is the scroller, so it needs one. */
const LIST_HEIGHT = 360

const ROWS = Array.from({ length: ROW_COUNT }, (_, index) => ({
  title: `Expense request #${index + 1}`,
  description: `Submitted ${((index % 28) + 1).toString().padStart(2, "0")} Aug 2026`,
}))

/**
 * A VIRTUALIZED body: 5.000 rows, a couple of dozen nodes.
 *
 * Two things make it work, and both are load-bearing:
 *
 * - `disableContentPadding`, so the list reaches the dialog's edges and its
 *   scrollbar sits where the dialog's own would have been.
 * - a `height` on the list. `VirtualList` IS the scroller — it decides what to
 *   draw from how far down it is scrolled — so it cannot size itself to its
 *   content the way a plain block does. Keep that height at or under the room
 *   the body has, or the dialog scrolls the list AND the list scrolls itself.
 */
export const VirtualizedContent: Story = {
  args: {
    children: null,
    isOpen: true,
    onClose: () => {},
    title: "Approve 5.000 expenses",
  },
  parameters: { docs: { story: { height: "520px" } } },
  render: (args) => (
    <F0Dialog {...args} disableContentPadding>
      <VirtualList
        height={LIST_HEIGHT}
        itemCount={ROW_COUNT}
        itemSize={ROW_HEIGHT}
        renderer={({ index }) => {
          const row = ROWS[index]
          return (
            <div className="flex h-full flex-col justify-center gap-0.5 border-b border-solid border-f1-border-secondary px-4">
              <span className="text-f1-foreground">{row.title}</span>
              <span className="text-f1-foreground-secondary">
                {row.description}
              </span>
            </div>
          )
        }}
      />
    </F0Dialog>
  ),
}
