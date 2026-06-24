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

import { type F0ChatMessage } from "../types"
import { useF0Chat } from "./F0ChatProvider"

/** Debounce before running a search as the user types. */
const SEARCH_DEBOUNCE_MS = 200
/** How long a reply jump keeps a message highlighted (search highlights persist). */
const JUMP_HIGHLIGHT_MS = 1600

type ChatUIContextValue = {
  /** Message being replied to (quoted in the composer), or null. */
  replyTo: F0ChatMessage | null
  setReplyTo: (message: F0ChatMessage | null) => void
  /** Message currently highlighted after a jump (reply quote or active search hit). */
  highlightedId: string | null
  /** Scroll to a message and briefly highlight it. */
  jumpToMessage: (id: string) => void
  /** The message list registers how to scroll to a given message id. */
  registerScrollToMessage: (fn: (id: string) => void) => void
  /** The composer registers how to attach dropped files (window-wide drop). */
  registerFileDropHandler: (fn: (files: File[]) => void) => void
  /** Route files dropped anywhere on the panel to the composer. */
  dropFiles: (files: File[]) => void

  // In-conversation search (header search bar).
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

const ChatUIContext = createContext<ChatUIContextValue | null>(null)

/** Ephemeral, presentation-only chat UI state (reply target, jump-to-message, search). */
export const ChatUIProvider = ({
  children,
}: {
  children: ReactNode
}): ReactNode => {
  const { messages, searchMessages, loadMessageContext } = useF0Chat()

  const [replyTo, setReplyTo] = useState<F0ChatMessage | null>(null)
  const [highlightedId, setHighlightedId] = useState<string | null>(null)
  const scrollFnRef = useRef<((id: string) => void) | null>(null)
  const dropFnRef = useRef<((files: File[]) => void) | null>(null)
  const highlightTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

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
    (id: string) => scrollAndHighlight(id, false),
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
        apply(
          messagesRef.current
            .filter((m) => !m.deleted && m.body.toLowerCase().includes(needle))
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

  const value = useMemo<ChatUIContextValue>(
    () => ({
      replyTo,
      setReplyTo,
      highlightedId,
      jumpToMessage,
      registerScrollToMessage,
      registerFileDropHandler,
      dropFiles,
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
      replyTo,
      highlightedId,
      jumpToMessage,
      registerScrollToMessage,
      registerFileDropHandler,
      dropFiles,
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
    <ChatUIContext.Provider value={value}>{children}</ChatUIContext.Provider>
  )
}

export function useChatUI(): ChatUIContextValue {
  const ctx = useContext(ChatUIContext)
  if (!ctx) {
    throw new Error("useChatUI must be used within a ChatUIProvider")
  }
  return ctx
}
