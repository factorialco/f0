// Base exports (for web and expo)
export { AiChat, AiChatProvider, type AiChatProviderProps } from "./index"
export { useAiChat } from "./providers/AiChatStateProvider"

export { ActionItem, type ActionItemProps } from "./ActionItem"

// Expo-only exports (FullScreen components)
// TODO: Review - AiFullscreenChat structure and dependencies
export { AiFullscreenChat } from "./index"
