import { type F0Message } from "../types"

/**
 * A single segment of an assistant message in chronological streaming order.
 *
 * Either a chunk of prose or a tool call. Adapters (mock runtime in stories,
 * factorial-side bridge in production) build these from agent stream events
 * and feed them into `expandFromOrderedParts` so the UI can render text and
 * tool-call cards in the exact order they streamed in.
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

/**
 * Expands an assistant message into one sub-message per ordered part,
 * preserving the chronological order captured upstream.
 *
 * Each part becomes a sub-message with the shape `AssistantMessage` already
 * consumes — either `content: string` (text) or a single-entry `toolCalls`
 * array (tool call). Mixing both inside one sub-message is intentionally
 * avoided so the existing renderer's "text first, card after" layout has
 * nothing to reorder.
 */
export function expandFromOrderedParts(
  msg: F0Message,
  parts: OrderedPart[]
): F0Message[] {
  return parts.map((part, i) => {
    if (part.kind === "text") {
      return {
        id: `${msg.id}_p${i}_text`,
        role: msg.role,
        content: part.text,
      } as F0Message
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
    } as F0Message
  })
}

/**
 * Pre-existing expansion path: when no ordered parts are available
 * (history messages, third-party callers, anything that did not flow
 * through an ordered-parts adapter), fall back to splitting on
 * `msg.toolCalls` and `msg.content` with the old "tool calls first,
 * text last" assumption. The history path is expected to arrive in
 * `parts` order from the adapter, so this branch is correct for it.
 */
export function legacyExpansion(msg: F0Message): F0Message[] {
  const toolCalls = (msg as F0Message & { toolCalls?: unknown }).toolCalls as
    | { id: string; function: { name: string; arguments: string } }[]
    | undefined

  // No tool calls — plain text message, pass through
  if (!toolCalls || toolCalls.length === 0) return [msg]

  // Single tool call, no text — pass through as-is
  if (toolCalls.length === 1 && !msg.content) return [msg]

  const expanded: F0Message[] = []
  for (let i = 0; i < toolCalls.length; i++) {
    expanded.push({
      id: `${msg.id}_tc${i}`,
      role: msg.role,
      content: "",
      toolCalls: [toolCalls[i]],
    } as F0Message)
  }
  if (msg.content) {
    expanded.push({
      id: `${msg.id}_text`,
      role: msg.role,
      content: msg.content,
    } as F0Message)
  }
  return expanded
}
