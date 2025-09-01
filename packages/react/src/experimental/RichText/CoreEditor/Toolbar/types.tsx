import { F0IconType } from "@/components/F0Icon"
import { Shortcut } from "@/experimental/Information/Shortcut"
import { Editor } from "@tiptap/react"
import { ComponentProps } from "react"

export interface ToolbarLabels {
  bold: string
  italic: string
  underline: string
  strike: string
  highlight: string
  heading1: string
  heading2: string
  heading3: string
  left: string
  center: string
  right: string
  justify: string
  bulletList: string
  orderedList: string
  taskList: string
  codeBlock: string
  horizontalRule: string
  quote: string
  moreOptions: string
  code: string
  divider: string
  bullet: string
  ordered: string
  task: string
  linkPlaceholder: string
  linkLabel: string
  linkPaste: string
  close: string
  [key: string]: string
}

export interface ButtonConfig {
  key: string
  icon: F0IconType
  active: (editor: Editor) => boolean
  onClick: (editor: Editor) => void
  tooltip: {
    label: string
    shortcut: string[]
  }
}

export interface ToolbarDropdownItem {
  label: string
  icon: F0IconType
  onClick: () => void
  isActive: boolean
}

export interface ToolbarButtonProps {
  onClick?: () => void
  active?: boolean
  label: string
  disabled: boolean
  icon: F0IconType
  tooltip?: {
    description?: string
    label?: string
    shortcut?: ComponentProps<typeof Shortcut>["keys"]
  }
  showLabel?: boolean
}

export interface ToolbarProps {
  editor: Editor
  isFullscreen?: boolean
  disableButtons: boolean
  onClose?: () => void
  animationComplete?: boolean
  labels: ToolbarLabels
  darkMode?: boolean
  showEmojiPicker?: boolean
  plainHtmlMode?: boolean
}
