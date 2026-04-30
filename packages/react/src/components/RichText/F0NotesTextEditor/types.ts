import type { JSONContent } from "@tiptap/react"

import type { WithDataTestIdProps } from "@/lib/data-testid"

import type { AIBlockConfig } from "../internal/Extensions/AIBlock"
import type { ImageUploadConfig } from "../internal/Extensions/Image"
import type { Message, User } from "../internal/Extensions/Transcript"
import type { enhanceConfig } from "../internal/Enhance/types"
import type { MetadataItem } from "@/experimental/Information/Headers/Metadata"
import type { HeaderSecondaryAction } from "@/experimental/Information/Headers/BaseHeader"
import type {
  PrimaryActionButton,
  PrimaryDropdownAction,
} from "@/experimental/Information/utils"
import type { DropdownItem } from "@/experimental/Navigation/Dropdown"

import type { BannerProps } from "./components/NotesHeader"

export type {
  ImageUploadConfig,
  ImageUploadErrorType,
} from "../internal/Extensions/Image"
export type {
  enhanceConfig,
  EnhancementOption,
} from "../internal/Enhance/types"
export type {
  MetadataItem,
  MetadataItemValue,
} from "@/experimental/Information/Headers/Metadata"
export type { HeaderSecondaryAction } from "@/experimental/Information/Headers/BaseHeader"
export type {
  PrimaryActionButton,
  PrimaryDropdownAction,
} from "@/experimental/Information/utils"
export type { DropdownItem } from "@/experimental/Navigation/Dropdown"
export type { BannerProps, BannerVariant } from "./components/NotesHeader"

interface NotesTextEditorSnapshot {
  json: JSONContent | null
  html: string | null
}

interface TopLevelPrependNotesTextEditorPageDocumentPatch {
  type: "top_level_prepend"
  blocks: JSONContent[]
}

interface TopLevelAppendNotesTextEditorPageDocumentPatch {
  type: "top_level_append"
  blocks: JSONContent[]
}

interface InsertBeforeNotesTextEditorPageDocumentPatch {
  type: "insert_before"
  targetId: string
  blocks: JSONContent[]
}

interface InsertAfterNotesTextEditorPageDocumentPatch {
  type: "insert_after"
  targetId: string
  blocks: JSONContent[]
}

interface ReplaceBlockNotesTextEditorPageDocumentPatch {
  type: "replace_block"
  targetId: string
  block: JSONContent
}

interface ReplaceContentNotesTextEditorPageDocumentPatch {
  type: "replace_content"
  targetId: string
  content: JSONContent[]
}

interface DeleteBlockNotesTextEditorPageDocumentPatch {
  type: "delete_block"
  targetId: string
}

type NotesTextEditorPageDocumentPatch =
  | TopLevelPrependNotesTextEditorPageDocumentPatch
  | TopLevelAppendNotesTextEditorPageDocumentPatch
  | InsertBeforeNotesTextEditorPageDocumentPatch
  | InsertAfterNotesTextEditorPageDocumentPatch
  | ReplaceBlockNotesTextEditorPageDocumentPatch
  | ReplaceContentNotesTextEditorPageDocumentPatch
  | DeleteBlockNotesTextEditorPageDocumentPatch

interface NotesTextEditorHandle {
  clear: () => void
  focus: () => void
  setContent: (content: string) => void
  applyPageDocumentPatch: (
    patch: NotesTextEditorPageDocumentPatch
  ) => NotesTextEditorSnapshot
  insertAIBlock: () => void
  insertTranscript: (title: string, users: User[], messages: Message[]) => void
  pushContent: (content: string) => void
  insertImage: (file: File) => void
}

interface NotesTextEditorProps extends WithDataTestIdProps {
  onChange: (value: { json: JSONContent | null; html: string | null }) => void
  placeholder: string
  initialEditorState?: { content?: JSONContent | string; title?: string }
  readonly?: boolean
  aiBlockConfig?: AIBlockConfig
  imageUploadConfig?: ImageUploadConfig
  enhanceConfig?: enhanceConfig
  onTitleChange?: (title: string) => void
  titlePlaceholder?: string
  primaryAction?: PrimaryActionButton | PrimaryDropdownAction<string>
  secondaryActions?: HeaderSecondaryAction[]
  otherActions?: DropdownItem[]
  metadata?: MetadataItem[]
  banner?: BannerProps
  showBubbleMenu?: boolean
}

interface NotesTextEditorSkeletonProps {
  withHeader?: boolean
  withTitle?: boolean
  withToolbar?: boolean
}

export type {
  DeleteBlockNotesTextEditorPageDocumentPatch,
  InsertAfterNotesTextEditorPageDocumentPatch,
  InsertBeforeNotesTextEditorPageDocumentPatch,
  NotesTextEditorHandle,
  NotesTextEditorPageDocumentPatch,
  NotesTextEditorProps,
  NotesTextEditorSkeletonProps,
  NotesTextEditorSnapshot,
  ReplaceBlockNotesTextEditorPageDocumentPatch,
  ReplaceContentNotesTextEditorPageDocumentPatch,
  TopLevelAppendNotesTextEditorPageDocumentPatch,
  TopLevelPrependNotesTextEditorPageDocumentPatch,
}
