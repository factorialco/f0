/**
 * Highlight metric displayed prominently at the top of the insight card.
 */
export type InsightHighlight = {
  /**
   * The metric value to display prominently (e.g. "12", "85%", "$4,200").
   */
  value: string
  /**
   * Label describing the metric (e.g. "trainings pending", "completion rate").
   */
  label: string
}

/**
 * Serialised queryData parameters stored alongside a saved insight so it
 * can be refreshed without re-invoking the LLM.
 */
export type InsightQueryDataParams = {
  fetch: Array<{ toolId: string; args: Record<string, unknown> }>
  query: string | null
}

/**
 * Data payload for a saved insight (what gets persisted to the backend).
 */
export type InsightData = {
  title: string
  question: string
  section: string
  highlight?: InsightHighlight
  content?: string
  queryDataParams?: InsightQueryDataParams
}

/**
 * Props for the InsightCard component rendered inside the chat stream.
 *
 * Renders a collapsible card with an optional highlight metric
 * and markdown-formatted detail content. Includes a save button
 * when `onSave` is provided.
 */
export type InsightCardProps = {
  /**
   * Title shown in the collapsible header row.
   */
  title: string
  /**
   * The original user question that generated this insight.
   */
  question?: string
  /**
   * App section this insight belongs to (e.g. "trainings", "people").
   * Derived from the active skill by the agent.
   */
  section?: string
  /**
   * Optional highlight metric displayed prominently when expanded.
   */
  highlight?: InsightHighlight
  /**
   * Markdown-formatted detail content rendered below the highlight.
   */
  content?: string
  /**
   * Serialised queryData parameters for refreshing this insight.
   */
  queryDataParams?: InsightQueryDataParams
  /**
   * Callback invoked when the user clicks the save button.
   * Receives the full insight data payload.
   */
  onSave?: (data: InsightData) => void
}

/**
 * Result returned by the insight refresh endpoint.
 *
 * Contains the raw rows from the re-executed SQL query so the consumer
 * can derive updated highlight values and content.
 */
export type InsightRefreshResult = {
  rows: Record<string, unknown>[]
  total: number
}

/**
 * Props for the standalone SavedInsightCard shown outside of the chat
 * (e.g. in a carousel on the trainings page).
 */
export type SavedInsightCardProps = {
  /**
   * Unique identifier of the saved insight (from the database).
   */
  id: string | number
  /**
   * Title shown in the card header.
   */
  title: string
  /**
   * The original question that generated this insight.
   */
  question: string
  /**
   * Optional highlight metric.
   */
  highlight?: InsightHighlight
  /**
   * Markdown-formatted detail content.
   */
  content?: string
  /**
   * Serialised queryData parameters for refreshing this insight.
   * Required for the refresh button to appear.
   */
  queryDataParams?: InsightQueryDataParams
  /**
   * Whether the insight is currently being refreshed.
   */
  isRefreshing?: boolean
  /**
   * Callback invoked when the user clicks the refresh button.
   */
  onRefresh?: (id: string | number) => void
  /**
   * Callback invoked when the user clicks the delete button.
   */
  onDelete?: (id: string | number) => void
}

/**
 * Props for the InsightCarousel component.
 */
export type InsightCarouselProps = {
  /**
   * Array of saved insights to display.
   */
  insights: SavedInsightCardProps[]
  /**
   * Callback to open the ONE chat for creating a new insight.
   */
  onCreateNew?: () => void
}
