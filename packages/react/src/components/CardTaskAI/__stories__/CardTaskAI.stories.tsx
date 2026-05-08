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
  decorators: [
    (Story) => (
      <div style={{ width: "480px" }}>
        <Story />
      </div>
    ),
  ],
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
    taskType: "sign",
    icon: <FileAvatarIcon />,
    title: "Fill in your personal information",
    actionLabel: "Edit",
    onAction: () => alert("Edit clicked"),
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
 * Casuistic 2: Automation + Conditions
 * Shows ONE will handle it automatically + conditions for when it applies
 */
export const WithAutomation: Story = {
  args: {
    taskType: "data-collection",
    icon: <FileAvatarIcon />,
    title: "Collect employee preferences",
    actionLabel: "Edit",
    onAction: () => alert("Edit clicked"),
    options: [
      {
        type: "assignee",
        id: "0",
        firstName: "New",
        lastName: "Employee",
      },
      {
        type: "one-automation",
        id: "1",
        label: "Automatically send by ONE",
      },
      {
        type: "condition",
        id: "2",
        conditions: [
          { id: "cond1", label: "Engineering" },
          { id: "cond2", label: "Barcelona" },
        ],
      },
    ],
  },
}

/**
 * Casuistic 3: Form + Document option
 * Includes a survey or form that user needs to fill
 */
export const WithForm: Story = {
  args: {
    taskType: "basic-task",
    icon: <FileAvatarIcon />,
    title: "Fill in your personal information",
    actionLabel: "Edit",
    onAction: () => alert("Edit clicked"),
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
        type: "with-folder",
        id: "2",
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
    taskType: "upload-document",
    icon: <FileAvatarIcon />,
    title: "Review and sign your contract",
    actionLabel: "Edit",
    onAction: () => alert("Edit clicked"),
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
 * Text + Form + Document + Condition (metadata pills)
 * This is the full complexity case with all possible options
 */
export const AllOptionTypes: Story = {
  args: {
    taskType: "training",
    icon: <FileAvatarIcon />,
    title: "Fill in your personal information",
    actionLabel: "Edit",
    onAction: () => alert("Edit clicked"),
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
        type: "with-folder",
        id: "2",
        label: "Employee Satisfaction Survey",
      },
      {
        type: "document-upload",
        id: "3",
        label: "Employee Satisfaction Survey",
        fileType: "pdf",
      },
      {
        type: "condition",
        id: "4",
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
 * Multiple documents with different file types
 */
export const MultipleDocuments: Story = {
  args: {
    taskType: "surveys",
    icon: <FileAvatarIcon />,
    title: "Review all documents",
    actionLabel: "Edit",
    onAction: () => alert("Edit clicked"),
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
 * Condition: inline mode (≤3 conditions) + Form
 */
export const ConditionInline: Story = {
  args: {
    taskType: "notification",
    icon: <FileAvatarIcon />,
    title: "Task applies to",
    actionLabel: "Edit",
    onAction: () => alert("Edit clicked"),
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
        label: "Department preferences survey",
      },
      {
        type: "condition",
        id: "2",
        conditions: [
          { id: "c1", label: "Engineering" },
          { id: "c2", label: "Barcelona" },
        ],
      },
    ],
  },
}

/**
 * Condition: list mode (>3 conditions) + Document
 * Tags wrap horizontally until they don't fit, then continue as list
 */
export const ConditionList: Story = {
  args: {
    taskType: "surveys",
    icon: <FileAvatarIcon />,
    title: "Task applies to",
    actionLabel: "Edit",
    onAction: () => alert("Edit clicked"),
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
        label: "Task_Guide.pdf",
        fileType: "pdf",
      },
      {
        type: "condition",
        id: "2",
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
 * Long label example: Shows how a much longer text option wraps
 */
export const LongLabel: Story = {
  args: {
    taskType: "sign",
    icon: <FileAvatarIcon />,
    title: "Complete employee information",
    actionLabel: "Edit",
    onAction: () => alert("Edit clicked"),
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
