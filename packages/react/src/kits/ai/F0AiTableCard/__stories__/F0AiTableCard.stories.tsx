import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0AiTableCard } from "../F0AiTableCard"

const meta = {
  title: "AI/F0AiTableCard",
  component: F0AiTableCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[480px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof F0AiTableCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    dataset: {
      columns: ["name", "department", "country"],
      rows: [
        { name: "Ada Lovelace", department: "Engineering", country: "UK" },
        { name: "Grace Hopper", department: "Engineering", country: "US" },
        { name: "Alan Turing", department: "Research", country: "UK" },
        { name: "Linus Torvalds", department: "Engineering", country: "FI" },
      ],
    },
  },
}

export const WithColumnLabels: Story = {
  args: {
    dataset: {
      columns: ["employee_name", "department_name", "country_code"],
      rows: [
        {
          employee_name: "Ada Lovelace",
          department_name: "Engineering",
          country_code: "UK",
        },
        {
          employee_name: "Grace Hopper",
          department_name: "Engineering",
          country_code: "US",
        },
      ],
      columnLabels: {
        employee_name: "Employee",
        department_name: "Department",
        country_code: "Country",
      },
    },
  },
}

export const Empty: Story = {
  args: {
    dataset: {
      columns: ["name", "department"],
      rows: [],
    },
  },
}

export const NullValues: Story = {
  args: {
    dataset: {
      columns: ["name", "manager", "department"],
      rows: [
        { name: "Ada Lovelace", manager: null, department: "Engineering" },
        { name: "Grace Hopper", manager: "Ada Lovelace", department: null },
      ],
    },
  },
}
