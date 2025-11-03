import { NewColor } from "@/components/tags/F0TagDot"
import { AcademicCap, List, Placeholder, Settings } from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { NotesTextEditor, NotesTextEditorSkeleton } from "./index"

const meta: Meta<typeof NotesTextEditor> = {
  title: "Rich text/NotesTextEditor",
  component: NotesTextEditor,
  tags: ["experimental"],
}

export default meta
type Story = StoryObj<typeof meta>

const defaultToolbarLabels = {
  bold: "Bold",
  italic: "Italic",
  underline: "Underline",
  strike: "Strikethrough",
  highlight: "Highlight",
  heading1: "Heading 1",
  heading2: "Heading 2",
  heading3: "Heading 3",
  left: "Left",
  center: "Center",
  right: "Right",
  justify: "Justify",
  bulletList: "Bullet List",
  orderedList: "Ordered List",
  taskList: "Task List",
  codeBlock: "Code Block",
  horizontalRule: "Horizontal Rule",
  quote: "Quote",
  moreOptions: "More Options",
  code: "Code",
  divider: "Divider",
  bullet: "Bullet",
  ordered: "Ordered",
  task: "Task",
  details: "drop-down",
  linkPlaceholder: "Enter URL...",
  linkLabel: "Link",
  linkPaste: "Paste",
  close: "Close",
}

const defaultSlashCommandGroupLabels = {
  textStyles: "Text Styles",
  lists: "Lists",
  blocks: "Blocks",
}

const defaultAIBlockLabels = {
  reset: "Reset",
  resetDescription: "Clear content and start over",
  deleteBlock: "Delete",
  expand: "Expand",
  collapse: "Collapse",
}

const defaultMoodTrackerLabels = {
  deleteBlock: "Delete",
  expand: "Expand",
  collapse: "Collapse",
}

const defaultLiveCompanionLabels = {
  deleteBlock: "Delete",
  expand: "Expand",
  collapse: "Collapse",
  oneTopicWithCommentary: "topic with commentary",
  multipleTopicsWithCommentary: "topics with commentary",
}

const defaultTranscriptLabels = {
  deleteBlock: "Delete",
  expand: "Expand",
  collapse: "Collapse",
  messagesCount: "messages",
  messagesCountSingular: "message",
}

const initialContent = {
  type: "doc",
  content: [
    {
      type: "moodTracker",
      attrs: {
        data: {
          title: "Last week mood tracker:",
          averageMoodComment:
            'Average feeling of "manolo" this week: Walking on sunshine',
          days: [
            {
              day: "Monday",
              mood: "superPositive",
              comment:
                "More training opportunities would help us grow our skills.",
            },
            {
              day: "Tuesday",
              mood: "superPositive",
              comment: "Great team collaboration today!",
            },
          ],
        },
        config: null,
        isOpen: true,
      },
    },
    {
      type: "aiBlock",
      attrs: {
        data: {},
        config: null,
        isCollapsed: false,
      },
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: null,
      },
    },
  ],
}

export const Default: Story = {
  args: {
    placeholder: "Enter '/' to open the command palette...",
    labels: {
      toolbarLabels: defaultToolbarLabels,
      slashCommandGroupLabels: defaultSlashCommandGroupLabels,
      aiBlockLabels: defaultAIBlockLabels,
      moodTrackerLabels: defaultMoodTrackerLabels,
      liveCompanionLabels: defaultLiveCompanionLabels,
      transcriptLabels: defaultTranscriptLabels,
      titlePlaceholder: "Enter a title for the meeting",
    },
    onTitleChange: (title) => {
      console.log("Title changed:", title)
    },
    onChange: (value) => {
      console.log("Content changed:", value)
    },

    initialEditorState: {
      content: initialContent,
      title: "Meeting title",
    },

    aiBlockConfig: {
      title: "AI Pre-Meeting Helper",
      onClick: () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              type: "taskList",
              content: [
                {
                  type: "taskItem",
                  attrs: {
                    checked: false,
                  },
                  content: [
                    {
                      type: "paragraph",
                      attrs: {
                        textAlign: null,
                      },
                      content: [
                        {
                          type: "text",
                          text: "Lista de ejemplo",
                        },
                      ],
                    },
                  ],
                },
                {
                  type: "taskItem",
                  attrs: {
                    checked: false,
                  },
                  content: [
                    {
                      type: "paragraph",
                      attrs: {
                        textAlign: null,
                      },
                      content: [
                        {
                          type: "text",
                          text: "hola hola",
                        },
                      ],
                    },
                  ],
                },
              ],
            })
          }, 1000)
        })
      },
      buttons: [
        {
          type: "factorial-format",
          emoji: "🤖",
          label: "Factorial format",
          icon: AcademicCap,
        },
        {
          type: "task-list",
          emoji: "📝",
          label: "Task list (custom)",
          icon: List,
          editable: true,
        },
      ],
    },

    actions: [
      {
        label: "Actions 2",
        onClick: () => {
          console.log("Actions 2")
        },
        hideLabel: true,
        icon: Placeholder,
      },
      {
        label: "Actions",
        onClick: () => {
          console.log("Actions")
        },
      },
    ],
    metadata: [
      {
        type: "status",
        label: "Status",
        variant: "warning",
      },
      {
        type: "dot-tag",
        label: "Dot tag",
        color: "malibu" as NewColor,
      },
      {
        type: "tag",
        label: "Tag",
        icon: Settings,
      },
      {
        type: "text",
        content: "Metadata",
        label: "Metadata",
      },
    ],
  },
}

const contentWithHeadings = {
  type: "doc",
  content: [
    {
      type: "heading",
      attrs: { level: 1 },
      content: [{ type: "text", text: "Introduction to Our Project" }],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "This document provides an overview of the project structure and main components.",
        },
      ],
    },
    {
      type: "heading",
      attrs: { level: 2 },
      content: [{ type: "text", text: "Getting Started" }],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Before diving into the details, let's cover the basics of how to set up the project.",
        },
      ],
    },
    {
      type: "heading",
      attrs: { level: 3 },
      content: [{ type: "text", text: "Installation" }],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Follow these steps to install the necessary dependencies for the project.",
        },
      ],
    },
    {
      type: "heading",
      attrs: { level: 3 },
      content: [{ type: "text", text: "Configuration" }],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Configure your environment with the appropriate settings before running.",
        },
      ],
    },
    {
      type: "heading",
      attrs: { level: 2 },
      content: [{ type: "text", text: "Architecture Overview" }],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Understanding the architecture is key to working effectively with this project.",
        },
      ],
    },
    {
      type: "heading",
      attrs: { level: 3 },
      content: [{ type: "text", text: "Frontend Components" }],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "The frontend is built using modern React components with TypeScript.",
        },
      ],
    },
    {
      type: "heading",
      attrs: { level: 3 },
      content: [{ type: "text", text: "Backend Services" }],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Our backend services handle all the business logic and data persistence.",
        },
      ],
    },
    {
      type: "heading",
      attrs: { level: 1 },
      content: [{ type: "text", text: "Best Practices" }],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Follow these guidelines to maintain high code quality throughout the project.",
        },
      ],
    },
    {
      type: "heading",
      attrs: { level: 2 },
      content: [{ type: "text", text: "Code Style Guidelines" }],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "We follow industry-standard code style guidelines with ESLint and Prettier.",
        },
      ],
    },
    {
      type: "heading",
      attrs: { level: 3 },
      content: [{ type: "text", text: "Naming Conventions" }],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Use descriptive names for variables, functions, and components.",
        },
      ],
    },
    {
      type: "heading",
      attrs: { level: 3 },
      content: [{ type: "text", text: "Testing Strategy" }],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Write comprehensive tests for all your code using Jest and Testing Library.",
        },
      ],
    },
    {
      type: "heading",
      attrs: { level: 2 },
      content: [{ type: "text", text: "Documentation" }],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Always document your code with clear comments and update the README.",
        },
      ],
    },
    {
      type: "heading",
      attrs: { level: 1 },
      content: [{ type: "text", text: "Conclusion" }],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "This concludes our documentation. Happy coding and good luck with your project!",
        },
      ],
    },
  ],
}

export const WithTableOfContents: Story = {
  name: "With Table of Contents",
  render: (args) => (
    <div className="h-[800px] w-full">
      <NotesTextEditor {...args} />
    </div>
  ),
  args: {
    placeholder: "Enter '/' to open the command palette...",
    showTableOfContents: true,
    labels: {
      toolbarLabels: defaultToolbarLabels,
      slashCommandGroupLabels: defaultSlashCommandGroupLabels,
      aiBlockLabels: defaultAIBlockLabels,
      moodTrackerLabels: defaultMoodTrackerLabels,
      liveCompanionLabels: defaultLiveCompanionLabels,
      transcriptLabels: defaultTranscriptLabels,
      titlePlaceholder: "Project Documentation",
    },
    onTitleChange: (title) => {
      console.log("Title changed:", title)
    },
    onChange: (value) => {
      console.log("Content changed:", value)
    },
    initialEditorState: {
      content: contentWithHeadings,
      title: "Project Documentation",
    },
  },
}

type SkeletonStory = StoryObj<typeof NotesTextEditorSkeleton>

export const Skeleton: SkeletonStory = {
  name: "Skeleton - Basic",
  render: (args) => (
    <div className="h-96 w-full">
      <NotesTextEditorSkeleton {...args} />
    </div>
  ),
  args: {
    withHeader: true,
    withTitle: true,
    withPadding: true,
  },
}
