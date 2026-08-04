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
 * Every DEFAULT slot, stacked in one widget with the dashed divider between
 * consecutive slots: `indicators`, `avatar-list`, `status-rows`,
 * `simple-line-list`, `inbox-list` and `event-list`.
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
        visualization: "avatar-list",
        params: {
          avatars: [
            { firstName: "Ada", lastName: "Lovelace" },
            { firstName: "Alan", lastName: "Turing" },
            { firstName: "Grace", lastName: "Hopper" },
          ],
          max: 3,
        },
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
        visualization: "simple-line-list",
        params: {
          showAllItems: true,
          items: [
            { id: "1", title: "Barcelona", count: 3, href: "/positions/bcn" },
            { id: "2", title: "Madrid", count: 2, href: "/positions/mad" },
          ],
        },
      },
      {
        visualization: "inbox-list",
        params: {
          showAllItems: true,
          items: [
            {
              id: "1",
              module: "communities",
              title: "Deploy 2026.7.3 is live 🚀",
              subtitle: "8:47",
              href: "/posts/1",
            },
            {
              id: "2",
              module: "communities",
              title: "Summer office hours ☀️",
              subtitle: "Jul 18",
              href: "/posts/2",
            },
          ],
        },
      },
      {
        visualization: "event-list",
        params: {
          showAllItems: true,
          events: [
            {
              title: "Company holiday",
              subtitle: "2 days off",
              description:
                "Offices closed Thursday and Friday for the summer break.",
              isPending: false,
              color: "#10B981",
              fromDate: new Date(2026, 6, 30),
              toDate: new Date(2026, 6, 31),
            },
            {
              title: "Monthly all-hands",
              subtitle: "Q3 roadmap update",
              description: "Q3 roadmap and hiring update — bring questions.",
              isPending: false,
              color: "#6366F1",
              fromDate: new Date(2026, 7, 7),
            },
          ],
        },
      },
    ],
  },
}

/**
 * The BESPOKE slots the Home uses (no default renderer ships for them — they
 * come from the `slotRenderers` prop, exactly as `NewHomeLayout` passes them):
 * `clock-in` and `carousel`. An unknown visualization without a renderer shows
 * the dashed fallback instead of crashing.
 */
export const BespokeAndFallback: Story = {
  args: {
    header: { title: "Attendance" },
    slots: [
      { visualization: "clock-in", params: { variant: "tracker" } },
      { visualization: "carousel", params: { kind: "celebrations" } },
      { visualization: "not-registered", params: {} },
    ],
    slotRenderers: {
      "clock-in": (params) => (
        <div className="rounded-md bg-f1-background-secondary p-3 text-f1-foreground-secondary">
          {`Clock-in (${(params as { variant: string }).variant}) — bespoke renderer, owns its data`}
        </div>
      ),
      carousel: () => (
        <div className="flex gap-3 overflow-x-auto">
          {["🎂 Ada — birthday", "🎉 Alan — 2y", "👋 Grace — 1st day"].map(
            (c) => (
              <div
                key={c}
                className="shrink-0 rounded-lg border border-solid border-f1-border p-3 text-f1-foreground"
              >
                {c}
              </div>
            )
          )}
        </div>
      ),
    },
  },
}
