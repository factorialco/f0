"use client"

import type { ReactNode } from "react"

import {
  createContext,
  type FC,
  type PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react"

import { useI18n } from "@/lib/providers/i18n"

import { DEFAULT_CHAT_WIDTH } from "../constants"
import { AiChatProviderReturnValue, AiChatState } from "../internal-types"
import { type AiChatToolHint, WelcomeScreenSuggestion } from "../types"
import { useCanvasState } from "../hooks/useCanvasState"
import { useChatWidth } from "../hooks/useChatWidth"
import { useConversationBridge } from "../hooks/useConversationBridge"
import { useVisualizationState } from "../hooks/useVisualizationState"

const AiChatStateContext = createContext<AiChatProviderReturnValue | null>(null)

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
  // --- Core state ---
  const [enabledInternal, setEnabledInternal] = useState(enabled)
  const [footer, setFooter] = useState<ReactNode | undefined>(initialFooter)
  const [agent, setAgent] = useState<string | undefined>(initialAgent)
  const i18n = useI18n()
  const [placeholders, setPlaceholders] = useState<string[]>([
    i18n.t("ai.inputPlaceholder"),
  ])
  const [initialMessage, setInitialMessage] = useState<
    string | string[] | undefined
  >(initialInitialMessage)
  const [welcomeScreenSuggestions, setWelcomeScreenSuggestions] = useState<
    WelcomeScreenSuggestion[]
  >(initialWelcomeScreenSuggestions)
  const [activeToolHint, setActiveToolHint] = useState<AiChatToolHint | null>(
    null
  )

  useEffect(() => {
    setEnabledInternal(enabled)
  }, [enabled])

  // --- Visualization (open, mode, entrance animation) ---
  const {
    open,
    setOpen,
    visualizationMode,
    setVisualizationMode,
    shouldPlayEntranceAnimation,
    setShouldPlayEntranceAnimation,
  } = useVisualizationState(defaultVisualizationMode)

  // --- Chat width (localStorage-persisted) ---
  const { chatWidth, setChatWidth, resetChatWidth } = useChatWidth()

  // --- Canvas (dashboard panel, open/close with mode restore) ---
  const {
    canvasDashboard,
    setCanvasDashboard,
    openCanvas,
    closeCanvas,
    resetCanvas,
  } = useCanvasState(visualizationMode, setVisualizationMode, open, setOpen)

  // Reset canvas when chat closes (the visualization hook resets mode,
  // but canvas dashboard state needs clearing too)
  useEffect(() => {
    if (!open) {
      setCanvasDashboard(null)
    }
  }, [open, setCanvasDashboard])

  // --- Conversation bridge (clear, sendMessage, loadThread refs) ---
  const {
    currentThreadTitle,
    clear,
    setClearFunction,
    loadThread,
    setLoadThreadFunction,
    sendMessage,
    setSendMessageFunction,
  } = useConversationBridge(open, setOpen, resetCanvas)

  // --- Tracking ---
  useEffect(() => {
    if (open) {
      tracking?.onVisibility?.()
    }
  }, [open])

  const tmp_setAgent = (newAgent?: string) => {
    setAgent(newAgent)
  }

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
        loadThread,
        setLoadThreadFunction,
        currentThreadTitle,
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
        activeToolHint,
        setActiveToolHint,
        canvasDashboard,
        openCanvas,
        closeCanvas,
      }}
    >
      {children}
    </AiChatStateContext.Provider>
  )
}

const noopFn = () => {}
const noopAsyncFn = () => Promise.resolve()

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
      loadThread: noopAsyncFn,
      setLoadThreadFunction: noopFn,
      currentThreadTitle: null,
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
      activeToolHint: null,
      setActiveToolHint: noopFn,
      canvasDashboard: null,
      openCanvas: noopFn,
      closeCanvas: noopFn,
    }
  }

  return context
}
