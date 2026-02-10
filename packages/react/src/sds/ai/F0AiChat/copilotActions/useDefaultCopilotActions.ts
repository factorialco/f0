import { useBookAMeetingCardAction } from "../../../UpsellingKit/ai/F0BookAMeetingCard/useBookAMeetingCardAction"
import { useDemoCardAction } from "../../../UpsellingKit/ai/F0DemoCard/useDemoCardAction"
import { useFAQCardAction } from "../../../UpsellingKit/ai/F0FAQCard/useFAQCardAction"
import { useModuleCardAction } from "../../../UpsellingKit/ai/F0ModuleCard/useModuleCardAction"
import { useQuestionCardAction } from "../../../UpsellingKit/ai/F0QuestionCard/useQuestionCardAction"
import { useMessageSourcesAction } from "./useMessageSourcesAction"
import { useOrchestratorThinkingAction } from "./useOrchestratorThinkingAction"

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
  useFAQCardAction()
}
