import type { Meta, StoryObj } from "@storybook/react-vite"

import { EnhancementOption, FILE_TYPES, resultType, RichTextEditor } from "."

const meta = {
  component: RichTextEditor,
  title: "Rich text/RichTextEditor",
  tags: ["experimental"],
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
} satisfies Meta<typeof RichTextEditor>

export default meta
type Story = StoryObj<typeof meta>

const enhancementOptions: EnhancementOption[] = [
  {
    id: "error",
    label: "This is gonna fail",
  },
  {
    id: "improve-writing",
    label: "Improve Writing",
  },
  {
    id: "change-tone",
    label: "Change Tone",
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
    label: "Raúl Sigüenza Sánchez",
    href: "/avatars/person01.jpg",
  },
  {
    id: 2,
    label: "Jacob Bamio Cordero",
    href: "/avatars/person02.jpg",
  },
  {
    id: 3,
    label: "Xavier Val Parejo",
    href: "/avatars/person03.jpg",
  },
]

export const Default: Story = {
  tags: ["experimental"],
  args: {
    title: "Ode to My Text Editor",
    onChange: (result: resultType) => {
      console.log(result)
    },
    placeholder:
      "Write something here to test our Write something here to test our Write something here to test our Write something here to test our Write something here to test our Write something here to test our ",
    mentionsConfig: { users: users },
    enhanceConfig: {
      onEnhanceText: (params: {
        text: string
        selectedIntent?: string
        customIntent?: string
        context?: string
      }) =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              success: !(params.selectedIntent === "error"),
              error: "Error from AI, Jacob didn't finish his work",
              text: `<b>Just imagine this is an AI response from our friend Jacob</b>`,
            })
          }, 2000)
        }),
      enhancementOptions: enhancementOptions,
    },
    filesConfig: {
      onFiles: (files) => console.log(files),
      multipleFiles: true,
      acceptedFileType: [FILE_TYPES.IMAGE, FILE_TYPES.VIDEO, FILE_TYPES.PDF],
    },
    primaryAction: {
      action: {
        label: "Add",
        onClick: () => alert("Add"),
        variant: "default",
      },
      subActions: [
        {
          label: "Add tomorrow",
          onClick: () => alert("Add tomorrow"),
        },
        {
          label: "Add next week",
          onClick: () => alert("Add next week"),
        },
      ],
    },
    secondaryAction: [
      {
        type: "switch",
        label: "Cancel",
        onClick: () => {},
        variant: "outline",
        checked: true,
      },
      {
        type: "button",
        label: "Discard",
        onClick: () => {},
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

type SkeletonStory = StoryObj<typeof RichTextEditor.Skeleton>

export const Skeleton: SkeletonStory = {
  tags: ["experimental"],
  render: () => <RichTextEditor.Skeleton />,
}
