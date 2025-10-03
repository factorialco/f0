import type { Meta } from "@storybook/react-vite"

import { AreaChart } from "./index"

const meta: Meta = {
  title: "Charts/AreaChart",
  component: AreaChart,
  tags: ["autodocs"],
  argTypes: {
    blurArea: {
      control: "select",
      options: [undefined, "l", "r", "lr"],
    },
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

const headcountDataConfig = {
  headcount: {
    label: "Total headcount",
  },
}

export const Default: Meta<typeof AreaChart<typeof headcountDataConfig>> = {
  args: {
    dataConfig: headcountDataConfig,
    xAxis: {
      hide: false,
      tickFormatter: (value: string) => value.slice(0, 3),
    },
    yAxis: {
      hide: false,
      tickFormatter: (value: string) => value,
    },
    data: [
      { label: "January", values: { headcount: 170 } },
      { label: "February", values: { headcount: 200 } },
      { label: "March", values: { headcount: 256 } },
      { label: "April", values: { headcount: 301 } },
      { label: "May", values: { headcount: 345 } },
      { label: "June", values: { headcount: 308 } },
    ],
  },
}

const headcountProjectionDataConfig = {
  actual: {
    label: "Actual headcount",
  },
  projected: {
    label: "Projected headcount",
    dashed: true,
  },
}

export const DashedArea: Meta<
  typeof AreaChart<typeof headcountProjectionDataConfig>
> = {
  args: {
    dataConfig: headcountProjectionDataConfig,
    xAxis: {
      hide: false,
      tickFormatter: (value: string) => value.slice(0, 3),
    },
    yAxis: {
      hide: false,
      tickFormatter: (value: string) => value,
    },
    data: [
      { label: "January", values: { actual: 170, projected: 220 } },
      { label: "February", values: { actual: 200, projected: 245 } },
      { label: "March", values: { actual: 256, projected: 270 } },
      { label: "April", values: { actual: 301, projected: 295 } },
      { label: "May", values: { actual: 345, projected: 320 } },
      { label: "June", values: { actual: 308, projected: 345 } },
    ],
  },
}

const teamHeadcountDataConfig = {
  design: {
    label: "Design",
  },
  product: {
    label: "Product",
  },
  engineering: {
    label: "Engineering",
  },
}

export const MultipleAreas: Meta<
  typeof AreaChart<typeof teamHeadcountDataConfig>
> = {
  args: {
    dataConfig: teamHeadcountDataConfig,
    xAxis: {
      hide: false,
      tickFormatter: (value: string) => value.slice(0, 3),
    },
    yAxis: {
      hide: false,
      tickFormatter: (value: string) => value,
    },
    data: [
      {
        label: "January",
        values: { design: 12, product: 28, engineering: 65 },
      },
      {
        label: "February",
        values: { design: 14, product: 32, engineering: 72 },
      },
      {
        label: "March",
        values: { design: 16, product: 36, engineering: 78 },
      },
      {
        label: "April",
        values: { design: 18, product: 41, engineering: 95 },
      },
      {
        label: "May",
        values: { design: 20, product: 58, engineering: 102 },
      },
      {
        label: "June",
        values: { design: 19, product: 50, engineering: 98 },
      },
    ],
  },
}
