/**
 * Selection mode for a clarifying question step.
 * - "single": only one option can be selected (rendered as radio buttons)
 * - "multiple": multiple options can be selected (rendered as checkboxes)
 */
export type ClarifyingSelectionMode = "single" | "multiple"

/**
 * A single selectable option within a clarifying question step.
 */
export interface ClarifyingOption {
  /** Unique identifier for this option */
  id: string
  /** Display label shown to the user */
  label: string
}

/**
 * Pure data describing a single clarifying question step.
 * This is what the AI backend sends — no UI state or callbacks.
 */
export interface ClarifyingStepData {
  /** The question text displayed to the user */
  question: string
  /** Available options the user can select from */
  options: ClarifyingOption[]
  /** Selection mode. Defaults to "single" when omitted */
  selectionMode?: ClarifyingSelectionMode
  /** Whether the user can skip this step without selecting any option */
  optional?: boolean
  /** Whether the user can type a free-text custom answer */
  allowCustomAnswer?: boolean
}

/**
 * A step enriched with the user's current interaction state.
 * Used internally by the controller to track selections per step.
 */
export interface ClarifyingStepState extends ClarifyingStepData {
  /** IDs of currently selected options */
  selectedOptionIds: string[]
  /** Current custom answer text (preserved even when deactivated) */
  customAnswerText?: string
  /** Whether the custom answer is currently included in the submission */
  isCustomAnswerActive: boolean
}

/**
 * The active clarifying question state pushed into the AiChat context.
 * When no clarifying question is active the context value is `null`.
 *
 * Navigation metadata (currentStepIndex, totalSteps) and callbacks live
 * here so the panel component stays a pure view of this state.
 */
export interface ClarifyingQuestionState {
  /** The current step's data + interaction state */
  currentStep: ClarifyingStepState
  /** Zero-based index of the current step */
  currentStepIndex: number
  /** Total number of steps (1 for single-step questions) */
  totalSteps: number
  /** Toggle selection of an option by its ID */
  toggleOption: (optionId: string) => void
  /** Confirm the current step's selection and advance (or submit on final step) */
  confirm: () => void
  /** Go back to the previous step */
  back: () => void
  /** Set the custom answer text */
  setCustomAnswerText: (text: string) => void
  /** Toggle whether the custom answer is included in the submission */
  setCustomAnswerActive: (active: boolean) => void
  /** Activate the custom answer input (in single mode, clears predefined selections) */
  activateCustomAnswer: () => void
}
