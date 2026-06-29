import type { ReactNode, RefObject } from "react"

import type {
  AiChatCreditWarning,
  AiChatDisclaimer,
  AiChatFileAttachmentConfig,
  PendingContext,
  PendingQuote,
  PersonProfile,
  TranscribeFn,
  UploadedFile,
  F0AiChatWelcomeCard,
  WelcomeScreenSuggestion,
  WelcomeScreenSuggestionItem,
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
 * `text` contains HTML-escaped user-typed text with `<entity-ref>` tags
 * for @mentions only. The reply quote (if any) and pending context
 * travel as separate structured fields — the adapter (factorial) owns
 * the wire encoding when forwarding to the agent.
 */
export type F0AiChatTextAreaSubmitPayload = {
  text: string
  files: UploadedFile[]
  context: PendingContext | null
  quote: PendingQuote | null
}

export type F0AiChatTextAreaProps = {
  ref: RefObject<HTMLDivElement>
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
   * Optional ReactNode rendered in place of the input. When present the
   * composer enters "clarifying" mode: form submission is blocked, the
   * gradient border activates, and a nav-hint replaces the disclaimer.
   * The host owns the panel (typically `F0ClarifyingPanel`) and its
   * state — F0 just renders the slot.
   */
  clarifyingUI?: ReactNode

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

  /**
   * Voice dictation. When provided, a microphone button is shown: recorded
   * audio is transcribed and the transcript fills the textarea (the user
   * reviews and sends it manually). When omitted, the microphone is hidden.
   */
  onTranscribe?: TranscribeFn

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
   * Grouped suggestions rendered as outline buttons above the composer on
   * the welcome screen. Clicking a group opens a single popover (above the
   * row, left-aligned, spanning the composer width) with that group's items.
   * Hovering an item previews its prompt in the textarea placeholder.
   *
   * Optional and independent of `welcomeScreenCards` — the two can have
   * different counts. No hard limit on the number of groups yet.
   */
  welcomeScreenSuggestions?: WelcomeScreenSuggestion[]
  /** Called when the user clicks a sub-suggestion. Receives the picked
   *  `item` and its parent `group` (the outline-button entry). */
  onSuggestionClick?: (
    item: WelcomeScreenSuggestionItem,
    group: WelcomeScreenSuggestion
  ) => void

  /**
   * Cards rendered as a grid below the composer on the fullscreen welcome
   * screen. Clicking a card calls `onCardSelect` with its `id` and optional
   * `message`; the host decides the behavior.
   *
   * Optional and independent of `welcomeScreenSuggestions` — the two can have
   * different counts. At most 4 cards are rendered (a 2×2 grid); extras are
   * dropped.
   */
  welcomeScreenCards?: F0AiChatWelcomeCard[]
  /**
   * Called when a welcome card is clicked, with the card's `id` and its
   * optional `message`. Branch on `id` to send the prompt, open a dialog, etc.
   */
  onCardSelect?: (id: string, message?: string) => void

  /**
   * When true on the welcome screen, the composer adopts the fullscreen
   * layout: the input slot grows to claim the bottom half (so the textarea
   * rises toward the vertical center) and the welcome cards render below it.
   * The welcome suggestions row sits above the composer in both layouts.
   */
  fullscreen?: boolean
}
