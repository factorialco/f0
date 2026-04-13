import { type InputProps } from "@copilotkit/react-ui"

import { type AiChatCreditWarning } from "../../../types"

export type ChatTextareaProps = InputProps & {
  submitLabel?: string
  creditWarning?: AiChatCreditWarning
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
}

export type UserTextPart = { type: "text"; text: string }
export type UserBinaryPart = {
  type: "binary"
  url: string
  filename: string
  mimeType: string
}
