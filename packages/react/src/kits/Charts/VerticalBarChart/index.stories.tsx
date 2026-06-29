import { Meta } from "@storybook/react-vite"

import { fakePeople } from "@/mocks/people"

import { VerticalBarChart } from "./index"

const meta: Meta = {
  title: "Charts/VerticalBarChart",
  component: VerticalBarChart,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="h-96 w-full">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    showRatio: {
      control: {
        type: "boolean",
      },
    },
  },
}

export default meta

const hiresDataConfig = {
  hires: {
    label: "Successful hires",
  },
}

export const Default: Meta<typeof VerticalBarChart<typeof hiresDataConfig>> = {
  args: {
    dataConfig: hiresDataConfig,
    data: [
      { label: fakePeople.nadia.fullName, values: { hires: 28 } },
      { label: fakePeople.aaron.fullName, values: { hires: 25 } },
      { label: fakePeople.iris.fullName, values: { hires: 23 } },
      { label: fakePeople.greta.fullName, values: { hires: 21 } },
      { label: fakePeople.ravi.fullName, values: { hires: 19 } },
      { label: fakePeople.sofia.fullName, values: { hires: 18 } },
      { label: fakePeople.yuki.fullName, values: { hires: 16 } },
      { label: fakePeople.caleb.fullName, values: { hires: 15 } },
      { label: fakePeople.hana.fullName, values: { hires: 14 } },
      { label: fakePeople.noor.fullName, values: { hires: 12 } },
    ],
    yAxis: {
      hide: false,
      width: 120,
    },
    xAxis: {
      hide: false,
      tickFormatter: (value: string) => `${value} hires`,
    },
    label: true,
  },
}

const hiresBySeniorityDataConfig = {
  junior: {
    label: "Junior hires",
  },
  senior: {
    label: "Senior hires",
  },
}

export const MultipleBars: Meta<
  typeof VerticalBarChart<typeof hiresBySeniorityDataConfig>
> = {
  args: {
    dataConfig: hiresBySeniorityDataConfig,
    data: [
      { label: fakePeople.nadia.fullName, values: { junior: 18, senior: 10 } },
      { label: fakePeople.aaron.fullName, values: { junior: 15, senior: 10 } },
      { label: fakePeople.iris.fullName, values: { junior: 14, senior: 9 } },
      { label: fakePeople.greta.fullName, values: { junior: 12, senior: 9 } },
      { label: fakePeople.ravi.fullName, values: { junior: 11, senior: 8 } },
      { label: fakePeople.sofia.fullName, values: { junior: 10, senior: 8 } },
      { label: fakePeople.yuki.fullName, values: { junior: 9, senior: 7 } },
      { label: fakePeople.caleb.fullName, values: { junior: 8, senior: 7 } },
      { label: fakePeople.hana.fullName, values: { junior: 8, senior: 6 } },
      { label: fakePeople.noor.fullName, values: { junior: 7, senior: 5 } },
    ],
    yAxis: {
      hide: false,
      width: 120,
    },
    xAxis: {
      hide: false,
      tickFormatter: (value: string) => `${value} hires`,
    },
  },
}

const dataConfig = {
  value: {
    label: "Value",
  },
}

export const WithRatios: Meta<typeof VerticalBarChart<typeof dataConfig>> = {
  args: {
    dataConfig: dataConfig,
    data: [
      { label: "Yes", values: { value: 140 } },
      { label: "No", values: { value: 60 } },
    ],
    label: true,
    showRatio: true,
    valueFormatter: (value: string | number | undefined) => `${value} pers.`,
  },
}
