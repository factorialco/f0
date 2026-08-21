/**
 * Window events announcing a dashboard-widget drag, so drop targets elsewhere
 * in the app can invite the drag from the moment it starts instead of waiting
 * for the cursor to arrive.
 *
 * Deliberately plain DOM events rather than shared React state: the producer
 * (`DashboardGrid`, a pattern) and the consumer (the AI chat panel, a kit)
 * have no useful common ancestor to hang a context off, and neither needs to
 * import the other. Promote this to context if a third party ever joins.
 */
export const WIDGET_DRAG_START = "f0:widget-drag-start"
export const WIDGET_DRAG_END = "f0:widget-drag-end"

export type WidgetDragStartDetail = {
  /** Stable dashboard item identifier passed to a host-owned Ask One action. */
  id: string
  /** Human-readable widget title, used as the quoted text. */
  title: string
  /** Host override for Ask One. When present, chat must not mutate its quote. */
  onAskAi?: (item: { id: string; title: string }) => void
}
