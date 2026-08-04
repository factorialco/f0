import type { Meta, StoryObj } from "@storybook/react-vite"

import { SlotWidget } from "./index"

const meta = {
  title: "Home/SlotWidget",
  component: SlotWidget,
  tags: ["autodocs", "experimental"],
  decorators: [
    (Story) => (
      <div className="max-w-96">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SlotWidget>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Every slot the kit ships a DEFAULT renderer for, stacked in one widget with
 * the dashed divider between consecutive slots: `list`, `indicators` and
 * `status-rows`.
 */
export const AllSlots: Story = {
  args: {
    header: {
      title: "Team",
      count: 7,
      link: { title: "Open", onClick: () => {} },
    },
    slots: [
      {
        visualization: "indicators",
        params: { items: [{ label: "On holidays", content: "6" }] },
      },
      {
        visualization: "status-rows",
        params: {
          rows: [
            {
              id: "in",
              title: "Clocked in",
              subtitle: "4 people",
              alert: "positive",
              avatars: [
                { firstName: "Ada", lastName: "Lovelace" },
                { firstName: "Alan", lastName: "Turing" },
              ],
            },
            {
              id: "away",
              title: "Away",
              subtitle: "2 people",
              alert: "warning",
              avatars: [{ firstName: "Grace", lastName: "Hopper" }],
            },
          ],
        },
      },
      {
        visualization: "list",
        params: {
          showAllItems: true,
          items: [
            { id: "1", title: "Design sync", description: "Today · 10:00" },
            { id: "2", title: "All hands", description: "Tomorrow · 16:00" },
          ],
        },
      },
    ],
  },
}

/**
 * A BESPOKE slot: no default renderer ships for `clock-in`, so it comes from
 * the `slotRenderers` prop. An unknown visualization without a renderer shows
 * the dashed fallback instead of crashing.
 */
export const BespokeAndFallback: Story = {
  args: {
    header: { title: "Attendance" },
    slots: [
      { visualization: "clock-in", params: { variant: "tracker" } },
      { visualization: "not-registered", params: {} },
    ],
    slotRenderers: {
      "clock-in": (params) => (
        <div className="rounded-md bg-f1-background-secondary p-3 text-f1-foreground-secondary">
          {`Clock-in (${(params as { variant: string }).variant}) — bespoke renderer, owns its data`}
        </div>
      ),
    },
  },
}
