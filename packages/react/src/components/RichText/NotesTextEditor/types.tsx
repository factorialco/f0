import { Message, User } from "../CoreEditor/Extensions/Transcript"

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

type NotesTextEditorHandle = {
  clear: () => void
  focus: () => void
  setContent: (content: string) => void
  insertAIBlock: () => void
  insertTranscript: (title: string, users: User[], messages: Message[]) => void
  pushContent: (content: string) => void
  insertImage: (file: File) => void
}

export type { NotesTextEditorHandle }
