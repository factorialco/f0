// Main components
export { F0AiChat, type F0AiChatProps, F0AiChatProvider } from "./F0AiChat"

// Markdown renderers (consumed by host's markdown library via `components` override).
export {
  markdownRenderers,
  type MarkdownTagRenderers,
} from "./components/markdownRenderers/MarkdownRenderers"

// Types
export type {
  AiChatCredits,
  AiChatCreditWarning,
  AiChatMode,
  AiChatFileAttachmentConfig,
  AiChatProviderProps,
  AppendMessage,
  AppendToolCall,
  CandidateProfile,
  CanvasContent,
  ExpenseProfile,
  CanvasContentBase,
  CreditsUsage,
  DashboardCanvasContent,
  DataDownloadCanvasContent,
  F0AIMessage,
  F0AiChatWelcomeCard,
  F0Message,
  F0ToolCall,
  FormCanvasContent,
  EntityResolvers,
  EntityUrlBuilders,
  EntityRefs,
  JobPostingProfile,
  RequisitionProfile,
  PersonProfile,
  SidePanelContent,
  UploadedFile,
  VacancyProfile,
  VisualizationMode,
  WelcomeScreenSuggestion,
  WelcomeScreenSuggestionItem,
  WelcomeSuggestionClickEvent,
  AiChatTrackingOptions,
  AiChatTranslations,
  AiChatTranslationsProviderProps,
} from "./types"

// Tool-call context (host actions need it to identify their own tool call)
export { useToolCallId } from "../F0AiMessagesContainer"

export { aiTranslations } from "./types"

// Hooks
export { useAiChat } from "./providers/AiChatStateProvider"

// Providers
export {
  AiChatTranslationsProvider,
  useAiChatTranslations,
} from "./providers/AiChatTranslationsProvider"
export {
  FormCardValueFormatterProvider,
  useFormCardValueFormatter,
  useSetFormCardValueFormatter,
  type FormCardValueFormatterEntry,
} from "./providers/FormCardValueFormatterProvider"
