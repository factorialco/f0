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

import { useInjectedFn } from "./useInjectedFn"
import { usePersistedState } from "./usePersistedState"

const AiChatStateContext = createContext<AiChatProviderReturnValue | null>(null)

const CHAT_WIDTH_STORAGE_KEY = "ONE-ai-chat-width"
const CHAT_OPEN_STORAGE_KEY = "ONE-ai-chat-open"
const CHAT_VISUALIZATION_MODE_STORAGE_KEY = "ONE-ai-chat-visualization-mode"

const CHAT_WIDTH_MIN = 300
const CHAT_WIDTH_MAX = 712

const isPersistableVisualizationMode = (value: VisualizationMode): boolean =>
  value === "sidepanel" || value === "fullscreen"

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

  // Persistence — these survive reloads. The provider only mounts once
  // `ai.enabled === true`, so the initializers naturally pick up the
  // stored values even when activation is delayed.
  const [chatWidth, setChatWidth] = usePersistedState<number>(
    CHAT_WIDTH_STORAGE_KEY,
    DEFAULT_CHAT_WIDTH,
    (v): v is number =>
      typeof v === "number" &&
      !isNaN(v) &&
      v >= CHAT_WIDTH_MIN &&
      v <= CHAT_WIDTH_MAX
  )

  // First visit: defaults to open so the chat is discoverable. Subsequent
  // visits respect the user's last choice.
  const [open, setOpen] = usePersistedState<boolean>(
    CHAT_OPEN_STORAGE_KEY,
    defaultVisualizationMode === "fullscreen",
    (v): v is boolean => typeof v === "boolean"
  )

  // `canvas` is a transient overlay — only stable user-facing modes are
  // persisted. We pass `shouldWrite` so the canvas mode never escapes
  // into the stored value.
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

  // Track the mode before canvas was opened so we can restore it on close
  const previousVisualizationModeRef = useRef<VisualizationMode>("sidepanel")

  const [clarifyingQuestion, setClarifyingQuestion] =
    useState<ClarifyingQuestionState | null>(null)

  const [fileDragOver, setFileDragOver] = useState(false)
  const [pendingContext, setPendingContext] = useState<PendingContext | null>(
    null
  )
  const [pendingQuote, setPendingQuote] = useState<PendingQuote | null>(null)

  // Functions injected from CopilotKit via CopilotFunctionBridge. Each pair
  // exposes [invoker, setter] — invoker is a stable callback that no-ops
  // when nothing is registered; setter is what the bridge calls.
  const [clear_raw, setClearFunction] = useInjectedFn<[]>()
  const [loadThread_raw, setLoadThreadFunction] = useInjectedFn<[string]>()
  const [sendMessage_raw, setSendMessageFunction] = useInjectedFn<[Message]>()
  const [appendMessages_raw, setAppendMessagesFunction] =
    useInjectedFn<[AppendMessage[], boolean]>()
  const [replaceMessages_raw, setReplaceMessagesFunction] =
    useInjectedFn<[AppendMessage[]]>()
  const [processDroppedFiles, setProcessDroppedFilesFunction] =
    useInjectedFn<[File[]]>()

  const [currentThreadTitle, setCurrentThreadTitle] = useState<string | null>(
    null
  )
  const [isLoadingThread, setIsLoadingThread] = useState(false)

  const tmp_setAgent = (newAgent?: string) => {
    setAgent(newAgent)
  }

  // Centralised "starting/loading a fresh thread" reset. Called from
  // `clear`, `loadThread` and `clearAndAppend` — keeping it in one place
  // prevents the bug where a new piece of per-thread UI state gets
  // added but one caller forgets to reset it.
  const resetForNewThread = useCallback(() => {
    setCurrentThreadTitle(null)
    setIsLoadingThread(false)
    setPendingContext(null)
    setPendingQuote(null)
    setCanvasContent(null)
    if (visualizationMode === "canvas") {
      setVisualizationMode(previousVisualizationModeRef.current)
    }
  }, [visualizationMode, setVisualizationMode])

  const appendMessages = (
    messages: AppendMessage[],
    options?: { persist?: boolean }
  ) => {
    appendMessages_raw(messages, options?.persist ?? true)
  }

  const clearAndAppend = (messages: AppendMessage[]) => {
    // Reset UI state for a fresh conversation, then replace messages.
    resetForNewThread()
    replaceMessages_raw(messages)
  }

  const clear = () => {
    clear_raw()
    resetForNewThread()
  }

  const loadThread = (threadId: string, title: string) => {
    loadThread_raw(threadId)
    resetForNewThread()
    setCurrentThreadTitle(title)
  }

  const resetChatWidth = () => {
    setChatWidth(DEFAULT_CHAT_WIDTH)
  }

  const sendMessage: AiChatProviderReturnValue["sendMessage"] = (message) => {
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

      sendMessage_raw(messageToSend)
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

/**
 * Buckets used to build the no-provider fallback. ApplicationFrame
 * renders chat-aware children (e.g. `AiChatPlaceholderReset`) inside
 * both the AI-enabled tree and the promotion-chat tree — when the
 * provider isn't mounted, `useAiChat()` must return a complete inert
 * shape rather than throw.
 *
 * **Contract**: every field in `AiChatProviderReturnValue` must be
 * classified by one of these sets. Unclassified keys fall through to
 * `noopFn` — fine for the ~30 setter/action functions, but a foot-gun
 * for state fields. When you add a non-function field to the provider,
 * add its key to the correct bucket below.
 */
type ProviderKey = keyof AiChatProviderReturnValue

const FALSE_KEYS = new Set<ProviderKey>([
  "enabled",
  "open",
  "isLoadingThread",
  "inProgress",
  "fileDragOver",
  "lockVisualizationMode",
  "historyEnabled",
  "resizable",
])

const NULL_KEYS = new Set<ProviderKey>([
  "currentThreadTitle",
  "canvasContent",
  "clarifyingQuestion",
  "pendingContext",
  "pendingQuote",
  "activeGame",
])

const UNDEFINED_KEYS = new Set<ProviderKey>([
  "agent",
  "initialMessage",
  "disclaimer",
  "footer",
  "VoiceMode",
  "tracking",
  "onBeforeSendMessage",
  "entityRefs",
  "canvasActions",
  "canvasEntities",
  "credits",
  "creditWarning",
  "fileAttachments",
  "onThumbsUp",
  "onThumbsDown",
])

const REAL_VALUES: Partial<AiChatProviderReturnValue> = {
  chatWidth: DEFAULT_CHAT_WIDTH,
  runtimeFetch: fetch,
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
    // Setters, actions, anything else → noop.
    return noopFn
  },
})

/**
 * Read the AiChat context. Returns an inert fallback when no provider
 * is mounted — that case is intentional in `ApplicationFrame`, which
 * renders chat-aware components in both the AI-enabled tree and the
 * promotion-chat tree.
 *
 * Most consumers don't need to think about this — they're rendered
 * under `<F0AiChatProvider>` and receive the real context.
 */
export function useAiChat(): AiChatProviderReturnValue {
  return useContext(AiChatStateContext) ?? NO_PROVIDER_CONTEXT
}
