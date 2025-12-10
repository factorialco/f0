"use client"

import { useI18n } from "@/lib/providers/i18n"
import { type AIMessage } from "@copilotkit/shared"
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react"
import { WelcomeScreenSuggestion } from "../components/WelcomeScreen"

type AiChatInternalContextValue = AiChatProviderReturnValue & {
  setIsThinking: React.Dispatch<React.SetStateAction<boolean>>
}

const AiChatStateContext = createContext<AiChatInternalContextValue | null>(
  null
)

export interface AiChatState {
  greeting?: string
  enabled: boolean
  agent?: string
  initialMessage?: string | string[]
  welcomeScreenSuggestions?: WelcomeScreenSuggestion[]
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
}

type AiChatProviderReturnValue = {
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
   * Set the amount of minutes after which the chat will be cleared automatically
   * Set `null` to disable auto-clearing
   *
   * @default 15
   */
  setAutoClearMinutes: React.Dispatch<React.SetStateAction<number | null>>
  autoClearMinutes: number | null

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
   * Whether the AI is currently thinking (processing but not yet generating response)
   */
  isThinking: boolean
} & Pick<AiChatState, "greeting" | "agent">

const DEFAULT_MINUTES_TO_RESET = 15

export const AiChatStateProvider: FC<PropsWithChildren<AiChatState>> = ({
  children,
  enabled,
  agent: initialAgent,
  initialMessage: initialInitialMessage,
  welcomeScreenSuggestions: initialWelcomeScreenSuggestions = [],
  onThumbsDown,
  onThumbsUp,
  ...rest
}) => {
  const [enabledInternal, setEnabledInternal] = useState(enabled)
  const [open, setOpen] = useState(false)
  const [shouldPlayEntranceAnimation, setShouldPlayEntranceAnimation] =
    useState(true)
  const [agent, setAgent] = useState<string | undefined>(initialAgent)
  const [welcomeScreenSuggestions, setWelcomeScreenSuggestions] = useState<
    WelcomeScreenSuggestion[]
  >(initialWelcomeScreenSuggestions)
  const i18n = useI18n()
  const [placeholders, setPlaceholders] = useState<string[]>([
    i18n.t("ai.inputPlaceholder"),
  ])

  const [autoClearMinutes, setAutoClearMinutes] = useState<number | null>(
    DEFAULT_MINUTES_TO_RESET
  )
  const [initialMessage, setInitialMessage] = useState<
    string | string[] | undefined
  >(initialInitialMessage)
  const [isThinking, setIsThinking] = useState(false)

  // Store the reset function from CopilotKit
  const clearFunctionRef = useRef<(() => void) | null>(null)

  const tmp_setAgent = (newAgent?: string) => {
    setAgent(newAgent)
  }

  const setClearFunction = (clearFn: (() => void) | null) => {
    clearFunctionRef.current = clearFn
  }

  const clear = () => {
    if (clearFunctionRef.current) {
      clearFunctionRef.current()
    }
  }

  useEffect(() => {
    setEnabledInternal(enabled)
  }, [enabled])

  useEffect(() => {
    if (!open) {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
      setShouldPlayEntranceAnimation(!prefersReducedMotion)
    }
  }, [open])

  return (
    <AiChatStateContext.Provider
      value={{
        ...rest,
        enabled: enabledInternal,
        setEnabled: setEnabledInternal,
        open,
        setOpen,
        shouldPlayEntranceAnimation,
        setShouldPlayEntranceAnimation,
        agent,
        tmp_setAgent,
        setAutoClearMinutes,
        autoClearMinutes: enabledInternal ? autoClearMinutes : null,
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
        isThinking,
        setIsThinking,
      }}
    >
      {children}
    </AiChatStateContext.Provider>
  )
}

const noopFn = () => {}

const defaultContextValue: AiChatProviderReturnValue = {
  enabled: false,
  setEnabled: noopFn,
  open: false,
  setOpen: noopFn,
  shouldPlayEntranceAnimation: true,
  setShouldPlayEntranceAnimation: noopFn,
  agent: undefined,
  tmp_setAgent: noopFn,
  setAutoClearMinutes: noopFn,
  clear: noopFn,
  setClearFunction: noopFn,
  autoClearMinutes: null,
  initialMessage: undefined,
  setInitialMessage: noopFn,
  placeholders: [],
  setPlaceholders: noopFn,
  welcomeScreenSuggestions: [],
  setWelcomeScreenSuggestions: noopFn,
  onThumbsUp: noopFn,
  onThumbsDown: noopFn,
  isThinking: false,
}

export function useAiChat(): AiChatProviderReturnValue {
  const context = useContext(AiChatStateContext)

  if (context === null) {
    return defaultContextValue
  }

  const { setIsThinking: _, ...publicContext } = context
  return publicContext
}

/**
 * Internal hook that provides access to internal state setters.
 * Not part of the public API.
 * @internal
 */
export function useAiChatInternal(): AiChatInternalContextValue {
  const context = useContext(AiChatStateContext)

  if (context === null) {
    return {
      ...defaultContextValue,
      setIsThinking: noopFn,
    }
  }

  return context
}
