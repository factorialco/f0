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
   * Host-owned compact controls rendered after the attachment action in the
   * normal action row. Controls render inside the chat form, so buttons must
   * use `type="button"` unless they intentionally submit it. Hidden while the
   * composer is clarifying or recording.
   */
  toolbarStart?: ReactNode

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
   * Where the welcome suggestions row sits relative to the composer.
   *
   * - `"above"` (the default) — its own block over the field, the arrangement
   *   every consumer has had: the row stands on the page, the field below it is
   *   a plain composer, and its popover opens upward into the welcome screen's
   *   empty space.
   *
   * - `"inside"` — the row moves INTO the field, at its foot, so the field's own
   *   border and AI focus highlight enclose it and the composer reads as a
   *   single bar about two lines tall. Its popover opens downward, because up is
   *   now the text you are about to type.
   *
   * ⚠️ `"inside"` IS A COMPOSER SHAPE, NOT JUST A POSITION. It also moves the
   * send button onto the textarea's own line (at `sm`, centred on the text) and
   * puts One's mark in front of the text. Neither is a feature bolted onto this
   * prop — they are what make the placement possible and legible. The action row
   * is full-width, so a chips row plus an action row inside one field is three
   * stacked bands and the "single bar" is gone; with send trailing the text there
   * are two, text then suggestions. The attachment, host (`toolbarStart`) and
   * dictation controls keep their own row when the host enables them; with none
   * of them the field is just the two bands.
   *
   * THE INLINE SEND FOLLOWS THE PROP, NOT THE WELCOME STATE. The suggestions
   * themselves are welcome-screen-only as they always were, but a composer that
   * put send back in the action row the moment the first message landed would
   * change shape under the reader mid-conversation. `"inside"` therefore keeps
   * the two-band bar for the whole thread; after the welcome screen it is simply
   * a bar with no chips in it.
   *
   * @default "above"
   */
  welcomeScreenSuggestionsPlacement?: "above" | "inside"

  /**
   * Cards rendered as a grid below the composer on the fullscreen welcome
   * screen. Each card carries its own `onClick`; the host decides the behavior.
   *
   * Optional and independent of `welcomeScreenSuggestions` — the two can have
   * different counts. At most 4 cards are rendered (a 2×2 grid); extras are
   * dropped.
   */
  welcomeScreenCards?: F0AiChatWelcomeCard[]

  /**
   * When true on the welcome screen, the composer adopts the fullscreen
   * layout: the input slot grows to claim the bottom half (so the textarea
   * rises toward the vertical center) and the welcome cards render below it.
   * The welcome suggestions row sits above the composer in both layouts.
   */
  fullscreen?: boolean
}
