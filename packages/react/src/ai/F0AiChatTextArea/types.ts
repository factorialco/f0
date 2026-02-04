/**
 * Props for the F0AiChatTextArea component
 */
export interface F0AiChatTextAreaProps {
  /**
   * Whether the chat is currently processing a message
   */
  inProgress: boolean
  /**
   * Callback when the user sends a message.
   * When file uploads are enabled, use `onSendWithAttachments` instead.
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
   * Whether file uploads are enabled. Shows paperclip button and allows file selection.
   */
  fileUploadsEnabled?: boolean
  /**
   * Current file attachments to display
   */
  attachments?: File[]
  /**
   * Callback to add files as attachments
   */
  onAddFiles?: (files: File[]) => void
  /**
   * Callback to remove an attachment by index
   */
  onRemoveAttachment?: (index: number) => void
  /**
   * Callback to register the file input ref for external triggers
   */
  onFileInputRef?: (ref: HTMLInputElement | null) => void
  /**
   * Async send handler that processes attachments before sending.
   * When provided, this is used instead of `onSend`.
   */
  onSendWithAttachments?: (message: string) => Promise<void>
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
