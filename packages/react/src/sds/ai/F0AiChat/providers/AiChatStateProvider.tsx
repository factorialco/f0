"use client"

import type { ReactNode } from "react"

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
  type CanvasContent,
  type PendingContext,
  type PendingQuote,
  type VisualizationMode,
  WelcomeScreenSuggestion,
} from "../types"
import { DEFAULT_CHAT_WIDTH } from "../utils/constants"

import { usePersistedState } from "./usePersistedState"

const AiChatStateContext = createContext<AiChatProviderReturnValue | null>(null)

const CHAT_WIDTH_STORAGE_KEY = "ONE-ai-chat-width"
const CHAT_OPEN_STORAGE_KEY = "ONE-ai-chat-open"
const CHAT_VISUALIZATION_MODE_STORAGE_KEY = "ONE-ai-chat-visualization-mode"

const CHAT_WIDTH_MIN = 300
const CHAT_WIDTH_MAX = 712

const isPersistableVisualizationMode = (value: VisualizationMode): boolean =>
  value === "sidepanel" || value === "fullscreen"

const noop = () => {}

/**
 * Provider for the f0 AI chat UI state. Pure UI — message-runtime concerns
 * (sendMessage, threads, streaming, persistence) live in a separate adapter
 * (see `MockAiChatRuntime` in stories, factorial's `FactorialChatRuntime`
 * in production).
 */
export const AiChatStateProvider: FC<PropsWithChildren<AiChatState>> = ({
  children,
  enabled,
  agent: initialAgent,
  initialMessage: initialInitialMessage,
  chatHeader,
  chatMessages,
  chatInput,
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
  creditWarning,
  fileAttachments,
  onThumbsDown,
  onThumbsUp,
  tracking,
}) => {
  const [footer, setFooter] = useState<ReactNode | undefined>(initialFooter)
  const [enabledInternal, setEnabledInternal] = useState(enabled)

  const [chatWidth, setChatWidth] = usePersistedState<number>(
    CHAT_WIDTH_STORAGE_KEY,
    DEFAULT_CHAT_WIDTH,
    (v): v is number =>
      typeof v === "number" &&
      !isNaN(v) &&
      v >= CHAT_WIDTH_MIN &&
      v <= CHAT_WIDTH_MAX
  )

  const [open, setOpen] = usePersistedState<boolean>(
    CHAT_OPEN_STORAGE_KEY,
    defaultVisualizationMode === "fullscreen",
    (v): v is boolean => typeof v === "boolean"
  )

  const fallbackVisualizationMode: VisualizationMode =
    defaultVisualizationMode === "canvas"
      ? "sidepanel"
      : defaultVisualizationMode
  const [visualizationMode, setVisualizationModeRaw] =
    usePersistedState<VisualizationMode>(
      CHAT_VISUALIZATION_MODE_STORAGE_KEY,
      fallbackVisualizationMode,
      (v): v is VisualizationMode => v === "sidepanel" || v === "fullscreen",
      isPersistableVisualizationMode
    )

  const [mode, setMode] = useState<AiChatMode>("chat")
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

  useEffect(() => {
    if (open) {
      tracking?.onVisibility?.()
    }
  }, [open])

  const [canvasContent, setCanvasContent] = useState<CanvasContent | null>(null)

  const setVisualizationMode = useCallback<
    React.Dispatch<React.SetStateAction<VisualizationMode>>
  >(
    (next) => {
      setVisualizationModeRaw((prev) => {
        const resolved = typeof next === "function" ? next(prev) : next
        if (prev === "canvas" && resolved !== "canvas") {
          setCanvasContent(null)
        }
        return resolved
      })
    },
    [setVisualizationModeRaw]
  )

  const previousVisualizationModeRef = useRef<VisualizationMode>("sidepanel")

  const [clarifyingQuestion, setClarifyingQuestion] =
    useState<ClarifyingQuestionState | null>(null)

  const [fileDragOver, setFileDragOver] = useState(false)
  const [pendingContext, setPendingContext] = useState<PendingContext | null>(
    null
  )
  const [pendingQuote, setPendingQuote] = useState<PendingQuote | null>(null)

  // File drop bridge — the chat-wide DropOverlay rendered by ChatWindow
  // forwards files here. ChatTextarea registers its handler via
  // `setProcessDroppedFilesFunction`. Same pattern factorial uses, just
  // hoisted into f0 since it's pure UI wiring.
  const processFilesRef = useRef<((files: File[]) => void) | null>(null)
  const processDroppedFiles = useCallback((files: File[]) => {
    processFilesRef.current?.(files)
  }, [])
  const setProcessDroppedFilesFunction = useCallback(
    (fn: ((files: File[]) => void) | null) => {
      processFilesRef.current = fn
    },
    []
  )

  const tmp_setAgent = (newAgent?: string) => {
    setAgent(newAgent)
  }

  const resetChatWidth = () => {
    setChatWidth(DEFAULT_CHAT_WIDTH)
  }

  useEffect(() => {
    setEnabledInternal(enabled)
  }, [enabled])

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

  useEffect(() => {
    if (visualizationMode === "fullscreen" && !open) {
      setOpen(true)
    }
  }, [visualizationMode, open])

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

  const closeCanvas = useCallback(() => {
    setCanvasContent(null)
    if (visualizationMode === "canvas") {
      setVisualizationMode(previousVisualizationModeRef.current)
    }
  }, [visualizationMode])

  const [activeGame, setActiveGame] = useState<"pong" | null>(null)
  const openGame = useCallback((game: "pong") => setActiveGame(game), [])
  const closeGame = useCallback(() => setActiveGame(null), [])

  return (
    <AiChatStateContext.Provider
      value={{
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
        chatHeader,
        chatMessages,
        chatInput,
        welcomeScreenSuggestions,
        setWelcomeScreenSuggestions,
        onThumbsUp,
        onThumbsDown,
        placeholders,
        setPlaceholders,
        disclaimer,
        resizable,
        chatWidth,
        setChatWidth,
        resetChatWidth,
        tracking,
        entityRefs,
        canvasActions,
        canvasEntities,
        credits,
        employeeCredits,
        creditWarning,
        fileAttachments,
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

/**
 * Buckets used to build the no-provider fallback. ApplicationFrame
 * renders chat-aware children (e.g. `AiChatPlaceholderReset`) inside
 * both the AI-enabled tree and the promotion-chat tree — when the
 * provider isn't mounted, `useAiChat()` must return a complete inert
 * shape rather than throw.
 */
type ProviderKey = keyof AiChatProviderReturnValue

const FALSE_KEYS = new Set<ProviderKey>([
  "enabled",
  "open",
  "fileDragOver",
  "lockVisualizationMode",
  "historyEnabled",
  "resizable",
])

const NULL_KEYS = new Set<ProviderKey>([
  "canvasContent",
  "clarifyingQuestion",
  "pendingContext",
  "pendingQuote",
  "activeGame",
])

const UNDEFINED_KEYS = new Set<ProviderKey>([
  "agent",
  "initialMessage",
  "chatHeader",
  "chatMessages",
  "chatInput",
  "disclaimer",
  "footer",
  "VoiceMode",
  "tracking",
  "entityRefs",
  "canvasActions",
  "canvasEntities",
  "credits",
  "employeeCredits",
  "creditWarning",
  "fileAttachments",
  "onThumbsUp",
  "onThumbsDown",
])

const REAL_VALUES: Partial<AiChatProviderReturnValue> = {
  chatWidth: DEFAULT_CHAT_WIDTH,
  visualizationMode: "sidepanel",
  mode: "chat",
  shouldPlayEntranceAnimation: true,
  placeholders: [],
  welcomeScreenSuggestions: [],
}

const NO_PROVIDER_CONTEXT = new Proxy({} as AiChatProviderReturnValue, {
  get(_, prop) {
    if (typeof prop !== "string") return undefined
    const key = prop as ProviderKey
    if (key in REAL_VALUES) return REAL_VALUES[key]
    if (NULL_KEYS.has(key)) return null
    if (UNDEFINED_KEYS.has(key)) return undefined
    if (FALSE_KEYS.has(key)) return false
    return noop
  },
})

/**
 * Read the AiChat context. Returns an inert fallback when no provider
 * is mounted — that case is intentional in `ApplicationFrame`, which
 * renders chat-aware components in both the AI-enabled tree and the
 * promotion-chat tree.
 */
export function useAiChat(): AiChatProviderReturnValue {
  return useContext(AiChatStateContext) ?? NO_PROVIDER_CONTEXT
}
