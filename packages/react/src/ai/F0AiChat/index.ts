// Main components
export {
  F0AiChat,
  F0AiChatProvider,
  F0AiFullscreenChat,
  FullscreenChatContext,
} from "./F0AiChat"

// Legacy aliases for backwards compatibility
export {
  F0AiChat as AiChat,
  F0AiChatProvider as AiChatProvider,
  F0AiFullscreenChat as AiFullscreenChat,
} from "./F0AiChat"

// Types
export type {
  F0AiChatProviderProps,
  WelcomeScreenSuggestion,
  AiChatTranslations,
  AiChatTranslationsProviderProps,
} from "./types"

// Legacy type alias for backwards compatibility
export type { F0AiChatProviderProps as AiChatProviderProps } from "./types"

export { aiTranslations } from "./types"

// Hooks
export { useAiChat } from "./providers/AiChatStateProvider"

// Providers
export {
  AiChatTranslationsProvider,
  useAiChatTranslations,
} from "./providers/AiChatTranslationsProvider"

// Copilot Actions
export {
  useDefaultCopilotActions,
  useOrchestratorThinkingAction,
  useMessageSourcesAction,
} from "./copilotActions"
