import type { JSONContent } from "@tiptap/react"

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
