import type { AiChatToolHint, EntityResolvers } from "../F0AiChat/types"

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
   * Shows a credit warning banner above the input.
   * "soft" — user is running low on AI credits.
   * "hard" — user has run out of AI credits.
   */
  creditWarning?: "soft" | "hard"
  /**
   * Callback when the user dismisses the credit warning banner.
   * The consumer is responsible for persisting the dismissed state.
   */
  onDismissCreditWarning?: () => void
  /**
   * Callback when the user clicks "Get credits" in the credit warning banner.
   * The consumer decides whether to navigate, open a modal, etc.
   */
  onGetCredits?: () => void
}
