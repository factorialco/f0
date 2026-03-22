import { useBookAMeetingCardAction } from "../../../../UpsellingKit/ai/F0BookAMeetingCard/useBookAMeetingCardAction"
import { useDemoCardAction } from "../../../../UpsellingKit/ai/F0DemoCard/useDemoCardAction"
import { useFAQCardAction } from "../../../../UpsellingKit/ai/F0FAQCard/useFAQCardAction"
import { useModuleCardAction } from "../../../../UpsellingKit/ai/F0ModuleCard/useModuleCardAction"
import { useQuestionCardAction } from "../../../../UpsellingKit/ai/F0QuestionCard/useQuestionCardAction"
import { registerCopilotAction } from "../registry"

registerCopilotAction("demoCard", useDemoCardAction)
registerCopilotAction("bookAMeetingCard", useBookAMeetingCardAction)
registerCopilotAction("questionCard", useQuestionCardAction)
registerCopilotAction("moduleCard", useModuleCardAction)
registerCopilotAction("faqCard", useFAQCardAction)
