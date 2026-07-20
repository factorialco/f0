"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react"

import {
  isUserMessage,
  type F0ChatImageAttachment,
  type F0ChatMessage,
} from "../types"
import { useF0Chat } from "./F0ChatProvider"

/** Debounce before running a search as the user types. */
const SEARCH_DEBOUNCE_MS = 200
/** How long a reply jump keeps a message highlighted (search highlights persist). */
const JUMP_HIGHLIGHT_MS = 1600

/**
 * Ephemeral chat UI state is split into focused contexts so a change in one
 * concern doesn't re-render consumers of another. In particular, message rows
 * subscribe to `useChatHighlight` only — typing in search, changing the reply
 * target, or opening the image lightbox no longer re-renders the transcript.
 */

type ChatJumpContextValue = {
  /** Scroll to a message and briefly highlight it. */
  jumpToMessage: (id: string) => void
  /** The message list registers how to scroll to a given message id. */
  registerScrollToMessage: (fn: (id: string) => void) => void
}

type ChatHighlightedIdContextValue = {
  /** Message currently highlighted after a jump (reply quote or active search hit). */
  highlightedId: string | null
}

type ChatReplyContextValue = {
  /** Message being replied to (quoted in the composer), or null. */
  replyTo: F0ChatMessage | null
  setReplyTo: (message: F0ChatMessage | null) => void
}

type ChatEditContextValue = {
  /** Message being edited (reloaded into the composer), or null. */
  editingMessage: F0ChatMessage | null
  setEditingMessage: (message: F0ChatMessage | null) => void
}

type ChatDropContextValue = {
  /** The composer registers how to attach dropped files (window-wide drop). */
  registerFileDropHandler: (fn: (files: File[]) => void) => void
  /** Route files dropped anywhere on the panel to the composer. */
  dropFiles: (files: File[]) => void
}

type ChatImagePreviewContextValue = {
  /** The clicked message's images + the active index, or null when closed. */
  imagePreview: { images: F0ChatImageAttachment[]; index: number } | null
  /** Open the lightbox on a message's images, starting at `index`. */
  openImagePreview: (images: F0ChatImageAttachment[], index: number) => void
  closeImagePreview: () => void
  /** Move the lightbox to another image of the same message (wraps around). */
  setImagePreviewIndex: (index: number) => void
}

type ChatSearchContextValue = {
  /** Whether the header is in search mode. */
  searchOpen: boolean
  openSearch: () => void
  closeSearch: () => void
  searchQuery: string
  setSearchQuery: (query: string) => void
  /** True while a (debounced/async) search is in flight — show a spinner, not "no results". */
  searching: boolean
  /** 1-based index of the active match (0 when there are none). */
  matchCurrent: number
  /** Total number of matches for the current query. */
  matchTotal: number
  /** Move to the next (newer) / previous (older) match, wrapping around. */
  goToNextMatch: () => void
  goToPrevMatch: () => void
}

const ChatJumpContext = createContext<ChatJumpContextValue | null>(null)
const ChatHighlightedIdContext =
  createContext<ChatHighlightedIdContextValue | null>(null)
const ChatReplyContext = createContext<ChatReplyContextValue | null>(null)
const ChatEditContext = createContext<ChatEditContextValue | null>(null)
const ChatDropContext = createContext<ChatDropContextValue | null>(null)
const ChatImagePreviewContext =
  createContext<ChatImagePreviewContextValue | null>(null)
const ChatSearchContext = createContext<ChatSearchContextValue | null>(null)

/** Ephemeral, presentation-only chat UI state (reply target, jump-to-message, search). */
export const ChatUIProvider = ({
  children,
}: {
  children: ReactNode
}): ReactNode => {
  const { messages, searchMessages, loadMessageContext } = useF0Chat()

  const [replyTo, setReplyTo] = useState<F0ChatMessage | null>(null)
  const [editingMessage, setEditingMessage] = useState<F0ChatMessage | null>(
    null
  )
  const [highlightedId, setHighlightedId] = useState<string | null>(null)
  const scrollFnRef = useRef<((id: string) => void) | null>(null)
  const dropFnRef = useRef<((files: File[]) => void) | null>(null)
  const highlightTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const [imagePreview, setImagePreview] = useState<{
    images: F0ChatImageAttachment[]
    index: number
  } | null>(null)

  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [matchIds, setMatchIds] = useState<string[]>([])
  const [activeMatchIndex, setActiveMatchIndex] = useState(-1)
  const [searching, setSearching] = useState(false)

  // Latest-value refs so the search/navigation callbacks stay stable and read
  // fresh data inside async work without re-subscribing.
  const messagesRef = useRef(messages)
  messagesRef.current = messages
  const searchFnRef = useRef(searchMessages)
  searchFnRef.current = searchMessages
  const loadCtxRef = useRef(loadMessageContext)
  loadCtxRef.current = loadMessageContext
  const matchIdsRef = useRef<string[]>(matchIds)
  matchIdsRef.current = matchIds
  const activeIndexRef = useRef(activeMatchIndex)
  activeIndexRef.current = activeMatchIndex
  // Guards against an out-of-order async search result overwriting a newer one.
  const searchRunRef = useRef(0)
  // Cache of lowercased bodies for the client-side search fallback, so a scan
  // doesn't allocate a lowercased copy of every message on each keystroke.
  const lowerBodyCache = useRef(new WeakMap<F0ChatMessage, string>())

  useEffect(
    () => () => {
      if (highlightTimer.current) clearTimeout(highlightTimer.current)
    },
    []
  )

  const registerScrollToMessage = useCallback((fn: (id: string) => void) => {
    scrollFnRef.current = fn
  }, [])

  const registerFileDropHandler = useCallback((fn: (files: File[]) => void) => {
    dropFnRef.current = fn
  }, [])

  const dropFiles = useCallback((files: File[]) => {
    dropFnRef.current?.(files)
  }, [])

  const openImagePreview = useCallback(
    (images: F0ChatImageAttachment[], index: number) =>
      setImagePreview({ images, index }),
    []
  )
  const closeImagePreview = useCallback(() => setImagePreview(null), [])
  const setImagePreviewIndex = useCallback(
    (index: number) =>
      setImagePreview((prev) => (prev ? { ...prev, index } : prev)),
    []
  )

  /** Scroll to a message and highlight it; `persist` keeps the ring (search). */
  const scrollAndHighlight = useCallback((id: string, persist: boolean) => {
    scrollFnRef.current?.(id)
    setHighlightedId(id)
    if (highlightTimer.current) clearTimeout(highlightTimer.current)
    if (!persist) {
      highlightTimer.current = setTimeout(
        () => setHighlightedId(null),
        JUMP_HIGHLIGHT_MS
      )
    }
  }, [])

  const jumpToMessage = useCallback(
    (id: string) => {
      // A reply quote can point far up, beyond the loaded window. Pull the
      // message in first (same as search), then scroll + highlight — so the
      // jump lands precisely and the highlight timer starts once it can show.
      // Already-loaded messages scroll immediately, with no reload flicker.
      const loaded = messagesRef.current.some((message) => message.id === id)
      const load = loadCtxRef.current
      if (!loaded && load)
        void load(id).then(() => scrollAndHighlight(id, false))
      else scrollAndHighlight(id, false)
    },
    [scrollAndHighlight]
  )

  /** Focus a match: pull it into the loaded window if needed, then scroll + ring. */
  const navigateToMatch = useCallback(
    (index: number, ids: string[] = matchIdsRef.current) => {
      const id = ids[index]
      if (id == null) return
      setActiveMatchIndex(index)
      const focus = () => scrollAndHighlight(id, true)
      const load = loadCtxRef.current
      if (load) void load(id).then(focus)
      else focus()
    },
    [scrollAndHighlight]
  )

  // Debounced search: server-side via `searchMessages` when provided, else a
  // client-side substring scan over the loaded messages.
  useEffect(() => {
    if (!searchOpen) return
    const q = searchQuery.trim()
    if (q === "") {
      setMatchIds([])
      setActiveMatchIndex(-1)
      setSearching(false)
      setHighlightedId(null)
      return
    }
    // Mark as searching immediately (covers the debounce + async window) so the
    // UI shows a spinner rather than flashing "no results" mid-search.
    setSearching(true)
    const runId = ++searchRunRef.current
    const timer = setTimeout(() => {
      const apply = (ids: string[]) => {
        if (runId !== searchRunRef.current) return // a newer query superseded us
        setMatchIds(ids)
        setSearching(false)
        if (ids.length > 0) navigateToMatch(ids.length - 1, ids)
        else {
          setActiveMatchIndex(-1)
          setHighlightedId(null)
        }
      }
      const fn = searchFnRef.current
      if (fn) {
        void fn(q).then((res) => apply(res.map((r) => r.id)))
      } else {
        const needle = q.toLowerCase()
        const cache = lowerBodyCache.current
        apply(
          messagesRef.current
            .filter((m) => {
              // System rows aren't searchable content (narrow BEFORE reading
              // user-message-only fields like `deleted`).
              if (!isUserMessage(m) || m.deleted) return false
              let lower = cache.get(m)
              if (lower === undefined) {
                lower = m.body.toLowerCase()
                cache.set(m, lower)
              }
              return lower.includes(needle)
            })
            .map((m) => m.id)
        )
      }
    }, SEARCH_DEBOUNCE_MS)
    return () => clearTimeout(timer)
  }, [searchQuery, searchOpen, navigateToMatch])

  const openSearch = useCallback(() => setSearchOpen(true), [])

  const closeSearch = useCallback(() => {
    searchRunRef.current++ // cancel any in-flight result
    setSearchOpen(false)
    setSearchQuery("")
    setMatchIds([])
    setActiveMatchIndex(-1)
    setSearching(false)
    setHighlightedId(null)
  }, [])

  const goToNextMatch = useCallback(() => {
    const ids = matchIdsRef.current
    if (ids.length === 0) return
    navigateToMatch((activeIndexRef.current + 1) % ids.length, ids)
  }, [navigateToMatch])

  const goToPrevMatch = useCallback(() => {
    const ids = matchIdsRef.current
    if (ids.length === 0) return
    navigateToMatch((activeIndexRef.current - 1 + ids.length) % ids.length, ids)
  }, [navigateToMatch])

  const matchTotal = matchIds.length
  const matchCurrent = activeMatchIndex >= 0 ? activeMatchIndex + 1 : 0

  // Jump API is stable (never changes after mount) so reply quotes / the
  // transcript that only need it don't re-render when the highlight moves.
  const jumpValue = useMemo<ChatJumpContextValue>(
    () => ({ jumpToMessage, registerScrollToMessage }),
    [jumpToMessage, registerScrollToMessage]
  )
  // Isolated so only the highlighted row (ChatMessageItem) re-renders on a jump.
  const highlightedIdValue = useMemo<ChatHighlightedIdContextValue>(
    () => ({ highlightedId }),
    [highlightedId]
  )
  const replyValue = useMemo<ChatReplyContextValue>(
    () => ({ replyTo, setReplyTo }),
    [replyTo]
  )
  const editValue = useMemo<ChatEditContextValue>(
    () => ({ editingMessage, setEditingMessage }),
    [editingMessage]
  )
  const dropValue = useMemo<ChatDropContextValue>(
    () => ({ registerFileDropHandler, dropFiles }),
    [registerFileDropHandler, dropFiles]
  )
  const imagePreviewValue = useMemo<ChatImagePreviewContextValue>(
    () => ({
      imagePreview,
      openImagePreview,
      closeImagePreview,
      setImagePreviewIndex,
    }),
    [imagePreview, openImagePreview, closeImagePreview, setImagePreviewIndex]
  )
  const searchValue = useMemo<ChatSearchContextValue>(
    () => ({
      searchOpen,
      openSearch,
      closeSearch,
      searchQuery,
      setSearchQuery,
      searching,
      matchCurrent,
      matchTotal,
      goToNextMatch,
      goToPrevMatch,
    }),
    [
      searchOpen,
      openSearch,
      closeSearch,
      searchQuery,
      searching,
      matchCurrent,
      matchTotal,
      goToNextMatch,
      goToPrevMatch,
    ]
  )

  return (
    <ChatJumpContext.Provider value={jumpValue}>
      <ChatHighlightedIdContext.Provider value={highlightedIdValue}>
        <ChatReplyContext.Provider value={replyValue}>
          <ChatEditContext.Provider value={editValue}>
            <ChatDropContext.Provider value={dropValue}>
              <ChatImagePreviewContext.Provider value={imagePreviewValue}>
                <ChatSearchContext.Provider value={searchValue}>
                  {children}
                </ChatSearchContext.Provider>
              </ChatImagePreviewContext.Provider>
            </ChatDropContext.Provider>
          </ChatEditContext.Provider>
        </ChatReplyContext.Provider>
      </ChatHighlightedIdContext.Provider>
    </ChatJumpContext.Provider>
  )
}

function useCtx<T>(ctx: React.Context<T | null>, name: string): T {
  const value = useContext(ctx)
  if (!value) {
    throw new Error(`${name} must be used within a ChatUIProvider`)
  }
  return value
}

/** Stable jump API (scroll-to + register). Consumed by the transcript, reply
 * quotes and the reply chip — none re-render when the highlight moves. */
export const useChatJump = (): ChatJumpContextValue =>
  useCtx(ChatJumpContext, "useChatJump")

/** The currently highlighted message id. Consumed only by the message row so a
 * jump re-renders just that row. */
export const useChatHighlightedId = (): ChatHighlightedIdContextValue =>
  useCtx(ChatHighlightedIdContext, "useChatHighlightedId")

/** Reply-target state. Consumed by the composer and message actions. */
export const useChatReply = (): ChatReplyContextValue =>
  useCtx(ChatReplyContext, "useChatReply")

/** Edit-target state. Consumed by the composer and message actions. Editing and
 * replying are mutually exclusive — the action handlers clear one when setting
 * the other. */
export const useChatEdit = (): ChatEditContextValue =>
  useCtx(ChatEditContext, "useChatEdit")

/** Window-wide file-drop routing. Consumed by the shell and composer. */
export const useChatDrop = (): ChatDropContextValue =>
  useCtx(ChatDropContext, "useChatDrop")

/** Image lightbox state. Consumed by attachments and the preview overlay. */
export const useChatImagePreview = (): ChatImagePreviewContextValue =>
  useCtx(ChatImagePreviewContext, "useChatImagePreview")

/** In-conversation search state. Consumed by the header and its search bar. */
export const useChatSearch = (): ChatSearchContextValue =>
  useCtx(ChatSearchContext, "useChatSearch")
