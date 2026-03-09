/**
 * Shape of a part inside MastraMessageContentV2.
 * Only the fields we need for conversion are typed here.
 */
export type MastraPart =
  | { type: "text"; text: string }
  | {
      type: "tool-invocation"
      toolInvocation: {
        state: "partial-call" | "call" | "result"
        toolCallId: string
        toolName: string
        args: unknown
        result?: unknown
        step?: number
      }
    }
  | { type: string }

/** Raw message shape returned by the backend messages endpoint. */
export type MastraRawMessage = {
  id: string
  role: "user" | "assistant" | "system"
  content: {
    format?: number
    parts?: MastraPart[]
    content?: string
    toolInvocations?: Array<{
      state: string
      toolCallId: string
      toolName: string
      args: unknown
      result?: unknown
    }>
  }
}

export type AguiMessage =
  | { id: string; role: "user"; content: string }
  | { id: string; role: "system"; content: string }
  | {
      id: string
      role: "assistant"
      content: string
      toolCalls?: Array<{
        id: string
        type: "function"
        function: { name: string; arguments: string }
      }>
    }
  | {
      id: string
      role: "tool"
      toolCallId: string
      content: string
      toolName?: string
    }

/**
 * Convert raw Mastra messages (MastraDBMessage format with ContentV2)
 * into CopilotKit AG-UI messages that setMessages() understands.
 *
 * Parts are iterated in order so that the visual sequence from the
 * original streaming session is reproduced. Tool-invocation parts that
 * appeared before the text part produce an assistant+tool message group
 * before the text message, and vice-versa.
 */
export function convertMastraToAgui(raw: MastraRawMessage[]): AguiMessage[] {
  const result: AguiMessage[] = []
  let seqId = 0
  const nextId = (base: string) => `${base}-${seqId++}`

  for (const msg of raw) {
    const parts: MastraPart[] = msg.content?.parts ?? []

    // Extract text from parts, falling back to legacy content string
    const textContent =
      parts
        .filter(
          (p): p is Extract<MastraPart, { type: "text" }> => p.type === "text"
        )
        .map((p) => p.text)
        .join("") ||
      (typeof msg.content?.content === "string" ? msg.content.content : "")

    if (msg.role === "user") {
      result.push({ id: msg.id, role: "user", content: textContent })
      continue
    }

    if (msg.role === "system") {
      result.push({ id: msg.id, role: "system", content: textContent })
      continue
    }

    // --- Assistant message ---

    // Also check legacy toolInvocations field
    const legacyToolInvocations = msg.content?.toolInvocations ?? []

    // If there are no tool invocations at all (neither in parts nor legacy),
    // emit a simple text message.
    const hasToolParts = parts.some((p) => p.type === "tool-invocation")
    if (!hasToolParts && legacyToolInvocations.length === 0) {
      result.push({ id: msg.id, role: "assistant", content: textContent })
      continue
    }

    // Walk parts in order and produce separate messages for each segment
    // so the visual order from the original streaming session is preserved.
    // A "segment" is either a group of consecutive tool-invocation parts
    // or a text part.
    type ToolInv = Extract<
      MastraPart,
      { type: "tool-invocation" }
    >["toolInvocation"]
    let pendingTools: ToolInv[] = []
    let textEmitted = false

    const flushTools = () => {
      if (pendingTools.length === 0) return

      const toolCalls = pendingTools.map((inv) => ({
        id: inv.toolCallId,
        type: "function" as const,
        function: {
          name: inv.toolName,
          arguments:
            typeof inv.args === "string"
              ? inv.args
              : JSON.stringify(inv.args ?? {}),
        },
      }))

      result.push({
        id: nextId(msg.id),
        role: "assistant",
        content: "",
        toolCalls,
      })

      // Separate tool result messages for completed invocations
      for (const inv of pendingTools) {
        if (inv.state === "result" && inv.result !== undefined) {
          result.push({
            id: `result-${inv.toolCallId}`,
            role: "tool",
            toolCallId: inv.toolCallId,
            content:
              typeof inv.result === "string"
                ? inv.result
                : JSON.stringify(inv.result),
            toolName: inv.toolName,
          })
        }
      }

      pendingTools = []
    }

    const flushText = () => {
      if (textEmitted) return
      textEmitted = true
      if (!textContent) return
      result.push({
        id: nextId(msg.id),
        role: "assistant",
        content: textContent,
      })
    }

    for (const part of parts) {
      if (part.type === "tool-invocation" && "toolInvocation" in part) {
        pendingTools.push(
          (part as Extract<MastraPart, { type: "tool-invocation" }>)
            .toolInvocation
        )
      } else if (part.type === "text") {
        // Flush any tools accumulated before this text part
        flushTools()
        flushText()
      }
    }

    // Flush remaining tools that appeared after the text
    flushTools()

    // If text was never emitted (no text part in parts array), emit it now
    // so the content is not lost.
    if (!textEmitted && textContent) {
      result.push({
        id: nextId(msg.id),
        role: "assistant",
        content: textContent,
      })
    }

    // Handle legacy toolInvocations (old format without parts ordering)
    if (legacyToolInvocations.length > 0) {
      const legacyToolCalls = legacyToolInvocations.map((inv) => ({
        id: inv.toolCallId,
        type: "function" as const,
        function: {
          name: inv.toolName,
          arguments:
            typeof inv.args === "string"
              ? inv.args
              : JSON.stringify(inv.args ?? {}),
        },
      }))

      result.push({
        id: nextId(msg.id),
        role: "assistant",
        content: "",
        toolCalls: legacyToolCalls,
      })

      for (const inv of legacyToolInvocations) {
        if (inv.state === "result" && inv.result !== undefined) {
          result.push({
            id: `result-${inv.toolCallId}`,
            role: "tool",
            toolCallId: inv.toolCallId,
            content:
              typeof inv.result === "string"
                ? inv.result
                : JSON.stringify(inv.result),
            toolName: inv.toolName,
          })
        }
      }
    }
  }

  return result
}
