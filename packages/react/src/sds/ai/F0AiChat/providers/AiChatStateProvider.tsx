"use client"

import { type Message, randomId } from "@copilotkit/shared"
import {
  createContext,
  type FC,
  type PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"
import type { ReactNode } from "react"

import { useI18n } from "@/lib/providers/i18n"

import { DEFAULT_CHAT_WIDTH } from "../constants"
import { AiChatProviderReturnValue, AiChatState } from "../internal-types"
import { type VisualizationMode, WelcomeScreenSuggestion } from "../types"

const AiChatStateContext = createContext<AiChatProviderReturnValue | null>(null)

const CHAT_WIDTH_STORAGE_KEY = "ONE-ai-chat-width"

const getStoredChatWidth = (): number => {
  if (typeof window === "undefined") return DEFAULT_CHAT_WIDTH
  try {
    const stored = localStorage.getItem(CHAT_WIDTH_STORAGE_KEY)
    if (stored) {
      const parsed = parseInt(stored, 10)
      if (!isNaN(parsed) && parsed >= 300 && parsed <= 712) {
        return parsed
      }
    }
  } catch {
    // localStorage might not be available
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
  onThumbsDown,
  onThumbsUp,
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

  // Persist chat width to localStorage
  useEffect(() => {
    if (typeof window === "undefined") return
    try {
      localStorage.setItem(CHAT_WIDTH_STORAGE_KEY, String(chatWidth))
    } catch {
      // localStorage might not be available
    }
  }, [chatWidth])

  // Store the reset function from CopilotKit
  const clearFunctionRef = useRef<(() => void) | null>(null)
  // Store the sendMessage function from CopilotKit
  const sendMessageFunctionRef = useRef<((message: Message) => void) | null>(
    null
  )

  const tmp_setAgent = (newAgent?: string) => {
    setAgent(newAgent)
  }

  const setClearFunction = (clearFn: (() => void) | null) => {
    clearFunctionRef.current = clearFn
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
        placeholders,
        setPlaceholders,
        sendMessage,
        setSendMessageFunction,
        disclaimer,
        resizable,
        chatWidth,
        setChatWidth,
        resetChatWidth,
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
    }
  }

  return context
}
