import {
  type CanvasActions,
  type CanvasEntityDefinition,
} from "../canvas/types"
import {
  type AiChatDisclaimer,
  type AiChatMode,
  type AiChatFileAttachmentConfig,
  type AiChatTrackingOptions,
  type CanvasContent,
  type AiChatCredits,
  type AiChatCreditWarning,
  type AiChatEmployeeCredits,
  type EntityRefs,
  type F0AIMessage,
  type PendingContext,
  type PendingQuote,
  type TranscribeFn,
  type VisualizationMode,
  WelcomeScreenSuggestion,
} from "./types"

/**
 * Internal state for the AiChat provider. Pure UI / config concerns —
 * message-runtime concerns (sendMessage, threadId, streaming) live in a
 * separate adapter (mock in stories, factorial-side in production).
 */
export interface AiChatState {
  enabled: boolean
  agent?: string
  initialMessage?: string | string[]
  chatHeader?: React.ReactNode
  chatMessages?: React.ReactNode
  chatInput?: React.ReactNode
  welcomeScreenSuggestions?: WelcomeScreenSuggestion[]
  disclaimer?: AiChatDisclaimer
  resizable?: boolean
  defaultVisualizationMode?: VisualizationMode
  lockVisualizationMode?: boolean
  historyEnabled?: boolean
  footer?: React.ReactNode
  VoiceMode?: React.ComponentType
  entityRefs?: EntityRefs
  canvasActions?: CanvasActions
  canvasEntities?: Record<string, CanvasEntityDefinition>
  credits?: AiChatCredits
  employeeCredits?: AiChatEmployeeCredits
  creditWarning?: AiChatCreditWarning
  fileAttachments?: AiChatFileAttachmentConfig
  onTranscribe?: TranscribeFn
  placeholders?: string[]
  setPlaceholders?: React.Dispatch<React.SetStateAction<string[]>>
  onThumbsUp?: (
    message: F0AIMessage,
    { threadId, feedback }: { threadId: string; feedback: string }
  ) => void
  onThumbsDown?: (
    message: F0AIMessage,
    { threadId, feedback }: { threadId: string; feedback: string }
  ) => void
  tracking?: AiChatTrackingOptions
}

/**
 * Return value type for the useAiChat hook. UI-only by design — message
 * state and actions (send, clear, loadThread, etc.) live in the runtime
 * adapter and are read via `useAiChatRuntime()`.
 */
export type AiChatProviderReturnValue = {
  enabled: boolean
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  shouldPlayEntranceAnimation: boolean
  setShouldPlayEntranceAnimation: React.Dispatch<React.SetStateAction<boolean>>
  setAgent: React.Dispatch<React.SetStateAction<string | undefined>>
  placeholders: string[]
  setPlaceholders: React.Dispatch<React.SetStateAction<string[]>>
  initialMessage?: string | string[]
  setInitialMessage: React.Dispatch<
    React.SetStateAction<string | string[] | undefined>
  >
  welcomeScreenSuggestions: WelcomeScreenSuggestion[]
  setWelcomeScreenSuggestions: React.Dispatch<
    React.SetStateAction<WelcomeScreenSuggestion[]>
  >
  onThumbsUp?: (
    message: F0AIMessage,
    { threadId, feedback }: { threadId: string; feedback: string }
  ) => void
  onThumbsDown?: (
    message: F0AIMessage,
    { threadId, feedback }: { threadId: string; feedback: string }
  ) => void
  tracking?: AiChatTrackingOptions
  /**
   * Current width of the chat window (for resizable mode)
   */
  chatWidth: number
  setChatWidth: React.Dispatch<React.SetStateAction<number>>
  /**
   * Reset the chat width to the default value (360px)
   */
  resetChatWidth: () => void
  /**
   * The current visualization mode of the chat
   */
  visualizationMode: VisualizationMode
  /**
   * Set the visualization mode
   */
  setVisualizationMode: React.Dispatch<React.SetStateAction<VisualizationMode>>
  /**
   * The current interaction mode
   */
  mode: AiChatMode
  /**
   * Set the interaction mode
   */
  setMode: React.Dispatch<React.SetStateAction<AiChatMode>>
  /**
   * When true, prevents switching between visualization modes
   */
  lockVisualizationMode: boolean
  historyEnabled: boolean
  /**
   * Optional footer content rendered below the textarea
   */
  footer?: React.ReactNode
  /**
   * Optional component rendered when voice mode is active.
   */
  VoiceMode?: React.ComponentType
  /**
   * Set the footer content. Use this to update the footer from outside the provider (e.g. per page/route).
   */
  setFooter: React.Dispatch<React.SetStateAction<React.ReactNode | undefined>>
  /**
   * True while a clarifying flow is active. F0 uses this flag to freeze
   * layout / disable file drop / hide disclaimer. The actual panel state
   * is owned by the host (factorial); F0 only sees the boolean.
   */
  isClarifying: boolean
  /** Set the clarifying flag. */
  setIsClarifying: React.Dispatch<React.SetStateAction<boolean>>
  /**
   * Whether files are currently being dragged over the chat window.
   * Set by the ChatWindow drag listeners and read by the DropOverlay
   * to control its visibility.
   */
  fileDragOver: boolean
  /** @internal Set the file drag-over state */
  setFileDragOver: React.Dispatch<React.SetStateAction<boolean>>
  /**
   * Process files that were dropped onto the chat. Delegates to the
   * `processFiles` callback registered by `ChatTextarea`'s file-attachment
   * hook. Used by the chat-wide DropOverlay rendered in `SidebarWindow`.
   */
  processDroppedFiles: (files: File[]) => void
  /** @internal Registers the processFiles callback owned by ChatTextarea */
  setProcessDroppedFilesFunction: (fn: ((files: File[]) => void) | null) => void
  /**
   * Pre-loaded context shown as an empty state in the chat.
   * Prepended to the first user message as `<pending-context>`.
   */
  pendingContext: PendingContext | null
  /** Set pending context (pass null to clear) */
  setPendingContext: React.Dispatch<React.SetStateAction<PendingContext | null>>
  /**
   * Quoted fragment the user is replying to. Rendered as a chip above the
   * textarea and, on submit, prepended as a markdown blockquote to the user's
   * message (plus an invisible `<quote-context>` tag for the agent).
   */
  pendingQuote: PendingQuote | null
  /** Set the pending quote (pass null to clear). */
  setPendingQuote: React.Dispatch<React.SetStateAction<PendingQuote | null>>
} & Pick<
  AiChatState,
  | "agent"
  | "chatHeader"
  | "chatMessages"
  | "chatInput"
  | "disclaimer"
  | "resizable"
  | "entityRefs"
  | "canvasActions"
  | "canvasEntities"
  | "credits"
  | "employeeCredits"
  | "creditWarning"
  | "fileAttachments"
  | "onTranscribe"
> & {
    /** The current canvas content, or null when canvas is closed */
    canvasContent: CanvasContent | null
    /** Open the canvas panel with the given content */
    openCanvas: (content: CanvasContent) => void
    /** Close the canvas panel and restore the previous visualization mode */
    closeCanvas: () => void
    /** The currently active mini-game (easter egg), or null */
    activeGame: "pong" | null
    /** Launch a mini-game overlay */
    openGame: (game: "pong") => void
    /** Close the active mini-game overlay */
    closeGame: () => void
  }
