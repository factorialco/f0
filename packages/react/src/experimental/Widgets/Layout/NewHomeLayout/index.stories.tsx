import type { Meta, StoryObj } from "@storybook/react-vite"

import { NewHomeLayout, type HomeWidgetItem } from "./index"

const rightWidgets: HomeWidgetItem[] = [
  {
    id: "events",
    header: { title: "Events", count: 3 },
    slots: [
      {
        visualization: "list",
        params: {
          showAllItems: true,
          items: [
            { id: "1", title: "Design sync", description: "Today · 10:00" },
            { id: "2", title: "All hands", description: "Tomorrow · 16:00" },
            { id: "3", title: "Team offsite", description: "Fri · all day" },
          ],
        },
      },
    ],
  },
  {
    id: "team-status",
    header: { title: "Team status" },
    slots: [
      {
        visualization: "status-rows",
        params: {
          rows: [
            {
              id: "in",
              title: "Clocked in",
              subtitle: "4 people",
              alert: "positive",
              avatars: [{ firstName: "Ada", lastName: "L" }],
            },
            {
              id: "away",
              title: "Away",
              subtitle: "2 people",
              alert: "warning",
              avatars: [{ firstName: "Guido", lastName: "R" }],
            },
          ],
        },
      },
      {
        // A bespoke slot: no default renderer — supplied via `slotRenderers`.
        visualization: "clock-in",
        params: { variant: "tracker" },
      },
    ],
  },
]

const meta = {
  title: "Widgets/Layout/NewHomeLayout",
  component: NewHomeLayout,
  tags: ["autodocs", "experimental"],
  args: {
    children: undefined,
    rightWidgets,
    slotRenderers: {
      "clock-in": (params) => (
        <div className="rounded-md bg-f1-background-secondary p-3 text-f1-foreground-secondary">
          {`Clock-in (${(params as { variant: string }).variant}) — bespoke renderer`}
        </div>
      ),
    },
  },
  parameters: {},
} satisfies Meta<typeof NewHomeLayout>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithMainContent: Story = {
  args: {
    children: (
      <div className="rounded-lg bg-f1-background-secondary p-6 text-f1-foreground">
        Greeting / clock-in hero goes here (freeform main content)
      </div>
    ),
  },
}
