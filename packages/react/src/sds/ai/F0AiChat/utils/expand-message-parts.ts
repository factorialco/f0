import { type Message } from "@copilotkit/shared"

import { type OrderedPart } from "../providers/OrderedMessagePartsProvider"

/**
 * Expands an assistant message into one sub-message per ordered part,
 * preserving the chronological order captured by `OrderedMessagePartsProvider`.
 *
 * Each part becomes a sub-message with the shape `AssistantMessage` already
 * consumes — either `content: string` (text) or a single-entry `toolCalls`
 * array (tool call). Mixing both inside one sub-message is intentionally
 * avoided so the existing renderer's "text first, card after" layout has
 * nothing to reorder.
 */
export function expandFromOrderedParts(
  msg: Message,
  parts: OrderedPart[]
): Message[] {
  return parts.map((part, i) => {
    if (part.kind === "text") {
      return {
        id: `${msg.id}_p${i}_text`,
        role: msg.role,
        content: part.text,
      } as Message
    }
    return {
      id: `${msg.id}_p${i}_tc`,
      role: msg.role,
      content: "",
      toolCalls: [
        {
          id: part.toolCallId,
          type: "function",
          function: {
            name: part.toolName,
            arguments: JSON.stringify(part.args ?? {}),
          },
        },
      ],
    } as Message
  })
}

/**
 * Pre-existing expansion path: when no ordered parts are available
 * (history messages, third-party callers, anything that did not flow
 * through `OrderedMessagePartsProvider`), fall back to splitting on
 * `msg.toolCalls` and `msg.content` with the old "tool calls first,
 * text last" assumption. The history path already arrives in `parts`
 * order via `convertBackendMessage`, so this branch is correct for it.
 */
export function legacyExpansion(msg: Message): Message[] {
  const toolCalls = (msg as Message & { toolCalls?: unknown }).toolCalls as
    | { id: string; function: { name: string; arguments: string } }[]
    | undefined

  // No tool calls — plain text message, pass through
  if (!toolCalls || toolCalls.length === 0) return [msg]

  // Single tool call, no text — pass through as-is
  if (toolCalls.length === 1 && !msg.content) return [msg]

  const expanded: Message[] = []
  for (let i = 0; i < toolCalls.length; i++) {
    expanded.push({
      id: `${msg.id}_tc${i}`,
      role: msg.role,
      content: "",
      toolCalls: [toolCalls[i]],
    } as Message)
  }
  if (msg.content) {
    expanded.push({
      id: `${msg.id}_text`,
      role: msg.role,
      content: msg.content,
    } as Message)
  }
  return expanded
}
