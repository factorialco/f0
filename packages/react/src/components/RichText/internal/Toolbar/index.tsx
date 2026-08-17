import { Editor, useEditorState } from "@tiptap/react"
import { compact } from "lodash"
import { Fragment, ReactNode, memo, useMemo } from "react"

import { F0ButtonToggle } from "@/components/F0ButtonToggle"
import { Picker } from "@/sds/social/Reactions/Picker"
import {
  AlignTextCenter,
  AlignTextJustify,
  AlignTextLeft,
  AlignTextRight,
  Bold,
  CheckDouble,
  ChevronDown,
  Code,
  Ellipsis,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  List,
  Minus,
  OlList,
  Pencil,
  Quote,
  Strikethrough,
  Underline,
} from "@/icons/app"
import { I18nContextType, useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { LinkPopup } from "./LinkPopup"
import { ToolbarDivider } from "./ToolbarDivider"
import { ToolbarDropdown } from "./ToolbarDropdown"
import { ButtonConfig, ToolbarProps } from "./types"

const intersperse = (arr: ReactNode[], sep: ReactNode) =>
  arr.map((item, index) => (
    <Fragment key={`intersperse-${index}`}>
      {item}
      {index < arr.length - 1 && sep}
    </Fragment>
  ))

const createFormatButtons = (translations: I18nContextType): ButtonConfig[] => [
  {
    key: "bold",
    icon: Bold,
    label: translations.richTextEditor.bold,
    active: (editor) => editor.isActive("bold"),
    onClick: (editor) => editor.chain().focus().toggleBold().run(),
    tooltip: {
      label: `**${translations.richTextEditor.bold}**`,
      shortcut: ["cmd", "b"],
    },
  },
  {
    key: "italic",
    icon: Italic,
    label: translations.richTextEditor.italic,
    active: (editor) => editor.isActive("italic"),
    onClick: (editor) => editor.chain().focus().toggleItalic().run(),
    tooltip: {
      label: `*${translations.richTextEditor.italic}*`,
      shortcut: ["cmd", "i"],
    },
  },
  {
    key: "underline",
    icon: Underline,
    label: translations.richTextEditor.underline,
    active: (editor) => editor.isActive("underline"),
    onClick: (editor) => editor.chain().focus().toggleUnderline().run(),
    tooltip: {
      label: `_${translations.richTextEditor.underline}_`,
      shortcut: ["cmd", "u"],
    },
  },
  {
    key: "strike",
    icon: Strikethrough,
    label: translations.richTextEditor.strike,
    active: (editor) => editor.isActive("strike"),
    onClick: (editor) => editor.chain().focus().toggleStrike().run(),
    tooltip: {
      label: `~${translations.richTextEditor.strike}~`,
      shortcut: ["cmd", "shift", "s"],
    },
  },
]

const createHeadingButtons = (
  translations: I18nContextType
): ButtonConfig[] => [
  {
    key: "heading1",
    icon: Heading1,
    label: translations.richTextEditor.heading1,
    active: (editor) => editor.isActive("heading", { level: 1 }),
    onClick: (editor) =>
      editor.chain().focus().toggleHeading({ level: 1 }).run(),
    tooltip: {
      label: `# ${translations.richTextEditor.heading1}`,
      shortcut: ["cmd", "1"],
    },
  },
  {
    key: "heading2",
    icon: Heading2,
    label: translations.richTextEditor.heading2,
    active: (editor) => editor.isActive("heading", { level: 2 }),
    onClick: (editor) =>
      editor.chain().focus().toggleHeading({ level: 2 }).run(),
    tooltip: {
      label: `## ${translations.richTextEditor.heading2}`,
      shortcut: ["cmd", "2"],
    },
  },
  {
    key: "heading3",
    icon: Heading3,
    label: translations.richTextEditor.heading3,
    active: (editor) => editor.isActive("heading", { level: 3 }),
    onClick: (editor) =>
      editor.chain().focus().toggleHeading({ level: 3 }).run(),
    tooltip: {
      label: `### ${translations.richTextEditor.heading3}`,
      shortcut: ["cmd", "3"],
    },
  },
]

const createListButtons = (
  translations: I18nContextType,
  plainHtmlMode: boolean
): ButtonConfig[] => [
  {
    key: "bulletList",
    icon: List,
    label: translations.richTextEditor.bulletList,
    active: (editor) => editor.isActive("bulletList"),
    onClick: (editor) => editor.chain().focus().toggleBulletList().run(),
    tooltip: {
      label: `- ${translations.richTextEditor.bulletList}`,
      shortcut: ["cmd", "alt", "8"],
    },
  },
  {
    key: "orderedList",
    icon: OlList,
    label: translations.richTextEditor.orderedList,
    active: (editor) => editor.isActive("orderedList"),
    onClick: (editor) => editor.chain().focus().toggleOrderedList().run(),
    tooltip: {
      label: `1. ${translations.richTextEditor.orderedList}`,
      shortcut: ["cmd", "alt", "7"],
    },
  },
  ...(!plainHtmlMode
    ? ([
        {
          key: "taskList",
          icon: CheckDouble,
          label: translations.richTextEditor.taskList,
          active: (editor: Editor) => editor.isActive("taskList"),
          onClick: (editor: Editor) =>
            editor.chain().focus().toggleTaskList().run(),
          tooltip: {
            label: `[ ] ${translations.richTextEditor.taskList}`,
            shortcut: ["cmd", "alt", "t"],
          },
        },
        {
          key: "highlight",
          icon: Pencil,
          label: translations.richTextEditor.highlight,
          active: (editor: Editor) => editor.isActive("highlight"),
          onClick: (editor: Editor) =>
            editor.chain().focus().toggleHighlight().run(),
          tooltip: {
            label: `==${translations.richTextEditor.highlight}==`,
            shortcut: ["cmd", "alt", "h"],
          },
        },
      ] satisfies ButtonConfig[])
    : []),
]

const TEXT_ALIGN_OPTIONS = [
  { value: "left", label: "Left", icon: AlignTextLeft },
  { value: "center", label: "Center", icon: AlignTextCenter },
  { value: "right", label: "Right", icon: AlignTextRight },
  { value: "justify", label: "Justify", icon: AlignTextJustify },
] as const

type TextAlignValue = (typeof TEXT_ALIGN_OPTIONS)[number]["value"]

export const Toolbar = memo(function Toolbar({
  editor,
  isFullscreen = false,
  disableButtons,
  animationComplete = true,
  darkMode = false,
  showEmojiPicker = true,
  plainHtmlMode = false,
}: ToolbarProps) {
  const translations = useI18n()

  const formatButtons = useMemo(
    () => createFormatButtons(translations),
    [translations]
  )
  const headingButtons = useMemo(
    () => createHeadingButtons(translations),
    [translations]
  )
  const listButtons = useMemo(
    () => createListButtons(translations, plainHtmlMode),
    [translations, plainHtmlMode]
  )

  // Subscribe only to the active-state snapshot: the toolbar re-renders when a
  // toggle actually changes (deep-equal), not on every editor transaction.
  const activeStates = useEditorState({
    editor,
    selector: ({ editor: editorInstance }) => ({
      buttons: Object.fromEntries(
        [...formatButtons, ...headingButtons, ...listButtons].map((config) => [
          config.key,
          config.active(editorInstance),
        ])
      ),
      textAlign: (TEXT_ALIGN_OPTIONS.find(({ value }) =>
        editorInstance.isActive({ textAlign: value })
      )?.value ?? "left") as TextAlignValue,
      codeBlock: editorInstance.isActive("codeBlock"),
      horizontalRule: editorInstance.isActive("horizontalRule"),
      blockquote: editorInstance.isActive("blockquote"),
      details: editorInstance.isActive("details"),
    }),
  })

  const renderButtons = (configs: ButtonConfig[]) => (
    <div className="flex flex-row items-center gap-0.5">
      {configs.map((config) => (
        <F0ButtonToggle
          key={config.key}
          label={config.label}
          icon={config.icon}
          selected={activeStates.buttons[config.key]}
          disabled={disableButtons}
          onSelectedChange={() => config.onClick(editor)}
        />
      ))}
    </div>
  )

  const formattingGroup = renderButtons(formatButtons)
  const textSizeGroup = renderButtons(headingButtons)

  const activeAlign =
    TEXT_ALIGN_OPTIONS.find(({ value }) => value === activeStates.textAlign) ??
    TEXT_ALIGN_OPTIONS[0]

  const moreOptionsGroup = (
    <div className="flex flex-row items-center gap-0.5">
      <ToolbarDropdown
        darkMode={darkMode}
        items={[
          {
            label: translations.richTextEditor.left,
            icon: AlignTextLeft,
            onClick: () => editor.chain().focus().setTextAlign("left").run(),
            isActive: activeStates.textAlign === "left",
          },
          {
            label: translations.richTextEditor.center,
            icon: AlignTextCenter,
            onClick: () => editor.chain().focus().setTextAlign("center").run(),
            isActive: activeStates.textAlign === "center",
          },
          {
            label: translations.richTextEditor.right,
            icon: AlignTextRight,
            onClick: () => editor.chain().focus().setTextAlign("right").run(),
            isActive: activeStates.textAlign === "right",
          },
          {
            label: translations.richTextEditor.justify,
            icon: AlignTextJustify,
            onClick: () => editor.chain().focus().setTextAlign("justify").run(),
            isActive: activeStates.textAlign === "justify",
          },
        ]}
        disabled={disableButtons}
        activator={{
          label: activeAlign.label,
          icon: activeAlign.icon,
        }}
      />
      <ToolbarDivider hidden={!isFullscreen} />

      {renderButtons(listButtons)}

      <ToolbarDropdown
        darkMode={darkMode}
        items={[
          {
            icon: Code,
            label: translations.richTextEditor.codeBlock,
            onClick: () => editor.chain().focus().toggleCodeBlock().run(),
            isActive: activeStates.codeBlock,
          },
          {
            icon: Minus,
            label: translations.richTextEditor.divider,
            onClick: () => editor.chain().focus().setHorizontalRule().run(),
            isActive: activeStates.horizontalRule,
          },
          {
            icon: Quote,
            label: translations.richTextEditor.quote,
            onClick: () => editor.chain().focus().toggleBlockquote().run(),
            isActive: activeStates.blockquote,
          },
          {
            icon: ChevronDown,
            label: translations.richTextEditor.details,
            onClick: () => editor.chain().focus().setDetails().run(),
            isActive: activeStates.details,
          },
        ]}
        disabled={disableButtons}
        activator={{
          label: translations.richTextEditor.moreOptions,
          icon: Ellipsis,
        }}
      />
    </div>
  )

  const linkGroup = [
    <LinkPopup key="link-popup" editor={editor} disabled={disableButtons} />,
  ]

  const emojiGroup = (
    <Picker
      variant="ghost"
      onSelect={(emoji) => {
        editor.chain().focus().insertContent(emoji).run()
      }}
    />
  )

  const groups = compact([
    linkGroup,
    showEmojiPicker && !disableButtons && emojiGroup,
    formattingGroup,
    textSizeGroup,
    moreOptionsGroup,
  ])

  return (
    <div className={cn("flex flex-row items-start gap-2 overflow-hidden")}>
      <div
        className={cn(
          "flex grow flex-row items-center",
          animationComplete
            ? "scrollbar-macos overflow-x-auto overflow-y-hidden"
            : "overflow-hidden"
        )}
      >
        {intersperse(groups, <ToolbarDivider />)}
      </div>
    </div>
  )
})

// Export all toolbar components
export { LinkPopup } from "./LinkPopup"
export { ToolbarDivider } from "./ToolbarDivider"
export { ToolbarDropdown } from "./ToolbarDropdown"
export type { ButtonConfig, ToolbarProps } from "./types"
