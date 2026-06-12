import type { MentionsConfig } from "@/components/RichText/internal"
import type { TranscribeFn } from "@/sds/ai/F0AiChat/types"

import type {
  enhanceConfig,
  filesConfig,
  heightType,
  primaryActionType,
  resultType,
  secondaryActionsType,
} from "./utils/types"

export interface F0RichTextEditorProps {
  mentionsConfig?: MentionsConfig
  enhanceConfig?: enhanceConfig
  filesConfig?: filesConfig
  secondaryAction?: secondaryActionsType
  primaryAction?: primaryActionType
  onChange: (result: resultType) => void
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
  /**
   * Voice dictation: transcribes a recorded audio blob into text inserted at
   * the cursor. Same contract as F0AiChatTextArea — when omitted, the
   * microphone button is not rendered.
   */
  onTranscribe?: TranscribeFn
}

export type F0RichTextEditorHandle = {
  clear: () => void
  clearFiles: () => void
  focus: () => void
  setError: (error: string | null) => void
  setContent: (content: string) => void
}

export interface F0RichTextEditorSkeletonProps {
  rows?: number
}

/** @deprecated Use F0RichTextEditorProps */
export type RichTextEditorProps = F0RichTextEditorProps
/** @deprecated Use F0RichTextEditorHandle */
export type RichTextEditorHandle = F0RichTextEditorHandle
/** @deprecated Use F0RichTextEditorSkeletonProps */
export type RichTextEditorSkeletonProps = F0RichTextEditorSkeletonProps

export * from "./utils/types"
export * from "./utils/constants"
export type {
  MentionedUser,
  MentionsConfig,
} from "@/components/RichText/internal/Extensions/Mention/types"
