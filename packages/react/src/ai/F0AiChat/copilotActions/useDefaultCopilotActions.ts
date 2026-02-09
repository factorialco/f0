import { useBookAMeetingCardAction } from "../../AiWidgets/UpsellKit/F0BookAMeetingCard/useBookAMeetingCardAction"
import { useDemoCardAction } from "../../AiWidgets/UpsellKit/F0DemoCard/useDemoCardAction"
import { useFAQCardAction } from "../../AiWidgets/UpsellKit/F0FAQCard/useFAQCardAction"
import { useMessageSourcesAction } from "../../AiWidgets/F0MessageSources/useMessageSourcesAction"
import { useModuleCardAction } from "../../AiWidgets/UpsellKit/F0ModuleCard/useModuleCardAction"
import { useOrchestratorThinkingAction } from "../../AiWidgets/F0Thinking/useOrchestratorThinkingAction"
import { useQuestionCardAction } from "../../AiWidgets/UpsellKit/F0QuestionCard/useQuestionCardAction"

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
