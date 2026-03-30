import { type Message } from "@copilotkit/shared"

import { filterCoagentPlaceholders } from "../internal-types"

type ToolCall = {
  id: string
  type: "function"
  function: { name: string; arguments: string }
}

/**
 * Preprocesses raw CopilotKit messages for the turn pipeline:
 *
 * 1. Filters out `coagent-state-render` placeholders (CopilotKit v1.51+)
 * 2. Expands multi-tool-call messages into one message per tool call
 *
 * The expansion is needed because CopilotKit v1.51+ AG-UI packs multiple
 * tool calls into a single assistant message, but the turn/thinking
 * pipeline expects one tool call per message.
 */
export function preprocessMessages(messages: Message[]): Message[] {
  return filterCoagentPlaceholders(messages).flatMap(expandToolCalls)
}

/**
 * Expands a single assistant message that carries multiple tool calls
 * into individual messages (one tool call each).  Text content, if
 * present, becomes its own message after the tool calls.
 *
 * Non-assistant messages and single-tool-call messages pass through
 * unchanged.
 */
function expandToolCalls(msg: Message): Message[] {
  if (msg.role !== "assistant") return [msg]

  const toolCalls = msg.toolCalls as ToolCall[] | undefined
  if (!toolCalls?.length) return [msg]
  if (toolCalls.length === 1 && !msg.content) return [msg]

  const expanded: Message[] = toolCalls.map((tc, i) => ({
    id: `${msg.id}_tc${i}`,
    role: msg.role as "assistant",
    content: "",
    toolCalls: [tc],
  }))

  if (msg.content) {
    expanded.push({
      id: `${msg.id}_text`,
      role: msg.role as "assistant",
      content: msg.content,
    })
  }

  return expanded
}
