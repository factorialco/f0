import { useBookAMeetingCardAction } from "../../../UpsellingKit/ai/F0BookAMeetingCard/useBookAMeetingCardAction"
import { useDemoCardAction } from "../../../UpsellingKit/ai/F0DemoCard/useDemoCardAction"
import { useFAQCardAction } from "../../../UpsellingKit/ai/F0FAQCard/useFAQCardAction"
import { useModuleCardAction } from "../../../UpsellingKit/ai/F0ModuleCard/useModuleCardAction"
import { useQuestionCardAction } from "../../../UpsellingKit/ai/F0QuestionCard/useQuestionCardAction"
import { useClarifyingQuestionAction } from "./core/clarifyingQuestion/useClarifyingQuestionAction"
import { useDataDownloadAction } from "./core/dataDownload/useDataDownloadAction"
import { useDisplayDashboardAction } from "./core/displayDashboard/useDisplayDashboardAction"
import { useMessageSourcesAction } from "./core/messageSources/useMessageSourcesAction"
import { useOrchestratorThinkingAction } from "./core/orchestratorThinking/useOrchestratorThinkingAction"
import { useMessageCreditsWarningAction } from "./core/messageCreditsWarning/useMessageCreditsWarningAction"

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
]
