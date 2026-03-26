import { useLazyToolRenderer } from "@copilotkit/react-core"
import { type Message } from "@copilotkit/shared"
import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useRef,
} from "react"

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

const noopRenderer: ResolveToolCallUI = () => null

/**
 * Returns a function that resolves tool-call UI for a message.
 *
 * When no {@link CopilotToolRendererProvider} is present (e.g. in
 * Storybook or unit tests), returns a no-op that always yields `null`,
 * so consuming components render safely without CopilotKit context.
 */
export function useToolRenderer(): ResolveToolCallUI {
  return useContext(ToolRendererContext) ?? noopRenderer
}

/**
 * Bridges CopilotKit's internal tool-call rendering registry to a
 * framework-agnostic React context.
 *
 * Descendant components call {@link useToolRenderer} instead of
 * importing `useLazyToolRenderer` from `@copilotkit/react-core`
 * directly, keeping them decoupled from CopilotKit internals.
 *
 * Place inside `<CopilotKit>` but above any component that renders
 * assistant messages.
 */
export function CopilotToolRendererProvider({
  children,
}: {
  children: ReactNode
}) {
  const lazyToolRenderer = useLazyToolRenderer()

  // Keep a stable ref so the callback identity doesn't change on every
  // render — prevents unnecessary context-triggered re-renders.
  const rendererRef = useRef(lazyToolRenderer)
  rendererRef.current = lazyToolRenderer

  const resolve = useCallback<ResolveToolCallUI>((message, allMessages) => {
    const renderFn = rendererRef.current(message, allMessages)
    return renderFn?.() ?? (message as any)?.generativeUI?.() ?? null
  }, [])

  return (
    <ToolRendererContext.Provider value={resolve}>
      {children}
    </ToolRendererContext.Provider>
  )
}
