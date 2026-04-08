import type { JSONContent } from "@tiptap/react"
import type { Message, User } from "../CoreEditor/Extensions/Transcript"

export type { ImageUploadConfig } from "../CoreEditor/Extensions/Image"
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
export type { BannerProps, BannerVariant } from "./Header"

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

export type {
  DeleteBlockNotesTextEditorPageDocumentPatch,
  InsertAfterNotesTextEditorPageDocumentPatch,
  InsertBeforeNotesTextEditorPageDocumentPatch,
  NotesTextEditorHandle,
  NotesTextEditorPageDocumentPatch,
  NotesTextEditorSnapshot,
  ReplaceBlockNotesTextEditorPageDocumentPatch,
  ReplaceContentNotesTextEditorPageDocumentPatch,
  TopLevelAppendNotesTextEditorPageDocumentPatch,
  TopLevelPrependNotesTextEditorPageDocumentPatch,
}
