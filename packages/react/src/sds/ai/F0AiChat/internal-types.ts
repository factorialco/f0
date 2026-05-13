import { type AIMessage, type Message } from "@copilotkit/shared"

import { type ClarifyingQuestionState } from "./actions/core/clarifyingQuestion/types"
import { type CanvasActions, type CanvasEntityDefinition } from "./canvas/types"
import {
  type AiChatDisclaimer,
  type AiChatMode,
  type AiChatFileAttachmentConfig,
  type AiChatTrackingOptions,
  type AiChatToolHint,
  type AppendMessage,
  type CanvasContent,
  type AiChatCredits,
  type AiChatCreditWarning,
  type EntityRefs,
  type PendingContext,
  type PendingQuote,
  type VisualizationMode,
  WelcomeScreenSuggestion,
} from "./types"

/**
 * Internal state for the AiChat provider
 */
export interface AiChatState {
  greeting?: string
  enabled: boolean
  agent?: string
  initialMessage?: string | string[]
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
  toolHints?: AiChatToolHint[]
  credits?: AiChatCredits
  creditWarning?: AiChatCreditWarning
  fileAttachments?: AiChatFileAttachmentConfig
  placeholders?: string[]
  setPlaceholders?: React.Dispatch<React.SetStateAction<string[]>>
  onThumbsUp?: (
    message: AIMessage,
    { threadId, feedback }: { threadId: string; feedback: string }
  ) => void
  onThumbsDown?: (
    message: AIMessage,
    { threadId, feedback }: { threadId: string; feedback: string }
  ) => void
  tracking?: AiChatTrackingOptions
  /**
   * Optional hook called before a user message is sent. Return false to block submission.
   */
  onBeforeSendMessage?: () => boolean | Promise<boolean>
  /**
   * Optional fetch implementation for AI runtime requests owned by F0.
   */
  runtimeFetch?: typeof fetch
}

/**
 * Return value type for the useAiChat hook
 */
export type AiChatProviderReturnValue = {
  enabled: boolean
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  shouldPlayEntranceAnimation: boolean
  setShouldPlayEntranceAnimation: React.Dispatch<React.SetStateAction<boolean>>
  tmp_setAgent: (agent?: string) => void
  placeholders: string[]
  setPlaceholders: React.Dispatch<React.SetStateAction<string[]>>
  /**
   * The initial message to display in the chat
   */
  initialMessage?: string | string[]
  setInitialMessage: React.Dispatch<
    React.SetStateAction<string | string[] | undefined>
  >
  welcomeScreenSuggestions: WelcomeScreenSuggestion[]
  setWelcomeScreenSuggestions: React.Dispatch<
    React.SetStateAction<WelcomeScreenSuggestion[]>
  >
  onThumbsUp?: (
    message: AIMessage,
    { threadId, feedback }: { threadId: string; feedback: string }
  ) => void
  onThumbsDown?: (
    message: AIMessage,
    { threadId, feedback }: { threadId: string; feedback: string }
  ) => void
  tracking?: AiChatTrackingOptions
  /**
   * Optional hook called before a user message is sent. Return false to block submission.
   */
  onBeforeSendMessage?: () => boolean | Promise<boolean>
  /**
   * Fetch implementation for AI runtime requests owned by F0.
   */
  runtimeFetch: typeof fetch
  /**
   * Clear/reset the chat conversation
   */
  clear: () => void
  /**
   * Internal function to set the clear function from CopilotKit
   * @internal
   */
  setClearFunction: (clearFn: (() => void) | null) => void
  /**
   * Title of the currently loaded thread, or null for new conversations
   */
  currentThreadTitle: string | null
  /**
   * Load a thread by ID and set its title in the header
   */
  loadThread: (threadId: string, title: string) => void
  /**
   * Internal function to set the loadThread function from CopilotKit
   * @internal
   */
  setLoadThreadFunction: (fn: ((threadId: string) => void) | null) => void
  /** Whether a thread's messages are currently being fetched */
  isLoadingThread: boolean
  /** @internal */
  setIsLoadingThread: React.Dispatch<React.SetStateAction<boolean>>
  /**
   * Send a message to the chat
   * @param message - The message content as a string, or a full Message object
   */
  sendMessage: (message: string | Message) => void
  /**
   * Internal function to set the sendMessage function from CopilotKit
   * @internal
   */
  setSendMessageFunction: (sendFn: ((message: Message) => void) | null) => void
  /**
   * Append messages to the current conversation.
   * Useful for injecting pre-built assistant responses (e.g. dashboards)
   * from outside the chat. IDs are generated internally.
   *
   * @param options.persist - Whether to persist messages to the backend thread.
   *   Defaults to `true`. Pass `false` for client-only display messages that
   *   should not create or modify a backend thread (e.g. seed messages).
   */
  appendMessages: (
    messages: AppendMessage[],
    options?: { persist?: boolean }
  ) => void
  /** @internal */
  setAppendMessagesFunction: (
    fn: ((messages: AppendMessage[], persist: boolean) => void) | null
  ) => void
  /**
   * Atomically clear the conversation and inject new messages.
   * Starts a fresh thread without the race condition of calling
   * clear() + appendMessages() separately.
   */
  clearAndAppend: (messages: AppendMessage[]) => void
  /** @internal */
  setReplaceMessagesFunction: (
    fn: ((messages: AppendMessage[]) => void) | null
  ) => void
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
  /** Whether the assistant is currently generating a response */
  inProgress: boolean
  /** Set the in-progress state (synced from CopilotKit's isLoading) */
  setInProgress: (value: boolean) => void
  /** The current clarifying question shown in the textarea, or null if none */
  clarifyingQuestion: ClarifyingQuestionState | null
  /** Set the current clarifying question (or null to dismiss) */
  setClarifyingQuestion: React.Dispatch<
    React.SetStateAction<ClarifyingQuestionState | null>
  >
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
  | "greeting"
  | "agent"
  | "disclaimer"
  | "resizable"
  | "entityRefs"
  | "canvasActions"
  | "canvasEntities"
  | "toolHints"
  | "credits"
  | "creditWarning"
  | "fileAttachments"
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
    /** The currently active tool hint, or null if none is selected */
    activeToolHint: AiChatToolHint | null
    /** Set the active tool hint (pass null to clear) */
    setActiveToolHint: React.Dispatch<
      React.SetStateAction<AiChatToolHint | null>
    >
  }

/**
 * Helper function to check if a message is an agent state message
 */
export function isAgentStateMessage(message: Message): boolean {
  return message.role === "assistant" && message.agentName !== undefined
}

/**
 * Check whether a message is a coagent-state-render placeholder injected by
 * CopilotKit v1.51+.  These assistant messages are used by
 * `useCoAgentStateRender` to render inline state UI (e.g. FormCard).
 */
export function isCoagentPlaceholder(message: Message): boolean {
  return (
    (message as Message & { name?: string }).name === "coagent-state-render"
  )
}

/**
 * Filter coagent-state-render placeholder messages from an array.
 * Used for message-count checks (welcome screen, empty state) where
 * these placeholder messages should not count.
 */
export function filterCoagentPlaceholders(messages: Message[]): Message[] {
  return messages.filter((m) => !isCoagentPlaceholder(m))
}

/**
 * Check whether a message is a tool-result message (role: "tool").
 *
 * These are internal CopilotKit bookkeeping messages that carry the
 * stringified return value of frontend tool handlers (e.g. the JSON
 * response from `approveMutation`'s `respond()` callback).  They must
 * never be rendered in the chat UI.
 */
function isToolResultMessage(message: Message): boolean {
  return message.role === "tool"
}

/**
 * Filter out all messages that should never be rendered in the chat UI:
 * - coagent-state-render placeholders (CopilotKit internal)
 * - tool-result messages (role: "tool") carrying frontend tool handler output
 */
export function filterNonRenderableMessages(messages: Message[]): Message[] {
  return messages.filter(
    (m) => !isCoagentPlaceholder(m) && !isToolResultMessage(m)
  )
}
