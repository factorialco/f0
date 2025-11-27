// Base exports (for web and expo)
export { AiChat, AiChatProvider, type AiChatProviderProps } from "./index"
export { useAiChat } from "./providers/AiChatStateProvider"

// Standalone components
export { ActionItem, type ActionItemProps } from "../ActionItem"
export {
  AssistantMessage,
  type AssistantMessageProps,
} from "../AssistantMessage"
export { ChatTextarea, type ChatTextareaProps } from "../ChatTextarea"
export {
  CollapsibleMessage,
  type CollapsibleMessageProps,
} from "../CollapsibleMessage"
export {
  FeedbackModal,
  FeedbackModalProvider,
  useFeedbackModal,
  type FeedbackModalProps,
  type FeedbackModalState,
  type UserReaction,
} from "../FeedbackModal"
export {
  HILActionConfirmation,
  type HILActionConfirmationProps,
} from "../HILActionConfirmation"
export {
  MessageSources,
  type MessageSourcesProps,
  type Source,
} from "../MessageSources"
export { OneIcon, type OneIconProps } from "../OneIcon"
export { OneSpinner } from "../OneSpinner"
export { OneSwitch } from "../OneSwitch"

// Expo-only exports (FullScreen components)
// TODO: Review - AiFullscreenChat structure and dependencies
export { AiFullscreenChat } from "./index"
