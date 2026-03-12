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

import { DEFAULT_CHAT_WIDTH } from "../constants"
import {
  readFromLocalStorage,
  writeToLocalStorage,
} from "../utils/local-storage"
import { AiChatProviderReturnValue, AiChatState } from "../internal-types"
import {
  type CanvasContent,
  type VisualizationMode,
  type AiChatToolHint,
  WelcomeScreenSuggestion,
} from "../types"

const AiChatStateContext = createContext<AiChatProviderReturnValue | null>(null)

const CHAT_WIDTH_STORAGE_KEY = "ONE-ai-chat-width"

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
  footer: initialFooter,
  entityResolvers,
  toolHints,
  onThumbsDown,
  onThumbsUp,
  tracking,
  ...rest
}) => {
  const [footer, setFooter] = useState<ReactNode | undefined>(initialFooter)
  const [enabledInternal, setEnabledInternal] = useState(enabled)
  const [open, setOpen] = useState(defaultVisualizationMode === "fullscreen")
  const [visualizationMode, setVisualizationMode] = useState<VisualizationMode>(
    defaultVisualizationMode
  )
  const [shouldPlayEntranceAnimation, setShouldPlayEntranceAnimation] =
    useState(defaultVisualizationMode !== "fullscreen")
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

  const [canvasContent, setCanvasContent] = useState<CanvasContent | null>(null)

  // Track the mode before canvas was opened so we can restore it on close
  const previousVisualizationModeRef = useRef<VisualizationMode>("sidepanel")

  const [activeToolHint, setActiveToolHint] = useState<AiChatToolHint | null>(
    null
  )

  // Persist chat width to localStorage
  useEffect(() => {
    if (typeof window === "undefined") return
    writeToLocalStorage(CHAT_WIDTH_STORAGE_KEY, chatWidth)
  }, [chatWidth])

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

  const clear = () => {
    if (clearFunctionRef.current) {
      clearFunctionRef.current()
    }
    setCurrentThreadTitle(null)
    setIsLoadingThread(false)
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
    // Close canvas when loading a different thread
    setCanvasContent(null)
    if (visualizationMode === "canvas") {
      setVisualizationMode(previousVisualizationModeRef.current)
    }
  }

  const resetChatWidth = () => {
    setChatWidth(DEFAULT_CHAT_WIDTH)
  }

  const sendMessage = (message: string | Message) => {
    if (!sendMessageFunctionRef.current) {
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

  return (
    <AiChatStateContext.Provider
      value={{
        ...rest,
        enabled: enabledInternal,
        setEnabled: setEnabledInternal,
        open,
        setOpen,
        visualizationMode,
        setVisualizationMode,
        lockVisualizationMode,
        footer,
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
        disclaimer,
        resizable,
        chatWidth,
        setChatWidth,
        resetChatWidth,
        tracking,
        entityResolvers,
        toolHints,
        canvasContent,
        canvasDashboard:
          canvasContent?.type === "dashboard" ? canvasContent.config : null,
        openCanvas,
        closeCanvas,
        activeToolHint,
        setActiveToolHint,
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
      visualizationMode: "sidepanel",
      setVisualizationMode: noopFn,
      lockVisualizationMode: false,
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
      disclaimer: undefined,
      resizable: false,
      footer: undefined,
      setFooter: noopFn,
      chatWidth: DEFAULT_CHAT_WIDTH,
      setChatWidth: noopFn,
      resetChatWidth: noopFn,
      tracking: undefined,
      entityResolvers: undefined,
      toolHints: undefined,
      canvasContent: null,
      canvasDashboard: null,
      openCanvas: noopFn,
      closeCanvas: noopFn,
      activeToolHint: null,
      setActiveToolHint: noopFn,
    }
  }

  return context
}
