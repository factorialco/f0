import { Editor } from "@tiptap/react"
import { ComponentProps } from "react"

import { IconType } from "@/components/F0Icon"
import { Shortcut } from "@/experimental/Information/Shortcut"

export interface ButtonConfig {
  key: string
  icon: IconType
  active: (editor: Editor) => boolean
  onClick: (editor: Editor) => void
  label: string
  tooltip: {
    label: string
    shortcut: string[]
  }
}

export interface ToolbarDropdownItem {
  label: string
  icon: IconType
  onClick: () => void
  isActive: boolean
}

export interface ToolbarButtonProps {
  onClick?: () => void
  active?: boolean
  label: string
  disabled: boolean
  icon: IconType
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
  darkMode?: boolean
  showEmojiPicker?: boolean
  plainHtmlMode?: boolean
}
