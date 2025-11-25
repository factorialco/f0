import { type Message } from "@copilotkit/shared"
import { isAgentStateMessage } from "./messageTypes"

export type Turn = Array<Message | Array<Message>>

export function convertMessagesToTurns(messages: Message[]): Turn[] {
  if (messages.length === 0) {
    return []
  }

  console.assert(
    messages[0].role === "user",
    "Invariant violation! Assistant message received before user message"
  )

  const turns: Turn[] = []

  for (const [i, message] of messages.entries()) {
    if (message.role === "user") {
      // create new turn
      turns.push([message])
      continue
    }

    const currentTurn = turns[turns.length - 1]

    // Handle agent state messages that arrive during thinking message grouping
    if (
      isAgentStateMessage(message) &&
      isCurrentlyGroupingThinking(currentTurn)
    ) {
      // we want to ignore the last agent state message
      // to avoid rerenders of thinking components and play extra animations
      if (i !== messages.length - 1) {
        const thinkingGroup = currentTurn.pop() as Message[]
        currentTurn.push(message, thinkingGroup)
      }
      continue
    }

    // Handle thinking messages
    if (isThinkingMessage(message)) {
      if (isCurrentlyGroupingThinking(currentTurn)) {
        // Continue grouping: add to existing thinking group
        const thinkingGroup = currentTurn.at(-1) as Message[]
        thinkingGroup.push(message)
      } else {
        // Start grouping: create new thinking group
        currentTurn.push([message])
      }
      continue
    }

    currentTurn.push(message)
  }

  return turns
}

function isThinkingMessage(message: Message): boolean {
  return (
    message.role === "assistant" &&
    message.toolCalls?.some(
      (call) => call.function.name === "orchestratorThinking"
    ) === true
  )
}

function isCurrentlyGroupingThinking(turn: Turn): boolean {
  const lastMessage = turn.at(-1)
  return Array.isArray(lastMessage)
}
