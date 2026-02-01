// Main components
export {
  F0AiChat,
  F0AiChatProvider,
  F0AiFullscreenChat,
  FullscreenChatContext,
} from "./F0AiChat"

// Standalone ChatTextArea component (can be used without F0AiChat context)
export { F0AiChatTextArea } from "../F0AiChatTextArea"
export type { F0AiChatTextAreaProps } from "../F0AiChatTextArea/types"

// Types
export type {
  F0AiChatProviderProps,
  WelcomeScreenSuggestion,
  AiChatTranslations,
  AiChatTranslationsProviderProps,
} from "./types"

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
