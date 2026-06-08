import type { ReactNode, Ref, RefObject } from "react"

import type {
  AiChatCreditWarning,
  AiChatDisclaimer,
  AiChatFileAttachmentConfig,
  PendingContext,
  PendingQuote,
  PersonProfile,
  TranscribeFn,
  UploadedFile,
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

/**
 * Imperative handle exposed via `apiRef` for driving the composer from
 * outside — e.g. an external button that populates the textarea or submits
 * it. Mirrors the house pattern used by `RichTextEditorHandle`.
 */
export type F0AiChatTextAreaHandle = {
  /** Replace the textarea content; the caret moves to the end. */
  setContent: (content: string) => void
  /** Read the current textarea content (the value as of the last render). */
  getContent: () => string
  /** Clear the textarea content. */
  clear: () => void
  /** Run the full submit pipeline (same path as the built-in button and Enter). */
  submit: () => void
  /** Focus the textarea. */
  focus: () => void
}

export type F0AiChatTextAreaProps = {
  ref: RefObject<HTMLDivElement>
  /**
   * Imperative handle for driving the composer from outside: `setContent()`
   * populates, `submit()` sends, `clear()` empties, `focus()` focuses. Lets a
   * host pair an external "send" button (with `showSubmitButton={false}`) or a
   * "use template" button with the composer. Method names mirror
   * `RichTextEditorHandle`. The plain `ref` stays the container DOM node; the
   * handle rides on this separate prop.
   */
  apiRef?: Ref<F0AiChatTextAreaHandle>

  /**
   * Called whenever the textarea content changes — typing, dictation,
   * @-mention insertion, `apiRef.setContent()`, or clear-on-submit. Mirror it
   * into host state to react to the value, e.g. to enable/disable an external
   * submit button. Fires once on mount with the initial value. Named `onChange`
   * to mirror `RichTextEditor`.
   */
  onChange?: (value: string) => void
  /** Emitted when the user submits. Awaited so the textarea can stay disabled. */
  onSubmit: (payload: F0AiChatTextAreaSubmitPayload) => void | Promise<void>
  /** Called when the user clicks the stop button while a response is streaming. */
  onStop?: () => void
  /** Whether a response is currently streaming. Switches the submit button to "stop". */
  inProgress?: boolean

  /**
   * Render the built-in submit / stop button. Defaults to `true`. Set to
   * `false` to hide it and drive submission from an external button via
   * `apiRef.current?.submit()`. Enter-to-submit still works regardless.
   */
  showSubmitButton?: boolean
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
   */
  welcomeScreenSuggestions?: WelcomeScreenSuggestion[]
  /** Called when the user clicks a sub-suggestion. Receives the picked
   *  `item` and its parent `group` (the outline-button entry). */
  onSuggestionClick?: (
    item: WelcomeScreenSuggestionItem,
    group: WelcomeScreenSuggestion
  ) => void

  /**
   * When true, the composer adopts the fullscreen layout: the welcome
   * footer is pushed to the bottom and the disclaimer is hidden so the
   * footer is the only thing under the textarea.
   */
  fullscreen?: boolean
}
