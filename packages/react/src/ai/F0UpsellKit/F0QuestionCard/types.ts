import type { IconType } from "@/components/F0Icon"

/**
 * Option for the question (checkbox with label)
 */
export interface F0QuestionCardOption {
  id: string
  label: string
}

/**
 * One step in a multi-step question card
 */
export interface F0QuestionCardStep {
  question: string
  options: F0QuestionCardOption[]
}

/**
 * Props for the F0QuestionCardMultiStep component
 */
export interface F0QuestionCardMultiStepProps {
  /** Steps: each has question and options */
  steps: F0QuestionCardStep[]
  /** Called when user completes the last step with all selections (step index -> selected option ids) */
  onComplete?: (selections: Record<number, string[]>) => void
  /** Called when user clicks Skip */
  onSkip?: () => void
  /** When true, on last step Next sends selected labels via onSendMessage */
  sendAsMessage?: boolean
  /** Called with joined selected labels when completing with sendAsMessage */
  onSendMessage?: (message: string) => void
  /** Label for the Next button on the last step */
  nextLabel?: string
  /** Label for the Skip button */
  skipLabel?: string
}

/**
 * Props for the F0QuestionCard component (single-step, legacy)
 */
export interface F0QuestionCardProps {
  /**
   * Optional icon in the card header (used when title is set)
   */
  headerIcon?: IconType
  /**
   * The question text shown above the options
   */
  question: string
  /**
   * Checkbox options (id, label). User can select one or more.
   */
  options: F0QuestionCardOption[]
  /**
   * Selected option ids (controlled). Omit for uncontrolled.
   */
  selectedOptionIds?: string[]
  /**
   * Callback when selection changes (controlled)
   */
  onSelectionChange?: (selectedIds: string[]) => void
  /**
   * Current step (1-based) for pagination display, e.g. "1/n"
   */
  currentStep?: number
  /**
   * Total number of steps for pagination display
   */
  totalSteps?: number
  /**
   * Callback when the previous (left arrow) pagination control is clicked
   */
  onPrev?: () => void
  /**
   * Callback when Next button is clicked (primary action)
   */
  onNext: () => void
  /**
   * Callback when Skip button is clicked
   */
  onSkip?: () => void
  /**
   * When true, calling Next will invoke onNextWithSelection with the selected option labels
   * so the parent can send them as a new user message (e.g. to trigger a new workflow turn).
   */
  sendAsMessage?: boolean
  /**
   * Called when user clicks Next and sendAsMessage is true. Receives the selected option labels;
   * the parent should send this as a new user chat message to trigger the next workflow turn.
   */
  onNextWithSelection?: (selectedLabels: string[]) => void
  /**
   * Label for the Next button
   * @default "Next"
   */
  nextLabel?: string
  /**
   * Label for the Skip button
   * @default "Skip"
   */
  skipLabel?: string
}
