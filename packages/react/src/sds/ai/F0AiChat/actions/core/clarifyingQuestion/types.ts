/**
 * Selection mode for a clarifying question step.
 * - "checkbox": multi-select (multiple options can be selected)
 * - "radio": single-select (only one option can be selected)
 */
export type ClarifyingSelectionMode = "checkbox" | "radio"

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
 * Represents the current state of a clarifying question presented to the user.
 * The AI backend triggers this to gather structured input before proceeding.
 */
export interface ClarifyingQuestion {
  /** The question text displayed to the user */
  question: string
  /** Available options the user can select from */
  options: ClarifyingOption[]
  /** IDs of currently selected options */
  selectedOptionIds: string[]
  /** Whether the question data is still loading */
  loading: boolean
  /** Selection mode: checkbox (multi) or radio (single) */
  selectionMode: ClarifyingSelectionMode
  /** Zero-based index of the current step in a multi-step flow */
  currentStepIndex: number
  /** Total number of steps (1 for single-step questions) */
  totalSteps: number
  /** Label for the confirm/submit button */
  confirmLabel?: string
  /** Whether this step can be skipped without selecting any option */
  optional?: boolean
  /** Whether the user can type a free-text custom answer for this step */
  allowCustomAnswer?: boolean
  /** Current custom answer text (preserved even when deactivated) */
  customAnswerText: string
  /** Whether the custom answer is currently included in the submission */
  isCustomAnswerActive: boolean
  /** Called when the user types in the custom answer input */
  setCustomAnswerText: (text: string) => void
  /** Toggle whether the custom answer is included in the submission (preserves text) */
  setCustomAnswerActive: (active: boolean) => void
  /** Activate the custom answer input (in radio mode, this clears predefined selections) */
  activateCustomAnswer: () => void
  /** Toggle selection of an option by its ID */
  toggleOption: (optionId: string) => void
  /** Confirm the current step's selection and advance */
  confirm: () => void
  /** Go back to the previous step */
  back: () => void
}
