import { type AIMessage, type Message } from "@copilotkit/shared"

import { WelcomeScreenSuggestion } from "./types"

/**
 * Result of a successful file upload
 */
export type FileUploadResult = {
  url: string
  signedId?: string
  contentType?: string
  filename?: string
}

/**
 * Tracks the state of a file being uploaded
 */
export type UploadingFile = {
  file: File
  progress: number
  status: "pending" | "uploading" | "success" | "error"
  result?: FileUploadResult
  error?: string
}

/**
 * Reason for file rejection during validation
 */
export type FileRejectionReason = "size" | "type" | "custom"

/**
 * A file that was rejected during validation
 */
export type RejectedFile = {
  file: File
  reason: FileRejectionReason
  message?: string
}

/**
 * Configuration for file validation
 */
export type FileValidationConfig = {
  /**
   * Maximum file size in bytes. Files exceeding this will be rejected with reason "size"
   */
  maxFileSize?: number
  /**
   * Accepted MIME types (e.g., ["image/png", "application/pdf"])
   */
  acceptedTypes?: string[]
  /**
   * Accepted file extensions (e.g., [".png", ".pdf"])
   */
  acceptedExtensions?: string[]
  /**
   * Custom validation function. Return { valid: true } or { valid: false, message: "reason" }
   */
  validate?: (file: File) => { valid: true } | { valid: false; message: string }
}

/**
 * Context type for fullscreen chat state
 */
export type FullscreenChatContextType = {
  inProgress: boolean
  setInProgress: (value: boolean) => void
}

/**
 * Internal state for the AiChat provider
 */
export interface AiChatState {
  greeting?: string
  enabled: boolean
  agent?: string
  initialMessage?: string | string[]
  welcomeScreenSuggestions?: WelcomeScreenSuggestion[]
  placeholders?: string[]
  setPlaceholders?: React.Dispatch<React.SetStateAction<string[]>>
  onThumbsUp?: (
    message: AIMessage,
    { threadId, feedback }: { threadId: string; feedback: string }
  ) => void
  onThumbsDown?: (
    message: AIMessage,
    { threadId, feedback }: { threadId: string; feedback: string }
  ) => void
  /**
   * Configuration for file validation. When provided, enables file uploads in the chat.
   */
  fileValidation?: FileValidationConfig
  /**
   * Callback when files are rejected during attachment validation
   */
  onFilesRejected?: (rejectedFiles: RejectedFile[]) => void
  /**
   * Callback to upload a file to storage (e.g., S3).
   * Called for each file attachment when a message is sent.
   */
  onUploadFile?: (
    file: File,
    onProgress?: (progress: number) => void
  ) => Promise<FileUploadResult>
}

/**
 * Return value type for the useAiChat hook
 */
export type AiChatProviderReturnValue = {
  enabled: boolean
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  shouldPlayEntranceAnimation: boolean
  setShouldPlayEntranceAnimation: React.Dispatch<React.SetStateAction<boolean>>
  tmp_setAgent: (agent?: string) => void
  placeholders: string[]
  setPlaceholders: React.Dispatch<React.SetStateAction<string[]>>
  /**
   * Set the amount of minutes after which the chat will be cleared automatically
   * Set `null` to disable auto-clearing
   *
   * @default 15
   */
  setAutoClearMinutes: React.Dispatch<React.SetStateAction<number | null>>
  autoClearMinutes: number | null

  /**
   * The initial message to display in the chat
   */
  initialMessage?: string | string[]
  setInitialMessage: React.Dispatch<
    React.SetStateAction<string | string[] | undefined>
  >
  welcomeScreenSuggestions: WelcomeScreenSuggestion[]
  setWelcomeScreenSuggestions: React.Dispatch<
    React.SetStateAction<WelcomeScreenSuggestion[]>
  >
  onThumbsUp?: (
    message: AIMessage,
    { threadId, feedback }: { threadId: string; feedback: string }
  ) => void
  onThumbsDown?: (
    message: AIMessage,
    { threadId, feedback }: { threadId: string; feedback: string }
  ) => void
  /**
   * Clear/reset the chat conversation
   */
  clear: () => void
  /**
   * Internal function to set the clear function from CopilotKit
   * @internal
   */
  setClearFunction: (clearFn: (() => void) | null) => void
  /**
   * Send a message to the chat. If onUploadFile is configured and there are
   * attachments, they will be uploaded before the message is sent.
   * @param message - The message content as a string, or a full Message object
   */
  sendMessage: (message: string | Message) => Promise<void>
  /**
   * Internal function to set the sendMessage function from CopilotKit
   * @internal
   */
  setSendMessageFunction: (sendFn: ((message: Message) => void) | null) => void
  /**
   * Whether file uploads are enabled. True when fileValidation is provided.
   * Use this to conditionally show/hide file upload UI.
   */
  fileUploadsEnabled: boolean
  /**
   * Files attached to the current message (before sending)
   */
  attachments: File[]
  /**
   * Add a single file attachment
   */
  addAttachment: (file: File) => void
  /**
   * Add multiple file attachments
   */
  addAttachments: (files: File[]) => void
  /**
   * Remove an attachment by index
   */
  removeAttachment: (index: number) => void
  /**
   * Clear all attachments
   */
  clearAttachments: () => void
  /**
   * Files currently being uploaded
   */
  uploadingFiles: UploadingFile[]
  /**
   * Whether files are currently being uploaded
   */
  isUploading: boolean
  /**
   * Trigger the file input to open the file picker dialog.
   * Use this to programmatically open the file picker (e.g., from a suggestion button).
   */
  triggerFileInput: () => void
  /**
   * Internal function to set the file input ref from ChatTextarea
   * @internal
   */
  setFileInputRef: (ref: HTMLInputElement | null) => void
} & Pick<AiChatState, "greeting" | "agent">

/**
 * Helper function to check if a message is an agent state message
 */
export function isAgentStateMessage(message: Message): boolean {
  return message.role === "assistant" && message.agentName !== undefined
}
