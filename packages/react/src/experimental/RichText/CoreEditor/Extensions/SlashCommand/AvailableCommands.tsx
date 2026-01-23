import { Editor } from "@tiptap/react"

import { IconType } from "@/components/F0Icon"
import {
  CheckDouble,
  ChevronDown,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Image,
  List,
  Minus,
  OlList,
  Quote,
} from "@/icons/app"
import { I18nContextType } from "@/lib/providers/i18n"

import { AIBlockConfig } from "../AIBlock"
import {
  DEFAULT_ACCEPTED_TYPES,
  ImageUploadConfig,
  insertImageFromFile,
} from "../Image"

interface CommandItem {
  title: string
  icon?: IconType
  emoji?: string
  command: (editor: Editor) => void
}

interface CommandGroup {
  title: string
  commands: CommandItem[]
}

interface AvailableCommandsProps {
  aiBlockConfig?: AIBlockConfig
  imageUploadConfig?: ImageUploadConfig
  translations: I18nContextType
}

const availableCommands = ({
  aiBlockConfig,
  translations,
  imageUploadConfig,
}: AvailableCommandsProps): CommandItem[] => {
  const groups = getGroupedCommands({
    aiBlockConfig,
    translations,
    imageUploadConfig,
  })
  return groups.flatMap((group) => group.commands)
}

interface GetGroupedCommandsProps {
  aiBlockConfig?: AIBlockConfig
  translations: I18nContextType
  imageUploadConfig?: ImageUploadConfig
}

const getGroupedCommands = ({
  aiBlockConfig,
  translations,
  imageUploadConfig,
}: GetGroupedCommandsProps): CommandGroup[] => {
  return [
    // Only include AI Block group if config is provided
    ...(aiBlockConfig?.buttons && aiBlockConfig.buttons.length > 0
      ? [
          {
            title: aiBlockConfig.title,
            commands: [
              ...aiBlockConfig.buttons.map((button) => ({
                title: button.label,
                command: (editor: Editor) => {
                  editor
                    .chain()
                    .focus()
                    .executeAIAction(button.type, aiBlockConfig)
                    .run()
                },
                icon: button.icon,
              })),
            ],
          },
        ]
      : []),
    {
      title: translations.richTextEditor.groups.textStyles,
      commands: [
        {
          title: translations.richTextEditor.heading1,
          command: (editor) => {
            const { from, to } = editor.state.selection
            editor
              .chain()
              .focus()
              .setTextSelection({ from, to })
              .toggleHeading({ level: 1 })
              .run()
          },
          icon: Heading1,
        },
        {
          title: translations.richTextEditor.heading2,
          command: (editor) => {
            const { from, to } = editor.state.selection
            editor
              .chain()
              .focus()
              .setTextSelection({ from, to })
              .toggleHeading({ level: 2 })
              .run()
          },
          icon: Heading2,
        },
        {
          title: translations.richTextEditor.heading3,
          command: (editor) => {
            const { from, to } = editor.state.selection
            editor
              .chain()
              .focus()
              .setTextSelection({ from, to })
              .toggleHeading({ level: 3 })
              .run()
          },
          icon: Heading3,
        },
      ],
    },
    {
      title: translations.richTextEditor.groups.lists,
      commands: [
        {
          title: translations.richTextEditor.bulletList,
          command: (editor) => {
            const { from, to } = editor.state.selection
            editor
              .chain()
              .focus()
              .setTextSelection({ from, to })
              .toggleBulletList()
              .run()
          },
          icon: List,
        },
        {
          title: translations.richTextEditor.orderedList,
          command: (editor) => {
            const { from, to } = editor.state.selection
            editor
              .chain()
              .focus()
              .setTextSelection({ from, to })
              .toggleOrderedList()
              .run()
          },
          icon: OlList,
        },
        {
          title: translations.richTextEditor.taskList,
          command: (editor) => {
            const { from, to } = editor.state.selection
            editor
              .chain()
              .focus()
              .setTextSelection({ from, to })
              .toggleTaskList()
              .run()
          },
          icon: CheckDouble,
        },
      ],
    },
    {
      title: translations.richTextEditor.groups.blocks,
      commands: [
        ...(imageUploadConfig
          ? [
              {
                title: "Image",
                command: (editor: Editor) => {
                  // Create a file input to select an image
                  const input = document.createElement("input")
                  input.type = "file"
                  input.accept = DEFAULT_ACCEPTED_TYPES.join(",")
                  input.onchange = () => {
                    const file = input.files?.[0]
                    if (file) {
                      insertImageFromFile(editor, file, imageUploadConfig)
                    }
                  }
                  input.click()
                },
                icon: Image,
              },
            ]
          : []),
        {
          title: translations.richTextEditor.details,
          command: (editor) => {
            const { from, to } = editor.state.selection
            editor
              .chain()
              .focus()
              .setTextSelection({ from, to })
              .setDetails()
              .run()
          },
          icon: ChevronDown,
        },
        {
          title: translations.richTextEditor.codeBlock,
          command: (editor) => {
            const { from, to } = editor.state.selection
            editor
              .chain()
              .focus()
              .setTextSelection({ from, to })
              .toggleCodeBlock()
              .run()
          },
          icon: Code,
        },
        {
          title: translations.richTextEditor.quote,
          command: (editor) => {
            const { from, to } = editor.state.selection
            editor
              .chain()
              .focus()
              .setTextSelection({ from, to })
              .toggleBlockquote()
              .run()
          },
          icon: Quote,
        },
        {
          title: translations.richTextEditor.divider,
          command: (editor) => {
            const { from, to } = editor.state.selection
            editor
              .chain()
              .focus()
              .setTextSelection({ from, to })
              .setHorizontalRule()
              .run()
          },
          icon: Minus,
        },
      ],
    },
  ]
}

export { availableCommands, getGroupedCommands }
export type { AIBlockConfig, CommandGroup, CommandItem }
