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
        type: "assignee",
        id: "0",
        firstName: "New",
        lastName: "Employee",
      },
      {
        type: "single-task",
        id: "1",
        label: "Personal information, Address, emergency contact",
      },
    ],
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
        type: "assignee",
        id: "0",
        firstName: "New",
        lastName: "Employee",
      },
      {
        type: "single-task",
        id: "1",
        label: "Personal information, Address, emergency contact",
      },
      {
        type: "one-automation",
        id: "2",
        label: "Automatically send by ONE",
      },
    ],
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
        type: "assignee",
        id: "0",
        firstName: "New",
        lastName: "Employee",
      },
      {
        type: "single-task",
        id: "1",
        label: "Personal information, Address, emergency contact",
      },
      {
        type: "one-automation",
        id: "2",
      },
      {
        type: "with-folder",
        id: "3",
        label: "Employee Satisfaction Survey",
        onClick: () => alert("Opening survey..."),
      },
    ],
  },
}

/**
 * Casuistic 4: Document upload option
 * Downloadable file attached to the task. User can download it.
 */
export const WithDocument: Story = {
  args: {
    icon: <FileAvatarIcon />,
    title: "Review and sign your contract",
    options: [
      {
        type: "assignee",
        id: "0",
        firstName: "New",
        lastName: "Employee",
      },
      {
        type: "single-task",
        id: "1",
        label: "Download, review and sign the document below",
      },
      {
        type: "with-folder",
        id: "2",
        label: "Legal / Contracts",
      },
      {
        type: "document-upload",
        id: "3",
        label: "Employment_Contract_2026.pdf",
        fileType: "pdf",
        onClick: () => alert("Downloading PDF..."),
      },
    ],
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
        type: "assignee",
        id: "0",
        firstName: "New",
        lastName: "Employee",
      },
      {
        type: "single-task",
        id: "1",
        label: "Personal information, Address, emergency contact",
      },
      {
        type: "one-automation",
        id: "2",
      },
      {
        type: "with-folder",
        id: "3",
        label: "Employee Satisfaction Survey",
      },
      {
        type: "document-upload",
        id: "4",
        label: "Employee Satisfaction Survey",
        fileType: "pdf",
      },
      {
        type: "condition",
        id: "5",
        conditions: [
          { id: "cond1", label: "Operator" },
          { id: "cond2", label: "Barcelona" },
          { id: "cond3", label: "Interns" },
        ],
      },
    ],
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
        type: "assignee",
        id: "0",
        firstName: "New",
        lastName: "Employee",
      },
      {
        type: "document-upload",
        id: "1",
        label: "Contract_Final.pdf",
        fileType: "pdf",
        onClick: () => alert("Opening document..."),
      },
    ],
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
        type: "assignee",
        id: "0",
        firstName: "New",
        lastName: "Employee",
      },
      {
        type: "single-task",
        id: "1",
        label: "Basic information, Work history, Skills",
      },
      {
        type: "one-automation",
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
    options: [
      {
        type: "assignee",
        id: "0",
        firstName: "New",
        lastName: "Employee",
      },
      {
        type: "single-task",
        id: "1",
        label: "Personal details, Contact information",
      },
      {
        type: "with-folder",
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
        type: "assignee",
        id: "0",
        firstName: "New",
        lastName: "Employee",
      },
      {
        type: "single-task",
        id: "1",
        label: "Identity verification, Background check",
      },
      {
        type: "one-automation",
        id: "2",
      },
      {
        type: "with-folder",
        id: "3",
        label: "Employment verification form",
      },
      {
        type: "document-upload",
        id: "4",
        label: "Verification_Guide.pdf",
        fileType: "pdf",
      },
    ],
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
        type: "assignee",
        id: "0",
        firstName: "New",
        lastName: "Employee",
      },
      {
        type: "single-task",
        id: "1",
        label: "Review and sign all required documents",
      },
      {
        type: "document-upload",
        id: "2",
        label: "Employment Agreement",
        fileType: "pdf",
      },
      {
        type: "document-upload",
        id: "3",
        label: "Handbook",
        fileType: "pdf",
      },
      {
        type: "document-upload",
        id: "4",
        label: "Benefits Summary",
        fileType: "xlsx",
      },
    ],
  },
}

/**
 * Condition: inline mode (≤3 conditions)
 */
export const ConditionInline: Story = {
  args: {
    icon: <FileAvatarIcon />,
    title: "Task applies to",
    options: [
      {
        type: "assignee",
        id: "0",
        firstName: "New",
        lastName: "Employee",
      },
      {
        type: "condition",
        id: "1",
        conditions: [
          { id: "c1", label: "Engineering" },
          { id: "c2", label: "Barcelona" },
        ],
      },
    ],
  },
}

/**
 * Condition: list mode (>3 conditions)
 */
export const ConditionList: Story = {
  args: {
    icon: <FileAvatarIcon />,
    title: "Task applies to",
    options: [
      {
        type: "assignee",
        id: "0",
        firstName: "New",
        lastName: "Employee",
      },
      {
        type: "condition",
        id: "1",
        conditions: [
          { id: "c1", label: "Engineering" },
          { id: "c2", label: "Barcelona" },
          { id: "c3", label: "Senior" },
          { id: "c4", label: "Full-time" },
          { id: "c5", label: "Permanent" },
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
        type: "assignee",
        id: "0",
        firstName: "New",
        lastName: "Employee",
      },
      {
        type: "with-folder",
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
        type: "single-task",
        id: "1",
        label: "Personal information, Address, emergency contact",
      },
      {
        type: "assignee",
        id: "2",
        firstName: "New",
        lastName: "Employee",
      },
    ],
  },
}

/**
 * Long label example: Shows how a much longer text option wraps
 */
export const LongLabel: Story = {
  args: {
    icon: <FileAvatarIcon />,
    title: "Complete employee information",
    options: [
      {
        type: "assignee",
        id: "0",
        firstName: "New",
        lastName: "Employee",
      },
      {
        type: "single-task",
        id: "1",
        label:
          "Personal information, Address, emergency contact, professional certifications, and work experience details",
      },
    ],
  },
}
