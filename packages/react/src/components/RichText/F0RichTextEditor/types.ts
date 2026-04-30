import { JSONContent } from "@tiptap/react"

import { IconType } from "@/components/F0Icon"
import type { MentionsConfig } from "@/components/RichText/internal"

import { FileType } from "./utils/constants"

import type { enhanceConfig } from "@/components/RichText/internal/Enhance/types"

// Re-export enhance types from the shared internal/Enhance module
export type {
  enhanceConfig,
  enhancedTextResponse,
  EnhancementOption,
  enhanceTextParams,
} from "@/components/RichText/internal/Enhance/types"

type resultType = {
  value: string | null
  mentionIds?: string[]
}

type filesConfig = {
  onFiles: (files: File[]) => void
  multipleFiles: boolean
  maxFileSize?: number
  acceptedFileType?: FileType[]
}

type actionType = {
  label: string
  onClick: () => void
  disabled?: boolean
  variant: "default" | "outline" | "neutral" | undefined
  icon?: IconType
}

type toggleActionType = {
  label: string
  checked: boolean
  onClick: (checked?: boolean) => void
  disabled?: boolean
  hideLabel?: boolean
}

type secondaryActionType = (actionType | toggleActionType) & {
  type?: "button" | "switch"
}

type secondaryActionsType = secondaryActionType | secondaryActionType[]

type subActionType = {
  label: string
  onClick: () => void
  disabled?: boolean
  icon?: IconType
}

type primaryActionType = {
  action: actionType
  subActions?: subActionType[]
}

type heightType =
  | "xxs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "full"
  | "auto"

type lastIntentType = {
  selectedIntent?: string
  customIntent?: string
} | null

type editorStateType = {
  html: string
  json: JSONContent | null
}

interface RichTextEditorProps {
  mentionsConfig?: MentionsConfig
  enhanceConfig?: enhanceConfig
  filesConfig?: filesConfig
  secondaryAction?: secondaryActionsType
  primaryAction?: primaryActionType
  onChange: (result: resultType) => void
  onBlur?: () => void
  maxCharacters?: number
  placeholder: string
  initialEditorState?: {
    content?: string
    files?: File[]
  }
  title: string
  height?: heightType
  plainHtmlMode?: boolean
  fullScreenMode?: boolean
  onFullscreenChange?: (fullscreen: boolean) => void
  /** Whether the editor is disabled */
  disabled?: boolean
  /** Whether the editor has an error state */
  error?: boolean
  /** Whether the editor is in a loading state */
  loading?: boolean
  dataTestId?: string
}

type RichTextEditorHandle = {
  clear: () => void
  clearFiles: () => void
  focus: () => void
  setError: (error: string | null) => void
  setContent: (content: string) => void
}

interface RichTextEditorSkeletonProps {
  rows?: number
}

export type {
  actionType,
  editorStateType,
  filesConfig,
  heightType,
  lastIntentType,
  primaryActionType,
  resultType,
  RichTextEditorHandle,
  RichTextEditorProps,
  RichTextEditorSkeletonProps,
  secondaryActionsType,
  secondaryActionType,
  subActionType,
}
