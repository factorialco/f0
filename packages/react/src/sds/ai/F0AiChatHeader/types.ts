import type { AiChatCredits } from "../F0AiChat/types"

export type F0AiChatHeaderProps = {
  /**
   * When true, renders the with-history variant: the title acts as a thread
   * selector that triggers `onOpenHistory`. When false (default), renders
   * the legacy variant with `title` shown as a static heading.
   */
  historyEnabled?: boolean

  /** Static title for the legacy variant. Empty or undefined hides the heading. */
  title?: string

  /**
   * With-history variant: title of the currently loaded thread, or null for
   * a brand-new conversation (renders the "New conversation" placeholder).
   */
  currentThreadTitle?: string | null

  /** Whether the chat is currently in fullscreen mode (controls expand/minimize icon). */
  fullscreen?: boolean
  /** When true, hides the expand/minimize button and the history selector. */
  lockVisualizationMode?: boolean
  /** Toggle fullscreen ↔ sidepanel. */
  onToggleVisualizationMode?: () => void

  /** Close button (X) callback. */
  onClose: () => void

  /**
   * Legacy variant only: callback for the "new chat" button. Hidden when
   * `hasMessages` is false (i.e. the thread is empty so a new chat would be
   * a no-op).
   */
  onNewChat?: () => void
  /** With-history variant: callback fired when the user clicks the title. */
  onOpenHistory?: () => void

  /** Legacy variant gate: only renders the "new chat" button when true. */
  hasMessages?: boolean

  /** Credits configuration. When present, renders the credits popover button. */
  credits?: AiChatCredits
}
