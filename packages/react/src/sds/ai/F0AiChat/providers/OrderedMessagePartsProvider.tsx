import {
  type AbstractAgent,
  type AgentSubscriber,
  type ToolCallArgsEvent,
  type ToolCallEndEvent,
  type ToolCallStartEvent,
  type TextMessageContentEvent,
  type TextMessageEndEvent,
  type TextMessageStartEvent,
} from "@ag-ui/client"
import { useAgent, useCopilotChatConfiguration } from "@copilotkitnext/react"
import {
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"

/**
 * A single segment of an assistant message in chronological streaming order.
 *
 * Either a chunk of prose or a tool call. The order of parts inside a
 * `Map<messageId, OrderedPart[]>` is the exact order events arrived from the
 * AG-UI runtime — which is the order the user should see them rendered in.
 */
export type OrderedPart =
  | { kind: "text"; text: string }
  | {
      kind: "tool-call"
      toolCallId: string
      toolName: string
      args: Record<string, unknown>
      complete: boolean
    }

type OrderedPartsStore = Map<string, OrderedPart[]>

type OrderedMessagePartsContextValue = {
  /**
   * Returns the chronological parts captured for a given assistant message id,
   * or `null` if no events have been captured yet (the consumer should fall
   * back to its legacy expansion in that case).
   */
  getOrderedParts: (messageId: string) => OrderedPart[] | null
  /**
   * Bumps every time a new event is captured. Consumers depend on this in
   * `useMemo` deps so the memo re-runs without forcing the parts store
   * itself to be a useState (which would thrash React for every text delta).
   */
  version: number
}

const OrderedMessagePartsContext =
  createContext<OrderedMessagePartsContextValue | null>(null)

/**
 * Subscribes to the live AG-UI agent and maintains a per-message ordered
 * parts store, so the chat UI can render text and tool-call cards in the
 * exact order they streamed in.
 *
 * Why this exists: CopilotKit / AG-UI flatten incoming streaming events
 * into `Message { content: string, toolCalls: ToolCall[] }`. Both fields
 * lose the chronological position of each chunk. f0's old expansion in
 * `MessagesContainer.tsx` had to guess and put all tool calls first, text
 * last — which broke any turn that interleaved prose and tool emissions
 * (modules upsell cards, mid-text downloadData, etc.) and produced visible
 * flicker as the streamed cards jumped between positions.
 *
 * `agent.subscribe(AgentSubscriber)` from `@ag-ui/client` exposes the raw
 * events BEFORE the reducer runs, in chronological order. We accumulate
 * them here keyed by message id and bump a version counter on every event
 * so consumers re-render. The store itself lives in a ref to avoid React
 * reconciliation churn for every text delta (events fire many times per
 * second during streaming).
 */
export const OrderedMessagePartsProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const config = useCopilotChatConfiguration()
  const { agent } = useAgent({ agentId: config?.agentId })

  const storeRef = useRef<OrderedPartsStore>(new Map())
  // Tracks which message id is currently receiving text deltas, so
  // `onTextMessageContentEvent` can append to the right open part.
  const openTextMessageIdRef = useRef<string | null>(null)
  const [version, setVersion] = useState(0)

  const bump = useCallback(() => {
    setVersion((v) => v + 1)
  }, [])

  useEffect(() => {
    if (!agent) return

    const getParts = (messageId: string): OrderedPart[] => {
      let parts = storeRef.current.get(messageId)
      if (!parts) {
        parts = []
        storeRef.current.set(messageId, parts)
      }
      return parts
    }

    const subscriber: AgentSubscriber = {
      onTextMessageStartEvent: ({
        event,
      }: {
        event: TextMessageStartEvent
      }) => {
        const messageId = event.messageId
        if (!messageId) return
        const parts = getParts(messageId)
        parts.push({ kind: "text", text: "" })
        openTextMessageIdRef.current = messageId
        bump()
      },

      onTextMessageContentEvent: ({
        event,
        textMessageBuffer,
      }: {
        event: TextMessageContentEvent
        textMessageBuffer: string
      }) => {
        // textMessageBuffer is the accumulated text for the current open
        // text message. We mutate the latest text part in place rather than
        // appending — text deltas accumulate into the same segment.
        const messageId = event.messageId ?? openTextMessageIdRef.current
        if (!messageId) return
        const parts = getParts(messageId)
        const last = parts[parts.length - 1]
        if (last && last.kind === "text") {
          last.text = textMessageBuffer
        } else {
          // Defensive: missed the start event, open a new text part.
          parts.push({ kind: "text", text: textMessageBuffer })
          openTextMessageIdRef.current = messageId
        }
        bump()
      },

      onTextMessageEndEvent: ({ event }: { event: TextMessageEndEvent }) => {
        if (event.messageId === openTextMessageIdRef.current) {
          openTextMessageIdRef.current = null
        }
        bump()
      },

      onToolCallStartEvent: ({ event }: { event: ToolCallStartEvent }) => {
        // Tool calls live on the parent assistant message. AG-UI exposes
        // `parentMessageId`; if it's missing we fall back to whichever text
        // message is currently open.
        const messageId =
          event.parentMessageId ?? openTextMessageIdRef.current ?? null
        if (!messageId) return
        const parts = getParts(messageId)
        parts.push({
          kind: "tool-call",
          toolCallId: event.toolCallId,
          toolName: event.toolCallName,
          args: {},
          complete: false,
        })
        bump()
      },

      onToolCallArgsEvent: ({
        event,
        partialToolCallArgs,
      }: {
        event: ToolCallArgsEvent
        partialToolCallArgs: Record<string, unknown>
        toolCallName: string
        toolCallBuffer: string
      }) => {
        const toolCallId = event.toolCallId
        // Find the matching tool-call part in any message and update its args.
        for (const parts of storeRef.current.values()) {
          for (let i = parts.length - 1; i >= 0; i--) {
            const p = parts[i]
            if (p && p.kind === "tool-call" && p.toolCallId === toolCallId) {
              p.args = partialToolCallArgs ?? p.args
              bump()
              return
            }
          }
        }
      },

      onToolCallEndEvent: ({
        event,
        toolCallArgs,
      }: {
        event: ToolCallEndEvent
        toolCallName: string
        toolCallArgs: Record<string, unknown>
      }) => {
        const toolCallId = event.toolCallId
        for (const parts of storeRef.current.values()) {
          for (let i = parts.length - 1; i >= 0; i--) {
            const p = parts[i]
            if (p && p.kind === "tool-call" && p.toolCallId === toolCallId) {
              p.args = toolCallArgs ?? p.args
              p.complete = true
              bump()
              return
            }
          }
        }
      },
    }

    const { unsubscribe } = (agent as AbstractAgent).subscribe(subscriber)
    return () => {
      unsubscribe()
    }
  }, [agent, bump])

  const getOrderedParts = useCallback(
    (messageId: string): OrderedPart[] | null => {
      const parts = storeRef.current.get(messageId)
      if (!parts || parts.length === 0) return null
      // Defensive copy so consumers cannot mutate the store.
      return parts.slice()
    },
    []
  )

  return (
    <OrderedMessagePartsContext.Provider value={{ getOrderedParts, version }}>
      {children}
    </OrderedMessagePartsContext.Provider>
  )
}

/**
 * Read the chronological parts store. Returns a no-op fallback when used
 * outside the provider, so existing code paths that don't yet wrap with
 * `OrderedMessagePartsProvider` keep working.
 */
export const useOrderedMessageParts = (): OrderedMessagePartsContextValue => {
  const ctx = useContext(OrderedMessagePartsContext)
  if (ctx) return ctx
  return {
    getOrderedParts: () => null,
    version: 0,
  }
}
