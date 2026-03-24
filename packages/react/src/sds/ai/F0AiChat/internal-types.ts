import { type AIMessage, type Message } from "@copilotkit/shared"

import {
  type AiChatDisclaimer,
  type AiChatMode,
  type AiChatTrackingOptions,
  type AiChatToolHint,
  type CanvasContent,
  type AiChatCredits,
  type EntityResolvers,
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
  entityResolvers?: EntityResolvers
  toolHints?: AiChatToolHint[]
  credits?: AiChatCredits
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
} & Pick<
  AiChatState,
  | "greeting"
  | "agent"
  | "disclaimer"
  | "resizable"
  | "entityResolvers"
  | "toolHints"
  | "credits"
> & {
    /** The current canvas content, or null when canvas is closed */
    canvasContent: CanvasContent | null
    /** Open the canvas panel with the given content */
    openCanvas: (content: CanvasContent) => void
    /** Close the canvas panel and restore the previous visualization mode */
    closeCanvas: () => void
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
