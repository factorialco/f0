// Main components
export { F0AiChat, type F0AiChatProps, F0AiChatProvider } from "./F0AiChat"

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
  F0Message,
  F0ToolCall,
  FormCanvasContent,
  EntityResolvers,
  EntityUrlBuilders,
  EntityRefs,
  JobPostingProfile,
  RequisitionProfile,
  PersonProfile,
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

// Utilities for runtime adapters (factorial / mock / any consumer) that
// need to convert a flat `F0Message[]` to `RenderableTurn[]` or expand a
// streaming assistant message into ordered parts.
export {
  expandFromOrderedParts,
  legacyExpansion,
  type OrderedPart,
} from "./utils/expand-message-parts"
export {
  analyzeTurn,
  convertMessagesToTurns,
  extractThinkingGroup,
  type Turn,
} from "./utils/turnUtils"
export {
  filterCoagentPlaceholders,
  filterNonRenderableMessages,
  isAgentStateMessage,
  isCoagentPlaceholder,
} from "./internal-types"

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
