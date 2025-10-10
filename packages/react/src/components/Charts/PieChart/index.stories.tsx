import type { Meta } from "@storybook/react-vite"

import { PieChart } from "./index"

const meta: Meta<typeof PieChart> = {
  component: PieChart,
  title: "Charts/PieChart",
  parameters: {
    a11y: {
      config: {
        rules: [{ id: "svg-img-alt", enabled: false }],
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="h-96 w-full">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof PieChart>

export default meta

const genderSplitDataConfig = {
  male: {
    label: "Male",
  },
  female: {
    label: "Female",
  },
}

export const Default: Meta<typeof PieChart> = {
  args: {
    dataConfig: genderSplitDataConfig,
    data: [
      { label: "male", value: 8 },
      { label: "female", value: 2 },
    ],
    overview: {
      label: "Total employees",
      number: 14,
    },
    tickFormatter: (value: string) => value,
  },
}
