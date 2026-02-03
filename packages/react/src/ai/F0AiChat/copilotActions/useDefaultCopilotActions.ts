import { useBookAMeetingCardAction } from "./useBookAMeetingCardAction"
import { useDemoCardAction } from "./useDemoCardAction"
import { useMessageSourcesAction } from "./useMessageSourcesAction"
import { useModuleCardAction } from "./useModuleCardAction"
import { useOrchestratorThinkingAction } from "./useOrchestratorThinkingAction"
import { useQuestionCardAction } from "./useQuestionCardAction"

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
  useDemoCardAction()
  useBookAMeetingCardAction()
  useQuestionCardAction()
  useModuleCardAction()
}
