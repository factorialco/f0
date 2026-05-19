import { type Message } from "@copilotkit/shared"
import { type InputProps } from "@copilotkit/react-ui"

import {
  type AiChatCreditWarning,
  type AiChatFileAttachmentConfig,
  type UploadedFile,
} from "../../../types"

export interface ChatTextareaSendContext {
  message: Message
  attachments: UploadedFile[]
}

export type ChatTextareaOnSend = (
  text: string,
  context?: ChatTextareaSendContext
) => ReturnType<InputProps["onSend"]> | void

export interface ChatTextareaProps extends Omit<InputProps, "onSend"> {
  onSend: ChatTextareaOnSend
  submitLabel?: string
  creditWarning?: AiChatCreditWarning
  fileAttachments?: AiChatFileAttachmentConfig
  placeholders?: string[]
}

export type AttachedFile = {
  id: string
  file: File
  status: "uploading" | "uploaded" | "error"
  uploadedFile?: {
    url: string
    filename: string
    mimetype: string
  }
  errorMessage?: string
}

export type UserTextPart = { type: "text"; text: string }
export type UserBinaryPart = {
  type: "binary"
  url: string
  filename: string
  mimeType: string
}
