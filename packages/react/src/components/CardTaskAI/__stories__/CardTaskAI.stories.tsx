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

// Mock icon components
const FileIcon = () => (
  <svg
    className="h-10 w-10 rounded-lg bg-blue-100 p-2 text-blue-600"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M5.5 13a3 3 0 01-.369-5.98 3 3 0 116.364 0 3 3 0 01-.738 5.98H2.5a.5.5 0 010-1h3a.5.5 0 000-1h-.5z" />
  </svg>
)

const ListIcon = () => (
  <svg className="h-5 w-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
    <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.3A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" />
  </svg>
)

const DocumentIcon = () => (
  <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
)

const LinkIcon = () => (
  <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
    />
  </svg>
)

const TagIcon = () => (
  <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
    />
  </svg>
)

/**
 * Casuistic 1: Single text option with list icon
 * Basic task description showing what needs to be filled
 */
export const TextOption: Story = {
  args: {
    icon: <FileIcon />,
    title: "Fill in your personal information",
    options: [
      {
        type: "text",
        id: "1",
        label: "Personal information, Address, emergency contact",
        icon: <ListIcon />,
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
    icon: <FileIcon />,
    title: "Fill in your personal information",
    options: [
      {
        type: "text",
        id: "1",
        label: "Personal information, Address, emergency contact",
        icon: <ListIcon />,
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
    icon: <FileIcon />,
    title: "Fill in your personal information",
    options: [
      {
        type: "text",
        id: "1",
        label: "Personal information, Address, emergency contact",
        icon: <ListIcon />,
      },
      {
        type: "automation",
        id: "2",
      },
      {
        type: "form",
        id: "3",
        label: "Employee Satisfaction Survey",
        icon: <DocumentIcon />,
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
    icon: <FileIcon />,
    title: "Fill in your personal information",
    options: [
      {
        type: "text",
        id: "1",
        label: "Personal information, Address, emergency contact",
        icon: <ListIcon />,
      },
      {
        type: "automation",
        id: "2",
      },
      {
        type: "form",
        id: "3",
        label: "Employee Satisfaction Survey",
        icon: <DocumentIcon />,
      },
      {
        type: "document",
        id: "4",
        label: "Employee Satisfaction Survey",
        fileType: "pdf",
        icon: <LinkIcon />,
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
    icon: <FileIcon />,
    title: "Fill in your personal information",
    options: [
      {
        type: "text",
        id: "1",
        label: "Personal information, Address, emergency contact",
        icon: <ListIcon />,
      },
      {
        type: "automation",
        id: "2",
      },
      {
        type: "form",
        id: "3",
        label: "Employee Satisfaction Survey",
        icon: <DocumentIcon />,
      },
      {
        type: "document",
        id: "4",
        label: "Employee Satisfaction Survey",
        fileType: "pdf",
        icon: <LinkIcon />,
      },
      {
        type: "tags",
        id: "5",
        icon: <TagIcon />,
        tags: [
          { id: "tag1", label: "Operator", variant: "default" },
          { id: "tag2", label: "Barcelona", variant: "default" },
          { id: "tag3", label: "Interns", variant: "error" },
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
    icon: <FileIcon />,
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
    icon: <FileIcon />,
    title: "Complete your profile",
    options: [
      {
        type: "text",
        id: "1",
        label: "Basic information, Work history, Skills",
        icon: <ListIcon />,
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
    icon: <FileIcon />,
    title: "Onboarding checklist",
    description: "Complete your onboarding process",
    options: [
      {
        type: "text",
        id: "1",
        label: "Personal details, Contact information",
        icon: <ListIcon />,
      },
      {
        type: "form",
        id: "2",
        label: "Department preferences survey",
        icon: <DocumentIcon />,
      },
      {
        type: "tags",
        id: "3",
        icon: <TagIcon />,
        tags: [
          { id: "tag1", label: "Engineering", variant: "primary" },
          { id: "tag2", label: "Full-time", variant: "success" },
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
    icon: <FileIcon />,
    title: "Employee verification",
    options: [
      {
        type: "text",
        id: "1",
        label: "Identity verification, Background check",
        icon: <ListIcon />,
      },
      {
        type: "automation",
        id: "2",
      },
      {
        type: "form",
        id: "3",
        label: "Employment verification form",
        icon: <DocumentIcon />,
      },
      {
        type: "document",
        id: "4",
        label: "Verification_Guide.pdf",
        fileType: "pdf",
        icon: <LinkIcon />,
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
    icon: <FileIcon />,
    title: "Review all documents",
    options: [
      {
        type: "text",
        id: "1",
        label: "Review and sign all required documents",
        icon: <ListIcon />,
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
    icon: <FileIcon />,
    title: "Task assignment details",
    options: [
      {
        type: "tags",
        id: "1",
        icon: <TagIcon />,
        tags: [
          { id: "tag1", label: "Engineering", variant: "primary" },
          { id: "tag2", label: "Senior", variant: "success" },
          { id: "tag3", label: "Urgent", variant: "warning" },
          { id: "tag4", label: "Blocked", variant: "error" },
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
    icon: <FileIcon />,
    title: "Start onboarding",
    options: [
      {
        type: "form",
        id: "1",
        label: "Onboarding form",
        icon: <DocumentIcon />,
        onClick: () => alert("Opening form..."),
      },
    ],
    onClick: () => alert("Card clicked!"),
  },
}
