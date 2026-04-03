import { type Message } from "@copilotkit/shared"

import { isAgentStateMessage } from "../internal-types"

export type Turn = Array<Message | Array<Message>>

export function analyzeTurn(
  turnMessages: Turn,
  turnIndex: number,
  turnsCount: number,
  inProgress: boolean
) {
  const isLastTurn = turnIndex === turnsCount - 1
  const turnIsComplete = !(inProgress && isLastTurn)

  const hasVisibleAssistantOutput = turnMessages.some(
    (m) =>
      !Array.isArray(m) &&
      m.role === "assistant" &&
      (!!m.content ||
        m.toolCalls?.some(
          (tc: { function: { name: string } }) =>
            tc.function.name !== "orchestratorThinking"
        ))
  )

  const showActivityIndicator =
    !turnIsComplete &&
    hasVisibleAssistantOutput &&
    !Array.isArray(turnMessages[turnMessages.length - 1])

  return { isLastTurn, turnIsComplete, showActivityIndicator }
}

export function convertMessagesToTurns(messages: Message[]): Turn[] {
  if (messages.length === 0) {
    return []
  }

  const turns: Turn[] = []
  let thinkingGroup: Message[] | null = null

  for (const [i, message] of messages.entries()) {
    if (message.role === "user") {
      turns.push([message])
      thinkingGroup = null
      continue
    }

    // Guard: if no user message has been seen yet, create an implicit turn.
    // This can happen in v1.51+ when reset() does not abort the running agent
    // and a stale assistant placeholder is the first message in the array.
    if (turns.length === 0) {
      turns.push([])
      thinkingGroup = null
    }

    const currentTurn = turns[turns.length - 1]

    // Hoist agent state messages above the thinking group
    if (isAgentStateMessage(message) && thinkingGroup) {
      if (i !== messages.length - 1) {
        const idx = currentTurn.indexOf(thinkingGroup)
        if (idx !== -1) {
          currentTurn.splice(idx, 1)
        }
        currentTurn.push(message, thinkingGroup)
      }
      continue
    }

    // Always merge thinking messages into a single group per turn, deduplicating consecutive identical content
    if (isThinkingMessage(message)) {
      if (thinkingGroup) {
        const prev = thinkingGroup[thinkingGroup.length - 1]
        if (getThinkingKey(prev) !== getThinkingKey(message)) {
          thinkingGroup.push(message)
        }
      } else {
        thinkingGroup = [message]
        // Always insert thinking group right after the user message (index 1)
        // so it appears above any text messages from earlier runs in the same turn
        if (currentTurn.length > 1) {
          currentTurn.splice(1, 0, thinkingGroup)
        } else {
          currentTurn.push(thinkingGroup)
        }
      }
      continue
    }

    currentTurn.push(message)
  }

  return turns
}

export function extractThinkingGroup(turnMessages: Turn): {
  thinkingGroup: Message[] | null
  restMessages: Array<Message | Array<Message>>
} {
  const thinkingGroup = turnMessages.find((m) => Array.isArray(m)) as
    | Message[]
    | undefined
  const restMessages = turnMessages.filter((m) => !Array.isArray(m))
  return {
    thinkingGroup: thinkingGroup ?? null,
    restMessages,
  }
}

function isThinkingMessage(message: Message): boolean {
  // A thinking message is an assistant message with orchestratorThinking
  // tool calls and no text content. Messages with both content and thinking
  // toolCalls are treated as regular messages.
  return (
    message.role === "assistant" &&
    !message.content &&
    message.toolCalls?.some(
      (call: { function: { name: string } }) =>
        call.function.name === "orchestratorThinking"
    ) === true
  )
}

/**
 * Dedup key for thinking messages.
 *
 * CopilotKit action-execution messages have empty/undefined `content` — the
 * actual preamble text lives in `toolCalls[0].function.arguments`.
 * Fall back to `content` for backwards compatibility with any call-site that
 * sets it directly, then to `id` as a last resort.
 */
function getThinkingKey(message: Message): string {
  const tc = (
    message as {
      toolCalls?: { function: { name: string; arguments: string } }[]
    }
  ).toolCalls?.find((c) => c.function.name === "orchestratorThinking")
  return tc?.function.arguments || message.content || message.id
}
