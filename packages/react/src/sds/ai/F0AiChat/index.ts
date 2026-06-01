// Main components
export { F0AiChat, F0AiChatProvider, F0AiFullscreenChat } from "./F0AiChat"

// Types
export type {
  AiChatCredits,
  AiChatCreditWarning,
  AiChatMode,
  AiChatFileAttachmentConfig,
  AiChatProviderProps,
  AiChatToolHint,
  AppendMessage,
  AppendToolCall,
  CandidateProfile,
  CanvasContent,
  ExpenseProfile,
  CanvasContentBase,
  CreditsUsage,
  DashboardCanvasContent,
  DataDownloadCanvasContent,
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
  AiChatTranslations,
  AiChatTranslationsProviderProps,
} from "./types"

// Canvas API
export { useCanvasEntity } from "./canvas/registry"
export type { CanvasEntityDefinition, CanvasActions } from "./canvas/types"

// Canvas shell primitives
export { CanvasCard } from "./canvas/components/CanvasCard"
export type { CanvasCardProps } from "./canvas/components/CanvasCard"
export { CloseCanvasButton } from "./canvas/components/CloseCanvasButton"

// Dashboard canvas primitives
export {
  DashboardCard,
  DashboardContent,
  DashboardHeader,
  DashboardCanvasProvider,
  savedDashboardConfigStore,
} from "./canvas/entities/dashboard"
export type {
  DashboardCardProps,
  ChatDashboardConfig,
  DashboardCanvasActions,
} from "./canvas/entities/dashboard"

// Form canvas primitives
export { FormCard, FormContent, FormHeader } from "./canvas/entities/form"
export type { FormCardProps } from "./canvas/entities/form"

// Data-download canvas primitives
export {
  DataDownloadCard,
  DataDownloadContent,
  DataDownloadHeader,
  DataDownloadProvider,
} from "./canvas/entities/dataDownload"
export type {
  DataDownloadCardProps,
  DataDownloadDataset,
} from "./canvas/entities/dataDownload"

// Action UI primitives (used by host-app action renderers)
export { MessageSources } from "./actions/core/messageSources/MessageSources"
export type {
  Source,
  MessageSourcesProps,
} from "./actions/core/messageSources/types"
export { F0MessageCreditsWarning } from "./actions/core/messageCreditsWarning"
export type {
  F0MessageCreditsWarningArgs,
  F0MessageCreditsWarningProps,
} from "./actions/core/messageCreditsWarning"
export type { OrchestratorThinkingResult } from "./actions/core/orchestratorThinking/types"

// Clarifying question types (panel state is owned by useAiChat)
export type {
  ClarifyingQuestionState,
  ClarifyingSelectionMode,
  ClarifyingStepData,
  ResolvedStepAnswer,
} from "./actions/core/clarifyingQuestion/types"

// Tool-call context (host actions need it to identify their own tool call)
export { useToolCallId } from "./components/messages/AssistantMessage"

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
