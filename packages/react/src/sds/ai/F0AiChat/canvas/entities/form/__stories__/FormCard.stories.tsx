import type { Meta, StoryObj } from "@storybook/react-vite"

import type { FormCardValueFormatter } from "../FormCard"

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

export const WithDurationField: Story = {
  args: {
    formName: "shift-config",
    formDescription: "Configure a work shift",
    module: "clock-in",
    cardTitle: "Work shift",
    cardDescription: "Morning shift configuration",
    fieldDescriptions: {
      shiftName: { label: "Shift name" },
      duration: { label: "Duration", fieldType: "duration" },
      breakDuration: { label: "Break duration", fieldType: "duration" },
    },
    formValues: {
      shiftName: "Morning shift",
      duration: 28800, // 8h
      breakDuration: 1800, // 30m
    },
  },
}

export const WithRichTextField: Story = {
  args: {
    formName: "create-task",
    formDescription: "Create a new task",
    module: "tasks",
    cardTitle: "Create task",
    cardDescription: "New task with description",
    fieldDescriptions: {
      taskName: { label: "Task name" },
      description: { label: "Description", fieldType: "richtext" },
      priority: { label: "Priority" },
    },
    formValues: {
      taskName: "Review onboarding process",
      description: {
        value:
          "<p>This is a <strong>test task</strong> created with dummy data to validate the creation and assignment flow. The goal is to ensure that the name, description, and mandatory fields are properly handled.</p>",
      },
      priority: "High",
    },
  },
}

export const WithDateRangeField: Story = {
  args: {
    formName: "leave-request",
    formDescription: "Request time off",
    module: "timeoff",
    cardTitle: "Leave request",
    cardDescription: "Vacation request",
    fieldDescriptions: {
      leaveType: { label: "Leave type" },
      period: { label: "Period", fieldType: "daterange" },
      notes: { label: "Notes" },
    },
    formValues: {
      leaveType: "Vacation",
      period: {
        from: new Date("2026-07-01"),
        to: new Date("2026-07-15"),
      },
      notes: "Summer holidays",
    },
  },
}

const customValueFormatter: FormCardValueFormatter = (
  _key,
  _value,
  { customFieldName }
) => {
  if (customFieldName === "assignees_selector") {
    return {
      type: "avatar-list",
      avatarList: {
        type: "person" as const,
        size: "sm",
        avatars: [
          {
            firstName: "Alice",
            lastName: "Garcia",
            src: "",
          },
          {
            firstName: "Bob",
            lastName: "Martinez",
            src: "",
          },
        ],
      },
    }
  }
  return undefined
}

export const WithCustomAvatarList: Story = {
  args: {
    formName: "create-task",
    formDescription: "Create a new task",
    module: "tasks",
    cardTitle: "Create task",
    cardDescription: "Task with custom assignee rendering",
    fieldDescriptions: {
      taskName: { label: "Task name" },
      assignees: {
        label: "Assignees",
        fieldType: "custom",
        customFieldName: "assignees_selector",
      },
      dueDate: { label: "Due date" },
    },
    formValues: {
      taskName: "Prepare Q3 report",
      assignees: { type: "manual", ids: ["5", "12"] },
      dueDate: "2026-08-01",
    },
    valueFormatter: customValueFormatter,
  },
}

export const MixedFieldTypes: Story = {
  args: {
    formName: "full-task-form",
    formDescription: "Complete task creation form",
    module: "tasks",
    cardTitle: "New task",
    cardDescription: "Task with mixed field types",
    fieldDescriptions: {
      taskName: { label: "Task name" },
      description: { label: "Description", fieldType: "richtext" },
      duration: { label: "Estimated time", fieldType: "duration" },
      period: { label: "Period", fieldType: "daterange" },
      assignees: {
        label: "Assignees",
        fieldType: "custom",
        customFieldName: "assignees_selector",
      },
      priority: { label: "Priority" },
      createPerAssignee: { label: "Create one per assignee" },
    },
    formValues: {
      taskName: "Review onboarding process",
      description: {
        value:
          "<p>Verify that <strong>all steps</strong> of the onboarding checklist are up to date.</p>",
      },
      duration: 9000, // 2h 30m
      period: {
        from: new Date("2026-04-01"),
        to: new Date("2026-04-30"),
      },
      assignees: { type: "manual", ids: ["5"] },
      priority: "High",
      createPerAssignee: false,
    },
    valueFormatter: customValueFormatter,
  },
}
