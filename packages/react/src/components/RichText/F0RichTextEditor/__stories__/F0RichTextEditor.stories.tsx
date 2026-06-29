import type { Meta, StoryObj } from "@storybook/react-vite"
import { fn } from "storybook/test"

import { Summary } from "@/icons/ai"
import { Alert, Globe } from "@/icons/app"
import { mockEnhanceText, mockTranscribe } from "@/lib/storybook-utils/ai-mocks"
import { fakePeople } from "@/mocks/people"

import { EnhancementOption, FILE_TYPES, F0RichTextEditor } from ".."

const meta = {
  component: F0RichTextEditor,
  title: "Rich text/RichTextEditor",
  tags: ["autodocs", "experimental"],
  argTypes: {
    title: {
      control: "text",
      description: "Sets the title displayed in the editor header",
      required: true,
    },
    placeholder: {
      control: "text",
      description: "Text displayed when the editor is empty",
      required: true,
    },
    onChange: {
      control: false,
      description:
        "Callback function triggered when editor content changes. Receives an object with { value: string | null, mentionIds?: number[] }",
      required: true,
    },
    initialEditorState: {
      control: "object",
      description:
        "Pre-populates the editor with content and/or files. Format: { content?: string, files?: File[] }",
    },
    mentionsConfig: {
      control: "object",
      description:
        "Configures user mention functionality with available users and optional query handler",
    },
    enhanceConfig: {
      control: "object",
      description:
        "Configures AI enhancement functionality including onEnhanceText function, enhancement options, and UI labels",
    },
    onTranscribe: {
      control: false,
      description:
        "Voice dictation: transcribes recorded audio into text inserted at the cursor. When omitted, the microphone button is hidden",
    },
    filesConfig: {
      control: "object",
      description:
        "Configures file attachment capabilities including callbacks, multiple file support, and file type filtering",
    },
    primaryAction: {
      control: "object",
      description:
        "Configures the primary action button and optional dropdown actions",
    },
    secondaryAction: {
      control: "object",
      description:
        "Configures the secondary action button (usually cancel or discard) or switch actions, you can also pass an array of actions",
    },
    maxCharacters: {
      control: "number",
      description: "Limits the number of characters that can be entered",
    },
    height: {
      control: "select",
      options: [
        "xxs",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "3xl",
        "full",
        "auto",
      ],
      description: "Controls the initial height of the editor",
      defaultValue: "auto",
    },
    plainHtmlMode: {
      control: "boolean",
      description:
        "Controls if the task list is allowed in the editor, this is needed if the text lives outside of the display component",
      defaultValue: false,
    },
  },
} satisfies Meta<typeof F0RichTextEditor>

export default meta
type Story = StoryObj<typeof meta>

const enhancementOptions: EnhancementOption[] = [
  {
    id: "error",
    label: "This is gonna fail",
    icon: Alert,
  },
  {
    id: "improve-writing",
    label: "Improve Writing",
    icon: Summary,
  },
  {
    id: "change-tone",
    label: "Change Tone",
    icon: Summary,
    subOptions: [
      {
        id: "tone-casual",
        label: "Casual",
      },
      {
        id: "tone-professional",
        label: "Professional",
      },
      {
        id: "tone-confident",
        label: "Confident",
      },
      {
        id: "tone-straightforward",
        label: "Straightforward",
      },
      {
        id: "tone-friendly",
        label: "Friendly",
      },
    ],
  },
  {
    id: "translate",
    label: "Translate",
    icon: Globe,
    subOptions: [
      {
        id: "translate-to-spanish",
        label: "Spanish",
      },
      {
        id: "translate-to-english",
        label: "English",
      },
      {
        id: "translate-to-french",
        label: "French",
      },
      {
        id: "translate-to-german",
        label: "German",
      },
    ],
  },
]

const users = [
  {
    id: 1,
    label: fakePeople.mateo.fullName,
    href: fakePeople.mateo.image,
  },
  {
    id: 2,
    label: fakePeople.noor.fullName,
    href: fakePeople.noor.image,
  },
  {
    id: 3,
    label: fakePeople.hana.fullName,
    href: fakePeople.hana.image,
  },
]

export const Default: Story = {
  args: {
    title: "Ode to My Text Editor",
    onChange: fn(),
    placeholder: "Write something here...",
    onTranscribe: mockTranscribe,
    mentionsConfig: { users: users },
    enhanceConfig: {
      onEnhanceText: mockEnhanceText,
      enhancementOptions: enhancementOptions,
    },
    filesConfig: {
      onFiles: fn(),
      multipleFiles: true,
      acceptedFileType: [FILE_TYPES.IMAGE, FILE_TYPES.VIDEO, FILE_TYPES.PDF],
    },
    primaryAction: {
      action: {
        label: "Add",
        onClick: fn(),
        variant: "default",
      },
      subActions: [
        {
          label: "Add tomorrow",
          onClick: fn(),
        },
        {
          label: "Add next week",
          onClick: fn(),
        },
      ],
    },
    secondaryAction: [
      {
        type: "switch",
        label: "Cancel",
        onClick: fn(),
        variant: "outline",
        checked: true,
      },
      {
        type: "button",
        label: "Discard",
        onClick: fn(),
        variant: "outline",
      },
    ],
    maxCharacters: 10000,
    initialEditorState: {
      content:
        "<p>There was a time when I wandered in the dark — lost in the chaos of tangled syntax, broken builds, and tabs that betrayed me. My code was clumsy, my patience thin. But then, like a lighthouse in a storm, <strong>you appeared</strong>. Sleek, fast, and strangely comforting, my text editor. You didn't just open files — you opened <em>possibilities</em>",
    },
    height: "auto",
  },
}

export const Blank: Story = {
  args: {
    ...Default.args,
    enhanceConfig: undefined,
    filesConfig: undefined,
    primaryAction: undefined,
    secondaryAction: undefined,
    initialEditorState: undefined,
    mentionsConfig: undefined,
    maxCharacters: undefined,
    plainHtmlMode: true,
  },
}

type SkeletonStory = StoryObj<typeof F0RichTextEditor.Skeleton>

export const Skeleton: SkeletonStory = {
  tags: ["experimental"],
  render: () => <F0RichTextEditor.Skeleton />,
}
