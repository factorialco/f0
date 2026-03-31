// Main components
export { F0AiChat, F0AiChatProvider, F0AiFullscreenChat } from "./F0AiChat"

// Types
export type {
  AiChatCredits,
  AiChatMode,
  AiChatProviderProps,
  AiChatToolHint,
  CanvasContent,
  CanvasContentBase,
  CreditsUsage,
  DashboardCanvasContent,
  EntityResolvers,
  PersonProfile,
  VisualizationMode,
  WelcomeScreenSuggestion,
  AiChatTranslations,
  AiChatTranslationsProviderProps,
} from "./types"

// Canvas entity registry
export { getCanvasEntity } from "./canvas"
export type { CanvasEntityDefinition } from "./canvas"

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
} from "./actions"
