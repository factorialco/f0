import { ModuleId } from "@/components/avatars/F0AvatarModule/modules"

export type NpsStep = "scoring" | "feedback" | "thank-you"

export interface F0NpsWidgetProps {
  /** The question shown to the user */
  title: string
  /** Optional Factorial module avatar displayed above the title */
  module?: ModuleId
  /** Controls widget visibility */
  open: boolean
  /** Called when user closes the widget */
  onClose: () => void
  /** Called when the user selects a score (1–10) */
  onScoreChange?: (score: number) => void
  /** Called when the user types in the feedback textarea */
  onFeedbackChange?: (feedback: string) => void
  /** Called on final submit with score + optional feedback */
  onSubmit: (score: number, feedback: string) => Promise<void> | void
  /** Shows loading state on submit button */
  isSubmitting?: boolean
  /** Controlled score value */
  score?: number
  /** Controlled feedback value */
  feedback?: string
}
