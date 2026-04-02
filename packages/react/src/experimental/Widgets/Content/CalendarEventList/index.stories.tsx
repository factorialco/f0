import type { Meta, StoryObj } from "@storybook/react-vite"

import { CalendarEventList } from "./index"

const meta: Meta = {
  title: "Kits/Widgets/Content/CalendarEventList",
  component: CalendarEventList,
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "centered",
  },
  args: {
    events: [
      {
        title: "Birthday of Kyriakos Papadopoulos",
        subtitle: "(2 days)",
        description: "02/07 - 04/07",
        color: "orange",
        isPending: false,
        fromDate: new Date(2024, 6, 2),
        toDate: new Date(2024, 6, 4),
      },
      {
        title: "Retrospective",
        subtitle: "(1 day)",
        description: "06/07",
        color: "green",
        isPending: false,
        toDate: new Date(2024, 6, 6),
      },
      {
        title: "Team Building",
        subtitle: "(3 days)",
        description: "10/07 - 12/07",
        color: "blue",
        isPending: false,
        fromDate: new Date(2024, 6, 10),
        toDate: new Date(2024, 6, 12),
      },
    ],
    minSize: 210,
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
