import type { Meta, StoryObj } from "@storybook/react-vite"

import { fakePeople } from "@/mocks/people"

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
        {
          name: fakePeople.noor.fullName,
          department: "Engineering",
          country: "UK",
        },
        {
          name: fakePeople.hana.fullName,
          department: "Engineering",
          country: "US",
        },
        {
          name: fakePeople.caleb.fullName,
          department: "Research",
          country: "UK",
        },
        {
          name: fakePeople.yuki.fullName,
          department: "Engineering",
          country: "FI",
        },
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
          employee_name: fakePeople.noor.fullName,
          department_name: "Engineering",
          country_code: "UK",
        },
        {
          employee_name: fakePeople.hana.fullName,
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
        {
          name: fakePeople.noor.fullName,
          manager: null,
          department: "Engineering",
        },
        {
          name: fakePeople.hana.fullName,
          manager: fakePeople.noor.fullName,
          department: null,
        },
      ],
    },
  },
}
