import type { Meta, StoryObj } from "@storybook/react"
import { CardTaskAI } from "../CardTaskAI"
import type { CardTaskAIProps } from "../types"

const meta = {
  title: "Components/CardTaskAI",
  component: CardTaskAI,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardTaskAI>

export default meta
type Story = StoryObj<typeof meta>

// Mock icon component
const FileIcon = () => (
  <svg
    className="h-10 w-10 rounded-lg bg-blue-100 p-2 text-blue-600"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M5.5 13a3 3 0 01-.369-5.98 3 3 0 116.364 0 3 3 0 01-.738 5.98H2.5a.5.5 0 010-1h3a.5.5 0 000-1h-.5z" />
  </svg>
)

const defaultProps: CardTaskAIProps = {
  icon: <FileIcon />,
  title: "Fill in your personal information",
  tasks: [
    { id: "1", label: "Personal information, Address, emergency contact" },
  ],
  badge: {
    label: "New employee",
    variant: "primary",
  },
}

export const Default: Story = {
  args: defaultProps,
}

export const WithDescription: Story = {
  args: {
    ...defaultProps,
    description: "Complete your employee profile to get started",
  },
}

export const WithMultipleTasks: Story = {
  args: {
    ...defaultProps,
    title: "Onboarding Checklist",
    description: "Complete all tasks to finish your onboarding",
    tasks: [
      {
        id: "1",
        label: "Personal information",
        status: "completed",
      },
      {
        id: "2",
        label: "Address and contact details",
        status: "in-progress",
      },
      {
        id: "3",
        label: "Emergency contact",
        status: "pending",
      },
      {
        id: "4",
        label: "Tax information",
        status: "error",
      },
    ],
  },
}

export const WithDifferentStatuses: Story = {
  args: {
    icon: <FileIcon />,
    title: "Document Verification",
    tasks: [
      { id: "1", label: "ID verification", status: "completed" },
      { id: "2", label: "Background check", status: "in-progress" },
      { id: "3", label: "References", status: "pending" },
    ],
    badge: {
      label: "In Progress",
      variant: "warning",
    },
  },
}

export const Clickable: Story = {
  args: {
    ...defaultProps,
    onClick: () => alert("Card clicked!"),
  },
}

export const WithoutBadge: Story = {
  args: {
    icon: <FileIcon />,
    title: "Complete your profile",
    description: "Help us get to know you better",
    tasks: [
      { id: "1", label: "Basic information" },
      { id: "2", label: "Professional background" },
      { id: "3", label: "Availability" },
    ],
  },
}

export const ErrorState: Story = {
  args: {
    icon: <FileIcon />,
    title: "Sync failed",
    description: "There was an error syncing your data",
    tasks: [
      { id: "1", label: "Check internet connection", status: "error" },
      { id: "2", label: "Retry sync", status: "pending" },
    ],
    badge: {
      label: "Error",
      variant: "error",
    },
  },
}

export const CompletedState: Story = {
  args: {
    icon: <FileIcon />,
    title: "Setup complete",
    description: "All tasks have been completed successfully",
    tasks: [
      { id: "1", label: "Personal information", status: "completed" },
      { id: "2", label: "Contact details", status: "completed" },
      { id: "3", label: "Preferences", status: "completed" },
    ],
    badge: {
      label: "Completed",
      variant: "success",
    },
  },
}
