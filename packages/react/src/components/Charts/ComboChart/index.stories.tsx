import { Meta } from "@storybook/react-vite"
import { ComboChart } from "./index"

const meta: Meta = {
  title: "Charts/ComboChart",
  component: ComboChart,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-100 h-52">
        <Story />
      </div>
    ),
  ],
}

export default meta

const teamsDataConfig = {
  headcount: {
    label: "Headcount",
  },
}

export const Default: Meta<typeof ComboChart<typeof teamsDataConfig>> = {
  args: {
    dataConfig: teamsDataConfig,
    data: [
      { label: "Marketing", values: { headcount: 8 } },
      { label: "Sales", values: { headcount: 100 } },
      { label: "Engineering", values: { headcount: 56 } },
      { label: "Product", values: { headcount: 32 } },
      { label: "Design", values: { headcount: 16 } },
      { label: "Finance", values: { headcount: 12 } },
      { label: "Legal", values: { headcount: 5 } },
    ],
    xAxis: {
      hide: false,
      tickFormatter: (value: string) => value,
    },
    yAxis: {
      hide: false,
      tickFormatter: (value: string) => value,
    },
  },
}
