// Registry
export { useRegisteredActions } from "./useRegisteredActions"

// Backward compat
export { useRegisteredActions as useDefaultCopilotActions } from "./useRegisteredActions"

// Individual action hooks (for external consumers)
export { useOrchestratorThinkingAction } from "./core/orchestratorThinking/useOrchestratorThinkingAction"
export { useMessageSourcesAction } from "./core/messageSources/useMessageSourcesAction"
export { useDataDownloadAction } from "./core/dataDownload/useDataDownloadAction"
export { useDisplayDashboardAction } from "./core/displayDashboard/useDisplayDashboardAction"
export { useClarifyingQuestionAction } from "./core/clarifyingQuestion/useClarifyingQuestionAction"
export { useInsightAction } from "./core/insight/useInsightAction"
export { useInsightRefresh } from "./core/insight/useInsightRefresh"

// Insight save handler (for page-level save integration)
export { setInsightSaveHandler } from "./core/insight/InsightSaveContext"

// Insight components (for use outside the chat, e.g. in page carousels)
export { InsightCard } from "./core/insight/InsightCard"
export { SavedInsightCard } from "./core/insight/SavedInsightCard"
export { InsightCarousel } from "./core/insight/InsightCarousel"
export type {
  InsightHighlight,
  InsightData,
  InsightQueryDataParams,
  InsightRefreshResult,
  InsightCardProps,
  SavedInsightCardProps,
  InsightCarouselProps,
} from "./core/insight/types"
