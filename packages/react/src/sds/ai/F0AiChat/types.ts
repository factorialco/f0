import { CopilotKitProps } from "@copilotkit/react-core"
import { type AIMessage, type Message } from "@copilotkit/shared"

import { IconType } from "@/components/F0Icon"
import { defaultTranslations } from "@/lib/providers/i18n/i18n-provider-defaults"

import type { ChatDashboardConfig } from "./canvas/entities/dashboard/types"
export type { PersonProfile } from "./components/markdownRenderers/entityRef/entities/person/types"
export type { EntityResolvers } from "./components/markdownRenderers/entityRef/types"
import type { EntityResolvers } from "./components/markdownRenderers/entityRef/types"

/**
 * Base shape shared by all canvas content types.
 * Every entity adds its own fields on top of this.
 */
export type CanvasContentBase = {
  type: string
  title: string
  toolCallId?: string
}

/**
 * Dashboard canvas content — renders an analytics dashboard.
 */
export type DashboardCanvasContent = CanvasContentBase & {
  type: "dashboard"
  config: ChatDashboardConfig
  apiConfig: { baseUrl: string; headers: Record<string, string> }
}

/**
 * Discriminated union for canvas panel content.
 * Add new entity types to this union as they are implemented.
 */
export type CanvasContent = DashboardCanvasContent

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
 * Interaction mode for the AI chat
 */
export type AiChatMode = "chat" | "voice"

/**
 * Visualization mode for the AI chat
 */
export type VisualizationMode = "sidepanel" | "fullscreen" | "canvas"

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
  /**
   * Credits configuration. When provided, a credits button is shown in the chat header.
   * Groups fetchUsage, upgradePlanUrl, and company/plan display info.
   */
  credits?: AiChatCredits
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
