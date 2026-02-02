import { useMessageSourcesAction } from "./useMessageSourcesAction"
import { useOrchestratorThinkingAction } from "./useOrchestratorThinkingAction"
import { useTableExportAction } from "./useTableExportAction"

/**
 * Hook to register all default copilot actions.
 * This provides a single entry point to enable all standard AI chat actions.
 *
 * @example
 * // Enable all default actions in your component
 * const MyComponent = () => {
 *   useDefaultCopilotActions()
 *   return <div>...</div>
 * }
 */
export const useDefaultCopilotActions = () => {
  // Register all default actions
  // Each hook internally uses useCopilotAction to register the action
  useOrchestratorThinkingAction()
  useMessageSourcesAction()
  useTableExportAction()
}
