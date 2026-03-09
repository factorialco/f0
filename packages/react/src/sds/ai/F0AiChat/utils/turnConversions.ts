import { type AIMessage, type Message } from "@copilotkit/shared"

import { FRONTEND_TOOL_NAMES } from "../copilotActions/tool-names"

export type Turn = Array<Message | Array<Message>>

/**
 * Per-turn derived state used by both sidebar and fullscreen message containers.
 */
export interface TurnAnalysis {
  isLastTurn: boolean
  turnIsComplete: boolean
  assistantMessages: AIMessage[]
  showActivityIndicator: boolean
}

/**
 * Compute derived state for a single turn: completion status, assistant
 * messages with content, and whether to show the bottom activity indicator.
 */
export function analyzeTurn(
  turnMessages: Turn,
  turnIndex: number,
  turnsCount: number,
  inProgress: boolean
): TurnAnalysis {
  const isLastTurn = turnIndex === turnsCount - 1
  const turnIsComplete = !(inProgress && isLastTurn)

  const assistantMessages = turnMessages.filter(
    (m): m is AIMessage =>
      !Array.isArray(m) &&
      m.role === "assistant" &&
      !!m.content &&
      !m.content.includes("<!--response-stopped-->")
  )

  // Show a bottom-of-turn activity indicator while streaming, but only when
  // the turn already has visible assistant output beyond the initial thinking
  // step (text content OR a non-thinking tool call like displayChart, etc.).
  const hasVisibleAssistantOutput = turnMessages.some(
    (m) =>
      !Array.isArray(m) &&
      m.role === "assistant" &&
      (!!m.content ||
        m.toolCalls?.some(
          (tc) => tc.function.name !== FRONTEND_TOOL_NAMES.orchestratorThinking
        ))
  )

  const showActivityIndicator =
    !turnIsComplete &&
    hasVisibleAssistantOutput &&
    !Array.isArray(turnMessages[turnMessages.length - 1])

  return {
    isLastTurn,
    turnIsComplete,
    assistantMessages,
    showActivityIndicator,
  }
}

/**
 * Convert an initial message string (or array of strings) into CopilotKit
 * Message objects for rendering in the welcome screen.
 */
export function makeInitialMessages(initial?: string | string[]): Message[] {
  if (!initial) return []
  const arr = Array.isArray(initial) ? initial : [initial]
  return arr.map((message) => ({
    id: message,
    role: "assistant",
    content: message,
  }))
}

/**
 * Group a flat list of messages into conversational turns.
 *
 * Each turn starts with a user message and contains all subsequent assistant
 * messages and tool calls until the next user message. Thinking messages
 * (orchestratorThinking) are merged into a sub-array and hoisted to index 1
 * (right after the user message) so they always render first.
 */
export function convertMessagesToTurns(messages: Message[]): Turn[] {
  if (messages.length === 0) {
    return []
  }

  console.assert(
    messages[0].role === "user",
    "Invariant violation! Assistant message received before user message"
  )

  const turns: Turn[] = []
  let thinkingGroup: Message[] | null = null

  for (const message of messages) {
    if (message.role === "user") {
      turns.push([message])
      thinkingGroup = null
      continue
    }

    const currentTurn = turns[turns.length - 1]

    // Merge thinking messages into a single group per turn, deduplicating
    // consecutive identical content. The group is appended here and then
    // hoisted to index 1 (right after the user message) in the final pass
    // below so it always renders above everything else.
    if (isThinkingMessage(message)) {
      if (thinkingGroup) {
        const prev = thinkingGroup[thinkingGroup.length - 1]
        if (getThinkingKey(prev) !== getThinkingKey(message)) {
          thinkingGroup.push(message)
        }
      } else {
        thinkingGroup = [message]
        currentTurn.push(thinkingGroup)
      }
      continue
    }

    currentTurn.push(message)
  }

  // Final pass: ensure the thinking group is always at index 1 (right after
  // the user message) in every turn, regardless of message arrival order.
  for (const turn of turns) {
    const idx = turn.findIndex((entry) => Array.isArray(entry))
    if (idx > 1) {
      const [group] = turn.splice(idx, 1)
      turn.splice(1, 0, group)
    }
  }

  return turns
}

function isThinkingMessage(message: Message): boolean {
  return (
    message.role === "assistant" &&
    message.toolCalls?.some(
      (call) => call.function.name === FRONTEND_TOOL_NAMES.orchestratorThinking
    ) === true
  )
}

/**
 * Dedup key for thinking messages.
 *
 * CopilotKit action-execution messages have empty/undefined `content` -- the
 * actual preamble text lives in `toolCalls[0].function.arguments`.
 * Fall back to `content` for backwards compatibility with any call-site that
 * sets it directly, then to `id` as a last resort.
 */
function getThinkingKey(message: Message): string {
  const tc = (
    message as {
      toolCalls?: { function: { name: string; arguments: string } }[]
    }
  ).toolCalls?.find(
    (c) => c.function.name === FRONTEND_TOOL_NAMES.orchestratorThinking
  )
  const content =
    typeof message.content === "string" ? message.content : undefined
  return tc?.function.arguments || content || message.id
}
