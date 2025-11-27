export { ChatHeader } from "./ChatHeader"
export { SidebarWindow as ChatWindow } from "./ChatWindow"
export { MessagesContainer } from "./MessagesContainer"
// TODO: Review - MessagesContainerFullscreen is internal, only used by AiFullscreenChat (expo-only)
// Not exported publicly, only available internally for AiFullscreenChat
export { MessagesContainerFullscreen } from "./MessagesContainerFullscreen"
export { SuggestionsList } from "./SuggestionsList"
export { UserMessage } from "./UserMessage"
export { WelcomeScreen } from "./WelcomeScreen"

// Re-export standalone components for convenience
export { AssistantMessage } from "../../AssistantMessage"
export { ChatTextarea } from "../../ChatTextarea"
export { CollapsibleMessage as AiCollapsibleMessage } from "../../CollapsibleMessage"
export { MessageSources } from "../../MessageSources"
