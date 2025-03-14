import type { Meta } from "@storybook/react"
import { RadialProgressChart } from "."

const meta: Meta<typeof RadialProgressChart> = {
  title: "Charts/RadialProgressChart",
  component: RadialProgressChart,
  tags: ["autodocs"],
  args: {
    value: 75,
    max: 100,
  },
  decorators: [
    (Story) => (
      <div className="h-52 w-full">
        <Story />
      </div>
    ),
  ],
}

export default meta

export const Default = {}

export const WithOverview: Meta<typeof RadialProgressChart> = {
  args: {
    value: 75,
    overview: { number: 75, label: "Completed" },
  },
}
