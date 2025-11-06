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
      content: `  <table>
    <tbody>
      <tr>
        <th>Name</th>
        <th colspan="3">Description</th>
      </tr>
      <tr>
        <td>Cyndi Lauper</td>
        <td>Singer</td>
        <td>Songwriter</td>
        <td>Actress</td>
      </tr>
    </tbody>
  </table>`,
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
        label: "Actions",
        onClick: () => {
          console.log("Actions")
        },
      },
    ],
    secondaryActions: [
      {
        label: "More Actions",
        onClick: () => {
          console.log("More Actions")
        },
        icon: Placeholder,
      },
      {
        label: "More Actions 2",
        onClick: () => {
          console.log("More Actions 2")
        },
        icon: Placeholder,
        critical: true,
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

        label: "label",
        content: "hello",
      },
      {
        type: "person",
        label: "Person",
        firstName: "Raúl",
        lastName: "Sigüenza",
        src: "/avatars/person01.jpg",
      },
    ],
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
