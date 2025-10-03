import { type AIMessage, type Message } from "@copilotkit/shared"

export function isAiMessage(message: Message): message is AIMessage {
  return message.role === "assistant"
}

export function isAgentStateMessage(message: Message): boolean {
  return message.role === "assistant" && message.agentName !== undefined
}
