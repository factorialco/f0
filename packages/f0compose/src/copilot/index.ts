/**
 * Single entry point for prototypes that want to wire the AI chat.
 *
 * The chat itself is **always rendered** by `FactorialShell` — prototypes
 * never import or mount `F0AiChat` / `F0AiChatProvider`. They only need:
 *
 * - `useCopilotAction` to declare an action the agent can invoke
 *   (mutates prototype state, opens a panel, fills a form, …).
 * - `useCopilotReadable` to expose state to the agent so it can reason
 *   about what the user is seeing.
 * - `useAiChat` for advanced cases (programmatically open the chat,
 *   append a message, read the canvas content).
 *
 * Authoritative documentation lives in
 * `packages/react/src/sds/ai/F0AiChat/documentation/` (read those before
 * adding non-trivial actions).
 */
export { useCopilotAction, useCopilotReadable } from "@copilotkit/react-core"
export { useAiChat } from "@factorialco/f0-react/dist/ai"
