import type { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { CardTaskAI } from "../CardTaskAI"
import { F0AvatarIcon } from "@/components/avatars/F0AvatarIcon"
import { Paperclip } from "@/icons/app"

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

// Mock avatar icon using F0
const FileAvatarIcon = () => <F0AvatarIcon icon={Paperclip} color="primary" />

/**
 * Casuistic 1: Single text option with list icon
 * Basic task description showing what needs to be filled
 */
export const TextOption: Story = {
  args: {
    icon: <FileAvatarIcon />,
    title: "Fill in your personal information",
    options: [
      {
        type: "text",
        id: "1",
        label: "Personal information, Address, emergency contact",
      },
    ],
    badge: {
      label: "New employee",
      variant: "primary",
    },
  },
}

/**
 * Casuistic 2: Text + Automation option
 * Shows what needs to be done + that ONE will handle it automatically
 */
export const WithAutomation: Story = {
  args: {
    icon: <FileAvatarIcon />,
    title: "Fill in your personal information",
    options: [
      {
        type: "text",
        id: "1",
        label: "Personal information, Address, emergency contact",
      },
      {
        type: "automation",
        id: "2",
        label: "Automatically send by ONE",
      },
    ],
    badge: {
      label: "New employee",
      variant: "primary",
    },
  },
}

/**
 * Casuistic 3: Text + Automation + Form option
 * Includes a survey or form that user needs to fill
 */
export const WithForm: Story = {
  args: {
    icon: <FileAvatarIcon />,
    title: "Fill in your personal information",
    options: [
      {
        type: "text",
        id: "1",
        label: "Personal information, Address, emergency contact",
      },
      {
        type: "automation",
        id: "2",
      },
      {
        type: "form",
        id: "3",
        label: "Employee Satisfaction Survey",
        onClick: () => alert("Opening survey..."),
      },
    ],
    badge: {
      label: "New employee",
      variant: "primary",
    },
  },
}

/**
 * Casuistic 4: Text + Automation + Form + Document option
 * Includes a downloadable document (PDF, etc) with file type badge
 */
export const WithDocument: Story = {
  args: {
    icon: <FileAvatarIcon />,
    title: "Fill in your personal information",
    options: [
      {
        type: "text",
        id: "1",
        label: "Personal information, Address, emergency contact",
      },
      {
        type: "automation",
        id: "2",
      },
      {
        type: "form",
        id: "3",
        label: "Employee Satisfaction Survey",
      },
      {
        type: "document",
        id: "4",
        label: "Employee Satisfaction Survey",
        fileType: "pdf",
        onClick: () => alert("Downloading PDF..."),
      },
    ],
    badge: {
      label: "New employee",
      variant: "primary",
    },
  },
}

/**
 * Casuistic 5: Complete - All 5 option types
 * Text + Automation + Form + Document + Tags (metadata pills)
 * This is the full complexity case with all possible options
 */
export const AllOptionTypes: Story = {
  args: {
    icon: <FileAvatarIcon />,
    title: "Fill in your personal information",
    options: [
      {
        type: "text",
        id: "1",
        label: "Personal information, Address, emergency contact",
      },
      {
        type: "automation",
        id: "2",
      },
      {
        type: "form",
        id: "3",
        label: "Employee Satisfaction Survey",
      },
      {
        type: "document",
        id: "4",
        label: "Employee Satisfaction Survey",
        fileType: "pdf",
      },
      {
        type: "tags",
        id: "5",
        tags: [
          { id: "tag1", label: "Operator" },
          { id: "tag2", label: "Barcelona" },
          { id: "tag3", label: "Interns" },
        ],
      },
    ],
    badge: {
      label: "New employee",
      variant: "primary",
    },
  },
}

/**
 * Minimal example: Single document option
 */
export const SingleOption: Story = {
  args: {
    icon: <FileAvatarIcon />,
    title: "Review document",
    description: "Please review the attached document",
    options: [
      {
        type: "document",
        id: "1",
        label: "Contract_Final.pdf",
        fileType: "pdf",
        onClick: () => alert("Opening document..."),
      },
    ],
    badge: {
      label: "Pending",
      variant: "warning",
    },
  },
}

/**
 * Two options: Text + Automation
 */
export const TwoOptions: Story = {
  args: {
    icon: <FileAvatarIcon />,
    title: "Complete your profile",
    options: [
      {
        type: "text",
        id: "1",
        label: "Basic information, Work history, Skills",
      },
      {
        type: "automation",
        id: "2",
        label: "Will be verified by our AI",
      },
    ],
  },
}

/**
 * Three options: Text + Form + Tags
 */
export const ThreeOptions: Story = {
  args: {
    icon: <FileAvatarIcon />,
    title: "Onboarding checklist",
    description: "Complete your onboarding process",
    options: [
      {
        type: "text",
        id: "1",
        label: "Personal details, Contact information",
      },
      {
        type: "form",
        id: "2",
        label: "Department preferences survey",
      },
      {
        type: "tags",
        id: "3",
        tags: [
          { id: "tag1", label: "Engineering" },
          { id: "tag2", label: "Full-time" },
        ],
      },
    ],
    badge: {
      label: "In Progress",
      variant: "warning",
    },
  },
}

/**
 * Four options: Text + Automation + Form + Document
 */
export const FourOptions: Story = {
  args: {
    icon: <FileAvatarIcon />,
    title: "Employee verification",
    options: [
      {
        type: "text",
        id: "1",
        label: "Identity verification, Background check",
      },
      {
        type: "automation",
        id: "2",
      },
      {
        type: "form",
        id: "3",
        label: "Employment verification form",
      },
      {
        type: "document",
        id: "4",
        label: "Verification_Guide.pdf",
        fileType: "pdf",
      },
    ],
    badge: {
      label: "Urgent",
      variant: "error",
    },
  },
}

/**
 * Multiple documents with different file types
 */
export const MultipleDocuments: Story = {
  args: {
    icon: <FileAvatarIcon />,
    title: "Review all documents",
    options: [
      {
        type: "text",
        id: "1",
        label: "Review and sign all required documents",
      },
      {
        type: "document",
        id: "2",
        label: "Employment Agreement",
        fileType: "pdf",
      },
      {
        type: "document",
        id: "3",
        label: "Handbook",
        fileType: "pdf",
      },
      {
        type: "document",
        id: "4",
        label: "Benefits Summary",
        fileType: "xlsx",
      },
    ],
  },
}

/**
 * Tags with multiple variants
 */
export const MultipleTagVariants: Story = {
  args: {
    icon: <FileAvatarIcon />,
    title: "Task assignment details",
    options: [
      {
        type: "tags",
        id: "1",
        tags: [
          { id: "tag1", label: "Engineering" },
          { id: "tag2", label: "Senior" },
          { id: "tag3", label: "Urgent" },
          { id: "tag4", label: "Blocked" },
        ],
      },
    ],
  },
}

/**
 * Clickable card with form
 */
export const ClickableCard: Story = {
  args: {
    icon: <FileAvatarIcon />,
    title: "Start onboarding",
    options: [
      {
        type: "form",
        id: "1",
        label: "Onboarding form",
        onClick: () => alert("Opening form..."),
      },
    ],
    onClick: () => alert("Card clicked!"),
  },
}

/**
 * Casuistic: With assignee (person avatar)
 * Shows task assignee using F0AvatarPerson metadata component
 */
export const WithAssignee: Story = {
  args: {
    icon: <FileAvatarIcon />,
    title: "Fill in your personal information",
    options: [
      {
        type: "text",
        id: "1",
        label: "Personal information, Address, emergency contact",
      },
      {
        type: "assignee",
        id: "2",
        firstName: "John",
        lastName: "Doe",
      },
    ],
    badge: {
      label: "New employee",
      variant: "primary",
    },
  },
}
