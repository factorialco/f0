import {
  type RefObject,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react"

type ScrollMessage = { id: string; isMine?: boolean }

type UseChatScrollOptions = {
  viewportRef: RefObject<HTMLDivElement | null>
  endRef: RefObject<HTMLDivElement | null>
  /** Ordered messages — used to detect append (stick) vs prepend (retain). */
  messages: ScrollMessage[]
  hasMoreOlder: boolean
  loadingOlder: boolean
  onReachTop: () => void
}

type UseChatScrollReturn = {
  /** True when scrolled far enough up to warrant a jump-to-bottom affordance. */
  scrolledUp: boolean
  /** True when the latest messages are visible (used to gate mark-as-read). */
  atBottom: boolean
  scrollToBottom: (behavior?: ScrollBehavior) => void
  handleScroll: () => void
}

const NEAR_BOTTOM_PX = 80
const TOP_TRIGGER_PX = 120

/**
 * Scroll behaviour for the message list: jump-to-bottom detection, auto-stick on
 * new messages (always when I send, otherwise only if already near the bottom),
 * infinite-scroll-up (load older) with scroll-position retention, and an
 * `atBottom` flag the container combines with hover to mark messages as read.
 */
export function useChatScroll({
  viewportRef,
  endRef,
  messages,
  hasMoreOlder,
  loadingOlder,
  onReachTop,
}: UseChatScrollOptions): UseChatScrollReturn {
  const [scrolledUp, setScrolledUp] = useState(false)
  const [atBottom, setAtBottom] = useState(true)
  const nearBottomRef = useRef(true)
  const prevFirstIdRef = useRef<string | null>(messages[0]?.id ?? null)
  const prevLastIdRef = useRef<string | null>(messages.at(-1)?.id ?? null)
  const prevLenRef = useRef(messages.length)
  const prevScrollHeightRef = useRef(0)
  const didInitialScrollRef = useRef(false)

  const scrollToBottom = useCallback(
    (behavior: ScrollBehavior = "smooth") => {
      endRef.current?.scrollIntoView({ behavior })
    },
    [endRef]
  )

  const handleScroll = useCallback(() => {
    const el = viewportRef.current
    if (!el) return
    const { scrollTop, scrollHeight, clientHeight } = el
    const distanceFromBottom = scrollHeight - scrollTop - clientHeight
    const isAtBottom = distanceFromBottom < NEAR_BOTTOM_PX
    nearBottomRef.current = isAtBottom
    setAtBottom(isAtBottom)
    setScrolledUp(distanceFromBottom > clientHeight * 0.5)
    if (scrollTop < TOP_TRIGGER_PX && hasMoreOlder && !loadingOlder) {
      prevScrollHeightRef.current = scrollHeight
      onReachTop()
    }
  }, [viewportRef, hasMoreOlder, loadingOlder, onReachTop])

  useLayoutEffect(() => {
    const el = viewportRef.current
    if (!el) return

    if (!didInitialScrollRef.current && messages.length > 0) {
      endRef.current?.scrollIntoView({ behavior: "auto" })
      setAtBottom(true)
      didInitialScrollRef.current = true
      prevFirstIdRef.current = messages[0]?.id ?? null
      prevLastIdRef.current = messages.at(-1)?.id ?? null
      prevLenRef.current = messages.length
      return
    }

    const firstId = messages[0]?.id ?? null
    const lastMessage = messages.at(-1)
    const grew = messages.length > prevLenRef.current
    const prepended = grew && firstId !== prevFirstIdRef.current
    const appended = grew && lastMessage?.id !== prevLastIdRef.current

    if (prepended && prevScrollHeightRef.current) {
      el.scrollTop += el.scrollHeight - prevScrollHeightRef.current
      prevScrollHeightRef.current = 0
    } else if (appended && (lastMessage?.isMine || nearBottomRef.current)) {
      // Always follow my own messages; follow incoming ones only if already near
      // the bottom (otherwise they accumulate as unread).
      endRef.current?.scrollIntoView({ behavior: "smooth" })
      setAtBottom(true)
    }

    prevFirstIdRef.current = firstId
    prevLastIdRef.current = lastMessage?.id ?? null
    prevLenRef.current = messages.length
  }, [messages, viewportRef, endRef])

  return { scrolledUp, atBottom, scrollToBottom, handleScroll }
}
