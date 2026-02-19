import type { Meta, StoryObj } from "@storybook/react-vite"

import { CategoryBarSection } from "./index"

const meta: Meta<typeof CategoryBarSection> = {
  title: "Profile/CategoryBarSection",
  component: CategoryBarSection,
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-[348px]">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof CategoryBarSection>

export const Default: Story = {
  args: {
    title: "121h 04m",
    subtitle: "+3h 05m",
    data: [
      {
        name: "Achieved",
        value: 90,
      },
      {
        name: "Needs attention",
        value: 10,
        color: "#FF9153",
      },
    ],
    legend: true,
  },
}

export const WithHelpText: Story = {
  args: {
    title: "2%",
    data: [
      {
        name: "Progress 1",
        value: 12,
      },
      {
        name: "Progress 2",
        value: 100,
        color: "#25253D1A",
      },
    ],
    helpText: "Expected progress: 70%",
  },
}
