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
type BackendFilePart = {
  type: "binary"
  mimeType: string
  filename?: string
  url?: string
}
type LegacyBackendFilePart = {
  type: "file"
  file: {
    url: string
    filename: string
    mimetype: string
  }
}
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
type BackendPart =
  | BackendTextPart
  | BackendFilePart
  | LegacyBackendFilePart
  | BackendToolPart

type MessageTextPart = { type: "text"; text: string }
type MessageBinaryPart = {
  type: "binary"
  url: string
  filename: string
  mimeType: string
}

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
 * renders each tool (downloadData, displayDashboard, etc.) as its own widget
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
  const userParts: Array<MessageTextPart | MessageBinaryPart> = []
  // Assistant text and binary parts accumulate between tool invocations.
  // When a tool call splits the stream we flush whatever we have so the
  // sub-messages stay in chronological order. `assistantBufferStart` is the
  // partIndex of the first part in the buffer — we use it for the emitted
  // message id so text-only emissions keep the legacy `_t{index}` shape.
  let assistantBuffer: Array<MessageTextPart | MessageBinaryPart> = []
  let assistantBufferStart = 0
  const flushAssistantBuffer = () => {
    if (assistantBuffer.length === 0) return
    const onlyText =
      assistantBuffer.length === 1 && assistantBuffer[0].type === "text"
    const content: Message["content"] = onlyText
      ? (assistantBuffer[0] as MessageTextPart).text
      : // CopilotKit's `Message.content` is typed as `string`, but the
        // runtime accepts multipart arrays — the user path below does the
        // same with `userParts`. Keep the array shape so AssistantMessage
        // can read both text and binary parts.
        (assistantBuffer as unknown as string)
    const suffix = onlyText
      ? `_t${assistantBufferStart}`
      : `_p${assistantBufferStart}`
    messages.push({ id: `${id}${suffix}`, role, content })
    assistantBuffer = []
  }

  for (const part of parts) {
    if (part.type === "text") {
      if (part.text) {
        if (role === "user") {
          userParts.push({ type: "text", text: part.text })
        } else {
          if (assistantBuffer.length === 0) assistantBufferStart = partIndex
          assistantBuffer.push({ type: "text", text: part.text })
        }
      }
    } else if (part.type === "binary") {
      if (part.url && part.filename && part.mimeType) {
        const binary: MessageBinaryPart = {
          type: "binary",
          url: part.url,
          filename: part.filename,
          mimeType: part.mimeType,
        }
        if (role === "user") {
          userParts.push(binary)
        } else {
          if (assistantBuffer.length === 0) assistantBufferStart = partIndex
          assistantBuffer.push(binary)
        }
      }
    } else if (part.type === "file") {
      if (part.file) {
        const binary: MessageBinaryPart = {
          type: "binary",
          url: part.file.url,
          filename: part.file.filename,
          mimeType: part.file.mimetype,
        }
        if (role === "user") {
          userParts.push(binary)
        } else {
          if (assistantBuffer.length === 0) assistantBufferStart = partIndex
          assistantBuffer.push(binary)
        }
      }
    } else {
      // Tool invocation — flush any preceding assistant text/files first
      if (role === "assistant") flushAssistantBuffer()
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

  if (role === "user" && userParts.length > 0) {
    messages.push({
      id,
      role,
      content: userParts,
    })
  }

  if (role === "assistant") flushAssistantBuffer()

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
  actions?: Record<string, ActionWithRender>,
  runtimeFetch: typeof fetch = fetch
): Promise<Message[]> {
  const response = await runtimeFetch(
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
