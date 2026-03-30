import { type Message } from "@copilotkit/shared"
import { createContext, type ReactNode, useContext } from "react"

/**
 * Resolves the UI for a tool-call message.
 * Returns a ReactNode when the message has a renderable tool call,
 * null otherwise.
 */
export type ResolveToolCallUI = (
  message: Message,
  allMessages: Message[]
) => ReactNode | null

const ToolRendererContext = createContext<ResolveToolCallUI | null>(null)

/**
 * Default renderer that delegates to CopilotKit's built-in
 * `generativeUI()` method available on message objects.
 */
const defaultRenderer: ResolveToolCallUI = (message) =>
  (message as any)?.generativeUI?.() ?? null

/**
 * Returns a function that resolves tool-call UI for a message.
 *
 * When no {@link CopilotToolRendererProvider} is present (e.g. in
 * Storybook or unit tests), returns a fallback that uses
 * `message.generativeUI()`.
 */
export function useToolRenderer(): ResolveToolCallUI {
  return useContext(ToolRendererContext) ?? defaultRenderer
}

/**
 * Bridges CopilotKit's tool-call rendering to a framework-agnostic
 * React context.
 *
 * Descendant components call {@link useToolRenderer} instead of
 * accessing CopilotKit internals directly.
 *
 * Place inside `<CopilotKit>` but above any component that renders
 * assistant messages.
 */
export function CopilotToolRendererProvider({
  children,
}: {
  children: ReactNode
}) {
  return (
    <ToolRendererContext.Provider value={defaultRenderer}>
      {children}
    </ToolRendererContext.Provider>
  )
}
