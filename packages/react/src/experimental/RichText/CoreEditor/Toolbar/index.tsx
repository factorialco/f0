import { Editor } from "@tiptap/react"
import { compact } from "lodash"
import { Fragment, ReactNode } from "react"

import { F0Button } from "@/components/F0Button"
import { F0ButtonToggle } from "@/components/F0ButtonToggle"
import { Picker } from "@/experimental/Information/Reactions/Picker"
import {
  AlignTextCenter,
  AlignTextJustify,
  AlignTextLeft,
  AlignTextRight,
  Bold,
  CheckDouble,
  Code,
  Cross,
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
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

import { LinkPopup } from "./LinkPopup"
import { ToolbarDivider } from "./ToolbarDivider"
import { ToolbarDropdown } from "./ToolbarDropdown"
import { ButtonConfig, ToolbarProps } from "./types"
import { getTextAlignIcon, getTextAlignLabel } from "./utils"

const intersperse = (arr: ReactNode[], sep: ReactNode) =>
  arr.map((item, index) => (
    <Fragment key={`intersperse-${index}`}>
      {item}
      {index < arr.length - 1 && sep}
    </Fragment>
  ))

export const Toolbar = ({
  editor,
  isFullscreen = false,
  disableButtons,
  onClose,
  animationComplete = true,
  darkMode = false,
  showEmojiPicker = true,
  plainHtmlMode = false,
}: ToolbarProps) => {
  const translations = useI18n()

  // Format buttons configuration
  const formatButtons: ButtonConfig[] = [
    {
      key: "bold",
      icon: Bold,
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
      active: (editor) => editor.isActive("strike"),
      onClick: (editor) => editor.chain().focus().toggleStrike().run(),
      tooltip: {
        label: `~${translations.richTextEditor.strike}~`,
        shortcut: ["cmd", "shift", "s"],
      },
    },
  ]

  // Heading buttons configuration
  const headingButtons: ButtonConfig[] = [
    {
      key: "heading1",
      icon: Heading1,
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
      active: (editor) => editor.isActive("heading", { level: 3 }),
      onClick: (editor) =>
        editor.chain().focus().toggleHeading({ level: 3 }).run(),
      tooltip: {
        label: `### ${translations.richTextEditor.heading3}`,
        shortcut: ["cmd", "3"],
      },
    },
  ]

  // List buttons configuration
  const listButtons: ButtonConfig[] = [
    {
      key: "bulletList",
      icon: List,
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
      active: (editor) => editor.isActive("orderedList"),
      onClick: (editor) => editor.chain().focus().toggleOrderedList().run(),
      tooltip: {
        label: `1. ${translations.richTextEditor.orderedList}`,
        shortcut: ["cmd", "alt", "7"],
      },
    },
    ...(!plainHtmlMode
      ? [
          {
            key: "taskList",
            icon: CheckDouble,
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
            active: (editor: Editor) => editor.isActive("highlight"),
            onClick: (editor: Editor) =>
              editor.chain().focus().toggleHighlight().run(),
            tooltip: {
              label: `==${translations.richTextEditor.highlight}==`,
              shortcut: ["cmd", "alt", "h"],
            },
          },
        ]
      : []),
  ]

  // Render buttons from configuration
  const renderButtons = (configs: ButtonConfig[]) => (
    <div className="flex flex-row items-center gap-0.5">
      {configs.map((config) => (
        <F0ButtonToggle
          key={config.key}
          label={
            translations.richTextEditor[
              config.key as keyof typeof translations.richTextEditor
            ]
          }
          icon={config.icon}
          selected={config.active(editor)}
          disabled={disableButtons}
          onSelectedChange={() => config.onClick(editor)}
        />
      ))}
    </div>
  )

  const formattingGroup = renderButtons(formatButtons)
  const textSizeGroup = renderButtons(headingButtons)

  const moreOptionsGroup = (
    <div className="flex flex-row items-center gap-0.5">
      <ToolbarDropdown
        darkMode={darkMode}
        items={[
          {
            label: translations.richTextEditor.left,
            icon: AlignTextLeft,
            onClick: () => editor.chain().focus().setTextAlign("left").run(),
            isActive:
              editor.isActive({ textAlign: "left" }) ||
              (!editor.isActive({ textAlign: "justify" }) &&
                !editor.isActive({ textAlign: "center" }) &&
                !editor.isActive({ textAlign: "right" })),
          },
          {
            label: translations.richTextEditor.center,
            icon: AlignTextCenter,
            onClick: () => editor.chain().focus().setTextAlign("center").run(),
            isActive: editor.isActive({ textAlign: "center" }),
          },
          {
            label: translations.richTextEditor.right,
            icon: AlignTextRight,
            onClick: () => editor.chain().focus().setTextAlign("right").run(),
            isActive: editor.isActive({ textAlign: "right" }),
          },
          {
            label: translations.richTextEditor.justify,
            icon: AlignTextJustify,
            onClick: () => editor.chain().focus().setTextAlign("justify").run(),
            isActive: editor.isActive({ textAlign: "justify" }),
          },
        ]}
        disabled={disableButtons}
        activator={{
          label: getTextAlignLabel(editor),
          icon: getTextAlignIcon(editor),
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
            isActive: editor.isActive("codeBlock"),
          },
          {
            icon: Minus,
            label: translations.richTextEditor.divider,
            onClick: () => editor.chain().focus().setHorizontalRule().run(),
            isActive: editor.isActive("horizontalRule"),
          },
          {
            icon: Quote,
            label: translations.richTextEditor.quote,
            onClick: () => editor.chain().focus().toggleBlockquote().run(),
            isActive: editor.isActive("blockquote"),
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
    showEmojiPicker && emojiGroup,
    formattingGroup,
    textSizeGroup,
    moreOptionsGroup,
  ])

  return (
    <div className={cn("flex flex-row items-start gap-2 overflow-hidden")}>
      {onClose && (
        <F0Button
          onClick={(e) => {
            e.preventDefault()
            onClose()
          }}
          variant="neutral"
          size="md"
          disabled={disableButtons}
          hideLabel
          label={translations.richTextEditor.close}
          icon={Cross}
        />
      )}
      <div
        className={cn(
          "flex grow flex-row items-center",
          animationComplete
            ? "scrollbar-macos overflow-x-auto"
            : "overflow-hidden"
        )}
      >
        {intersperse(groups, <ToolbarDivider />)}
      </div>
    </div>
  )
}

// Export all toolbar components
export { LinkPopup } from "./LinkPopup"
export { ToolbarButton } from "./ToolbarButton"
export { ToolbarDivider } from "./ToolbarDivider"
export { ToolbarDropdown } from "./ToolbarDropdown"
export type { ButtonConfig, ToolbarProps } from "./types"
