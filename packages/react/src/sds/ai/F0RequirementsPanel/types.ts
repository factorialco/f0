/**
 * Status of a single requirement in an intake / multi-step flow.
 * - "pending": not gathered yet, and not the one currently being asked
 * - "current": the requirement the assistant is asking for right now
 * - "done":    gathered (a value is available, or the user explicitly skipped
 *              an optional one)
 */
export type RequirementStatus = "pending" | "current" | "done"

/**
 * A single requirement row. Pure data — the panel is a view of these.
 */
export interface RequirementItem {
  /** Stable identifier (used as the animation key) */
  id: string
  /** Short label, e.g. "Estimated cost" */
  label: string
  /**
   * The value captured so far, shown next to the label once known
   * (e.g. "50 chairs", "€2,000"). Omit while still pending.
   */
  value?: string
  /** Current status. Drives the indicator and the done counter. */
  status: RequirementStatus
  /**
   * Optional requirement: rendered muted and never blocks the flow. The user
   * not knowing it is the normal case — it should still read as "fine".
   */
  optional?: boolean
  /** Empty-state tag label shown until the value is captured (e.g. "No vendor chosen yet"). */
  placeholder?: string
}

/**
 * The full requirements checklist pushed into the F0AiChatTextArea slot.
 * Props-driven, like F0ClarifyingPanel: no coupling to useAiChat.
 */
export interface RequirementsState {
  /** Ordered requirements to show. */
  items: RequirementItem[]
  /** Panel title. Defaults to "Requirements" when omitted. */
  title?: string
}
