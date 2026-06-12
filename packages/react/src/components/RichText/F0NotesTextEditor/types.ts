import type { JSONContent } from "@tiptap/react"

import type { F0AlertProps } from "@/components/F0Alert"
import type { HeaderSecondaryAction } from "@/experimental/Information/Headers/BaseHeader"
import type { MetadataItem } from "@/experimental/Information/Headers/Metadata"
import type {
  PrimaryActionButton,
  PrimaryDropdownAction,
} from "@/experimental/Information/utils"
import type { DropdownItem } from "@/experimental/Navigation/Dropdown"

import type { enhanceConfig } from "../internal/Enhance/types"
import type { AIBlockConfig } from "../internal/Extensions/AIBlock"
import type { ImageUploadConfig } from "../internal/Extensions/Image"
import { Message, User } from "../internal/Extensions/Transcript"
import type { HeaderStatusProps } from "./components/Header"

export type { ImageUploadConfig } from "../internal/Extensions/Image"
export type {
  enhanceConfig,
  EnhancementOption,
} from "../internal/Enhance/types"
export type { Message, User } from "../internal/Extensions/Transcript"
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
export type { HeaderProps, HeaderStatusProps } from "./components/Header"

export interface F0NotesTextEditorProps {
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
  status?: HeaderStatusProps
  alert?: F0AlertProps
}

export interface F0NotesTextEditorSkeletonProps {
  withHeader?: boolean
  withTitle?: boolean
}

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

export type F0NotesTextEditorHandle = {
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

/** @deprecated Use F0NotesTextEditorProps */
export type NotesTextEditorProps = F0NotesTextEditorProps
/** @deprecated Use F0NotesTextEditorHandle */
export type NotesTextEditorHandle = F0NotesTextEditorHandle
/** @deprecated Use F0NotesTextEditorSkeletonProps */
export type NotesTextEditorSkeletonProps = F0NotesTextEditorSkeletonProps

export type {
  DeleteBlockNotesTextEditorPageDocumentPatch,
  InsertAfterNotesTextEditorPageDocumentPatch,
  InsertBeforeNotesTextEditorPageDocumentPatch,
  NotesTextEditorPageDocumentPatch,
  NotesTextEditorSnapshot,
  ReplaceBlockNotesTextEditorPageDocumentPatch,
  ReplaceContentNotesTextEditorPageDocumentPatch,
  TopLevelAppendNotesTextEditorPageDocumentPatch,
  TopLevelPrependNotesTextEditorPageDocumentPatch,
}
