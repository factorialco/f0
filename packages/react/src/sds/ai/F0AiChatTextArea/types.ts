import type { AiChatToolHint, EntityResolvers } from "../F0AiChat/types"

/**
 * A single option in a clarifying question presented by the AI.
 */
export interface ClarifyingOption {
  id: string
  label: string
}

/**
 * A clarifying question the AI asks before proceeding.
 * When provided the textarea grows upward to reveal the question
 * with selectable options rendered as checkboxes.
 */
export interface ClarifyingQuestion {
  /** The question text to display */
  question: string
  /** The selectable options */
  options: ClarifyingOption[]
  /** IDs of the currently selected options */
  selectedOptionIds: string[]
  /** Called when the user toggles an option */
  onToggleOption: (id: string) => void
  /** Called when the user confirms and moves forward */
  onConfirm: () => void
  /** Optional: called when the user wants to go back to a previous step */
  onBack?: () => void
  /** Step label, e.g. "1 / 3" */
  stepLabel?: string
  /** Label for the confirm button */
  confirmLabel?: string
  /** Whether the AI is still loading the question (shows skeleton) */
  loading?: boolean
}

/**
 * Props for the F0AiChatTextArea component
 */
export interface F0AiChatTextAreaProps {
  /**
   * Whether the chat is currently processing a message
   */
  inProgress: boolean
  /**
   * Callback when the user sends a message
   */
  onSend: (message: string) => void
  /**
   * Callback when the user stops the current generation
   */
  onStop?: () => void
  /**
   * Custom label for the submit button
   */
  submitLabel?: string
  /**
   * Array of placeholder strings to cycle through with typewriter effect.
   * If multiple placeholders are provided, they will animate in a cycle.
   * If a single placeholder is provided, it will be displayed statically.
   */
  placeholders?: string[]
  /**
   * Default placeholder text when no placeholders are provided or as fallback
   */
  defaultPlaceholder?: string
  /**
   * Whether the textarea should autofocus on mount
   * @default true
   */
  autoFocus?: boolean
  /**
   * Entity resolvers for @mention autocomplete and entity reference rendering.
   * When `searchPersons` is provided, typing @ in the textarea opens an
   * autocomplete popover to mention employees.
   */
  entityResolvers?: EntityResolvers
  /**
   * Available tool hints that the user can activate.
   * Renders a selector button to the left of the send button.
   */
  toolHints?: AiChatToolHint[]
  /**
   * The currently active tool hint, or null if none is selected.
   */
  activeToolHint?: AiChatToolHint | null
  /**
   * Callback when the active tool hint changes (selection or removal).
   */
  onActiveToolHintChange?: (toolHint: AiChatToolHint | null) => void
  /**
   * When provided, the textarea grows upward to reveal a clarifying question
   * with checkbox options. Shows a skeleton while `loading` is true.
   */
  clarifyingQuestion?: ClarifyingQuestion
}
