import { CopilotKitProps } from "@copilotkit/react-core"
import { type AIMessage, type Message } from "@copilotkit/shared"

import { IconType } from "@/components/F0Icon"

/**
 * Profile data for a person entity (employee), resolved asynchronously
 * and displayed in the entity reference hover card.
 */
export type PersonProfile = {
  id: string | number
  firstName: string
  lastName: string
  avatarUrl?: string
  jobTitle?: string
}

/**
 * Map of async resolver functions keyed by entity type.
 * Each resolver takes an entity ID and returns the profile data
 * needed to render the entity reference hover card.
 *
 * Extensible: add new entity types here as needed (e.g. `team`, `department`).
 */
export type EntityResolvers = {
  person?: (id: string) => Promise<PersonProfile>
  /**
   * Search for persons by name query. Used by the @mention autocomplete
   * in the chat input to let users reference specific employees.
   */
  searchPersons?: (query: string) => Promise<PersonProfile[]>
}

/**
 * A tool hint that can be activated to prepend invisible context to the user's
 * message, telling the AI about the user's intent (e.g. "generate tables",
 * "data analysis"). Similar to Gemini's tool selector UI.
 *
 * Only one tool hint can be active at a time. It persists across messages
 * until the user explicitly removes it.
 */
export type AiChatToolHint = {
  /** Unique identifier for this tool hint */
  id: string
  /** Display label shown in the selector and chip */
  label: string
  /** Optional icon shown in the selector and chip */
  icon?: IconType
  /**
   * Prompt text injected as invisible context before the user's message.
   * The AI receives this but the user never sees it in the chat.
   */
  prompt: string
}

/**
 * Interaction mode for the AI chat
 */
export type AiChatMode = "chat" | "voice"

/**
 * Visualization mode for the AI chat
 */
export type VisualizationMode = "sidepanel" | "fullscreen"

/**
 * Tracking options for the AI chat
 */
export type AiChatTrackingOptions = {
  onVisibility?: () => void
  onClose?: () => void
  onWelcomeSuggestionClick?: (suggestion: WelcomeScreenSuggestion) => void
  onNewChat?: () => void
  onMessage?: (message: Message) => void
}

/**
 * Props for the AiChatProvider component
 */
export type AiChatProviderProps = {
  enabled?: boolean
  greeting?: string
  initialMessage?: string | string[]
  welcomeScreenSuggestions?: WelcomeScreenSuggestion[]
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
   * Optional footer content rendered below the textarea
   */
  footer?: React.ReactNode
  /**
   * Optional component rendered in place of the chat UI when voice mode is active.
   */
  VoiceMode?: React.ComponentType
  /**
   * Async resolver functions for entity references in markdown.
   * Used to fetch profile data for inline entity mentions (hover cards).
   * The consuming app provides these so the chat can resolve entity IDs
   * (e.g. employee IDs) into rich profile data without knowing the API.
   */
  entityResolvers?: EntityResolvers
  /**
   * Available tool hints that the user can activate to provide intent context
   * to the AI. Renders a selector button next to the send button.
   * Only one tool hint can be active at a time.
   */
  toolHints?: AiChatToolHint[]
  onThumbsUp?: (
    message: AIMessage,
    { threadId, feedback }: { threadId: string; feedback: string }
  ) => void
  onThumbsDown?: (
    message: AIMessage,
    { threadId, feedback }: { threadId: string; feedback: string }
  ) => void
  tracking?: AiChatTrackingOptions
} & Pick<
  CopilotKitProps,
  | "agent"
  | "credentials"
  | "children"
  | "runtimeUrl"
  | "showDevConsole"
  | "threadId"
  | "headers"
>

/**
 * Welcome screen suggestion item
 */
export type WelcomeScreenSuggestion = {
  icon: IconType
  message: string
  prompt?: string
}

/**
 * Disclaimer configuration for the chat input
 */
export type AiChatDisclaimer = {
  text: string
  link?: string
  linkText?: string
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
 * Default AI chat translations
 */
export const aiTranslations = {
  ai: {
    openChat: "Open Chat with One AI",
    closeChat: "Close Chat with One AI",
    startNewChat: "Start new chat",
    scrollToBottom: "Scroll to bottom",
    welcome: "Ask or create with One",
    defaultInitialMessage: "How can I help you today?",
    inputPlaceholder:
      "Ask about time, people, or company info and a lot of other things...",
    stopAnswerGeneration: "Stop generating",
    responseStopped: "You stopped this response",
    sendMessage: "Send message",
    thoughtsGroupTitle: "Reflection",
    resourcesGroupTitle: "Resources",
    thinking: "Thinking...",
    feedbackModal: {
      positive: {
        title: "What did you like about this response?",
        label: "Your feedback helps us make Factorial AI better",
        placeholder: "Share what worked well",
      },
      negative: {
        title: "What could have been better?",
        label: "Your feedback helps us improve future answers",
        placeholder: "Share what didn't work",
      },
    },
    dataDownloadPreview:
      "Preview {{shown}} of {{total}} rows — download the Excel to see all data.",
    expandChat: "Expand chat",
    collapseChat: "Collapse chat",
    ask: "Ask One",
    viewProfile: "View profile",
    tools: "Tools",
  },
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
