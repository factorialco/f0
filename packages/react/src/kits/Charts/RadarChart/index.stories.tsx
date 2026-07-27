import type { Meta, StoryObj } from "@storybook/react-vite"

import { RadarChart } from "./index"

const meta: Meta = {
  title: "Charts/RadarChart",
  component: RadarChart,
  tags: ["autodocs", "stable", "no-sidebar"],
  decorators: [
    (Story) => (
      <div className="h-80">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

const skillsDataConfig = {
  alice: { label: "Alice" },
  bob: { label: "Bob" },
  carol: { label: "Carol" },
}

const skillsData = [
  { label: "Communication", values: { alice: 80, bob: 65, carol: 90 } },
  { label: "Technical", values: { alice: 95, bob: 88, carol: 72 } },
  { label: "Leadership", values: { alice: 70, bob: 78, carol: 85 } },
  { label: "Creativity", values: { alice: 85, bob: 60, carol: 92 } },
  { label: "Teamwork", values: { alice: 90, bob: 82, carol: 88 } },
]

export const Default: Story = {
  args: {
    dataConfig: skillsDataConfig,
    data: skillsData,
  },
}

export const WithInitialHiddenSeries: Story = {
  args: {
    dataConfig: skillsDataConfig,
    data: skillsData,
    defaultHiddenSeries: ["carol"],
  },
}

const singleDataConfig = {
  score: { label: "Score" },
}

const singleData = [
  { label: "Speed", values: { score: 78 } },
  { label: "Accuracy", values: { score: 85 } },
  { label: "Endurance", values: { score: 62 } },
  { label: "Agility", values: { score: 90 } },
  { label: "Strength", values: { score: 71 } },
]

export const SingleSeries: Story = {
  args: {
    dataConfig: singleDataConfig,
    data: singleData,
  },
}
