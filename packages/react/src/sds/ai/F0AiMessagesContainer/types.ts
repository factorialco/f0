/**
 * Loose message shape used by the headless container and its
 * subcomponents. Mirrors the CopilotKit `Message`/`AIMessage` shape
 * (which the bridge builds upstream) but is owned by f0 so the
 * headless boundary doesn't import from `@copilotkit/shared`.
 *
 * Most fields are optional / wide on purpose — the headless renders
 * what it finds and ignores the rest.
 */
export type Message = {
  id?: string
  role?: string
  content?: unknown
  toolCalls?: Array<{
    id: string
    type?: string
    function?: { name: string; arguments: string }
  }>
  generativeUI?: () => unknown
  rawData?: unknown
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

/** Assistant-flavoured `Message`. Same shape — alias for self-documentation. */
export type AIMessage = Message

/**
 * Pre-processed turn ready to render. The bridge (F0AiChat/Connected*)
 * assembles these by filtering CopilotKit bookkeeping, expanding AG-UI
 * tool-call messages, and analysing role/stream state. The headless
 * container iterates them as-is — no message-shape inspection.
 *
 * A turn renders as: leading user messages → optional Thinking section →
 * assistant messages → optional inline live-thinking message → optional
 * end-of-turn indicator → optional feedback footer.
 */
export type RenderableTurn = {
  /** Messages rendered before the thinking section (typically the user message). */
  userMessages: Message[]
  /**
   * Optional collapsible "thinking" header rendered between user and
   * assistant blocks. Titles are pre-parsed upstream.
   */
  thinking?: {
    titles: string[]
    /**
     * Whether this turn is still streaming. The collapsible stays locked
     * open while true (no chevron, no toggle) and auto-collapses on the
     * transition to false.
     */
    inProgress?: boolean
    /**
     * Whether the agent already moved from reflecting to writing the
     * response. When true every item renders as `completed`; otherwise
     * the last item is `executing` while the rest are `completed`.
     */
    isWriting?: boolean
  }
  /** Messages rendered after the thinking section (assistant replies). */
  assistantMessages: Message[]
  /** True while the agent is still producing content for this turn. */
  isInProgress: boolean
  /**
   * Optional end-of-turn indicator:
   * - `"thinking"`: agent is running but hasn't emitted any assistant output
   *   yet (renders an action item titled "Thinking...").
   * - `"activity"`: agent is streaming with some assistant output already
   *   visible (renders an empty action item).
   */
  endIndicator?: "thinking" | "activity"
  /**
   * Optional feedback footer (thumbs + copy button). When omitted, the
   * turn renders without feedback affordances.
   */
  feedback?: {
    /** Concatenated assistant content for the copy button. */
    content: string
    /** Reference message attached to feedback submissions. */
    targetMessage: Message
  }
}

/** Props for the Thinking collapsible section. */
export type ThinkingProps = {
  /** Pre-parsed step titles to show inside the collapsed group. */
  titles: string[]
  /** Section heading (defaults to "Thoughts" from i18n). */
  title?: string
  /**
   * Whether the turn is still streaming. Locks the collapsible open (no
   * chevron, no user toggle) while true and auto-collapses on the
   * transition to false. After that, the user can toggle freely.
   */
  inProgress?: boolean
  /**
   * Whether the agent already started writing the response. When true,
   * every item renders as `completed` regardless of `inProgress`.
   */
  isWriting?: boolean
}
