import type { Meta, StoryObj } from "@storybook/react-vite"

import { AiChatStateProvider } from "../../../../providers/AiChatStateProvider"
import { FormCard } from "../FormCard"

const meta = {
  title: "AI/F0AiChat/Canvas/FormCard",
  component: FormCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <AiChatStateProvider enabled={false}>
        <div className="w-[420px]">
          <Story />
        </div>
      </AiChatStateProvider>
    ),
  ],
} satisfies Meta<typeof FormCard>

export default meta
type Story = StoryObj<typeof meta>

const sampleFieldDescriptions = {
  payrollConcept: { label: "Payroll concept" },
  calculationMethod: { label: "Calculation method" },
  amount: { label: "Amount" },
  period: { label: "Period" },
  minimumHours: { label: "Minimum hours" },
  workLocation: { label: "Work location" },
  eligibleDays: { label: "Eligible days" },
}

const sampleFormValues = {
  payrollConcept: "Ticket restaurant",
  calculationMethod: "Based on worked days",
  amount: "10 EUR/day",
  period: "Days in the previous month",
  minimumHours: "6h",
  workLocation: "Office, Home, Business trip",
  eligibleDays: "Weekdays",
}

export const Default: Story = {
  args: {
    formName: "additional-compensation",
    formDescription: "Configure additional compensation for employees",
    module: "compensations",
    cardTitle: "Additional compensation",
    cardDescription: "Ticket restaurant configuration",
    fieldDescriptions: sampleFieldDescriptions,
    formValues: sampleFormValues,
  },
}

export const WithoutFields: Story = {
  args: {
    formName: "edit-employee",
    formDescription: "Edit employee details",
    module: "employees",
    cardTitle: "Edit Employee",
    cardDescription: "Fill in the employee details",
  },
}

export const MoreThanSevenFields: Story = {
  args: {
    formName: "full-employee-form",
    formDescription: "Complete employee onboarding form",
    module: "employees",
    cardTitle: "New Employee",
    cardDescription: "Complete all onboarding fields",
    fieldDescriptions: {
      ...sampleFieldDescriptions,
      startDate: { label: "Start date" },
      department: { label: "Department" },
      manager: { label: "Manager" },
    },
    formValues: {
      ...sampleFormValues,
      startDate: "2026-05-01",
      department: "Engineering",
      manager: "Jane Doe",
    },
  },
}
