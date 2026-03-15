import type {
  AiChatToolHint,
  EntityResolvers,
  UploadedFile,
} from "../F0AiChat/types"

export type AttachedFile = {
  id: string
  file: File
  status: "uploading" | "uploaded" | "error"
  uploadedFile?: UploadedFile
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
   * Callback to upload files. When provided, renders an attach button.
   */
  onUploadFiles?: (files: File[]) => Promise<UploadedFile[]>
  /**
   * Allowed MIME types for file uploads.
   * Pass a string (e.g. "image/*") or array (e.g. ["image/*", "application/pdf"]).
   * Omit or pass undefined for no restriction.
   */
  allowedMimeTypes?: string | string[]
  /**
   * Maximum number of files that can be attached at once.
   * When reached, the attach button is disabled.
   */
  maxFiles?: number
}
