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
}

/**
 * Internal props for the TypewriterPlaceholder component
 */
export interface TypewriterPlaceholderProps {
  placeholders: string[]
  defaultPlaceholder: string
  inputValue: string
  inProgress: boolean
}
