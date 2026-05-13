"use client"

import type { ReactNode } from "react"

import { type Message, randomId } from "@copilotkit/shared"
import {
  createContext,
  type FC,
  type PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"

import { useI18n } from "@/lib/providers/i18n"

import type { ClarifyingQuestionState } from "../../F0ClarifyingPanel/types"

import { AiChatProviderReturnValue, AiChatState } from "../internal-types"
import {
  type AiChatMode,
  type AppendMessage,
  type CanvasContent,
  type PendingContext,
  type PendingQuote,
  type VisualizationMode,
  WelcomeScreenSuggestion,
} from "../types"
import { DEFAULT_CHAT_WIDTH } from "../utils/constants"
import {
  readFromLocalStorage,
  writeToLocalStorage,
} from "../utils/local-storage"
const AiChatStateContext = createContext<AiChatProviderReturnValue | null>(null)

const CHAT_WIDTH_STORAGE_KEY = "ONE-ai-chat-width"
const CHAT_OPEN_STORAGE_KEY = "ONE-ai-chat-open"
const CHAT_VISUALIZATION_MODE_STORAGE_KEY = "ONE-ai-chat-visualization-mode"

const getStoredChatWidth = (): number => {
  if (typeof window === "undefined") return DEFAULT_CHAT_WIDTH
  const stored = readFromLocalStorage<number | null>(
    CHAT_WIDTH_STORAGE_KEY,
    null
  )
  if (stored !== null && !isNaN(stored) && stored >= 300 && stored <= 712) {
    return stored
  }
  return DEFAULT_CHAT_WIDTH
}

/**
 * Read the persisted open/closed state from localStorage.
 * Falls back to `fallback` when there's no stored value or it's malformed.
 * Because the AiChatStateProvider only mounts once `ai?.enabled === true`
 * (see ApplicationFrame), reading in the `useState` initializer naturally
 * handles a delayed activation of `ai.enabled`: as soon as the provider
 * mounts, the persisted state is applied.
 *
 * On first visit (no stored value), defaults to open so the chat is
 * discoverable. Subsequent visits respect the user's last choice, which is
 * persisted by the effect below.
 */
const getStoredChatOpen = (fallback: boolean): boolean => {
  if (typeof window === "undefined") return fallback
  const stored = readFromLocalStorage<boolean | null>(
    CHAT_OPEN_STORAGE_KEY,
    null
  )
  if (typeof stored !== "boolean") return true
  return stored
}

/**
 * Read the persisted visualization mode. Only accepts the stable user-facing
 * modes — "canvas" is transient and reverts to the previous mode on close,
 * so it is never persisted.
 */
const getStoredVisualizationMode = (
  fallback: VisualizationMode
): VisualizationMode => {
  if (typeof window === "undefined") return fallback
  const stored = readFromLocalStorage<string | null>(
    CHAT_VISUALIZATION_MODE_STORAGE_KEY,
    null
  )
  if (stored === "sidepanel" || stored === "fullscreen") return stored
  return fallback
}

export const AiChatStateProvider: FC<PropsWithChildren<AiChatState>> = ({
  children,
  enabled,
  agent: initialAgent,
  initialMessage: initialInitialMessage,
  welcomeScreenSuggestions: initialWelcomeScreenSuggestions = [],
  disclaimer,
  resizable = false,
  defaultVisualizationMode = "sidepanel",
  lockVisualizationMode = false,
  historyEnabled = false,
  footer: initialFooter,
  VoiceMode,
  entityRefs,
  canvasActions,
  canvasEntities,
  credits,
  employeeCredits,
  fileAttachments,
  onThumbsDown,
  onThumbsUp,
  tracking,
  onBeforeSendMessage,
  runtimeFetch = fetch,
  ...rest
}) => {
  const [footer, setFooter] = useState<ReactNode | undefined>(initialFooter)
  const [enabledInternal, setEnabledInternal] = useState(enabled)
  // Restore open/closed state and visualization mode from localStorage when
  // the provider mounts. Falls back to `defaultVisualizationMode` when no
  // prior state is stored. Because this provider only mounts once the host
  // app sets `ai.enabled === true`, a delayed activation still applies the
  // persisted state correctly (the `useState` initializers run on mount,
  // not on the first render of the outer tree).
  const fallbackVisualizationMode: VisualizationMode =
    defaultVisualizationMode === "canvas"
      ? "sidepanel"
      : defaultVisualizationMode
  const [open, setOpen] = useState(() =>
    getStoredChatOpen(defaultVisualizationMode === "fullscreen")
  )
  const [mode, setMode] = useState<AiChatMode>("chat")
  const [visualizationMode, setVisualizationModeRaw] =
    useState<VisualizationMode>(() =>
      getStoredVisualizationMode(fallbackVisualizationMode)
    )
  // Derived from the initial visualizationMode so we don't re-read
  // localStorage. `useState`'s initializer runs only on mount, so this
  // captures the value at that moment.
  const [shouldPlayEntranceAnimation, setShouldPlayEntranceAnimation] =
    useState(() => visualizationMode !== "fullscreen")
  const [agent, setAgent] = useState<string | undefined>(initialAgent)
  const [welcomeScreenSuggestions, setWelcomeScreenSuggestions] = useState<
    WelcomeScreenSuggestion[]
  >(initialWelcomeScreenSuggestions)
  const i18n = useI18n()
  const [placeholders, setPlaceholders] = useState<string[]>([
    i18n.t("ai.inputPlaceholder"),
  ])

  const [initialMessage, setInitialMessage] = useState<
    string | string[] | undefined
  >(initialInitialMessage)

  const [chatWidth, setChatWidth] = useState(() => getStoredChatWidth())

  useEffect(() => {
    if (open) {
      tracking?.onVisibility?.()
    }
  }, [open])

  const [inProgress, setInProgressState] = useState(false)
  const setInProgress = useCallback((value: boolean) => {
    setInProgressState(value)
  }, [])

  const [canvasContent, setCanvasContent] = useState<CanvasContent | null>(null)

  // Wrap the raw setter so leaving canvas mode also clears `canvasContent`
  // in the same render — otherwise the canvas card stays mounted under the
  // new mode until something else (closeCanvas, reload…) clears it.
  const setVisualizationMode = useCallback<
    React.Dispatch<React.SetStateAction<VisualizationMode>>
  >((next) => {
    setVisualizationModeRaw((prev) => {
      const resolved = typeof next === "function" ? next(prev) : next
      if (prev === "canvas" && resolved !== "canvas") {
        setCanvasContent(null)
      }
      return resolved
    })
  }, [])

  // Track the mode before canvas was opened so we can restore it on close
  const previousVisualizationModeRef = useRef<VisualizationMode>("sidepanel")

  const [clarifyingQuestion, setClarifyingQuestion] =
    useState<ClarifyingQuestionState | null>(null)

  const [fileDragOver, setFileDragOver] = useState(false)
  const [pendingContext, setPendingContext] = useState<PendingContext | null>(
    null
  )
  const [pendingQuote, setPendingQuote] = useState<PendingQuote | null>(null)

  // Persist chat width to localStorage
  useEffect(() => {
    if (typeof window === "undefined") return
    writeToLocalStorage(CHAT_WIDTH_STORAGE_KEY, chatWidth)
  }, [chatWidth])

  // Persist open/closed state so it survives reloads. Stored as a plain
  // boolean; the provider's `useState` initializer reads it back on mount.
  useEffect(() => {
    if (typeof window === "undefined") return
    writeToLocalStorage(CHAT_OPEN_STORAGE_KEY, open)
  }, [open])

  // Persist the visualization mode, but only for the stable user-facing
  // modes. "canvas" is a transient overlay (restored to the previous mode
  // via `closeCanvas`) and should never be the restored-on-reload mode.
  useEffect(() => {
    if (typeof window === "undefined") return
    if (
      visualizationMode === "sidepanel" ||
      visualizationMode === "fullscreen"
    ) {
      writeToLocalStorage(
        CHAT_VISUALIZATION_MODE_STORAGE_KEY,
        visualizationMode
      )
    }
  }, [visualizationMode])

  // Store the reset function from CopilotKit
  const clearFunctionRef = useRef<(() => void) | null>(null)
  // Store the loadThread function from CopilotKit
  const loadThreadFunctionRef = useRef<((threadId: string) => void) | null>(
    null
  )
  // Store the sendMessage function from CopilotKit
  const sendMessageFunctionRef = useRef<((message: Message) => void) | null>(
    null
  )
  // Store the appendMessages function bridged from CopilotKit
  const appendMessagesFunctionRef = useRef<
    ((messages: AppendMessage[], persist: boolean) => void) | null
  >(null)
  // Atomically replaces messages with a new thread (no race with reset)
  const replaceMessagesFunctionRef = useRef<
    ((messages: AppendMessage[]) => void) | null
  >(null)
  // Callback that processes files dropped onto the chat. Registered by
  // ChatTextarea (which owns the file-attachment state) so the chat-wide
  // DropOverlay rendered in SidebarWindow can dispatch drops to it.
  const processDroppedFilesFunctionRef = useRef<
    ((files: File[]) => void) | null
  >(null)

  const [currentThreadTitle, setCurrentThreadTitle] = useState<string | null>(
    null
  )
  const [isLoadingThread, setIsLoadingThread] = useState(false)

  const tmp_setAgent = (newAgent?: string) => {
    setAgent(newAgent)
  }

  const setClearFunction = (clearFn: (() => void) | null) => {
    clearFunctionRef.current = clearFn
  }

  const setLoadThreadFunction = (
    loadFn: ((threadId: string) => void) | null
  ) => {
    loadThreadFunctionRef.current = loadFn
  }

  const setSendMessageFunction = (
    sendFn: ((message: Message) => void) | null
  ) => {
    sendMessageFunctionRef.current = sendFn
  }

  const setAppendMessagesFunction = (
    fn: ((messages: AppendMessage[], persist: boolean) => void) | null
  ) => {
    appendMessagesFunctionRef.current = fn
  }

  const setReplaceMessagesFunction = (
    fn: ((messages: AppendMessage[]) => void) | null
  ) => {
    replaceMessagesFunctionRef.current = fn
  }

  const setProcessDroppedFilesFunction = (
    fn: ((files: File[]) => void) | null
  ) => {
    processDroppedFilesFunctionRef.current = fn
  }

  const processDroppedFiles = (files: File[]) => {
    processDroppedFilesFunctionRef.current?.(files)
  }

  const appendMessages = (
    messages: AppendMessage[],
    options?: { persist?: boolean }
  ) => {
    appendMessagesFunctionRef.current?.(messages, options?.persist ?? true)
  }

  const clearAndAppend = (messages: AppendMessage[]) => {
    // Reset UI state for a fresh conversation
    setCurrentThreadTitle(null)
    setIsLoadingThread(false)
    setPendingContext(null)
    setPendingQuote(null)
    setCanvasContent(null)
    if (visualizationMode === "canvas") {
      setVisualizationMode(previousVisualizationModeRef.current)
    }
    // Replace the current messages after resetting the related UI state
    replaceMessagesFunctionRef.current?.(messages)
  }

  const clear = () => {
    if (clearFunctionRef.current) {
      clearFunctionRef.current()
    }
    setCurrentThreadTitle(null)
    setIsLoadingThread(false)
    setPendingContext(null)
    setPendingQuote(null)
    // Close canvas when starting a new conversation
    setCanvasContent(null)
    if (visualizationMode === "canvas") {
      setVisualizationMode(previousVisualizationModeRef.current)
    }
  }

  const loadThread = (threadId: string, title: string) => {
    if (loadThreadFunctionRef.current) {
      loadThreadFunctionRef.current(threadId)
    }
    setCurrentThreadTitle(title)
    setPendingContext(null)
    setPendingQuote(null)
    // Close canvas when loading a different thread
    setCanvasContent(null)
    if (visualizationMode === "canvas") {
      setVisualizationMode(previousVisualizationModeRef.current)
    }
  }

  const resetChatWidth = () => {
    setChatWidth(DEFAULT_CHAT_WIDTH)
  }

  const sendMessage: AiChatProviderReturnValue["sendMessage"] = (message) => {
    if (!sendMessageFunctionRef.current) {
      return
    }

    void (async () => {
      if (onBeforeSendMessage && (await onBeforeSendMessage()) === false) {
        return
      }

      // Ensure chat is open when sending a message
      if (!open) {
        setOpen(true)
      }

      const messageToSend: Message =
        typeof message === "string"
          ? {
              id: randomId(),
              role: "user",
              content: message,
            }
          : message

      sendMessageFunctionRef.current?.(messageToSend)
    })()
  }

  useEffect(() => {
    setEnabledInternal(enabled)
  }, [enabled])

  // Reset visualization mode when chat closes
  useEffect(() => {
    if (!open) {
      setCanvasContent(null)
      setVisualizationMode("sidepanel")
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
      setShouldPlayEntranceAnimation(!prefersReducedMotion)
    }
  }, [open])

  // Ensure chat is open when entering fullscreen
  useEffect(() => {
    if (visualizationMode === "fullscreen" && !open) {
      setOpen(true)
    }
  }, [visualizationMode, open])

  // Open the canvas panel with a dashboard config.
  // Saves the current visualization mode so it can be restored on close.
  const openCanvas = useCallback(
    (content: CanvasContent) => {
      if (visualizationMode !== "canvas") {
        previousVisualizationModeRef.current = visualizationMode
      }
      setCanvasContent(content)
      setVisualizationMode("canvas")
      if (!open) {
        setOpen(true)
      }
    },
    [visualizationMode, open]
  )

  // Close the canvas panel and restore the previous visualization mode.
  const closeCanvas = useCallback(() => {
    setCanvasContent(null)
    if (visualizationMode === "canvas") {
      setVisualizationMode(previousVisualizationModeRef.current)
    }
  }, [visualizationMode])

  // Fullscreen mini-game overlay (easter egg). Lives in global state so any
  // UI affordance — credits popover, welcome screen, future surfaces — can
  // open the same game without prop drilling.
  const [activeGame, setActiveGame] = useState<"pong" | null>(null)
  const openGame = useCallback((game: "pong") => setActiveGame(game), [])
  const closeGame = useCallback(() => setActiveGame(null), [])

  return (
    <AiChatStateContext.Provider
      value={{
        ...rest,
        enabled: enabledInternal,
        setEnabled: setEnabledInternal,
        open,
        setOpen,
        mode,
        setMode,
        visualizationMode,
        setVisualizationMode,
        lockVisualizationMode,
        historyEnabled,
        footer,
        VoiceMode,
        setFooter,
        shouldPlayEntranceAnimation,
        setShouldPlayEntranceAnimation,
        agent,
        tmp_setAgent,
        initialMessage,
        setInitialMessage,
        welcomeScreenSuggestions,
        setWelcomeScreenSuggestions,
        onThumbsUp,
        onThumbsDown,
        clear,
        setClearFunction,
        currentThreadTitle,
        loadThread,
        setLoadThreadFunction,
        isLoadingThread,
        setIsLoadingThread,
        placeholders,
        setPlaceholders,
        sendMessage,
        setSendMessageFunction,
        appendMessages,
        setAppendMessagesFunction,
        clearAndAppend,
        setReplaceMessagesFunction,
        disclaimer,
        resizable,
        chatWidth,
        setChatWidth,
        resetChatWidth,
        tracking,
        onBeforeSendMessage,
        runtimeFetch,
        entityRefs,
        canvasActions,
        canvasEntities,
        credits,
        employeeCredits,
        fileAttachments,
        inProgress,
        setInProgress,
        canvasContent,
        openCanvas,
        closeCanvas,
        activeGame,
        openGame,
        closeGame,
        clarifyingQuestion,
        setClarifyingQuestion,
        fileDragOver,
        setFileDragOver,
        processDroppedFiles,
        setProcessDroppedFilesFunction,
        pendingContext,
        setPendingContext,
        pendingQuote,
        setPendingQuote,
      }}
    >
      {children}
    </AiChatStateContext.Provider>
  )
}

const noopFn = () => {}

export function useAiChat(): AiChatProviderReturnValue {
  const context = useContext(AiChatStateContext)

  if (context === null) {
    return {
      enabled: false,
      setEnabled: noopFn,
      open: false,
      setOpen: noopFn,
      mode: "chat",
      setMode: noopFn,
      visualizationMode: "sidepanel",
      setVisualizationMode: noopFn,
      lockVisualizationMode: false,
      historyEnabled: false,
      shouldPlayEntranceAnimation: true,
      setShouldPlayEntranceAnimation: noopFn,
      agent: undefined,
      tmp_setAgent: noopFn,
      clear: noopFn,
      setClearFunction: noopFn,
      currentThreadTitle: null,
      loadThread: noopFn,
      setLoadThreadFunction: noopFn,
      isLoadingThread: false,
      setIsLoadingThread: noopFn,
      initialMessage: undefined,
      setInitialMessage: noopFn,
      placeholders: [],
      setPlaceholders: noopFn,
      welcomeScreenSuggestions: [],
      setWelcomeScreenSuggestions: noopFn,
      onThumbsUp: noopFn,
      onThumbsDown: noopFn,
      sendMessage: noopFn,
      setSendMessageFunction: noopFn,
      appendMessages: noopFn,
      setAppendMessagesFunction: noopFn,
      clearAndAppend: noopFn,
      setReplaceMessagesFunction: noopFn,
      disclaimer: undefined,
      resizable: false,
      footer: undefined,
      VoiceMode: undefined,
      setFooter: noopFn,
      chatWidth: DEFAULT_CHAT_WIDTH,
      setChatWidth: noopFn,
      resetChatWidth: noopFn,
      tracking: undefined,
      onBeforeSendMessage: undefined,
      runtimeFetch: fetch,
      entityRefs: undefined,
      canvasActions: undefined,
      canvasEntities: undefined,
      credits: undefined,
      employeeCredits: undefined,
      creditWarning: undefined,
      fileAttachments: undefined,
      inProgress: false,
      setInProgress: noopFn,
      canvasContent: null,
      openCanvas: noopFn,
      closeCanvas: noopFn,
      activeGame: null,
      openGame: noopFn,
      closeGame: noopFn,
      clarifyingQuestion: null,
      setClarifyingQuestion: noopFn,
      fileDragOver: false,
      setFileDragOver: noopFn,
      processDroppedFiles: noopFn,
      setProcessDroppedFilesFunction: noopFn,
      pendingContext: null,
      setPendingContext: noopFn,
      pendingQuote: null,
      setPendingQuote: noopFn,
    }
  }

  return context
}
