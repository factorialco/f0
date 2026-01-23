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
  ActionItemProps,
  HILActionConfirmationProps,
  MessageSourcesProps,
  Source,
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

// Components - re-exported from standalone
export { F0ActionItem as ActionItem } from "../F0ActionItem"
export { F0MessageSources as MessageSources } from "../F0MessageSources"
export { F0OneIcon as AiChatOneIcon } from "../F0OneIcon"

// Internal components
export { HILActionConfirmation } from "./components/HILActionConfirmation"
export { ChatTextarea as AiChatTextarea } from "./components/ChatTextarea"
