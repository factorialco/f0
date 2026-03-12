import { type Message } from "@copilotkit/shared"

/**
 * Shape of a single message returned by
 * GET /copilotkit/chat-history/threads/:threadId/messages
 */
export type BackendMessage = {
  id: string
  role: "user" | "assistant"
  content:
    | string
    | {
        content?: string
        parts?: BackendPart[]
      }
  createdAt?: string
}

type BackendTextPart = { type: "text"; text: string }
type BackendToolPart = {
  type: "tool-invocation"
  toolInvocation: {
    toolCallId: string
    toolName: string
    args: Record<string, unknown>
    state?: string
    result?: unknown
  }
}
type BackendPart = BackendTextPart | BackendToolPart

/**
 * Actions map shape — matches CopilotKit's `actions` from useCopilotContext().
 * We only need the `render` function to wire up `generativeUI`.
 */
type ActionWithRender = {
  render?: (...args: any[]) => any
}

/**
 * Convert a single backend (Mastra) message into one or more CopilotKit
 * `Message` objects, preserving the part order from the backend.
 *
 * During a live conversation CopilotKit creates a separate message per
 * tool call. The backend collapses everything into a single stored message
 * with an ordered `parts` array. This function re-expands them so the UI
 * renders each tool (downloadData, displayChart, etc.) as its own widget
 * in the correct position.
 */
export function convertBackendMessage(
  backendMsg: BackendMessage,
  actions?: Record<string, ActionWithRender>
): Message[] {
  const { id, role, content } = backendMsg

  // Plain string content (e.g. user messages)
  if (typeof content === "string") {
    return [{ id, role, content }]
  }

  const parts = content.parts
  if (!parts || parts.length === 0) {
    return [{ id, role, content: content.content ?? "" }]
  }

  const messages: Message[] = []
  let partIndex = 0

  for (const part of parts) {
    if (part.type === "text") {
      if (part.text) {
        messages.push({ id: `${id}_t${partIndex}`, role, content: part.text })
      }
    } else {
      const { toolInvocation: inv } = part
      const toolCall = {
        id: inv.toolCallId,
        type: "function" as const,
        function: {
          name: inv.toolName,
          arguments: JSON.stringify(inv.args),
        },
      }

      const msg: Message = {
        id: `${id}_tc${partIndex}`,
        role,
        content: "",
        toolCalls: [toolCall],
      }

      // Wire up generativeUI so the action's render function fires.
      // `generativeUI` only exists on `AIMessage` but the union type
      // doesn't expose it — use a type assertion since CopilotKit reads
      // this property at runtime regardless of the TS union.
      const action = actions?.[inv.toolName]
      if (action?.render) {
        const renderFn = action.render
        const args = inv.args
        const result = inv.result
        const toolCallId = inv.toolCallId
        ;(msg as any).generativeUI = (props?: Record<string, unknown>) =>
          renderFn({
            status: "complete",
            args,
            result,
            toolCallId,
            respond: () => {},
            ...props,
          })
      }

      messages.push(msg)
    }
    partIndex++
  }

  return messages.length > 0
    ? messages
    : [{ id, role, content: content.content ?? "" }]
}

/**
 * Fetch messages for a thread from the backend and convert them to
 * CopilotKit `Message[]`. Follows the same auth pattern as `useChatHistory`.
 *
 * @param actions - The registered CopilotKit actions (from useCopilotContext).
 *   When provided, tool invocations are wired to their render functions so
 *   widgets (charts, downloads, etc.) display correctly.
 */
export async function fetchThreadMessages(
  baseUrl: string,
  headers: Record<string, string>,
  threadId: string,
  actions?: Record<string, ActionWithRender>
): Promise<Message[]> {
  const response = await fetch(
    `${baseUrl}/chat-history/threads/${threadId}/messages`,
    {
      credentials: "include",
      headers: { ...headers },
    }
  )

  if (!response.ok) {
    throw new Error(`Failed to fetch thread messages: ${response.status}`)
  }

  const data = (await response.json()) as { messages: BackendMessage[] }
  return data.messages.flatMap((msg) => convertBackendMessage(msg, actions))
}
