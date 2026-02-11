import { MessagesProps } from "@copilotkit/react-ui"
import { type Message } from "@copilotkit/shared"

/**
 * Props for the F0Thinking component
 */
export type F0ThinkingProps = {
  /**
   * Array of thinking/reflection messages to display
   */
  messages: Message[]
  /**
   * Whether the thinking process is currently active
   */
  isActive?: boolean
  /**
   * Custom render function for messages
   */
  RenderMessage?: MessagesProps["RenderMessage"]
  /**
   * Custom assistant message component
   */
  AssistantMessage?: MessagesProps["AssistantMessage"]
  /**
   * Whether the chat is currently in progress
   */
  inProgress?: boolean
  /**
   * Custom title for the thinking section
   */
  title?: string
}
