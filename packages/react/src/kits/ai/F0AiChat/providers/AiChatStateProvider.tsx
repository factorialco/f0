"use client"

import {
  createContext,
  type FC,
  type PropsWithChildren,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { useLinkContext } from "@/lib/linkHandler"
import { useI18n } from "@/lib/providers/i18n"
import {
  SidePanelProvider,
  useHasSidePanel,
  useSidePanel,
} from "@/patterns/ApplicationFrame/SidePanel/SidePanelProvider"
import type { SidePanelContextValue } from "@/patterns/ApplicationFrame/SidePanel/types"
import { AiChatProviderReturnValue, AiChatState } from "../internal-types"
import {
  type AiChatMode,
  type CanvasContent,
  type PendingContext,
  type PendingQuote,
  type SidePanelContent,
  type VisualizationMode,
  F0AiChatWelcomeCard,
  WelcomeScreenSuggestion,
} from "../types"

/**
 * What this provider actually owns: the chat's half of the contract. The
 * panel's half comes from `SidePanelProvider` and is merged back on in
 * `useAiChat`, so the public shape is unchanged.
 */
type AiChatOwnValue = Omit<
  AiChatProviderReturnValue,
  keyof ReturnType<typeof aliasSidePanel>
>

const AiChatStateContext = createContext<AiChatOwnValue | null>(null)

const noop = () => {}

/**
 * The views a standalone chat declares for the panel it brings with it.
 *
 * `available` is deliberately not tied to `enabled`: a disabled chat can still
 * be handed hosted content (that is exactly the communications-without-One
 * case), and the panel decides on its own whether anything is in it.
 */
const AI_ONLY_VIEWS = [{ id: "ai" }]

/**
 * The panel half of the chat's contract, under the names the AI kit has always
 * used for it. The state itself lives in `SidePanelProvider` — the chat is one
 * of the things that can occupy the panel, not its owner.
 */
const aliasSidePanel = (panel: SidePanelContextValue) =>
  ({
    open: panel.open,
    setOpen: panel.setOpen,
    resizable: panel.resizable,
    chatWidth: panel.width,
    setChatWidth: panel.setWidth,
    resetChatWidth: panel.resetWidth,
    effectiveChatWidth: panel.effectiveWidth,
    chatWidthBounds: panel.widthBounds,
    panelOverlays: panel.panelOverlays,
    setFrameWidth: panel.setFrameWidth,
    isResizing: panel.isResizing,
    setIsResizing: panel.setIsResizing,
    panelContent: panel.activeContent,
    clearPanelContent: panel.clear,
    restoringPanelContentId: panel.restoringViewId,
    cancelPanelContentRestore: panel.cancelRestore,
    panelSide: panel.side,
    setPanelSide: panel.setSide,
    panelContentSide: panel.contentSide,
    setPanelContentSide: panel.setContentSide,
    shouldPlayEntranceAnimation: panel.shouldPlayEntranceAnimation,
    setShouldPlayEntranceAnimation: panel.setShouldPlayEntranceAnimation,
  }) satisfies Partial<AiChatProviderReturnValue>

/**
 * Provider for the f0 AI chat UI state. Pure UI — message-runtime concerns
 * (sendMessage, threads, streaming, persistence) live in a separate adapter
 * (see `MockAiChatRuntime` in stories, factorial's `FactorialChatRuntime`
 * in production).
 *
 * The panel the chat lives in is NOT this provider's state — see
 * `SidePanelProvider`. `ApplicationFrame` mounts that one itself; when the chat
 * is used standalone (stories, tests, a chat outside a frame) this supplies one
 * so the contract stays whole either way.
 */
export const AiChatStateProvider: FC<PropsWithChildren<AiChatState>> = (
  props
) => {
  const hasSidePanel = useHasSidePanel()
  if (hasSidePanel) {
    return <AiChatStateProviderInner {...props} />
  }
  return (
    <SidePanelProvider
      // Standalone, the chat IS the panel's occupant — it has to say so, or
      // the panel would consider itself empty and refuse to open.
      views={AI_ONLY_VIEWS}
      side={props.side}
      contentSide={props.panelContentSide}
      resizable={props.resizable}
      defaultLayout={
        props.defaultVisualizationMode === "fullscreen"
          ? "fullscreen"
          : "sidepanel"
      }
    >
      <AiChatStateProviderInner {...props} />
    </SidePanelProvider>
  )
}

/**
 * `side`, `panelContentSide`, `resizable` and `defaultVisualizationMode` are
 * deliberately absent here: they configure the PANEL, and are consumed by the
 * `SidePanelProvider` above this component.
 */
const AiChatStateProviderInner: FC<PropsWithChildren<AiChatState>> = ({
  children,
  enabled,
  agent: initialAgent,
  initialMessage: initialInitialMessage,
  chatHeader,
  chatMessages,
  chatInput,
  chatOverlay,
  welcomeScreenSuggestions: initialWelcomeScreenSuggestions = [],
  welcomeScreenCards: initialWelcomeScreenCards = [],
  disclaimer,
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
  onTranscribe,
  onThumbsDown,
  onThumbsUp,
  tracking,
}) => {
  const [footer, setFooter] = useState<ReactNode | undefined>(initialFooter)
  const [enabledInternal, setEnabledInternal] = useState(enabled)

  const panel = useSidePanel()
  const { open, setOpen, layout, setLayout } = panel

  const [mode, setMode] = useState<AiChatMode>("chat")
  const [agent, setAgent] = useState<string | undefined>(initialAgent)
  const [welcomeScreenSuggestions, setWelcomeScreenSuggestions] = useState<
    WelcomeScreenSuggestion[]
  >(initialWelcomeScreenSuggestions)
  const [welcomeScreenCards, setWelcomeScreenCards] = useState<
    F0AiChatWelcomeCard[]
  >(initialWelcomeScreenCards)
  const i18n = useI18n()
  // The host's current route, when it provides one. See the navigation effect
  // below — this is the only thing here that knows the page has changed.
  const { currentPath } = useLinkContext()
  const [placeholders, setPlaceholders] = useState<string[]>([
    i18n.t("ai.inputPlaceholder"),
  ])
  const [initialMessage, setInitialMessage] = useState<
    string | string[] | undefined
  >(initialInitialMessage)

  const [canvasContent, setCanvasContent] = useState<CanvasContent | null>(null)

  /**
   * DERIVED, not stored. The panel knows two layouts (docked / covering); the
   * canvas is a third thing the AI kit lays over them. Deriving it is what
   * makes `closeCanvas` free: the panel's own layout was never overwritten, so
   * dropping the canvas content lands back on exactly what was underneath.
   */
  const visualizationMode: VisualizationMode = canvasContent ? "canvas" : layout

  // Read through refs so the setter keeps a stable identity — it is in the
  // dependency array of the navigation effect below and of host callbacks.
  const canvasContentRef = useRef(canvasContent)
  canvasContentRef.current = canvasContent
  const layoutRef = useRef(layout)
  layoutRef.current = layout

  const setVisualizationMode = useCallback<
    React.Dispatch<React.SetStateAction<VisualizationMode>>
  >(
    (next) => {
      const resolved =
        typeof next === "function"
          ? next(canvasContentRef.current ? "canvas" : layoutRef.current)
          : next
      // "canvas" is not something a caller can switch INTO — it needs content,
      // which is what `openCanvas` is for. Nothing in the codebase passes it.
      if (resolved === "canvas") {
        return
      }
      // Leaving canvas means dropping what was in it.
      setCanvasContent(null)
      setLayout(resolved)
    },
    [setLayout]
  )

  /**
   * NAVIGATING LEAVES FULLSCREEN.
   *
   * A fullscreen panel covers the page it is supposed to be beside, so every
   * link in it lands the reader somewhere they cannot see: they arrive, see the
   * same chat they were already looking at, and have to collapse it by hand
   * before finding out where they went. Docking on the way keeps the panel open
   * — nothing is lost — and hands the page back.
   *
   * Only on a CHANGE, never on the first render: arriving on a route with the
   * panel already fullscreen (a reload, a deep link) is not navigation, and
   * collapsing it there would quietly undo what the reader last chose.
   *
   * `currentPath` is `undefined` without a `LinkProvider`, and this then never
   * fires — a standalone chat has no routes to follow.
   */
  const previousPathRef = useRef(currentPath)
  useEffect(() => {
    const previous = previousPathRef.current
    previousPathRef.current = currentPath
    if (currentPath === undefined || previous === undefined) {
      return
    }
    if (previous === currentPath) {
      return
    }
    // `canvas` is left alone: it is a workspace the reader opened ON PURPOSE
    // for the thing they are doing, not a way of reading the chat.
    setVisualizationMode((mode) => (mode === "fullscreen" ? "sidepanel" : mode))
  }, [currentPath, setVisualizationMode])

  const [isClarifying, setIsClarifying] = useState(false)

  const [fileDragOver, setFileDragOver] = useState(false)
  const [pendingContext, setPendingContext] = useState<PendingContext | null>(
    null
  )
  const [pendingQuote, setPendingQuote] = useState<PendingQuote | null>(null)

  // File drop bridge — the chat-wide DropOverlay rendered by ChatWindow
  // forwards files here. ChatTextarea registers its handler via
  // `setProcessDroppedFilesFunction`. Same pattern factorial uses, just
  // hoisted into f0 since it's pure UI wiring.
  //
  // pendingDropsRef buffers drops that arrive while the textarea's handler
  // is momentarily unregistered (the textarea re-registers whenever its
  // processFiles identity changes). Without it those drops were lost
  // silently and the user had to drop the file again.
  const processFilesRef = useRef<((files: File[]) => void) | null>(null)
  const pendingDropsRef = useRef<File[][]>([])
  const processDroppedFiles = useCallback((files: File[]) => {
    if (processFilesRef.current) {
      processFilesRef.current(files)
    } else {
      pendingDropsRef.current.push(files)
    }
  }, [])
  const setProcessDroppedFilesFunction = useCallback(
    (fn: ((files: File[]) => void) | null) => {
      processFilesRef.current = fn
      if (fn && pendingDropsRef.current.length > 0) {
        const buffered = pendingDropsRef.current
        pendingDropsRef.current = []
        buffered.forEach((files) => fn(files))
      }
    },
    []
  )

  // Focus bridge — callers can request focus before the chat has mounted.
  // The textarea registers its local ref callback and consumes one buffered
  // request as soon as it becomes available.
  const focusChatInputRef = useRef<(() => void) | null>(null)
  const pendingChatInputFocusRef = useRef(false)
  const focusChatInput = useCallback((): boolean => {
    if (focusChatInputRef.current) {
      focusChatInputRef.current()
      return true
    }

    pendingChatInputFocusRef.current = true
    return false
  }, [])
  const setFocusChatInputFunction = useCallback((fn: (() => void) | null) => {
    focusChatInputRef.current = fn
    if (fn && pendingChatInputFocusRef.current) {
      pendingChatInputFocusRef.current = false
      fn()
    }
  }, [])

  useEffect(() => {
    setEnabledInternal(enabled)
  }, [enabled])

  useEffect(() => {
    if (!open) {
      // A focus request belongs to the interaction that opened the panel.
      // Once that panel closes, replaying it on a later mount would steal
      // focus from whatever the user moved on to.
      pendingChatInputFocusRef.current = false
      setCanvasContent(null)
      // Resetting the layout and the entrance animation is the panel's own
      // job — see SidePanelProvider's matching effect.
    }
  }, [open])

  const openCanvas = useCallback(
    (content: CanvasContent) => {
      setCanvasContent(content)
      if (!open) {
        setOpen(true)
      }
    },
    [open, setOpen]
  )

  // No "restore the previous mode" bookkeeping: the panel's layout was never
  // overwritten by the canvas, so dropping the content lands back on it.
  const closeCanvas = useCallback(() => {
    setCanvasContent(null)
  }, [])

  const [activeGame, setActiveGame] = useState<"pong" | null>(null)
  const openGame = useCallback((game: "pong") => setActiveGame(game), [])
  const closeGame = useCallback(() => setActiveGame(null), [])

  // Hosted content lives in the panel, not here — the chat is simply what the
  // panel falls back to when nothing else has claimed it.
  const {
    activeContent: panelContent,
    restoringViewId: restoringPanelContentId,
  } = panel

  // An impression of the AI CHAT, not of the panel. Keyed on the chat actually
  // being the thing on screen: the panel also opens for hosted content, and
  // reporting that as a chat impression would count one per conversation
  // opened. Edge-triggered, so a re-render with the same state reports nothing.
  const wasAiChatVisibleRef = useRef(false)
  useEffect(() => {
    const isAiChatVisible =
      enabledInternal &&
      open &&
      panelContent === null &&
      restoringPanelContentId === null
    if (isAiChatVisible && !wasAiChatVisibleRef.current) {
      tracking?.onVisibility?.()
    }
    wasAiChatVisibleRef.current = isAiChatVisible
  }, [enabledInternal, open, panelContent, restoringPanelContentId, tracking])

  // Mounting hosted content is the panel's own operation; the one thing the AI
  // kit adds is that entering a hosted view leaves canvas mode — the two are
  // laid out in the same space, and the canvas would paint over the content.
  const setPanelContent = useCallback(
    (content: SidePanelContent | null) => {
      if (content) {
        setCanvasContent(null)
      }
      panel.present(content)
    },
    [panel]
  )

  return (
    <AiChatStateContext.Provider
      value={{
        enabled: enabledInternal,
        setEnabled: setEnabledInternal,
        mode,
        setMode,
        visualizationMode,
        setVisualizationMode,
        lockVisualizationMode,
        historyEnabled,
        footer,
        VoiceMode,
        setFooter,
        agent,
        setAgent,
        initialMessage,
        setInitialMessage,
        chatHeader,
        chatMessages,
        chatInput,
        chatOverlay,
        welcomeScreenSuggestions,
        setWelcomeScreenSuggestions,
        welcomeScreenCards,
        setWelcomeScreenCards,
        onThumbsUp,
        onThumbsDown,
        placeholders,
        setPlaceholders,
        disclaimer,
        tracking,
        entityRefs,
        canvasActions,
        canvasEntities,
        credits,
        employeeCredits,
        creditWarning,
        fileAttachments,
        onTranscribe,
        canvasContent,
        openCanvas,
        closeCanvas,
        activeGame,
        openGame,
        closeGame,
        isClarifying,
        setIsClarifying,
        fileDragOver,
        setFileDragOver,
        processDroppedFiles,
        setProcessDroppedFilesFunction,
        focusChatInput,
        setFocusChatInputFunction,
        pendingContext,
        setPendingContext,
        pendingQuote,
        setPendingQuote,
        setPanelContent,
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
  "fileDragOver",
  "lockVisualizationMode",
  "historyEnabled",
  "isClarifying",
])

const NULL_KEYS = new Set<ProviderKey>([
  "canvasContent",
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
  "chatOverlay",
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
  "onTranscribe",
  "onThumbsUp",
  "onThumbsDown",
])

const REAL_VALUES: Partial<AiChatProviderReturnValue> = {
  visualizationMode: "sidepanel",
  mode: "chat",
  placeholders: [],
  welcomeScreenSuggestions: [],
  welcomeScreenCards: [],
  focusChatInput: () => false,
}

/**
 * Fallback for the CHAT half only. The panel half always resolves — either to
 * a live panel or to `useSidePanel`'s own inert value — so a chat with no
 * provider still reports the real panel state around it.
 */
const noAiProviderValue = (prop: string) => {
  const key = prop as ProviderKey
  if (key in REAL_VALUES) {
    return REAL_VALUES[key]
  }
  if (NULL_KEYS.has(key)) {
    return null
  }
  if (UNDEFINED_KEYS.has(key)) {
    return undefined
  }
  if (FALSE_KEYS.has(key)) {
    return false
  }
  return noop
}

/**
 * Read the AiChat context.
 *
 * Composed from two providers: the chat's own state, and the side panel it
 * lives in. Returns an inert fallback for the chat half when no provider is
 * mounted — that case is intentional in `ApplicationFrame`, which renders
 * chat-aware components in both the AI-enabled tree and the promotion-chat
 * tree.
 */
export function useAiChat(): AiChatProviderReturnValue {
  const ai = useContext(AiChatStateContext)
  const panel = useSidePanel()

  return useMemo(() => {
    const sidePanel = aliasSidePanel(panel)
    if (ai) {
      return { ...ai, ...sidePanel } as AiChatProviderReturnValue
    }
    // No chat provider. Kept as a Proxy rather than a filled-in object so the
    // inert shape stays exhaustive without enumerating every key — the same
    // trade-off this fallback has always made.
    return new Proxy({} as AiChatProviderReturnValue, {
      get(_, prop) {
        if (typeof prop !== "string") {
          return undefined
        }
        if (prop in sidePanel) {
          return sidePanel[prop as keyof typeof sidePanel]
        }
        return noAiProviderValue(prop)
      },
    })
  }, [ai, panel])
}
