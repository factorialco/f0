import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0DataChart } from "../index"
import { ChartDecorator } from "./decorators"

const meta = {
  component: F0DataChart,
  title: "Kits/F0DataChart/Pie",
  tags: ["autodocs", "experimental"],
  decorators: [ChartDecorator],
} satisfies Meta<typeof F0DataChart>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: "pie",
    series: {
      name: "Headcount by Department",
      data: [
        { value: 120, name: "Engineering" },
        { value: 45, name: "Product" },
        { value: 60, name: "Sales" },
        { value: 30, name: "HR" },
        { value: 25, name: "Marketing" },
      ],
    },
  },
}

export const Donut: Story = {
  args: {
    type: "pie",
    innerRadius: 50,
    series: {
      name: "Contract Types",
      data: [
        { value: 180, name: "Indefinido" },
        { value: 45, name: "Temporal" },
        { value: 20, name: "Prácticas" },
        { value: 15, name: "Freelance" },
      ],
    },
  },
}

export const CustomColors: Story = {
  args: {
    type: "pie",
    series: {
      name: "Gender Distribution",
      data: [
        { value: 145, name: "Women", color: "barbie" },
        { value: 130, name: "Men", color: "malibu" },
        { value: 5, name: "Non-binary", color: "purple" },
      ],
    },
  },
}

export const WithPercentage: Story = {
  args: {
    type: "pie",
    showPercentage: true,
    series: {
      name: "Time Off Reasons",
      data: [
        { value: 200, name: "Vacation" },
        { value: 80, name: "Sick Leave" },
        { value: 30, name: "Personal" },
        { value: 15, name: "Parental" },
        { value: 10, name: "Other" },
      ],
    },
  },
}

export const NoLegend: Story = {
  args: {
    type: "pie",
    showLegend: false,
    series: {
      name: "Seniority",
      data: [
        { value: 60, name: "Junior" },
        { value: 100, name: "Mid" },
        { value: 80, name: "Senior" },
        { value: 30, name: "Lead" },
      ],
    },
  },
}
