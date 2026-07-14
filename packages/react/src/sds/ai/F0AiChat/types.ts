import { IconType } from "@/components/F0Icon"
import { defaultTranslations } from "@/lib/providers/i18n/i18n-provider-defaults"

import type {
  CanvasActions,
  CanvasContent,
  CanvasContentBase,
  CanvasEntityDefinition,
  DashboardCanvasContent,
  DataDownloadCanvasContent,
  FormCanvasContent,
} from "../canvas/types"

/**
 * Loose message shape used inside f0. Mirrors the CopilotKit `Message`
 * shape so adapters (factorial, mock runtime) can map back and forth
 * with no field rename, but is owned by f0 — nothing in `src/` imports
 * from `@copilotkit/*` anymore.
 */
export type F0ToolCall = {
  id: string
  type?: "function"
  function: {
    name: string
    arguments: string
  }
}

export type F0Message = {
  id: string
  role: "user" | "assistant" | "system" | "tool"
  content?: unknown
  toolCalls?: F0ToolCall[]
  toolCallId?: string
  createdAt?: string
  generativeUI?: () => unknown
  rawData?: unknown
  /**
   * Reply quote text attached to the message by the composer. Rendered
   * as a block above the user bubble. Adapters (factorial / mock) own
   * the wire encoding; F0 only reads this structured field.
   */
  replyQuote?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

/** Assistant-flavoured `F0Message`. Same shape — alias kept for clarity. */
export type F0AIMessage = F0Message

// Re-export canvas content types for backwards-compatible public API
export type {
  CanvasContent,
  CanvasContentBase,
  DashboardCanvasContent,
  DataDownloadCanvasContent,
  FormCanvasContent,
}

export type { PersonProfile } from "./components/markdownRenderers/entityRef/entities/person/types"
export type { CandidateProfile } from "./components/markdownRenderers/entityRef/entities/candidate/types"
export type { JobPostingProfile } from "./components/markdownRenderers/entityRef/entities/jobPosting/types"
export type { RequisitionProfile } from "./components/markdownRenderers/entityRef/entities/requisition/types"
export type { VacancyProfile } from "./components/markdownRenderers/entityRef/entities/vacancy/types"
export type { ExpenseProfile } from "./components/markdownRenderers/entityRef/entities/expense/types"
export type {
  EntityResolvers,
  EntityUrlBuilders,
  EntityRefs,
} from "./components/markdownRenderers/entityRef/types"
import type { EntityRefs } from "./components/markdownRenderers/entityRef/types"

/**
 * A tool call to inject via appendMessages.
 * IDs are generated internally unless `id` is provided.
 * When pairing with a tool-result message, provide the same `id`
 * in both the tool call and the tool-result's `toolCallId`.
 */
export type AppendToolCall = {
  id?: string
  function: {
    name: string
    arguments: string
  }
}

/**
 * A message to inject via appendMessages.
 * IDs are generated internally — callers only provide role, content, and
 * optional tool calls.
 */
export type AppendMessage =
  | {
      role: "user" | "assistant"
      content: string
      toolCalls?: AppendToolCall[]
    }
  | {
      /** Tool result message — pairs with a toolCall from a previous assistant message */
      role: "tool"
      content: string
      /**
       * ID of the paired tool call. Must equal the corresponding assistant
       * message's `toolCalls[i].id` — supply `AppendToolCall.id` on that call
       * and pass the same value here so the messages are correctly paired.
       */
      toolCallId: string
    }

/**
 * Pre-loaded context shown as an empty state in the chat.
 * The `context` string is prepended to the user's first message
 * as `<pending-context>...</pending-context>` so the agent receives it.
 * The conversation is not created until the user actually sends a message.
 */
export type PendingContext = {
  /** Human-readable label shown in the empty state (e.g. "Expenses dashboard") */
  label: string
  /** Full context string prepended invisibly to the first user message */
  context: string
}

/**
 * Quoted fragment the user is replying to. Shown as a chip above the
 * textarea and, on submit, rendered as a markdown blockquote at the top of
 * the resulting user message. The blockquote alone is enough context — the
 * conversation thread tells the agent what it refers to.
 */
export type PendingQuote = {
  /** Plain-text selection (markdown stripped by the browser's toString()). */
  text: string
}

/**
 * Credits usage data returned by the host app
 */
export type CreditsUsage = {
  used: number
  total: number
}

/**
 * Credits configuration for the AI chat.
 * Groups all credits-related props into a single object.
 *
 * When provided, a credits button is shown in the chat header.
 */
export type AiChatCredits = {
  /** Async function to fetch credits usage. Called each time the popover opens. */
  fetchUsage: () => Promise<CreditsUsage>
  /** URL to the plan upgrade page. When provided, a link is shown in the popover. */
  upgradePlanUrl?: string
  /** Company name displayed in the popover header. */
  companyName?: string
  /** Company logo URL displayed in the popover header. */
  companyLogoUrl?: string
  /** Plan name displayed below the company name (e.g. "Free plan", "Enterprise"). */
  planName?: string
}

/**
 * Credit warning configuration.
 * Groups severity level and action callbacks into a single object.
 *
 * When provided, a warning banner is shown above the chat textarea.
 */
export type AiChatCreditWarning = {
  /**
   * The severity level of the warning.
   *
   * - `soft`: informational banner; the composer stays fully usable.
   * - `hard`: credits are exhausted. The banner turns critical AND the send
   *   and microphone buttons are disabled with an explanatory tooltip. Sending
   *   is blocked at every entry point (button click and the Enter key), while
   *   the textarea itself stays editable so the user keeps their draft.
   */
  level: "soft" | "hard"
  /** Called when the user dismisses the credit warning banner. */
  onDismiss?: () => void
  /** Called when the user clicks the "Get Credits" button. */
  onGetCredits?: () => void
}

/**
 * Employee credits usage data returned by the host app.
 *
 * Represents the logged-in employee's personal monthly allocation,
 * independent of any company-wide pool.
 */
export type EmployeeCreditsUsage = {
  used: number
  total: number
}

/**
 * Employee credits configuration for the AI chat.
 *
 * Independent from `credits` (the classic company-level popover).
 * When provided, a separate, employee-only credits popover trigger is shown
 * in the chat header **instead of** the classic one — the host opts into
 * this mode by passing `employeeCredits` only for employees who have a
 * per-employee monthly allocation configured.
 *
 * Hosts that don't use per-employee allocations should keep using `credits`
 * and leave `employeeCredits` undefined; behavior is unchanged.
 */
export type AiChatEmployeeCredits = {
  /** Async function to fetch the employee's credits usage. Called each time the popover opens. */
  fetchUsage: () => Promise<EmployeeCreditsUsage>
  /** Company name displayed in the popover header. */
  companyName?: string
  /** Company logo URL displayed in the popover header. */
  companyLogoUrl?: string
  /** Plan name displayed below the company name (e.g. "Free plan", "Enterprise"). */
  planName?: string
}

/**
 * Interaction mode for the AI chat
 */
export type AiChatMode = "chat" | "voice"

/**
 * Visualization mode for the AI chat
 */
export type VisualizationMode = "sidepanel" | "fullscreen" | "canvas"

/**
 * A single piece of content hosted in the side panel — the same resizable +
 * fullscreen space the F0.ai chat lives in. Only one is mounted at a time:
 * the `id` keys the content so switching conversations unmounts the previous
 * one and mounts the new. `panelContent === null` falls back to the AI chat.
 */
export type SidePanelContent = {
  id: string
  content: React.ReactNode
}

/**
 * Tracking options for the AI chat
 */
export type UploadedFile = {
  url: string
  filename: string
  mimetype: string
}

export type AiChatFileAttachmentConfig = {
  onUploadFiles: (files: File[]) => Promise<UploadedFile[]>
  allowedMimeTypes?: string | string[]
  /**
   * Maximum number of files that can be attached at once.
   * Omit or pass undefined for no limit.
   */
  maxFiles?: number
}

export type TranscribeOptions = {
  /**
   * Primary channel for live dictation: fires with the cumulative transcript
   * as it streams in, so the composer can fill the textarea while the user
   * speaks. Implementations that don't stream may call it once at the end.
   */
  onPartial: (text: string) => void
  /** Aborted when the user cancels an in-flight transcription. */
  signal?: AbortSignal
}

/**
 * Transcribes a recorded audio blob to text (voice dictation). The returned
 * promise resolves with the final transcript; `onPartial` delivers
 * intermediate results for live textarea fill. When omitted from the chat
 * config, the microphone button is not rendered.
 */
export type TranscribeFn = (
  audio: Blob,
  options: TranscribeOptions
) => Promise<string>

/**
 * Payload for `tracking.onWelcomeSuggestionClick`. Carries everything an
 * analytics layer (e.g. Amplitude) needs to attribute the click: the picked
 * sub-item, its parent group, and the resolved prompt that was actually sent.
 */
export type WelcomeSuggestionClickEvent = {
  item: WelcomeScreenSuggestionItem
  group: WelcomeScreenSuggestion
  /** Prompt actually sent to the AI — `item.prompt` falling back to `item.title`. */
  prompt: string
}

export type AiChatTrackingOptions = {
  onVisibility?: () => void
  onClose?: () => void
  onWelcomeSuggestionClick?: (event: WelcomeSuggestionClickEvent) => void
  onNewChat?: () => void
  onMessage?: (message: F0Message) => void
  /** Mic button pressed — fires on intent, even if mic permission is later denied. */
  onDictationStart?: () => void
  /** Dictation discarded by the user, while recording or mid-transcription. */
  onDictationCancel?: () => void
}

/**
 * Props for the AiChatProvider component
 */
export type AiChatProviderProps = {
  enabled?: boolean
  /**
   * Edge the whole side panel docks to (AI chat, hosted content and canvas).
   * Hosts set "left" for a chat-first experience (e.g. communications).
   * @default "right"
   */
  side?: "left" | "right"
  /**
   * Greeting phrase(s) shown by the welcome screen when the chat is empty.
   * A single string renders once; an array rotates through phrases. Purely
   * UI config — does not affect runtime behavior.
   */
  initialMessage?: string | string[]
  /**
   * Grouped suggestions rendered as outline buttons above the composer on the
   * welcome screen. Optional and independent of `welcomeScreenCards` — provide
   * either, both, or neither, in any counts. No hard limit on the number of
   * groups yet.
   */
  welcomeScreenSuggestions?: WelcomeScreenSuggestion[]
  /**
   * Cards rendered below the composer on the fullscreen welcome screen. Each
   * card carries its own `onClick` — the chat owns the layout; the host owns
   * the interaction.
   *
   * Hosts that must build a card's `onClick` inside the chat provider (e.g.
   * needing `openCanvas`) can register the cards dynamically via
   * `setWelcomeScreenCards` from `useAiChat()` instead of passing them here.
   *
   * Optional and independent of `welcomeScreenSuggestions` — provide either,
   * both, or neither, in any counts. At most 4 cards are rendered (the row is a
   * 2×2 grid); extras are dropped.
   */
  welcomeScreenCards?: F0AiChatWelcomeCard[]
  disclaimer?: AiChatDisclaimer
  /**
   * Enable resizable chat window
   * When enabled, the chat can be resized between 300px and 50% of the screen width
   */
  resizable?: boolean
  /**
   * The default visualization mode for the chat
   * When set to "fullscreen", the chat starts in fullscreen mode and auto-opens
   * @default "sidepanel"
   */
  defaultVisualizationMode?: VisualizationMode
  /**
   * When true, prevents switching between visualization modes (hides the expand/collapse button)
   * @default false
   */
  lockVisualizationMode?: boolean
  /**
   * Enable chat history UI (clickable header title + history dialog).
   * When false (default), the header shows a simple "New Chat" button instead.
   * Set to true only when the backend supports the /copilotkit/chat-history/threads route.
   * @default false
   */
  historyEnabled?: boolean
  /**
   * Optional footer content rendered below the textarea
   */
  footer?: React.ReactNode
  /**
   * Optional component rendered in place of the chat UI when voice mode is active.
   */
  VoiceMode?: React.ComponentType
  /**
   * Configuration for entity references in markdown.
   * Groups resolver functions (data fetching for hover cards) and
   * URL builders (navigation links) for each entity type.
   */
  entityRefs?: EntityRefs
  /**
   * Canvas action callbacks grouped by entity type.
   * Provides save/create functions for persisting canvas entities externally.
   */
  canvasActions?: CanvasActions
  /**
   * Canvas entity definitions keyed by `CanvasContent["type"]`. The canvas
   * panel looks up the matching definition when `openCanvas` is called.
   *
   * F0AiChat ships without built-in canvas entities; the host app supplies
   * them here so canvas logic lives in one place.
   */
  canvasEntities?: Record<string, CanvasEntityDefinition>
  /**
   * Credits configuration. When provided, a credits button is shown in the chat header.
   * Groups fetchUsage, upgradePlanUrl, and company/plan display info.
   */
  credits?: AiChatCredits
  /**
   * Employee-only credits configuration. When provided, replaces the classic
   * `credits` popover trigger with a simpler employee-only popover that shows
   * just the logged-in employee's monthly allocation. Hosts opt in by passing
   * this only when an employee has a configured per-employee allocation.
   *
   * Takes precedence over `credits` — when both are provided, only the
   * employee-only popover is rendered.
   */
  employeeCredits?: AiChatEmployeeCredits
  /**
   * Credit warning configuration. When provided, shows a warning banner above the chat textarea.
   * Groups severity level and action callbacks.
   */
  creditWarning?: AiChatCreditWarning
  /**
   * File attachment configuration. When provided, enables file uploads in the chat.
   */
  fileAttachments?: AiChatFileAttachmentConfig
  /**
   * Voice dictation. When provided, a microphone button is shown in the
   * composer: recorded audio is transcribed and the result fills the textarea
   * (the user reviews and sends it as a normal text message). When omitted,
   * the microphone is hidden.
   */
  onTranscribe?: TranscribeFn
  onThumbsUp?: (
    message: F0AIMessage,
    { threadId, feedback }: { threadId: string; feedback: string }
  ) => void
  onThumbsDown?: (
    message: F0AIMessage,
    { threadId, feedback }: { threadId: string; feedback: string }
  ) => void
  tracking?: AiChatTrackingOptions
  /**
   * Optional name of the AI agent. Forwarded to the host runtime adapter
   * (mock in stories, CopilotKit in factorial) — f0 itself only stores it.
   */
  agent?: string
  /**
   * Slot elements rendered inside `<F0AiChat />`. Host apps (factorial in
   * production, the mock runtime in stories) provide their own connected
   * wrappers — f0 ships only the shell. Passing slots here makes them
   * available to any `<F0AiChat />` mounted under this provider (used by
   * `ApplicationFrame`, which renders the chat itself).
   */
  chatHeader?: React.ReactNode
  chatMessages?: React.ReactNode
  chatInput?: React.ReactNode
  /** Children rendered inside the provider. */
  children?: React.ReactNode
}

/**
 * A single sub-suggestion shown inside a welcome-screen group's popover.
 * The `title` is the label users see; `prompt` is what gets sent to the AI
 * when they click (falls back to `title` when omitted). They can diverge so
 * you can show a short, scannable title while sending a fully-formed prompt.
 */
export type WelcomeScreenSuggestionItem = {
  title: string
  prompt?: string
}

/**
 * A welcome-screen group rendered as an outline button in the welcome row.
 * Clicking the group opens a popover listing its `items`. The number of groups
 * is not capped yet (unlike welcome cards, which top out at 4).
 */
export type WelcomeScreenSuggestion = {
  icon: IconType
  label: string
  items: WelcomeScreenSuggestionItem[]
}

/**
 * A card shown below the composer on the fullscreen welcome screen, rendered
 * as an `F0CardHorizontal`. Each card owns its behavior via `onClick`, so
 * different cards can trigger different things (send a prompt, open a dialog,
 * navigate, …).
 *
 * The chat owns the layout; the host owns the interaction. Up to 4 cards are
 * rendered (a 2×2 grid); extras are dropped.
 */
export type F0AiChatWelcomeCard = {
  /** Stable identifier, also used as the React key. */
  id: string
  icon: IconType
  title: string
  description?: string
  /**
   * Optional prompt the card represents. The card's own `onClick` decides
   * whether to send it — cards without a `message` (e.g. a "Browse templates"
   * card) simply do something else.
   */
  message?: string
  /**
   * Invoked when the card is clicked. The host wires the behavior per card —
   * send `message` as a prompt, open a dialog, navigate, … A card without an
   * `onClick` renders as non-interactive.
   */
  onClick?: () => void
}

/**
 * Disclaimer configuration for the chat input
 */
export type AiChatDisclaimer = {
  text: string
  link?: string
  linkText?: string
  /**
   * Optional click handler on the disclaimer text. When set, the text becomes
   * keyboard-activatable (Enter / Space) and gets a subtle hover hint. Used by
   * the host to wire easter eggs (e.g. the pong game) without coupling f0 to
   * any specific behaviour.
   */
  onClick?: () => void
}

/**
 * Translation shape helper type
 */
type TranslationShape<T> = {
  [K in keyof T]: T[K] extends string
    ? string
    : T[K] extends Record<string, string | Record<string, unknown>>
      ? TranslationShape<T[K]>
      : never
}

/**
 * Default AI chat translations — derived from the global defaultTranslations
 * to avoid manual duplication.
 */
export const aiTranslations = {
  ai: defaultTranslations.ai,
}

/**
 * AI Chat translations type
 */
export type AiChatTranslations = TranslationShape<typeof aiTranslations>

/**
 * Props for the AiChatTranslationsProvider component
 */
export interface AiChatTranslationsProviderProps {
  children: React.ReactNode
  translations: AiChatTranslations
}
