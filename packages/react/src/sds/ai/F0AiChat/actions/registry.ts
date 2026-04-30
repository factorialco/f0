import { useBookAMeetingCardAction } from "../../../UpsellingKit/ai/F0BookAMeetingCard/useBookAMeetingCardAction"
import { useDemoCardAction } from "../../../UpsellingKit/ai/F0DemoCard/useDemoCardAction"
import { useFAQCardAction } from "../../../UpsellingKit/ai/F0FAQCard/useFAQCardAction"
import { useModuleCardAction } from "../../../UpsellingKit/ai/F0ModuleCard/useModuleCardAction"
import { useQuestionCardAction } from "../../../UpsellingKit/ai/F0QuestionCard/useQuestionCardAction"
import { useConfirmTicketCreationAction } from "../../../TicketingKit/ai/F0TicketCard/useConfirmTicketCreationAction"
import { useClarifyingQuestionAction } from "./core/clarifyingQuestion/useClarifyingQuestionAction"
import { useDataDownloadAction } from "./core/dataDownload/useDataDownloadAction"
import { useDisplayDashboardAction } from "./core/displayDashboard/useDisplayDashboardAction"
import { useF0AiFormActions } from "./core/forms/useF0AiFormActions"
import { useMessageCreditsWarningAction } from "./core/messageCreditsWarning/useMessageCreditsWarningAction"
import { useMessageSourcesAction } from "./core/messageSources/useMessageSourcesAction"
import { useOrchestratorThinkingAction } from "./core/orchestratorThinking/useOrchestratorThinkingAction"

type ActionFactory = () => void

export const copilotActions: ActionFactory[] = [
  useOrchestratorThinkingAction,
  useMessageSourcesAction,
  useDataDownloadAction,
  useDisplayDashboardAction,
  useClarifyingQuestionAction,
  useDemoCardAction,
  useBookAMeetingCardAction,
  useQuestionCardAction,
  useModuleCardAction,
  useFAQCardAction,
  useMessageCreditsWarningAction,
  useF0AiFormActions,
  useConfirmTicketCreationAction,
]
