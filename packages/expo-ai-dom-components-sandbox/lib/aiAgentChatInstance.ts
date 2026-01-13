/**
 * Module-level singleton to keep AiChatSandbox instance
 * This ensures the chat loads only once and persists across opening/closing
 */

const aiAgentChatKey = 'ai-agent-screen-singleton'

/**
 * Get the unique key for the AI Agent chat component.
 * Using a consistent key prevents React from remounting the component
 * when opening and closing, preserving chat state.
 *
 * @returns The singleton key string for the AI Agent chat component
 */
export const getAiAgentChatKey = () => {
  return aiAgentChatKey
}
