import { type F0Message } from "../../types"

export type Turn = Array<F0Message | Array<F0Message>>

type MaybeAgentName = { agentName?: string }
type MaybeCoagentName = { name?: string }

function isAgentStateMessage(message: F0Message): boolean {
  return (
    message.role === "assistant" &&
    (message as F0Message & MaybeAgentName).agentName !== undefined
  )
}

function isCoagentPlaceholder(message: F0Message): boolean {
  return (
    (message as F0Message & MaybeCoagentName).name === "coagent-state-render"
  )
}

function isToolResultMessage(message: F0Message): boolean {
  return message.role === "tool"
}

export function filterNonRenderableMessages(
  messages: F0Message[]
): F0Message[] {
  return messages.filter(
    (m) => !isCoagentPlaceholder(m) && !isToolResultMessage(m)
  )
}

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

export function convertMessagesToTurns(messages: F0Message[]): Turn[] {
  if (messages.length === 0) return []

  const turns: Turn[] = []
  let thinkingGroup: F0Message[] | null = null

  for (const [i, message] of messages.entries()) {
    if (message.role === "user") {
      turns.push([message])
      thinkingGroup = null
      continue
    }

    if (turns.length === 0) {
      turns.push([])
      thinkingGroup = null
    }

    const currentTurn = turns[turns.length - 1]

    if (isAgentStateMessage(message) && thinkingGroup) {
      if (i !== messages.length - 1) {
        const idx = currentTurn.indexOf(thinkingGroup)
        if (idx !== -1) currentTurn.splice(idx, 1)
        currentTurn.push(message, thinkingGroup)
      }
      continue
    }

    if (isThinkingMessage(message)) {
      if (thinkingGroup) {
        const prev = thinkingGroup[thinkingGroup.length - 1]
        if (getThinkingKey(prev) !== getThinkingKey(message)) {
          thinkingGroup.push(message)
        }
      } else {
        thinkingGroup = [message]
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
  thinkingGroup: F0Message[] | null
  restMessages: Array<F0Message | Array<F0Message>>
} {
  const thinkingGroup = turnMessages.find((m) => Array.isArray(m)) as
    | F0Message[]
    | undefined
  const restMessages = turnMessages.filter((m) => !Array.isArray(m))
  return { thinkingGroup: thinkingGroup ?? null, restMessages }
}

function isThinkingMessage(message: F0Message): boolean {
  return (
    message.role === "assistant" &&
    !message.content &&
    message.toolCalls?.some(
      (call: { function: { name: string } }) =>
        call.function.name === "orchestratorThinking"
    ) === true
  )
}

function getThinkingKey(message: F0Message): string {
  const tc = (
    message as {
      toolCalls?: { function: { name: string; arguments: string } }[]
    }
  ).toolCalls?.find((c) => c.function.name === "orchestratorThinking")
  return (
    tc?.function.arguments ||
    (typeof message.content === "string" ? message.content : "") ||
    message.id
  )
}
