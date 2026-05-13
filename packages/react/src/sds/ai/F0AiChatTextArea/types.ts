import type { ReactNode } from "react"

import type { ClarifyingQuestionState } from "../F0ClarifyingPanel/types"
import type {
  AiChatCreditWarning,
  AiChatDisclaimer,
  AiChatFileAttachmentConfig,
  PendingContext,
  PendingQuote,
  PersonProfile,
  UploadedFile,
} from "../F0AiChat/types"

export type AttachedFile = {
  id: string
  file: File
  status: "uploading" | "uploaded" | "error"
  uploadedFile?: UploadedFile
  errorMessage?: string
}

export type UserTextPart = { type: "text"; text: string }
export type UserBinaryPart = {
  type: "binary"
  url: string
  filename: string
  mimeType: string
}

/**
 * Payload emitted by `F0AiChatTextArea` when the user submits.
 *
 * `text` already contains the inline markup the renderer expects:
 * `<entity-ref>` tags for @mentions, `<reply-quote>` for the quoted
 * fragment, and HTML-escaped user-typed text. The consumer decides how
 * to wrap it (plain string vs multipart message) when forwarding to
 * the agent.
 */
export type F0AiChatTextAreaSubmitPayload = {
  text: string
  files: UploadedFile[]
  context: PendingContext | null
}

export type F0AiChatTextAreaProps = {
  /** Emitted when the user submits. Awaited so the textarea can stay disabled. */
  onSubmit: (payload: F0AiChatTextAreaSubmitPayload) => void | Promise<void>
  /** Called when the user clicks the stop button while a response is streaming. */
  onStop?: () => void
  /** Whether a response is currently streaming. Switches the submit button to "stop". */
  inProgress?: boolean
  /**
   * Optional gate run before submission. Return `false` to abort the send
   * (e.g. show a quota dialog). The textarea stays focused and the input
   * is preserved.
   */
  onBeforeSubmit?: () => boolean | Promise<boolean>

  /** Rotating placeholders for the typewriter effect. Empty/single-entry skips the typewriter. */
  placeholders?: string[]

  /** Credit warning banner shown above the composer. */
  creditWarning?: AiChatCreditWarning

  /**
   * Clarifying question to render in place of the input. When non-null the
   * panel takes over the composer surface and submission is blocked.
   */
  clarifyingQuestion?: ClarifyingQuestionState | null

  /** Pending context shown as a chip; prepended invisibly on submit. */
  pendingContext?: PendingContext | null
  /** Called when the user dismisses pending context (or it gets consumed on submit). */
  onPendingContextChange?: (context: PendingContext | null) => void

  /** Pending quote shown as a chip above the textarea. */
  pendingQuote?: PendingQuote | null
  /** Called when the user dismisses the quote (or it gets consumed on submit). */
  onPendingQuoteChange?: (quote: PendingQuote | null) => void

  /** File attachment configuration. When omitted, attachments are disabled. */
  fileAttachments?: AiChatFileAttachmentConfig

  /** Async search used by the @-mention popover. When omitted, mentions are disabled. */
  searchPersons?: (query: string) => Promise<PersonProfile[]>

  /**
   * Registers a callback that lets external drop zones forward dropped
   * files to this textarea's file-attachment pipeline. The textarea calls
   * the registrar with the handler on mount and with `null` on unmount.
   */
  onProcessFilesRef?: (handler: ((files: File[]) => void) | null) => void

  /**
   * Optional disclaimer text + link rendered below the textarea. Hidden on
   * the welcome screen of the fullscreen layout to give the footer room.
   */
  disclaimer?: AiChatDisclaimer

  /**
   * Optional footer (e.g. powered-by, legal copy) rendered below the
   * textarea on the welcome screen.
   */
  footer?: ReactNode

  /**
   * Whether the chat is currently in its welcome state (no messages yet).
   * Controls footer visibility and welcome-screen-only layout tweaks.
   */
  isWelcomeScreen?: boolean

  /**
   * When true, the composer adopts the fullscreen layout: the welcome
   * footer is pushed to the bottom and the disclaimer is hidden so the
   * footer is the only thing under the textarea.
   */
  fullscreen?: boolean
}
